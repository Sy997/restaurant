import React from 'react';

import "./account.css"
import { DataGrid } from '@mui/x-data-grid';
import NavbarAdmin from '../NavbarAdmin/NavbarAdmin';
import ManageList from '../ManageList/ManageList';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Pham', firstName: 'Sy', age: 35 },
  { id: 2, lastName: 'Hoang', firstName: 'Sy', age: 42 },
  { id: 3, lastName: 'Pham', firstName: 'Sy', age: 45 },
  { id: 4, lastName: 'Hoang', firstName: 'Sy', age: 16 },
  { id: 5, lastName: 'Pham', firstName: 'Sy', age: null },
  { id: 6, lastName: 'Hoang', firstName: null, age: 150 },
  { id: 7, lastName: 'Pham', firstName: 'Sy', age: 44 },
  { id: 8, lastName: 'Hoang', firstName: 'Sy', age: 36 },
  { id: 9, lastName: 'Pham', firstName: 'Sy', age: 65 },
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <NavbarAdmin />
      <div className='maincore'>
        <ManageList />
        <DataGrid className='useradm'
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
      />
      </div>
    </div>
  );
}
