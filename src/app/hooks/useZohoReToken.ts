import axios from "axios";

export default async function useZohoReToken() {
  const refresh_token_list = [
    "1000.936c7a6e89cc047de62a73e8037ef6a3.8e180258728cb77c8a8c54f89309633e",
    "1000.d9802eddefc02d37d4b210772feac271.4a3a7752a1cf2be33400faa3388b2e21",
    "1000.392a0bae219c02582bae16e13332595d.c974a05abdfac584ca5aa87e7d27cc20",
    "1000.e2b9fa04cc0ef7c635cd996ad81a6e78.b0d1bf7bb6696159d3be9856fd1d87c1",
  ];
  const refresh_token =
    refresh_token_list[Math.floor(Math.random() * refresh_token_list.length)];
  console.log(refresh_token);
  try {
    const response = await axios.post(
      `https://accounts.zoho.com/oauth/v2/token?refresh_token=${refresh_token}&client_id=1000.NQXQ11IP6JLCYGID3KOS6EIDIDEVJJ&client_secret=af0638335efdfcd3176a803bf830bd0bb59cf8ac01&scope=Desk.tickets.ALL&redirect_uri=https://sap.humanica.com/home.aspx&grant_type=refresh_token`
    );

    return response.data.access_token;
  } catch (error) {
    throw error;
  }
}
