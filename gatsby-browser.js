
// normalize CSS across browsers
import "./src/normalize.css"
// custom CSS styles
import "./src/style.css"

 import them from "prism-react-renderer/themes/vsDark"
// import "prismjs/themes/prism-tomorrow.css"

// import "prismjs/themes/prism-solarizedlight.css"

// require("prismjs/themes/prism-solarizedlight.css")
// other import statements for styling etc.
import { wrapRootElement as wrap } from "./src/components/wrap-root-element";

export const wrapRootElement = wrap;