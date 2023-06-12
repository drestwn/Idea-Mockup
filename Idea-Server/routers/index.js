const express = require("express");
const Controller = require("../controllers/controller");
const CusController = require("../controllers/customerController")
const router = express.Router();
const { loggedAuth, adminAuth, loginCustomer } = require('../Middleware/routerMiddleWare')
const dataErrors = require('../Middleware/errorHandle')

//admin & staff
router.post("/userPost", Controller.postRegister)
router.post("/postLogin", Controller.postLogin)
router.post("/logGoogle", Controller.googleLogin)

//customer
router.post("/customerPost", CusController.registerCustomer)
router.post('/customerLogin', CusController.loginCustomer)
router.post("/cusGoogleLog", CusController.googleLogin)
router.get('/cusPost', CusController.renderPost)
router.get('/cusPost/:id', CusController.renderPostDetail)
router.get('/readPagination', CusController.readPaginationPost)
router.get('/renderAllCat', CusController.renderCategory)

router.get('/renderFavPost', loginCustomer, CusController.renderFavbyIdCus)
router.post('/addFavPost/:id', loginCustomer, CusController.addFav)
router.delete('/removeFav', loginCustomer, CusController.deleteFavByCusId)

////////////////////////////////kudu loggin admin staff
router.use(loggedAuth)
////////////////////////////////masuk

//post
router.get("/post", Controller.renderPost);
router.post("/createPost", Controller.createPost);
router.get("/post/:id", Controller.detailPost);

// router.patch("/post/:id", Controller.updateStatus)
router.put("/post/:id/edit", Controller.editPost)

router.get("/history", Controller.renderHistory)

///////////////////////Admin Only
////////bisa delete
router.patch("/post/:id/editStatus", adminAuth, Controller.updateStatus)
router.delete("/post/:id", adminAuth, Controller.deletePost);

//category
router.get("/category", Controller.renderCategory);
router.post('/categoryPost', Controller.addCategory)
router.delete('/category/:id', Controller.deleteCategory)



router.use(dataErrors)

module.exports = router;
