const tds = [
  {
    id: 1,
    timestamp: "Sun May 07 2023 00:00:00 GMT+0530 (India Standard Time)",
    description: "Due Date for depositing TDS",
  },
  {
    id: 2,
    timestamp: "Wed Jun 07 2023 00:00:00 GMT+0530 (India Standard Time)",
    description: "Due Date for depositing TDS",
  },
  {
    id: 3,
    timestamp: "Fri Jul 07 2023 00:00:00 GMT+0530 (India Standard Time)",
    description: "Due Date for depositing TDS",
  },
  {
    id: 4,
    timestamp: "Mon Aug 07 2023 00:00:00 GMT+0530 (India Standard Time)",
    description: "Due Date for depositing TDS",
  },
  {
    id: 5,
    timestamp: "Thu Sep 07 2023 00:00:00 GMT+0530 (India Standard Time)",
    description: "Due Date for depositing TDS",
  },
  {
    id: 6,
    timestamp: "Sat Oct 07 2023 00:00:00 GMT+0530 (India Standard Time)",
    description: "Due Date for depositing TDS",
  },
  {
    id: 7,
    timestamp: "Tue Nov 07 2023 00:00:00 GMT+0530 (India Standard Time)",
    description: "Due Date for depositing TDS",
  },
  {
    id: 8,
    timestamp: "Thu Dec 07 2023 00:00:00 GMT+0530 (India Standard Time)",
    description: "Due Date for depositing TDS",
  },
  {
    id: 9,
    timestamp: "Tue Jan 09 2024 00:00:00 GMT+0530 (India Standard Time)",
    description: "Due Date for depositing TDS",
  },
  {
    id: 10,
    timestamp: "Wed Feb 07 2024 00:00:00 GMT+0530 (India Standard Time)",
    description: "Due Date for depositing TDS",
  },
  {
    id: 11,
    timestamp: "Thu Mar 07 2024 00:00:00 GMT+0530 (India Standard Time)",
    description: "Due Date for depositing TDS",
  },
  {
    id: 12,
    timestamp: "Sun Apr 07 2024 00:00:00 GMT+0530 (India Standard Time)",
    description:
      "Due Date for depositing TDS (for tax deducted by govt. office)",
  },
  {
    id: 13,
    timestamp: "Tue Apr 30 2024 00:00:00 GMT+0530 (India Standard Time)",
    description:
      "Due Date for depositing TDS (for tax deducted by govt. office)",
  },
  {
    id: 14,
    timestamp: "Mon Jul 31 2023 00:00:00 GMT+0530 (India Standard Time)",
    description: "Consolidated  return filing date",
  },
  {
    id: 15,
    timestamp: "Tue Oct 31 2023 00:00:00 GMT+0530 (India Standard Time)",
    description: "Consolidated  return filing date",
  },
  {
    id: 16,
    timestamp: "Wed Jan 31 2024 00:00:00 GMT+0530 (India Standard Time)",
    description: "Consolidated  return filing date",
  },
  {
    id: 17,
    timestamp: "Fri May 31 2024 00:00:00 GMT+0530 (India Standard Time)",
    description: "Consolidated  return filing date",
  },
  {
    id: 18,
    timestamp: "Thu Jun 01 2023 00:00:00 GMT+0530 (India Standard Time)",
    description: "Consolidated  return is filing",
  },
  {
    id: 19,
    timestamp: "Sat Sep 30 2023 00:00:00 GMT+0530 (India Standard Time)",
    description: "Consolidated  return is filing",
  },
  {
    id: 20,
    timestamp: "Sat Dec 30 2023 00:00:00 GMT+0530 (India Standard Time)",
    description: "Consolidated  return is filing",
  },
  {
    id: 21,
    timestamp: "Sun Mar 31 2024 00:00:00 GMT+0530 (India Standard Time)",
    description: "Consolidated  return is filing",
  },
];

const roc = [
  {
    id: 1,
    timestamp: "Tue Oct 31 2023 00:00:00 GMT+0530 (India Standard Time)",
    description:
      "Form for furnishing half yearly return with the registrar in respect of outstanding payments to Micro or Small Enterprise.",
  },
  {
    id: 2,
    timestamp: "Mon Oct 30 2023 00:00:00 GMT+0530 (India Standard Time)",
    description:
      "Form for filing consolidated financial statements and other documents with the Registrar for NBFCs",
  },
  {
    id: 3,
    timestamp: "Mon Oct 30 2023 00:00:00 GMT+0530 (India Standard Time)",
    description:
      "Form for filing XBRL document in respect of financial statement and other documents with the Registrar",
  },
  {
    id: 4,
    timestamp: "Wed Nov 29 2023 00:00:00 GMT+0530 (India Standard Time)",
    description: "Form for filing annual return by a company.",
  },
  {
    id: 5,
    timestamp: "Wed Nov 29 2023 00:00:00 GMT+0530 (India Standard Time)",
    description: "Form for filing annual return by OPCs and Small company.",
  },
  {
    id: 6,
    timestamp: "Mon Oct 30 2023 00:00:00 GMT+0530 (India Standard Time)",
    description:
      "Form for filing financial statement and other documents with the Registrar for NBFCs",
  },
];

const income_tax = [
  {
    id: 1,
    timestamp: "Mon Jul 31 2023 00:00:00 GMT+0530 (India Standard Time)",
    description: "books of accounts not required to be audited",
  },
  {
    id: 2,
    timestamp: "Tue Oct 31 2023 00:00:00 GMT+0530 (India Standard Time)",
    description: "Businesses (Requiring Audit)",
  },
  {
    id: 3,
    timestamp: "Thu Nov 30 2023 00:00:00 GMT+0530 (India Standard Time)",
    description:
      "Businesses requiring transfer pricing reports (in case of international/specified domestic transactions)",
  },
  {
    id: 4,
    timestamp: "Sun Dec 31 2023 00:00:00 GMT+0530 (India Standard Time)",
    description: "Revised return",
  },
  {
    id: 4,
    timestamp: "Sun Dec 31 2023 00:00:00 GMT+0530 (India Standard Time)",
    description: "Belated/late return",
  },
];

const gst = [
  {
    id: 1,
    timestamp: "Wed Jan 11 2023 00:00:00 GMT+0530 (India Standard Time)",
    description: "GSTR1",
  },
  {
    id: 2,
    timestamp: "Sat Feb 11 2023 00:00:00 GMT+0530 (India Standard Time)",
    description: "GSTR1",
  },
  {
    id: 3,
    timestamp: "Sat Mar 11 2023 00:00:00 GMT+0530 (India Standard Time)",
    description: "GTSTR1",
  },
  {
    id: 4,
    timestamp: "Tue Apr 11 2023 00:00:00 GMT+0530 (India Standard Time)",
    description: "GSTR1",
  },
  {
    id: 5,
    timestamp: "Thu May 11 2023 00:00:00 GMT+0530 (India Standard Time)",
    description: "GSTR1",
  },
  {
    id: 6,
    timestamp: "Sun Jun 11 2023 00:00:00 GMT+0530 (India Standard Time)",
    description: "GSTR1",
  },
  {
    id: 7,
    timestamp: "Tue Jul 11 2023 00:00:00 GMT+0530 (India Standard Time)",
    description: "GSTR1",
  },
  {
    id: 8,
    timestamp: "Fri Aug 11 2023 00:00:00 GMT+0530 (India Standard Time)",
    description: "GSTR1",
  },
  {
    id: 9,
    timestamp: "Mon Sep 11 2023 00:00:00 GMT+0530 (India Standard Time)",
    description: "GSTR1",
  },
  {
    id: 10,
    timestamp: "Wed Oct 11 2023 00:00:00 GMT+0530 (India Standard Time)",
    description: "GSTR1",
  },
  {
    id: 11,
    timestamp: "Sat Nov 11 2023 00:00:00 GMT+0530 (India Standard Time)",
    description: "GSTR1",
  },
  {
    id: 12,
    timestamp: "Mon Dec 11 2023 00:00:00 GMT+0530 (India Standard Time)",
    description: "GSTR1",
  },
  {
    id: 13,
    timestamp: "Thu Jan 11 2024 00:00:00 GMT+0530 (India Standard Time)",
    description: "GSTR1",
  },
  {
    id: 14,
    timestamp: "Sun Feb 11 2024 00:00:00 GMT+0530 (India Standard Time)",
    description: "GSTR1",
  },
  {
    id: 15,
    timestamp: "Fri Mar 01 2024 00:00:00 GMT+0530 (India Standard Time)",
    description: "GSTR1",
  },
  {
    id: 16,
    timestamp: "Thu Apr 11 2024 00:00:00 GMT+0530 (India Standard Time)",
    description: "GSTR1",
  },
  {
    id: 17,
    timestamp: "Sat May 11 2024 00:00:00 GMT+0530 (India Standard Time)",
    description: "GSTR1",
  },
  {
    id: 18,
    timestamp: "Tue Jun 11 2024 00:00:00 GMT+0530 (India Standard Time)",
    description: "GSTR1",
  },
  {
    id: 19,
    timestamp: "Thu Jul 11 2024 00:00:00 GMT+0530 (India Standard Time)",
    description: "GSTR1",
  },
  {
    id: 20,
    timestamp: "Sun Aug 11 2024 00:00:00 GMT+0530 (India Standard Time)",
    description: "GSTR1",
  },
  {
    id: 21,
    timestamp: "Wed Sep 11 2024 00:00:00 GMT+0530 (India Standard Time)",
    description: "GSTR1",
  },
  {
    id: 22,
    timestamp: "Fri Oct 11 2024 00:00:00 GMT+0530 (India Standard Time)",
    description: "GSTR1",
  },
  {
    id: 23,
    timestamp: "Mon Nov 11 2024 00:00:00 GMT+0530 (India Standard Time)",
    description: "GSTR1",
  },
  {
    id: 24,
    timestamp: "Wed Dec 11 2024 00:00:00 GMT+0530 (India Standard Time)",
    description: "GSTR1",
  },
  {
    id: 25,
    timestamp: "Sat Jan 14 2023 00:00:00 GMT+0530 (India Standard Time)",
    description: "GSTR2B",
  },
  {
    id: 26,
    timestamp: "Tue Feb 14 2023 00:00:00 GMT+0530 (India Standard Time)",
    description: "GSTR2B",
  },
  {
    id: 27,
    timestamp: "Tue Mar 14 2023 00:00:00 GMT+0530 (India Standard Time)",
    description: "GSTR2B",
  },
  {
    id: 28,
    timestamp: "Fri Apr 14 2023 00:00:00 GMT+0530 (India Standard Time)",
    description: "GSTR2B",
  },
  {
    id: 29,
    timestamp: "Sun May 14 2023 00:00:00 GMT+0530 (India Standard Time)",
    description: "GSTR2B",
  },
  {
    id: 30,
    timestamp: "Wed Jun 14 2023 00:00:00 GMT+0530 (India Standard Time)",
    description: "GSTR2B",
  },
  {
    id: 31,
    timestamp: "Fri Jul 14 2023 00:00:00 GMT+0530 (India Standard Time)",
    description: "GSTR2B",
  },
  {
    id: 32,
    timestamp: "Mon Aug 14 2023 00:00:00 GMT+0530 (India Standard Time)",
    description: "GSTR2B",
  },
  {
    id: 33,
    timestamp: "Thu Sep 14 2023 00:00:00 GMT+0530 (India Standard Time)",
    description: "GSTR2B",
  },
  {
    id: 34,
    timestamp: "Sat Oct 14 2023 00:00:00 GMT+0530 (India Standard Time)",
    description: "GSTR2B",
  },
  {
    id: 35,
    timestamp: "Tue Nov 14 2023 00:00:00 GMT+0530 (India Standard Time)",
    description: "GSTR2B",
  },
  {
    id: 36,
    timestamp: "Thu Dec 14 2023 00:00:00 GMT+0530 (India Standard Time)",
    description: "GSTR2B",
  },
  {
    id: 37,
    timestamp: "Sun Jan 14 2024 00:00:00 GMT+0530 (India Standard Time)",
    description: "GSTR2B",
  },
  {
    id: 38,
    timestamp: "Wed Feb 14 2024 00:00:00 GMT+0530 (India Standard Time)",
    description: "GSTR2B",
  },
  {
    id: 39,
    timestamp: "Thu Mar 14 2024 00:00:00 GMT+0530 (India Standard Time)",
    description: "GSTR2B",
  },
  {
    id: 40,
    timestamp: "Sun Apr 14 2024 00:00:00 GMT+0530 (India Standard Time)",
    description: "GSTR2B",
  },
  {
    id: 41,
    timestamp: "Tue May 14 2024 00:00:00 GMT+0530 (India Standard Time)",
    description: "GSTR2B",
  },
  {
    id: 42,
    timestamp: "Fri Jun 14 2024 00:00:00 GMT+0530 (India Standard Time)",
    description: "GSTR2B",
  },
  {
    id: 43,
    timestamp: "Sun Jul 14 2024 00:00:00 GMT+0530 (India Standard Time)",
    description: "GSTR2B",
  },
  {
    id: 44,
    timestamp: "Wed Aug 14 2024 00:00:00 GMT+0530 (India Standard Time)",
    description: "GSTR2B",
  },
  {
    id: 45,
    timestamp: "Sat Sep 14 2024 00:00:00 GMT+0530 (India Standard Time)",
    description: "GSTR2B",
  },
  {
    id: 45,
    timestamp: "Mon Oct 14 2024 00:00:00 GMT+0530 (India Standard Time)",
    description: "GSTR2B",
  },
  {
    id: 46,
    timestamp: "Thu Nov 14 2024 00:00:00 GMT+0530 (India Standard Time)",
    description: "GSTR2B",
  },
  {
    id: 48,
    timestamp: "Sun Dec 01 2024 00:00:00 GMT+0530 (India Standard Time)",
    description: "GSTR2B",
  },
  {
    id: 49,
    timestamp: "Fri Jan 20 2023 00:00:00 GMT+0530 (India Standard Time)",
    description: "GSTR3B",
  },
  {
    id: 50,
    timestamp: "Mon Feb 20 2023 00:00:00 GMT+0530 (India Standard Time)",
    description: "GSTR3B",
  },
  {
    id: 51,
    timestamp: "Mon Mar 20 2023 00:00:00 GMT+0530 (India Standard Time)",
    description: "GSTR3B",
  },
  {
    id: 52,
    timestamp: "Sat Apr 01 2023 00:00:00 GMT+0530 (India Standard Time)",
    description: "GSTR3B",
  },
  {
    id: 53,
    timestamp: "Mon May 01 2023 00:00:00 GMT+0530 (India Standard Time)",
    description: "GSTR3B",
  },
  {
    id: 54,
    timestamp: "Tue Jun 20 2023 00:00:00 GMT+0530 (India Standard Time)",
    description: "GSTR3B",
  },
  {
    id: 55,
    timestamp: "Thu Jul 20 2023 00:00:00 GMT+0530 (India Standard Time)",
    description: "GSTR3B",
  },
  {
    id: 56,
    timestamp: "Tue Aug 01 2023 00:00:00 GMT+0530 (India Standard Time)",
    description: "GSTR3B",
  },
  {
    id: 57,
    timestamp: "Wed Sep 20 2023 00:00:00 GMT+0530 (India Standard Time)",
    description: "GSTR3B",
  },
  {
    id: 58,
    timestamp: "Sun Oct 01 2023 00:00:00 GMT+0530 (India Standard Time)",
    description: "GSTR3B",
  },
  {
    id: 59,
    timestamp: "Mon Nov 20 2023 00:00:00 GMT+0530 (India Standard Time)",
    description: "GSTR3B",
  },
  {
    id: 60,
    timestamp: "Wed Dec 20 2023 00:00:00 GMT+0530 (India Standard Time)",
    description: "GSTR3B",
  },
  {
    id: 61,
    timestamp: "Sat Jan 20 2024 00:00:00 GMT+0530 (India Standard Time)",
    description: "GSTR3B",
  },
  {
    id: 62,
    timestamp: "Tue Feb 20 2024 00:00:00 GMT+0530 (India Standard Time)",
    description: "GSTR3B",
  },
  {
    id: 63,
    timestamp: "Wed Mar 20 2024 00:00:00 GMT+0530 (India Standard Time)",
    description: "GSTR3B",
  },
  {
    id: 64,
    timestamp: "Sat Apr 20 2024 00:00:00 GMT+0530 (India Standard Time)",
    description: "GSTR3B",
  },
  {
    id: 65,
    timestamp: "Mon May 20 2024 00:00:00 GMT+0530 (India Standard Time)",
    description: "GSTR3B",
  },
  {
    id: 66,
    timestamp: "Thu Jun 20 2024 00:00:00 GMT+0530 (India Standard Time)",
    description: "GSTR3B",
  },
  {
    id: 67,
    timestamp: "Sat Jul 20 2024 00:00:00 GMT+0530 (India Standard Time)",
    description: "GSTR3B",
  },
  {
    id: 68,
    timestamp: "Tue Aug 20 2024 00:00:00 GMT+0530 (India Standard Time)",
    description: "GSTR3B",
  },
  {
    id: 69,
    timestamp: "Fri Sep 20 2024 00:00:00 GMT+0530 (India Standard Time)",
    description: "GSTR3B",
  },
  {
    id: 70,
    timestamp: "Sun Oct 20 2024 00:00:00 GMT+0530 (India Standard Time)",
    description: "GSTR3B",
  },
  {
    id: 71,
    timestamp: "Wed Nov 20 2024 00:00:00 GMT+0530 (India Standard Time)",
    description: "GSTR3B",
  },
  {
    id: 72,
    timestamp: "Fri Dec 20 2024 00:00:00 GMT+0530 (India Standard Time)",
    description: "GSTR3B",
  },
  {
    id: 72,
    timestamp: "Sun Apr 30 2023 00:00:00 GMT+0530 (India Standard Time)",
    description: "GSTR4",
  },
  {
    id: 73,
    timestamp: "Tue Apr 30 2024 00:00:00 GMT+0530 (India Standard Time)",
    description: "GSTR4",
  },
  {
    id: 73,
    timestamp: "Sun Dec 31 2023 00:00:00 GMT+0530 (India Standard Time)",
    description: "GSTR9",
  },
  {
    id: 74,
    timestamp: "Tue Dec 31 2024 00:00:00 GMT+0530 (India Standard Time)",
    description: "GSTR9",
  },
  {
    id: 75,
    timestamp: "Sun Dec 31 2023 00:00:00 GMT+0530 (India Standard Time)",
    description: "GSTRC",
  },
  {
    id: 76,
    timestamp: "Tue Dec 31 2024 00:00:00 GMT+0530 (India Standard Time)",
    description: "GSTRC",
  },
];
export { tds, roc, income_tax, gst };
