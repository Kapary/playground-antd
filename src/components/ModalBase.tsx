import React, { useEffect, useState } from "react";
import {
  Descriptions,
  Modal,
  ModalProps,
  Table,
  TableColumnProps,
  Typography,
} from "antd";

import "./modalBase.css";
import Transfer, { TransferDirection } from "antd/lib/transfer";
import Search from "antd/lib/transfer/search";

export interface ModalBaseProps extends ModalProps {
  withPagination?: boolean;
  transferFromLabel?: string;
  transferToLabel?: string;
  transferItemUnit?: string;
  transferItemsUnit?: string;
  transferSearchPlaceholder?: string;
  tableSearchPlaceholder?: string;
  tableTitle?: string;
  columnsSetup: any;
  modalTitle?: string;
  withDescriptions?: boolean;
  transferTitle?: string;
  noChangesHere?: boolean;
  mode: "transfer" | "table";
  tableRowsCount?: number;
  hideSearch?: boolean;
  mockedDataName?: string;
  mockedDataDescription?: string;
}

interface RecordType {
  key: string;
  title: string;
  description: string;
  chosen: boolean;
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

export const ModalBase = ({
  noChangesHere = true,
  mockedDataName = "role",
  mockedDataDescription = "description of role",
  ...props
}: ModalBaseProps) => {
  const [mockData, setMockData] = useState<RecordType[]>([]);
  const [targetKeys, setTargetKeys] = useState<string[]>([]);

  const getMock = () => {
    const tempTargetKeys = [];
    const tempMockData = [];
    for (let i = 0; i < 30; i++) {
      const data = {
        key: i.toString(),
        title: `${mockedDataName}${i + 1}`,
        description: `${mockedDataDescription} ${i + 1}`,
        chosen: i % 5 === 0,
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
    <Modal
      visible
      open
      width={800}
      title={props.modalTitle || "Edit User"}
      okText="Save"
    >
      {/* <Typography.Text>Edit user roles</Typography.Text> */}

      {noChangesHere ? (
        <p className="no-changes">No changes in this section</p>
      ) : null}

      {props.withDescriptions && !noChangesHere ? (
        <Descriptions
          title="User Info"
          column={1}
          bordered
          style={{ marginBottom: "1rem" }}
        >
          <Descriptions.Item label="User Name">John Doe</Descriptions.Item>
          <Descriptions.Item label="User Email">jdoe@amh.com</Descriptions.Item>
        </Descriptions>
      ) : null}

      {props.mode === "transfer" ? (
        <>
          <Typography.Title level={5} style={{ marginBottom: "1rem" }}>
            {props.transferTitle || "Edit user roles"}
          </Typography.Title>
          <div className="transfer-labels-wrapper">
            <Typography.Text className="transfer-label">
              {props.transferFromLabel || "Available roles"}
            </Typography.Text>
            <Typography.Text className="transfer-label">
              {props.transferToLabel || "Assigned roles"}
            </Typography.Text>
          </div>
          <Transfer
            dataSource={mockData}
            showSearch
            filterOption={filterOption}
            targetKeys={targetKeys}
            onChange={handleChange}
            onSearch={handleSearch}
            render={(item) => `${item.title} - ${item.description}`}
            // titles={["Available roles", "Granted roles"]}
            // style={{ width: "100%", height: 400 }}
            listStyle={{ width: "50%", height: 400 }}
            showSelectAll={false}
            locale={{
              itemUnit: props.transferItemUnit || "Role",
              itemsUnit: props.transferItemsUnit || "Roles",
              searchPlaceholder:
                props.transferSearchPlaceholder || "Search Roles",
            }}
            pagination={
              props.withPagination
                ? {
                    pageSize: 10,
                  }
                : undefined
            }
          />
        </>
      ) : (
        <>
          <Typography.Title level={5} style={{ marginBottom: "1rem" }}>
            {props.tableTitle || "User Roles"}
          </Typography.Title>
          {!props.hideSearch && (
            <div style={{ marginBottom: "1rem" }}>
              <Search
                placeholder={props.tableSearchPlaceholder || "Search for role"}
                size="large"
              />
            </div>
          )}

          <Table
            dataSource={
              props.tableRowsCount
                ? mockData.slice(0, props.tableRowsCount)
                : mockData
            }
            columns={props.columnsSetup || columnsSetup}
            pagination={!props.withPagination ? false : undefined}
            size="small"
          />
        </>
      )}
    </Modal>
  );
};
