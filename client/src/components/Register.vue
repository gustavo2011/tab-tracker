<template>
 <div>
   <h1>Register</h1>

   <input 
    type="email" 
    name="email"
    v-model="email"
    placeholder="email">
    <br>
  <input
    type="password"
    name="password"
    v-model="password"
    placeholder="password">
    <br>

    <button @click="register">
     Register
    </button>
 </div>
</template>

<script>
import AuthenticationService from '@/services/Authenticationservice'
export default {
  data () {
    return {
      email:'',
      password:''
    }
  },
  methods: {
   async register () {
    const respond = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
       console.log('register button was clicked', this.email , this.password )
    }
   
  }
}
</script>

<style scooped>

</style>
