import * as debug from 'debug';
import App from './App';

debug('ts-express:server');

// express 서버.
const app: App = new App();
app.initialize();
app.createServer();