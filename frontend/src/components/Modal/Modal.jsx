import PropTypes from "prop-types";
import { useEffect } from "react";
import SModal from "./style";

export default function Modal({ show, close, title, children }) {
  if (!show) {
    return null;
  }

  const closeModalOnEscape = (evt) => {
    if (evt.key === "Escape") {
      close();
    }
  };

  const stopPropa = (evt) => {
    evt.stopPropagation();
  };

  useEffect(() => {
    document.body.addEventListener("keydown", closeModalOnEscape);

    return () => {
      document.body.removeEventListener("keydown", closeModalOnEscape);
    };
  }, []);

  return (
    <SModal className="modal" onClick={close}>
      <div className="modalContent" onClick={stopPropa} aria-hidden>
        <header className="modalHeader">
          <h4 className="modalTitle">{title}</h4>
        </header>
        <main className="modalBody">{children}</main>
        <footer className="modalFooter">
          <button onClick={close} type="button" className="button">
            Close
          </button>
        </footer>
      </div>
    </SModal>
  );
}
Modal.propTypes = {
  title: PropTypes.string,
  close: PropTypes.func,
  show: PropTypes.bool,
  children: PropTypes.node.isRequired,
};
Modal.defaultProps = {
  title: "",
  close: () => {},
  show: false,
};
