import { Modal } from "antd";
import { ModalBase } from "../components/ModalBase";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: "EditPermissionModal",
  component: ModalBase,
  // tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
    withPagination: { control: "withPagination" },
  },
};

export const EditPermissionModal = {
  args: {
    withPagination: true,
    mode: "table",
    modalTitle: "Edit permission",
    tableTitle: "Affected roles",
    tableSearchPlaceholder: "Search for roles",
  },
};
