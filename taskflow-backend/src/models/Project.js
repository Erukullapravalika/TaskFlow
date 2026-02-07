const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const User = require("./User");

const Project = sequelize.define("Project", {
  name: { type: DataTypes.STRING, allowNull: false },
  description: DataTypes.TEXT,
});

Project.belongsTo(User, { as: "manager" });

module.exports = Project;
