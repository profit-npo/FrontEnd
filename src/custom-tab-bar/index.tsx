import { Component } from 'react'
import Taro from '@tarojs/taro'
import { CoverView, CoverImage } from '@tarojs/components'

import './index.scss'




export default class Index extends Component {
  state = {
    selected: 0,
    color: '#000000',
    selectedColor: '#DC143C',
    list: [
      {
        pagePath: '/pages/Home/index',
        selectedIconPath: '../images/tabbar_home_on.png',
        iconPath: '../images/tabbar_home.png',
        text: '首页'
      },
      {
        pagePath: '/pages/Events/index',
        selectedIconPath: '../images/tabbar_cate_on.png',
        iconPath: '../images/tabbar_cate.png',
        text: '活动'
      },
      {
        pagePath: '/pages/Info/index',
        selectedIconPath: '../images/tabbar_cart_on.png',
        iconPath: '../images/tabbar_cart.png',
        text: '资讯'
      },
      {
        pagePath: '/pages/Mine/index',
        selectedIconPath: '../images/tabbar_my_on.png',
        iconPath: '../images/tabbar_my.png',
        text: '我的'
      },
    ]
  }

  switchTab(index:any, url:any) {
    this.setSelected(index)
    Taro.switchTab({ url })
  }

  setSelected (idx: number) {
    this.setState({
      selected: idx
    })
  }

  render() {
    const { list, selected, color, selectedColor } = this.state

    return (
      <CoverView className='tab-bar'>
        <CoverView className='tab-bar-border'></CoverView>
        {list.map((item, index) => {
          return (
            <CoverView key={index} className='tab-bar-item' onClick={this.switchTab.bind(this, index, item.pagePath)}>
              <CoverImage src={selected === index ? item.selectedIconPath : item.iconPath} />
              <CoverView style={{ color: selected === index ? selectedColor : color }}>{item.text}</CoverView>
            </CoverView>
          )
        })}
      </CoverView>
    )
  }
}
