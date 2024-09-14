<script>
	let remindTimer = null
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
			clearTimeout(remindTimer)
		},
	}
</script>

<style lang="scss">
	@import "/colorui/main.css";
	@import "/colorui/icon.css";
	/*每个页面公共css */
 	@import "/assets/css/style.scss";
	
	/* #ifndef MP-WEIXIN */
	@import url("https://at.alicdn.com/t/c/font_4097802_w9071sf3dx.css");
	/* #endif*/
	/* #ifdef MP-WEIXIN */
	@import "/colorui/font/iconfont.css";
	/* #endif */
	
	* {
		box-sizing: border-box;
	}
	button::after{
		border: none;
	}
	view, form, scroll-view, swiper, button, input, textarea, label, navigator, image {
	    box-sizing: border-box;
	}
	
	.uni-product-list {
		display: flex;
		width: 100%;
		flex-wrap: wrap;
		flex-direction: row;
		margin-top: 60px;
	}
</style>
