import React from "react";
import ReactDom from "react-dom";
import DownloadButton from "./components/download-button";

class App extends React.Component{
    render(){
        return <DownloadButton/>
        // TODO: create a download button component and render here
    }
}

window.onload = () => {
    const fileActions = [
        ...document.body.querySelectorAll(".file .file-actions .BtnGroup")
    ];

    fileActions.forEach(action => {
        const containerEl = document.createElement("span");
        action.prepend(containerEl);
        ReactDom.render(<App />, containerEl);
    });
};