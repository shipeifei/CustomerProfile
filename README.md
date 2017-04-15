# lenovo-customer-profile

* webpack2.0
* vue 2.0
* vue-router
* vuex 
* echarts
* fetch


## 项目安装

``` bash
# 使用npm install安装所有的依赖
npm install

# 本地开发运行 localhost:8086
npm run dev

# 打包压缩
npm run build

#项目结构说明
－－build wepback配置文件
－－config 项目参数配置
－－mock  模拟数据
－－src 
	－－assets 静态文件
	－－components 组件
		－－charts 图形组件
			－－behaviors 用户行为属性
			－－prferences 用户偏好
		－－layouts 布局组件，左侧菜单和头部菜单
		－－user 用户查询相关的组件	
		－－router 路由器
		－－vuex 
			－－modules store模块
			－－service http请求
