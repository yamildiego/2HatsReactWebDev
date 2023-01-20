import React, { useState } from "react";
import ReactDOM from "react-dom";

function ModalAddContainer(props) {
  const [domReady, setDomReady] = React.useState(false);

  React.useEffect(() => {
    setDomReady(true);
  });

  return domReady ? ReactDOM.createPortal(props.children, document.getElementById("modal-add-container")) : null;
}

export default ModalAddContainer;
