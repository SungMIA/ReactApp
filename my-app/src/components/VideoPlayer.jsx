import { React } from "react";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { IconContext } from "react-icons";
import { BsArrowLeft } from "react-icons/bs";
import { AiFillPlayCircle } from "react-icons/ai";
import ReactPlayer from "react-player";

const VideoPlayer = ({
  currCourse,
  setCurrCourse,
  currClass,
  setCurrClass,
  courses,
  name,
  currLesson,
  setCurrLesson,
}) => {
  const navigate = useNavigate();

  const routeChange = (currCourse, currClass, currLesson) => {
    let path = currCourse + 1 + "_" + (currClass + 1) + "_" + (currLesson + 1);
    navigate(path);
  };

  const formatClass = (index, title, time) => {
    return (
      <>
        <div id="classIndex">{index + 1}</div>
        <div id="classTitle">{title}</div>
        <div id="timeStamp">{time}</div>
      </>
    );
  };

  const showPlayer = (currCourse, currClass, currLesson) => {
    console.log(currCourse, currClass, currLesson);
    if (currCourse === 1) {
      if (!currClass) {
        return (
          <>
            <div className="player-wrapper">
              <ReactPlayer
                className="react-player fixed-bottom"
                url={`/videos/courses/course${currCourse}/Class1/Lesson1/1.MP4`}
                width="100%"
                height="90%"
                muted={true}
                playing={true}
                controls={true}
              />
            </div>
          </>
        );
      }
      return (
        <>
          <div className="player-wrapper">
            <ReactPlayer
              className="react-player fixed-bottom"
              url={`/videos/courses/course${currCourse}/Class${currClass}/Lesson${currLesson}/${currLesson}.MP4`}
              width="100%"
              height="93%"
              muted={true}
              playing={true}
              controls={true}
            />
          </div>
        </>
      );
    } else {
      return (
        <>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/8124kv-632k"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </>
      );
    }
  };

  const updatePlayer = (i, j) => {
    if (i === undefined) {
      return (
        <Navbar.Brand
          id="videoPlayerTitle"
          href="#"
        >{`${courses[currCourse].title}`}</Navbar.Brand>
      );
    } else {
      if (j) {
        return (
          <Navbar.Brand
            id="videoPlayerTitle"
            href="#"
          >{`${courses[currCourse].classes[i].title} - ${courses[currCourse].classes[i].lessons[j].title}`}</Navbar.Brand>
        );
      } else {
        return (
          <Navbar.Brand
            id="videoPlayerTitle"
            href="#"
          >{`${courses[currCourse].classes[i].title}`}</Navbar.Brand>
        );
      }
    }
  };

  const checkLessons = (tempClass, i) => {
    if (tempClass.lessons) {
      return tempClass.lessons.map((lesson, j) => {
        return (
          <NavDropdown.Item class="playItem" id="playItem">
            <div
              class="playItem"
              onClick={() => (
                routeChange(currCourse, i, j),
                setCurrClass(i),
                setCurrCourse(currCourse),
                setCurrLesson(j),
                showPlayer(currCourse + 1, currClass + 1, currLesson + 1)
              )}
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
            </div>
            <div
              id="classTitleDropContainer"
              class="playItem"
              onClick={() => (
                routeChange(currCourse, i, j),
                setCurrClass(i),
                setCurrCourse(currCourse),
                setCurrLesson(j),
                routeChange(currCourse, i, j),
                showPlayer(currCourse + 1, currClass + 1, currLesson + 1)
              )}
            >
              <div id="classTitleDrop">{`${lesson.title}`}</div>
            </div>
            <div
              id="timeStampDrop"
              class="playItem"
              onClick={() => (
                routeChange(currCourse, i, j),
                setCurrClass(i),
                setCurrCourse(currCourse),
                setCurrLesson(j),
                routeChange(currCourse, i, j),
                showPlayer(currCourse + 1, currClass + 1, currLesson + 1)
              )}
              to={`${currCourse + 1}_${i + 1}_${j + 1}`}
            >
              <div>{`${lesson.time}`}</div>
            </div>
          </NavDropdown.Item>
        );
      });
    } else {
      return (
        <NavDropdown.Item class="playItem" id="playItem">
          <Link
            class="playItem"
            onClick={() => (
              setCurrClass(i), setCurrCourse(currCourse), setCurrLesson(0)
            )}
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
            id="classTitleDropContainer"
            class="playItem"
            onClick={() => (
              setCurrClass(i), setCurrCourse(currCourse), setCurrLesson(0)
            )}
            to={`${currCourse + 1}_${i + 1}`}
          >
            <div id="classTitleDrop">{`${tempClass.title}`}</div>
          </Link>
          <Link
            id="timeStampDrop"
            class="playItem"
            onClick={() => (
              setCurrClass(i), setCurrCourse(currCourse), setCurrLesson(0)
            )}
            to={`${currCourse + 1}_${i + 1}`}
          >
            <div>{`${tempClass.time}`}</div>
          </Link>
        </NavDropdown.Item>
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
          {updatePlayer(currClass, currLesson)}
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
                        class="nav-item dropdown"
                        aria-expanded={true}
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
      {showPlayer(currCourse + 1, currClass + 1, currLesson + 1)}
    </>
  );
};

export default VideoPlayer;
