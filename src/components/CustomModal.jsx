import React from "react";
import { NavLink } from "react-router-dom";

const CustomModal = ({ id, show, onClose, children, title }) => {
  return (
    <div
      className="modal fade"
      id={id}
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      show={show}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              {title}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div>
              <div className="d-flex justify-content-center gap-3">
                <NavLink
                  to="/all-contacts"
                  className="btn btn-lg btn-outline-primary"
                  style={{ color: "#46139f", borderColor: "#46139f" }}
                  data-bs-toggle="modal"
                  data-bs-target="#allContacts"
                  type="button"
                >
                  All Contacts
                </NavLink>

                <NavLink
                  to="/us-contacts"
                  className="btn btn-lg btn-outline-warning"
                  style={{ color: "#ff7f50", borderColor: "#ff7f50" }}
                  //   data-bs-toggle="modal"
                  //   data-bs-target="#allContacts"
                  type="button"
                >
                  US Contacts
                </NavLink>

                <button
                  type="button"
                  className="btn btn-lg btn-outline"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  style={{ borderColor: "#46139f" }}
                >
                  Close
                </button>
              </div>
            </div>
            {children}
          </div>
          <div className="modal-footer">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" for="flexCheckDefault">
                Only even
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomModal;
