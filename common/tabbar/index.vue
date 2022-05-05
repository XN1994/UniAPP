<template>
  <view class="tarbar">
    <view class="tarbar-list" :style="{
                background: tabBar.backgroundColor,
                color: tabBar.color,
				// 这里 暂时无用
                'border-top': tabBar.position == 'bottom' ? '1rpx solid ' + tabBar.borderStyle : 0,
                'border-bottom': tabBar.position == 'top' ? '1rpx solid ' + tabBar.borderStyle : 0
            }">
      <view class="tarbar-list-ul">
        <view class="tarbar-list-li " v-for="(item, index) in tabBar.list" :key="index"
          @click="setSelected(index,item)">
          <view class="tarbar-list-li-icon">
			  <!-- 判断当前选中的是否是目标index 如果true 更换A图片 否则更换a图片 -->
            <image :src="current == index ? item.selectedIconPath : item.iconPath" mode=""></image>
          </view>
          <view :class="current == index?'tarbar-list-li-name act':'tarbar-list-li-name'">{{ item.text }}</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
 
  export default {
    // 父组件传值 子这边接收（current）索引对应默认从0开始
    props: ['current'],
    data() {
      return {
        isshow: 1,
        tabBar: {
          color: '#344356',
          selectedColor: '#5468FF',
          borderStyle: '#fff',
          backgroundColor: '#fff',
          position: 'bottom',
          list: [{
              pagePath: "/pages/home/home",
              iconPath: "/static/tabbar/home.png",
              selectedIconPath: "/static/tabbar/home-selected.png",
              text: "首页"
            },
            {
              pagePath: "/pages/question/question",
              iconPath: "/static/tabbar/question.png",
              selectedIconPath: "/static/tabbar/question-selected.png",
              text: "面试题"
            }, {
              pagePath: "/pages/process/process",
              iconPath: "/static/tabbar/process.png",
              selectedIconPath: "/static/tabbar/process-selected.png",
              text: "面试流程"
            },
            {
              pagePath: "/pages/my-contract/my-contract",
              iconPath: "/static/tabbar/my-contract.png",
              selectedIconPath: "/static/tabbar/my-contract-selected.png",
              text: "我的协议"
            },
            {
              pagePath: "/pages/my-card/my-card",
              iconPath: "/static/tabbar/my-card.png",
              selectedIconPath: "/static/tabbar/my-card-selected.png",
              text: "我的名片"
            }
          ]
        },
        myInfo:null,
      };
    },
    onLoad() {
    },
	// 显示隐藏
	onShow() {
	  uni.hideTabBar()
	},
    mounted() {

    },
    computed: {
      
    },
    methods: {
      
      setSelected(index, item) {
        // 判断面试流程 
        // 判断是否登录 与 入学
		
		// 根据指定页面的路由地址跳转
        uni.switchTab({
          url: this.tabBar.list[index].pagePath
        });
      },
    }
  };
</script>

<style scoped>
  .tarbar {
    width: 100%;
    z-index: 9999;
    position: fixed;
    box-sizing: border-box;
  }

  .tarbar-list {
    width: 100%;
    background: #FFFFFF;
    position: fixed;
    left: 0;
    bottom: 0;
    box-shadow: 0px -12px 37px 0px rgba(230, 235, 243, 0.9);
    border-top-left-radius: 30rpx;
    border-top-right-radius: 30rpx;
    box-sizing: border-box;
  }

  .tarbar-list-ul {
    width: 100%;
    height: 100%;
    /* padding-top: 20upx; */
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-sizing: border-box;
  }

  .tarbar-list-li {
    /* width: 80upx;
		height: 80upx; */
  }

  .tarbar-list-li-icon {
    width: 56rpx;
    height: 56rpx;
    margin: 0 auto;
    padding: 20rpx 0;
  }

  .tarbar-list-li-icon image {
    width: 56rpx;
    height: 56rpx;
  }

  .tarbar-list-li-name {
    width: 100%;
    text-align: center;
    line-height: 40rpx;
    font-size: 28rpx;
    height: 40rpx;
    font-family: Microsoft YaHei;
  }

  .act {
    color: #5468FF;
  }
</style>
