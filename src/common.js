#!/usr/bin/env node

const path = require('path')
const fs = require('fs')


function dumpHTML(file_path, html_in){
  return fs.writeFileSync(file_path,html_in)
}

function loadHTML(file_path){
  return fs.readFileSync(file_path, {encoding: 'ascii'})
}

module.exports.dumpHTML = dumpHTML;
module.exports.loadHTML = loadHTML;