import { ReactNode } from "react";

type ButtonProps = {
  classes: string;
  onClick: (e: React.MouseEvent) => void;
  children: ReactNode;
};

const Button = ({ classes, onClick, children }: ButtonProps) => {
  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
