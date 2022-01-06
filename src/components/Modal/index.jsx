import React, { useState } from "react";
import styles from "./styles.module.scss";

export function Modal(props) {
  function hideModal(event) {
    event.preventDefault();
    let target = event.target;
    if (target.id == "modal" || target.id == "button_modal") {
      props.onHideModal();
    }
  }

  return (
    <div
      id="modal"
      onClick={hideModal}
      className={props.show ? styles.modal_container : styles.hide_modal}
    >
      <div className={styles.modal}>
        <p>Lista alva com sucesso!</p>
        <button id="button_modal">Ok</button>
      </div>
    </div>
  );
}
