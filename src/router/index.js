import AuthLayout from '@/components/layouts/AuthLayout.vue'
import DashboardLayout from '@/components/layouts/DashboardLayout.vue'
import Complete from '@/pages/Complete.vue'
import DashboardHome from '@/pages/DashboardHome.vue'
import Employee from '@/pages/Employee.vue'
import ForgotPassword from '@/pages/ForgotPassword.vue'
import Login from '@/pages/Login.vue'
import SignUp1 from '@/pages/SignUp1.vue'
import SignUp2 from '@/pages/SignUp2.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Card from '@/pages/Card.vue'
import WalletHistory from '@/pages/WalletHistory.vue'
import SettingsLayout from '@/components/layouts/SettingsLayout.vue'
import Profile from '@/pages/Profile.vue'
import Password from '@/pages/Password.vue'
import StoreInformation from '@/pages/StoreInformation.vue'
import BillingInformation from '@/pages/BillingInformation.vue'
import InvoiceHistory from '@/pages/InvoiceHistory.vue'

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
        { path: 'employee', component: Employee, name: 'employee' },
        { path: 'card', component: Card, name: 'card' },
        { path: 'walletHistory', component: WalletHistory, name: 'walletHistory' },
        {
          path: '/settings',
          component: SettingsLayout,
          name: 'settings',
          redirect: '/settings/profile',
          meta: { requiresAuth: true },
          children: [
            { path: 'profile', component: Profile, name: 'profile' },
            { path: 'password', component: Password, name: 'password' },
            { path: 'storeInformation', component: StoreInformation, name: 'storeInformation' },
            {
              path: 'billingInformation',
              component: BillingInformation,
              name: 'billingInformation',
            },
            { path: 'invoiceHistory', component: InvoiceHistory, name: 'invoiceHistory' },
          ],
        },
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
  const user = localStorage.getItem('user') === 'true'

  if (to.meta.requiresAuth && !user) {
    next({ name: 'login' })
    return
  }
  if (to.meta.isGuest && user) {
    next({ name: 'dashboard' })
    return
  }
  next()
})

export default router
