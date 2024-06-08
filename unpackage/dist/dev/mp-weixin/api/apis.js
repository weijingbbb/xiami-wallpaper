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
function apiGetClassList(data = {}) {
  return utils_request.request({
    url: BASE_URL + "/wallList",
    data
  });
}
function apiGetSetupScore(data = {}) {
  return utils_request.request({
    url: BASE_URL + "/setupScore",
    data
  });
}
function apiWriteDownload(data = {}) {
  return utils_request.request({
    url: BASE_URL + "/downloadWall",
    data
  });
}
function apiDetailWall(data = {}) {
  return utils_request.request({
    url: BASE_URL + "/detailWall",
    data
  });
}
function apiUserInfo(data = {}) {
  return utils_request.request({
    url: BASE_URL + "/userInfo",
    data
  });
}
function apiGetHistoryList(data = {}) {
  return utils_request.request({
    url: BASE_URL + "/userWallList",
    data
  });
}
function apiNoticeDetail(data = {}) {
  return utils_request.request({
    url: BASE_URL + "/wallNewsDetail",
    data
  });
}
function apiSearchData(data = {}) {
  return utils_request.request({
    url: BASE_URL + "/searchWall",
    data
  });
}
exports.apiDetailWall = apiDetailWall;
exports.apiGetBanner = apiGetBanner;
exports.apiGetClassList = apiGetClassList;
exports.apiGetClassify = apiGetClassify;
exports.apiGetDayRandom = apiGetDayRandom;
exports.apiGetHistoryList = apiGetHistoryList;
exports.apiGetNotice = apiGetNotice;
exports.apiGetSetupScore = apiGetSetupScore;
exports.apiNoticeDetail = apiNoticeDetail;
exports.apiSearchData = apiSearchData;
exports.apiUserInfo = apiUserInfo;
exports.apiWriteDownload = apiWriteDownload;
