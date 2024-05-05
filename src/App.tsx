import GithubFilled from "@ant-design/icons/GithubFilled";
import { Button, Layout, Tabs, TabsProps } from "antd";
import s from "./App.module.css";
import { Developer } from "./developer";
import { Student } from "./student";
import { Teacher } from "./teacher";
import UserOutlined from "@ant-design/icons/lib/icons/UserOutlined";

const tabItems: TabsProps["items"] = [
  {
    key: "teacher",
    label: "Teacher",
    children: (
      <div className={s.app}>
        <Teacher />
      </div>
    ),
    icon: <UserOutlined />,
  },
  {
    key: "student",
    label: "Student",
    children: (
      <div className={s.app}>
        <Student />
      </div>
    ),
    icon: <UserOutlined />,
  },
  {
    key: "developer",
    label: "Developer",
    children: (
      <div className={s.app}>
        <Developer />
      </div>
    ),
    icon: <UserOutlined />,
  },
];

function App() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Layout.Content className={s.content}>
        <Tabs items={tabItems} style={{ height: "100%" }} centered />
      </Layout.Content>
      <Layout.Footer>
        <div className={s["source-link"]}>
          <Button
            type="link"
            size="small"
            icon={<GithubFilled />}
            href="https://github.com/mi-qacker/demo-edu"
            target="_blank"
          >
            Source code
          </Button>
        </div>
      </Layout.Footer>
    </Layout>
  );
}

export default App;
