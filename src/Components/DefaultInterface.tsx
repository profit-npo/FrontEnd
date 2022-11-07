import {State, ViewWrapper} from "@renest/renest";
import ChooseState from "./ChooseState";
import FundIllustrator from "./FundIllustrator";
import FundInformation from "./FundUsage";
import {CSSProperties} from "react";
import InputInformation from "./InputInformation";
import {TaroView, View, Button, Text} from "@renest/component-taro";



const textStyle:CSSProperties = {
  color:'red',
  fontSize:'2em',
  padding:'0.2em',
  margin:'0.5em',
  border:'',
  borderRadius:''
};



class DefaultInterface extends TaroView{


  Body = ()=>
    View(
      Button('一对一核对')
        .width('50vw')
        .size('mini'),
      Button('非定向捐赠')
        .width('50vw')
        .size('mini'),

      View(
        InputInformation()
      ).style({'margin':'5px'}),


      View(
        View(
          Text('选择捐助阶段:'),
        )
          .width('30vw')
          .style({'fontsize':'1.5em','borderLeft':'2px solid red','margin':'0.3em'}),
        View(
          ChooseState({TipName1:500,TipName2:'小学组',TipName3:'Primary School Group'
            ,ColorIndex:'red'}),
          ChooseState({TipName1:1000,TipName2:'初中组',TipName3:'Primary School Group'
            ,ColorIndex:'pink'}),
        ).display("flex")
          .alignItems("center"),
        View(
          ChooseState({TipName1:2000,TipName2:'高中组',TipName3:'Primary School Group'
            ,ColorIndex:'yellow'}),
          ChooseState({TipName1:3000,TipName2:'大学组',TipName3:'Primary School Group'
            ,ColorIndex:'cyan'}),
        ).display("flex")
          .alignItems("center"),

      )
        // .display("flex")
        .alignItems("center"),


      View(
        Text('花销说明:'),

      )
        .width('30vw')
        .style({'fontsize':'1.5em','borderLeft':'2px solid red','margin':'0.3em'}),
      View(
        FundIllustrator(),
        Text('点击查看个人学习阶段花销定额信息'),
      )
        .width('70vw')
        .style({'borderBottom':'2px dotted black'}),


      View(
        Text('资金信息:'),
      )
        .width('30vw')
        .style({'fontsize':'1.5em','borderLeft':'2px solid red','margin':'0.3em'}),


      FundInformation(),

    )



}


export default()=> ViewWrapper(DefaultInterface)

// export default()=> ViewWrapper(defaultinterface)().asReactElement()
// export default () => RouterTest().asReactElement()


