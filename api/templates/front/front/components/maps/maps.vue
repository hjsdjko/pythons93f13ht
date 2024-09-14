<template>
	<view>
		<map id="map" style="width: 100%; height: 450px;z-index: -1;" :latitude="latitude" :longitude="longitude" :markers="markers"
			 show-location @markertap="markertap"></map>
	</view>
</template>

<script>
	var QQMapWX = require('../../common/qqmap/qqmap-wx-jssdk.min.js');
	var qqmapsdk;
	var self;
	export default {
		name:"maps",
		props:{
			markers: {
				type: Array,
				default: () => {
					return []
				}
			},
			latitude: {
				type: Number,
				default: 0
			},
			longitude: {
				type: Number,
				default: 0
			},
		},
		data() {
			return {
				IsOption: false,
				key: ''
			};
		},
		watch:{
			markers(newValue){
				console.log(newValue)
			},
		},
		onLoad() {
			self = this
			let that = this
			// 实例化API核心类
			qqmapsdk = new QQMapWX({
				key: 'Y77BZ-RDDYJ-TKLFM-KPSXB-3AXPJ-QHFD4'
			});
			uni.getLocation({
				altitude: true,
				success(res) {
					// console.log(res)
					self.longitude = res.longitude
					self.latitude = res.latitude
				}
			})
			self.mapCtr = uni.createMapContext('map')
		},
		methods: {
			markertap(e){
				this.$emit('markertap',e.detail.markerId)
			},
			tapOption: function(item) {
				self.latitude = item.location.lat;
				self.longitude = item.location.lng;
				self.markers[0].latitude = item.location.lat;
				self.markers[0].longitude = item.location.lng;
				self.searchKey = item.title
				self.IsOption = false
				self.data = []
				var obj = {}
				obj.latitude = item.location.lat;
				obj.longitude = item.location.lng;
				// console.log(item,"danji",obj)
				self.toLocation(obj)
			},
			openMapApp() {
				let latitude = self.latitude;
				let longitude = self.longitude;
		
				// console.log(latitude)
				uni.openLocation({
					latitude: latitude,
					longitude: longitude,
					success: function(res) {
						// console.log(res);
					}
				});
		
			},
		}
	}
</script>

<style>

</style>