<template lang="">
  <div class="flex flex-col mx-40 my-20 bg-white rounded-lg shadow-lg">
    <div class="flex space-x-14">
      <router-link
        v-for="option in settingsOptions"
        :key="option"
        :to="`/settings/${option.path}`"
        @click="isActiveRoute(option.path)"
        class="text-[#013C61] border-b-4"
        :class="isActiveRoute(option.path) ? 'border-[#2BDA53] font-bold' : 'border-transparent'"
      >
        {{ option.name }}
      </router-link>
    </div>
    <div class="border border-[#013C6133] w-full"></div>
    <router-view />
  </div>
</template>
<script>
import DashboardLayout from './DashboardLayout.vue'

export default {
  components: {
    DashboardLayout,
  },
  data() {
    return {
      settingsOptions: [
        { path: 'profile', name: 'Profile' },
        { path: 'password', name: 'Password' },
        { path: 'storeInformation', name: 'Store Information' },
        { path: 'billingInformation', name: 'Billing Information' },
        { path: 'invoiceHistory', name: 'Invoice History' },
      ],
    }
  },
  methods: {
    isActiveRoute(routePath) {
      return this.$route.path === `/settings/${routePath}`
      console.log('the current path is ', routePath)
    },
  },
}
</script>
<style lang=""></style>
