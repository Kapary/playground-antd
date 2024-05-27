import { Modal } from "antd";
import { ModalBase } from "../components/ModalBase";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: "ViewUserModal",
  component: ModalBase,
  // tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
    withPagination: { control: "withPagination" },
  },
};

export const ViewUserModal = {
  args: {
    withPagination: false,
    mode: "table",
    modalTitle: "View user",
    tableTitle: "User roles",
    // tableSearchPlaceholder: "Search for permission",
    tableRowsCount: 3,
    hideSearch: true,
  },
};
