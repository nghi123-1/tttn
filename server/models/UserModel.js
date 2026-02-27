const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const User = sequelize.define(
  "User",
  {
    user_id: {
      type: DataTypes.STRING(10),
      primaryKey: true,
    },

    gender: {
      type: DataTypes.STRING(10),
    },

    age_group: {
      type: DataTypes.STRING(20),
    },

    created_at: {
      type: DataTypes.DATE,
    },

    password: {
      type: DataTypes.STRING(255),
    },

    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true, // check format email
      },
    },
  },
  {
    tableName: "users",
    timestamps: false,
  }
);

module.exports = User;