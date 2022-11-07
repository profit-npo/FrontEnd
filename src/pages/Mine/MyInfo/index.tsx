import {
  Button,
  HStack,
  Image,
  Input,
  RouterParam,
  Spacer,
  TaroView,
  Text,
  View,
  VStack,
  ZStack
} from "@renest/component-taro";
import {State, TagView, ViewWrapper} from "@renest/renest"
import * as taro from "@tarojs/components"
import {getCurrentInstance} from "@tarojs/taro";
import MyImg from "../../ComponentsBigMine/MyImg";
import BlankText from "../../../Components/BlankText";
import NvgtButton from "../../../Components/NvgtButton";


class Index extends TaroView {

  @State mname:String = '微信姓名'
  @State gender:String = '男'
  @State phone:String = '11111111111'

  @State isChg:Boolean = true

  Body = () =>

    
    VStack(
      MyImg(),

      VStack(
        BlankText({'textTitle':'姓名','textContent':this.isChg?this.mname:'我是二比'})
        ,

        BlankText({'textTitle':'性别','textContent':this.gender})
        ,

        BlankText({'textTitle':'电话','textContent':this.phone})
        ,
      )
        .paddingBottom('4em'),

      NvgtButton({'bContent':'编辑','toURL':'/pages/Mine/MyInfo/Edit/index'}),
      // Button('改名')
      //   .onTap(()=>{this.isChg = !this.isChg})
    )
}


export default () => ViewWrapper(Index)().asReactElement()
