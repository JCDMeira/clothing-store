import React, { useEffect, useMemo } from "react";
import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import { useProductsStore } from "../../Stores";
import { ProductModel } from "../../model";

export const ProductAdmin: React.FC = () => {
  const products = useProductsStore((state) => state.products);
  const getProducts = useProductsStore((state) => state.getProducts);
  const deletProduct = useProductsStore((state) => state.deletProduct);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  const columns: GridColDef[] = useMemo(
    () => [
      {
        field: "title",
        headerName: "Título",
        flex: 1,
        align: "center",
        headerAlign: "center",
        editable: false,
      },
      {
        field: "price",
        headerName: "Preço",
        type: "number",
        flex: 1,
        align: "center",
        headerAlign: "center",
        editable: false,
        valueGetter: (params: GridValueGetterParams) =>
          "R$ " + Number(params.row.price).toFixed(2),
      },
      {
        field: "actions",
        headerName: "Ações",
        description: "Coluna de ações",
        sortable: false,
        filterable: false,
        flex: 1,
        align: "center",
        headerAlign: "center",
        renderCell: (params: GridRenderCellParams<ProductModel>) => (
          <div>
            <button onClick={() => console.log("edit", params.row._id)}>
              Edit
            </button>

            <button onClick={() => deletProduct(params.row._id)}>Delete</button>
          </div>
        ),
      },
    ],
    [deletProduct]
  );

  return (
    <div>
      <h1>admin</h1>

      <br />

      <button>Criar novo item</button>
      <br />
      <br />
      <br />

      {products.length > 0 && (
        <DataGrid
          getRowId={(row) => row._id}
          rows={products}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          pageSizeOptions={[10]}
          disableRowSelectionOnClick
        />
      )}
    </div>
  );
};
