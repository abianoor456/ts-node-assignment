import * as bodyParser from 'body-parser';
import * as express from 'express';
const dotenv = require('dotenv');
import * as mongoDB from "mongodb";
const mongoose = require('mongoose');
import router from './routes/index'


dotenv.config();

class App {
  public app: express.Application;
  public port: number;

  constructor( port) {
    this.app = express();
    this.port = port;
    this.app.use("/api", router);
    this.app.use(express.json())

    // this.postsmth();
    this.initializeMiddlewares();
    this.connectToTheDatabase();
  }

  // postsmth() {
  //   this.app.post('/lol',async(req, res)=>{
  //     console.log(req.body);
  //     console.log('in lol');
  //     res.send('done');
  //   })
  // }

  
  private async connectToTheDatabase() {
    await mongoose.connect(process.env.DB_CONN_STRING);
    if (mongoose.connection.readyState === 1)
      console.log('DB connected');

  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }

  private initializeMiddlewares() {
    this.app.use(bodyParser.json());
  }

}





export default App;
