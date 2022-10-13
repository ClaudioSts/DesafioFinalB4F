import { Label } from "@mui/icons-material";
import { TextareaAutosize } from "@mui/material";
import { red } from "@mui/material/colors";
import { borderColor, color } from "@mui/system";
import { useState } from "react";
import Button from "@mui/material/Button";
import { Grid, List } from "@mui/material";

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

    const post = "/api/company/";

    const answer = await fetch(post, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        title: data.title,
        description: data.description,
        location: data.location,
      }),
    });

    if (answer.status === 404) {
      alert("Internal error!");
    } else {
      alert("Job Posted!");
      window.location = "/";
    }
  };
  return (
    <div style={{ marginLeft: "-30%" }}>
      <div>
        <h1 style={{ color: "#1976d2" }}>Post Job Form</h1>
      </div>
      <div>
        <form style={{ fontSize: "25px" }} onSubmit={submitHandler}>
          Title:
          <br />
          <TextareaAutosize
            onChange={changeHandler}
            style={{ width: "125%", fontSize: "20px" }}
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
            style={{ width: "125%", fontSize: "20px" }}
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
            style={{ width: "125%", fontSize: "20px" }}
            name="location"
            type="text"
            placeholder="Location for Job"
            required
            value={location}
          />
          <br />
          <br />
          <Grid
            container
            display="flex"
            justifyContent="center"
            alignItems="center"
            style={{ marginLeft: "10%" }}
          >
            <Button
              type="submit"
              variant="outlined"
              color="primary"
              size="small"
              sx={{ borderRadius: 28 }}
              style={{ minWidth: "200px" }}
            >
              Post
            </Button>
          </Grid>
        </form>
      </div>
    </div>
  );
}
