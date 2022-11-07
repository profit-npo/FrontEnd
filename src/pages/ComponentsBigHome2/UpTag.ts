import {State, ViewWrapper} from "@renest/renest";
import {CSSProperties} from "react";
import {TaroView, Text, VStack, HStack, Input, Spacer, ZStack} from "@renest/component-taro";
import FundIllustrator from "../../Components/FundIllustrator";
import CenterImage from "../../Components/CenterImage";
import CenterText from "../../Components/CenterText";



// const textStyle:CSSProperties = {
//   color:'red',
//   fontSize:'2em',
//   padding:'0.2em',
//   margin:'0.5em',
//   border:'',
//   borderRadius:''
// };



class UpTag extends TaroView{


  Body = ()=>
      VStack(
        FundIllustrator({'bcolor':'blue'}),
        HStack(
          Spacer(),
          VStack(
            Spacer(),
            Input()
              .type('number')
              .placeholder('在此输入金额')
              .textAlign('center')
              .width('100%'),
            Spacer()
          )
            .height('40px')
            .width('70vw')
            .style({'border':'2px dotted black'}),
            Spacer()
        ),
        ZStack(
          CenterImage({'H':'4em','W':'4em'}),
          CenterText({'conten':'捐助','siz':'1.2em','colo':'red','weit':'bold'}),
        )
          .width('100vw'),

      )
        .paddingBottom('2em')
        .borderBottom('1em solid lightgrey')



}


export default ViewWrapper(UpTag)



