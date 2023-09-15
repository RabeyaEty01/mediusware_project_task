import React, { useState } from "react";
import AllContacts from "./Contacts/AllContactsModal";
import USContacts from "./Contacts/USContactsModal";

const Problem2 = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const handleOnClose = (res) => {
    setModalOpen(false);
  };

  return (
    <div className="container">
      <USContacts id="usContacts" show={isModalOpen} onClose={handleOnClose} />
      <AllContacts
        id="allContacts"
        show={isModalOpen}
        onClose={handleOnClose}
      />

      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

        <div className="d-flex justify-content-center gap-3">
          <button
            className="btn btn-lg btn-outline-primary"
            data-bs-toggle="modal"
            data-bs-target="#allContacts"
            type="button"
          >
            All Contacts
          </button>
          <button
            className="btn btn-lg btn-outline-warning"
            data-bs-toggle="modal"
            data-bs-target="#usContacts"
            type="button"
          >
            US Contacts
          </button>
        </div>
      </div>
    </div>
  );
};

export default Problem2;
