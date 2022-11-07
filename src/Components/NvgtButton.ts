import {
  Button,
  TaroView,
  Text,
  ZStack
} from "@renest/component-taro";
import {Prop, State, TagView, ViewWrapper} from "@renest/renest"
import {navigateTo} from "@tarojs/taro";



interface NBProp{
  imgURL?: String
  bContent: String

  // titled with '/'
  toURL: String
}

class NvgtButton extends TaroView {

  @Prop imgURL = 'https://camo.githubusercontent.com/3e1b76e514b895760055987f164ce6c95935a3aa/687474703a2f2f73746f726167652e333630627579696d672e636f6d2f6d74642f686f6d652f6c6f676f2d3278313531333833373932363730372e706e67'
  @Prop bContent = '编辑'
  @Prop toURL = ''


  Body = () =>
    Button(
      ZStack(
        // Image('https://camo.githubusercontent.com/3e1b76e514b895760055987f164ce6c95935a3aa/687474703a2f2f73746f726167652e333630627579696d672e636f6d2f6d74642f686f6d652f6c6f676f2d3278313531333833373932363730372e706e67')
        // .width("200px")
        // .height("150px"),
        Text(this.bContent)
          .color('biack')
          .fontSize('1.5em')
      )
    )
      .onTap(() => {navigateTo({url:this.toURL})})
      .size('mini')


}


export default ViewWrapper<NBProp>(NvgtButton)
