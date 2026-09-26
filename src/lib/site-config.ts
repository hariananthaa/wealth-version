export const siteConfig = {
  name: "Wealth Version",
  handle: "@wealth_version",
  tagline: "Financial tips & savings tips — with real numbers, not hype.",
  description:
    "Wealth Version helps working Indians build wealth through simple, actionable money systems — SIPs, budgeting frameworks, and salary-day habits — explained with real numbers rather than vague motivation.",
  url: "https://wealthversion.com",
  social: {
    instagram: "https://www.instagram.com/wealth_version",
    youtube: "https://youtube.com/@wealth_version",
  },
  disclaimer:
    "Educational content, not investment advice. Returns are not guaranteed.",
};

export const mainNav = [
  { title: "Home", href: "/" },
  { title: "Resources", href: "/resources" },
  { title: "Tools", href: "/tools" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
];

// Swap in your real Google Drive share links / file IDs here.
export const resources = [
  {
    title: "Step-Up SIP Tracker",
    description:
      "Spreadsheet to plan and track an annually increasing SIP against your salary appraisals.",
    type: "Spreadsheet (.xlsx)",
    driveUrl:
      "https://docs.google.com/spreadsheets/d/1-Y71l6lMEnRPlbcAPkD1UV5kP1ESevRMhbD6yMTS9HQ/copy?usp=drivesdk",
    tag: "Investing",
  },
  {
    title: "Monthly Budget Template",
    description:
      "A salary-day budgeting framework: needs, wants, and SIP-first savings, in one sheet.",
    type: "Spreadsheet (.xlsx)",
    driveUrl: "https://drive.google.com/YOUR_FILE_ID_HERE",
    tag: "Budgeting",
  },
  {
    title: "Emergency Fund Worksheet",
    description:
      "Calculate the right emergency fund size for your expenses and build a funding plan.",
    type: "PDF",
    driveUrl: "https://drive.google.com/YOUR_FILE_ID_HERE",
    tag: "Savings",
  },
];
