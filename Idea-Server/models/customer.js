'use strict';
const { hashPassword } = require("../helper/encrypt")
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Favorites, { foreignKey: 'customerId' })
    }
  }
  Customer.init({
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: { msg: `Email format is inValid` },
        notNull: {
          msg:
            `Email must be filled`
        },
        notEmpty: {
          msg: `Email must be filled`
        },
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg:
            `Password must be filled`
        },
        notEmpty: {
          msg: `Password must be filled`
        },
      }
    },
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Customer',
  });
  Customer.beforeCreate((cus) => {
    cus.password = hashPassword(cus.password)
  })
  return Customer;
};