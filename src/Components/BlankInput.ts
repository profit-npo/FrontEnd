
// eslint-disable-next-line import/first
import {View as RTView, TagView, ViewWrapper, Prop,} from "@renest/renest";
import {Image, HStack, VStack, Text, Spacer, Button, ZStack, Input} from "@renest/component-taro";

// import * as taro from "@tarojs/components"
// const Ipt = TagView(taro.Input)

interface BIProp{
  imgURL ?: String
  textContent : String
  textTitle ?: String
  iconDisplay ?: Boolean
}


class BlankMy extends RTView{
  @Prop imgURL = 'https://camo.githubusercontent.com/3e1b76e514b895760055987f164ce6c95935a3aa/687474703a2f2f73746f726167652e333630627579696d672e636f6d2f6d74642f686f6d652f6c6f676f2d3278313531333833373932363730372e706e67'
  @Prop textContent = 'XXX'
  @Prop textTitle = '姓名'
  @Prop iconVisible = false

  Body = ()=>
    HStack(
      Spacer(),
      HStack(
        // Spacer(),
        VStack(
          Spacer(),
          Text(this.textTitle)
            .fontSize('1.2em'),
          Spacer()
        )
          .height('100%')
          .marginLeft('0.5em')
          .marginRight('1em'),
        VStack(
          Spacer(),
          Input()
            // .oninput()
            .value(this.textContent)
            .placeholder('输入您的'+this.textTitle)
            .fontSize('1.2em')
          // .width("50vw")
          ,
          Spacer(),
        )
          .height('100%'),
        Spacer(),

      )
        .boxSizing("border-box")
        // .border('10px solid black')
        .height('8vh')
        .width('90vw')
        .borderBottom('1px solid lightgrey'),
      Spacer(),
    )
      .width('100vw')


}

export default ViewWrapper<BIProp>(BlankMy)
