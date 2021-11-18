import React from "react";

interface Props {
  header: string;
  author: string;
  sampleText: string;
  tags: string[];
}

export const Card: React.FC<Props> = ({ ...props }: Props) => {
  return <div></div>;
};
