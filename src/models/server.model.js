import express from "express";
import routes from "../routes/index.routes.js";
import connectDB from "../database/db.connection.js";

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 4000;
    this.dbConnection();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(
      express.urlencoded({
        extended: false,
      })
    );
  }

  async dbConnection() {
    await connectDB();
  }

  routes() {
    this.app.use(routes);
  }

  listen() {
    this.app.listen(this.port, () => console.log(`sever on port ${this.port}`));
  }
}

export default Server;
