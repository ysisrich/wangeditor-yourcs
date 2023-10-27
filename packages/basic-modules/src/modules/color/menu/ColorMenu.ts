/**
 * @description color menu
 * @author wangfupeng
 */

import { t } from "@wangeditor3/core-yourcs"
import BaseMenu from "./BaseMenu"
import { FONT_COLOR_SVG } from "../../../constants/icon-svg"

class ColorMenu extends BaseMenu {
  readonly title = t("color.color")
  readonly iconSvg = FONT_COLOR_SVG
  readonly mark = "color"
}

export default ColorMenu
