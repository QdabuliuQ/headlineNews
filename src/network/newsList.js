import {request} from './request'


// 获取新闻列表
export function getNewsList(){
    return request({
        url: '/api/getnewslist'
    })
}

// 获取新闻内容
export function getNewsInfo(id){
    return request({
        // 使用url拼接 参数 的方式 发送请求
        url: '/api/getnew/'+id,
    })
}

// 获取新闻评论
export function getComments(id,index){
    return request({
        url: '/api/getcomments/'+ id + '?pageindex=' + index
    })
}