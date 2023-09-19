import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { getVisaAction } from "../../../../../Redux/getVisa/actionVisaData";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "name",
    headerName: "Name",
    width: 150,
    editable: true,
  },
  {
    field: "email",
    headerName: "Email",
    width: 110,
    editable: true,
  },
  {
    field: "mobile",
    headerName: "Mobile",
    width: 150,
    editable: true,
  },
  {
    field: "visaType",
    headerName: "visaType",
    width: 110,
    editable: true,
  },
];
const visaData1 = [
  {
    id: 1,
    name: "Jane Smith",
    email: "jane@example.com",
    mobile: "987-654-3210",
    visaType: "Business",
  },
  {
    id: 2,
    name: "Alice Johnson",
    email: "alice@example.com",
    mobile: "555-555-5555",
    visaType: "Student",
  },
  {
    id: 3,
    name: "Michael Brown",
    email: "michael@example.com",
    mobile: "111-222-3333",
    visaType: "Work",
  },
  {
    id: 4,
    name: "Emily Davis",
    email: "emily@example.com",
    mobile: "444-555-6666",
    visaType: "Tourist",
  },
  {
    id: 5,
    name: "William Lee",
    email: "william@example.com",
    mobile: "777-888-9999",
    visaType: "Business",
  },
  {
    id: 6,
    name: "Sophia Miller",
    email: "sophia@example.com",
    mobile: "222-333-4444",
    visaType: "Student",
  },
  {
    id: 7,
    name: "James Wilson",
    email: "james@example.com",
    mobile: "888-999-0000",
    visaType: "Work",
  },
  {
    id: 8,
    name: "Olivia Taylor",
    email: "olivia@example.com",
    mobile: "123-987-4567",
    visaType: "Tourist",
  },
  {
    id: 9,
    name: "Liam Martinez",
    email: "liam@example.com",
    mobile: "555-777-2222",
    visaType: "Business",
  },
];

const VisaData = () => {
  const reducerState = useSelector((state) => state);

  const visaData = reducerState?.getVisaData?.visaData?.data?.data;
  console.log("visaData", visaData);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVisaAction());
  }, []);
  return (
    <>
      <Box height={100} />
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={visaData1}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </>
  );
};

export default VisaData;
