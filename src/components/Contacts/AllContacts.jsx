import React, { useEffect } from "react";
import CustomModal from "../CustomModal";

const AllContacts = (props) => {
  useEffect(() => {

  }, []);
  
  return (
    <div>
      <CustomModal {...props} title="ALL Contacts">
        {/* <h1>hello contact</h1> */}
      </CustomModal>
    </div>
  );
};

export default AllContacts;
