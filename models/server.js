import express from "express";
import "dotenv/config";

export class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 30001;
    this.Middlewares();
    this.routes()
  }

  routes() {
    this.app.get("/", (req, res) => {
      res.send({
        message: "hola mundo desde mi servidor.",
      })
    });
  }

  //metodo 3 de mi clase server
  Middlewares(){
    this.app.use(express.static("public"));
  }

  // primer metodo de mi clase server
  listen() {
    this.app.listen(this.port, () => {
      console.log(`servidor corriendo en el puerto ${this.port}`);
    });
  }
}

export default Server;
