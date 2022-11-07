import {State, ViewWrapper, TagView} from "@renest/renest";
import {CSSProperties} from "react";
import {TaroView, View, Button, Text, VStack, HStack} from "@renest/component-taro";
import ChooseSchool from "../../Components/ChooseSchool";
import FundUsage from "../../Components/FundUsage";
import InputInformation from "../../Components/InputInformation";




// const textStyle:CSSProperties = {
//   color:'red',
//   fontSize:'2em',
//   padding:'0.2em',
//   margin:'0.5em',
//   border:'',
//   borderRadius:''
// };



class DonateState extends TaroView{


  Body = ()=>
    InputInformation()
      .border('2px solid red')
      .borderRadius('50px')
      .width('95vw')



}


export default ViewWrapper(DonateState)



