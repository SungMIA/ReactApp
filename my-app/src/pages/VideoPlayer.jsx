import { React, useEffect } from "react";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import Home from "./Home";
import { IconContext } from "react-icons";
import { BsArrowLeft } from "react-icons/bs";
import { AiFillPlayCircle } from "react-icons/ai";
import ReactPlayer from "react-player";
import { axios } from "axios";

const VideoPlayer = ({
  currCourse,
  setCurrCourse,
  currClass,
  setCurrClass,
  courses,
  name,
}) => {
  const navigate = useNavigate();

  const formatClass = (index, title, time) => {
    return (
      <>
        <div id="classIndex">{index}</div>
        <div id="classTitle">{title}</div>
        <div id="timeStamp">{time}</div>
      </>
    );
  };

  const showPlayer = (currCourse, currClass) => {
    return (
      <>
        <div className="player-wrapper">
          <ReactPlayer
            className="react-player fixed-bottom"
            url={`../../public/c${currCourse}`}
          />
        </div>
      </>
    );
  };

  const updatePlayer = (i) => {
    if (i === undefined) {
      return (
        <Navbar.Brand href="#">{`${courses[currCourse].title}`}</Navbar.Brand>
      );
    } else {
      return (
        <Navbar.Brand href="#">{`${courses[currCourse].classes[i].title}`}</Navbar.Brand>
      );
    }
  };

  const checkLessons = (tempClass, i) => {
    console.log(tempClass);
    if (tempClass.lessons) {
      tempClass.lessons.map((lesson, j) => {
        return (
          <div key={j}>
            <Link
              class="playItem"
              onClick={() => (setCurrClass(i), setCurrCourse(currCourse))}
              to={`${currCourse + 1}_${i + 1}_${j + 1}`}
            >
              <IconContext.Provider
                value={{
                  size: "1.6em",
                  className: "playButton",
                  color: "rgba(19, 129, 255, 0.608)",
                }}
              >
                <div id="">
                  <AiFillPlayCircle />
                </div>
              </IconContext.Provider>
            </Link>
            <Link
              class="playItem"
              onClick={() => (setCurrClass(i), setCurrCourse(currCourse))}
              to={`${currCourse + 1}_${i + 1}_${j + 1}`}
            >
              <div id="classTitleDrop">{`${lesson.title}`}</div>
            </Link>
            <Link
              class="playItem"
              onClick={() => (setCurrClass(i), setCurrCourse(currCourse))}
              to={`${currCourse + 1}_${i + 1}_${j + 1}`}
            >
              <div id="timeStampDrop">{`${lesson.time}`}</div>
            </Link>
          </div>
        );
      });
    } else {
      return (
        <div>
          <Link
            class="playItem"
            onClick={() => (setCurrClass(i), setCurrCourse(currCourse))}
            to={`${currCourse + 1}_${i + 1}`}
          >
            <IconContext.Provider
              value={{
                size: "1.6em",
                className: "playButton",
                color: "rgba(19, 129, 255, 0.608)",
              }}
            >
              <div id="">
                <AiFillPlayCircle />
              </div>
            </IconContext.Provider>
          </Link>
          <Link
            class="playItem"
            onClick={() => (setCurrClass(i), setCurrCourse(currCourse))}
            to={`${currCourse + 1}_${i + 1}`}
          >
            <div id="classTitleDrop">{`${tempClass.title}`}</div>
          </Link>
          <Link
            class="playItem"
            onClick={() => (setCurrClass(i), setCurrCourse(currCourse))}
            to={`${currCourse + 1}_${i + 1}`}
          >
            <div id="timeStampDrop">{`${tempClass.time}`}</div>
          </Link>
        </div>
      );
    }
  };

  return (
    <>
      <Navbar bg="light" expand={false}>
        <Container fluid>
          <IconContext.Provider
            value={{ size: "1.3em", className: "backButton" }}
          >
            <div
              onClick={() => (
                navigate(`/user/${name}`), setCurrClass(undefined)
              )}
            >
              <BsArrowLeft />
            </div>
          </IconContext.Provider>
          {updatePlayer(currClass)}
          <Navbar.Toggle aria-controls="offcanvasNavbar" toggle />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton closeVariant="white">
              <Offcanvas.Title id="offcanvasNavbarLabel">{`${courses[currCourse].title}`}</Offcanvas.Title>
            </Offcanvas.Header>
            <a id="courseCreator">{`Created by: ${courses[currCourse].creator}`}</a>
            <a id="toc">Table of Contents</a>
            <Offcanvas.Body id="offcanvasBody">
              {
                courses[currCourse].classes.map((currClass, i) => {
                  return (
                    <Nav
                      id="classContainer"
                      className="justify-content-end flex-grow-1"
                    >
                      <NavDropdown
                        title={formatClass(i, currClass.title, currClass.time)}
                        id="offcanvasNavbarDropdown"
                      >
                        {checkLessons(currClass, i)}
                      </NavDropdown>
                    </Nav>
                  );
                })
                // if(i === )
              }
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      {/* {showPlayer(currClass)} */}
    </>
  );
};

export default VideoPlayer;
