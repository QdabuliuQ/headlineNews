# 05.supermallnew
# 该项目还有部分功能未开发完成，目前只有首页中的：新闻、图片、商城、购物车界面开发完成，接口地址是从github上其他项目中获取的。该接口数据量比较少，只用于学习交流。

## 项目主要使用 VueCLI 搭建
## 其他框架 :
## 网络请求：axios, UI组件库：vant,mui, 滚动组件：better-scroll,mui-scroll
----
## 项目请求根路径：http://api.cms.liulongbin.top
### + 首页轮播图：/api/getlunbo
### + 首页新闻列表：/api/getnewslist
### + 新闻内容详情：'/api/getnew/'+id  需要拼接对应id
### + 新闻评论内容：'/api/getcomments/'+ id + '?pageindex=' + index  pageindex评论页数
----
### + 商城模块列表：'/api/getgoods?pageindex=' + pageIndex,  pageindex页数
### + 商品详情页面轮播图：'/api/getthumimages/' + id  id为对应商品的id
### + 商品详情页面内容：'/api/goods/getinfo/' + id  id为对应商品的id
---- 
### + 新闻模块列表：'/api/getnewslist'
### + 新闻详情内容：'/api/getnew/'+id
### + 新闻评论内容：'/api/getcomments/'+ id + '?pageindex=' + index
******

### 在使用 MUI 的滑动控件的时候，会报错
Unable to preventDefault inside passive event listener due to target being treated as passive.
## 可以通过在 css 中添加 * { touch-action: pan-y } 去掉
