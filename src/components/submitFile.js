import { Button } from "@material-ui/core";
import { useEffect, useState } from "react";
import FileUploadIcon from "@mui/icons-material/FileUpload";

export function InputSubmitType({ onSelect }, props) {

  const [file, setFile] = useState(null);


  const { jobId } = props
  console.log('props', jobId)
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
    formData.append("jobId", jobId);

    console.log('jobId', jobId)

    const inputFetch =
      await fetch('/api/users/application/' + jobId, {
        method: "POST",
        body: formData,
        headers: {
          //   "Content-Type": "multipart",
          "Authorization": localStorage.getItem("token")
        },
      });

    if (inputFetch.status === 400) {
      alert("There was an error processing your application. Please try again.");
    }

    if (inputFetch.status === 201) {
      alert("Application created successfully!");
      window.location = "/";
    }
  };

  return (
    <div>
      <input type={"file"} name="ficheiro-do-frontend" onChange={(e) => onFileSelect(e)} required />
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
