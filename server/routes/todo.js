const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')

router.use(bodyParser.urlencoded({extended: true}))

/* GET users listing. */
router.post('/', function(req, res, next) {
    const type = req.query.type;
    if(type === 'list'){
        try{
            // database 연결
            const database = require('../db/databse')

            req.body.mapper = 'TodosMapper'
            req.body.crud = 'select';
            req.body.mapper_id = 'selectTodosList'

            router.use('/', database)

            // db router에서 response 보내도록
            next('route')
        } catch (e) {
            console.log(`dbconnect error ${e}`)
        }
    }
});

module.exports = router;
