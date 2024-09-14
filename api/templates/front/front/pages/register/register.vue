<template>
<view class="content">
	<view class="box" :style='{"minHeight":"100vh","padding":"360rpx 24rpx 24rpx","alignItems":"flex-start","flexWrap":"wrap","background":"url(http://codegen.caihongy.cn/20240120/8123bde222fb4ea389ddc1efc97bd723.jpg) no-repeat center top / 100% auto,#fff","display":"flex","width":"100%","height":"auto"}'>
		<view :style='{"padding":"48rpx 24rpx","margin":"40rpx 0 80rpx","borderRadius":"16rpx","flexWrap":"wrap","background":"rgba(255,255,255,1)","display":"flex","width":"100%","position":"relative","height":"auto"}'>
			<image :style='{"width":"160rpx","margin":"0 auto 60rpx","borderRadius":"8rpx","display":"none","height":"160rpx"}' src="http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg" mode="aspectFill"></image>
			<view :style='{"margin":"0 0 40rpx 0","borderColor":"#eee","borderWidth":"0 0 2rpx","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='xuesheng'" class="uni-form-item uni-column">
				<view :style='{"color":"rgb(0, 0, 0)","textAlign":"right","display":"block","width":"200rpx","lineHeight":"48rpx","fontSize":"28rpx","fontWeight":"500"}' class="label">学号：</view>
				<input :style='{"border":"2rpx solid rgba(255,255,255,.8)","padding":"0px 24rpx","margin":"0px","color":"rgb(0, 0, 0)","borderRadius":"4rpx","flex":"1","background":"rgba(255,255,255,.68)","fontSize":"28rpx","height":"76rpx"}'  v-model="ruleForm.xuehao"  type="text"  class="uni-input" name="" placeholder="学号" />
			</view>
			<view :style='{"margin":"0 0 40rpx 0","borderColor":"#eee","borderWidth":"0 0 2rpx","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='xuesheng'" class="uni-form-item uni-column">
				<view :style='{"color":"rgb(0, 0, 0)","textAlign":"right","display":"block","width":"200rpx","lineHeight":"48rpx","fontSize":"28rpx","fontWeight":"500"}' class="label">密码：</view>
				<input :style='{"border":"2rpx solid rgba(255,255,255,.8)","padding":"0px 24rpx","margin":"0px","color":"rgb(0, 0, 0)","borderRadius":"4rpx","flex":"1","background":"rgba(255,255,255,.68)","fontSize":"28rpx","height":"76rpx"}'  v-model="ruleForm.mima" type="password"  class="uni-input" name="" placeholder="密码" />
			</view>
			<view :style='{"margin":"0 0 40rpx 0","borderColor":"#eee","borderWidth":"0 0 2rpx","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='xuesheng'" class="uni-form-item uni-column">
				<view :style='{"color":"rgb(0, 0, 0)","textAlign":"right","display":"block","width":"200rpx","lineHeight":"48rpx","fontSize":"28rpx","fontWeight":"500"}' class="label">确认密码：</view>
				<input :style='{"border":"2rpx solid rgba(255,255,255,.8)","padding":"0px 24rpx","margin":"0px","color":"rgb(0, 0, 0)","borderRadius":"4rpx","flex":"1","background":"rgba(255,255,255,.68)","fontSize":"28rpx","height":"76rpx"}' v-model="ruleForm.mima2" type="password" class="uni-input" name="" placeholder="确认密码" />
			</view>
			<view :style='{"margin":"0 0 40rpx 0","borderColor":"#eee","borderWidth":"0 0 2rpx","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='xuesheng'" class="uni-form-item uni-column">
				<view :style='{"color":"rgb(0, 0, 0)","textAlign":"right","display":"block","width":"200rpx","lineHeight":"48rpx","fontSize":"28rpx","fontWeight":"500"}' class="label">姓名：</view>
				<input :style='{"border":"2rpx solid rgba(255,255,255,.8)","padding":"0px 24rpx","margin":"0px","color":"rgb(0, 0, 0)","borderRadius":"4rpx","flex":"1","background":"rgba(255,255,255,.68)","fontSize":"28rpx","height":"76rpx"}'  v-model="ruleForm.xingming"  type="text"  class="uni-input" name="" placeholder="姓名" />
			</view>
            <view :style='{"margin":"0 0 40rpx 0","borderColor":"#eee","borderWidth":"0 0 2rpx","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='xuesheng'" class="">
				<view :style='{"color":"rgb(0, 0, 0)","textAlign":"right","display":"block","width":"200rpx","lineHeight":"48rpx","fontSize":"28rpx","fontWeight":"500"}' class="label">性别：</view>
				<picker :style='{"width":"100%","margin":"0 0 24rpx 0","display":"flex","height":"76rpx"}' v-if="tableName=='xuesheng'"  @change="xueshengxingbieChange" :value="xueshengxingbieIndex" :range="xueshengxingbieOptions">
					<view>
						<view :style='{"border":"2rpx solid rgba(255,255,255,.8)","padding":"0 20rpx","color":"#666","borderRadius":"8rpx","background":"rgba(255,255,255,.68)","width":"100%","lineHeight":"48rpx","fontSize":"28rpx"}' class="uni-input">{{ruleForm.xingbie?ruleForm.xingbie:"请选择性别"}}</view>
					</view>
				</picker>
			</view>
			<view :style='{"margin":"0 0 40rpx 0","borderColor":"#eee","borderWidth":"0 0 2rpx","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='xuesheng'" class="uni-form-item uni-column">
				<view :style='{"color":"rgb(0, 0, 0)","textAlign":"right","display":"block","width":"200rpx","lineHeight":"48rpx","fontSize":"28rpx","fontWeight":"500"}' class="label">手机：</view>
				<input :style='{"border":"2rpx solid rgba(255,255,255,.8)","padding":"0px 24rpx","margin":"0px","color":"rgb(0, 0, 0)","borderRadius":"4rpx","flex":"1","background":"rgba(255,255,255,.68)","fontSize":"28rpx","height":"76rpx"}'  v-model="ruleForm.shouji"  type="text"  class="uni-input" name="" placeholder="手机" />
			</view>
            <view :style='{"margin":"0 0 40rpx 0","borderColor":"#eee","borderWidth":"0 0 2rpx","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='xuesheng'" @tap="xueshengtouxiangTap" class="">
				<view :style='{"color":"rgb(0, 0, 0)","textAlign":"right","display":"block","width":"200rpx","lineHeight":"48rpx","fontSize":"28rpx","fontWeight":"500"}' class="label">头像：</view>
				<image :style='{"width":"160rpx","margin":"0 0 20rpx","borderRadius":"8rpx","objectFit":"cover","display":"block","height":"100rpx"}' v-if="ruleForm.touxiang" class="avator" :src="baseUrl+ruleForm.touxiang" mode=""></image>
                <image :style='{"width":"160rpx","margin":"0 0 20rpx","borderRadius":"8rpx","objectFit":"cover","display":"block","height":"100rpx"}' v-else class="avator" src="../../static/gen/upload.png" mode=""></image>
            </view>
			<view :style='{"margin":"0 0 40rpx 0","borderColor":"#eee","borderWidth":"0 0 2rpx","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='xuesheng'" class="uni-form-item uni-column">
				<view :style='{"color":"rgb(0, 0, 0)","textAlign":"right","display":"block","width":"200rpx","lineHeight":"48rpx","fontSize":"28rpx","fontWeight":"500"}' class="label">专业：</view>
				<input :style='{"border":"2rpx solid rgba(255,255,255,.8)","padding":"0px 24rpx","margin":"0px","color":"rgb(0, 0, 0)","borderRadius":"4rpx","flex":"1","background":"rgba(255,255,255,.68)","fontSize":"28rpx","height":"76rpx"}'  v-model="ruleForm.zhuanye"  type="text"  class="uni-input" name="" placeholder="专业" />
			</view>
			<view :style='{"margin":"0 0 40rpx 0","borderColor":"#eee","borderWidth":"0 0 2rpx","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='xuesheng'" class="uni-form-item uni-column">
				<view :style='{"color":"rgb(0, 0, 0)","textAlign":"right","display":"block","width":"200rpx","lineHeight":"48rpx","fontSize":"28rpx","fontWeight":"500"}' class="label">年龄：</view>
				<input :style='{"border":"2rpx solid rgba(255,255,255,.8)","padding":"0px 24rpx","margin":"0px","color":"rgb(0, 0, 0)","borderRadius":"4rpx","flex":"1","background":"rgba(255,255,255,.68)","fontSize":"28rpx","height":"76rpx"}'  v-model="ruleForm.nianling"  type="text"  class="uni-input" name="" placeholder="年龄" />
			</view>
			<view :style='{"margin":"0 0 40rpx 0","borderColor":"#eee","borderWidth":"0 0 2rpx","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='jiaoshi'" class="uni-form-item uni-column">
				<view :style='{"color":"rgb(0, 0, 0)","textAlign":"right","display":"block","width":"200rpx","lineHeight":"48rpx","fontSize":"28rpx","fontWeight":"500"}' class="label">教师工号：</view>
				<input :style='{"border":"2rpx solid rgba(255,255,255,.8)","padding":"0px 24rpx","margin":"0px","color":"rgb(0, 0, 0)","borderRadius":"4rpx","flex":"1","background":"rgba(255,255,255,.68)","fontSize":"28rpx","height":"76rpx"}'  v-model="ruleForm.jiaoshigonghao"  type="text"  class="uni-input" name="" placeholder="教师工号" />
			</view>
			<view :style='{"margin":"0 0 40rpx 0","borderColor":"#eee","borderWidth":"0 0 2rpx","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='jiaoshi'" class="uni-form-item uni-column">
				<view :style='{"color":"rgb(0, 0, 0)","textAlign":"right","display":"block","width":"200rpx","lineHeight":"48rpx","fontSize":"28rpx","fontWeight":"500"}' class="label">密码：</view>
				<input :style='{"border":"2rpx solid rgba(255,255,255,.8)","padding":"0px 24rpx","margin":"0px","color":"rgb(0, 0, 0)","borderRadius":"4rpx","flex":"1","background":"rgba(255,255,255,.68)","fontSize":"28rpx","height":"76rpx"}'  v-model="ruleForm.mima" type="password"  class="uni-input" name="" placeholder="密码" />
			</view>
			<view :style='{"margin":"0 0 40rpx 0","borderColor":"#eee","borderWidth":"0 0 2rpx","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='jiaoshi'" class="uni-form-item uni-column">
				<view :style='{"color":"rgb(0, 0, 0)","textAlign":"right","display":"block","width":"200rpx","lineHeight":"48rpx","fontSize":"28rpx","fontWeight":"500"}' class="label">确认密码：</view>
				<input :style='{"border":"2rpx solid rgba(255,255,255,.8)","padding":"0px 24rpx","margin":"0px","color":"rgb(0, 0, 0)","borderRadius":"4rpx","flex":"1","background":"rgba(255,255,255,.68)","fontSize":"28rpx","height":"76rpx"}' v-model="ruleForm.mima2" type="password" class="uni-input" name="" placeholder="确认密码" />
			</view>
			<view :style='{"margin":"0 0 40rpx 0","borderColor":"#eee","borderWidth":"0 0 2rpx","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='jiaoshi'" class="uni-form-item uni-column">
				<view :style='{"color":"rgb(0, 0, 0)","textAlign":"right","display":"block","width":"200rpx","lineHeight":"48rpx","fontSize":"28rpx","fontWeight":"500"}' class="label">教师姓名：</view>
				<input :style='{"border":"2rpx solid rgba(255,255,255,.8)","padding":"0px 24rpx","margin":"0px","color":"rgb(0, 0, 0)","borderRadius":"4rpx","flex":"1","background":"rgba(255,255,255,.68)","fontSize":"28rpx","height":"76rpx"}'  v-model="ruleForm.jiaoshixingming"  type="text"  class="uni-input" name="" placeholder="教师姓名" />
			</view>
            <view :style='{"margin":"0 0 40rpx 0","borderColor":"#eee","borderWidth":"0 0 2rpx","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='jiaoshi'" class="">
				<view :style='{"color":"rgb(0, 0, 0)","textAlign":"right","display":"block","width":"200rpx","lineHeight":"48rpx","fontSize":"28rpx","fontWeight":"500"}' class="label">性别：</view>
				<picker :style='{"width":"100%","margin":"0 0 24rpx 0","display":"flex","height":"76rpx"}' v-if="tableName=='jiaoshi'"  @change="jiaoshixingbieChange" :value="jiaoshixingbieIndex" :range="jiaoshixingbieOptions">
					<view>
						<view :style='{"border":"2rpx solid rgba(255,255,255,.8)","padding":"0 20rpx","color":"#666","borderRadius":"8rpx","background":"rgba(255,255,255,.68)","width":"100%","lineHeight":"48rpx","fontSize":"28rpx"}' class="uni-input">{{ruleForm.xingbie?ruleForm.xingbie:"请选择性别"}}</view>
					</view>
				</picker>
			</view>
			<view :style='{"margin":"0 0 40rpx 0","borderColor":"#eee","borderWidth":"0 0 2rpx","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='jiaoshi'" class="uni-form-item uni-column">
				<view :style='{"color":"rgb(0, 0, 0)","textAlign":"right","display":"block","width":"200rpx","lineHeight":"48rpx","fontSize":"28rpx","fontWeight":"500"}' class="label">职称：</view>
				<input :style='{"border":"2rpx solid rgba(255,255,255,.8)","padding":"0px 24rpx","margin":"0px","color":"rgb(0, 0, 0)","borderRadius":"4rpx","flex":"1","background":"rgba(255,255,255,.68)","fontSize":"28rpx","height":"76rpx"}'  v-model="ruleForm.zhicheng"  type="text"  class="uni-input" name="" placeholder="职称" />
			</view>
			<view :style='{"margin":"0 0 40rpx 0","borderColor":"#eee","borderWidth":"0 0 2rpx","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='jiaoshi'" class="uni-form-item uni-column">
				<view :style='{"color":"rgb(0, 0, 0)","textAlign":"right","display":"block","width":"200rpx","lineHeight":"48rpx","fontSize":"28rpx","fontWeight":"500"}' class="label">办公地点：</view>
				<input :style='{"border":"2rpx solid rgba(255,255,255,.8)","padding":"0px 24rpx","margin":"0px","color":"rgb(0, 0, 0)","borderRadius":"4rpx","flex":"1","background":"rgba(255,255,255,.68)","fontSize":"28rpx","height":"76rpx"}'  v-model="ruleForm.bangongdidian"  type="text"  class="uni-input" name="" placeholder="办公地点" />
			</view>
			<view :style='{"margin":"0 0 40rpx 0","borderColor":"#eee","borderWidth":"0 0 2rpx","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='jiaoshi'" class="uni-form-item uni-column">
				<view :style='{"color":"rgb(0, 0, 0)","textAlign":"right","display":"block","width":"200rpx","lineHeight":"48rpx","fontSize":"28rpx","fontWeight":"500"}' class="label">联系电话：</view>
				<input :style='{"border":"2rpx solid rgba(255,255,255,.8)","padding":"0px 24rpx","margin":"0px","color":"rgb(0, 0, 0)","borderRadius":"4rpx","flex":"1","background":"rgba(255,255,255,.68)","fontSize":"28rpx","height":"76rpx"}'  v-model="ruleForm.lianxidianhua"  type="text"  class="uni-input" name="" placeholder="联系电话" />
			</view>
            <view :style='{"margin":"0 0 40rpx 0","borderColor":"#eee","borderWidth":"0 0 2rpx","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='jiaoshi'" @tap="jiaoshitouxiangTap" class="">
				<view :style='{"color":"rgb(0, 0, 0)","textAlign":"right","display":"block","width":"200rpx","lineHeight":"48rpx","fontSize":"28rpx","fontWeight":"500"}' class="label">头像：</view>
				<image :style='{"width":"160rpx","margin":"0 0 20rpx","borderRadius":"8rpx","objectFit":"cover","display":"block","height":"100rpx"}' v-if="ruleForm.touxiang" class="avator" :src="baseUrl+ruleForm.touxiang" mode=""></image>
                <image :style='{"width":"160rpx","margin":"0 0 20rpx","borderRadius":"8rpx","objectFit":"cover","display":"block","height":"100rpx"}' v-else class="avator" src="../../static/gen/upload.png" mode=""></image>
            </view>
			<button :style='{"border":"0","padding":"0 40rpx","margin":"24rpx auto 24rpx","color":"#fff","borderRadius":"40rpx","background":"#ff5f15","width":"auto","lineHeight":"80rpx","fontSize":"32rpx","minWidth":"240rpx","height":"80rpx"}' class="btn-submit" @tap="register" type="primary">注册</button>
			
			<view class="idea1" :style='{"width":"100%","background":"red","display":"none","height":"80rpx"}'>idea1</view>
			<view class="idea2" :style='{"width":"100%","background":"red","display":"none","height":"80rpx"}'>idea2</view>
			<view class="idea3" :style='{"width":"100%","background":"red","display":"none","height":"80rpx"}'>idea3</view>
		</view>
	</view>
</view>
</template>

<script>
    import multipleSelect from "@/components/momo-multipleSelect/momo-multipleSelect";
	export default {
		data() {
			return {
                xueshengxingbieOptions: [],
                xueshengxingbieIndex: 0,
                jiaoshixingbieOptions: [],
                jiaoshixingbieIndex: 0,
				ruleForm: {
                xuehao: '',
                mima: '',
                xingming: '',
                xingbie: '',
                shouji: '',
                touxiang: '',
                zhuanye: '',
                nianling: '',
                jiaoshigonghao: '',
                mima: '',
                jiaoshixingming: '',
                xingbie: '',
                zhicheng: '',
                bangongdidian: '',
                lianxidianhua: '',
                touxiang: '',
				},
				tableName:""
			}
		},
        components: {
            multipleSelect
        },
        computed: {
            baseUrl() {
                return this.$base.url;
            },
        },
		async onLoad() {
			let res = [];
			let table = uni.getStorageSync("loginTable");
            this.tableName = table;

                        // 自定义下拉框值
			if(this.tableName=='xuesheng'){
                this.xueshengxingbieOptions = "男,女".split(',');
				this.ruleForm.xingbie=this.xueshengxingbieOptions[0]
			}
                        // 自定义下拉框值
			if(this.tableName=='jiaoshi'){
                this.jiaoshixingbieOptions = "男,女".split(',');
				this.ruleForm.xingbie=this.jiaoshixingbieOptions[0]
			}
			
			this.styleChange()
		},
		methods: {

            // 下拉变化
            xueshengxingbieChange(e) {
                    this.xueshengxingbieIndex = e.target.value
                    this.ruleForm.xingbie = this.xueshengxingbieOptions[this.xueshengxingbieIndex]
            },
            xueshengtouxiangTap() {
                let _this = this;
                this.$api.upload(function(res) {
                    _this.ruleForm.touxiang = 'upload/' + res.file;
					_this.$forceUpdate();
                });
            },
            // 下拉变化
            jiaoshixingbieChange(e) {
                    this.jiaoshixingbieIndex = e.target.value
                    this.ruleForm.xingbie = this.jiaoshixingbieOptions[this.jiaoshixingbieIndex]
            },
            jiaoshitouxiangTap() {
                let _this = this;
                this.$api.upload(function(res) {
                    _this.ruleForm.touxiang = 'upload/' + res.file;
					_this.$forceUpdate();
                });
            },

            toggleTab(str) {
                this.$refs[str].show();
            },

			styleChange() {
				this.$nextTick(()=>{
					// document.querySelectorAll('.uni-input .uni-input-input').forEach(el=>{
					//   el.style.backgroundColor = this.registerFrom.content.input.backgroundColor
					// })
				})
			},
			// 获取uuid
			getUUID () {
				return new Date().getTime();
			},
			// 注册
			async register() {
				if((!this.ruleForm.xuehao) && `xuesheng` == this.tableName){
					this.$utils.msg(`学号不能为空`);
					return
				}
				if((!this.ruleForm.mima) && `xuesheng` == this.tableName){
					this.$utils.msg(`密码不能为空`);
					return
				}
                if(`xuesheng` == this.tableName && (this.ruleForm.mima!=this.ruleForm.mima2)){
                    this.$utils.msg(`两次密码输入不一致`);
                    return
                }
				if(`xuesheng` == this.tableName && this.ruleForm.shouji&&(!this.$validate.isMobile(this.ruleForm.shouji))){
					this.$utils.msg(`手机应输入手机格式`);
					return
				}
				if((!this.ruleForm.jiaoshigonghao) && `jiaoshi` == this.tableName){
					this.$utils.msg(`教师工号不能为空`);
					return
				}
				if((!this.ruleForm.mima) && `jiaoshi` == this.tableName){
					this.$utils.msg(`密码不能为空`);
					return
				}
                if(`jiaoshi` == this.tableName && (this.ruleForm.mima!=this.ruleForm.mima2)){
                    this.$utils.msg(`两次密码输入不一致`);
                    return
                }
				if((!this.ruleForm.jiaoshixingming) && `jiaoshi` == this.tableName){
					this.$utils.msg(`教师姓名不能为空`);
					return
				}
				if(`jiaoshi` == this.tableName && this.ruleForm.lianxidianhua&&(!this.$validate.isMobile(this.ruleForm.lianxidianhua))){
					this.$utils.msg(`联系电话应输入手机格式`);
					return
				}
				await this.$api.register(`${this.tableName}`, this.ruleForm);
				this.$utils.msgBack('注册成功');;
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
