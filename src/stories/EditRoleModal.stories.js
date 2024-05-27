import { Modal } from "antd";
import { ModalBase } from "../components/ModalBase";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: "EditRoleModal",
  component: ModalBase,
  // tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
    withPagination: { control: "withPagination" },
  },
};

export const EditRoleModal = {
  args: {
    withPagination: true,
    mode: "transfer",
    transferTitle: "Edit role permissions",
    transferFromLabel: "Permissions",
    transferToLabel: "This role permissions",
    modalTitle: "Edit role",
  },
};
