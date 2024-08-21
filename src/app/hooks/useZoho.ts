import axios from "axios";
import useZohoReToken from "./useZohoReToken";

const FetchTicket = async (start: number) => {
  const access_token = await useZohoReToken();

  try {
    const response = await fetch(
      `https://desk.zoho.com/api/v1/tickets?from=${start}&sortBy=-createdTime&limit=100`,
      { headers: { Authorization: `Zoho-oauthtoken ${access_token}`  } , next: { revalidate: 3600 } }
    );
    // const response = await axios.get(
    //   `https://desk.zoho.com/api/v1/tickets?from=${start}&sortBy=-createdTime&limit=100`,
    //   { headers: { Authorization: `Zoho-oauthtoken ${access_token}` } }
    // );
    // console.log(response.data);
    // return response.data;
    return response.json();
  } catch (error) {
    throw error;
  }
};

export default async function useZohoTicketList() {
  let allTickets: any[] = [];
  let start = 0;
  let hasMoreTickets = true;

  while (hasMoreTickets) {
    const { data } = await FetchTicket(start);
    allTickets = [...allTickets, ...data];
    // If less than 100 tickets are returned, we are on the last page
    // under condition is fail cause of zoho free tier
    //   if (data.length < 100) {
    //     hasMoreTickets = false;
    //   } else {
    //     start += 100;
    //   }
    if (allTickets.length > 400) {
      hasMoreTickets = false;
      console.log("limit", allTickets.length, start);
    } else {
      start += 100;
      console.log("i want more", allTickets.length, start);
    }
  }
  return allTickets;
}
