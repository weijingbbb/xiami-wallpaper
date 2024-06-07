"use strict";
const utils_request = require("../utils/request.js");
const BASE_URL = "https://tea.qingnian8.com/api/bizhi";
function apiGetBanner() {
  return utils_request.request({
    url: BASE_URL + "/homeBanner"
  });
}
function apiGetDayRandom() {
  return utils_request.request({ url: BASE_URL + "/randomWall" });
}
function apiGetNotice(data = {}) {
  return utils_request.request({
    url: BASE_URL + "/wallNewsList",
    data
  });
}
function apiGetClassify(data = {}) {
  return utils_request.request({
    url: BASE_URL + "/classify",
    data
  });
}
exports.apiGetBanner = apiGetBanner;
exports.apiGetClassify = apiGetClassify;
exports.apiGetDayRandom = apiGetDayRandom;
exports.apiGetNotice = apiGetNotice;
