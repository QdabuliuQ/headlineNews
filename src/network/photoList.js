import {request} from './request'

// 图片资讯组件
// 图片分类标题请求
export function getPhotoListTitle(){
    return request({
        url: '/api/getimgcategory'
    })
}


// 图片列表请求
export function getPhotoListPic(id){
    return request({
        url: '/api/getimages/'+id
    })
}