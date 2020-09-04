const Drone = require("../modelsdb/model");
module.exports = {
  Gets(req, res) {
    try {
      const lm = req.query._limit != null ? parseInt(req.query._limit) : null;
      const pg =
        req.query._page != null ? (parseInt(req.query._page) - 1) * lm : null;
      const sort = req.query._sort != null ? req.query._sort : null;
      const order = req.query._order != null ? req.query._order : null;
      var ordenation = [];
      if (sort != null && order == null) {
        ordenation.push([sort]);
      } else if (sort == null && order != null) {
        ordenation.push(["id", order]);
      } else if (sort != null && order != null) {
        ordenation.push([sort, order]);
      }
      Drone.findAll({
        offset: pg,
        limit: lm,
        order: ordenation,
      })
        .then((drones) => res.json(drones))
        .catch((error) =>
          res.json({
            error: true,
            error: error,
          })
        );
    } catch (e) {
      res.status(500).send(e);
    }
  },
  GetId(req, res) {
    try {
      Drone.findByPk(req.params.id)
        .then((drone) => res.status(200).json(drone))
        .catch((error) =>
          res.status(404).json({
            error: true,
            error: error,
          })
        );
    } catch (e) {
      res.status(500).send(e);
    }
  },
  PutId(req, res) {
    try {
      var fly = parseInt(req.body.fly);

      var haserro = false;
      if (req.body.status != null) {
        switch (req.body.status) {
          case "charging":
            break;
          case "offline":
            break;
          case "failed":
            break;
          case "repair":
            break;
          case "success":
            break;
          default:
            haserro = true;
        }
      }
      if (req.body.fly != null) {
        if (0 > fly || fly > 100) {
          haserro = true;
        }
      }
      if (haserro == false) {
        Drone.findByPk(req.params.id)
          .then(function (drone) {
            drone
              .update({
                custumer_image: req.body.custumer_image,
                customer_name: req.body.customer_name,
                customer_address: req.body.customer_address,
                battery: req.body.battery,
                max_speed: req.body.max_speed,
                average_speed: req.body.average_speed,
                status: req.body.status,
                fly: req.body.fly,
              })
              .then((drone) => {
                res.status(200).json(drone);
              })
              .catch((error) =>
                res.status().json({
                  error: true,
                  error: error,
                })
              );
          })
          .catch((error) =>
            res.status(404).json({
              error: true,
              error: error,
            })
          );
      } else {
        res.status(406).send("Erro nos dados!");
      }
    } catch (e) {
      res.status(500).send(e);
    }
  },
  Post(req, res) {
    try {
      var fly = parseInt(req.body.fly);
        var haserro = false;
        switch (req.body.status) {
          case "charging":
            break;
          case "offline":
            break;
          case "failed":
            break;
          case "repair":
            break;
          case "success":
            break;
          default:
            haserro = true;
        }
        if (0 > fly || fly > 100) {
            haserro = true;
        }
        if (haserro == false) {
          Drone.create({
            custumer_image: req.body.custumer_image,
            customer_name: req.body.customer_name,
            customer_address: req.body.customer_address,
            battery: req.body.battery,
            max_speed: req.body.max_speed,
            average_speed: req.body.average_speed,
            status: req.body.status,
            fly: req.body.fly,
          })
            .then(function (drone) {
              res.status(201).json(drone);
            })
            .catch((error) =>
              res.status(404).json({
                error: true,
                error: error,
              })
            );
        } else {
          res.status(406).send("Erro ao cadastrar !");
        }
    } catch (e) {
      res.status(500).send(e);
    }
  },
  Delete(req, res) {
    try {
      Drone.findByPk(req.params.id)
        .then(function (drone) {
          drone.destroy();
        })
        .then((drone) => {
          res.sendStatus(200).json(drone);
        })
        .catch((error) =>
          res.status(404).json({
            error: true,
            error: error,
          })
        );
    } catch (e) {
      res.status(500).send(e);
    }
  },
};
