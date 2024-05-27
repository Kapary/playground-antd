import { Modal } from "antd";
import { ModalBase } from "../components/ModalBase";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: "EditRoleUsersModal",
  component: ModalBase,
  // tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
    withPagination: { control: "withPagination" },
  },
};

export const EditRoleUsersModal = {
  args: {
    withPagination: true,
    mode: "transfer",
    transferTitle: "Edit role users",
    transferFromLabel: "All users",
    transferToLabel: "Users with {roleName} role",
    modalTitle: "Edit role users",
    transferItemUnit: "user",
    transferItemsUnit: "users",
    transferSearchPlaceholder: "Search for users",
    mockedDataName: "user",
    mockedDataDescription: "UserName",
  },
};
