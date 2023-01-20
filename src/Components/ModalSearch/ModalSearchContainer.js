import React, { useState } from "react";
import ReactDOM from "react-dom";

function ModalSearchContainer(props) {
  const [domReady, setDomReady] = React.useState(false);

  React.useEffect(() => {
    setDomReady(true);
  });

  return domReady ? ReactDOM.createPortal(props.children, document.getElementById("modal-search-container")) : null;
}

export default ModalSearchContainer;
