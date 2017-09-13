const request = require('request');

module.exports.getImage = function(req, res) {
    console.log("get Image");
    console.log(image.length);



};

module.exports.postImage = function(req, res) {
    // res.json("qw");
    image = req.body.image;
    console.log("typeoffffff ", typeof image);
    const form = {
        'metadata': 'metadata',
        'File': {
            value: typeof image === 'string' ? new Buffer(image, 'base64') : image,
            options: {
                filename: 'image.jpg',
                contentType: 'image/jpeg'
            }
        }
    }
    console.log(typeof image === 'string' ? new Buffer(image, 'base64') : image);
    request.post({
        uri: "http://localhost:4000/single",
        headers: {
            Authorization: `Basic qwerty`
        },
        formData: form
    }, function(err, response, body) {
        console.log("response");
        res.json("body");
    });

};

module.exports.receiveImage = function(req, res) {
    console.log(req);
    console.log("received");
    res.send("qwerty");
}