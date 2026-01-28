const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Tracking = sequelize.define(
  "Tracking",
  {
    track_id: {
      type: DataTypes.STRING(10),
      primaryKey: true,
    },
    user_id: DataTypes.STRING,
    product_id: DataTypes.STRING,
    action: DataTypes.STRING,
    created_at: DataTypes.DATE,
    event_type: DataTypes.STRING,
    x: DataTypes.INTEGER,
    y: DataTypes.INTEGER,
    scroll_depth: DataTypes.INTEGER,
    duration: DataTypes.INTEGER,
    timestamp: DataTypes.DATE,
  },
  {
    tableName: "tracking_events",
    timestamps: false,
  }
);

module.exports = Tracking;
