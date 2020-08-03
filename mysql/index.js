/*
 * index.js
 * Copyright (C) 2020 android <android@localhost>
 *
 * Distributed under terms of the MIT license.
 */
let mysql = require("mysql")

let options = {
    host:"localhost",
    port:"3306",
    user:"root",
    password:"Abcd1234",
    database:"test"
}

let con  = mysql.createConnection(options)

con.connect((err)=>{
    if (err) {
        console.log(err)
    }else {
        console.log("连接成功 ")
    }
})

//let strSql = "select * from user"
//con.query(strSql,(err,results,fields)=>{
//    console.log(err)
//    console.log(results)
//    console.log(fields)
//})


//删除表
//let strSql2 = "drop table user"
//con.query(strSql2,(err,results)=>{
//    console.log(err)
//    console.log(results)
//})
//
////删除库
//let strSql3 = "drop database test"
//con.query(strSql3,(err,results)=>{
//    console.log(err)
//    console.log(results)
//})


//创建库
//let strSql4 = "create database test"
//con.query(strSql4,(err,results)=>{
//    console.log(err)
//    console.log(results)
//})
//
//
//创建表
//let strSql5 = 'CREATE TABLE `test`  (`id` int(0) NOT NULL, `username` varchar(255) NULL,  `passwd` varchar(255) NULL, PRIMARY KEY (`id`));'
//
//con.query(strSql5,(err,results)=>{
//    console.log(err)
//    console.log(results)
//})

//插入数据
//let strSql6 = "insert into test (id,username,passwd) values (1,'lc','123')"
//
//con.query(strSql6,(err,results)=>{
//    console.log(err)
//    console.log(results)
//})

//插入数据
let strSql7 = "insert into test (username,passwd) values ('zs','123')"

con.query(strSql7,(err,results)=>{
    console.log(err)
    console.log(results)
})

let strSql8 = "insert into test (username,passwd) values (?,?)"

con.query(strSql8,["lisi","456"],(err,results)=>{
    console.log(err)
    console.log(results)
})
