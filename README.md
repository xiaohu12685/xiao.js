# xiao.js
<!-- 
    #id 节点id 必填
    #type 请求方式 必填
    #url 请求路径 必填
    #behavior 是否使用事件触发 目前有 click/mouseover
    #towid 时间绑定ID
 -->

<!-- 可以这样使用 -->
#第一种 不加事件，页面加载执行
<p id="root" type="post" url="http://sign.tianshuai.com.cn/index.php/Home/Trill/actionTrillCount"></p>
#第二种 click事件，在behavior里面添加click，在towid填写需要绑定的id
<p id="root" type="post" url="http://sign.tianshuai.com.cn/index.php/Home/Trill/actionTrillCount" behavior="click" towid="btn"></p>
<button id="btn">click</button>
#第三种 click事件，在behavior里面添加mouseover，在towid填写需要绑定的id
<p id="root" type="post" url="http://sign.tianshuai.com.cn/index.php/Home/Trill/actionTrillCount" behavior="mouseover" towid="btn"></p>
<button id="btn">mouseover</button>
