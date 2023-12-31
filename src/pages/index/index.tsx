import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import React, { PureComponent } from 'react'
import { Button } from "@nutui/nutui-react-taro"

import './index.styl'

// 使用 definePageConfig 定义的页面配置对象不能使用变量
definePageConfig({
  navigationBarTitleText: '首页',
})

export default class Index extends PureComponent<any, any> {
  
  handleGoTestA = () => {
    Taro.navigateTo({
      url: '/pages/testA/index'
    })
  }

  handleGoBack = () => {
    Taro.navigateBack()
  }

  render() {
    return (
      <View className="nutui-react-demo">
        <View className="index">
          首页
        </View>
        <View className="index">
          <Button 
            type="primary" 
            className="btn"
            onClick={this.handleGoTestA}
          >
            测试页面 A
          </Button>
        </View>
      </View>
    )
  }

}
