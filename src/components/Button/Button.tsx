import { ReactNode } from "react";
import "./styles.css";

type ButtonProps = {
  classes: string;
  onClick?: (e: React.MouseEvent) => void;
  children: ReactNode;
  type?: "submit" | "reset" | "button";
};

const Button = ({ classes, onClick, children, type }: ButtonProps) => {
  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
