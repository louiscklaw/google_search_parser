#!/usr/bin/env node

const path = require("path");
const fs = require("fs");

const puppeteer = require("puppeteer");
var Xray = require("x-ray");
var x = Xray({});

async function parseSearchContent(page_raw) {
  return x(page_raw,"body div.srg div.g", [{result_link: 'a@href'}]);
}

module.exports.parseSearchContent = parseSearchContent;
