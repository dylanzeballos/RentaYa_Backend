import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import { Server as SocketIOServer } from 'socket.io';
import { createMessageRoutes } from '@/features/messaging/infrastructure/routes/messageRoutes';
import { createUserRoutes } from '@/features/user/infrastructure/routes/userRoutes';
import { MessageController } from '@/features/messaging/infrastructure/controllers/MessageController';
import { UserController } from '@/features/user/infrastructure/controllers/UserController';
import { GetMessagesUseCase } from '@/features/messaging/application/usecases/GetMessagesUseCase';
import { CreateUserUseCase } from '@/features/user/application/usecases/CreateUserUseCase';
import { MessageRepository } from '@/features/messaging/infrastructure/repositories/MessageRepository';
import { UserRepository } from '@/shared/infrastructure/repositories/UserRepository';
import prisma from '@/config/prisma';
import { errorHandler } from '@/shared/infrastructure/middleware/errorHandler';

const app = express();
const server = createServer(app);
const io = new SocketIOServer(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

io.on('connection', (socket) => {
    console.log(`Usuario conectado: ${socket.id}`);
    
    socket.on('join_room', (room) => {
        socket.join(room);
        console.log(`Usuario ${socket.id} se unió a la sala ${room}`);
    });
    
    socket.on('send_message', (data) => {
        socket.to(data.room).emit('receive_message', data);
    });
    
    socket.on('disconnect', () => {
        console.log(`Usuario desconectado: ${socket.id}`);
    });
});

app.set('io', io);

const messageRepository = new MessageRepository();
const userRepository = new UserRepository(prisma);

const getMessagesUseCase = new GetMessagesUseCase(messageRepository);
const createUserUseCase = new CreateUserUseCase(userRepository);

const messageController = new MessageController(getMessagesUseCase);
const userController = new UserController(createUserUseCase);

app.use('/api/messages', createMessageRoutes(messageController));
app.use('/api/users', createUserRoutes(userController));

app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', message: 'Server is running' });
});

app.use(errorHandler);

const port = process.env.PORT || 3000;

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
    console.log(`WebSocket server ready`);
});