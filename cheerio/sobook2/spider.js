/*
 * spider.js
 * Copyright (C) 2020 android <android@localhost>
 *
 * Distributed under terms of the MIT license.
 */

let mysql = require('mysql')
let axios = require('axios')
let cheerio = require('cheerio')

let page = 1
let count = 1




async function getPageUrl(num){
    let httpUrl = "https://sobooks.cc"
    console.log(httpUrl)
    let res =  await axios.get(httpUrl)

    console.log(res.data)


}

getPageUrl(page)
