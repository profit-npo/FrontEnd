
// eslint-disable-next-line import/first
import { View as RTView, TagView, ViewWrapper, } from "@renest/renest";
import {Image, HStack, VStack, Input, Spacer} from "@renest/component-taro";

import * as taro from "@tarojs/components"
const Ipt = TagView(taro.Input)

class InputInformation extends RTView{


  Body = ()=>
    HStack(
      // Spacer(),
      VStack(
        Spacer(),
        Image('https://camo.githubusercontent.com/3e1b76e514b895760055987f164ce6c95935a3aa/687474703a2f2f73746f726167652e333630627579696d672e636f6d2f6d74642f686f6d652f6c6f676f2d3278313531333833373932363730372e706e67')
          .width("6vw")
          .height("24px"),
        Spacer()
      )
        .height('32px')
        .marginLeft('5px')
        .marginRight('5px'),
      Input()
        .placeholder('感谢XXX的捐赠')
        .height('32px')
    )
      // .border('10px solid black')
      .width('100vw')

}

export default ViewWrapper(InputInformation)
