import './App.css';
import {Paper, Snackbar} from "@mui/material";
import {useGetUsersQuery} from "./store/api.ts";
import {DataGrid, GridColDef} from '@mui/x-data-grid';

const columns: GridColDef[] = [
  {
    field: 'fullName',
    headerName: 'Full name',
    width: 200,
    valueGetter: (_, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
  {
    field: 'phone',
    headerName: 'Phone',
    type: 'number',
    width: 200,
  },
  {
    field: 'birthDate',
    headerName: 'Date of birth',
    type: 'number',
    width: 200,
  },
];

function App() {
  const {data, isLoading, isError} = useGetUsersQuery();
  const paginationModel = {page: 0, pageSize: 5};

  return (
    <Paper sx={{height: 400, width: '100%'}}>
      <DataGrid
        rows={data?.users}
        columns={columns}
        initialState={{pagination: {paginationModel}}}
        loading={isLoading}
      />

      <Snackbar
        open={isError}
        autoHideDuration={6000}
        message="Error"
        anchorOrigin={{vertical: 'top', horizontal: 'center'}}
      />
    </Paper>
  );
}

export default App;
