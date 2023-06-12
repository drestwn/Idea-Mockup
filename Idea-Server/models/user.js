'use strict';

const { hashPassword } = require('../helper/encrypt')
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Post, { foreignKey: "authorId" })
    }
  }
  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg:
            `Username must be filled`
        },
        notEmpty: {
          msg: `Username must be filled`
        },
      }
    },
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
      len: {
        args: [5],
        msg: 'Password minimum 5 character'
      },
      notNull: {
        msg:
          `Password must be filled`
      },
      notEmpty: {
        msg: `Password must be filled`
      },
    },
    role: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  User.beforeCreate((user) => {
    user.password = hashPassword(user.password)
    // user.role = "admin"
  })

  return User;
};