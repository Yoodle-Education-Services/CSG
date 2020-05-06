const mongoose = require('mongoose');
const Ori = mongoose.model('Origin');
const originsCreate = (req, res) => {
    Ori.creat({
      name: req.body.name,
      backgroundimage: req.body.backgroundimage
    },
    (err, origin) => {
      if (err) {
        res
          .status(400)
          .json(err);
      } else {
        res
          .status(201)
          .json(origin);
      }
    });
  };
  const originsReadone = (req, res) => {
    Ori
      .findById(req.params.originid)
      .exec((err, origin) => {
        if (!origin) {
          return res
            .status(404)
            .json({"message": "origin not found"});
        } else if (err) {
          return res
            .status(404)
            .json(err);
        } else {
          return res
            .status(200)
            .json(origin);
        }
    });
  };
  const originsUpdateone = (req, res) => {
    if (!req.params.originid) {
      return res
        .status(404)
        .json({
          "message": "Not found, originid is required"
        });
    }
    Ori
      .findById(req.params.originid)
      .select('-stores')
      .exec((err, origin) => {
        if (!origin) {
          return res
            .status(404)
            .json({
              "message": "originid not found"
            });
        } else if (err) {
          return res
            .status(400)
            .json(err);
        }
        origin.name = req.body.name;
        origin.backgroundimage = req.body.backgroundimage;
        origin.save((err, ori) => {
          if (err) {
            res
              .status(404)
              .json(err);
          } else {
            res
              .status(200)
              .json(ori);
          }
        });
      }
    );
  };
  const originsDeleteone = (req, res) => {
    const {originid} = req.params;
    if (originid) {
      Ori
        .findByIdAndRemove(originid)
        .exec((err, origin) => {
            if (err) {
              return res
                .status(404)
                .json(err);
            }
            res
              .status(204)
              .json(null);
          }
      );
    } else {
      res
        .status(404)
        .json({
          "message": "No Origin"
        });
    }
  };
module.exports = {
    originsCreate, 
    originsReadone,
    originsUpdateone,
    originsDeleteone
};