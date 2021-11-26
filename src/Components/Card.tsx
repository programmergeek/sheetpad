import React from "react";
import { IconButton, Tag } from ".";
import { Edit2 } from "@styled-icons/feather/Edit2";
import { CloseOutline } from "@styled-icons/evaicons-outline/CloseOutline";

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
      <IconButton>
        <Edit2 className="w-8 h-8 m-1" />
      </IconButton>
      <IconButton>
        <CloseOutline className="w-8 h-8 m-1" />
      </IconButton>
    </div>
  );
};
