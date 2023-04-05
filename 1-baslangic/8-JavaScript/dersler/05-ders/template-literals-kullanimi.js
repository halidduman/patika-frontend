///////////////////////////////////////// template-literals-kullanimi

let username = "halid";
const DOMAIN = "kodluyoruz.org";

let email = username + "@" + DOMAIN;

console.log(
  "merhaba ",
  username,
  "sitemize hos geldin",
  "mail adresin: ",
  email
);
/////////////////////////////////////////////////////////////////////////////////////// eski yontem
let info = `merhaba ${username} sitemize hos geldin.. mail adresin ${email}
mail adresinin uzunlugu: ${email.length}
kisa isminiz:${username[0]}.
`;
//////////////////////////////////////////////////////////////////////////////////////// yeni yontem
console.log(info);
