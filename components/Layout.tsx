import React, { ReactNode } from "react";
import { styled } from "@styles";

const Root = styled("div", {
  p: "$3",
});

interface Props {
  children?: ReactNode;
}

export const Layout = ({ children }: Props) => <Root>{children}</Root>;
