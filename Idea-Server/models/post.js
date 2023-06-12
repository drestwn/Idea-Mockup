"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Category, { foreignKey: "categoryId" });
      this.belongsTo(models.User, { foreignKey: "authorId" })
      this.hasMany(models.Favorites, {
        foreignKey: 'postId', onUpdate: "CASCADE",
        onDelete: "CASCADE"
      })
    }
  }
  Post.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg:
              `Title must be filled`
          },
          notEmpty: {
            msg: `Title must be filled`
          },
        },
      },
      content: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg:
              `Content must be filled`
          },
          notEmpty: {
            msg: `Content must be filled`
          },
        }
      },
      imgUrl: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg:
              `imgUrl must be filled`
          },
          notEmpty: {
            msg: `imgUrl must be filled`
          },
        }
      },
      categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg:
              `categoryId must be filled`
          },
          notEmpty: {
            msg: `categoryId must be filled`
          },
        }
      },
      authorId: DataTypes.INTEGER,
      status: DataTypes.STRING

    },
    {
      sequelize,
      modelName: "Post",
    }
  );
  return Post;
};
