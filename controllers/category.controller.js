module.exports.getCategory = function(req, res) {
    console.log("get category");
    categories = {
        id: "1",
        name: "aaaaaaaa"
    }
    res.json(categories);

};