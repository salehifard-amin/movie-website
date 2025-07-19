import {  Dropdown, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";

const ProfileDropdown = ( {className} ) => {
  const notifications = [
    {
      key: "1",
      label: "My profile",
    },
    {
      key: "2",
      label: "Sign Out",
    },
  ];

  return (
    <Dropdown className={className} menu={{ items: notifications }} trigger={["hover"]}>
        <Button type="text">
        <UserOutlined style={{color:"#fff",fontSize:"20px"}} />
        </Button>
    </Dropdown>
  );
};
export default ProfileDropdown;
