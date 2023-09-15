import React, { useState } from "react";
import { useQuery } from "react-query";
import allContactsRepo from "../../api/allContactsRepo";
import CustomModal from "../CustomModal";

const AllContacts = (props) => {
  const [page, setPage] = useState(1);
  const [checked, setChecked] = useState(false);

  const fetchInfiniteContacts = async (page) => {
    const res = await allContactsRepo.getAll({
      page_size: 20,
      page: page,
    });
    return res.results;
  };

  const { isLoading, isError, error, data, isFetching } = useQuery(
    ["allContacts", page],
    () => fetchInfiniteContacts(page),
    { keepPreviousData: true }
  );

  return (
    <div>
      <CustomModal {...props} title="ALL Contacts" setChecked={setChecked}>
        {" "}
        <table className="table table-striped ">
          <thead>
            <tr>
              <th scope="col">#ID</th>
              <th scope="col">COUNTRY ID</th>
              <th scope="col">NAME</th>
              <th scope="col">PhONE</th>
            </tr>
          </thead>
          <tbody>
            {!checked && data
              ? data?.map((contacts, index) => {
                  return (
                    <tr key={index}>
                      <td>{contacts?.id}</td>
                      <td>{contacts?.country?.id}</td>
                      <td>{contacts?.country?.name}</td>
                      <td>{contacts?.phone}</td>
                    </tr>
                  );
                })
              : data
                  ?.filter((x) => x.id % 2 === 0)
                  ?.map((contacts, index) => {
                    return (
                      <tr key={index}>
                        <td>{contacts?.id}</td>
                        <td>{contacts?.country?.id}</td>
                        <td>{contacts?.country?.name}</td>
                        <td>{contacts?.phone}</td>
                      </tr>
                    );
                  })}
          </tbody>
        </table>
      </CustomModal>
    </div>
  );
};

export default AllContacts;
