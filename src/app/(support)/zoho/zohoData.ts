const myHeaders = new Headers();
myHeaders.append("Authorization", "Zoho-oauthtoken 1000.10fa3d4bbaae561e27c1ac6975fcb97a.97c0a28ea78d2909fc8a28197068fff5");

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

fetch("https://desk.zoho.com/api/v1/tickets?sortBy=-createdTime&limit=100", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));