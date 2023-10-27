/**
 * @description image float left
 * @author wangfupeng
 */

import BaseImageSurround from "./BaseImageSurround"

import { CLEAR_IMAGE_FORMAT_SVG } from "../../../constants/icon-svg"
import { t } from "@wangeditor3/core-yourcs"

class ImageSurroundClear extends BaseImageSurround {
  readonly title = t("image.clearFormat") // 菜单标题
  readonly float = "" // css float 的值
  readonly iconSvg = CLEAR_IMAGE_FORMAT_SVG
}

export default ImageSurroundClear
