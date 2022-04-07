import { React } from "react";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Home from "./Home";
import { IconContext } from "react-icons";
import { BsArrowLeft } from "react-icons/bs";
import { AiFillPlayCircle } from "react-icons/ai";

const VideoPlayer = ({
  currCourse,
  setCurrCourse,
  currClass,
  setCurrClass,
  courses,
}) => {
  console.log(currCourse, courses);
  const navigate = useNavigate();

  //   const checkCurrClass = ()

  const formatClass = (index, title, time) => {
    return (
      <>
        <div id="classIndex">{index}</div>
        <div id="classTitle">{title}</div>
        <div id="timeStamp">{time}</div>
      </>
    );
  };
  return (
    <Navbar bg="light" expand={false}>
      <Container fluid>
        <IconContext.Provider
          value={{ size: "1.3em", className: "backButton" }}
        >
          <div onClick={() => navigate(-1)}>
            <BsArrowLeft />
          </div>
        </IconContext.Provider>
        <Navbar.Brand href="#">{`${courses[currCourse].title}`}</Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
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
            {courses[currCourse].classes.map((currClass, i) => {
              // if(i === )
              return (
                <Nav
                  id="classContainer"
                  className="justify-content-end flex-grow-1"
                >
                  <NavDropdown
                    title={formatClass(i, currClass.title, currClass.time)}
                    id="offcanvasNavbarDropdown"
                  >
                    <NavDropdown.Item
                      class="playItem"
                      id="playItem"
                      href={`${i}/`}
                      onClick={() => (
                        setCurrClass(i), setCurrCourse(currCourse)
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
                      <div id="classTitleDrop">{`${currClass.title}`}</div>
                      <div id="timeStampDrop">{`${currClass.time}`}</div>
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              );
            })}
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default VideoPlayer;
