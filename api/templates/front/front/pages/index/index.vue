<template>
<view class="content">
	<view :style='{"minHeight":"100vh","padding":"40rpx 0px 0","overflow":"hidden","alignItems":"flex-start","flexWrap":"wrap","background":"#f2f2f2","flexDirection":"row","display":"flex","width":"100%","height":"auto"}'>
		<swiper :style='{"width":"100%","background":"#fff","height":"360rpx"}' class="swiper" :indicator-dots='true' :autoplay='true' :circular='true' indicator-active-color='#000000' indicator-color='rgba(0, 0, 0, .3)' :duration='500' :interval='5000' :vertical='false'>
			<swiper-item :style='{"width":"100%","background":"#fff","height":"360rpx"}' v-for="(swiper,index) in swiperList" :key="index" @tap="onSwiperTap(swiper)">
				<image :style='{"width":"100%","objectFit":"cover","display":"block","height":"360rpx"}' mode="aspectFill" :src="baseUrl+swiper.img"></image>
				<view v-if="false" :style='{"width":"100%","padding":"0 8rpx","lineHeight":"60rpx","fontSize":"28rpx","color":"#333","background":"#fff"}'>{{ swiper.title }}</view>
			</swiper-item>
		</swiper>
		<!-- menu -->
        <view style="width: 100%" v-if="swiperMenuList.length">
            <swiper :style='{"padding":"48rpx 0 24rpx","margin":"40rpx auto 0","borderRadius":"20rpx","flexWrap":"wrap","background":"url(http://codegen.caihongy.cn/20240120/bc011ede0c2b41fdaedb4a8f216e84c3.png) no-repeat right top / 40% 48rpx,#8fd4fe","display":"flex","width":"calc(100% - 48rpx)","justifyContent":"space-between"}' class="swiper">
                <swiper-item v-for="(swiper,index) in (new Array(Number(Math.ceil(swiperMenuList.length / (rows * column)))).fill('').map((val, i) => i+1))" :key="index">
                    <view v-for="(row, index1) in (new Array(Number(rows)).fill('').map((val, i) => i+1))" :key="index1" style="display: flex;flex-wrap: wrap;">
                        <view v-for="(col, index2) in (new Array(Number(column)).fill('').map((val, i) => i+1))" :key="index2" v-if="(((row+rows*(swiper-1) -1)*column + col -1)<swiperMenuList.length)" :style='{"width":"25%","padding":"0px 0","margin":"12rpx 0","height":"auto"}' class="menu-list">
                            <view :class="swiperMenuList[(row+rows*(swiper-1) -1)*column + col -1].child[0].appFrontIcon" @tap="onPageTap2('../'+swiperMenuList[(row+rows*(swiper-1) -1)*column + col -1].child[0].tableName+'/list')" :style='{"padding":"0px","margin":"0px auto","color":"#ff5f15","borderRadius":"100%","textAlign":"center","background":"#fff","display":"block","width":"88rpx","lineHeight":"88rpx","fontSize":"64rpx","height":"88rpx"}'>
                            </view>
                            <view :style='{"padding":"0","margin":"12rpx auto 0","color":"#333","textAlign":"center","width":"100%","lineHeight":"28rpx","fontSize":"28rpx"}'>{{swiperMenuList[(row+rows*(swiper-1) -1)*column + col -1].child[0].menu.split("列表")[0]}} </view>
                        </view>
                    </view>
                </swiper-item>
            </swiper>
        </view>
		<!-- menu -->
		<!-- 商品推荐 -->
		<view class="listBox recommend" :style='{"width":"calc(100% - 48rpx)","padding":"24rpx","margin":"40rpx auto 0","borderRadius":"32rpx","background":"url(http://codegen.caihongy.cn/20240120/132684a01ac54ff09903348219e185a9.png) no-repeat right top,#7ce1ff","order":"3"}'>
			<view class="title" :style='{"padding":"0 0px","margin":"0","textAlign":"left","background":"none","width":"100%","lineHeight":"80rpx","height":"auto"}'>
				<view :style='{"color":"#fff","fontSize":"32rpx","fontWeight":"600"}'>心理文章推荐</view>
			</view>
			<!-- 样式1 -->
			<view class="list-box style1" :style='{"padding":"0","margin":"20rpx 0 0","color":"#fff","flexWrap":"wrap","display":"flex","width":"100%","justifyContent":"space-between","height":"auto"}'>
				<view @tap="onDetailTap('xinliwenzhang',product.id)" v-for="(product,index) in xinliwenzhanglist" :key="index" class="list-item" :style='{"padding":"20rpx","margin":"0 0 40rpx","borderRadius":"24rpx","flexWrap":"wrap","background":"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,190,88,1) 100%)","display":"flex","width":"48%","height":"auto"}'>
					<view :style='{"padding":"4rpx 0px","overflow":"hidden","whiteSpace":"nowrap","color":"#333","textAlign":"center","width":"100%","lineHeight":"1.5","fontSize":"28rpx","textOverflow":"ellipsis","fontWeight":"500"}' class="list-item-title ">{{product.wenzhangbiaoti}}</view>
					<image :style='{"padding":"0","margin":"0","objectFit":"cover","borderRadius":"0 20%","display":"block","width":"100%","height":"200rpx","order":"-1"}' class="list-item-image" mode="aspectFill" v-if="product.fengmian.substring(0,4)=='http'" :src="product.fengmian"></image>
					<image :style='{"padding":"0","margin":"0","objectFit":"cover","borderRadius":"0 20%","display":"block","width":"100%","height":"200rpx","order":"-1"}' class="list-item-image" mode="aspectFill" v-else :src="product.fengmian?baseUrl+product.fengmian.split(',')[0]:''"></image>
					<view :style='{"width":"100%","padding":"0 20rpx","display":"none"}'>
					  <text class="icon iconfont icon-shijian21" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"24rpx","color":"inherit"}'></text>
					  <text :style='{"color":"inherit","lineHeight":"1.5","fontSize":"24rpx"}'>{{product.addtime}}</text>
					</view>
					<view :style='{"padding":"0 0px","margin":"0 10rpx 0 0","display":"inline-block"}'>
					  <text class="icon iconfont icon-zan10" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"24rpx","color":"inherit"}'></text>
					  <text :style='{"color":"inherit","lineHeight":"1.5","fontSize":"24rpx"}'>{{product.thumbsupnum}}</text>
					</view>
					<view :style='{"padding":"0 0px","margin":"0 10rpx 0 0","display":"inline-block"}'>
					  <text class="icon iconfont icon-shoucang10" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"24rpx","color":"inherit"}'></text>
					  <text :style='{"color":"inherit","lineHeight":"1.5","fontSize":"24rpx"}'>{{product.storeupnum}}</text>
					</view>
					<view :style='{"padding":"0 0px","margin":"0 10rpx 0 0","display":"inline-block"}'>
					  <text class="icon iconfont icon-chakan2" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"24rpx","color":"inherit"}'></text>
					  <text :style='{"color":"inherit","lineHeight":"1.5","fontSize":"24rpx"}'>{{product.clicknum}}</text>
					</view>
				</view>
			</view>
		</view>
		<!-- 商品推荐 -->
		
		<!-- 商品列表 -->
		<view class="listBox list" :style='{"width":"calc(100% - 48rpx)","padding":"24rpx","margin":"40rpx auto 0","borderRadius":"32rpx","background":"url(http://codegen.caihongy.cn/20240120/132684a01ac54ff09903348219e185a9.png) no-repeat right top,#7ce1ff","order":"3"}'>
			<view class="title" :style='{"padding":"0 0px","margin":"0","borderRadius":"16rpx","textAlign":"left","background":"none","display":"block","width":"100%","lineHeight":"80rpx","position":"relative","justifyContent":"space-between","height":"80rpx"}'>
				<view :style='{"color":"#fff","fontSize":"32rpx","fontWeight":"600"}'>心理文章</view>
				<view :style='{"padding":"0 0px","top":"-32rpx","borderRadius":"60rpx","background":"none","display":"block","position":"absolute","right":"0px","height":"48rpx"}' @tap="onPageTap('xinliwenzhang')">
				  <text :style='{"color":"#888","fontSize":"26rpx"}'>更多>></text>
				  <text class="icon iconfont " :style='{"color":"#fff","fontSize":"26rpx"}'></text>
				</view>
			</view>
		  <!-- 样式1 -->
		  <view class="list-box style1" :style='{"padding":"0","margin":"20rpx 0 0","color":"#fff","flexWrap":"wrap","display":"flex","width":"100%","justifyContent":"space-between","height":"auto"}'>
			<view @tap="onDetailTap('xinliwenzhang',product.id)" v-for="(product,index) in homexinliwenzhanglist" :key="index" class="list-item" :style='{"padding":"20rpx","margin":"0 0 40rpx","borderRadius":"24rpx","flexWrap":"wrap","background":"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,190,88,1) 100%)","display":"flex","width":"48%","height":"auto"}'>
			  <view :style='{"padding":"4rpx 0px","overflow":"hidden","whiteSpace":"nowrap","color":"#333","textAlign":"center","width":"100%","lineHeight":"1.5","fontSize":"28rpx","textOverflow":"ellipsis","fontWeight":"500"}' class="list-item-title ">{{product.wenzhangbiaoti}}</view>
			  <image :style='{"padding":"0","margin":"0","objectFit":"cover","borderRadius":"0 20%","display":"block","width":"100%","height":"200rpx","order":"-1"}' class="list-item-image" mode="aspectFill" v-if="product.fengmian.substring(0,4)=='http'" :src="product.fengmian"></image>
			  <image :style='{"padding":"0","margin":"0","objectFit":"cover","borderRadius":"0 20%","display":"block","width":"100%","height":"200rpx","order":"-1"}' class="list-item-image" mode="aspectFill" v-else :src="product.fengmian?baseUrl+product.fengmian.split(',')[0]:''"></image>
			  <view :style='{"padding":"0 20rpx","display":"none"}'>
			    <text class="icon iconfont icon-shijian21" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"24rpx","color":"inherit"}'></text>
			    <text :style='{"color":"inherit","lineHeight":"1.5","fontSize":"24rpx"}'>{{product.addtime}}</text>
			  </view>
			  <view :style='{"padding":"0 0px","margin":"0 10rpx 0 0","display":"inline-block"}'>
			    <text class="icon iconfont icon-zan10" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"24rpx","color":"inherit"}'></text>
			    <text :style='{"color":"inherit","lineHeight":"1.5","fontSize":"24rpx"}'>{{product.thumbsupnum}}</text>
			  </view>
			  <view :style='{"padding":"0 0px","margin":"0 10rpx 0 0","display":"inline-block"}'>
			    <text class="icon iconfont icon-shoucang10" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"24rpx","color":"inherit"}'></text>
			    <text :style='{"color":"inherit","lineHeight":"1.5","fontSize":"24rpx"}'>{{product.storeupnum}}</text>
			  </view>
			  <view :style='{"padding":"0 0px","margin":"0 10rpx 0 0","display":"inline-block"}'>
			    <text class="icon iconfont icon-chakan2" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"24rpx","color":"inherit"}'></text>
			    <text :style='{"color":"inherit","lineHeight":"1.5","fontSize":"24rpx"}'>{{product.clicknum}}</text>
			  </view>
			</view>
		  </view>
		</view>
		<!-- 商品列表 -->
		<!-- 新闻资讯 -->
		<!-- 新闻资讯 -->
	</view>
</view>
</template>

<script>
    import menu from '@/utils/menu'
	import '@/assets/css/global-restaurant.css'
	import uniIcons from "@/components/uni-ui/lib/uni-icons/uni-icons.vue"
	export default {
		components: {
			uniIcons
		},
		data() {
			return {
				options2: {
					effect: 'flip',
					loop : true
				},
				options3: {
					effect: 'cube',
					loop : true,
					cubeEffect: {
						shadow: true,
						slideShadows: true,
						shadowOffset: 20,
						shadowScale: 0.94,
					}
				},
				rows: 2,
				column: 4,
				iconArr: [
				  'cuIcon-same',
				  'cuIcon-deliver',
				  'cuIcon-evaluate',
				  'cuIcon-shop',
				  'cuIcon-ticket',
				  'cuIcon-cascades',
				  'cuIcon-discover',
				  'cuIcon-question',
				  'cuIcon-pic',
				  'cuIcon-filter',
				  'cuIcon-footprint',
				  'cuIcon-pulldown',
				  'cuIcon-pullup',
				  'cuIcon-moreandroid',
				  'cuIcon-refund',
				  'cuIcon-qrcode',
				  'cuIcon-remind',
				  'cuIcon-profile',
				  'cuIcon-home',
				  'cuIcon-message',
				  'cuIcon-link',
				  'cuIcon-lock',
				  'cuIcon-unlock',
				  'cuIcon-vip',
				  'cuIcon-weibo',
				  'cuIcon-activity',
				  'cuIcon-friendadd',
				  'cuIcon-friendfamous',
				  'cuIcon-friend',
				  'cuIcon-goods',
				  'cuIcon-selection'
				],
                role : '',
                menuList: [],
                swiperMenuList:[],
                user: {},
                tableName:'',

				//轮播
				swiperList: [],
				xinliwenzhanglist: [],
				homexinliwenzhanglist: [],
				news: [],
			}
		},
		watch: {
		},
		mounted() {
		},
		computed: {
			baseUrl() {
				return this.$base.url;
			},
		},
        async onLoad(){
            this.role = uni.getStorageSync("appRole");
            let table = uni.getStorageSync("nowTable");
            let res = await this.$api.session(table);
            this.user = res.data;
            this.tableName = table;
            let menus = menu.list();
            this.menuList = menus;
            this.menuList.forEach((item,key) => {
                if(key==0) {
                    item.frontMenu.forEach((item2,key2) => {
                        if(item2.child[0].buttons.indexOf("查看")>-1) {
                            this.swiperMenuList.push(item2);
                        }
                    })
                }
            })
        },
		async onShow() {
            let res;
			// 轮播图
			let swiperList = []
			res = await this.$api.list('config', {
				page: 1,
				limit: 5
			});
			for (let item of res.data.list) {
				if (item.name.indexOf('picture') >= 0 && item.value && item.value!="" && item.value!=null ) {
					swiperList.push({
						img: item.value,
                        title: item.name,
						url: item.url
					});
				}
			}
			if (swiperList) {
				this.swiperList = swiperList;
			}
			

			// 推荐信息
			this.getRecommendList()
			this.getHomeList()
			this.getNewsList()
		},
		methods: {
			uGetRect(selector, all) {
				return new Promise(resolve => {
					uni.createSelectorQuery()
					.in(this)
					[all ? 'selectAll' : 'select'](selector)
					.boundingClientRect(rect => {
						if (all && Array.isArray(rect) && rect.length) {
							resolve(rect);
						}
						if (!all && rect) {
							resolve(rect);
						}
					})
					.exec();
				});
			},
			cloneData(data) {
				return JSON.parse(JSON.stringify(data));
			},
			newsTabClick2(index){
				this.newsIndex2 = index
				this.getNewsList()
			},
			async getNewsList(){
				let res;
				let params = {
					page: 1,
					limit: 6,
					sort: 'id',
					order: 'desc',
				}
			},
			homeTabClick2(index,name){
				this['home' + name + 'Index2'] = index
				this.getHomeList()
			},
			async getHomeList(){
				let res;
				let params;
				params = {
					page:1,
					limit: 8,
				}
				res = await this.$api.list('xinliwenzhang', params);
				this.homexinliwenzhanglist = res.data.list
			},
			recommendTabClick2(index,name){
				this[name + 'Index2'] = index
				this.getRecommendList()
			},
			async getRecommendList(){
				let res;
				let params;
				// 推荐信息
				params = {
					page: 1,
					limit: 12,
				}
				res = await this.$api.recommend('xinliwenzhang', params);
				this.xinliwenzhanglist = res.data.list
				

			},
			//轮播图跳转
			onSwiperTap(e) {
				if(e.url) {
					if (e.url.indexOf('https') != -1) {
						window.open(e.url)
					} else {
						this.$utils.jump(e.url)
					}
				}
			},
			// 新闻详情
			onNewsDetailTap(id) {
				this.$utils.jump(`../news-detail/news-detail?id=${id}`)
			},
			// 推荐列表点击详情
			onDetailTap(tableName, id) {
				this.$utils.jump(`../${tableName}/detail?id=${id}`)
			},
			onPageTap(tableName){

				uni.navigateTo({
					url: `../${tableName}/list`,
					fail: function(){
						uni.switchTab({
							url: `../${tableName}/list`
						});
					}
				});
				// this.$utils.jump(`../${tableName}/list`)
			},
            onPageTap2(url) {
                uni.setStorageSync("useridTag",0);
                uni.navigateTo({
                    url: url,
                    fail: function() {
                        uni.switchTab({
                            url: url
                        });
                    }
                });
            }
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		min-height: calc(100vh - 44px);
		box-sizing: border-box;
	}

</style>
