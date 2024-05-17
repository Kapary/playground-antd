import React, { useEffect, useState } from "react";
import { Transfer, Modal, Typography, Descriptions, Layout } from "antd";
import "antd/dist/antd.css";
import { TransferDirection } from "antd/lib/transfer";

import "./transferDemo.css";

interface RecordType {
  key: string;
  title: string;
  description: string;
  chosen: boolean;
}

export const TransferDemo = () => {
  const [mockData, setMockData] = useState<RecordType[]>([]);
  const [targetKeys, setTargetKeys] = useState<string[]>([]);

  const getMock = () => {
    const tempTargetKeys = [];
    const tempMockData = [];
    for (let i = 0; i < 20; i++) {
      const data = {
        key: i.toString(),
        title: `role${i + 1}`,
        description: `description of role${i + 1}`,
        chosen: i % 2 === 0,
      };
      if (data.chosen) {
        tempTargetKeys.push(data.key);
      }
      tempMockData.push(data);
    }
    setMockData(tempMockData);
    setTargetKeys(tempTargetKeys);
  };

  useEffect(() => {
    getMock();
  }, []);

  const filterOption = (inputValue: string, option: RecordType) =>
    option.description.indexOf(inputValue) > -1;

  const handleChange = (newTargetKeys: string[]) => {
    setTargetKeys(newTargetKeys);
  };

  const handleSearch = (dir: TransferDirection, value: string) => {
    console.log("search:", dir, value);
  };

  return (
    <Modal visible open width={600} title="Edit User">
      {/* <Typography.Text>Edit user roles</Typography.Text> */}
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
        Edit user roles
      </Typography.Title>

      <div className="transfer-labels-wrapper">
        <Typography.Text className="transfer-label">
          Available roles
        </Typography.Text>
        <Typography.Text className="transfer-label">
          Assigned roles
        </Typography.Text>
      </div>

      <Transfer
        dataSource={mockData}
        showSearch
        filterOption={filterOption}
        targetKeys={targetKeys}
        onChange={handleChange}
        onSearch={handleSearch}
        render={(item) => item.title}
        // titles={["Available roles", "Granted roles"]}
        // style={{ width: "100%", height: 400 }}
        listStyle={{ width: "50%", height: 400 }}
        showSelectAll={false}
        locale={{
          itemUnit: "Role",
          itemsUnit: "Roles",
          searchPlaceholder: "Search Roles",
        }}
      />
    </Modal>
  );
};
