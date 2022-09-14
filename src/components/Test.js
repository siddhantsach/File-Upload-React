import React, { Component } from "react";
import ReactDOM from "react-dom";

import FineUploaderTraditional from "fine-uploader-wrappers";
import Gallery from "react-fine-uploader";

import "react-fine-uploader/gallery/gallery.css";

const uploader = new FineUploaderTraditional({
  options: {
    chunking: {
      enabled: true
    },
    request: {
      endpoint: "http://localhost:8080/files"
    },
    retry: {
      enableAuto: false
    },
    failedUploadTextDisplay: {
        mode: 'custom',
        maxChars: 40,
        responseProperty: 'error',
        enableTooltip: true
      },
      debug: true
  }
});

class UploadComponent extends Component {
  render() {
    return (
      <div>
        <h1>Upload your files</h1>
        <Gallery fileInput-children={ <span>Choose files</span> } uploader={uploader} />
      </div>
    );
  }
}

export default UploadComponent;

ReactDOM.render(<UploadComponent />, document.getElementById("root"));
