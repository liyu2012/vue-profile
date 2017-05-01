<template>
<div class="my-wrap">
<left-style :code="currentStyle" ref="style" :styleText="hightLightCss"> 
 </left-style>
 <right-resume :code="currentResume" ref="resume" :enableHtml="enableHtml" :currentResumeStyle="currentResumeStyle">
 </right-resume>
</div>
 
</template>

<script>
var Prism = require('prismjs')
import LeftStyle from './leftstyle.vue'
import RightResume from './rightresume.vue'
export default {
  data(){
    return {
      currentResume:'',
      hightLightCss:'',
      currentResumeStyle:'',
      currentStyle:'',
      fullResume:`
       <h2 >李煜 前端工程师</h2>
       <span style="color:#888;margin-left:170px">联系方式 tel:17319362912 e-mail:lllyyy2012@icloud.com</span>
<p>
 现在在北京海洋遥感所自动化站担任前端工程师。
 <ul>技能
   <li>*前端开发，</li>
   <li>*熟悉HTML 5,CSS 3,JavaScript，ES6语法新特性</li>
   <li>*了解typescript语言以及angular框架，nodejs</li>
   <li>*熟悉vue,react框架</li>
 </ul>
 <p>毕业院校：武汉大学</p>
 <h2>工作经历</h2>
 <ol>2015.7-至今
   <li>在自动化站负责页面重构，每周更新网站主页，偶尔负责切图工作；</li>
   <li>用react重写了网站php论坛前端模块,使得前后端分离；</li>
   <li>用react搭建了单位新闻网站，其中使用了fecth模块获取服务器数据， 采用antDesign搭建ui界面；</li>
   <li>用vue搭建了单位网站影视娱乐前端模块，利用vue-resource获取服务器端数据。</li>
 </ol>
 <h2> 链接-Link </h2>
 <p> [我的文章]<a href="https://www.zhihu.com/people/li-yu-5213/pins/posts" target="_blank">我的博客文章</a></p>
</p>
      `,
      fullStyle:[`
        /*你好，我是李煜，
         *下面创意借鉴饥人谷网站
         *为了让您更好地了解我，
         *我准备为您展示我的一份简历。
         *这里是我的代码说明区域，
         *下面您将一步一步看到我的样式设置代码
         */
         /**************/
         /**给所有元素加上过渡效果吧**/
         *{
           transition:all 0.5s;
         }
          /**文字离边框貌似太近了**/
        .leftcode{
        padding:0.5em;
        margin:0.5em;
        overflow-y:scroll;
        overflow-x:visible;
        perspective:1000px;
        width:50%;
        height:90vh;

       

      }
         /**背景色貌似不好看**/
         body{
          background:#eee;
         }
         code{
           display:block;
           width:100%;
           height:100%; 
           color:#ccc;
        background:rgb(0,43,54);
        
      }
       /**设置一下字体**/
      code{
        border:1px solid;
        line-height:1.4em;
        overflow：auto;
       
        
      }
     
     /**给代码设置一个高亮效果吧**/
     .token.selector{
       color:rgb(133,152,0);
     }
     .token.property{
       color:rgb(187,137,0);
     }
     .token.punctuation{
       color:yellow;
     }
     .token.function{
       color:rgb(42,161,152);
     }
     .token.comment{
       color:orange;
     }
      /**给代码设置一个立体效果吧**/
    code{
      transform-origin:center center;
      transform-style:preserve-3d;
      transform:rotateY(10deg) translateZ(-100px); 
     
      transition:all 1s;
    }
 /**右侧是我的简历请您稍等。。。**/

      `,`
      /**给我的简历加点样式吧**/
      li,p{
  color:#999;
  font-size:14px;
  font-family:'宋体';
  letter-spacing:1px;
  line-height:1.4em;
}
ul,ol{
  color:#666;
  font-size:18px;
  font-family:'仿宋';
  font-weight:bolder;
}
      h2{
  color:#333;
  font-size:20px;
  font-family:'黑体';
  line-height:1.1em;
}


      `],
      enableHtml:false,

          }
  },
 
  components:{
    'left-style':LeftStyle,
    'right-resume':RightResume,
  },
  methods:{
 setStyle(){
      return new Promise((resolve,reject)=>{
      let n=0;
      let h=0
      let timer=setInterval(()=>{
    n++
    
    if(n>=this.fullStyle[0].length-1)
    {
    
      clearInterval(timer)
      resolve()
     
    }
    h=this.$refs.style.$refs['style-wrap'].scrollHeight;
    
    this.currentStyle=this.fullStyle[0].substring(0,n);
    this.hightLightCss=Prism.highlight(this.currentStyle,Prism.languages.css)
    if(this.fullStyle[0].substring(n-1,n)=='\n'||this.fullStyle[0].substring(n-1,n)==' ')
    this.$refs.style.$refs['style-wrap'].scrollTop=this.$refs.style.$refs['style-wrap'].scrollHeight-this.$refs.style.$refs['style-wrap'].clientHeight
    
    
  },30)

      })
    
    },
    setResume(){
      return new Promise((resolve,reject)=>{
      let n=0
      let timer=setInterval(()=>{
    n++
    if(n>=this.fullResume.length-1)
    {
     // console.log(n,this.fullResume.length)
      clearInterval(timer)
      this.enableHtml=true;
     // console.log(this.enableHtml)
      resolve()

    }  
    this.currentResume=this.fullResume.substring(0,n);
    
    

  },1)

      })
   
    },
     setResumeStyle(){
      return new Promise((resolve,reject)=>{
      let n=0
      let timer=setInterval(()=>{
    n++
    if(n>=this.fullStyle[1].length-1)
    {
      clearInterval(timer)
      resolve()

    }  
 
    this.$refs.style.$refs['style-wrap'].scrollTop=10000
    this.currentStyle=this.fullStyle[0]+this.fullStyle[1].substring(0,n)
    this.hightLightCss=Prism.highlight(this.currentStyle,Prism.languages.css)
    this.currentResumeStyle=this.fullStyle[1].substring(0,n);
    
    

  },30)

      })
   
    },
   async  run(){
  await  this.setStyle()
  await  this.setResume()
  await this.setResumeStyle()
  
   } 
 },
 created(){
   this.run()
 }
 
}
</script>

<style scoped>
.my-wrap{
  display:flex;
  align-items: flex-start;
  justify-content: space-between;
}
.right-resume{
  width:50%;
}

</style>
