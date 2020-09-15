import {request} from './request'

// 获取商品列表数据
export function getGoodsList(pageIndex){
    return request({
        url: '/api/getgoods?pageindex=' + pageIndex,
    })
}

// 获取商品轮播图数据
export function getGoodsListSwiper(id){
    return request({
        url: '/api/getthumimages/' + id
    })
}

// 获取商品详情数据
export function getGoodsInfo(id){
    return request({
        url: '/api/goods/getinfo/' + id
    })
}