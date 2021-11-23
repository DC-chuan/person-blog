<template>
    <div class="container">
        <input type="text" v-model='KeyWord' @input="search" placeholder="输入关键字查询博客">
        <div class="blogList" v-for="blog in blogs" :key="blog.userId">
           <a @click.prevent='showdetail(blog)'>
               <h2>{{blog.title}}</h2>
               <h3>{{blog.content}}</h3>
           </a>
         <span>发布时间{{blog.date}}</span>
       </div>
    </div>
</template>

<script>
export default {
    name:'Blogs',
    data(){
        return{
            KeyWord:'',
            blogs: JSON.parse(localStorage.getItem('blogs'))
        }
    },
    mounted(){
        console.log(this.blogs);
        this.$bus.$on('addblog',this.addblog)
    },
    methods:{
        search(){
            console.log(111);
        },
        addblog(data){
           this.blogs.unshift(data)
        },
        showdetail(blog){
            this.$router.push({
	            name:'blogdetail',
		        params:{
			        content:blog.content,
			        title:blog.title
		        }
            })
        }
    },
    watch:{
        blogs:{
            deep:true,
           handler(newValue,oldValue){
               console.log('blogs被修改了'+ newValue);
               localStorage.setItem('blogs',JSON.stringify(newValue))
           }
        }
    }
}
</script>

<style  scoped>
    .container{
        width: 100%;
    }
    .blogList{
        justify-content: center;
        width: 800px;
        height: 150px;
        padding: 5px;
        background-color: skyblue;
        margin: 10px auto;
        text-align: center;      
    }
    ul,li{
        list-style: none;
        width: 50px;
        height: 30px;
    }
    input{
        display: block;
        width: 300px;
        height: 40px;
        outline: none;
        margin: 0 auto;
    }
</style>>

