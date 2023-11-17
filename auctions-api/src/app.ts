import cors from 'cors';
import express from 'express';
import { createServer } from 'http';
import morgan from 'morgan';
import { Server } from 'socket.io';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors());
app.use(morgan('dev'));

type Message = {
  text: string;
  userName: string;
}

const messages: Message[] = [
  { text: 'Curto hentai', userName: '@angelblack687' },
  { text: 'Que horror, Paulo!', userName: '@mdccg' },
];

export const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: process.env.CLIENT_URL,
  }
});

io.on('connection', (socket) => {
  console.log('Client connected');

  socket.emit('previousMessages', messages);

  socket.on('sendNewMessage' /* token escolhido pelo dev */, (messageObject: Message) => {
    console.log(messageObject);
    messages.push(messageObject);
    socket.broadcast.emit('messageReceived', messageObject);
  });
});