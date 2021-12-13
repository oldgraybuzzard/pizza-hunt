const router = require('express').Router();
const {
  getAllPizza,
  getPizzaById,
  createPizza,
  updatePizza,
  deletePizza
} = require('../../controllers/pizza-controller');

//setup GET all and pOST at /api/pizzas
router
  .route('/')
  .get(getAllPizza)
  .post(createPizza);

//setup GET one, PUT, DELTE at /api/pizzas
router
  .route('/:id')
  .get(getPizzaById)
  .put(updatePizza)
  .delete(deletePizza);

  module.exports = router;
