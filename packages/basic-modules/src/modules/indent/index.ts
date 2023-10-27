/**
 * @description indent entry
 * @author wangfupeng
 */

import { IModuleConf } from "@wangeditor3/core-yourcs"
import { renderStyle } from "./render-style"
import { styleToHtml } from "./style-to-html"
import { preParseHtmlConf } from "./pre-parse-html"
import { parseStyleHtml } from "./parse-style-html"
import { indentMenuConf, delIndentMenuConf } from "./menu/index"

const indent: Partial<IModuleConf> = {
  renderStyle,
  styleToHtml,
  preParseHtml: [preParseHtmlConf],
  parseStyleHtml,
  menus: [indentMenuConf, delIndentMenuConf]
}

export default indent
