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
    type: Sequelize.TEXT,
    allowNull: true,
    description: Sequelize.TEXT
  },
  customer_name: {
    type: Sequelize.TEXT,
    allowNull: true,
    description: Sequelize.TEXT
  },
  customer_address: {
    type: Sequelize.TEXT,
    allowNull: true,
    description: Sequelize.TEXT
  },
  battery: {
    type: Sequelize.INTEGER ,
    allowNull: false,
    description: Sequelize.INTEGER 
  },
  max_speed: {
    type: Sequelize.FLOAT,
    allowNull: false,
    description: Sequelize.FLOAT
  },
  average_speed: {
    type: Sequelize.FLOAT,
    allowNull: false,
    description: Sequelize.FLOAT
  },

  current_fly: {
    type: DataTypes.INTEGER,
    allowNull: false,
    description: Sequelize.INTEGER
  },
  status: {
    type: DataTypes.ENUM("charging", "offline", "failed", "repair", "success"),
    allowNull: true,
    description: Sequelize.Sequelize.ENUM
  },
});

sequelize.sync().then(() => {
  console.log(`Database online!`);
});
module.exports = Drone