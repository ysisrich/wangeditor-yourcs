/**
 * @description image float left
 * @author wangfupeng
 */

import BaseImageSurround from "./BaseImageSurround"

import { IMAGE_RIGHT_SVG } from "../../../constants/icon-svg"
import { t } from "@wangeditor3/core-yourcs"

class ImageSurroundRight extends BaseImageSurround {
  readonly title = t("image.surroundRight") // 菜单标题
  readonly float = "right" // css float 的值
  readonly iconSvg = IMAGE_RIGHT_SVG
}

export default ImageSurroundRight
