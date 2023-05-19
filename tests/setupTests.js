import server from 'nextjs-http-supertest';
import { closeConnections } from '../API-controllers/helpers/db';

afterAll(() => {
  server.close();
  closeConnections();
});

export default server;
