import { Modal } from "antd";
import { ModalBase } from "../components/ModalBase";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: "ViewRoleModal",
  component: ModalBase,
  // tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
    withPagination: { control: "withPagination" },
  },
};

export const ViewRoleModal = {
  args: {
    withPagination: true,
    mode: "table",
    modalTitle: "View role",
    tableTitle: "Role permissions",
    tableSearchPlaceholder: "Search for permission",
  },
};
