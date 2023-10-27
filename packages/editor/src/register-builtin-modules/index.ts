/**
 * @description register builtin modules
 * @author wangfupeng
 */

// basic-modules
import "@wangeditor3/basic-modules-yourcs/dist/css/style.css"
import basicModules from "@wangeditor3/basic-modules-yourcs"

import "@wangeditor3/list-module-yourcs/dist/css/style.css"
import wangEditorListModule from "@wangeditor3/list-module-yourcs"

// table-module
import "@wangeditor3/table-module-yourcs/dist/css/style.css"
import wangEditorTableModule from "@wangeditor3/table-module-yourcs"

// video-module
import "@wangeditor3/video-module-yourcs/dist/css/style.css"
import wangEditorVideoModule from "@wangeditor3/video-module-yourcs"

// upload-image-module
import "@wangeditor3/upload-image-module-yourcs/dist/css/style.css"
import wangEditorUploadImageModule from "@wangeditor3/upload-image-module-yourcs"

// code-highlight
import "@wangeditor3/code-highlight-yourcs/dist/css/style.css"
import { wangEditorCodeHighlightModule } from "@wangeditor3/code-highlight-yourcs"

import registerModule from "./register"

basicModules.forEach(module => registerModule(module))
registerModule(wangEditorListModule)
registerModule(wangEditorTableModule)
registerModule(wangEditorVideoModule)
registerModule(wangEditorUploadImageModule)
registerModule(wangEditorCodeHighlightModule)
