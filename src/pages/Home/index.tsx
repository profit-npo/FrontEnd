import {ConditionView, TagView,State, ViewWrapper} from "@renest/renest";

import {TaroView, View, Button, Text, VStack, HStack, Spacer, Input} from "@renest/component-taro";

import Nvgtor from "../ComponentsBigHome1/Nvgtor";
import InputInfo from "../ComponentsBigHome1/InputInfo";
import DonateState from "../ComponentsBigHome1/DonateState";
import ExpenseIllustrator from "../ComponentsBigHome1/ExpenseIllustrator";
import FondInfo from "../ComponentsBigHome1/FondInfo";
import UpTag from "../ComponentsBigHome2/UpTag";
import UpNextTag from "../ComponentsBigHome2/UpNextTag";
import DownTag from "../ComponentsBigHome2/DownTag";





// import * as taro from "@tarojs/components"
// const Btn = TagView(taro.Button)
// const Ipt = TagView(taro.Input)



// const textStyle:CSSProperties = {
//   color:'red',
//   fontSize:'2em',
//   padding:'0.2em',
//   margin:'0.5em',
//   border:'',
//   borderRadius:''
// };


class BasicPage extends TaroView {
  @State toWhich = 0
  Body = () =>
    VStack(
      // Nvgtor cannot used for errors from Param
      // Nvgtor(),
      HStack(
        Button("一对一结对")
        // Btn("一对一结对")
          .width('50%')
          .onTap(() => {this.toWhich = 0})
          ,
        Button("非定向捐赠")
          .width('50%')
          .onTap(() => {this.toWhich = 1})
          ,
      )
        .width('100vw'),
      ConditionView(this.toWhich, {
        0: () =>
          VStack(

            InputInfo(),

            DonateState(),

            ExpenseIllustrator(),

            FondInfo(),

          ),
        1: () =>
          VStack(

            UpTag(),

            UpNextTag(),

            DownTag(),
          )

      }),


    )
}




export default()=> ViewWrapper(BasicPage)().asReactElement()
// export default () => RouterTest().asReactElement()


