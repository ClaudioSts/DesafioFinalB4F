import { Button } from "@material-ui/core";
import { useState } from "react";

export function InputSubmitType({ onSelect }, props) {

  const [file, setFile] = useState(null);

  
  const { companyID } = props

  const onFileSelect = async (e) => {    
    setFile(e.target.files[0])
  };

  const onFileSubmit = async (e) => {

    if(file === null){
      alert("Please select a file.");
      return;
    }
    
    const formData = new FormData();
    formData.append("file", file);
    formData.append("companyJobID", companyID);

    console.log("token", localStorage.getItem("token"))
    const inputFetch = 
      await fetch("/api/users/application", {
        method: "POST",
        body: formData,
        headers: {
          "Content-Type": "multipart/form-data;boundary=MyBoundary",
          "Authorization": localStorage.getItem("token")
        },
      });

    console.log(inputFetch.status);

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
      <Button
        type="Submit"
        name="SubmitCv"
        onClick={onFileSubmit}
      >
        Submit
      </Button>
    </div>
  );
}
