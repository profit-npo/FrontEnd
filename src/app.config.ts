export default defineAppConfig({
  pages: [
    'pages/Home/index',
    'pages/Events/index',
    'pages/Info/index',

    'pages/Mine/index',
    'pages/Mine/MyInfo/index',
    'pages/Mine/MyInfo/Edit/index',
    'pages/Mine/FollowedOnes/index',
    'pages/Mine/DonatedOnes/index',
    'pages/Mine/CertifLst/index',
    'pages/Mine/SpecialApply/index',
    'pages/Mine/CollegeApply/index',

  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    custom: false,
    color: '#000000',
    selectedColor: '#DC143C',
    backgroundColor: '#ffffff',
    list: [
      {
        pagePath: 'pages/Home/index',
        selectedIconPath: 'images/tabbar_home_on.png',
        iconPath: 'images/tabbar_home.png',
        text: '首页'
      },
      {
        pagePath: 'pages/Events/index',
        selectedIconPath: 'images/tabbar_cate_on.png',
        iconPath: 'images/tabbar_cate.png',
        text: '活动'
      },
      {
        pagePath: 'pages/Info/index',
        selectedIconPath: 'images/tabbar_cart_on.png',
        iconPath: 'images/tabbar_cart.png',
        text: '资讯'
      },
      {
        pagePath: 'pages/Mine/index',
        selectedIconPath: 'images/tabbar_my_on.png',
        iconPath: 'images/tabbar_my.png',
        text: '我的'
      },
    ]
  }
})
