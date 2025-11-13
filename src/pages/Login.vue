<template lang="">
  <div class="flex justify-center items-center">
    <div class="w-full max-w-md space-y-6">
      <div>
        <h2 class="font-bold text-2xl text-[#013C61]">Welcome</h2>
        <p class="font-xs text-[#013C61]">
          Don’t have an account?
          <router-link :to="{name: 'signup1'}" class="text-green-600 hover:underline font-medium"
            >Sign up</router-link
          >
        </p>
      </div>
      <div class="bg-white rounded-xl max-w-md shadow-lg shadow-[#EAEEE9] p-8 space-y-4">
        <div>
          <label class="text-xs text-gray-600">Email</label>
          <div class="relative">
            <input
              type="email"
              v-model="form.email"
              name=""
              value=""
              class="w-full border-b focus:outline-none focus:border-green-800 text-[#013C61]"
            />
            <img src="/icons/@.svg" alt="Email Icon" class="absolute right-0 bottom-1" />
          </div>
        </div>
        <div>
          <label class="text-xs text-gray-600">Password</label>
          <div class="relative">
            <input
              type="password"
              v-model="form.password"
              name=""
              value=""
              class="w-full border-b focus:outline-none focus:border-green-800 text-[#013C61]"
            />
            <img src="/icons/eye.svg" alt="Eye Icon" class="absolute right-0 bottom-1" />
          </div>
        </div>

        <div class="flex justify-between">
          <router-link
            :to="{name:'forgotpassword'}"
            class="rounded-md hover:underline text-green-600 px-6 py-2"
        
            >Forgot Password?</router-link
          >

          <router-link :to="{name: 'dashboard'}" @click= "checkUser" class="rounded-md bg-green-600 hover:bg-green-800 text-white px-6 py-2"
            >Sign in</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>


export default {
data(){
  return{
    form:{
      email:'',
      password:''
    }
  }
},
methods:{
  checkUser(){
   this.$router.push({name:'dashboard'})
    try{
      localStorage.setItem('user', true)
      
    }
    catch(e){
      console.log("Username or password is incorrect", e)
    }

}
}
}
</script>
<style lang=""></style>
