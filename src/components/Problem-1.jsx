import React, { useState } from "react";

let initialData = [
  { name: "Make some music", status: "completed" },
  { name: "Conquer the world", status: "active" },
  { name: "Do some homework", status: "archive" },
  { name: "Do some homework", status: "pending" },
];
const Problem1 = () => {
  const [show, setShow] = useState("all");
  const [tableData, setTableData] = useState(initialData);
  const [filterData, setFilterData] = useState([]);
  const [formInputData, setformInputData] = useState({
    name: "",
    status: "",
  });

  //table data sorting
  const statusOrder = ["active", "completed", "archive", "pending"];
  tableData.sort((a, b) => {
    const statusA = statusOrder.indexOf(a.status);
    const statusB = statusOrder.indexOf(b.status);
    return statusA - statusB;
  });

  //handlechange
  const handleChange = (evnt) => {
    const newInput = (data) => ({
      ...data,
      [evnt.target.name]: evnt.target.value,
    });
    setformInputData(newInput);
  };

  //form submit
  const handleSubmit = (evnt) => {
    evnt.preventDefault();
    const checkEmptyInput = !Object.values(formInputData).every(
      (res) => res === ""
    );
    if (checkEmptyInput) {
      const newData = (data) => [...data, formInputData];
      setTableData(newData);
      const emptyInput = { name: "", status: "" };
      setformInputData(emptyInput);
    }
  };

  //filtering by status
  const handleClick = async (val) => {
    setShow(val);
    if (val !== "all") {
      const filtered = tableData?.filter((item) => item.status === val);
      setFilterData(filtered);
      return filtered;
    } else {
      setFilterData(null);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
        <div className="col-6 ">
          <form
            onSubmit={handleSubmit}
            className="row gy-2 gx-3 align-items-center mb-4"
          >
            <div className="col-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
                onChange={handleChange}
                value={formInputData.name}
              />
            </div>
            <div className="col-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Status"
                name="status"
                onChange={handleChange}
                value={formInputData.status}
              />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="col-8">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
              <button
                className={`nav-link ${show === "all" && "active"}`}
                type="button"
                onClick={() => handleClick("all")}
              >
                All
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "active" && "active"}`}
                type="button"
                onClick={() => handleClick("active")}
              >
                Active
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "completed" && "active"}`}
                type="button"
                onClick={() => handleClick("completed")}
              >
                Completed
              </button>
            </li>
          </ul>
          <div className="tab-content"></div>
          <table className="table table-striped ">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {!filterData?.length > 0
                ? tableData?.map((data, index) => {
                    return (
                      <tr key={index}>
                        <td>{data?.name}</td>
                        <td>{data?.status}</td>
                      </tr>
                    );
                  })
                : filterData?.map((data, index) => {
                    return (
                      <tr key={index}>
                        <td>{data?.name}</td>
                        <td>{data?.status}</td>
                      </tr>
                    );
                  })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Problem1;
