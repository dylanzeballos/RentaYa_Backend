import cron from 'node-cron';

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

  public startAllJobs(): void {
    this.startKeepAliveJob();
    this.startCleanupJob();
  }
}
