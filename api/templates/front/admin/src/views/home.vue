<template>
<div class="content" :style='{"padding":"30px"}'>
	<!-- notice -->
	<!-- title -->
	<div class="text" :style='{"margin":"50px auto","fontSize":"24px","color":"rgb(51, 51, 51)","textAlign":"center","fontWeight":"bold"}'>欢迎使用 {{this.$project.projectName}}</div>
	

	
	<!-- echarts -->
</div>
</template>
<script>
//0
import router from '@/router/router-static'
import * as echarts from 'echarts'
export default {
	data() {
		return {
			line: {"backgroundColor":"transparent","yAxis":{"axisLabel":{"borderType":"solid","rotate":0,"padding":0,"shadowOffsetX":0,"margin":15,"backgroundColor":"transparent","borderColor":"#000","shadowOffsetY":0,"color":"#fff","shadowBlur":0,"show":true,"inside":false,"ellipsis":"...","overflow":"none","borderRadius":0,"borderWidth":0,"width":"","fontSize":12,"lineHeight":24,"shadowColor":"transparent","fontWeight":"normal","height":""},"axisTick":{"show":true,"length":5,"lineStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"cap":"butt","color":"#fff","shadowBlur":0,"width":1,"type":"solid","opacity":1,"shadowColor":"rgba(0,0,0,.5)"},"inside":false},"splitLine":{"lineStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"cap":"butt","color":"#ccc","shadowBlur":0,"width":1,"type":"solid","opacity":1,"shadowColor":"rgba(0,0,0,.5)"},"show":true},"axisLine":{"lineStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"cap":"butt","color":"#fff","shadowBlur":0,"width":1,"type":"solid","opacity":1,"shadowColor":"rgba(0,0,0,.5)"},"show":true},"splitArea":{"show":false,"areaStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"color":"rgba(250,250,250,0.3)","opacity":1,"shadowBlur":10,"shadowColor":"rgba(0,0,0,.5)"}}},"xAxis":{"axisLabel":{"borderType":"solid","rotate":0,"padding":0,"shadowOffsetX":0,"margin":4,"backgroundColor":"transparent","borderColor":"#000","shadowOffsetY":0,"color":"#fff","shadowBlur":0,"show":true,"inside":false,"ellipsis":"...","overflow":"none","borderRadius":0,"borderWidth":0,"width":"","fontSize":12,"lineHeight":24,"shadowColor":"transparent","fontWeight":"normal","height":""},"axisTick":{"show":true,"length":5,"lineStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"cap":"butt","color":"#fff","shadowBlur":0,"width":1,"type":"solid","opacity":1,"shadowColor":"rgba(0,0,0,.5)"},"inside":false},"splitLine":{"lineStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"cap":"butt","color":"#fff","shadowBlur":0,"width":1,"type":"solid","opacity":1,"shadowColor":"rgba(0,0,0,.5)"},"show":false},"axisLine":{"lineStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"cap":"butt","color":"#fff","shadowBlur":0,"width":1,"type":"solid","opacity":1,"shadowColor":"rgba(0,0,0,.5)"},"show":true},"splitArea":{"show":false,"areaStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"color":"rgba(255,255,255,.3)","opacity":1,"shadowBlur":10,"shadowColor":"rgba(0,0,0,.5)"}}},"color":["#5470c6","#91cc75","#fac858","#ee6666","#73c0de","#3ba272","#fc8452","#9a60b4","#ea7ccc"],"legend":{"padding":5,"itemGap":10,"shadowOffsetX":0,"backgroundColor":"transparent","borderColor":"#ccc","shadowOffsetY":0,"orient":"horizontal","shadowBlur":0,"bottom":"auto","itemHeight":14,"show":true,"icon":"roundRect","itemStyle":{"borderType":"solid","shadowOffsetX":0,"borderColor":"inherit","shadowOffsetY":0,"color":"rgb(255,255,255)","shadowBlur":0,"borderWidth":0,"opacity":1,"shadowColor":"transparent"},"right":"auto","top":"auto","borderRadius":0,"lineStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"color":"inherit","shadowBlur":0,"width":"auto","type":"inherit","opacity":1,"shadowColor":"transparent"},"left":"right","borderWidth":0,"width":"auto","itemWidth":25,"textStyle":{"textBorderWidth":0,"color":"#fff","textShadowColor":"transparent","ellipsis":"...","overflow":"none","fontSize":12,"lineHeight":24,"textShadowOffsetX":0,"textShadowOffsetY":0,"textBorderType":"solid","fontWeight":500,"textBorderColor":"transparent","textShadowBlur":0},"shadowColor":"rgba(0,0,0,.3)","height":"auto"},"series":{"symbol":"emptyCircle","itemStyle":{"borderType":"solid","shadowOffsetX":0,"borderColor":"#fff","shadowOffsetY":0,"color":"","shadowBlur":0,"borderWidth":0,"opacity":1,"shadowColor":"#000"},"showSymbol":true,"lineStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"color":"","shadowBlur":0,"width":2,"type":"solid","opacity":1,"shadowColor":"#000"},"symbolSize":4},"tooltip":{"backgroundColor":"#123","textStyle":{"color":"#fff"}},"title":{"borderType":"solid","padding":2,"shadowOffsetX":0,"backgroundColor":"transparent","borderColor":"#ccc","shadowOffsetY":0,"shadowBlur":0,"bottom":"auto","show":true,"right":"auto","top":"auto","borderRadius":0,"left":"left","borderWidth":0,"textStyle":{"textBorderWidth":0,"color":"#fff","textShadowColor":"transparent","fontSize":14,"lineHeight":24,"textShadowOffsetX":0,"textShadowOffsetY":0,"textBorderType":"solid","fontWeight":500,"textBorderColor":"#ccc","textShadowBlur":0},"shadowColor":"transparent"}},
			bar: {"backgroundColor":"transparent","yAxis":{"axisLabel":{"borderType":"solid","rotate":0,"padding":0,"shadowOffsetX":0,"margin":12,"backgroundColor":"transparent","borderColor":"#000","shadowOffsetY":0,"color":"#fff","shadowBlur":0,"show":true,"inside":false,"ellipsis":"...","overflow":"none","borderRadius":0,"borderWidth":0,"width":"","fontSize":12,"lineHeight":24,"shadowColor":"transparent","fontWeight":"normal","height":""},"axisTick":{"show":true,"length":5,"lineStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"cap":"butt","color":"#fff","shadowBlur":0,"width":1,"type":"solid","opacity":1,"shadowColor":"rgba(0,0,0,.5)"},"inside":false},"splitLine":{"lineStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"cap":"butt","color":"#ccc","shadowBlur":0,"width":1,"type":"solid","opacity":1,"shadowColor":"rgba(0,0,0,.5)"},"show":true},"axisLine":{"lineStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"cap":"butt","color":"#fff","shadowBlur":0,"width":1,"type":"solid","opacity":1,"shadowColor":"rgba(0,0,0,.5)"},"show":true},"splitArea":{"show":false,"areaStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"color":"rgba(250,250,250,0.3)","opacity":1,"shadowBlur":10,"shadowColor":"rgba(0,0,0,.5)"}}},"xAxis":{"axisLabel":{"borderType":"solid","rotate":0,"padding":0,"shadowOffsetX":0,"margin":4,"backgroundColor":"transparent","borderColor":"#000","shadowOffsetY":0,"color":"#fff","shadowBlur":0,"show":true,"inside":false,"ellipsis":"...","overflow":"none","borderRadius":0,"borderWidth":0,"width":"","fontSize":12,"lineHeight":24,"shadowColor":"transparent","fontWeight":"normal","height":""},"axisTick":{"show":true,"length":5,"lineStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"cap":"butt","color":"#fff","shadowBlur":0,"width":1,"type":"solid","opacity":1,"shadowColor":"rgba(0,0,0,.5)"},"inside":false},"splitLine":{"lineStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"cap":"butt","color":"#fff","shadowBlur":0,"width":1,"type":"solid","opacity":1,"shadowColor":"rgba(0,0,0,.5)"},"show":false},"axisLine":{"lineStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"cap":"butt","color":"#fff","shadowBlur":0,"width":1,"type":"solid","opacity":1,"shadowColor":"rgba(0,0,0,.5)"},"show":true},"splitArea":{"show":false,"areaStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"color":"rgba(255,255,255,.3)","opacity":1,"shadowBlur":10,"shadowColor":"rgba(0,0,0,.5)"}}},"color":["#00ff00","#91cc75","#fac858","#ee6666","#73c0de","#3ba272","#fc8452","#9a60b4","#ea7ccc"],"legend":{"padding":5,"itemGap":10,"shadowOffsetX":0,"backgroundColor":"transparent","borderColor":"#ccc","shadowOffsetY":0,"orient":"horizontal","shadowBlur":0,"bottom":"auto","itemHeight":14,"show":true,"icon":"roundRect","itemStyle":{"borderType":"solid","shadowOffsetX":0,"borderColor":"inherit","shadowOffsetY":0,"color":"rgb(255,255,255)","shadowBlur":0,"borderWidth":0,"opacity":1,"shadowColor":"transparent"},"right":"auto","top":"auto","borderRadius":0,"lineStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"color":"inherit","shadowBlur":0,"width":"auto","type":"inherit","opacity":1,"shadowColor":"transparent"},"left":"right","borderWidth":0,"width":"auto","itemWidth":25,"textStyle":{"textBorderWidth":0,"color":"#fff","textShadowColor":"transparent","ellipsis":"...","overflow":"none","fontSize":12,"lineHeight":24,"textShadowOffsetX":0,"textShadowOffsetY":0,"textBorderType":"solid","fontWeight":500,"textBorderColor":"transparent","textShadowBlur":0},"shadowColor":"rgba(0,0,0,.3)","height":"auto"},"series":{"barWidth":"auto","itemStyle":{"borderType":"solid","shadowOffsetX":0,"borderColor":"#fff","shadowOffsetY":0,"color":"","shadowBlur":0,"borderWidth":0,"opacity":1,"shadowColor":"#000"},"colorBy":"data","barCategoryGap":"20%"},"tooltip":{"backgroundColor":"#123","textStyle":{"color":"#fff"}},"title":{"borderType":"solid","padding":2,"shadowOffsetX":0,"backgroundColor":"transparent","borderColor":"#ccc","shadowOffsetY":0,"shadowBlur":0,"bottom":"auto","show":true,"right":"auto","top":"auto","borderRadius":0,"left":"left","borderWidth":0,"textStyle":{"textBorderWidth":0,"color":"#fff","textShadowColor":"transparent","fontSize":14,"lineHeight":24,"textShadowOffsetX":0,"textShadowOffsetY":0,"textBorderType":"solid","fontWeight":500,"textBorderColor":"#ccc","textShadowBlur":0},"shadowColor":"transparent"},"base":{"animate":false,"interval":2000}},
			pie: {"tooltip":{"backgroundColor":"#123","textStyle":{"color":"#fff"}},"backgroundColor":"transparent","color":["#5470c6","#91cc75","#fac858","#ee6666","#73c0de","#3ba272","#fc8452","#9a60b4","#ea7ccc"],"title":{"borderType":"solid","padding":2,"shadowOffsetX":0,"backgroundColor":"transparent","borderColor":"#ccc","shadowOffsetY":0,"shadowBlur":0,"bottom":"auto","show":true,"right":"auto","top":"auto","borderRadius":0,"left":"left","borderWidth":0,"textStyle":{"textBorderWidth":0,"color":"#fff","textShadowColor":"transparent","fontSize":14,"lineHeight":24,"textShadowOffsetX":0,"textShadowOffsetY":0,"textBorderType":"solid","fontWeight":500,"textBorderColor":"#ccc","textShadowBlur":0},"shadowColor":"transparent"},"legend":{"padding":0,"itemGap":10,"shadowOffsetX":0,"backgroundColor":"transparent","borderColor":"#ccc","shadowOffsetY":0,"orient":"horizontal","shadowBlur":0,"bottom":"auto","itemHeight":14,"show":true,"icon":"roundRect","itemStyle":{"borderType":"solid","shadowOffsetX":0,"borderColor":"inherit","shadowOffsetY":0,"color":"inherit","shadowBlur":0,"borderWidth":0,"opacity":1,"shadowColor":"transparent"},"right":"auto","top":"auto","borderRadius":0,"lineStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"color":"inherit","shadowBlur":0,"width":"auto","type":"inherit","opacity":1,"shadowColor":"transparent"},"left":"right","borderWidth":0,"width":"75%","itemWidth":20,"textStyle":{"textBorderWidth":0,"color":"#fff","textShadowColor":"transparent","ellipsis":"...","overflow":"none","fontSize":12,"lineHeight":24,"textShadowOffsetX":0,"textShadowOffsetY":0,"textBorderType":"solid","fontWeight":500,"textBorderColor":"transparent","textShadowBlur":0},"shadowColor":"rgba(0,0,0,.3)","height":"auto"},"series":{"itemStyle":{"borderType":"solid","shadowOffsetX":0,"borderColor":"#fff","shadowOffsetY":0,"color":"","shadowBlur":0,"borderWidth":0,"opacity":1,"shadowColor":"#000"},"label":{"borderType":"solid","rotate":0,"padding":0,"textBorderWidth":0,"backgroundColor":"transparent","borderColor":"#fff","color":"#fff","show":true,"textShadowColor":"transparent","distanceToLabelLine":5,"ellipsis":"...","overflow":"none","borderRadius":0,"borderWidth":0,"fontSize":12,"lineHeight":18,"textShadowOffsetX":0,"position":"outside","textShadowOffsetY":0,"textBorderType":"solid","textBorderColor":"#fff","textShadowBlur":0},"labelLine":{"show":true,"length":10,"lineStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"color":"#fff","shadowBlur":0,"width":1,"type":"solid","opacity":1,"shadowColor":"#000"},"length2":14,"smooth":false}}},
			funnel: {"tooltip":{"backgroundColor":"#123","textStyle":{"color":"#fff"}},"backgroundColor":"transparent","color":["#5470c6","#91cc75","#fac858","#ee6666","#73c0de","#3ba272","#fc8452","#9a60b4","#ea7ccc"],"title":{"borderType":"solid","padding":2,"shadowOffsetX":0,"backgroundColor":"transparent","borderColor":"#ccc","shadowOffsetY":0,"shadowBlur":0,"bottom":"auto","show":true,"right":"auto","top":"auto","borderRadius":0,"left":"center","borderWidth":1,"textStyle":{"textBorderWidth":0,"color":"#fff","textShadowColor":"transparent","fontSize":14,"lineHeight":24,"textShadowOffsetX":0,"textShadowOffsetY":0,"textBorderType":"solid","fontWeight":500,"textBorderColor":"#ccc","textShadowBlur":0},"shadowColor":"transparent"},"legend":{"padding":5,"itemGap":10,"shadowOffsetX":0,"backgroundColor":"transparent","borderColor":"#ccc","shadowOffsetY":0,"orient":"vertical","shadowBlur":0,"bottom":"auto","itemHeight":14,"show":true,"icon":"roundRect","itemStyle":{"borderType":"solid","shadowOffsetX":0,"borderColor":"inherit","shadowOffsetY":0,"color":"inherit","shadowBlur":0,"borderWidth":0,"opacity":1,"shadowColor":"transparent"},"top":"auto","borderRadius":0,"lineStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"color":"inherit","shadowBlur":0,"width":"auto","type":"inherit","opacity":1,"shadowColor":"transparent"},"left":"left","borderWidth":0,"width":"auto","itemWidth":25,"textStyle":{"textBorderWidth":0,"color":"#fff","textShadowColor":"transparent","ellipsis":"...","overflow":"none","fontSize":12,"lineHeight":24,"textShadowOffsetX":0,"textShadowOffsetY":0,"textBorderType":"solid","fontWeight":500,"textBorderColor":"transparent","textShadowBlur":0},"shadowColor":"rgba(0,0,0,.3)","height":"auto"},"series":{"itemStyle":{"borderType":"solid","shadowOffsetX":0,"borderColor":"#000","shadowOffsetY":0,"color":"","shadowBlur":0,"borderWidth":0,"opacity":1,"shadowColor":"#000"},"label":{"borderType":"solid","rotate":0,"padding":0,"textBorderWidth":0,"backgroundColor":"transparent","borderColor":"#fff","color":"","show":true,"textShadowColor":"transparent","distanceToLabelLine":5,"ellipsis":"...","overflow":"none","borderRadius":0,"borderWidth":0,"fontSize":12,"lineHeight":18,"textShadowOffsetX":0,"position":"outside","textShadowOffsetY":0,"textBorderType":"solid","textBorderColor":"#fff","textShadowBlur":0},"labelLine":{"show":true,"length":10,"lineStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"shadowBlur":0,"width":1,"type":"solid","opacity":1,"shadowColor":"#000"},"length2":14,"smooth":false}}},
			boardBase: {"funnelNum":8,"lineNum":8,"gaugeNum":8,"barNum":8,"pieNum":8},
			gauge: {"tooltip":{"formatter":"{b} : {c}","trigger":"item"},"backgroundColor":"transparent","color":["#5470c6","#91cc75","#fac858","#ee6666","#73c0de","#3ba272","#fc8452","#9a60b4","#ea7ccc"],"title":{"top":"top","left":"left","textStyle":{"textBorderWidth":0,"color":"#ccc","textShadowColor":"transparent","fontSize":14,"lineHeight":24,"textShadowOffsetX":0,"textShadowOffsetY":0,"textBorderType":"solid","fontWeight":500,"textBorderColor":"#ccc","textShadowBlur":0}},"series":{"pointer":{"offsetCenter":[0,"10%"],"icon":"path://M2.9,0.7L2.9,0.7c1.4,0,2.6,1.2,2.6,2.6v115c0,1.4-1.2,2.6-2.6,2.6l0,0c-1.4,0-2.6-1.2-2.6-2.6V3.3C0.3,1.9,1.4,0.7,2.9,0.7z","width":8,"length":"80%"},"axisLine":{"lineStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"opacity":0.5,"shadowBlur":1,"shadowColor":"#000"},"roundCap":true},"anchor":{"show":true,"itemStyle":{"color":"inherit"},"size":18,"showAbove":true},"emphasis":{"disabled":false},"progress":{"show":true,"roundCap":true,"overlap":true},"splitNumber":25,"detail":{"formatter":"{value}","backgroundColor":"inherit","color":"#fff","borderRadius":3,"width":20,"fontSize":12,"height":8},"title":{"color":"#ccc","fontSize":12},"animation":true}},
		};
	},
	mounted(){
		this.init();
	},
	methods:{
		// 词云
		wordclouds(wordcloudData,echartsId) {
			let wordcloud = {"maskImage":"data:image/png;base64,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","option":{"tooltip":{"show":false},"backgroundColor":"transparent","series":[{"sizeRange":[9,32],"layoutAnimation":true,"shape":"circle","data":[{"name":"花鸟市场","value":1446},{"name":"汽车","value":928},{"name":"视频","value":906},{"name":"电视","value":825},{"name":"Lover Boy 88","value":514},{"name":"动漫","value":486},{"name":"音乐","value":53},{"name":"直播","value":163},{"name":"广播电台","value":86},{"name":"戏曲曲艺","value":17},{"name":"演出票务","value":6},{"name":"给陌生的你听","value":1},{"name":"资讯","value":1437},{"name":"商业财经","value":422},{"name":"娱乐八卦","value":353},{"name":"军事","value":331},{"name":"科技资讯","value":313},{"name":"社会时政","value":307},{"name":"时尚","value":43},{"name":"网络奇闻","value":15},{"name":"旅游出行","value":438},{"name":"景点类型","value":957},{"name":"国内游","value":927},{"name":"远途出行方式","value":908},{"name":"酒店","value":693},{"name":"关注景点","value":611},{"name":"旅游网站偏好","value":512},{"name":"出国游","value":382},{"name":"交通票务","value":312},{"name":"旅游方式","value":187},{"name":"旅游主题","value":163},{"name":"港澳台","value":104},{"name":"本地周边游","value":3},{"name":"小卖家","value":1331},{"name":"全日制学校","value":941},{"name":"基础教育科目","value":585},{"name":"考试培训","value":473},{"name":"语言学习","value":358},{"name":"留学","value":246},{"name":"K12课程培训","value":207},{"name":"艺术培训","value":194},{"name":"技能培训","value":104},{"name":"IT培训","value":87},{"name":"高等教育专业","value":63},{"name":"家教","value":48},{"name":"体育培训","value":23},{"name":"职场培训","value":5},{"name":"金融财经","value":1328},{"name":"银行","value":765},{"name":"股票","value":452},{"name":"保险","value":415},{"name":"贷款","value":253},{"name":"基金","value":211},{"name":"信用卡","value":180},{"name":"外汇","value":138},{"name":"P2P","value":116},{"name":"贵金属","value":98},{"name":"债券","value":93},{"name":"网络理财","value":92},{"name":"信托","value":90},{"name":"征信","value":76},{"name":"期货","value":76},{"name":"公积金","value":40},{"name":"银行理财","value":36},{"name":"银行业务","value":30},{"name":"典当","value":7},{"name":"海外置业","value":1},{"name":"汽车","value":1309},{"name":"汽车档次","value":965},{"name":"汽车品牌","value":900},{"name":"汽车车型","value":727},{"name":"购车阶段","value":461},{"name":"二手车","value":309},{"name":"汽车美容","value":260},{"name":"新能源汽车","value":173},{"name":"汽车维修","value":155},{"name":"租车服务","value":136},{"name":"车展","value":121},{"name":"违章查询","value":76},{"name":"汽车改装","value":62},{"name":"汽车用品","value":37},{"name":"路况查询","value":32},{"name":"汽车保险","value":28},{"name":"陪驾代驾","value":4},{"name":"网络购物","value":1275},{"name":"做我的猫","value":1088},{"name":"只想要你知道","value":907},{"name":"团购","value":837},{"name":"比价","value":201},{"name":"海淘","value":195},{"name":"移动APP购物","value":179},{"name":"支付方式","value":119},{"name":"代购","value":43},{"name":"体育健身","value":1234},{"name":"体育赛事项目","value":802},{"name":"运动项目","value":405},{"name":"体育类赛事","value":337},{"name":"健身项目","value":199},{"name":"健身房健身","value":78},{"name":"运动健身","value":77},{"name":"家庭健身","value":36},{"name":"健身器械","value":29},{"name":"办公室健身","value":3},{"name":"商务服务","value":1201},{"name":"法律咨询","value":508},{"name":"化工材料","value":147},{"name":"广告服务","value":125},{"name":"会计审计","value":115},{"name":"人员招聘","value":101},{"name":"印刷打印","value":66},{"name":"知识产权","value":32},{"name":"翻译","value":22},{"name":"安全安保","value":9},{"name":"公关服务","value":8},{"name":"商旅服务","value":2},{"name":"展会服务","value":2},{"name":"特许经营","value":1},{"name":"休闲爱好","value":1169},{"name":"收藏","value":412},{"name":"摄影","value":393},{"name":"温泉","value":230},{"name":"博彩彩票","value":211},{"name":"美术","value":207},{"name":"书法","value":139},{"name":"DIY手工","value":75},{"name":"舞蹈","value":23},{"name":"钓鱼","value":21},{"name":"棋牌桌游","value":17},{"name":"KTV","value":6},{"name":"密室","value":5},{"name":"采摘","value":4},{"name":"电玩","value":1},{"name":"真人CS","value":1},{"name":"轰趴","value":1},{"name":"家电数码","value":1111},{"name":"手机","value":885},{"name":"电脑","value":543},{"name":"大家电","value":321},{"name":"家电关注品牌","value":253},{"name":"网络设备","value":162},{"name":"摄影器材","value":149},{"name":"影音设备","value":133},{"name":"办公数码设备","value":113},{"name":"生活电器","value":67},{"name":"厨房电器","value":54},{"name":"智能设备","value":45},{"name":"个人护理电器","value":22},{"name":"服饰鞋包","value":1047},{"name":"服装","value":566},{"name":"饰品","value":289},{"name":"鞋","value":184},{"name":"箱包","value":168},{"name":"奢侈品","value":137},{"name":"母婴亲子","value":1041},{"name":"孕婴保健","value":505},{"name":"母婴社区","value":299},{"name":"早教","value":103},{"name":"奶粉辅食","value":66},{"name":"童车童床","value":41},{"name":"关注品牌","value":271},{"name":"宝宝玩乐","value":30},{"name":"母婴护理服务","value":25},{"name":"纸尿裤湿巾","value":16},{"name":"妈妈用品","value":15},{"name":"宝宝起名","value":12},{"name":"童装童鞋","value":9},{"name":"胎教","value":8},{"name":"宝宝安全","value":1},{"name":"宝宝洗护用品","value":1},{"name":"软件应用","value":1018},{"name":"系统工具","value":896},{"name":"理财购物","value":440},{"name":"生活实用","value":365},{"name":"影音图像","value":256},{"name":"社交通讯","value":214},{"name":"手机美化","value":39},{"name":"办公学习","value":28},{"name":"应用市场","value":23},{"name":"母婴育儿","value":14},{"name":"游戏","value":946},{"name":"手机游戏","value":565},{"name":"PC游戏","value":353},{"name":"网页游戏","value":254},{"name":"游戏机","value":188},{"name":"模拟辅助","value":166},{"name":"个护美容","value":942},{"name":"护肤品","value":177},{"name":"彩妆","value":133},{"name":"美发","value":80},{"name":"香水","value":50},{"name":"个人护理","value":46},{"name":"美甲","value":26},{"name":"SPA美体","value":21},{"name":"花鸟萌宠","value":914},{"name":"绿植花卉","value":311},{"name":"狗","value":257},{"name":"其他宠物","value":131},{"name":"水族","value":125},{"name":"猫","value":122},{"name":"动物","value":81},{"name":"鸟","value":67},{"name":"宠物用品","value":41},{"name":"宠物服务","value":26},{"name":"书籍阅读","value":913},{"name":"网络小说","value":483},{"name":"关注书籍","value":128},{"name":"文学","value":105},{"name":"报刊杂志","value":77},{"name":"人文社科","value":22},{"name":"建材家居","value":907},{"name":"装修建材","value":644},{"name":"家具","value":273},{"name":"家居风格","value":187},{"name":"家居家装关注品牌","value":140},{"name":"家纺","value":107},{"name":"厨具","value":47},{"name":"灯具","value":43},{"name":"家居饰品","value":29},{"name":"家居日常用品","value":10},{"name":"生活服务","value":883},{"name":"物流配送","value":536},{"name":"家政服务","value":108},{"name":"摄影服务","value":49},{"name":"搬家服务","value":38},{"name":"物业维修","value":37},{"name":"婚庆服务","value":24},{"name":"二手回收","value":24},{"name":"鲜花配送","value":3},{"name":"维修服务","value":3},{"name":"殡葬服务","value":1},{"name":"求职创业","value":874},{"name":"创业","value":363},{"name":"目标职位","value":162},{"name":"目标行业","value":50},{"name":"兼职","value":21},{"name":"期望年薪","value":20},{"name":"实习","value":16},{"name":"雇主类型","value":10},{"name":"星座运势","value":789},{"name":"星座","value":316},{"name":"算命","value":303},{"name":"解梦","value":196},{"name":"风水","value":93},{"name":"面相分析","value":47},{"name":"手相","value":32},{"name":"公益","value":90}],"keepAspect":false,"type":"wordCloud","rotationRange":[-90,90],"gridSize":8,"shrinkToFit":false,"top":"center","left":"center","width":"80%","emphasis":{"focus":"self","textStyle":{"textShadowColor":"#333","textShadowBlur":4}},"drawOutOfBound":false,"rotationStep":45,"textStyle":{"color":"function(){return\"rgb(\"+[Math.round(160*Math.random()),Math.round(160*Math.random()),Math.round(160*Math.random())].join(\",\")+\")\"}","fontWeight":500,"fontFamily":"sans-serif"},"height":"80%","maskImage":{}}]}}
			wordcloud = JSON.parse(JSON.stringify(wordcloud), (k, v) => {
			  if(typeof v == 'string' && v.indexOf('function') > -1){
				return eval("(function(){return "+v+" })()")
			  }
			  return v;
			})
			wordcloud.option.series[0].data=wordcloudData;
			
			this.myChart0 = echarts.init(document.getElementById(echartsId));
			let myChart = this.myChart0
			let img = wordcloud.maskImage
		
			if (img) {
				var maskImage = new Image();
				maskImage.src = img
				maskImage.onload = function() {
					wordcloud.option.series[0].maskImage = maskImage
					myChart.clear()
					myChart.setOption(wordcloud.option)
				}
			} else {
				delete wordcloud.option.series[0].maskImage
				myChart.clear()
				myChart.setOption(wordcloud.option)
			}
		},
		// 统计图动画
		myChartInterval(type, xAxisData, seriesData, myChart) {
			this.$nextTick(() => {
				setInterval(() => {
					let xAxis = xAxisData.shift()
					xAxisData.push(xAxis)
					let series = seriesData.shift()
					seriesData.push(series)
				
					if (type == 1) {
						myChart.setOption({
							xAxis: [{
								data: xAxisData
							}],
							series: [{
								data: seriesData
							}]
						});
					}
					if (type == 2) {
						myChart.setOption({
							yAxis: [{
								data: xAxisData
							}],
							series: [{
								data: seriesData
							}]
						});
					}
				}, 2000);
			})
		},
		init(){
			if(this.$storage.get('Token')){
			this.$http({
				url: `${this.$storage.get('sessionTable')}/session`,
				method: "get"
			}).then(({ data }) => {
				if (data && data.code != 0) {
				router.push({ name: 'login' })
				}
			});
			}else{
				router.push({ name: 'login' })
			}
		},
  }
};
</script>
<style lang="scss" scoped>
    .cardView {
        display: flex;
        flex-wrap: wrap;
        width: 100%;

        .cards {
            display: flex;
            align-items: center;
            width: 100%;
            margin-bottom: 10px;
            justify-content: center;
            .card {
                width: calc(25% - 20px);
                margin: 0 10px;
                /deep/.el-card__body{
                    padding: 0;
                }
            }
        }
    }
	
	// 日历
	.calendar td .text {
				border-radius: 12px;
				flex-direction: column;
				background: #fff;
				display: flex;
				width: 100%;
				justify-content: center;
				align-items: center;
				height: 100%;
			}
	.calendar td .text:hover {
				background: rgba(78,110,242,.1);
			}
	.calendar td .text .new {
				color: #000;
				font-size: 24px;
				line-height: 1.4;
			}
	.calendar td .text .old {
				color: #666;
				font-size: 16px;
				line-height: 1.4;
			}
	.calendar td.festival .text {
				border-radius: 12px;
				flex-direction: column;
				background: rgba(235,51,51,.05);
				display: flex;
				width: 100%;
				justify-content: center;
				align-items: center;
				height: 100%;
			}
	.calendar td.festival .text:hover {
				background: rgba(78,110,242,.1);
			}
	.calendar td.festival .text .new {
				color: #000;
				font-size: 24px;
				line-height: 1.4;
			}
	.calendar td.festival .text .old {
				color: #666;
				font-size: 16px;
				line-height: 1.4;
			}
	.calendar td.other .text {
				border-radius: 12px;
				flex-direction: column;
				background: #fff;
				display: flex;
				width: 100%;
				justify-content: center;
				align-items: center;
				opacity: 0.3;
				height: 100%;
			}
	.calendar td.other .text:hover {
				background: rgba(78,110,242,.1);
			}
	.calendar td.other .text .new {
				color: #000;
				font-size: 24px;
				line-height: 1.4;
			}
	.calendar td.other .text .old {
				color: #666;
				font-size: 16px;
				line-height: 1.4;
			}
	.calendar td.today .text {
				border-radius: 12px;
				flex-direction: column;
				color: #fff;
				background: rgb(64, 158, 255);
				display: flex;
				width: 100%;
				justify-content: center;
				align-items: center;
				height: 100%;
			}
	.calendar td.today .text:hover {
				background: rgba(64, 158, 255,.5);
			}
	.calendar td.today .text .new {
				color: inherit;
				font-size: 24px;
				line-height: 1.4;
			}
	.calendar td.today .text .old {
				color: inherit;
				font-size: 16px;
				line-height: 1.4;
			}
	
	// echarts1
	.type1 .echarts1 {
				border-radius: 8px;
				padding: 20px;
				margin: 10px 0;
				background: rgba(255,255,255,.1);
				width: 100%;
				position: relative;
				transition: 0.3s;
				height: 400px;
			}
	.type1 .echarts1:hover {
				box-shadow: 1px 1px 20px rgba(255,255,255,.12);
				transform: translate3d(0, -10px, 0);
				z-index: 1;
				background: rgba(255,255,255,.12);
			}
	// echarts2
	.type2 .echarts1 {
				border-radius: 8px;
				padding: 20px;
				margin: 10px 0;
				background: rgba(255,255,255,.1);
				width: 49%;
				position: relative;
				transition: 0.3s;
				height: 400px;
			}
	.type2 .echarts1:hover {
				box-shadow: 1px 1px 20px rgba(255,255,255,.12);
				transform: translate3d(0, -10px, 0);
				z-index: 1;
				background: rgba(255,255,255,.12);
			}
	.type2 .echarts2 {
				border-radius: 8px;
				padding: 20px;
				margin: 10px 0;
				background: rgba(255,255,255,.1);
				width: 49%;
				position: relative;
				transition: 0.3s;
				height: 400px;
			}
	.type2 .echarts2:hover {
				box-shadow: 1px 1px 20px rgba(255,255,255,.12);
				transform: translate3d(0, -10px, 0);
				z-index: 1;
				background: rgba(255,255,255,.12);
			}
	// echarts3
	.type3 .echarts1 {
				border-radius: 8px;
				padding: 20px;
				margin: 10px 0;
				background: rgba(255,255,255,.1);
				width: 100%;
				position: relative;
				transition: 0.3s;
				height: 400px;
			}
	.type3 .echarts1:hover {
				box-shadow: 1px 1px 20px rgba(255,255,255,.12);
				transform: translate3d(0, -10px, 0);
				z-index: 1;
				background: rgba(255,255,255,.12);
			}
	.type3 .echarts2 {
				border-radius: 8px;
				padding: 20px;
				margin: 10px 0;
				background: rgba(255,255,255,.1);
				width: 49%;
				position: relative;
				transition: 0.3s;
				height: 400px;
			}
	.type3 .echarts2:hover {
				box-shadow: 1px 1px 20px rgba(255,255,255,.12);
				transform: translate3d(0, -10px, 0);
				z-index: 1;
				background: rgba(255,255,255,.12);
			}
	.type3 .echarts3 {
				border-radius: 8px;
				padding: 20px;
				margin: 10px 0;
				background: rgba(255,255,255,.1);
				width: 49%;
				position: relative;
				transition: 0.3s;
				height: 400px;
			}
	.type3 .echarts3:hover {
				box-shadow: 1px 1px 20px rgba(255,255,255,.12);
				transform: translate3d(0, -10px, 0);
				z-index: 1;
				background: rgba(255,255,255,.12);
			}
	// echarts4
	.type4 .echarts1 {
				border-radius: 8px;
				padding: 20px;
				margin: 10px 0;
				background: rgba(255,255,255,.1);
				width: 49%;
				position: relative;
				transition: 0.3s;
				height: 400px;
			}
	.type4 .echarts1:hover {
				box-shadow: 1px 1px 20px rgba(255,255,255,.12);
				transform: translate3d(0, -10px, 0);
				z-index: 1;
				background: rgba(255,255,255,.12);
			}
	.type4 .echarts2 {
				border-radius: 8px;
				padding: 20px;
				margin: 10px 0;
				background: rgba(255,255,255,.1);
				width: 49%;
				position: relative;
				transition: 0.3s;
				height: 400px;
			}
	.type4 .echarts2:hover {
				box-shadow: 1px 1px 20px rgba(255,255,255,.12);
				transform: translate3d(0, -10px, 0);
				z-index: 1;
				background: rgba(255,255,255,.12);
			}
	.type4 .echarts3 {
				border-radius: 8px;
				padding: 20px;
				margin: 10px 0;
				background: rgba(255,255,255,.1);
				width: 49%;
				position: relative;
				transition: 0.3s;
				height: 400px;
			}
	.type4 .echarts3:hover {
				box-shadow: 1px 1px 20px rgba(255,255,255,.12);
				transform: translate3d(0, -10px, 0);
				z-index: 1;
				background: rgba(255,255,255,.12);
			}
	.type4 .echarts4 {
				border-radius: 8px;
				padding: 20px;
				margin: 10px 0;
				background: rgba(255,255,255,.1);
				width: 49%;
				position: relative;
				transition: 0.3s;
				height: 400px;
			}
	.type4 .echarts4:hover {
				box-shadow: 1px 1px 20px rgba(255,255,255,.12);
				transform: translate3d(0, -10px, 0);
				z-index: 1;
				background: rgba(255,255,255,.12);
			}
	// echarts5
	.type5 .echarts1 {
				border-radius: 8px;
				padding: 20px;
				margin: 10px 0;
				background: rgba(255,255,255,.1);
				width: 100%;
				position: relative;
				transition: 0.3s;
				height: 400px;
			}
	.type5 .echarts1:hover {
				box-shadow: 1px 1px 20px rgba(255,255,255,.12);
				transform: translate3d(0, -10px, 0);
				z-index: 1;
				background: rgba(255,255,255,.12);
			}
	.type5 .echarts2 {
				border-radius: 8px;
				padding: 20px;
				margin: 10px 0;
				background: rgba(255,255,255,.1);
				width: 49%;
				position: relative;
				transition: 0.3s;
				height: 400px;
			}
	.type5 .echarts2:hover {
				box-shadow: 1px 1px 20px rgba(255,255,255,.12);
				transform: translate3d(0, -10px, 0);
				z-index: 1;
				background: rgba(255,255,255,.12);
			}
	.type5 .echarts3 {
				border-radius: 8px;
				padding: 20px;
				margin: 10px 0;
				background: rgba(255,255,255,.1);
				width: 49%;
				position: relative;
				transition: 0.3s;
				height: 400px;
			}
	.type5 .echarts3:hover {
				box-shadow: 1px 1px 20px rgba(255,255,255,.12);
				transform: translate3d(0, -10px, 0);
				z-index: 1;
				background: rgba(255,255,255,.12);
			}
	.type5 .echarts4 {
				border-radius: 8px;
				padding: 20px;
				margin: 10px 0;
				background: rgba(255,255,255,.1);
				width: 49%;
				position: relative;
				transition: 0.3s;
				height: 400px;
			}
	.type5 .echarts4:hover {
				box-shadow: 1px 1px 20px rgba(255,255,255,.12);
				transform: translate3d(0, -10px, 0);
				z-index: 1;
				background: rgba(255,255,255,.12);
			}
	.type5 .echarts5 {
				border-radius: 8px;
				padding: 20px;
				margin: 10px 0;
				background: rgba(255,255,255,.1);
				width: 49%;
				position: relative;
				transition: 0.3s;
				height: 400px;
			}
	.type5 .echarts5:hover {
				box-shadow: 1px 1px 20px rgba(255,255,255,.12);
				transform: translate3d(0, -10px, 0);
				z-index: 1;
				background: rgba(255,255,255,.12);
			}
	
	.echarts-flag-2 {
	  display: flex;
	  flex-wrap: wrap;
	  justify-content: space-between;
	  padding: 10px 20px;
	  background: rebeccapurple;
	
	  &>div {
	    width: 32%;
	    height: 300px;
	    margin: 10px 0;
	    background: rgba(255,255,255,.1);
	    border-radius: 8px;
	    padding: 10px 20px;
	  }
	}
</style>
