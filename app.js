const express = require("express");
const connectDB = require("./db/connect");
const userRouter=require('./routes/userRouter')
const app = express();

const port = process.env.PORT || 5000;

require("dotenv").config();

const cors = require("cors");
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Webingo");
});

app.use('/api/v1/user',userRouter)

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    const server=await app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
    const io=require('socket.io')(server,{
      pingTimeout:60000,
      cors: {
        origin: "http://localhost:5173"
    }
    })
    io.on('connection',(socket)=>{
      console.log('connected socket')
      socket.on("setup",(vender_id)=>{
        socket.join(vender_id)
        socket.emit("connected");
      })
      socket.on('join chat',(vender_id)=>{
        socket.join(vender_id);
         console.log("User Joined Room: ");
      })
      socket.on('send_time',async())

    })



  } catch (error) {
    console.log(error);
  }
};

start();
