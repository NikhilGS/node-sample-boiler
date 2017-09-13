var express = require('express');
var path = require('path');
var router = express.Router();

var image = require("../controllers/image.controller")
var category = require("../controllers/category.controller")


/**
 * @swagger
 * /mysample/category:
 *   get:
 *     tags:
 *       - Category Controller
 *     description: Returns all categories
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of categories
 */
router.get('/category', category.getCategory);

router.get('/image', image.getImage);
router.post('/image', image.postImage);
router.post('/receiveImage', image.receiveImage);

console.log("book route");
module.exports = router;