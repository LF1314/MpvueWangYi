
//中间导航栏部分
<template>
    <div class="nav_wraper">
         <div class="nav_inner">
                <div  class="navitem" id="1"  @click="handlechange">
                     <i class="iconfont icon-jinrituijian"></i>   
                    <p>推荐</p>
                </div> 
                <div class="navitem" id="2"  @click="handlechange">
                     <i class="iconfont icon-gedan"></i>   
                    <p>歌单</p>
                </div> 
                <div class="navitem" id="3"  @click="handlechange">
                     <i class="iconfont icon-paihangbang"></i>   
                    <p>排行</p>
                </div> 
                <div class="navitem" id="4"  @click="handlechange">
                     <i class="iconfont icon-maikefeng"></i>   
                    <p>电台</p>
                </div>
         </div>
         <div class="content_body">
               <rank v-if="page == 3"></rank>
               <radios v-if="page == 2"></radios>
               <recom v-if="page == 1"></recom>
               <daintai v-if="page == 4"></daintai>
         </div>
    </div>
</template>
<script>
import rank from './rank'
import radios from './radio'
import recom from './recomon'
import daintai from './diantai'
    export default
    {
      name:'bodynav',
      data(){
          return{
              page:'1'
          }
      },
      components:{
           rank,
           radios,
           recom,
           daintai


      },
      methods:{ 
          handlechange(msg, ev){
          this.page = msg.currentTarget.id
          }
      },
     mounted(){
     
     },
      
    }
</script>

<style scoped>
@import url('../static/font.css');
 .nav_inner{
     display: flex;
     justify-content: space-around;
     padding:10px 0 10px;
 }
 .navitem{
     flex: 1;
     text-align: center;
 }
</style>
