const { Router } = require("express");
const axios = require("axios");

const filmsRouter = Router();

filmsRouter.get("/", async (req, res) => {
  try {
    const respose = await axios.get("http://database:8004/Film")
    const films = respose.data;
    res.status(200).json(films);
    
  } catch (error) {
    res.status(500).json({ error: "No se pudo obtener la información de las peliculas" });
  }
});

filmsRouter.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const url = `http://database:8004/Film/${id}`;
    const respose = await axios.get(url);
    const film = respose.data;
    res.status(200).json(film);

  } catch (error) {
    res.status(500).json({ error: "No se pudo obtener la información de la pelicula" });
  
  }
})

module.exports = filmsRouter;
