import { Badge, Dropdown, Avatar , Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";

const NotificationDropdown = () => {


  const notifications = [
    {
      key: '1',
      label: 'Welcome to Movie Website',
      image: <img src="./images/2.jpg" />

    },
    {
      key: '2',
      label: 'You can create your list',
      image: <img src="./images/2.jpg" />

    },
    {
      key: '3',
      label: 'Friend request from Chandler Bing',
      image: <img src="./images/2.jpg" />
    },
  ];


  const items = [
    {
      key: 'title',
      label: <strong style={{cursor:"default"}}>Notifications</strong>,
      disabled: true, 
    },
    {
      type: 'divider',
    },
    ...notifications.map((notification) => ({
        key: notification.key,
        label: (
          <div>
            <Avatar src={notification.image} size={24} className="mr-8" />
            <span>{notification.label}</span>
          </div>
        ),
      })),
  ];
//pashmaaaaaaam
  return (
    <Dropdown menu={{ items }} trigger={['hover']}>
      <Badge count={notifications.length} offset={[-30, 0]}>
        <Button type="text">
          <FontAwesomeIcon icon={faBell} className="fa-icon" color="white"/>
        </Button>
      </Badge>
    </Dropdown>
  );
};

export default NotificationDropdown;
