import React from "react";
import { IconButton, Tag } from ".";

interface Props {
  header: string;
  author: string;
  sampleText: string;
  tags: string[];
}

export const Card: React.FC<Props> = ({ ...props }: Props) => {
  return (
    <div className="mx-2 w-card max-h-96 shadow p-6 rounded">
      <div className="flex">
        {props.tags.map((tag, key) => {
          return (
            <div className="pr-3 pb-3" key={key}>
              <Tag text={tag} />
            </div>
          );
        })}
      </div>
      <h3 className="font-semibold text-3xl text-left">{props.header}</h3>
      <p className="text-gray-500 text-left text-sm">@{props.author}</p>
      <p className="text-base text-left">{props.sampleText}</p>
      <IconButton />
      <IconButton />
    </div>
  );
};
