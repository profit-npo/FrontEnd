import {
  Button,
  TaroView,
  Text,
  ZStack
} from "@renest/component-taro";
import {State, TagView, ViewWrapper} from "@renest/renest"



class EditMine extends TaroView {


  Body = () =>
      Button(
        ZStack(
          // Image('https://camo.githubusercontent.com/3e1b76e514b895760055987f164ce6c95935a3aa/687474703a2f2f73746f726167652e333630627579696d672e636f6d2f6d74642f686f6d652f6c6f676f2d3278313531333833373932363730372e706e67')
          // .width("200px")
          // .height("150px"),
          Text('编辑')
            .color('biack')
            .fontSize('1.5em')
        )
      )
        .onTap()
        .size('mini')


}


export default () => ViewWrapper(EditMine)()
