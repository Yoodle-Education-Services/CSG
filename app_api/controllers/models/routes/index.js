const express = require('express');
const router = express.Router;
const ctrlOrigins = require('../controllers/origins');
const ctrlStores = require('../controllers/stores')
//origins
.route('/origins')
.post(ctrlOrigins.originsCreate);
router
 .route('/origins/:originid')
 .get(ctrlOrigins.originsReadone)
 .put(ctrlOrigins.originsUpdateone)
 .delete(ctrlOrigins.originsDelete);
 //stores
 router
  .route('origins/:originsid/stores/:storeid')
  .post(ctrlStores.storesCreate);
router
 .route('/origins/:originid/stores/:storeid')
 .get(ctrlStores.storesReadone)
 .put(ctrlStores.storesUpdateone)
 .delete(ctrlStores.storesDeleteone);
 module.exports = router;   