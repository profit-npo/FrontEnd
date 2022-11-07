import {Button, HStack, Input, RouterParam, Spacer, TaroView, Text, View, VStack, ZStack} from "@renest/component-taro";
import {State, TagView, ViewWrapper} from "@renest/renest"
import * as taro from "@tarojs/components"
import {getCurrentInstance} from "@tarojs/taro";

class Index extends TaroView {


  Body = () =>
    Text("特殊身份申请")
}


export default () => ViewWrapper(Index)().asReactElement()
