var port = 4000;
var host = "localhost";
var logger = require("./logger");
var multer = require('multer');
var fs = require("fs");

var express = require("express");
var router = express.Router();
var route = require("./routes/route.js")
var swaggerJSDoc = require('swagger-jsdoc');
var options = require("./swagger");
var swaggerSpec = swaggerJSDoc(options);

var app = express();
var path = require('path');
var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

// var pendingDirectory = "D:\M1037526\Olay\MyNode\Boilerplate\Multer";
// var storage = multer.diskStorage({
//     destination: function(req, file, cb) {
//         cb(null, pendingDirectory);
//     },
//     filename: function(req, file, cb) {
//         cb(null, file.originalname);
//     }
// });

upload = multer({ storage: multer.memoryStorage() });
app.post('/single', upload.single('File'), function(req, res) {

    // console.log(req.body);
    // console.log("\n\n");
    // console.log(req.file);

    image = req.file;
    console.log(typeof image.buffer);
    var img_buf = new Buffer(image.buffer);
    console.log(img_buf);
    console.log("qppppppppppp");
    fs.writeFile("buf.txt", img_buf.toString("base64"), function(err) {
            if (err) {
                console.log("errrrrrrrrrrrrrrr", err);
                return;
            }
            console.log("The file was saved!");
        })
        // console.log(img_buf.toString("base64"));
    res.send("qwert");
});


// app.use(multer({
//     storage: storage,
//     onFileUploadStart: function(file) {
//         console.log(file.originalname + ' is starting ...')
//     },
//     onFileUploadComplete: function(file) {
//         console.log(file.fieldname + ' uploaded to  ' + file.path)
//         done = true;
//     }
// }).single('file'));

app.use('/mysample', route);
app.get('/swagger.json', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
});


app.listen(port, host, () => {
    console.log('Hello');
});
logger.log('info', "aaaaaaaa");

logger.info('Server running at http://127.0.0.1:4000/');