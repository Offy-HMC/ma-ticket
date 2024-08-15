import DataTable from "@/components/TicketTable"
import Box from '@mui/material/Box';
import { Stack } from "@mui/material";
import { MockData } from "@/constants/MockupTicket";

export default function PageTicket() {
    return (
        <>
        <Box>MA-TICKET</Box>
        <Stack></Stack>
        <DataTable rows={MockData}/>
        </>
    );
}