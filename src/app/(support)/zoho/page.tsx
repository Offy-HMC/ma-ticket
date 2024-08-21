import DataTable from "@/components/TicketTable";
import Box from "@mui/material/Box";
import { Stack } from "@mui/material";
import useZohoTicketList from "@/app/hooks/useZoho";

export default async function PageZoho() {
  const zohoTicket = await useZohoTicketList();
  return (
    <>
    <Box>Zoho</Box>
    <Stack></Stack>
    <DataTable rows={zohoTicket}/>
    </>

  );
}


// ticketNumber: '15353',
// subject: 'SAP Log TraceDataForDebug',
// email: 'kamnat@nip.co.th',
// status: 'Pending',
// statusType: 'Open',
// createdTime: '2024-08-14T09:56:21.000Z',
// channel: 'Email',
// customerResponseTime: '2024-08-14T09:56:21.000Z',
// webUrl: 'https://desk.zoho.com/support/humanicapcl/ShowHomePage.do#Cases/dv/591690000030740420'
