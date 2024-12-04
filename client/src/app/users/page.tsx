"use client";

import { useGetUsersQuery } from "@/state/api";
import Header from "@/app/(components)/Header";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  {
    field: "userId",
    headerName: "ID",
    minWidth: 90,
    cellClassName: "!text-gray-500",
    headerAlign: "center",
  },
  {
    field: "name",
    headerName: "Name",
    minWidth: 200,
    cellClassName: "!text-gray-500",
    headerAlign: "center",
  },
  {
    field: "email",
    headerName: "Email",
    minWidth: 110,
    type: "number",
    cellClassName: "!text-gray-500",
    headerAlign: "center",
  },
];

const Users = () => {
  const { data: users, isError, isLoading } = useGetUsersQuery();

  if (isLoading) {
    return <div className="py-4">Loading...</div>;
  }

  if (isError || !users) {
    return (
      <div className="text-center text-red-500 py-4">Failed to fetch users</div>
    );
  }

  return (
    <div className="flex flex-col">
      <Header name="Users" />
      <DataGrid
        rows={users}
        columns={columns}
        getRowId={(row) => row.userId}
        checkboxSelection
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[10]}
        className="bg-white shadow rounded-lg border border-gray-200 mt-5"
        sx={{
          ".dark & .MuiTablePagination-root": {
            color: "#fff",
          },
        }}
      />
    </div>
  );
};

export default Users;
