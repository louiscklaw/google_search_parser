#!/usr/bin/env node

const fs = require("fs");
const path = require("path");


const google_search = require(`${__dirname}/../src/google_search.js`)
const common = require(`${__dirname}/../src/common.js`);
const main = require(`${__dirname}/../src/main.js`);

function test_helloworld() {
  var search_result_html = common.loadHTML(
    `${__dirname}/frozen/search_result.html`
  );
  google_search.parseSearchContent(search_result_html)
    .then(res => {
      console.log(res)
    })

}

function test_all() {
  test_helloworld();
}

test_all();
