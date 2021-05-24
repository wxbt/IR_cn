/**
 * 红外遥控器makecode中文模块
 */

//% color="#1C86EE" weight=25  icon="\uf143" block="外设_红外遥控"

namespace IR {

  /**
  * initialization
  */
  //% blockId=ir_init
  //% blockGap=20 weight=90
  //% block="将红外接收器连接到 %pin"
  //% shim=IR::init
  export function init(pin: Pins): void {
    return
  }

  /**
  * button pushed.
  */
  //% blockId=ir_received_event
  //% blockGap=20 weight=70
  //% block="当 |%btn| 键被按下"
  //% shim=IR::onPressEvent
  export function onPressEvent(btn: RemoteButton, body:Action): void {
    return
  }

}
