import {State, View as RTView, ViewWrapper, Prop} from "@renest/renest";
import {View, Button, Text, VStack, Canvas, Image, HStack, Spacer} from "@renest/component-taro";
import {textReview} from "@tarojs/taro-h5";


interface LRProp {
  dat: String
  nam: String
  money: Number
  colo1?: String
  colo2?: String
}

class ListRow extends RTView{
  // @Prop subTitle : any
  // @State num=0;
  @Prop dat = '3天前'
  @Prop nam = '郑XX'
  @Prop money = 500
  @Prop colo1 = 'black'
  @Prop colo2 = 'red'

  Body = ()=>
    HStack(
      Spacer(),
      Text(this.dat)
        .fontSize('1em')
        .color(this.colo1),
      Spacer(),
      Spacer(),
      Spacer(),
      Spacer(),
      Text(this.nam + '向平台捐助')
        .fontSize('1em')
        .color(this.colo1),
      Spacer(),
      Spacer(),
      Spacer(),
      Spacer(),
      Text('￥ ' + this.money + '  ')
        .fontSize('1em')
        .color(this.colo2),
      Spacer(),
      Spacer(),
    )
      .marginTop('0.5em')
      .marginBottom('0.5em')
}

export default ViewWrapper<LRProp>(ListRow)
