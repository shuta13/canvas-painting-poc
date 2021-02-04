import { CSSProperties } from "react";
import styles from "./BaseButton.module.scss";
interface BaseButton {
  width: CSSProperties["width"];
  height: CSSProperties["height"];
  borderRadius: CSSProperties["borderRadius"];
  backgroundColor: CSSProperties["backgroundColor"];
  margin: CSSProperties["margin"];
  hasShadow: boolean;
}
export const BaseButton: React.FC<BaseButton> = (props) => {
  const {
    width,
    height,
    borderRadius,
    backgroundColor,
    hasShadow,
    margin,
  } = props;
  return (
    <button
      className={styles.wrap}
      style={{
        width: width,
        height: height,
        borderRadius: borderRadius,
        backgroundColor: backgroundColor,
        boxShadow: hasShadow ? "0 8px 16px 0 rgb(0 0 0 / 12%" : undefined,
        margin: margin,
      }}
    />
  );
};
