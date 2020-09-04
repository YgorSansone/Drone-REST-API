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
});
module.exports = Drone