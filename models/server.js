import express from "express";
import "dotenv/config";
import cors from 'cors'
import router from "../router/user.js";

export class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 30001;
    this.s();
    this.usuariosPasth = "/api/usuario";
  }

  routes() {

this.app.use(this.usuariosPasth, router)

  }

  //metodo 3 de mi clase server
  Middlewares(){
    this.app.use(cors());
    this.app.use(express.static("public"));
    this.app.use(express.json());
  }

  // primer metodo de mi clase server
  listen() {
    this.app.listen(this.port, () => {
      console.log(`servidor corriendo en el puerto ${this.port}`);
    });
  }
}

export default Server;
