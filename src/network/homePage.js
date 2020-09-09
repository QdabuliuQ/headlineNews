import {request} from './request'

// 轮播图请求
export function getSwiper(){
    return request({
        // 传入url
        url: '/api/getlunbo'
    })
}