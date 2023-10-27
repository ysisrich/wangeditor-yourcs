/**
 * @description emotion entry
 * @author wangfupeng
 */

import { IModuleConf } from "@wangeditor3/core-yourcs"
import { emotionMenuConf } from "./menu/index"

const emotion: Partial<IModuleConf> = {
  menus: [emotionMenuConf]
}

export default emotion
