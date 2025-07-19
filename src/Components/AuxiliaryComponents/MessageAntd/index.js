import { message } from "antd";

const MessageAntd = ({ children}) => {
  const [messageApi, contextHolder] = message.useMessage();
  const showAlert = () => {
    messageApi.info("This is a Demo version");
  };
  return (
    <>
      {contextHolder}
      {children(showAlert)}
    </>
  );
};
export default MessageAntd;
