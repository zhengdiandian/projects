<template>
  <div class="test">
      <h1>{{title}}</h1>
      <p>{{user.firstName}}</p>
      <p v-text="user.lastName"></p>
      <p v-if="showName">{{user.firstName}}</p>
      <p v-else>noboyd</p>]
      <ul>
        <li v-for="itme in itmes">{{itme.title}}</li>
      </ul>
      <button v-on:click="greet('hallo Everuboyd')">sya greeting</button>
      <input type="text" name="" id="" v-on:keyup="press" v-on:keyup.enter="enterhit">
      <hr>
      <!--computed-->
      <label for="">firstName:</label>
      <input type="text" name="" id="" v-model="user.firstName">
      <br>
      <label for=""lateName:</label>
      <input type="text" name="" id="" v-model="user.lastName">
      <br>
      <h3>{{fullName}}</h3>
      <!-- props -->
      <h2>{{msg}}</h2>
  </div>
</template>

<script>
export default {
  name:"test",
  props:{
      msg:{
        type: String,
        default: "默认"
    }
  },
  data(){
    return {
      title: "hello Vue.js",
      user: {
        firstName:"zheng",
        lastName:"wu"
      },
      showName: false ,
      itmes:[
        {title : "itme 1"},
        {title : "itme 2"},
        {title : "itme 3"},
        {title : "itme 4"}
      ]
    }
  },
  methods:{
    greet:function(greet){
      alert(greet);
    },
    press:function(){
    console.log("press..........")
  },
    enterhit:function(){
      console.log("ko")
    }
  },
  computed:{
    fullName:function(){
      return this.user.firstName + " " + this.user.lastName; 
    }
  }
  
}
</script>

<style scoped>

</style>

