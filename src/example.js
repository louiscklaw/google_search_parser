#!/usr/bin/env node

var google = require(`${__dirname}/google.js`)

async function search_and_get(search_text){
    var html_result = await google.googleSearch(search_text)

    return google.parseSearchContent(html_result)
      .then(res => {
        return res
      })
}

function helloworld() {
  search_and_get('louislabs.github.io')
    .then(res => {
      console.log(res)
    })

}

helloworld();
