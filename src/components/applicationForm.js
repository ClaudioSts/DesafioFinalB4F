import { Label } from "@mui/icons-material";
import { TextareaAutosize } from "@mui/material";
import { red } from "@mui/material/colors";
import { borderColor, color } from "@mui/system";
import Button from "./Button";

export default function AppForm() {
  return (
    <div className="PostJob">
      <div>
        <h1 style={{ color: "#1976d2" }}>Post Job Form</h1>
      </div>
      <div>
        <form style={{ fontSize: "25px" }}>
          Title:
          <br />
          <TextareaAutosize
            style={{ width: "150%", fontSize: "20px" }}
            name="title"
            type="text"
            placeholder="Title for Job"
            required
          />
          <br />
          <br />
          Description:
          <br />
          <TextareaAutosize
            style={{ width: "150%", fontSize: "20px" }}
            name="title"
            type="text"
            placeholder="Description for Job"
            required
          />
          <br />
          <br />
          Location:
          <br />
          <TextareaAutosize
            style={{ width: "150%", fontSize: "20px" }}
            name="title"
            type="text"
            placeholder="Location for Job"
            required
          />
          <br />
          <br />
          <button
            class="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedInherit MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-colorInherit MuiButton-root MuiButton-outlined MuiButton-outlinedInherit MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-colorInherit css-x7bzdv-MuiButtonBase-root-MuiButton-root"
            style={{
              minWidth: "200px",
              color: "#1976d2",
              borderColor: "#1976d2",
            }}
            type="submit"
          >
            Post
          </button>
        </form>
      </div>
    </div>
  );
}
