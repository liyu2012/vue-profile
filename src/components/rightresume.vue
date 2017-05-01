<template>
<div>
<div v-if="enableHtml" v-html="code" class="right-resume">


</div>
<div v-html="style"></div>
</div>

 
</template>

<script>
export default {

  props:{
    enableHtml:{
      type:Boolean,
      default:false
    },
    currentResumeStyle:{
      type:String,
      default:''
    },
    code:{
      type:String,
      default:''
    }
  },
  methods:{

 },
 computed:{
   style(){
     return `<style>${this.currentResumeStyle}</style>`
   }
 }
 
}
</script>

<style scoped>

.right-resume{
  animation: fade 2s;
}
@keyframes fade{
  from{
    opacity:0;
  }
  to{
    opacity:1;
  }
}
</style>
