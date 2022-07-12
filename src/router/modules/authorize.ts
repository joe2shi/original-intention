export default [
  {
    path: '/authorize',
    redirect: '/authorize/login'
  },
  {
    path: '/authorize/login',
    name: 'authorize-login',
    component: () => import('@/views/authorize/login/Login.vue'),
    meta: {
      layout: 'blank'
    }
  },
  {
    path: '/authorize/register',
    name: 'authorize-register',
    component: () => import('@/views/authorize/register/Register.vue'),
    meta: {
      layout: 'blank'
    }
  },
  {
    path: '/authorize/forget-password',
    name: 'authorize-forget-password',
    component: () => import('@/views/authorize/password/Forget.vue'),
    meta: {
      layout: 'blank'
    }
  },
  {
    path: '/authorize/reset-password',
    name: 'authorize-reset-password',
    component: () => import('@/views/authorize/password/Reset.vue'),
    meta: {
      layout: 'blank'
    }
  }
]
