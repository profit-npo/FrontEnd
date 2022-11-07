import { View as RTView, ViewWrapper, Prop} from "@renest/renest";
import {View, Image} from "@renest/component-taro";

interface CIProp {
  bcolor ?: String
}

class FundIllustrator extends RTView{
  @Prop bcolor = 'orange'

  Body = ()=>
    View(
      Image('https://camo.githubusercontent.com/3e1b76e514b895760055987f164ce6c95935a3aa/687474703a2f2f73746f726167652e333630627579696d672e636f6d2f6d74642f686f6d652f6c6f676f2d3278313531333833373932363730372e706e67')
        .width("100vw")
        .height("200px")
    )
      .width("97vw")
      .height("200px")
      .backgroundColor(this.bcolor)
      .margin('5px')
}

export default ViewWrapper(FundIllustrator)
