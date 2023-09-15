import React, { useState } from "react";
import { useQuery } from "react-query";
import allContactsRepo from "../../api/allContactsRepo";
import CustomModal from "../CustomModal";

const USContacts = (props) => {
  const [page, setPage] = useState(1);
  const country = "United States";
  const fetchInfiniteContacts = async (page) => {
    const res = await allContactsRepo.getAllUSCountry(country, {
      page_size: 20,
      page: page,
    });
    return res.results;
  };

  const { isLoading, isError, error, data, isFetching } = useQuery(
    ["usContacts", page],
    () => fetchInfiniteContacts(page),
    { keepPreviousData: true }
  );

  return (
    <div>
      <CustomModal {...props} title="US Contacts">
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
            {data &&
              data?.map((contacts, index) => {
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

export default USContacts;
