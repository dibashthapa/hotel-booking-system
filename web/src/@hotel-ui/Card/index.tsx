import React from "react";
import { Wrapper, Header, Content, Footer } from "./index.style";

interface CardProps {
  title: string;
  className: string;
  header?: React.FC;
  content?: React.FC;
  children: React.ReactNode;
  footer: string;
}

export const Card: React.FC<CardProps> = ({
  title,
  className,
  header,
  content,
  children,
  footer,
}) => {
  return (
    <Wrapper className={className}>
      <Header>{header ? header : <h2>{title}</h2>}</Header>
      <Content>{content ? content : children}</Content>
      {footer && <Footer>{footer}</Footer>}
    </Wrapper>
  );
};
