const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const User = require("./User");
const Project = require("./Project");

const Task = sequelize.define("Task", {
  title: { type: DataTypes.STRING, allowNull: false },
  status: {
    type: DataTypes.ENUM("TODO", "IN_PROGRESS", "COMPLETED"),
    defaultValue: "TODO",
  },
});

Task.belongsTo(User, { as: "assignedUser" });
Task.belongsTo(Project);

module.exports = Task;

