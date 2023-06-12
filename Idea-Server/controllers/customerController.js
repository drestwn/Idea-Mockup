const { comparePassword } = require("../helper/encrypt")
const { Customer, Post, Category, Favorites } = require("../models/index")
const { signToken } = require('../helper/jwt')
const { OAuth2Client } = require('google-auth-library');
const axios = require('axios')

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

class CusController {
    static async registerCustomer(req, res, next) {
        try {
            const { email, password } = req.body
            const create = await Customer.create({
                email: email,
                password: password,
                role: "Customer"
            })
            // console.log(res)
            res.status(201).json({
                statusCode: 201,
                detail: create.email,
                message: "Hello Customer, your email has been created. Please login now"
            })
        } catch (err) {
            console.log(err)
            next(err)
        }
    }
    static async loginCustomer(req, res, next) {
        // console.log(req.body, 'line 22')
        try {
            console.log(req.body, 'line 25')
            const { email, password } = req.body
            const customer = await Customer.findOne({
                where: { email }
            })
            console.log(customer, 'line 39')
            if (!customer) {
                throw { name: "USER_NOT_FOUND" }
            }
            const isPasswordValid = comparePassword(password, customer.password)
            if (!isPasswordValid) {
                throw { name: 'LOGIN_INVALID' }
            }
            const accessToken = signToken({
                id: customer.id,
                email: customer.email,
                role: customer.role
            })
            res.status(200).json({
                statusCode: 200,
                accessToken,
                email,
                role: customer.role,
                message: "Selamat datang, mari buang uangmu"
            })
        } catch (err) {
            console.log(err)
            next(err)
        }
    }
    static async renderPost(req, res, next) {
        try {
            // console.log(req.idRole, 'line 66')
            let { sort } = req.query
            if (!sort) {
                sort = 'ASC'
            }
            const result = await Post.findAll({
                include: [{
                    model: Category
                }],
                order: [['id', `${sort}`]]
            })
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
            console.log(err.name)
            next(err)
        }
    }
    static async renderPostDetail(req, res, next) {
        const { id } = req.params
        try {
            const detail = await Post.findByPk(+id);

            if (detail === null) {
                throw { name: "NOT_FOUND" }
            }

            const qrCode = await axios.post(`https://api.qr-code-generator.com/v1/create?access-token=${process.env.token_qr}`,
                {
                    frame_name: "no-frame",
                    qr_code_text: "https://dailyjourney-production.up.railway.app/",
                    image_format: "SVG",
                    qr_code_logo: "scan-me-square"
                })
            res.status(200).json({
                statusCode: 200,
                Post: detail,
                qr: qrCode.data
            });
        } catch (err) {
            next(err)
        }
    }
    static async googleLogin(req, res, next) {
        try {
            const { token_google } = req.body;
            console.log(req.body, 'line 119')
            const client = new OAuth2Client({
                clientId: process.env.CLIENT_ID,
            });

            const ticket = await client.verifyIdToken({
                idToken: token_google,
                audience: process.env.CLIENT_ID,
            });

            const payload = await ticket.getPayload();

            const [user, created] = await Customer.findOrCreate({
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
                email: loggedUser.email,
                username: loggedUser.username,
                role: loggedUser.role,
            });
        } catch (err) {
            next(err);
        }
    }
    static async readPaginationPost(req, res, next) {
        try {
            let { limit, page, order, category } = req.query
            console.log(category, 'line 164 render')
            let where = {
                status: 'Active',
            }
            if (!limit) {
                limit = 4
            }
            if (!page) {
                page = 1
            }
            if (!order) {
                order = 'title'
            }
            if (category) {
                where.categoryId = +category
            }
            const renderPost = await Post.findAndCountAll({
                include: {
                    model: Category
                },
                limit: limit, //satu halaman ada brp post
                offset: (page - 1) * limit, //berapa banyak data yang mau di lewati, misal ada 100 data, 1-10, berarti ada 90 data yang di skip untuk ditampilkan dulu
                order: [[`${order}`, 'ASC']], //mau di order sebagai ASC dimana
                where: where
            })
            console.log(renderPost)
            const totalPage = Math.ceil(renderPost.count / limit)
            console.log(totalPage, 'line 191')
            res.status(200).json({
                statusCode: 200,
                renderPost,
                totalPage
            })
        } catch (err) {
            next(err)
        }
    }

    //favorite add delete render
    static async addFav(req, res, next) {
        try {
            console.log('disini')
            const { id, email } = req.idRole
            const idPost = req.params.id
            // const postId = 1
            console.log(req.idRole, 'dari addFav')

            const response = await Favorites.create({
                customerId: req.idRole.id,
                postId: idPost

            })
            res.status(200).json({
                statusCode: 200,
                response,
                createdBy: email
            })
        } catch (err) {
            console.log(err.name, 'dariaddFav')
            next(err)
        }
    }
    static async renderFavbyIdCus(req, res, next) {
        try {
            const response = await Favorites.findAll({
                include: {
                    model: Post
                },
                where: {
                    customerId: req.idRole.id
                }
            })
            console.log(response, '223')

            res.status(200).json({
                statusCode: 200,
                response
                // dataPost: response.Post
            })
        } catch (err) {
            // console.log(err.name, '226')
            next(err)
        }
    }

    static async deleteFavByCusId(req, res, next) {
        try {
            console.log('abs')
            const { postId } = req.body
            const response = await Favorites.destroy({
                where: {
                    customerId: req.idRole.id,
                    postId: postId
                }
            })
            res.status(200).json({
                statusCode: 200,
                response,
                msg: `your favorite with Post id: ${id} has been removed `
            })
        } catch (err) {
            console.log(err.name)
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
}

module.exports = CusController