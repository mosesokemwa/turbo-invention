import React, { Fragment, Component } from "react";
import { downloads } from "../utils";

class DownloadButton extends Component {
    constructor() {
        super();
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        const fileTextArea = this.codeTextArea.querySelector('textarea');
        const fileContent = fileTextArea.value;
        const fileName = this.codeTextArea.querySelector(".gist-blob-name").innerText;
        download(fileName, fileContent);
    }
    get codeTextArea(){
        return this.button.parentElement.parentElement.parentElement.parentElement.parentElement;
    }

    render(){
        return(
            <Fragment>
                <button
                    className="btn btn-sm copy-pretty tooltipped tooltipped-n BtnGroup-item"
                    aria-label="Download the file"
                    onClick={this.onClick}
                    ref={ref=> (this.button = ref)}>
                    Download File Data
                </button>
            </Fragment>
        );
    }
}

export default DownloadButton;