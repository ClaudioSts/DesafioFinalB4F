import { Button } from "@material-ui/core";
<<<<<<< HEAD
import { useState } from "react";
export function InputSubmitType({ onSelect }, props) {
=======

import { useEffect, useState } from "react";
import FileUploadIcon from "@mui/icons-material/FileUpload";
>>>>>>> c29525b71b66743a0a57bcdaa3e59fc05a4af69b

export default function InputSubmitType(props) {
  const [file, setFile] = useState(null);

  const { jobId } = props
  const onFileSelect = async (e) => {
    setFile(e.target.files[0])
  };

  const onFileSubmit = async (e) => {

    if (file === null) {
      alert("Please select a file.");
      return;
    }

    const formData = new FormData();
    formData.append("ficheiro-do-frontend", file);
   

    const inputFetch =
      await fetch('/api/users/applications/' + jobId, {
        method: "POST",
        body: formData,
        headers: {
          //   "Content-Type": "multipart",
          "Authorization": localStorage.getItem("token")
        },
      });
      
    if (inputFetch.status === 400) {
      alert(
        "There was an error processing your application. Please try again."
      );
    }

    if (inputFetch.status === 201) {
      alert("Application created successfully!");
      window.location = "/";
    }
  };

  return (
    <div>
      <input
        type={"file"}
        name="ficheiro-do-frontend"
        onChange={(e) => onFileSelect(e)}
        required
      />
      <br />
      <br />
      <FileUploadIcon
        sx={{
          color: "#3E6ADD",
          size: "large",
          cursor: "pointer",
        }}
        type="Submit"
        name="SubmitCv"
        onClick={onFileSubmit}
      >
        Submit
      </FileUploadIcon>
    </div>
  );
}
