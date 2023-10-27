/**
 * @description maps
 * @author wangfupeng
 */

import { Element as SlateElement } from "slate"
import { IDomEditor } from "@wangeditor3/core-yourcs"

export const ELEM_TO_EDITOR = new WeakMap<SlateElement, IDomEditor>()
