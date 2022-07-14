export default [
  {
    path: '/payments',
    redirect: '/payments/ali'
  },
  {
    path: '/payments/ali/:id',
    name: 'ali-payment',
    component: () => import('@/views/payments/ali/AliPayment.vue'),
    meta: {
      layout: 'content'
    }
  },
  {
    path: '/payments/wechat/:id',
    name: 'wechat-payment',
    component: () => import('@/views/payments/wechat/WechatPayment.vue'),
    meta: {
      layout: 'content'
    }
  }
]
