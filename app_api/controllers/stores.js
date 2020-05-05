const mongoose = require('mongoose');
const Ori = mongoose.model('Origin');
const storesCreate = (req, res) => {
  const originID = req.params.originid;
  if (originID) {
    Ori
    .findById(originID)
    .select('stores')
    .exe((err, origin) => {
    if (err) {
      res
      .status(400)
      .json(err);
    } else {
      doAddstore(req, res, origin);
    }
    });
    } else {
      res
      .status(404)
      .json({"message": "Origin not found"});
    }
  };
const doAddstore = (req, res, origin) => {
  if (!origin) {
    res
      .status(404)
      .json({"message": "Origin not found"});
  } else {
    const {name, address, city, state, zip, country, phone,website} = req.body;
    origin.stores.push({
      name, 
      address, 
      city, 
      state, 
      zip, 
      country, 
      phone,
      website
    });
    origin.save((err, origin) => {
      if (err) {
        res
          .status(400)
          .json(err);
      } else {
        res
          .status(201)
          .json(thisStore);
      }
    });
  }
};
  const storesReadone = (req, res) => {
    Ori
      .findById(req.params.originid)
      .select('name stores')
      .exec((err, origin) => {
        if (!origin) {
          return res
            .status(404)
            .json({"message": "origin not found"});
        } else if (err) {
          return res
            .status(400)
            .json(err);
        }
        if (origin.stores && origin.stores.length >0) {
          const store = origin.stores.id(req.params.storeid);
          if (!store) {
            return res 
            .status(400)
            .json({
              "message": "store not found"
            });
          } else {
            response = {
              origin : {
                name : origin.name,
                id : req.params.originid
              },
              store
            };
            return res 
              .status(200)
              .json(response);
          }
          } else { 
            return res 
               .status(404)
               .json({
                 "message": "No stores found"
               });
          }
        }
      );
      };   
  const storesUpdateone = (req, res) => {
    if (!req.params.originid || !req.params.streid) {
      return res
        .status(404)
        .json({
          "message": "Not found, originid and storeid are both required"
        });
    }
    Ori
      .findById(req.params.originid)
      .select('stores')
      .exec((err, origin) => {
        if (!origin) {
          return res
            .status(404)
            .json({
              "message": "Origin not found"
            });
        } else if (err) {
          return res
            .status(400)
            .json(err);
        }
        if(origin.stores && origin.stores.length > 0){
          const thisStore = origin.stores.id(req.params.storesid);
          if (!thisStore) {
             res
              .status(404)
              .json({"message": "Store not found"});
          } else {
            thisStore.name = req.body.name;
            thisStore.address = req.body.address;
            thisStore.city = req.body.city;
            thisStore.state = req.body.state;
            thisStore.zip = req.body.zip;
            thisStore.country = req.body.country;
            thisStore.phone = req.body.phone;
            thisStore.website = req.body.website;
            origin.save((err, origin) => {
              if (err) {
                res
                .status(404)
                .json(err);
               } else {
                 res
                 .json({"message": "No store to UpdateOne"});
               } 
              });
  const storesDeleteone = (req, res) => {
    const {originid, storeid} = req.params;
    if (originid || storeid) {
      return res
        .status(404)
        .json({'message': 'Not found, originid and storeid are both required'});
    }
      Ori
        .findByIdAndRemove(originid)
        .select('stores')
        .exec((err, origin) => {
            if (!origin) {
              return res
                .status(404)
                .json({'message': 'Origin not found'});
            } else if (err) {
            return res
              .status(204)
              .json(err);
          }
          if (origin.stores && origin.stores.length > 0) {
            if (!origin.stores.id(storeid)){
              return res 
                .status(404)
                .json({'message': 'Store not found'});
            } else {
              origin.stores.id(storeid).remove();
              origin.save(err => {
                if (err) {
                  return res 
                  .status(404)
                  .json(err);
                } else {
                  res 
                    .status(404)
                    .json({'message': 'No Store to delete'});
                }
              })
            };
module.exports = {
    storesCreate,
    storesReadone,
    storesUpdateone,
    storesDeleteone
};