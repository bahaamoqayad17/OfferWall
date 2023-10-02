export const resources = {
  offers: {
    headers: ["Campaign Name", "Leads", "CR", "Payout"],
    fields: ["name", "leads", "cr", "payout"],
  },
  reversal: {
    headers: ["Country", "Leads", "Revenue"],
  },
  reports: {
    headers: [
      "App",
      "User ID",
      "Transaction ID",
      "Campaign Name",
      "Campaign ID",
      "Payout",
      "Country",
      "Date",
    ],
  },
  billings: {
    headers: ["ID", "Amount", "Status", "Generated On", "Processed At"],
  },

  users: {
    headers: ["Full Name", "Email", "App URL", "Last IP Login", "Status"],
    fields: ["name", "email", "app_url", "last_login_ip", "status"],
  },
  apps: {
    headers: ["Name", "Payout", "Type", "Publisher", "Status"],
    fields: ["name", "payout", "type", "user.name", "status"],
  },
  payments: {
    headers: ["Publisher", "Amount", "Status", "Generated On", "Processed At"],
    fields: ["user.name", "amount", "status", "createdAt", "updatedAt"],
  },
  messages: {
    headers: ["Name", "Email", "Subject", "Message"],
    fields: ["name", "email", "subject", "message"],
  },
  offers_admin: {
    headers: ["Image", "Name", "Requirments", "Payout"],
    fields: ["creatives.icon", "name", "requirements", "epc"],
    extraFields: ["image_url", "offer_name", "offer_desc", "payout"],
  },
  surveys: {
    headers: ["Image", "Reward Dollar", "Short Info", "Title"],
    fields: ["icon_1", "reward_dollar", "info_short", "title"],
  },
};
