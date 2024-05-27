import { Modal } from "antd";
import { ModalBase } from "../components/ModalBase";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: "EditUserModal",
  component: ModalBase,
  // tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
    withPagination: { control: "withPagination" },
  },
};

export const EditUserModal = {
  args: {
    withPagination: true,
    mode: "transfer",
    transferTitle: "Edit user roles",
    transferFromLabel: "Roles",
    transferToLabel: "User roles",
    modalTitle: "Edit user",
  },
};
