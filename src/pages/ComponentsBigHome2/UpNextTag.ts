import {State, ViewWrapper} from "@renest/renest";
import {CSSProperties} from "react";
import {TaroView, Text, VStack, HStack, Input, Spacer} from "@renest/component-taro";
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



class UpNextTag extends TaroView{


  Body = ()=>
    VStack(
      VStack(
        Text('资质文件:')
          .fontSize('1.5em')
          .marginLeft('0.5em'),
      )
        .boxSizing('border-box')
        .width('50vw')
        .style({'fontsize':'1.5em','borderLeft':'2px solid red','margin':'0.5em'}),
      VStack(
        FundIllustrator({'bcolor':'pink'}),
        CenterText({'conten':'资质证书A样张'})
      ),
      VStack(
        FundIllustrator({'bcolor':'lightgreen'}),
        CenterText({'conten':'资质证书B样张'})
      ),
    )
      .paddingBottom('2em')
      .borderBottom('1em solid lightgrey')



}


export default ViewWrapper(UpNextTag)



