var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    const atlTeams = [
        `Braves`,
        `Falcants`,
        `United`,
        `Hawks`
    ]
    res.render('index', {atlTeams});
});

router.get('/football', (req,res)=>{
    const atlTeams = [
        `Falcan'ts`,
        `Braves`,
        `United`,
        `Hawks`
    ]
    res.render('index', {atlTeams});
})

module.exports = router;
