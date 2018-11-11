<template>
  <div class="con">
     <div>
            <swiper 
              class="swiper"
              :autoplay="autoplay" :interval='interval' :duration="duration">
              <block v-for="(item,index) in imgUrls" :key="index">
                <swiper-item>
                  <image :src="item.picUrl" class="slide_image"/>
                </swiper-item>
              </block>
            </swiper>    
     </div>    
     <div class="body_nav">
       <card></card>
     </div>
    <a href="/pages/counter/main" class="counter">去往Vuex示例页面</a>
    <a href="/pages/logs/main" class="counter">查看日志文件</a>
  </div>
</template>

<script>
import card from '@/components/bodynav'
import xhr from '../../utils/axios.js'

export default {
  data () {
    return {
      motto: 'Hello World',
      imgUrls:[],
      autoplay:true,
      duration:500,
      interval:2000,
      componentId:""
    }
  },

  components: {
    card
   
  },

  methods: {
    bindViewTap () {
      const url = '../logs/main'
      wx.navigateTo({ url })
    },
   
    clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev)
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    // this.getUserInfo()
    
    xhr.get('/banner').then(res=>{
      console.log(res)
      this.imgUrls = res.banners
    })
  }

}
</script>

<style scoped>
.swiper{
  width: 100%;
  display: block;
  height: 200px;;
}
.slide_image{
  display: inline-block;
  width: 100%;
}
.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}

.counter {
  display: inline-block;
  margin: 10px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
</style>
