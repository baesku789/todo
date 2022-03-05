const mysql = require('mysql')
const config = require('../config/config')
const express = require('express')
const router = express.Router

// my sql 접속 정보
const pool = mysql.createPool({
    connectionLimit : 60,
    waitForConnections: true,
    host : config.HOST,
    port : config.PORT,
    database : config.DATABASE,
    user: config.USER,
    password : config.PASSWORD
})

router.post('/', function (req, res) {
    const mybatisMapper = require('mybatis-mapper')
    const param = req.body

    // mybatis mapper 경로 설정
    mybatisMapper.createMapper(['../models/' + param.mapper + '.xml'])
    const time = new Date()
    console.log(`## ${time} ##`)
    console.log(`\n Called Mapper Name : ${param.mapper}`)

    const format = {language: 'sql', indent: '  '}
    // mysql query 정보 세팅
    const query = mybatisMapper.getStatement(param.mapper, param.mapper_id, param, format)
    console.log(`\n ===== Node Mybatis Query Log Start =====`)
    console.log(`mapper namespace : ${param.mapper} | ${param.mapper_id} \n`)
    console.log(`${query} \n`)

    pool.getConnection(function (err, connection) {
        if(err) {
            console.log(`Error : ${err}`)
        }
        connection.query(query, function (err, results){
            console.log(`Result Data List \n ${results}`)
            const string = JSON.stringify(results);
            const json = JSON.parse(string);
            res.send({json})
        })
        connection.release()
        console.log(`=== Mybatis Query Log End ===`)
    })
})



module.exports = router