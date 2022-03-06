import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";
import rangeParser from "parse-numeric-range";

const calculateLinesToHighlight = raw => {
  const lineNumbers = rangeParser(raw);
  if (lineNumbers) {
    return index => lineNumbers.includes(index + 1);
  } else {
    return () => false;
  }
};

const copyToClipboard = str => {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(str).then(
      function () {
        console.log("Copying to clipboard was successful!");
      },
      function (err) {
        console.error("Could not copy text: ", err);
      }
    );
  } else if (window.clipboardData) {
    // Internet Explorer
    window.clipboardData.setData("Text", str);
  }
};

const Code = props => {
  const [isCopied, setIsCopied] = React.useState(false);
  const className = props.children.props.className || "";
  const code = props.children.props.children.trim();
  const language = className.replace(/language-/, "");
  const file = props.children.props.file;
  const highlights = calculateLinesToHighlight(
    props.children.props.highlights || ""
  );

  return (
    <div className="code"
     
    >
      <div className="code__header">
        <div className="code__language"
          
        >{`${language}`}</div>
        <div className="code__filename"
          
        >
          {file && `${file}`}
        </div>
        <div style={{ flexGrow: "1" }}></div>
        <button
          onClick={() => {
            copyToClipboard(code);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 1000);
          }}
          className="code__copy"
        >
          {isCopied ? "🎉 Copied!" : "Copy"}
        </button>
      </div>
      <div
            className="code__highlightBox"
      >
        <Highlight
          {...defaultProps}
          code={code}
          language={language}
          theme={theme}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre
              className={className}
              style={{
                ...style,
                backgroundColor: "transparent",
                float: "left",
                minWidth: "100%",
              }}
            >
              {tokens.map((line, i) => 
              
              (
                
                <div
               
                  {...getLineProps({ line, key: i })}
                  className={`token-line ${highlights(i) && 'highlight'}`}
                                  
                >
                  {/* <i>1</i> */}{line.map((token, key) => ( 
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </div>
    </div>
  );
};

export default Code;