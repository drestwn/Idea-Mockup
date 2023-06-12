const { Category, Post, User, History } = require("../models/index");
const { comparePassword } = require('../helper/encrypt')
const { signToken } = require('../helper/jwt')
const { OAuth2Client } = require('google-auth-library');
const { post } = require("../routers");

class Controller {
  static async renderPost(req, res, next) {
    try {
      const result = await Post.findAll({
        include: [{
          model: User,
          attributes: [
            'id', 'username', 'email', 'role', 'phoneNumber', 'address'
          ]
        },
        {
          model: Category,
          attributes: ['id', 'name']
        }], order: [['id', 'ASC']]
      });
      if (result.length === 0) {
        throw new error({
          name: "NOT_FOUND",
        });

      }

      res.status(200).json({
        statusCode: 200,
        post: result,

      });
    } catch (err) {
      next(err)
    }
  }

  static async renderCategory(req, res, next) {
    try {
      const result = await Category.findAll({});
      if (result.length === 0) {
        throw new error({
          name: "NOT_FOUND",
          message: "Page Not Found",
        });
      }
      res.status(200).json({
        statusCode: 200,
        categories: result,
      });
    } catch (err) {
      next(err)
    }
  }
  static async createPost(req, res, next) {
    const { title, content, imgUrl, categoryId } = req.body;
    const { id, role, email } = req.idRole
    try {
      const newPost = await Post.create({
        title,
        content,
        imgUrl,
        categoryId,
        authorId: id,
        status: 'Active'
      });
      const log = await History.create({

        title: `Post Created`, description: `${title} has been created`, updatedBy: email
      })
      res.status(201).json({
        statusCode: 201,
        data: newPost,
        msg: `data and log has been created`
      });
    } catch (err) {
      next(err)
    }
  }

  static async detailPost(req, res, next) {
    const { id } = req.params;
    try {
      const detail = await Post.findByPk(+id);

      if (detail === null) {
        throw { name: "NOT_FOUND" }
      }
      res.status(200).json({
        statusCode: 200,
        Post: detail,
      });
    } catch (err) {
      next(err)
    }
  }

  static async deletePost(req, res, next) {
    const { id } = req.params
    try {
      // console.log(id)
      const data = await Post.findByPk(+id)
      const detail = await Post.destroy({
        where: {
          id
        }
      })
      if (detail === 0) {
        throw {
          name: "NOT_FOUND",
        };
      }
      res.status(200).json({
        statusCode: 200,
        message: `Post success to delete`,
        detail: data
      });

    } catch (err) {
      next(err)
    }
  }

  static async postRegister(req, res, next) {
    try {
      const { email, password, role, username } = req.body
      const created = await User.create({ email, password, role: "Admin", username })
      res.status(201).json({
        statusCode: 201,
        data: created,
        message: "id, email has been created"
      })
    } catch (err) {
      next(err)
    }
  }

  static async postLogin(req, res, next) {
    try {
      console.log(req.body)
      const { email, password, role } = req.body

      //ambil data user dari database dgn findOne dgn where username(1)
      const user = await User.findOne({
        where: { email }
      })
      if (!user) {
        throw { name: "USER_NOT_FOUND" }
      }

      //compare password(2)
      const isPasswordValid = comparePassword(password, user.password)
      if (!isPasswordValid) {
        throw { name: 'LOGIN_INVALID' }
      }

      //4 - access token jwt
      const accessToken = signToken({
        id: user.id,
        email: user.email
      })

      //(3)
      res.status(200).json({
        statusCode: 200,
        accessToken,
        email,
        id: user.id,
        role: user.role,
        message: "Login, let's roll"
      })
    } catch (err) {
      next(err)
    }
  }

  static async addCategory(req, res) {
    try {
      const { name } = req.body
      const created = await Category.create({ name })
      res.status(201).json({
        statusCode: 201,
        data: created,
        message: "Category has been created"
      })
    } catch (err) {
      next(err)
    }
  }

  static async googleLogin(req, res, next) {
    // console.log(req.body, 'inidisinis193')
    try {
      const { token_google } = req.body;

      const client = new OAuth2Client({
        clientId: process.env.CLIENT_ID,
      });

      const ticket = await client.verifyIdToken({
        idToken: token_google,
        audience: process.env.CLIENT_ID,
      });

      const payload = await ticket.getPayload();

      const [user, created] = await User.findOrCreate({
        where: { email: payload.email },
        defaults: {
          email: payload.email,
          username: payload.given_name,
          password: payload.jti,
          role: "Staff",
        },
      });
      let token;
      let loggedUser;
      if (created) {

        token = signToken({ id: created.id, email: created.email });
        loggedUser = created;
      } else {
        token = signToken({ id: user.id, email: user.email });
        loggedUser = user;
      }

      res.status(200).json({
        statusCode: 200,
        access_token: token,
        id: loggedUser.id,
        email: loggedUser.email,
        username: loggedUser.username,
        role: loggedUser.role,
      });
    } catch (err) {
      next(err);
    }
  }

  static async editPost(req, res, next) {
    const id = +req.params.id
    const { title, content, imgUrl, categoryId, authorId } = req.body;
    const { email } = req.idRole
    // const { ids, role } = req.idRole
    try {
      const update = await Post.update({
        title,
        content,
        imgUrl,
        categoryId,
        authorId: authorId,
        status: 'Active'
      }, {
        where: { id: id },
        returning: true
      });
      const log = await History.create({
        title: `Post Edited`, description: `${title} has been updated`, updatedBy: email
      })
      res.status(204).json({
        statusCode: 204,
        data: update,
        msg: 'Post and log has been updated'
      });
    } catch (err) {
      next()
    }
  }
  static async updateStatus(req, res, next) {
    const id = req.params.id
    const { title, status } = req.body
    const { email } = req.idRole
    try {
      const update = await Post.update({ title, status },
        {
          where: { id: id },
          returning: true
        });
      const log = await History.create({
        title: `Status Edited`, description: `Status of ${title} has been updated`, updatedBy: email
      })
      res.status(204).json({
        statusCode: 204,
        data: update,
        msg: 'Status Updated'
      });
    } catch (err) {
      next()
    }
  }

  static async renderHistory(req, res, next) {
    try {
      const detail = await History.findAll({
        // include: {
        //   model: User,
        //   attributes: [
        //     'id', 'email'
        //   ]
        // }, 
        order: [['createdAt', 'DESC']]
      })
      res.status(200).json({
        statusCode: 200,
        data: detail,
        msg: 'renderAll'
      })
    } catch (err) {
      next()
    }
  }

  static async statusChange(req, res, next) {
    try {
      const id = +req.params.id;
      const { status } = req.body;

      const dataBefore = await Post.findByPk(id);
      const updateStat = await Post.update(
        {
          status,
        },
        { where: { id: id }, returning: true }
      );
      const logs = await History.create({
        name: dataBefore.name,
        description: `Product with id ${dataBefore.id} status has been updated from ${dataBefore.status} into ${updateStat[1][0].status}`,
      });

      res.status(200).json({
        statusCode: 200,
        data: updateStat,
        msg: "patch",
      });
    } catch (err) {
      next();
    }
  }
  static async deleteCategory(req, res, next) {
    try {
      const id = +req.params.id;
      const response = await Category.destroy({
        where: {
          id
        }
      })
      res.status(200).json({
        statusCode: 200,
        message: `Category success to delete`,
        detail: response
      });
    } catch (err) {
      next()
    }
  }
}
module.exports = Controller;
