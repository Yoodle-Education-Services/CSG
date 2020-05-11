const express = require('express');
const router = express.Router();
const ctrlOrigins = require('../controllers/origins');
const ctrlStores = require('../controllers/stores');
//origins
router
.route('/origins')
.get(ctrlOrigins.originsListByOrigin)
.post(ctrlOrigins.originsCreate);
router
 .route('/origins/:originid')
 .get(ctrlOrigins.originsReadone)
 .put(ctrlOrigins.originsUpdateone)
 .delete(ctrlOrigins.originsDeleteone);
 //stores
 router
  .route('origins/:originid/stores')
  .post(ctrlStores.storesCreate);
router
 .route('/origins/:originid/stores/:storeid')
 .get(ctrlStores.storesReadone)
 .put(ctrlStores.storesUpdateone)
 .delete(ctrlStores.storesDeleteone);
 module.exports = router;   