import { ReactNode, useEffect, useRef } from "react";

interface RenderCounterProps {
  children: ReactNode;
}

const RenderCounter = ({ children }: RenderCounterProps) => {
  const counter = useRef(0);

  useEffect(() => {
    counter.current = counter.current + 1;
    console.log(counter.current);
  });

  return <>{children}</>;
};

export default RenderCounter;
