import Dashboard from "./Dashboard";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: "Example/Dashboard",
  component: Dashboard,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
    withPagination: { control: "withPagination" },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
// export const Primary = {
//   args: {
//     primary: true,
//     label: 'Button',
//   },
// };

// export const Secondary = {
//   args: {
//     label: 'Button',
//   },
// };

// export const Large = {
//   args: {
//     size: 'large',
//     label: 'Button',
//   },
// };

// export const Small = {
//   args: {
//     size: 'small',
//     label: 'Button',
//   },
// };

export const DashboardDemo = {};

// export const TransferDemoWithPagination = {
//   args: {
//     withPagination: true,
//   },
// };
