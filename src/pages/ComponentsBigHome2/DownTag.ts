import {State, ViewWrapper} from "@renest/renest";
import {CSSProperties} from "react";
import {TaroView, Text, VStack, HStack, Input, Spacer} from "@renest/component-taro";
import FundIllustrator from "../../Components/FundIllustrator";
import CenterImage from "../../Components/CenterImage";
import CenterText from "../../Components/CenterText";
import ListRow from "../../Components/ListRow";



// const textStyle:CSSProperties = {
//   color:'red',
//   fontSize:'2em',
//   padding:'0.2em',
//   margin:'0.5em',
//   border:'',
//   borderRadius:''
// };



class UpNextTag extends TaroView{


  Body = ()=>
    VStack(
      VStack(
        Text('捐助动态:')
          .fontSize('1.5em')
          .marginLeft('0.5em'),
      )
        .boxSizing('border-box')
        .width('50vw')
        .style({'fontsize':'1.5em','borderLeft':'2px solid red','margin':'0.5em'}),
      VStack(
        ListRow(),
        ListRow(),
        ListRow(),
        ListRow(),
        ListRow(),
        ListRow(),
        ListRow(),
        ListRow(),
      )
        .width('100%')
        .border('1px solid black')
        .boxSizing("border-box")
        .marginBottom('1em')
        .marginLeft('0.2em'),

    )
      .width('97vw')




}


export default ViewWrapper(UpNextTag)



