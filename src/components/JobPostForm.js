import { Label } from "@mui/icons-material";
import { TextareaAutosize } from "@mui/material";
import { red } from "@mui/material/colors";
import { borderColor, color } from "@mui/system";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { Grid, List } from "@mui/material";

export default function JobPostForm(props) {
  const [data, setData] = useState({
    title: "",
    description: "",
    location: "",
  });

  const { _id } = props

  useEffect(() => {
    if(_id !== undefined){
      const { title, description, location } = props  
      setData({ ...data, title: title, location: location, description: description })
    }
  }, []);

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const post = "/api/company";
    const put = "/api/company";

    // if no '_id', then create
    if(_id === undefined || _id === null || _id === "") {
      const answer = await fetch(post, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": localStorage.getItem("token")
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
    } else {
      const answer = await fetch(put, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _id: _id,
          title: data.title,
          description: data.description,
          location: data.location,
        }),
      });
  
      if (answer.status === 404) {
        alert("Internal error!");
      } else {
        alert("Job Updated!");
        window.location = "/";
      }
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
            value={data.title}
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
            value={data.description}
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
            value={data.location}
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
