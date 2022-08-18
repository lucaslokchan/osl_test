import Post from "./post";
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
      { value: "CHN", label: "China", trigger: "select" },
      { value: "SGP", label: "Singapore", trigger: "select" },
      { value: "GBR", label: "United Kingdom", trigger: "select" },
      { value: "USA", label: "United States", trigger: "select" },
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
      {
        value: "KYC Onboarding",
        label: "KYC Onboarding",
        trigger: "prompt_question",
      },
      {
        value: "Funding features",
        label: "Funding features",
        trigger: "prompt_question",
      },
      {
        value: "Trading features",
        label: "Trading features",
        trigger: "prompt_question",
      },
      {
        value: "Custody features",
        label: "Custody features",
        trigger: "prompt_question",
      },
      {
        value: "Fee schedule",
        label: "Fee schedule",
        trigger: "prompt_question",
      },
      { value: "Security", label: "Security", trigger: "prompt_question" },
      { value: "Others", label: "Others", trigger: "prompt_question" },
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
    trigger: "submitted",
  },
  { id: "submitted", component: <Post />, asMessage: true, end: true },
];
