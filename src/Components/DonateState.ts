import {State, View as RTView, ViewWrapper, Prop} from "@renest/renest";
import {View, Text, Button} from "@renest/component-taro";

interface DonateStateProp {
  title?: string
  subTitle: string
}

class DonateState extends RTView{
  @Prop title = "moren: "
  @Prop subTitle : any
  @State num=0;

  Body = ()=>
    View(
      View(
        Text(this.title + this.subTitle + this.num),
      )
        .display("flex")
        .alignItems("center"),
      View(
        Button('+1')
          .onTap(()=>{
            this.num++;
          })
          .width("33vw")
          .size("mini"),
        Button('Clear')
          .width("33vw")
          .onTap(()=>{
            this.num=0;
          })
          .size("mini"),
        Button('-1')
          .onTap(()=>{
            this.num--;
          })
          .width("33vw")
          .size("mini")
      )
        .display("flex")
        .alignItems("center")
    )
}

export default ViewWrapper<DonateStateProp>(DonateState)
