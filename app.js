const express = require("express");
const connectDB = require("./db/connect");
const userRouter=require('./routes/userRouter')
const calculateTime=require('./controller/calculateTime')
const calculateDistance=require('./controller/calculateDistance')
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
      socket.on("setup",(order_id)=>{
        socket.join(order_id)
        socket.emit("connected");
      })
      socket.on('join chat',(order_id)=>{
        socket.join(order_id);
         console.log("User Joined Room");
      })
      socket.on('sendTime',async({order_id, lat_cus, lon_cus, lat_sup, lon_sup})=>{
              try {
                      const time=await calculateTime(lat_cus,lon_cus,lat_sup,lon_sup);
                      const distance=await calculateDistance(lat_cus,lon_cus,lat_sup,lon_sup);
                      // console.log(time)
                      io.to(order_id).emit('distanceUpdate', { time, distance,lat_sup, lon_sup });
              } catch (error) {
                console.error('Error calculating distance:', error);
              }
      })

    })



  } catch (error) {
    console.log(error);
  }
};

start();
