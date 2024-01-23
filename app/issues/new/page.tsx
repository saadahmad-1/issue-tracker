"use client";

import { Button, TextArea, TextField, TextFieldRoot } from "@radix-ui/themes";
import React from "react";

const NewIssuePage = () => {
  return (
    <div className="max-w-xl space-y-3">
      <TextFieldRoot>
        <TextField.Input placeholder="Title" />
      </TextFieldRoot>
      <TextArea placeholder="Description" />
      <Button>Submmit New Issue</Button>
    </div>
  );
};

export default NewIssuePage;