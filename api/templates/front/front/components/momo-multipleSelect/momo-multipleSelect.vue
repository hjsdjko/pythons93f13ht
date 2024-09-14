<template>
  <view class="select-container" v-show="show" @touchmove.stop.prevent>
    <view class="mask" :class="activeClass ? 'mask-show' : ''" @tap="onCancel(true)"></view>
    <view class="select-box" :class="activeClass ? 'select-box-show' : ''">
      <view class="header">
        <text class="cancel" @tap="onCancel">{{cancelText}}</text>
        <view class="all" @tap="onAllToggle" v-if="allShow">
          <text :class="isAll ? 'all-active' : ''">全选</text>
        </view>
        <text class="confirm" @tap="onConfirm">{{confirmText}}</text>
      </view>
      <view class="body-warp">
        <scroll-view class="body" scroll-y="true">
          <slot v-if="!data.length" name="tips">
            <view class="empty-tips">暂无数据~</view>
          </slot>
          <view
            class="select-item"
            :class="[item.disabled ? 'disabled' : '',selectedArr[index] ? 'selected' : '']"
            v-for="(item,index) in data"
            :key="item[valueName]"
            @tap="onSelected(index)"
          >
            <view class="label">{{item[labelName]}}</view>
            <text v-show="selectedArr[index]" class="selected-icon">✔</text>
          </view>
        </scroll-view>
      </view>
    </view>
  </view>
</template>
<!-- 多选组件 -->
<script>
export default {
  model: {
    prop: "value",
    event: ["input"]
  },
  data() {
    return {
      show: false, //是否显示
      activeClass: false, //激活样式状态
      selectedArr: [], //选择对照列表
      selectedArrOld: [] //选择对照列表上一次的数据
    };
  },
  onShow() {
    this.show = this.value;
  },
  computed: {
    // 返回是否全选
    isAll() {
      let wipeDisabledList = this.returnWipeDisabledList();
      if (!wipeDisabledList.length) return false;
      return !wipeDisabledList.includes(false);
    }
  },
  props: {
    // 双向绑定
    value: {
      type: Boolean,
      default: false
    },
    // 取消按钮文字
    cancelText: {
      type: String,
      default: "取消"
    },
    // 确认按钮文字
    confirmText: {
      type: String,
      default: "确认"
    },
    // label对应的key名称
    labelName: {
      type: String,
      default: "label"
    },
    // value对应的key名称
    valueName: {
      type: String,
      default: "value"
    },
    // 是否允许点击遮罩层关闭
    maskCloseAble: {
      type: Boolean,
      default: true
    },
    // 是否显示全选
    allShow: {
      type: Boolean,
      default: true
    },
    // 模式
    mode: {
      type: String,
      default: "multiple"
    },
    // 默认选中值
    defaultSelected: {
      type: Array,
      default: function() {
        return [];
      }
    },
    // 数据源
    data: {
      type: Array,
      required: true,
      default: () => {
        return [];
      }
    }
  },
  watch: {
    async value(newVal) {
      this.show = newVal;
      await this.$nextTick();
      this.activeClass = newVal;
      if (newVal) {
        this.selectedArrOld = JSON.parse(JSON.stringify(this.selectedArr));
      }
    },
    show(newVal) {
      this.$emit("input", newVal);
      this.$emit("change", newVal);
    },
    data: {
      // 设置初始选择对照列表
      handler(list) {
        this.selectedArr = list.map(el => false);
        this.setItemActiveState();
      },
      deep: true,
      immediate: true
    },
    defaultSelected: {
      handler() {
        this.setItemActiveState();
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    // 设置默认选中通用办法
    setItemActiveState() {
      if (this.data.length && this.defaultSelected.length) {
        this.data.forEach((item, i) => {
          for (let n = 0; n < this.defaultSelected.length; n++) {
            if (
              !item.disabled &&
              item[this.valueName] === this.defaultSelected[n]
            ) {
              this.selectedArr.splice(i, 1, true);
              break;
            }
          }
        });
      }
    },
    /**
     * 选择事件
     * @index {Number} 点击下标
     */
    onSelected(index) {
      if (this.data[index].disabled) return;
      let index2Active = this.selectedArr[index];
      this.selectedArr.splice(index, 1, !index2Active);
    },
    // 取消事件
    onCancel(isMask) {
      if (!isMask || this.maskCloseAble) {
        this.show = false;
        this.selectedArr = JSON.parse(JSON.stringify(this.selectedArrOld));
      } else {
        return;
      }
      this.$emit("cancel");
    },
    // 返回去除了disabled状态后的对照列表
    returnWipeDisabledList() {
      let arr = [];
      this.selectedArr.forEach((el, index) => {
        if (!this.data[index].disabled) arr.push(el);
      });
      return arr;
    },
    // 全选/非全选事件
    onAllToggle() {
      let wipeDisabledList = this.returnWipeDisabledList();
      // 如果去除了disabled的对照列表有false的数据，代表未全选
      if (wipeDisabledList.includes(false)) {
        this.selectedArr.forEach((el, index) => {
          if (!this.data[index].disabled)
            this.selectedArr.splice(index, 1, true);
        });
      } else {
        this.selectedArr.forEach((el, index) => {
          if (!this.data[index].disabled)
            el = this.selectedArr.splice(index, 1, false);
        });
      }
    },
    // 确定事件
    onConfirm() {
      this.show = false;
      let selectedData = [];
      this.selectedArr.forEach((el, index) => {
        if (el) {
          selectedData.push(this.data[index]);
        }
      });
      if (this.mode === "multiple") {
        this.$emit("confirm", selectedData);
      } else {
        let backData = selectedData[0] || {};
        this.$emit("confirm", backData);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.select-container {
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  $paddingLR: 18rpx;
  .mask {
    width: 100%;
    height: 100%;
    background-color: $uni-bg-color-mask;
    opacity: 0;
    transition: opacity 0.3s;
    &.mask-show {
      opacity: 1;
    }
  }
  // 选择器内容区域
  .select-box {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translate3d(0px, 100%, 0px);
    background-color: $uni-bg-color;
    transition: all 0.3s;
    &.select-box-show {
      transform: translateZ(0);
    }
    .header {
      display: flex;
      box-sizing: border-box;
      width: 100%;
      justify-content: space-between;
      border-bottom: 1px solid $uni-border-color;
      line-height: 76rpx;
      font-size: 30rpx;
      padding: 0 $paddingLR;
      .cancel {
        color: $uni-text-color-grey;
      }
      .all {
        color: $uni-color-success;
        .all-active {
          &::after {
            display: inline-block;
            content: "✔";
            padding-left: 8rpx;
          }
        }
      }
      .confirm {
        color: $uni-color-primary;
      }
    }
    .body-warp {
      width: 100%;
      height: 30vh;
      box-sizing: border-box;
      padding: 20rpx $paddingLR;
    }
    .body {
      width: 100%;
      height: 100%;
      overflow-y: auto;
      .empty-tips {
        margin-top: 25%;
        text-align: center;
        font-size: 26rpx;
        color: $uni-color-error;
      }
      .select-item {
        display: flex;
        font-size: 26rpx;
        line-height: 58rpx;
        color: #303133;
        position: relative;
        transition: all 0.3s;
        &.selected {
          color: $uni-color-primary;
        }
        &.disabled {
          color: $uni-text-color-disable;
        }
        > .label {
          flex: 1;
          text-align: center;
        }
        > .selected-icon {
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
        }
      }
    }
  }
}
</style>