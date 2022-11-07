import { Spacer, TaroView, Text, View, VStack, ZStack} from "@renest/component-taro";
import {Prop, State, TagView, ViewWrapper} from "@renest/renest"


// ---- HStack
//      alignment: top, center, bottom

// ---- VStack
//      alignment:

import * as taro from "@tarojs/components"
import {CSSProperties} from "react";
// const Btn = TagView(taro.Button)


const textStyle:CSSProperties = {
  color:'red',
  fontSize:'2em',
  padding:'0.2em',
  margin:'0.5em',
  border:'',
  borderRadius:'',
  visibility:'hidden'
};


interface CSProp {
  name1?: number
  name2?: string
  name3?: string
  colorIndex?: string
  fontSzIndex?: string
  fontSzIndex2?: string
}



class ChooseSchool extends TaroView {

  // @RouterParam hh?: number
  @Prop name1 = 500
  @Prop name2 = "小学组"
  @Prop name3 = "Primary School Group"
  @Prop colorIndex = 'red'
  @Prop fontSzIndex = '0.8em'
  @Prop fontSzIndex2 = '1.2em'



  Body = () =>
    ZStack(
        View()
          .backgroundColor(this.colorIndex)
          .width("100%")
          .height("100%")
          .borderRadius('10px'),
        VStack(
          Text('￥ '+this.name1+' /每学年')
            .fontSize(this.fontSzIndex)
            .color('white'),
          Spacer(),
          Text(this.name2)
            .fontSize(this.fontSzIndex2)
            .color('white'),
          Text(this.name3)
            .fontSize(this.fontSzIndex)
            .color('white'),
        )
          .boxSizing("border-box")
          .width("100%")
          .padding('10px'),



    )
      .width("48vw")
      .height("12vh")
      .margin('4px')
}


export default ViewWrapper<CSProp>(ChooseSchool)
