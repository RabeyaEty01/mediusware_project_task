import React, { useState } from "react";
import { useQuery } from "react-query";
import allContactsRepo from "../../api/allContactsRepo";
import CustomModal from "../CustomModal";

const AllContacts = (props) => {
  const [page, setPage] = useState();
  const fetchInfiniteContacts = async (page) => {
    const res = await allContactsRepo.getAll();
    return res.data;
  };

  const { isLoading, isError, error, data, isFetching } = useQuery(
    ["allContacts", page],
    () => fetchInfiniteContacts(page),
    { keepPreviousData: true }
  );
  return (
    <div>
      <CustomModal {...props} title="ALL Contacts">
        {/* <h1>hello contact</h1> */}
      </CustomModal>
    </div>
  );
};

export default AllContacts;
