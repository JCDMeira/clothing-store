import React, { ReactNode } from "react";

// import { Container } from './styles';

type TitleProps = {
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: ReactNode;
};

export const Title: React.FC<TitleProps> = ({
  variant,
  children,
  ...props
}) => {
  const Component = variant;
  return <Component {...props}>{children}</Component>;
};
