import "dotenv/config"
import express, { Router } from  'express';
import connetDB from "./config/db.js";
import vehiculosRouter from "./routers/vehiculos.js";
import dns from 'node:dns';
if (process.env.NODE_ENV !== 'production') {
  dns.setServers(['8.8.8.8', '8.8.4.4']);
}

const server = express();
const PORT = process.env.PORT || 3200;

connetDB();

server.use(express.json());
server.use('/vehiculos', vehiculosRouter);

server.get('/', (req, res) => {
    res.status(204).send();
});


server.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
});