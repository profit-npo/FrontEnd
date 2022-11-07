import {Button, HStack, Input, RouterParam, Spacer, TaroView, Text, View, VStack, ZStack} from "@renest/component-taro";
import {State, TagView, ViewWrapper} from "@renest/renest"
import * as taro from "@tarojs/components"
import {getCurrentInstance} from "@tarojs/taro";
import TopTagMy from "../ComponentsBigMine/TopTagMy";
import MyInfoLst from "../ComponentsBigMine/MyInfoLst";
import MyInfoLst2 from "../ComponentsBigMine/MyInfoLst2";

class Test extends TaroView {

  @RouterParam hh: number = 1



  Body = () =>
    VStack(

      TopTagMy({'t1':'感谢您，总计捐款金额','money':500,'num':10}),

      MyInfoLst(),

      MyInfoLst2()
    )
}


export default () => ViewWrapper(Test)().asReactElement()
