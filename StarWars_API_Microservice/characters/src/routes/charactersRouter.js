const { Router } = require("express");
const axios = require("axios");

const characterRouter = Router();

characterRouter.get("/", async (req, res) => {
  try {
    
    const response = await axios.get("http://database:8004/Character");
    const characters = response.data;
    res.status(200).json(characters);
  } catch (error) {
    res.status(500).json({ error: "No se pudo obtener la información de los personajes" });
  }
});

characterRouter.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const url = `http://database:8004/Character/${id}`;
    const response = await axios.get(url);
    const characters = response.data;
    res.status(200).json(characters);
  } catch (error) {
    res.status(500).json({ error: "No se pudo obtener la información de los personajes" });
  }
});



module.exports = characterRouter;