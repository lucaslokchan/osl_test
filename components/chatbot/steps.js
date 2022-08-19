import Post from "./post";
var re = new RegExp("^[w\\-s]+$");
export default [
  {
    id: "start",
    message: "What is your name?",
    trigger: "name",
  },
  {
    id: "name",
    user: true,
    validator: (value) => {
      if (re.test(value) == false) {
        return "Only alphanumeric, underscore and dash characters are permitted.";
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
        value: "Funding Features",
        label: "Funding Features",
        trigger: "prompt_question",
      },
      {
        value: "Trading Features",
        label: "Trading Features",
        trigger: "prompt_question",
      },
      {
        value: "Custody Features",
        label: "Custody Features",
        trigger: "prompt_question",
      },
      {
        value: "Fee Schedule",
        label: "Fee Schedule",
        trigger: "prompt_question",
      },
      { value: "Security", label: "Security", trigger: "prompt_question" },
      { value: "Others", label: "Others", trigger: "prompt_question" },
    ],
  },
  {
    id: "prompt_question",
    message: "Please state your question.",
    trigger: "question",
  },
  {
    id: "question",
    user: true,
    validator: (value) => {
      if (value.length >= 200) {
        return "Maximum character count is 200.";
      }
      return true;
    },
    trigger: "submitted",
  },
  {
    id: "end",
    message: "Thanks, we will contact you shortly.",
    trigger: "submitted",
  },
  { id: "submitted", component: <Post />, asMessage: true, end: true },
];
