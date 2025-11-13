import AuthLayout from '@/components/layouts/AuthLayout.vue'
import DashboardLayout from '@/components/layouts/DashboardLayout.vue'
import Complete from '@/pages/Complete.vue'
import DashboardCard from '@/pages/DashboardCard.vue'
import DashboardHome from '@/pages/DashboardHome.vue'
import DashboardProfile from '@/pages/DashboardProfile.vue'
import ForgotPassword from '@/pages/ForgotPassword.vue'
import Login from '@/pages/Login.vue'
import SignUp1 from '@/pages/SignUp1.vue'
import SignUp2 from '@/pages/SignUp2.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DashboardLayout,
      name: 'home',
      meta: { requiresAuth: true },
      children: [
        { path: '', component: DashboardHome, name: 'dashboard' },
        { path: 'profile', component: DashboardProfile, name: 'profile' },
        { path: 'card', component: DashboardCard, name: 'card' },
      ],
    },


    {
      path: '/auth',
      component: AuthLayout,
      name: 'auth',
      meta: { isGuest: true },
      redirect: '/auth/login',
      children: [
        { path: 'login', component: Login, name: 'login' },
        { path: 'signup1', component: SignUp1, name: 'signup1' },
        { path: 'signup2', component: SignUp2, name: 'signup2' },
        { path: 'complete', component: Complete, name: 'complete' },
        { path: 'forgotpassword', component: ForgotPassword, name: 'forgotpassword' },
      ],
    },
  ],
})
router.beforeEach((to, from, next) => {
  const user = localStorage.getItem('user') === "true"

  if(to.meta.requiresAuth && !user) {
     next({ name: 'login' })
    return
  }
  if (to.meta.isGuest && user) {
    next({ name: 'dashboard' })
    return 
  }
  next();
})

export default router
