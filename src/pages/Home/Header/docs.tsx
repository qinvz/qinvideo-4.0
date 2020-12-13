import React from "react";
import { Tooltip } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { Config } from "@/constants";
import styles from "./index.less";
import { getLang } from "@/locales";
export const Docs: React.FC = props => {
  const goToDocs = () => {
    window.open(Config.Base.docs);
  };
  return (
    <Tooltip placement="bottom" title={getLang("common.header.docs")}>
      <div className={`${styles.list} ${styles.small}`} onClick={goToDocs}>
        <QuestionCircleOutlined />
      </div>
    </Tooltip>
  );
};