import {State, View as RTView, ViewWrapper, Prop} from "@renest/renest";
import {View, Button, Text, VStack, Canvas, Image, HStack, Spacer} from "@renest/component-taro";
import {textReview} from "@tarojs/taro-h5";


interface CTProp {
  conten: String
  siz?: String
  colo?: String
  weit?: String
}

class CenterText extends RTView{
  // @Prop subTitle : any
  // @State num=0;
  @Prop conten = ''
  @Prop siz = '1em'
  @Prop colo = 'black'
  @Prop weit = 'normal'

  Body = ()=>
    HStack(
      Spacer(),
      Text(this.conten)
        .fontSize(this.siz)
        .color(this.colo)
        .fontWeight(this.weit)
        .margin('5px'),
      Spacer()
    )
}

export default ViewWrapper<CTProp>(CenterText)
