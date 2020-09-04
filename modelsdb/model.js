const { Sequelize, DataTypes } = require("sequelize")
// const sequelize = new Sequelize('sqlite::memory:');

const sequelize = new Sequelize({
  dialect: "sqlite",
  operatorsAliases: false,
  storage: "./data/database.sqlite",
  define: {
    timestamps: false,
  },
});
sequelize
  .authenticate()
  .then(() => {
    console.log("Sucesso !");
  })
  .catch((err) => {
    console.error("Erro: :(", err);
  });

const Drone = sequelize.define("drone", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  custumer_image: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  customer_name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  customer_address: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  battery: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  max_speed: {
    type: DataTypes.REAL,
    allowNull: false,
  },
  average_speed: {
    type: DataTypes.REAL,
    allowNull: false,
  },

  current_fly: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM("charging", "offline", "failed", "repair", "success"),
    allowNull: true,
  },
});

sequelize.sync().then(() => {
  console.log(`Database & tables created!`);

  Drone.bulkCreate([
    {
      id: 1,
      custumer_image:
        "https://i.pinimg.com/originals/95/20/21/95202129c0b8d430b8ea288a73c1f53d.jpg",
      customer_name: "Ygor",
      customer_address: "Rua dos bobos, numero 0",
      battery: 100,
      max_speed: 80,
      average_speed: 84.3,
      status: "success",
      current_fly: 10,
    },
    {
      id: 2,
      custumer_image:
        "https://images.unsplash.com/photo-1462206092226-f46025ffe607?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      customer_name: "Pedro",
      customer_address: "Av Brasil",
      battery: 50,
      max_speed: 4.8,
      average_speed: 10.6,
      status: "repair",
      current_fly: 94,
    },
  ])
    .then(function () {})
    .catch((error) =>
      res.json({
        error: true,
        error: error,
      })
    );
});
module.exports = Drone