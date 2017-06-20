<template>
  <div id="app">
    <v-header></v-header>
    <div class="tab">
      <router-link to="/goods" class="tab-item">商品</router-link>
      <router-link to="/ratings" class="tab-item">评论</router-link>
      <router-link to="/seller" class="tab-item">商家</router-link>
    </div>
    <router-view>

    </router-view>
    
  </div>
</template>

<script>
import Header from './components/Header/Header'
import './common/style/common.scss'

const ERR_NO = 0
export default {
  components: {
    'v-header': Header
  },
  created () {
    this.$http.get('/api/seller').then((res) => {
      res = res.body
      if(res.errno === ERR_NO) {
        let data = res.data
        console.log(data)
      }
    })
  }
}
</script>
<style lang="scss">
#app{
  .tab{
    display: flex;
    width: 100%;
    color: red;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #ccc;
  }
  .tab-item{
    flex: 1;
    text-align: center;
  }
}

    
            
</style>

