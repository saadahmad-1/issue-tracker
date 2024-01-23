"use client";

import { Button, TextField, TextFieldRoot } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const NewIssuePage = () => {
  return (
    <div className="max-w-xl space-y-3">
      <TextFieldRoot>
        <TextField.Input placeholder="Title" />
      </TextFieldRoot>
      <SimpleMDE placeholder="Description" />
      <Button>Submmit New Issue</Button>
    </div>
  );
};

export default NewIssuePage;
