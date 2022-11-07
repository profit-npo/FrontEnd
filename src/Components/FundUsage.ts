import {State, View as RTView, ViewWrapper, Prop} from "@renest/renest";
import {View, Button, Text, VStack, Canvas, Image} from "@renest/component-taro";
import {textReview} from "@tarojs/taro-h5";


interface FUProp {
  monthof: number
}

class FundUsage extends RTView{
  // @Prop subTitle : any
  // @State num=0;
  @Prop monthof = 9

  Body = ()=>
    VStack(
      Text('资金使用详情')
        .fontSize('1em'),
      Text(this.monthof+'月份')
        .fontSize('1.5em'),
      Image('https://camo.githubusercontent.com/3e1b76e514b895760055987f164ce6c95935a3aa/687474703a2f2f73746f726167652e333630627579696d672e636f6d2f6d74642f686f6d652f6c6f676f2d3278313531333833373932363730372e706e67')
        .width("200px")
        .height("150px"),

    )
      .style({'dsiplay':'inline-block'})
}

export default ViewWrapper(FundUsage)
