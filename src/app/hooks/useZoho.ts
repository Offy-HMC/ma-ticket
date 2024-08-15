import axios from "axios";
import useZohoReToken from "./useZohoReToken";

export default async function useZohoTicketList(start: string = "") {
  const access_token= await useZohoReToken();

    try {
        const response = await axios.get(
          `https://desk.zoho.com/api/v1/tickets?from=${start}&sortBy=-createdTime&limit=100`,
          { headers: { Authorization: `Zoho-oauthtoken ${access_token}` } }
        );
        return response.data;
      } catch (error) {
        throw error;
      }



 
}
