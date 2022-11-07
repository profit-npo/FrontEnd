import {State, View as RTView, ViewWrapper, Prop} from "@renest/renest";
import {View, Button, Text, VStack, Canvas, Image, HStack, Spacer} from "@renest/component-taro";
import {textReview} from "@tarojs/taro-h5";


interface CIProp {
  imgURL?: String
  H ?: String
  W ?: String
}

class CenterImage extends RTView{
  // @Prop subTitle : any
  // @State num=0;
  @Prop imgURL = 'https://camo.githubusercontent.com/3e1b76e514b895760055987f164ce6c95935a3aa/687474703a2f2f73746f726167652e333630627579696d672e636f6d2f6d74642f686f6d652f6c6f676f2d3278313531333833373932363730372e706e67'
  @Prop H = '200px'
  @Prop W = '97vw'

  Body = ()=>
    HStack(
      Spacer(),
      Image(this.imgURL)
        // .width("200px")
        // .height("150px"),
        .width(this.W)
        .height(this.H)
        .margin('5px'),
      Spacer()
    )
}

export default ViewWrapper<CIProp>(CenterImage)
