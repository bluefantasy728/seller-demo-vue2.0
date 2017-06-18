<template>
  <div id="app">
    <v-header></v-header>
    <div class="tab">
      <div class="tab-item">商品</div>
      <div class="tab-item">评论</div>
      <div class="tab-item">商家</div>
    </div>
    <div class="content">content</div>
    
  </div>
</template>

<script>
import Header from './components/Header/Header'
// require('./App.styl')
export default {
  components: {
    'v-header': Header
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
  }
  .tab-item{
    flex: 1;
    text-align: center;
  }
}

    
            
</style>

