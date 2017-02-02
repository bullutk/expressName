var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/nameDisplay',(req, res, next)=>{
	res.render('nameDisplay', {name: req.body.nameSearch})
	console.log(req.body.nameSearch);
})

module.exports = router;
