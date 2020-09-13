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

// 图片详情资讯
export function getPhotoListInfo(id){
    return request({
        url: '/api/getimageInfo/'+id
    })
}

// 获取缩略图数据
export function getPhotoThumImg(id){
    return request({
        url: '/api/getthumimages/'+id
    })
}