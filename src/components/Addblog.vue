<template>
  <div class="container">
       <form @submit.prevent="submit" v-show="!submited">
            <label class="title">博客标题：
                <input type="text" placeholder="请输入博客标题" required v-model.trim="blog.title">
            </label>
            <label>博客内容:<textarea cols="30" rows="10" v-model.lazy="blog.content" required></textarea></label>
            <div class="selecter" >
                <select name="" id="" v-model="blog.category">
                    <option value="">请选择分类</option>
                    <option value="Vue.js">Vue.js</option>
                    <option value="Node.js">Node.js</option>
                    <option value="React.js">React.js</option>
                    <option value="Mongodb">Mongodb</option>
                </select>
            </div>
            <div class="foo">
                <button type="submit" >提交</button>
                <button class="cancle">取消</button>       
            </div>      
       </form>
        <el-col :sm="12" :lg="6" v-show="submited">
            <el-result icon="success" title="成功提示" subTitle="提交成功">
            <template slot="extra">
                <el-button   el-button type="primary" >返回</el-button>
            </template>
    </el-result>
  </el-col>
  </div>
</template>

<script>
import axios from 'axios'
import {nanoid} from 'nanoid'
export default {
    name:'Addblog',
    data(){
        return{
            submited:false,
            blog:{
                category:'',
                title:'',
                content:''
            }
        }
    },
    methods:{
        submit(){
            axios({
                method:'post',
                url: 'https://jsonplaceholder.typicode.com/posts',
                data: {
                    title: this.blog.title,
                    category: this.blog.category,
                    userId: nanoid(),
                    content:this.blog.content,
                    date: new Date(Date.now())
                }
            })
            .then(data=>{
               this.$bus.$emit('addblog',data.data)
               
            })
            .catch(err=>console.log(err));
        }
    },
    mounted(){
    }
}
</script>

<style scoped>
    .container{
        width: 100%;
        display: flex;
        justify-content: center;
        font-size: 18px;
    }
    /* label{
        display: block;
        margin:10px 0 ;
    } */
    input,textarea{
        outline: none;
        display: block;
        width: 300px;
        margin-top: 5px;
    }
    input{
        height: 30px;     
    }
    textarea{
        height: 100px;
    }
    .foo{
        margin-top: 30px;
    }
    .foo button{
        margin-left: 10px;
    }
    .selecter{
        margin: 10px 0;
    }
    button{
        width: 50px;
        height: 30px;
    }
</style>