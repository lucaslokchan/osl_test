var re = new RegExp("[a-zA-Z0-9_-]");
export default [
  {
    id: "start",
    message: "What is your name?",
    trigger: "input_name",
  },
  {
    id: "input_name",
    user: true,
    validator: (value) => {
      if (re.test(value) == false) {
        return "Alphanumeric and - _";
      }
      return true;
    },
    trigger: "greet",
  },
  {
    id: "greet",
    message: "Hi {previousValue}, nice to meet you, where are you located?",
    trigger: "location",
  },
  {
    id: "location",
    options: [
      { value: 1, label: "China", trigger: "select" },
      { value: 2, label: "Singapore", trigger: "select" },
      { value: 3, label: "United Kingdom", trigger: "select" },
      { value: 3, label: "United States", trigger: "select" },
    ],
  },

  {
    id: "select",
    message: "Please select the category of your question.",
    trigger: "category",
  },
  {
    id: "category",
    options: [
      { value: 1, label: "KYC onboarding", trigger: "prompt_question" },
      { value: 2, label: "Funding features", trigger: "prompt_question" },
      { value: 3, label: "Trading features", trigger: "prompt_question" },
      { value: 4, label: "Custody features", trigger: "prompt_question" },
      { value: 5, label: "Fee schedule", trigger: "prompt_question" },
      { value: 6, label: "Security", trigger: "prompt_question" },
      { value: 7, label: "Others", trigger: "prompt_question" },
    ],
  },
  {
    id: "prompt_question",
    message: "Please state your question.",
    trigger: "input_question",
  },
  {
    id: "input_question",
    user: true,
    trigger: "end",
  },
  {
    id: "end",
    message: "Thanks, we will contact you shortly.",
    end: true,
  },
];
