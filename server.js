import express from "express";
import "dotenv/config";
import cors from 'cors'

export class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 30001;
    this.Middlewares();
    this.routes()
  }

  routes() {
    this.app.get("/api", (req, res) => {
      res.json({
        message: "GET - server",
      })
    });


    this.app.post("/api", (req, res) => {
      res.json({
        message: "POST - server",
      })
    });


    this.app.put("/api", (req, res) => {
      res.json({
        message: "PUT - server",
      })
    });


    this.app.delete("/api", (req, res) => {
        res.json({
          message: "DELETE - server",
        })
      });

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
