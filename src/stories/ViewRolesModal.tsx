import React, { useEffect, useState } from "react";
import {
  Transfer,
  Modal,
  Typography,
  Descriptions,
  Layout,
  Table,
  TableColumnProps,
  ModalProps,
  Input,
} from "antd";
import "antd/dist/antd.css";
import { TransferDirection } from "antd/lib/transfer";

import "./transferDemo.css";

const { Search } = Input;

interface RecordType {
  key: string;
  title: string;
  description: string;
  chosen: boolean;
}

interface TransferDemoProps {
  withPagination?: boolean;
}

interface ViewRolesModalProps extends ModalProps {
  isVisible?: boolean;
}

const columnsSetup: TableColumnProps<RecordType>[] = [
  {
    title: "Role",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
  },
];

export const ViewRolesModal = ({
  isVisible,
  onCancel,
}: ViewRolesModalProps) => {
  const [mockData, setMockData] = useState<RecordType[]>([]);

  const getMock = () => {
    const tempTargetKeys = [];
    const tempMockData = [];
    for (let i = 0; i < 5; i++) {
      const data = {
        key: i.toString(),
        title: `role${i + 1}`,
        description: `description of role${i + 1}`,
        chosen: i % 5 === 0,
      };
      if (data.chosen) {
        tempTargetKeys.push(data.key);
      }
      tempMockData.push(data);
    }
    setMockData(tempMockData);
  };

  useEffect(() => {
    getMock();
  }, []);

  const handleSearch = (dir: TransferDirection, value: string) => {
    console.log("search:", dir, value);
  };

  return (
    <Modal
      visible={isVisible}
      open={isVisible}
      width={600}
      title="View User"
      onCancel={onCancel}
    >
      <Descriptions
        title="User Info"
        column={1}
        bordered
        style={{ marginBottom: "1rem" }}
      >
        <Descriptions.Item label="User Name">John Doe</Descriptions.Item>
        <Descriptions.Item label="User Email">jdoe@amh.com</Descriptions.Item>
      </Descriptions>

      <Typography.Title level={5} style={{ marginBottom: "1rem" }}>
        User roles
      </Typography.Title>
      <Search
        placeholder="Search for role - is this needed?"
        style={{ marginBottom: "1rem" }}
        size="large"
      />
      <Table dataSource={mockData} columns={columnsSetup} />
    </Modal>
  );
};
