import {State, View as RTView, ViewWrapper, Prop} from "@renest/renest";
import {View, Button, Text, VStack, Canvas, Image, HStack, Spacer, ZStack} from "@renest/component-taro";
import BlankMy from "../../Components/BlankButton";
import {navigateTo} from "@tarojs/taro";


class MyInfoLst extends RTView{


  Body = ()=>
    VStack(
      BlankMy({'textBig':'我的信息','textSmall':'普通用户'})
        .onClick(() => {navigateTo({url:'../Mine/MyInfo/index'})})
      ,

      BlankMy({'textBig':'已捐助对象'})
        .onClick(() => {navigateTo({url:'../Mine/DonatedOnes/index'})})
      ,

      BlankMy({'textBig':'已关注对象'})
        .onClick(() => {navigateTo({url:'../Mine/FollowedOnes/index'})})
      ,

      BlankMy({'textBig':'证书列表'})
        .onClick(() => {navigateTo({url:'../Mine/CertifLst/index'})})
      ,
    )
      .paddingBottom('5px')
      .borderBottom('10px solid lightgrey')
}

export default ViewWrapper(MyInfoLst)
