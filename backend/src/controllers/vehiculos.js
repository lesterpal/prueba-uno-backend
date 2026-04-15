import { constants } from "node:buffer";
import vehiculoModel from "../models/vehiculos.js";
import { log } from "node:console";

const vehiculosController = {
create: async (req, res)=>{
  try {
    const {placa, nombre, categoria, tiempoAlquiler, precio} = req.body;
    const newVehiculo = new vehiculoModel({
    placa, 
    nombre, 
    categoria, 
    tiempoAlquiler, 
    precio,
    });
    await newVehiculo.save();
    res.status(201).json({message: "Vehiculo creado"});
  } catch (error) {
    res.status(500).json({message: "Error al crear el vehiculo"});
  }
},
readAll: async (req, res)=>{
  try {
    const allVehiculos = await vehiculoModel.find();
    res.status(201).json({data: allVehiculos});
  } catch (error) {
    res.status(500).json({message: "Error al leer todos vehiculos"});
  }  
},
read: async (req, res)=>{
  try {
    const {id} = req.params;
    const vehiculoFound = await vehiculoModel.findById(id);
    if (!vehiculoFound) {
      res.status(404).json({massage: "Vehiculo no encontrado"})
    }else{
      res.status(201).json({data: vehiculoFound});
    }
  } catch (error) {
    res.status(500).json({message: "Error al leer vehiculo"});
  }
},
update: async (req, res)=>{
 try {
    const {id} = req.params;
    const {placa, nombre, categoria, tiempoAlquiler, precio} = req.body;
    const vehiculoUpdate = await vehiculoModel.findByIdAndUpdate(id,{
      placa, 
      nombre, 
      categoria, 
      tiempoAlquiler, 
      precio
    });
    if (!vehiculoUpdate) {
      res.status(404).json({massage: "Vehiculo no encontrado"})
    }else{
      res.status(201).json({massage:'Vehiculo actualizado'});
    }
  } catch (error) {
    res.status(500).json({message: "Error al leer vehiculo"});
  }  
},
delete: async (req, res)=>{
  try { 
  const {id} = req.params;
  const vehiculoDeleted = await vehiculoModel.findByIdAndDelete(id);
      if (!vehiculoDeleted) {
      res.status(404).json({massage: "Vehiculo no encontrado"})
    }else{
      res.status(201).json({message: "Vehiculo eliminado"});
    }
  } catch (error) {
    res.status(500).json({message: "Error al eliminar el vehiculo"});
  }  
},
};

export default vehiculosController;