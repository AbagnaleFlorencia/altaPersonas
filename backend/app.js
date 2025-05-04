import express from 'express';
import sequelize from './db.js';
import cors from 'cors';
import Persona from './models/Persona.js';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors()); // EN los parentesis podriamos incluir UN OBJETO QUE SEA LA CONFIGURACION PARA CIERTOS DOMINIOS

//Iniciar base de datos
sequelize.sync();


// IMPLEMENTO UN GET para traer todas las personas cuando haga la peticion
app.get('/api/personas', async (req, res) => {
   const personas = await Persona.findAll()
   res.json(personas)
})

// Ej: /api/personas/25
app.get('/api/personas/:id', async (req, res)=>{
    const id = req.params.id;
    const persona = await Persona.findByPk(id)
    res.json(persona)
})

//Uso POST /api/personas para crear e insertar personas en la tabla.
app.post('/api/personas/', async (req, res) => {
    const datosPersona = req.body;
    const nuevaPersona = await Persona.create(datosPersona);
    res.status(201).json(nuevaPersona); // en este caso en ves de hacer res.send, hacemos res.status 201 
    //que es creado y .json es como si fuera .send para responder, como aprametro a ese .json le estamos
    //pasando el objeto nuevaPersona.
})

app.put('/api/personas/:id', async (req, res) => {
    const datosPersona = req.body
    const id = req.params.id
    const persona = await Persona.findByPk(id)
    if (persona){
        persona.edad = datosPersona.edad
        await persona.save()
        res.status(200)
    }else{
        res.status(404)
    }
})

app.delete('/api/personas/:id', async (req, res) => {
    const id = req.params.id
    const persona = await Persona.findByPk(id)
    if(persona){
        await persona.destroy()
        res.sendStatus(200)
    }else{
        res.sendStatus(404)
    }
})



app.listen(PORT, ()=>{
    console.log(`El servidor está escuchando en el puerto ${PORT}`)
})

