import Server from "./models/server.model.js";
import 'dotenv/config.js'

const server = new Server();
server.listen();