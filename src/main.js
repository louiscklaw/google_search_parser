#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const puppeteer = require("puppeteer");
var Xray = require("x-ray");
var x = Xray({});

var google_search_url = 'http://www.google.com'
var test_search_url = 'http://127.0.0.1:46255/google/google_search_parser/test/frozen/test.html'

async function performSearch(pup_page_in, search_text){

  var sel_search_input_box = 'input[aria-label]'
  await pup_page_in.waitForSelector(sel_search_input_box);
  await pup_page_in.evaluate((sel_input, search_text) => {
    console.log('insert text')
    document.querySelector(sel_input).value = search_text;
  }, sel_search_input_box, search_text);

  var sel_google_search_button = 'input[type="submit"][value~="Google"]';
  await pup_page_in.waitForSelector(sel_google_search_button);
  await pup_page_in.evaluate(sel_button => {
    console.log('start search')
    document.querySelectorAll(sel_button)[1].style.background = 'red'
    document.querySelectorAll(sel_button)[1].click();
  }, sel_google_search_button);

}

async function getSearchResult(pup_page_in){
  var sel_all_result = 'div#search'
  await pup_page_in.waitForSelector(sel_all_result)

  var page_content = await pup_page_in.content()
  return page_content

}

function main() {
  (async () => {
    const browser = await puppeteer.launch({
      headless: false
    });
    const page = await browser.newPage();
    await page.goto(google_search_url);

    await performSearch(page, 'louiscklaw facebook')
    var content = await getSearchResult(page)

    await page.screenshot({ path: "example.png" });
    await browser.close();

    parseSearchContent(content)
      .then(res => {
        console.log(res)
      })

  })();
}



// main();
