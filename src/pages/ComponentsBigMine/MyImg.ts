import {State, View as RTView, ViewWrapper, Prop} from "@renest/renest";
import {View, Button, Text, VStack, Canvas, Image, HStack, Spacer, ZStack} from "@renest/component-taro";
import {textReview} from "@tarojs/taro-h5";
import CenterText from "../../Components/CenterText";


interface TIBProp {
  t1 : String
  money?: Number
  num?: Number
  H ?: String
  W ?: String
  colo?: String
}

class MyImg extends RTView{
  // @Prop subTitle : any
  // @State num=0;
  @Prop H = '220px'
  @Prop W = '100vw'
  @Prop t1 = '1111'
  @Prop money = 0
  @Prop num = 0
  @Prop colo = 'white'

  Body = ()=>
    ZStack(
      VStack()
        // Image('https://camo.githubusercontent.com/3e1b76e514b895760055987f164ce6c95935a3aa/687474703a2f2f73746f726167652e333630627579696d672e636f6d2f6d74642f686f6d652f6c6f676f2d3278313531333833373932363730372e706e67')
        .width(this.W)
        .height(this.H)
        .backgroundColor('lightpink')
      ,
      VStack(
        Spacer(),
        Spacer(),
        HStack(
          Spacer(),
          Image('https://camo.githubusercontent.com/3e1b76e514b895760055987f164ce6c95935a3aa/687474703a2f2f73746f726167652e333630627579696d672e636f6d2f6d74642f686f6d652f6c6f676f2d3278313531333833373932363730372e706e67')
            .width('100px')
            .height('100px'),
          Spacer(),
        )
          .marginBottom('10px'),
        Spacer(),
      )
        .width('100%')
      )
}

export default ViewWrapper<TIBProp>(MyImg)
