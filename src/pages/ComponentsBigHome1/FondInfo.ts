import {State, ViewWrapper, Ref} from "@renest/renest";
import {CSSProperties} from "react";
import {TaroView, ScrollView, Text, VStack, HStack, View} from "@renest/component-taro";
import FundUsage from "../../Components/FundUsage";



const textStyle:CSSProperties = {
  color:'red',
  fontSize:'2em',
  padding:'0.2em',
  margin:'0.5em',
  border:'',
  borderRadius:'',
  whiteSpace:'nowrap',
  display:'inline-block',
};



class DonateState extends TaroView{
  Body = ()=>
    VStack(
      VStack(
        Text('资金信息:')
          .fontSize('1.5em')
          .marginLeft('0.5em'),
      )
        .boxSizing('border-box')
        .width('50vw')
        .style({'fontsize':'1.5em','borderLeft':'2px solid red','margin':'0.5em'}),

      ScrollView(
        HStack(
          FundUsage({'monthof':9}),
          FundUsage({'monthof':8}),
          FundUsage({'monthof':7}),
          FundUsage({'monthof':6}),
        ),
      )
        .scrollX('true')
        .scrollLeft('200px')
        .whiteSpace('nowrap')
        .overflow('scroll')

    )
      .width("100vw")

}


export default ViewWrapper(DonateState)



