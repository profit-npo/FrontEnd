import { View as RTView, ViewWrapper, Prop} from "@renest/renest";
import {View, Text} from "@renest/component-taro";



interface CSProp {
  TipName1: number
  TipName2: string
  TipName3: string
  ColorIndex: string
  FontSzIndex?: string
  FontSzIndex2?: string
}


class ChooseState extends RTView{
  @Prop TipName1 = 500
  @Prop TipName2 = "小学组"
  @Prop TipName3 = "Primary School Group"
  @Prop ColorIndex = 'red'
  @Prop FontSzIndex = '0.8em'
  @Prop FontSzIndex2 = '1.2em'

  Body = ()=>
    View(
      View(
        Text(this.TipName1+'元/年'+'\n'),
        ).style({'fontSize':this.FontSzIndex, 'textAlign':'left',
        'margin':'0.5em'}),
        View(
        Text(this.TipName2),
        ).style({'fontSize':this.FontSzIndex2,'margin':'0.5em'}),
      View(
        Text(this.TipName3),
        ).style({'fontSize':this.FontSzIndex, 'textAlign':'left',
        'margin':'0.5em'}),
      ).style({'backgroundColor':this.ColorIndex,'margin':'0.4em',
      'borderRadius':'.8em'})
      .width('50vw')
      .height('12vh')
      .onClick(()=>{})
}

export default ViewWrapper<CSProp>(ChooseState)
