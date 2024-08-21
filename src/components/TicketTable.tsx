"use client";

import { DataGrid, GridColDef, GridToolbar  } from "@mui/x-data-grid";
import useZohoTicketList from "@/app/hooks/useZoho";
// ticketNumber: '15353',
// subject: 'SAP Log TraceDataForDebug',
// email: 'kamnat@nip.co.th',
// status: 'Pending',
// statusType: 'Open',
// createdTime: '2024-08-14T09:56:21.000Z',
// channel: 'Email',
// customerResponseTime: '2024-08-14T09:56:21.000Z',
// webUrl: 'https://desk.zoho.com/support/humanicapcl/ShowHomePage.do#Cases/dv/591690000030740420'

const columns: GridColDef[] = [
  { field: "ticketNumber", headerName: "Ticket No.", width: 110 },
  { field: "subject", headerName: "Subject", width: 300, disableReorder: true },
  { field: "email", headerName: "Email", width: 170, disableReorder: true },

  // { field: "dateTime", headerName: "Date-Time", type: "dateTime", width: 200 },
  // { field: "module", headerName: "Module", width: 200 },
  // { field: "company", headerName: "Company", width: 150 },
  // { field: "contact", headerName: "Contact", width: 130 },
  { field: "status", headerName: "Status", width: 100 },
  { field: "statusType", headerName: "Status Type", width: 100 },
  { field: "channel", headerName: "Channel", width: 130 },
  // {
  //   field: 'status',
  //   headerName: 'Status',
  //   type: 'singleSelect',
  //   valueOptions: [{value: 0, label: 'Pending'},{value: 1, label: 'Not-Approve'},{value: 2, label: 'Approve'}],
  //   width: 120,
  // },
  // {
  //   field: "convertDateTime",
  //   headerName: "Convert Date-Time",
  //   type: "dateTime",
  //   width: 200,
  // },
  {
    field: "createdTime",
    headerName: "Created Time",
    type: "dateTime",
    width: 200,
  },
];



export default function DataTable({rows} : {rows?:any}) {

  return (
    <div style={{ width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        slots={{ toolbar: GridToolbar }}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[10, 25, 50, 100]}
      />
    </div>
  );
}
