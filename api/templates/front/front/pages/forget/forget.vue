<template>
	<view class="content">
		<view class="box" :style='{"minHeight":"100vh","width":"100%","padding":"360rpx 24rpx 24rpx","background":"url(http://codegen.caihongy.cn/20240120/8123bde222fb4ea389ddc1efc97bd723.jpg) no-repeat center top / 100% auto,#fff","height":"auto"}' v-if="type==1">
			<view :style='{"minHeight":"600rpx","padding":"48rpx 24rpx 24rpx","margin":"40rpx 0 80rpx","borderRadius":"16rpx","background":"rgba(255,255,255,1)","display":"block","width":"100%","height":"auto"}'>
				<view class="forget-input" :style='{"margin":"0 0 40rpx 0","borderColor":"#eee","borderWidth":"0 0 2rpx","display":"block","width":"100%","borderStyle":"solid","height":"auto"}'>
					<input v-model="username" :style='{"border":"2rpx solid rgba(255,255,255,.8)","padding":"0px 24rpx","margin":"0px","color":"rgb(0, 0, 0)","borderRadius":"4rpx","background":"rgba(255,255,255,.68)","width":"100%","fontSize":"28rpx","height":"76rpx"}' type="text" placeholder="请输入您的账号" />
				</view>
				<picker :style='{"width":"100%","margin":"0 0 40rpx 0","borderColor":"#eee","borderStyle":"solid","borderWidth":"0 0 2rpx","height":"auto"}' @change="optionsChange" :value="index" :range="options">
					<view class="uni-input" :style='{"border":"2rpx solid rgba(255,255,255,.8)","padding":"0 20rpx","color":"#666","borderRadius":"4rpx","background":"rgba(255,255,255,.68)","width":"100%","lineHeight":"48rpx","fontSize":"28rpx"}'>{{options[index]}}</view>
				</picker>
				<button class="landing" :style='{"border":"0","padding":"0px","margin":"80rpx auto 24rpx","color":"#fff","borderRadius":"40rpx","background":"#ff5f15","display":"block","width":"auto","lineHeight":"80rpx","fontSize":"32rpx","minWidth":"240rpx","height":"80rpx"}' @tap="nextClick" type="primary">下一步</button>
			</view>
		</view>
        <view class="box" :style='{"minHeight":"100vh","width":"100%","padding":"360rpx 24rpx 24rpx","background":"url(http://codegen.caihongy.cn/20240120/8123bde222fb4ea389ddc1efc97bd723.jpg) no-repeat center top / 100% auto,#fff","height":"auto"}' v-if="type==2">
            <view :style='{"minHeight":"600rpx","padding":"48rpx 24rpx 24rpx","margin":"40rpx 0 80rpx","borderRadius":"16rpx","background":"rgba(255,255,255,1)","display":"block","width":"100%","height":"auto"}'>
                <view class="forget-input" :style='{"margin":"0 0 40rpx 0","borderColor":"#eee","borderWidth":"0 0 2rpx","display":"block","width":"100%","borderStyle":"solid","height":"auto"}'>
                    <input v-model="userForm.pquestion"  :style='{"border":"2rpx solid rgba(255,255,255,.8)","padding":"0px 24rpx","margin":"0px","color":"rgb(0, 0, 0)","borderRadius":"4rpx","background":"rgba(255,255,255,.68)","width":"100%","fontSize":"28rpx","height":"76rpx"}' type="text" placeholder="密保问题" disabled="disabled"/>
                </view>
                <view class="forget-input" :style='{"margin":"0 0 40rpx 0","borderColor":"#eee","borderWidth":"0 0 2rpx","display":"block","width":"100%","borderStyle":"solid","height":"auto"}'>
                    <input v-model="panswer1" :style='{"border":"2rpx solid rgba(255,255,255,.8)","padding":"0px 24rpx","margin":"0px","color":"rgb(0, 0, 0)","borderRadius":"4rpx","background":"rgba(255,255,255,.68)","width":"100%","fontSize":"28rpx","height":"76rpx"}' type="text" placeholder="密保答案" />
                </view>
                <button class="landing" :style='{"border":"0","padding":"0px","margin":"80rpx auto 24rpx","color":"#fff","borderRadius":"40rpx","background":"#ff5f15","display":"block","width":"auto","lineHeight":"80rpx","fontSize":"32rpx","minWidth":"240rpx","height":"80rpx"}' @tap="confirmClick" type="primary">确定</button>
            </view>
        </view>
        <view class="box" :style='{"minHeight":"100vh","width":"100%","padding":"360rpx 24rpx 24rpx","background":"url(http://codegen.caihongy.cn/20240120/8123bde222fb4ea389ddc1efc97bd723.jpg) no-repeat center top / 100% auto,#fff","height":"auto"}' v-if="type==3">
            <view :style='{"minHeight":"600rpx","padding":"48rpx 24rpx 24rpx","margin":"40rpx 0 80rpx","borderRadius":"16rpx","background":"rgba(255,255,255,1)","display":"block","width":"100%","height":"auto"}'>
                <view class="forget-input" :style='{"margin":"0 0 40rpx 0","borderColor":"#eee","borderWidth":"0 0 2rpx","display":"block","width":"100%","borderStyle":"solid","height":"auto"}'>
                    <input v-model="password" :style='{"border":"2rpx solid rgba(255,255,255,.8)","padding":"0px 24rpx","margin":"0px","color":"rgb(0, 0, 0)","borderRadius":"4rpx","background":"rgba(255,255,255,.68)","width":"100%","fontSize":"28rpx","height":"76rpx"}' type="password" placeholder="密码" />
                </view>
                <view class="forget-input" :style='{"margin":"0 0 40rpx 0","borderColor":"#eee","borderWidth":"0 0 2rpx","display":"block","width":"100%","borderStyle":"solid","height":"auto"}'>
                    <input v-model="repassword" :style='{"border":"2rpx solid rgba(255,255,255,.8)","padding":"0px 24rpx","margin":"0px","color":"rgb(0, 0, 0)","borderRadius":"4rpx","background":"rgba(255,255,255,.68)","width":"100%","fontSize":"28rpx","height":"76rpx"}' type="password" placeholder="确认密码" />
                </view>
                <button class="landing" :style='{"border":"0","padding":"0px","margin":"80rpx auto 24rpx","color":"#fff","borderRadius":"40rpx","background":"#ff5f15","display":"block","width":"auto","lineHeight":"80rpx","fontSize":"32rpx","minWidth":"240rpx","height":"80rpx"}' @tap="updateClick" type="primary">修改密码</button>
            </view>
        </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				options: [
                    '请选择登录用户类型',
                ],
                optionsValues: [
					'',
				],
				index: 0,
                tableName: '',
                type: 1,
                repassword: '',
                password: '',
                panswer1: '',
                userForm: {
                }
			}
		},
		onLoad() {
			this.styleChange()
		},
		methods: {
			async nextClick() {
				if(this.username==undefined) {
					this.$utils.msg('请输入账号')
					return;
                                }
				if(this.optionsValues[this.index]=="") {
					this.$utils.msg('请选择角色')
                    return;
				}
                this.tableName = this.optionsValues[this.index];
                let res = await this.$api.security(this.tableName,{
                    username: this.username
                })
                if(!res.data) {
                    this.$utils.msg('用户不存在')
                }
                if (res.code == 0) {
                    this.userForm = res.data
                    this.type = 2
                }
			},
			optionsChange(e) {
				this.index = e.target.value
			},
			styleChange() {
				this.$nextTick(()=>{
					// document.querySelectorAll('.forget-input .uni-input-input').forEach(el=>{
					//   el.style.backgroundColor = this.restPwFrom.content.input.backgroundColor
					// })
				})
			},
            confirmClick() {
                if (this.userForm.panswer !== this.panswer1) {
                    this.$utils.msg('密保答案不正确')
                    return false
                }
                this.$utils.msg('验证成功')
                this.password = ''
                setTimeout(() => {
                    this.type = 3
                }, 1000)
            },
            async updateClick() {
                if(!this.password) {
                    this.$utils.msg('密码不能为空')
                    return false
                }
                if (this.password != this.repassword) {
                    this.$utils.msg('两次密码输入不一致')
                    return false
                }
                if(this.userForm.mima) {
                    this.userForm.mima=this.password;
                } else {
                    this.userForm.password=this.password;
                }
                await this.$api.update(this.tableName, this.userForm)
                this.$utils.msg('密码修改成功')
                setTimeout(() => {
                    uni.navigateBack({
            
                    })
                }, 1000)
            },
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		min-height: calc(100vh - 44px);
		box-sizing: border-box;
	}
</style>
