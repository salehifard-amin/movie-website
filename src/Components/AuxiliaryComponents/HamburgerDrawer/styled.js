import { Drawer } from "antd";
import styled from "styled-components";

export const DrawerStyled = styled(Drawer)`
.ant-drawer-content-wrapper .ant-drawer-content{
  color: blue;

}
  .drawer-footer {
    font-size: 14px;
    font-weight: 600;
    opacity: 0.3;
    text-align: center;
  }
  ul {
    padding-top: 25px;
    li {
      font-size: 20px;
      font-weight: 700;
      margin-bottom: 30px;
      text-align: center;
    }
  }
`;