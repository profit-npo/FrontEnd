import {State, View as RTView, ViewWrapper, Prop} from "@renest/renest";
import {View, Button, Text, VStack, Canvas, Image, HStack, Spacer, ZStack} from "@renest/component-taro";
import BlankMy from "../../Components/BlankButton";
import {navigateTo} from "@tarojs/taro";


class MyInfoList extends RTView{


  Body = ()=>
    VStack(
      BlankMy({'textBig':'特殊身份申请'})
        .onClick(() => {navigateTo({url:'../Mine/SpecialApply/index'})})
      ,

      BlankMy({'textBig':'大学生助学申请'})
        .onClick(() => {navigateTo({url:'../Mine/CollegeApply/index'})})
      ,

    )
      .paddingBottom('5px')
      // .borderBottom('10px solid lightgrey')
}

export default ViewWrapper(MyInfoList)
