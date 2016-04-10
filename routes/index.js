var express = require('express');
var router = express.Router();
var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { size: false });
});

router.post('/analyze',upload.single('file'), function(req, res, next) {
  res.render('index', { size: JSON.stringify(req.file.size) });
});

module.exports = router;
