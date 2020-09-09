import {request} from './request'

export function getNewsList(){
    return request({
        url: '/api/getnewslist'
    })
}