import * as debug from 'debug';
import ServerApp from './ServerApp';

debug('ts-express:server');

// express 서버.
const app: ServerApp = new ServerApp();
app.initialize();
app.createServer();