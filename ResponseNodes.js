import { DetailedDefinitionOfCrime, buildPositiveRelationship, hasLethalMeans, monitoringNote, noLethalMeans, reportingCrimeNote, studentMentalState } from "./Resources.js";

const ResponseNodes = {
  0: {
    text: "Was a serious crime commited?", 
    options: [
      {text: "No", next: 5},
      {text: "Unsure", next: 4},
      {text: "Yes", next: 1}, 
    ], 
    resources: []
  },
  1: {
    text: "Call 911 for an immediate response (also notify the Intervention Officer).",
    options: [
      {text: "Back", next: 0},
      {text: "Next", next: 2}
    ],
    resources: []
  },
  2: {
    text: "Law Enforcemnet (LE) will determine a response. They have an obligation to let the school know if the student has been determined to be dangerous.",
    options: [
      {text: "Back", next: 1},
      {text: "Next", next: 3}
    ],
    resources: []
  },
  3: {
    text: "If the LE has chosen an informal response and the school is still concerned, the school may appeal to the District Attorney.",
    options: [
      {text: "Back", next: 2},
      {text: "Next", next: 45},
    ],
    resources: []
  },
  4: {
    text: "Call 911 if in doubt, or see below for detailed definition of crimes.",
    options: [
      {text: "Back", next: 0},
      {text: "Next", next: 2}
    ],
    resources: [
      ...DetailedDefinitionOfCrime
    ]
  },
  5: {
      text: "Is there an immediate, viable threat to harm self or others?",
      options: [
        {text: "Back", next: 0},
        {text: "Yes", next: 6},
        {text: "No", next: 10},
      ],
      resources: []
    },
  6: {
    text: "Call 911 for an immediate response (also notify the Intervention Officer).",
    options: [
      {text: "Back", next: 5},
      {text: "Next", next: 7}
    ],
    resources: []
  },
  7: {
    text: "Do they have lethal means on their person?",
    options: [
      {text: "Back", next: 6},
      {text: "Yes", next: 8},
      {text: "No", next: 9}
    ],
    resourcs: []
  },
  8: {
    text: hasLethalMeans,
    options: [
      {text: "Back", next: 7},
      {text: "Next", next: 19}
    ],
    resources: []
  },
  9: {
    text: noLethalMeans,
    options: [
      {text: "Back", next: 7},
      {text: "Next", next: 19}
    ],
    resources: []
  },
  10: {
    text: "Is there a need for some level of immediate response?",
    options: [
      {text: "Back", next: 5},
      {text: "Yes", next: 11},
      {text: "No", next: 14}
    ],
    resources: []
  },
  11: {
    text: "Is the student under the influence?",
    options: [
      {text: "Back", next: 10},
      {text: "Yes", next: 12},
      {text: "No", next: 15}
    ],
    resources: []
  },
  12: {
    text: "Contact the Intervention Officer and/or the TCOE Nurse.",
    options: [
      {text: "Back", next: 11},
      {text: "Next", next: 13},
    ],
    resources: []
  },
  13: {
    text: "Follow District Policy for a student under the influence (See AR 5144.1, Suspension And Explulsion/Due Process, and/or Education Code 48900(c))",
    options: [
      {text: "Back", next: 12},
    ],
    resources: []
  },
  14: {
    text: buildPositiveRelationship,
    options: [
      {text: "Back", next: 10}
    ],
    resources: []
  },
  15: {
    text: studentMentalState,
    options: [
      {text: "Back", next: 11},
      {text: "Yes", next: 16},
      {text: "No", next: 14}
    ]
  },
  16: {
    text: "Utilize a threat assessment screener. Does the screener indicate a viable threat?",
    options: [
      {text: "Back", next: 15},
      {text: "Yes", next: 17},
      {text: "No", next: 18}
    ],
    resources: []
  },
  17: {
    text: "Contact the TCOE front desk (530) 623-2861 to deploy the Crisis Response Team or if after hours, contact Trinity Co Behavioral Health through the Crisis Line at (530) 623-5708.",
    options: [
      {text: "Back", next: 16},
      {text: "Next", next: 19},
    ]
  },
  18: {
    text: "Call parents/guardians. Make sure they are aware of the behavior and are seeking further assistance.",
    options: [
      {text: "Back", next: 16},
    ]
  },
  19: {
    text: "Referral to Behavioral Health Crisis Team (530) 623-5708.",
    options: [
      {text: "Next", next: 20},
    ],
    resources: []
  },
  20: {
    text: "BH Crisis Responds and conducts a verbal risk assesment.",
    options: [
      {text: "Back", next: 19},
      {text: "Child Is Safe", next: 21},
      {text: "Child Is Not Safe", next: 23},
    ],
    resources: []
  },
  21: {
    text: "Behavioral health obtains Consent and Release of Information.",
    options: [
      {text: "Back", next: 20},
      {text: "Next", next: 22},
    ],
    resources: []
  },
  22: {
    text: "Child Returns to School/Family.",
    options: [
      {text: "Back", next: 21},
      {text: "Next", next: 34},
    ],
    resources: []
  },
  23: {
    text: "Behavioral health obtains Consent and Release of Information.",
    options: [
      {text: "Back", next: 20},
      {text: "Next", next: 24},
    ],
    resources: []
  },
  24: {
    text: "Child is transported to E.R. for medical clearance.",
    options: [
      {text: "Back", next: 23},
      {text: "Medically Cleared", next: 26},
      {text: "Not Medically Cleared", next: 25},
    ],
    resources: []
  },
  25: {
    text: "Child Returns to Parents Responsibility.",
    options: [
      {text: "Back", next: 24},
      {text: "Next", next: 34},
    ],
    resources: []
  },
  26: {
    text: "Behavioral Health 5150 Determination",
    options: [
      {text: "Back", next: 25},
      {text: "Next", next: 27},
    ],
    resources: []
  },
  27: {
    text: "5150 Hospitalization 72 hour hold.",
    options: [
      {text: "Back", next: 26},
      {text: "Next", next: 28},
    ],
    resources: []
  },
  28: {
    text: "Behavioral Health secures placement and transports client to appropriate facility.",
    options: [
      {text: "Back", next: 27},
      {text: "Next", next: 29},
    ],
    resources: []
  },
  29: {
    text: "After 72 hours was client discharged?",
    options: [
      {text: "Back", next: 28},
      {text: "Yes", next: 30},
      {text: "No", next: 33},
    ],
    resources: []
  },
  30: {
    text: "Behavioral Health transports client home.",
    options: [
      {text: "Back", next: 29},
      {text: "Next", next: 31},
    ],
    resources: []
  },
  31: {
    text: "Behavioral Health develops follow up plan & notifies school of plan.",
    options: [
      {text: "Back", next: 30},
      {text: "Next", next: 32},
    ],
    resources: []
  },
  32: {
    text: "Behavioral Health provides aftercare and ongoing treatment as needed.",
    options: [
      {text: "Back", next: 31},
      {text: "Next", next: 34},
    ],
    resources: []
  },
  33: {
    text: "Facilty obtains court order to hold client fo 14 days. Can be extended to 30 days.",
    options: [
      {text: "Back", next: 32},
      {text: "Next", next: 30},
    ],
    resources: []
  },
  34: {
    text: "Student returns to school after Behavioral Health Intervention.",
    options: [
      {text: "Next", next: 35},
    ],
    resources: []
  },
  35: {
    text: "Do you know ahead of time that the student is returning to school?",
    options: [
      {text: "Back", next: 34},
      {text: "Yes", next: 36},
      {text: "No", next: 39},
    ],
    resources: []
  },
  36: {
    text: "Schedule a short meeting before student returns to class (if needed, schedule an IEP).",
    options: [
      {text: "Back", next: 35},
      {text: "Next", next: 37},
    ],
    resources: []
  },
  37: {
    text: "Is a parent(s) available to meet? Or is the student 18?",
    options: [
      {text: "Back", next: 36},
      {text: "Yes", next: 38},
      {text: "No", next: 40},
    ],
    resources: []
  },
  38: {
    text: "Hold the meeting and if needed, ask parent(s) to sign a Release of Information Form (ROI) as well as a Consent to Search Form that can include student, student belongings and even the home if needed. Consider having the student sign the consent form as well.",
    options: [
      {text: "Back", next: 37},
      {text: "Next", next: 40},
    ],
    resources: []
  },
  39: {
    text: "Find student in class and ask to have a meeting.",
    options: [
      {text: "Back", next: 35},
      {text: "Next", next: 40},
    ],
    resources: []
  },
  40: {
    text: "Assure the student that you are there to support them and will work hard to maintain their privacy.",
    options: [
      {text: "Back", next: 39},
      {text: "Next", next: 41},
    ],
    resources: []
  },
  41: {
    text: "Try to get parent(s) to sign BHS Consent and Release of Information Form, and if successful, request a copy of the student's Safety Plan from Behavioral Health & follow up with students based on the plan recommendations.",
    options: [
      {text: "Back", next: 40},
      {text: "Next", next: 42},
    ],
    resources: []
  },
  42: {
    text: "Create a reentry plan based on their BHS Safety Plan if possible. If needed, schedule an IEP. Make sure they have continued support and/or counseling based on their needs.",
    options: [
      {text: "Back", next: 41},
      {text: "Next", next: 43},
    ],
    resources: []
  },
  43: {
    text: "Make sure their required school work is waived during the time away if applicable.",
    options: [
      {text: "Back", next: 42},
      {text: "Next", next: 44},
    ],
    resources: []
  },
  44: {
    text: monitoringNote,
    options: [
      {text: "Back", next: 43},
    ],
    resources: []
  },
  45: {
    text: reportingCrimeNote,
    options: [
      {text: "Back", next: 3},
    ],
    resources: []
  }
};


export {ResponseNodes}
