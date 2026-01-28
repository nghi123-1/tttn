const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Recommendation = sequelize.define(
  "Recommendation",
  {
    rec_id: {
      type: DataTypes.STRING(10),
      primaryKey: true,
    },
    product_id: DataTypes.STRING,
    recommendation: DataTypes.TEXT,
    reason: DataTypes.TEXT,
    created_at: DataTypes.DATE,
  },
  {
    tableName: "recommendations",
    timestamps: false,
  }
);

module.exports = Recommendation;
