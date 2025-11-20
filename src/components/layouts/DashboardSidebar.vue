<template lang="">
  <div class="bg-[#FFFFFF] h-auto w-20 pt-20">
    <div class="space-y-10">
      <router-link
        v-for="route in routes"
        :key="route.path"
        :to="route.path"
        @click="isActiveRoute(route.path)"
        class="flex flex-col items-center justify-center border-l-8 h-14"
        :class="isActiveRoute(route.path) ? 'border-[#2BDA53]' : 'border-transparent'"
      >
        <component
          :is="route.icon"
          class="size-6"
          :class="isActiveRoute(route.path) ? 'text-[#2BDA53] size-8' : 'text-[#013C61] '"
        />
      </router-link>
    </div>
  </div>
</template>
<script>
import CardIcon from '../icons/CardIcon.vue'
import HomeIcon from '../icons/HomeIcon.vue'
import PeopleIcon from '../icons/PeopleIcon.vue'

export default {
  components: {
    HomeIcon,
    PeopleIcon,
    CardIcon,
  },
  data() {
    return {
      routes: [
        { path: '/', icon: 'HomeIcon' },
        { path: '/employee', icon: 'PeopleIcon' },
        { path: '/card', icon: 'CardIcon' },
      ],
    }
  },
  methods: {
    isActiveRoute(routePath) {
      return this.$route.path === routePath
    },
  },
}
</script>
<style lang=""></style>
