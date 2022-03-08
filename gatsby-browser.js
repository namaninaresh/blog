
// normalize CSS across browsers
import "./src/normalize.css"
// custom CSS styles
import "./src/style.css"

// import "prismjs/themes/prism-tomorrow.css"

// import "prismjs/themes/prism-solarizedlight.css"

// require("prismjs/themes/prism-solarizedlight.css")
// other import statements for styling etc.
import { wrapRootElement as wrap } from "./src/components/wrap-root-element";

export const wrapRootElement = wrap;

export const onServiceWorkerUpdateReady = () => {
    const answer = window.confirm(
      `This application has been updated. ` +
        `Reload to display the latest version?`
    )
  
    if (answer === true) {
      window.location.reload()
    }
  }