import { Server as HTTPServer } from 'http';
import { Server as IOServer, Socket } from 'socket.io';

let io: IOServer | null = null;

export function initSocket(server: HTTPServer) {
  if (io) return io;

  io = new IOServer(server, {
    cors: {
      origin: process.env.FRONTEND_URL || '*',
      methods: ['GET', 'POST'],
      credentials: true,
    },
  });

  io.on('connection', (socket: Socket) => {
    console.log('Socket connected:', socket.id);

    socket.on('subscribe', (payload: { userId?: string }) => {
      try {
        const userRoom = `user:${payload?.userId}`;
        if (payload?.userId) {
          socket.join(userRoom);
          console.log(`Socket ${socket.id} joined room ${userRoom}`);
        }
      } catch (e) {
        console.error('Error subscribing to room', e);
      }
    });

    socket.on('unsubscribe', (payload: { userId?: string }) => {
      try {
        const userRoom = `user:${payload?.userId}`;
        if (payload?.userId) {
          socket.leave(userRoom);
          console.log(`Socket ${socket.id} left room ${userRoom}`);
        }
      } catch (e) {
        console.error('Error unsubscribing from room', e);
      }
    });

    socket.on('disconnect', (reason) => {
      console.log('Socket disconnected:', socket.id, 'reason:', reason);
    });
  });

  return io;
}

export function emitNotificationToUsers(userIds: string[], payload: any) {
  if (!io) {
    console.warn('Socket.IO not initialized — cannot emit notification');
    return;
  }

  for (const userId of userIds) {
    const room = `user:${userId}`;
    io.to(room).emit('notification', payload);
  }
}

export function getIo() {
  return io;
}
