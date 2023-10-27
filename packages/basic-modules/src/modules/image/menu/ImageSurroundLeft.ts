/**
 * @description image float left
 * @author wangfupeng
 */

import BaseImageSurround from "./BaseImageSurround"

import { IMAGE_LEFT_SVG } from "../../../constants/icon-svg"
import { t } from "@wangeditor3/core-yourcs"

class ImageSurroundLeft extends BaseImageSurround {
  readonly title = t("image.surroundLeft") // 菜单标题
  readonly float = "left" // css float 的值
  readonly iconSvg = IMAGE_LEFT_SVG
}

export default ImageSurroundLeft
