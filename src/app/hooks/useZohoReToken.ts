import axios from "axios";

export default async function useZohoReToken() {
  try {
    const response = await axios.post(
      "https://accounts.zoho.com/oauth/v2/token?refresh_token=1000.a1d9597752908ed78ac238a757c7ba47.8e2743aa6720956f65dd2a7fcdf4e6a1&client_id=1000.NQXQ11IP6JLCYGID3KOS6EIDIDEVJJ&client_secret=af0638335efdfcd3176a803bf830bd0bb59cf8ac01&scope=Desk.tickets.ALL&redirect_uri=https://sap.humanica.com/home.aspx&grant_type=refresh_token"
    );
    return response.data.access_token;
  } catch (error) {
    throw error;
  }
}
