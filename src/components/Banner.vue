<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="博客总览" name="first"><Blogs/></el-tab-pane>
    <el-tab-pane label="写博客" name="second">
      <Addblog/>
    </el-tab-pane>
    <el-tab-pane label="登录/注册" name="third">登录/注册</el-tab-pane>
  </el-tabs>
</template>
<script>
import Addblog from '../components/Addblog.vue';
import Blogs from '../components/Blogs.vue';
  export default {
    name:'Banner',
    components: { Addblog ,Blogs},
    data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
     handleClick(tab, event) {
        // console.log(tab, event);
      }
    },
    
  }
</script>

<style >

</style>
