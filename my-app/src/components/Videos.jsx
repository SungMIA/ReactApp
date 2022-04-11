import { React } from "react";
import { Card, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Home from "../pages/Home";

const Videos = ({
  name,
  audience,
  courses,
  setCourses,
  currCourse,
  setCurrCourse,
}) => {
  return (
    <>
      {audience ? <h6>{audience}' Videos</h6> : <h6>Your Videos</h6>}
      <Nav id="showVideos">
        {courses.map((video, i) => {
          return (
            <>
              <Link
                className="videoCard"
                onClick={() => setCurrCourse(i)}
                to={
                  audience
                    ? `/user/${name}/${audience}/VideoPlayer/Course/${i + 1}`
                    : `/user/${name}/VideoPlayer/Course/${i + 1}`
                }
              >
                <Card>
                  <Card.Img
                    variant="top"
                    src={`${video.img}`}
                    className="videoImg"
                  ></Card.Img>
                  <Card.Body className="videoBody">
                    <Card.Title>{video.title}</Card.Title>
                    <Card.Text>created by: {video.creator}</Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </>
          );
        })}
      </Nav>
    </>
  );
};

export default Videos;
