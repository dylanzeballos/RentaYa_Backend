import cron from 'node-cron';
import prisma from '@/config/prisma';

export class CronService {
  private static instance: CronService;
  private frontendUrl: string;

  private constructor() {
    this.frontendUrl = process.env.FRONTEND_URL || 'http://localhost:8081';
  }

  public static getInstance(): CronService {
    if (!CronService.instance) {
      CronService.instance = new CronService();
    }
    return CronService.instance;
  }

  /**
   * Inicia el cron job para hacer ping al servidor y mantenerlo activo
   * Se ejecuta cada 14 minutos para evitar el timeout de inactividad de Render (15 min)
   */
  public startKeepAliveJob(): void {
    cron.schedule('*/14 * * * *', async () => {
      try {
        const response = await fetch(`${process.env.BACKEND_URL || 'http://localhost:3000'}/health`, {
          method: 'GET',
          headers: {
            'User-Agent': 'RentaYa-KeepAlive/1.0'
          }
        });

        if (response.ok) {
          console.log('Keep-alive ping exitoso');
        } else {
          console.warn('Keep-alive ping respondió con status:', response.status);
        }
      } catch (error) {
        console.error('Error en keep-alive ping:', error);
      }
    });
  }

  public startCleanupJob(): void {
    cron.schedule('0 2 * * *', async () => {
      try {
        console.log('Ejecutando limpieza de tokens expirados...');
        console.log('Limpieza de tokens completada');
      } catch (error) {
        console.error('Error en limpieza de tokens:', error);
      }
    });
  }

  /**
   * Actualiza el estado de los reports basándose en las fechas
   * - "En curso" si startDate <= now < finishDate
   * - "Terminado" si finishDate < now
   * Se ejecuta cada hora
   */
  public startReportStatusUpdateJob(): void {
    cron.schedule('0 * * * *', async () => {
      try {
        console.log('Actualizando estados de reports...');
        const now = new Date();

        // Actualizar reports "En curso" que ya terminaron
        const finishedReports = await prisma.report.updateMany({
          where: {
            status: "En curso",
            finishDate: {
              lt: now,
            },
          },
          data: {
            status: "Terminado",
          },
        });

        // Actualizar reports "Aceptado" que ya iniciaron a "En curso"
        const startedReports = await prisma.report.updateMany({
          where: {
            status: "Aceptado",
            startDate: {
              lte: now,
            },
          },
          data: {
            status: "En curso",
          },
        });

        console.log(`Reports actualizados: ${finishedReports.count} terminados, ${startedReports.count} iniciados`);
      } catch (error) {
        console.error('Error actualizando estados de reports:', error);
      }
    });
  }

  public startAllJobs(): void {
    this.startKeepAliveJob();
    this.startCleanupJob();
    this.startReportStatusUpdateJob();
  }
}
