import {State, ViewWrapper} from "@renest/renest";
import {CSSProperties} from "react";
import {TaroView, Text, VStack, HStack} from "@renest/component-taro";
import FundIllustrator from "../../Components/FundIllustrator";



const textStyle:CSSProperties = {
  color:'red',
  fontSize:'2em',
  padding:'0.2em',
  margin:'0.5em',
  border:'',
  borderRadius:''
};



class ExpenseIllustrator extends TaroView{


  Body = ()=>
    VStack(
      VStack(
        Text('花销说明:')
          .fontSize('1.5em')
          .marginLeft('0.5em'),
      )
        .boxSizing('border-box')
        .width('50vw')
        .style({'fontsize':'1.5em','borderLeft':'2px solid red','margin':'0.5em'}),
      VStack(
        FundIllustrator(),
        Text('点击查看个人学习阶段花销定额信息')
          .width('75vw')
          .style({'borderBottom':'2px dotted black'}),
      ),
    )



}


export default ViewWrapper(ExpenseIllustrator)



