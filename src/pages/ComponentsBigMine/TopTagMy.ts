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

class TopTagMy extends RTView{
  // @Prop subTitle : any
  // @State num=0;
  @Prop H = '200px'
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
          .backgroundColor('red')
        ,
        VStack(
          Spacer(),
          HStack(
            Spacer(),
            Text(this.t1)
              .fontSize('1.3em')
              .color(this.colo)
              .fontWeight('normal')
              .margin('5px'),
            Spacer()
          ),
          Spacer(),
          HStack(
            Spacer(),
            Text('￥ '+this.money)
              .fontSize('1.6em')
              .color(this.colo)
              .fontWeight('normal')
              .margin('5px'),
            Spacer()
          ),
          Spacer(),
          HStack(
            Spacer(),
            Text('您已捐助'+this.num+'名学生进入校园')
              .fontSize('1.2em')
              .color(this.colo)
              .fontWeight('normal')
              .margin('5px'),
            Spacer()
          )
            .marginBottom('10px'),
          // Spacer(),
        )
          .width('100%')
      )

}

export default ViewWrapper<TIBProp>(TopTagMy)
