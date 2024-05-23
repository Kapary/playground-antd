import React, { useEffect, useMemo, useState } from "react";

import {
  Button,
  Input,
  Layout,
  Table,
  TableColumnProps,
  Typography,
} from "antd";

import "./dashboard.css";
import { useDebounce, useDebouncedEffect } from "../utils";

type Props = {};

const { Search } = Input;

const firstNames = [
  "John",
  "Jane",
  "James",
  "Jennifer",
  "Jacob",
  "Jessica",
  "Jack",
  "Julia",
  "Joseph",
  "Jasmine",
];
const lastNames = [
  "Smith",
  "Johnson",
  "Williams",
  "Brown",
  "Jones",
  "Miller",
  "Davis",
  "Garcia",
  "Rodriguez",
  "Wilson",
];

const mockedUsers: UserProps[] = Array.from({ length: 100 }, (_, index) => {
  const lastName = lastNames[index % lastNames.length];
  const firstName = firstNames[index % firstNames.length];

  return {
    email: `${firstName
      .substring(0, 1)
      .toLocaleLowerCase()}${lastName.toLocaleLowerCase()}@acme.com`,
    firstName: firstName,
    lastName: lastName,
    id: `${index}`,
  };
});

interface UserProps {
  email: string;
  firstName: string;
  lastName: string;
  id: string;
}

const columnsSetup: TableColumnProps<UserProps>[] = [
  {
    title: "Name",
    key: "lastName",
    render: (text, record) => (
      <span>
        {record.firstName} {record.lastName}
      </span>
    ),
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Action",
    key: "action",
    width: 140,
    align: "right",
    render: (text, record) => (
      <Button type="default" onClick={() => {}}>
        Edit
      </Button>
    ),
  },
];

const Dashboard = (props: Props) => {
  const [isExportingUserAssginments, setIsExportingUserAssginments] =
    useState(false);
  const [isTableLoading, setIsTableLoading] = useState(false);

  const [searchPhrase, setSearchPhrase] = useState<string | undefined>(
    undefined
  );

  const debouncedSearchPhrase = useDebounce(searchPhrase, 300);

  const filteredUsers = useMemo(() => {
    return mockedUsers.filter((user) => {
      if (!debouncedSearchPhrase) {
        return true;
      }

      return (
        user.email.toLocaleLowerCase().includes(debouncedSearchPhrase) ||
        user.firstName.toLocaleLowerCase().includes(debouncedSearchPhrase) ||
        user.lastName.toLocaleLowerCase().includes(debouncedSearchPhrase)
      );
    });
  }, [mockedUsers, debouncedSearchPhrase]);

  const handleExportUserAssignments = () => {
    setIsExportingUserAssginments(true);

    setTimeout(() => {
      setIsExportingUserAssginments(false);
    }, 2000);
  };

  useEffect(() => {
    if (debouncedSearchPhrase) {
      setIsTableLoading(true);
    }
  }, [debouncedSearchPhrase]);

  useEffect(() => {
    if (isTableLoading) {
      setTimeout(() => {
        setIsTableLoading(false);
      }, 500);
    }
  }, [isTableLoading]);

  useEffect(() => {
    setIsTableLoading(true);
  }, []);

  //   const searchUsers = () => {
  //     setIsTableLoading(true);

  //     setTimeout(() => {
  //       setIsTableLoading(false);
  //     }, 300);
  //   };

  return (
    <>
      <div dir="vertical" className="layout">
        <Typography.Title level={2}>Users</Typography.Title>
        <div className="button-wrapper">
          <Button
            type="default"
            onClick={handleExportUserAssignments}
            loading={isExportingUserAssginments}
          >
            Export User Assignements
          </Button>
        </div>

        <Search
          placeholder="Search by email, first name or last name"
          onChange={(e) => setSearchPhrase(e.target.value)}
          value={searchPhrase}
        />
        <Table
          dataSource={filteredUsers}
          pagination={{ pageSize: 25 }}
          columns={columnsSetup}
          loading={isTableLoading}
          sticky
          scroll={{ y: "70vh" }}
          bordered
          //   style={{ overflowY: "auto" }}
        />
      </div>
    </>
  );
};

export default Dashboard;
