var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/nameDisplay',(req, res, next)=>{
	var URL = "http://wasjustthinking.com/class.php"
	request.get(URL, (error, response, classArray)=>{
		classArray = JSON.parse(classArray);
		console.log(classArray)
		res.render('nameDisplay', {
			classArray: classArray,
			name: req.body.nameSearch
		})
	})
})

module.exports = router;