var express = require('express');
var router = express.Router();
/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log("Fetching Users from server");
 // res.send('respond with a resource');
  res.json([{
    id: 1,
    name: "Hiccup 1",
    password: 'hiccup 1'
  }, {
    id: 2,
    name: "King Arthur 1",
    password: 'king-arthur 1'
  }]);
});
module.exports = router;