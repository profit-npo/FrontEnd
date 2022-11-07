import {Button, HStack, Input, RouterParam, Spacer, TaroView, Text, View, VStack, ZStack} from "@renest/component-taro";
import {State, TagView, ViewWrapper} from "@renest/renest"
import BlankInput from "../../../../Components/BlankInput";

class Index extends TaroView {

  @State mname:String = '微信姓名'
  @State gender:String = '男'
  @State phone:String = '11111111111'

  @State isChg:Boolean = true

  Body = () =>
    VStack(
      VStack(
        BlankInput({textTitle:'姓名',textContent:this.mname}),

        BlankInput({textTitle:'性别',textContent:this.gender}),

        BlankInput({textTitle:'电话',textContent:this.phone}),
      )
        .paddingBottom('4em'),

      Button('确定修改')

    )
      .paddingBottom('4em')
}


export default () => ViewWrapper(Index)().asReactElement()
