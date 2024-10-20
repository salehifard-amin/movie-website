import {  Dropdown, Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";

const ProfileDropdown = () => {
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
    <Dropdown menu={{ items: notifications }} trigger={["hover"]}>
        <Button type="text">
          <FontAwesomeIcon icon={faUser} className="fa-icon" color="white" />
        </Button>
    </Dropdown>
  );
};
export default ProfileDropdown;
