import {State, ViewWrapper} from "@renest/renest";
import {CSSProperties} from "react";
import {TaroView, View, Button, Text, VStack, HStack} from "@renest/component-taro";
import ChooseSchool from "../../Components/ChooseSchool";



const textStyle:CSSProperties = {
  color:'red',
  fontSize:'2em',
  padding:'0.2em',
  margin:'0.5em',
  border:'',
  borderRadius:''
};



class DonateState extends TaroView{


  Body = ()=>
      VStack(
        VStack(
          Text('选择捐助阶段:')
            .fontSize('1.5em')
            .marginLeft('0.5em'),
        )
          .boxSizing('border-box')
          .width('50vw')
          .style({'fontsize':'1.5em','borderLeft':'2px solid red','margin':'0.5em'}),
        VStack(
          HStack(
            ChooseSchool({'name1':500,'name2':'小学组',
              'name3':'Primary School Group','colorIndex':'red'}),
            ChooseSchool({'name1':1000,'name2':'初中组',
              'name3':'Middle School Group','colorIndex':'purple'}),
          ),
          HStack(
            ChooseSchool({'name1':2000,'name2':'高中组',
              'name3':'Senior School Group','colorIndex':'green'}),
            ChooseSchool({'name1':3000,'name2':'大学组',
              'name3':'College School Group','colorIndex':'blue'}),
          ),
        ),
      )



}


export default ViewWrapper(DonateState)



