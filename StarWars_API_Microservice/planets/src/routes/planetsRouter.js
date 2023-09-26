const { Router } = require("express");
const axios = require("axios");

const planetsRouter = Router();

planetsRouter.get("/", async (req, res) => {
  try {
    const response = await axios.get("http://database:8004/Planet")
    const planets = response.data;
    res.status(200).json(planets);
  } catch (error) {
    res.status(500).json({ error: "No se pudo obtener la información de los planetas" });
  
    
  }
});

planetsRouter.get("/:id", async (req, res) => {
  try {
    const response = await axios.get(`http://database:8004/Planet/${req.params.id}`)
    const planet = response.data;
    res.status(200).json(planet);
  } catch (error) {
    res.status(500).json({ error: "No se pudo obtener la información del planeta" });
  
  }
})

module.exports = planetsRouter;
