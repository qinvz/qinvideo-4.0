import React from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

import { Docs } from "./docs";
import { Language } from "./language";
import { UserInfo } from "./userInfo";
import { Message } from "./message";
import styles from "./index.less";

interface PropsType {
  setCollapse: (collapse: boolean) => void;
  collapse: boolean;
}

const Header: React.FC<PropsType> = props => {
  const { collapse, setCollapse } = props;
  return (
    <div className={styles.wrapper}>
      <div className={styles.list} onClick={() => setCollapse(!collapse)}>
        {collapse ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </div>
      <div className={styles.right}>
        <Docs></Docs>
        <Message></Message>
        <UserInfo></UserInfo>
        <Language></Language>
      </div>
    </div>
  );
};

export default Header;
