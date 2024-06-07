import {request} from "@/utils/request.js"

const BASE_URL = 'https://tea.qingnian8.com/api/bizhi';

export function apiGetBanner(){
	return request({
		url: BASE_URL + "/homeBanner"		
	})	
}

export function apiGetDayRandom(){
	return request({url: BASE_URL + "/randomWall"})
}

export function apiGetNotice(data={}){
	return request({
		url: BASE_URL + "/wallNewsList",
		data
	})
}


export function apiGetClassify(data={}){
	return request({
		url: BASE_URL + "/classify",
		data
	})
}



export function apiGetClassList(data={}){
	return request({
		url: BASE_URL + "/wallList",
		data
	})
}


export function apiGetSetupScore(data={}){
	return request({
		url: BASE_URL + "/setupScore",
		data
	})
}


export function apiWriteDownload(data={}){
	return request({
		url: BASE_URL + "/downloadWall",
		data
	})
}



export function apiDetailWall(data={}){
	return request({
		url: BASE_URL + "/detailWall",
		data
	})
}


export function apiUserInfo(data={}){
	return request({
		url: BASE_URL + "/userInfo",
		data
	})
}


export function apiGetHistoryList(data={}){
	return request({
		url: BASE_URL + "/userWallList",
		data
	})
}



export function apiNoticeDetail(data={}){
	return request({
		url: BASE_URL + "/wallNewsDetail",
		data
	})
}


export function apiSearchData(data={}){
	return request({
		url: BASE_URL + "/searchWall",
		data
	})
}
