<template>
  <div class="users">
      <h1>users</h1>
      <!-- 添加用户 -->
      <form v-on:submit="addUser">
        <input type="text" name="" id="" v-model="newUser.name" placeholder="Enter name">
        <input type="text" name="" id="" v-model="newUser.email" placeholder="Enter emali">
        <input type="submit" value="submit">
      </form>
      <ul>
        <li v-for="user in users">
          <input type="checkbox" v-model="user.contacted">
          <span :class="{contacted:user.contacted}">
          {{user.name}}:{{user.email}}
          <button v-on:click="deleteUser(user)">x</button>
          </span>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  name:"users",
  data(){
    return {
      newUser:{},
      users:[
        {
          name:"mister zheng",
          email:"misterzheng@qq.com",
          contacted:false,
        },
        {
          name:"mister wu",
          email:"misterwu@qq.com",
          contacted:false,
        },
        {
          name:"mister chen",
          email:"misterchen@qq.com",
          contacted:false,
        },
      ]
    }
  },
  methods:{
    addUser:function(e){
      // console.log("hello"),
      this.users.push(
        {name:this.newUser.name,
        email:this.newUser.email,
        contacted:false
        }
      ),
      e.preventDefault();
      
    },
    deleteUser: function(user){
      // console.log("hello")
      this.users.splice(this.users.indexOf(user),1);
    }
    
  },
  
}
</script>

<style scoped>
.contacted{
  text-decoration: line-through;
}
</style>