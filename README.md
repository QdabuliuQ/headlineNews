# 05.supermallnew

#  请求根路径：http://api.cms.liulongbin.top

## 在使用 MUI 的滑动控件的时候，会报错
Unable to preventDefault inside passive event listener due to target being treated as passive.
## 可以通过在 css 中添加 * { touch-action: pan-y } 去掉
