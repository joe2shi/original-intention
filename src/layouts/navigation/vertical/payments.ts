export default [
  {
    subheader: 'PAYMENTS'
  },
  {
    title: 'Payment',
    icon: 'mdi-content-copy',
    badge: '2',
    badgeColor: 'success',
    children: [
      {
        title: 'Ali Payment',
        to: { name: 'ali-payment', params: { id: 0 } }
      },
      {
        title: 'Wechat Payment',
        to: { name: 'wechat-payment', params: { id: 1 } }
      }
    ]
  }
]
