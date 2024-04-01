"use client";

import { Button, Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import React from "react";

interface Props {
  title: string;
  number: number;
}

export const ListCard = ({ title, number }: Props) => {
  return (
    <Card className="min-w-[330px]" shadow="md">
      <CardHeader>
        <p className="w-full text-center font-medium font-mono">
          {title}
          <span className="font-sans w-full text-right text-xs text-gray-600 dark:text-gray-300">
            {" "}
            ({number} words)
          </span>
        </p>
      </CardHeader>
      <Divider />
      <CardBody>
        <div className="flex justify-center w-full">
          <Button
            className="w-[250px] text-gray-800 dark:text-slate-100 dark:bg-indigo-900"
            color="primary"
            variant="flat"
          >
            See words
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};
