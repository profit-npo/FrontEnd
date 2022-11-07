import {State, ViewWrapper} from "@renest/renest";
import {CSSProperties} from "react";
import {TaroView, View, Button, Text, VStack, HStack} from "@renest/component-taro";
import ChooseSchool from "../../Components/ChooseSchool";
import FundUsage from "../../Components/FundUsage";



// const textStyle:CSSProperties = {
//   color:'red',
//   fontSize:'2em',
//   padding:'0.2em',
//   margin:'0.5em',
//   border:'',
//   borderRadius:''
// };



class Nvgtor extends TaroView{


  Body = ()=>
    HStack(
      Button("一对一结对")
        .width('50%')
        // .onTap(() => {this.toWhich = 0})
      ,
      Button("非定向捐赠")
        .width('50%')
        // .onTap(() => {this.toWhich = 1})
      ,
    )



}


export default ViewWrapper(Nvgtor)



