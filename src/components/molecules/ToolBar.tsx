import { BaseButton } from "../atoms/BaseButton";
import styles from "./ToolBar.module.scss";

export const ToolBar: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.tool_box}>
        <BaseButton
          width={32}
          height={32}
          borderRadius="8px"
          backgroundColor="#ffeb94"
          hasShadow={false}
          margin="0 8px"
        />
        <BaseButton
          width={32}
          height={32}
          borderRadius="8px"
          backgroundColor="#94ffe2"
          hasShadow={false}
          margin="0 8px"
        />
        <BaseButton
          width={32}
          height={32}
          borderRadius="8px"
          backgroundColor="#d094ff"
          hasShadow={false}
          margin="0 8px"
        />
      </div>
      <BaseButton
        width={48}
        height={48}
        borderRadius="50%"
        backgroundColor="#ffffff"
        hasShadow={true}
        margin="0"
      />
    </div>
  );
};
