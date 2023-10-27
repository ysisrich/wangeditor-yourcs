/**
 * @description line-height module entry
 * @author wangfupeng
 */

import { IModuleConf } from "@wangeditor3/core-yourcs"
import { renderStyle } from "./render-style"
import { styleToHtml } from "./style-to-html"
import { lineHeightMenuConf } from "./menu/index"
import { parseStyleHtml } from "./parse-style-html"

const lineHeight: Partial<IModuleConf> = {
  renderStyle,
  styleToHtml,
  parseStyleHtml,
  menus: [lineHeightMenuConf]
}

export default lineHeight
