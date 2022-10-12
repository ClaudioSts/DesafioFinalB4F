import { Label } from "@mui/icons-material";
import { TextareaAutosize } from "@mui/material";
import { red } from "@mui/material/colors";
import { borderColor, color } from "@mui/system";
import { useState } from "react";
import Button from "./Button";

export default function JobPostForm() {
  const [data, setData] = useState({
    title: "",
    description: "",
    location: "",
  });

  const { title, description, location } = data;

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(data);

    const post = "/api/company";

    const answer = await fetch(post, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: data.title,
        description: data.description,
        location: data.location,
      }),
    });

    if (answer.status === 201) {
      const json = await answer.json();
      localStorage.setItem("token", json.token);
      localStorage.setItem("username", json.username);
      window.location = "/";
    } else {
      alert("Invalid credentials!");
    }
  };
  return (
    <div className="PostJob">
      <div>
        <h1 style={{ color: "#1976d2" }}>Post Job Form</h1>
      </div>
      <div>
        <form style={{ fontSize: "25px" }} onSubmit={submitHandler}>
          Title:
          <br />
          <TextareaAutosize
            onChange={changeHandler}
            style={{ width: "150%", fontSize: "20px" }}
            name="title"
            type="text"
            placeholder="Title for Job"
            value={title}
            required
          />
          <br />
          <br />
          Description:
          <br />
          <TextareaAutosize
            onChange={changeHandler}
            style={{ width: "150%", fontSize: "20px" }}
            name="description"
            type="text"
            placeholder="Description for Job"
            required
            value={description}
          />
          <br />
          <br />
          Location:
          <br />
          <TextareaAutosize
            onChange={changeHandler}
            style={{ width: "150%", fontSize: "20px" }}
            name="location"
            type="text"
            placeholder="Location for Job"
            required
            value={location}
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
