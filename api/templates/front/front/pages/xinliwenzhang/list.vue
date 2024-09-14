<template>
<!-- category 2 -->
<mescroll-uni @init="mescrollInit" :up="upOption" :down="downOption" @down="downCallback" @up="upCallback">
	<view class="content">
		<view :style='{"minHeight":"100vh","padding":"24rpx 0 24rpx","alignItems":"flex-start","flexWrap":"wrap","background":"#f2f2f2","display":"block","width":"100%","position":"relative","height":"auto"}'>
			<view class="cu-bar bg-white search" :style='{"border":"0px solid #ff9593","padding":"0","margin":"0 auto","borderRadius":"12rpx","background":"none","display":"flex","width":"calc(100% - 48rpx)","height":"auto"}'>
				<picker v-if="queryList.length>1" mode="selector" :range="queryList" range-key="queryName" :value="queryIndex" @change="queryChange">
					<view :style='{"padding":"0 0 0 20rpx","borderColor":"#ff9593","borderRadius":"40rpx 0 0 40rpx","background":"#fff","borderWidth":"0","width":"60rpx","lineHeight":"80rpx","borderStyle":"solid","height":"80rpx"}'>
						<text class="icon iconfont icon-jiantou18" :style='{"width":"40rpx","fontSize":"40rpx","lineHeight":"80rpx","color":"#888"}'></text>
					</view>
				</picker>
				<view :style='{"margin":"0 0px","borderColor":"#ff9593","borderRadius":"0","flex":"1","background":"#fff","borderWidth":"0","lineHeight":"80rpx","position":"relative","borderStyle":"solid","height":"80rpx"}' v-if="queryIndex==0" class="search-form round">
					<text class="icon iconfont " :style='{"color":"#999","left":"0px","textAlign":"center","width":"80rpx","fontSize":"40rpx","lineHeight":"80rpx","position":"absolute","right":"0px"}'></text>
					<input :style='{"border":"0","padding":"8rpx 20rpx 8rpx 20rpx","color":"#666","borderRadius":"0","background":"none","width":"100%","lineHeight":"80rpx","fontSize":"28rpx","height":"80rpx"}' v-model="searchForm.wenzhangbiaoti" type="text" placeholder="文章标题" ></input>
				</view>
				<button :style='{"border":"0","padding":"0","margin":"0","color":"#fff","borderRadius":"0 40rpx 40rpx 0","background":"url(http://codegen.caihongy.cn/20240112/6e104f0596e84a70b8263874ad7394ec.png) no-repeat center center / 40rpx,#fff","width":"136rpx","lineHeight":"80rpx","fontSize":"28rpx","height":"80rpx"}' @tap="search" class="cu-btn shadow-blur round"></button>
			</view>
			

			<view :style='{"padding":"0","margin":"40rpx auto 0","borderRadius":"24rpx","alignItems":"flex-end","color":"#333","flexWrap":"wrap","background":"none","display":"flex","width":"calc(100% - 48rpx)","justifyContent":"center"}'>
				<view @click="sortClick('clicknum')" :style='{"border":"0","padding":"0 12rpx","margin":"0 8rpx 0 0","borderRadius":"8rpx","background":"none","display":"flex"}'>
					<text :style='{"color":"inherit","lineHeight":"auto","fontSize":"24rpx"}'>点击量</text>
					<text v-if="listSort!='clicknum'" class="icon iconfont icon-jiantou36" :style='{"margin":"0 4rpx 0 0","lineHeight":"auto","fontSize":"24rpx","color":"inherit"}'></text>
					<text v-else-if="listSort=='clicknum'&&listOrder=='asc'" class="icon iconfont icon-jiantou35" :style='{"margin":"0 4rpx 0 0","lineHeight":"auto","fontSize":"24rpx","color":"inherit"}'></text>
					<text v-else-if="listSort=='clicknum'&&listOrder=='desc'" class="icon iconfont icon-jiantou36" :style='{"margin":"0 4rpx 0 0","lineHeight":"auto","fontSize":"24rpx","color":"inherit"}'></text>
				</view>
				<view @click="sortClick('addtime')" :style='{"border":"0","padding":"0 12rpx","margin":"0 8rpx 0 0","borderRadius":"8rpx","background":"none","display":"flex"}'>
					<text :style='{"color":"inherit","lineHeight":"auto","fontSize":"24rpx"}'>按日期</text>
					<text v-if="listSort!='addtime'" class="icon iconfont icon-jiantou36" :style='{"margin":"0 4rpx 0 0","lineHeight":"auto","fontSize":"24rpx","color":"inherit"}'></text>
					<text v-else-if="listSort=='addtime'&&listOrder=='asc'" class="icon iconfont icon-jiantou35" :style='{"margin":"0 4rpx 0 0","lineHeight":"auto","fontSize":"24rpx","color":"inherit"}'></text>
					<text v-else-if="listSort=='addtime'&&listOrder=='desc'" class="icon iconfont icon-jiantou36" :style='{"margin":"0 4rpx 0 0","lineHeight":"auto","fontSize":"24rpx","color":"inherit"}'></text>
				</view>
			</view>
			<view :style='{"padding":"0","alignItems":"flex-start","flexWrap":"wrap","background":"none","display":"flex","width":"100%","height":"auto"}'>
			<!-- 样式2 -->
			<view class="list" :style='{"minHeight":"100vh","padding":"32rpx 24rpx 24rpx","margin":"40rpx auto 0","borderRadius":"0px","background":"#ffffff","flex":"1","width":"calc(100% - 200rpx)","height":"auto"}'>
				<view @tap="onDetailTap(product)" class="listm flex flex-between" :style='{"border":"0px solid #eee","padding":"0px","margin":"0 0 40rpx","borderRadius":"12rpx","flexWrap":"wrap","background":"none","display":"flex","width":"100%","height":"auto"}' v-for="(product,index) in list" :key="index">
					<image :style='{"width":"200rpx","objectFit":"cover","borderRadius":"0px","display":"block","height":"200rpx"}' mode="aspectFill" class="listmpic" v-if="preHttp(product.fengmian)" :src="product.fengmian.split(',')[0]"></image>
					<image :style='{"width":"200rpx","objectFit":"cover","borderRadius":"0px","display":"block","height":"200rpx"}' mode="aspectFill" class="listmpic" v-else :src="product.fengmian?baseUrl+product.fengmian.split(',')[0]:''"></image>

					<view class="listmr" :style='{"padding":"0 0 0 10rpx","margin":"0","alignItems":"center","flexWrap":"wrap","display":"flex","width":"calc(100% - 200rpx)","height":"auto"}'>
						<view class="col3 f30 elip mb15" :style='{"padding":"0 0px","margin":"0","overflow":"hidden","whiteSpace":"nowrap","color":"#333","width":"100%","lineHeight":"48rpx","fontSize":"28rpx","textOverflow":"ellipsis"}'>{{product.wenzhangbiaoti}}</view>
						<view :style='{"width":"100%","padding":"0 0px","display":"none"}'>
							<text class="icon iconfont icon-shijian21" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"24rpx","color":"#666"}'></text>
							<text :style='{"color":"#666","lineHeight":"1.5","fontSize":"24rpx"}'>{{product.addtime}}</text>
						</view>
						<view :style='{"padding":"0 0px","margin":"0 10rpx 0 0","display":"inline-block"}'>
							<text class="icon iconfont icon-zan10" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"24rpx","color":"#666"}'></text>
							<text :style='{"color":"#666","lineHeight":"1.5","fontSize":"24rpx"}'>{{product.thumbsupnum}}</text>
						</view>
						<view :style='{"padding":"0 0px","margin":"0 10rpx 0 0","display":"inline-block"}'>
							<text class="icon iconfont icon-shoucang10" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"24rpx","color":"#666"}'></text>
							<text :style='{"color":"#666","lineHeight":"1.5","fontSize":"24rpx"}'>{{product.storeupnum}}</text>
						</view>
						<view :style='{"padding":"0 0px","margin":"0 10rpx 0 0","display":"inline-block"}'>
							<text class="icon iconfont icon-chakan2" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"24rpx","color":"#666"}'></text>
							<text :style='{"color":"#666","lineHeight":"1.5","fontSize":"24rpx"}'>{{product.clicknum}}</text>
						</view>
					</view>
					<!-- #ifdef MP-WEIXIN -->
					<view :style='{"width":"100%","padding":"8rpx 20rpx","justifyContent":"space-between","display":"flex","height":"auto"}'>
						<view :style='{"display":"flex"}' v-if="(userid && isAuth('xinliwenzhang','修改')) || (!userid && isAuthFront('xinliwenzhang','修改'))" @tap.stop.proevent="onUpdate" :data-row="product">
							<text :style='{"margin":"0 8rpx 0 0","fontSize":"28rpx","lineHeight":"1","color":"#666","display":"inline-block"}' class="cuIcon-edit"></text>
							<text :style='{"fontSize":"28rpx","lineHeight":"1","color":"#666","display":"inline-block"}'>修改</text>
						</view>
						<view :style='{"display":"flex"}' v-if="(userid && isAuth('xinliwenzhang','删除')) || (!userid && isAuthFront('xinliwenzhang','删除'))" @tap.stop.proevent="onDelete" :data-row="product">
							<text :style='{"margin":"0 8rpx 0 0","fontSize":"28rpx","lineHeight":"1","color":"#666","display":"inline-block"}' class="cuIcon-delete"></text>
							<text :style='{"fontSize":"28rpx","lineHeight":"1","color":"#666","display":"inline-block"}'>删除</text>
						</view>
					</view>
					<!-- #endif -->
					<!-- #ifndef MP-WEIXIN -->
					<view :style='{"width":"100%","padding":"8rpx 20rpx","justifyContent":"space-between","display":"flex","height":"auto"}'>
						<view :style='{"display":"flex"}' v-if="(userid && isAuth('xinliwenzhang','修改')) || (!userid && isAuthFront('xinliwenzhang','修改'))" @tap.stop.proevent="onUpdateTap(product)">
							<text :style='{"margin":"0 8rpx 0 0","fontSize":"28rpx","lineHeight":"1","color":"#666","display":"inline-block"}' class="cuIcon-edit"></text>
							<text :style='{"fontSize":"28rpx","lineHeight":"1","color":"#666","display":"inline-block"}'>修改</text>
						</view>
						<view :style='{"display":"flex"}' v-if="(userid && isAuth('xinliwenzhang','删除')) || (!userid && isAuthFront('xinliwenzhang','删除'))" @tap.stop.proevent="onDeleteTap(product.id)">
							<text :style='{"margin":"0 8rpx 0 0","fontSize":"28rpx","lineHeight":"1","color":"#666","display":"inline-block"}' class="cuIcon-delete"></text>
							<text :style='{"fontSize":"28rpx","lineHeight":"1","color":"#666","display":"inline-block"}'>删除</text>
						</view>
					</view>
					<!-- #endif -->
				</view>
			</view>
			
			
			

			

			</view>
			
			
			
		</view>

		<button :style='{"border":"0","boxShadow":"none","color":"#fff","bottom":"128rpx","right":"128rpx","borderRadius":"100%","background":"#38bf3e","width":"80rpx","lineHeight":"80rpx","fontSize":"28rpx","position":"absolute","height":"80rpx","zIndex":"999"}' v-if="userid && isAuth('xinliwenzhang','新增')" class="add-btn" @click="onAddTap()">新增</button>
		<button :style='{"border":"0","boxShadow":"none","color":"#fff","bottom":"128rpx","right":"128rpx","borderRadius":"100%","background":"#38bf3e","width":"80rpx","lineHeight":"80rpx","fontSize":"28rpx","position":"absolute","height":"80rpx","zIndex":"999"}' v-if="!userid && isAuthFront('xinliwenzhang','新增')" class="add-btn" @click="onAddTap()">新增</button>
	</view>
</mescroll-uni>
</template>

<script>
	export default {
		data() {
			return {
				btnColor: ['#409eff','#67c23a','#909399','#e6a23c','#f56c6c','#356c6c','#351c6c','#f093a9','#a7c23a','#104eff','#10441f','#a21233','#503319'],
				clicknumColor: ['#409eff','#67c23a','#909399','#e6a23c','#f56c6c','#356c6c','#351c6c','#f093a9','#a7c23a','#104eff','#10441f','#a21233','#503319'],
				queryList:[
					{
						queryName:"文章标题",
					},
				],
				queryIndex: 0,
				list: [],
				lists: [],
                userid: '',
				mescroll: null, //mescroll实例对象
				downOption: {
					auto: false //是否在初始化后,自动执行下拉回调callback; 默认true
				},
				upOption: {
					noMoreSize: 5, //如果列表已无数据,可设置列表的总数量要大于半页才显示无更多数据;避免列表数据过少(比如只有一条数据),显示无更多数据会不好看; 默认5
					textNoMore: '~ 没有更多了 ~',
				},
				hasNext: true,
				searchForm:{},
				CustomBar: '0',
				listSort: 'id',
				listOrder: 'desc',
			};
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
		async onShow() {
            if(uni.getStorageSync("useridTag")==1){
                this.userid=uni.getStorageSync("useridTag");
                uni.removeStorageSync("useridTag");
            } else {
                this.userid = "";
            }
			this.btnColor = this.btnColor.sort(()=> {
				return (0.5-Math.random());
			});
			this.clicknumColor = this.clicknumColor.sort(()=> {
				return (0.5-Math.random());
			});
			this.hasNext = true
			// 重新加载数据
			if (this.mescroll) this.mescroll.resetUpScroll()
		},
		onLoad(options) {
            if(uni.getStorageSync("useridTag")==1){
                this.userid=uni.getStorageSync("useridTag");
                uni.removeStorageSync("useridTag");
            } else {
                this.userid = "";
            }
			this.hasNext = true
			// 重新加载数据
			if (this.mescroll) this.mescroll.resetUpScroll()
		},
		components: {
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
			sortClick(type){
				if(this.listSort==type){
					if(this.listOrder == 'desc'){
						this.listOrder = 'asc'
					}else{
						this.listOrder = 'desc'
					}
				}else{
					this.listSort = type
					this.listOrder = 'desc'
				}
				this.search()
			},
            priceChange(price) {
                return Number(price).toFixed(2);
            },
            preHttp(str) {
                return str && str.substr(0,4)=='http';
            },
			//查询条件切换
			queryChange(e) {
				this.queryIndex=e.detail.value;
				this.searchForm.wenzhangbiaoti="";
			},
			//类别搜索
			// mescroll组件初始化的回调,可获取到mescroll对象
			mescrollInit(mescroll) {
				this.mescroll = mescroll;
			},
			/*下拉刷新的回调 */
			downCallback(mescroll) {
				this.hasNext = true
				// 重置分页参数页数为1
				mescroll.resetUpScroll()
			},
			/*上拉加载的回调: mescroll携带page的参数, 其中num:当前页 从1开始, size:每页数据条数,默认10 */
			async upCallback(mescroll) {
				let params = {
					page: mescroll.num,
					limit: mescroll.size
				}
				params['sort'] = this.listSort;
				params['order'] = this.listOrder;

				if(this.searchForm.wenzhangbiaoti){
					params['wenzhangbiaoti'] = '%' + this.searchForm.wenzhangbiaoti + '%'
				}
                let res = {}
                if(this.userid) {
                    res = await this.$api.page(`xinliwenzhang`, params);
                } else {
                    res = await this.$api.list(`xinliwenzhang`, params);
                }
				// 如果是第一页数据置空
				if (mescroll.num == 1) this.list = [];
				
				this.list = this.list.concat(res.data.list);
				let length = Math.ceil(this.list.length/6)
				let arr = [];
				for (let i = 0; i<length; i++){
					arr[i] = this.list.slice(i*6, (i+1)*6)
				}
				this.lists = arr
				if (res.data.list.length == 0) this.hasNext = false;
				mescroll.endSuccess(mescroll.size, this.hasNext);
			},
			// 详情
			onDetailTap(item) {
                uni.setStorageSync("useridTag",this.userid);
				this.$utils.jump(`./detail?id=${item.id}&userid=`+this.userid)
			},
			onUpdate(e){
				this.onUpdateTap(e.currentTarget.dataset.row)
			},
			// 修改
			onUpdateTap(row){
                uni.setStorageSync("useridTag",this.userid);
				this.$utils.jump(`./add-or-update?id=${row.id}`)
			},
			// 添加
			onAddTap(){
                uni.setStorageSync("useridTag",this.userid);
				this.$utils.jump(`./add-or-update`)
			},
			onDelete(e){
				this.onDeleteTap(e.currentTarget.dataset.row.id)
			},
			onDeleteTap(id){
				var _this = this;
				uni.showModal({
					title: '提示',
					content: '是否确认删除',
					success: async function(res) {
						if (res.confirm) {
							await _this.$api.del('xinliwenzhang', JSON.stringify([id]));
							_this.hasNext = true
							// 重置分页参数页数为1
							_this.search()
						}
					}
				});
			},
			// 搜索
			async search(){
				this.mescroll.num = 1
				let searchForm = {
					page: this.mescroll.num,
					limit: this.mescroll.size
				}
				searchForm['sort'] = this.listSort;
				searchForm['order'] = this.listOrder;

				if(this.searchForm.wenzhangbiaoti){
					searchForm['wenzhangbiaoti'] = '%' + this.searchForm.wenzhangbiaoti + '%'
				}
                let res = {};
                if(this.userid) {
                    res = await this.$api.page(`xinliwenzhang`, searchForm);
                } else {
                    res = await this.$api.list(`xinliwenzhang`, searchForm);
                }
				// 如果是第一页数据置空
				if (this.mescroll.num == 1) this.list = [];
				this.list = this.list.concat(res.data.list);
				let length = Math.ceil(this.list.length/6)
				let arr = [];
				for (let i = 0; i<length; i++){
					arr[i] = this.list.slice(i*6, (i+1)*6)
				}
				this.lists = arr
				if (res.data.list.length == 0) this.hasNext = false;
				this.mescroll.endSuccess(this.mescroll.size, this.hasNext);
			}
		}
	};
</script>

<style lang="scss" scoped>
	.content {
		min-height: calc(100vh - 44px);
		box-sizing: border-box;
	}
	
	.category-one .tab {
		cursor: pointer;
		border-radius: 12rpx;
		padding: 0 0px;
		margin: 0 20rpx 0 0;
		color: #333;
		background: none;
		display: inline-block;
		width: auto;
		font-size: 28rpx;
		line-height: 64rpx;
	}
	
	.category-one .tab.active {
		cursor: pointer;
		padding: 0 0px;
		margin: 0 20rpx 0 0;
		color: #38bf3e;
		display: inline-block;
		font-size: 28rpx;
		border-color: #38bf3e;
		line-height: 64rpx;
		border-radius: 0;
		background: none;
		width: auto;
		border-width: 0 0 4rpx;
		border-style: solid;
	}
	
	.category-two .tab {
		cursor: pointer;
		padding: 32rpx 0;
		color: #666;
		display: inline-block;
		font-size: 28rpx;
		border-color: #f2f2f2;
		line-height: 1.5;
		border-radius: 0px 0 0 0;
		background: none;
		width: 100%;
		border-width: 0 0 0 6rpx;
		border-style: solid;
		text-align: center;
	}
	
	.category-two .tab.active {
		cursor: pointer;
		padding: 32rpx 0;
		color: #000;
		display: inline-block;
		font-size: 28rpx;
		border-color: #ff5f15;
		line-height: 1.5;
		border-radius: 0px 0 0 0;
		background: #fff;
		width: 100%;
		border-width: 0 0 0 6rpx;
		border-style: solid;
		text-align: center;
	}
	
	.category-three .tab {
		cursor: pointer;
		padding: 0;
		color: #fff;
		background: burlywood;
		display: inline-block;
		width: 100%;
		font-size: 28rpx;
		line-height: 80rpx;
		text-align: center;
	}
	
	.category-three .tab.active {
		cursor: pointer;
		padding: 0;
		color: #fff;
		background: #000;
		display: inline-block;
		width: 100%;
		font-size: 28rpx;
		line-height: 80rpx;
		text-align: center;
	}
</style>
