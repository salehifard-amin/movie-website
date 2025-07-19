import { Badge, Dropdown, Avatar, Button } from "antd";
import { BellOutlined } from "@ant-design/icons";

const NotificationDropdown = ({ className }) => {
  const notifications = [
    {
      key: "1",
      label: "Welcome to Movie Website",
      image: "./images/2.jpg",
    },
    {
      key: "2",
      label: "You can create your list",
      image: "./images/2.jpg",
    },
    {
      key: "3",
      label: "Friend request from Chandler Bing",
      image: "./images/2.jpg",
    },
  ];

  const items = [
    {
      key: "title",
      label: <strong style={{ cursor: "default" }}>Notifications</strong>,
      disabled: true,
    },
    {
      type: "divider",
    },
    ...notifications.map((item) => ({
      key: item.key,
      label: (
        <div>
          <Avatar src={item.image} size={24} className="mr-8" />
          <span>{item.label}</span>
        </div>
      ),
    })),
  ];

  return (
    <Dropdown className={className} menu={{ items }} trigger={["hover"]}>
      <Badge count={notifications.length} offset={[-15, 0]}>
        <Button type="text">
          <BellOutlined style={{ color: "#fff", fontSize: "20px" }} />
        </Button>
      </Badge>
    </Dropdown>
  );
};

export default NotificationDropdown;
