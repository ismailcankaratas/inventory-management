"use client";

import { useGetProductsQuery } from "@/state/api";
import Header from "@/app/(components)/Header";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  {
    field: "productId",
    headerName: "ID",
    minWidth: 90,
    cellClassName: "!text-gray-500",
    headerAlign: "center",
  },
  {
    field: "name",
    headerName: "Product Name",
    minWidth: 200,
    cellClassName: "!text-gray-500",
    headerAlign: "center",
  },
  {
    field: "price",
    headerName: "Price",
    minWidth: 110,
    type: "number",
    valueGetter: (value, row) => `$${row.price}`,
    cellClassName: "!text-gray-500",
    headerAlign: "center",
  },
  {
    field: "rating",
    headerName: "Rating",
    minWidth: 110,
    type: "number",
    valueGetter: (value, row) => (row.rating ? row.rating : "N/A"),
    cellClassName: "!text-gray-500",
    headerAlign: "center",
  },
  {
    field: "stockQuantity",
    headerName: "Stock Quantity",
    minWidth: 150,
    type: "number",
    cellClassName: "!text-gray-500",
    headerAlign: "center",
  },
];

const Inventory = () => {
  const { data: products, isError, isLoading } = useGetProductsQuery();

  if (isLoading) {
    return <div className="py-4">Loading...</div>;
  }

  if (isError || !products) {
    return (
      <div className="text-center text-red-500 py-4">
        Failed to fetch products
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <Header name="Inventory" />
      <DataGrid
        rows={products}
        columns={columns}
        getRowId={(row) => row.productId}
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

export default Inventory;
