import { Button } from "@material-ui/core";
import { useEffect } from "react";
import FileUploadIcon from "@mui/icons-material/FileUpload";

export function InputSubmitType({ onSelect }) {
  const onFileSelect = async (e) => {
    const formData = new FormData();

    formData.append(
      "ficheiro-do-frontend", //nome da chave/propriedade
      e.target.files[0] //o valor, neste caso o ficheiro
    );
    onSelect(formData);

    //Também é possivel adicionar o resto de um formulário ao formData,
    // basta adicionar outro par chave/valor.
  };

  // const onFileSubmit = async (e) => {
  //   const formData = new FormData();
  //   formData.append(
  //     "ficheiro-do-frontend", //nome da chave/propriedade
  //     e.target.files[0] //o valor, neste caso o ficheiro
  //   );

  //   // fetch("/api/users/applications", {
  //   //   method: "POST",
  //   //   body: formData,
  //   // });
  // };

  return (
    <div>
      <input type={"file"} onChange={(e) => onFileSelect(e)} required />
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
        onClick={() => {
          alert("Application Submited");
        }}
      >
        Submit
      </FileUploadIcon>
    </div>
  );
}
