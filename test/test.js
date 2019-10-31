#!/usr/bin/env node

const fs = require("fs");
const path = require("path");


const google = require(`${__dirname}/../index.js`)
const common = require(`${__dirname}/../src/common.js`);


var test_search_url = 'http://127.0.0.1:46255/google/google_search_parser/test/frozen/test.html'

function test_helloworld() {
  var search_result_html = common.loadHTML(
    `${__dirname}/frozen/search_result.html`
  );

  google.parseSearchContent(search_result_html)
    .then(res => {
      console.log(res)
    })

}

function test_all() {
  test_helloworld();
}

test_all();
