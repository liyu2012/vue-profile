<template>
<div class="leftcode" ref="style-wrap">
<pre>
<code v-html="styleText">

</code>
</pre>
<div class="style-content" v-html="styleCodeComputed" ref="style-content">
</div>
</div>
 
</template>

<script>

export default {
   computed:{
    styleCodeComputed(){
        return '<style>'+this.code+'</style>'
    }
  },
 props:{
   styleText:{
     type:String,
     default:'',


   },
   code:{
    type:String,
    default:''
   }
 },
 created(){

 }


 
}
</script>

<style scoped>

</style>
