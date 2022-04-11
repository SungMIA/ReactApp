import { React } from "react";
import { Card } from "react-bootstrap";
import Home from "./Home";
import VideoPlayer from "../components/VideoPlayer";

const VideoPlayerPage = ({
  currCourse,
  setCurrCourse,
  currClass,
  setCurrClass,
  courses,
  name,
  currLesson,
  setCurrLesson,
}) => {
  return (
    <>
      <VideoPlayer
        currCourse={currCourse}
        setCurrCourse={setCurrCourse}
        currClass={currClass}
        setCurrClass={setCurrClass}
        courses={courses}
        name={name}
        currLesson={currLesson}
        setCurrLesson={setCurrLesson}
      ></VideoPlayer>
    </>
  );
};

export default VideoPlayerPage;
