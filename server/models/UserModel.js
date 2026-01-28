const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const User = sequelize.define(
  "User",
  {
    user_id: {
      type: DataTypes.STRING(10),
      primaryKey: true,
    },
    gender: DataTypes.STRING,
    age_group: DataTypes.STRING,
    created_at: DataTypes.DATE,
    password: DataTypes.STRING,
  },
  {
    tableName: "users",
    timestamps: false,
  }
);

module.exports = User;
