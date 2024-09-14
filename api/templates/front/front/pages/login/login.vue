<template>
	<view class="content">
		<view class="box" :style='{"minHeight":"100vh","padding":"360rpx 24rpx 24rpx","alignItems":"flex-start","flexWrap":"wrap","background":"url(http://codegen.caihongy.cn/20240120/8123bde222fb4ea389ddc1efc97bd723.jpg) no-repeat center top / 100% auto,#fff","display":"flex","width":"100%","height":"auto"}'>
			<view :style='{"padding":"48rpx 24rpx 24rpx","margin":"40rpx 0 0px","borderRadius":"0px","flexWrap":"wrap","background":"rgba(255,255,255,.98)","display":"flex","width":"100%","position":"relative","justifyContent":"center","height":"auto"}'>
				<image :style='{"width":"160rpx","margin":"0 auto 60rpx","borderRadius":"100%","display":"none","height":"160rpx","order":"-1"}' src="http://codegen.caihongy.cn/20231220/41304a2a7b194c148f209f014055dbdf.jpg" mode="aspectFill"></image>
				<view v-if="loginType==1" :style='{"margin":"0 0 60rpx 0","borderColor":"#eee","borderWidth":"0 0 2rpx","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="uni-form-item uni-column">
					<view :style='{"width":"200rpx","lineHeight":"48rpx","fontSize":"28rpx","color":"rgb(0, 0, 0)","textAlign":"right","fontWeight":"500"}' class="label">账号：</view>
					<input v-model="username" :style='{"border":"0px solid rgba(255,255,255,.8)","padding":"0px 24rpx","margin":"0px","color":"rgb(0, 0, 0)","borderRadius":"4rpx","flex":"1","background":"rgba(255,255,255,0)","width":"auto","fontSize":"28rpx","height":"76rpx"}' type="text" class="uni-input" name="" placeholder="请输入账号" />
				</view>
				<view v-if="loginType==1" :style='{"margin":"0 0 60rpx 0","borderColor":"#eee","borderWidth":"0 0 2rpx","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="uni-form-item uni-column">
					<view :style='{"width":"200rpx","lineHeight":"48rpx","fontSize":"28rpx","color":"rgb(0, 0, 0)","textAlign":"right","fontWeight":"500"}' class="label">密码：</view>
					<input v-model="password" :style='{"border":"0px solid rgba(255,255,255,.8)","padding":"0px 24rpx","margin":"0px","color":"rgb(0, 0, 0)","borderRadius":"4rpx","flex":"1","background":"rgba(255,255,255,0)","width":"auto","fontSize":"28rpx","height":"76rpx"}' type="password" class="uni-input" name="" placeholder="请输入密码" />
				</view>
				<view v-if="roleNum>1" :style='{"margin":"0 0 24rpx 0","borderColor":"#eee","borderWidth":"0 0 2rpx","display":"flex","width":"100%","borderStyle":"solid","height":"76rpx"}'>
					<view :style='{"width":"200rpx","lineHeight":"48rpx","fontSize":"28rpx","color":"rgb(0, 0, 0)","textAlign":"right","fontWeight":"500"}' class="label">用户类型：</view>
					<picker @change="optionsChange" :value="index" :range="options" :style='{"border":"2rpx solid rgba(255,255,255,.8)","padding":"0 20rpx","color":"#666","borderRadius":"4rpx","background":"rgba(255,255,255,.68)","flex":"1","display":"inline-block","width":"auto","lineHeight":"48rpx","fontSize":"28rpx"}'>
						<view class="uni-picker-type">{{options[index]}}</view>
					</picker>
				</view>
				

				
				<button v-if="loginType==1" class="btn-submit" @tap="onLoginTap" type="primary" :style='{"border":"0","padding":"0 40rpx","margin":"40rpx auto","color":"#fff","minWidth":"200rpx","borderRadius":"40rpx","background":"#ff5f15","width":"auto","lineHeight":"80rpx","fontSize":"30rpx","fontWeight":"600","height":"80rpx","order":"2"}'>登录</button>
				<button v-if="loginType==2" class="btn-submit" @tap="onFaceLoginTap" type="primary" :style='{"border":"0","padding":"0 40rpx","margin":"40rpx auto","color":"#fff","minWidth":"200rpx","borderRadius":"40rpx","background":"#ff5f15","width":"auto","lineHeight":"80rpx","fontSize":"30rpx","fontWeight":"600","height":"80rpx","order":"2"}'>人脸识别登录</button>
				<view class="links" :style='{"padding":"0","margin":"0 0 40rpx","flexWrap":"wrap","display":"flex","width":"calc(100% - 0px)","justifyContent":"center","height":"auto","order":"4"}'>
					<view class="link-highlight" @tap="onRegisterTap('xuesheng')" :style='{"padding":"0px 20rpx","margin":"0 20rpx 20rpx 0","color":"#333","borderRadius":"4rpx","background":"rgba(255,255,255,.68)","fontSize":"28rpx","lineHeight":"64rpx","height":"64rpx"}'>注册学生</view>
					<view class="link-highlight" @tap="onRegisterTap('jiaoshi')" :style='{"padding":"0px 20rpx","margin":"0 20rpx 20rpx 0","color":"#333","borderRadius":"4rpx","background":"rgba(255,255,255,.68)","fontSize":"28rpx","lineHeight":"64rpx","height":"64rpx"}'>注册教师</view>
				</view>
				
				<view class="idea1" :style='{"width":"100%","background":"red","display":"none","height":"80rpx"}'>idea1</view>
				<view class="idea2" :style='{"width":"100%","background":"red","display":"none","height":"80rpx"}'>idea2</view>
				<view class="idea3" :style='{"width":"100%","background":"red","display":"none","height":"80rpx"}'>idea3</view>
			</view>
		</view>
	</view>
</template>

<script>
	import menu from '@/utils/menu'
	export default {
		data() {
			return {
				username: '',
				password: '',
                loginType:1,
				codes: [{
				  num: 1,
				  color: '#000',
				  rotate: '10deg',
				  size: '16px'
				}, {
				  num: 2,
				  color: '#000',
				  rotate: '10deg',
				  size: '16px'
				}, {
				  num: 3,
				  color: '#000',
				  rotate: '10deg',
				  size: '16px'
				}, {
				  num: 4,
				  color: '#000',
				  rotate: '10deg',
				  size: '16px'
				}],
				options: [
					'请选择登录用户类型',
				],
                optionsValues: [
					'',
                    'xuesheng',
                    'jiaoshi',
				],
				index: 0,
				roleNum:0,

			}
		},
		onLoad() {
			let options = ['请选择登录用户类型'];
			let menus = menu.list();
			this.menuList = menus;
			for(let i=0;i<this.menuList.length;i++){
				if(this.menuList[i].hasFrontLogin=='是'){
					options.push(this.menuList[i].roleName);
					this.roleNum++;
				}
			}
			if(this.roleNum==1) {
				this.index = 1;
			}	
			this.options = options;
			this.styleChange()
		},
		onShow() {
		},
		mounted() {
		},
		methods: {
			styleChange() {
				this.$nextTick(()=>{
					// document.querySelectorAll('.uni-input .uni-input-input').forEach(el=>{
					//   el.style.backgroundColor = this.loginFrom.content.input.backgroundColor
					// })
				})
			},
			onRegisterTap(tableName) {
                uni.setStorageSync("loginTable", tableName);
				this.$utils.jump('../register/register')
			},
			async onLoginTap() {
                if (!this.username) {
					this.$utils.msg('请输入用户名')
					return
				}
                if (!this.password) {
					this.$utils.msg('请输入用户密码')
					return
				}
                if (!this.optionsValues[this.index]) {
					this.$utils.msg('请选择登录用户类型')
					return
				}

				this.loginPost()

			},
			async loginPost() {
				
				let res = await this.$api.login(`${this.optionsValues[this.index]}`, {
					username: this.username,
					password: this.password
				});
				uni.removeStorageSync("useridTag");
				uni.setStorageSync("appToken", res.token);
				uni.setStorageSync("nickname",this.username);
				uni.setStorageSync("nowTable", `${this.optionsValues[this.index]}`);
				res = await this.$api.session(`${this.optionsValues[this.index]}`);
				if(res.data.touxiang) {
				    uni.setStorageSync('headportrait', res.data.touxiang);
				} else if(res.data.headportrait) {
				    uni.setStorageSync('headportrait', res.data.headportrait);
				}
				uni.setStorageSync('userSession',JSON.stringify(res.data))
				// 保存用户id
				uni.setStorageSync("appUserid", res.data.id);
				if(res.data.vip) {
					uni.setStorageSync("vip", res.data.vip);
				}
				uni.setStorageSync("appRole", `${this.options[this.index]}`);
				this.$utils.tab('../index/index');
			},
			optionsChange(e) {
				this.index = e.target.value
			}
		}
	}
</script>

<style lang="scss" scoped>
	page {
		height: 100%;
	}
	
	.content {
		height: 100%;
		box-sizing: border-box;
	}
	
</style>
