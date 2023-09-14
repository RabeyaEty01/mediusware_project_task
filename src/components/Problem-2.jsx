import React, { useState } from "react";
import AllContacts from "./Contacts/AllContacts";
import USContacts from "./Contacts/USContacts";

const Problem2 = () => {
  const [isAllContactOpen, setAllContactOpen] = useState(false);
  const [isUsContactOpen, setUsContactOpen] = useState(false);
  const handleOnClose = (res) => {
    setAllContactOpen(false);
  };
  const updateHandleOnClose = (res) => {
    setUsContactOpen(false);
  };

  return (
    <div className="container">
      <USContacts
        id="usContacts"
        show={isUsContactOpen}
        onClose={updateHandleOnClose}
      />
      <AllContacts
        id="allContacts"
        show={isAllContactOpen}
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
