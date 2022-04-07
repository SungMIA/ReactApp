import "./App.css";
import Home from "./pages/Home";
import Teachers from "./pages/Teachers";
import Students from "./pages/Students";
import Suppliers from "./pages/Suppliers";
import Welcome from "./pages/Welcome.jsx";
import VideoPlayer from "./pages/VideoPlayer.jsx";
import { React, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavContainer from "./components/NavContainer";

function App() {
  const [name, setName] = useState();
  const [logged, setLogged] = useState(false);
  const [attempt, setAttempt] = useState(false);
  const [audience, setAudience] = useState();
  const [currCourse, setCurrCourse] = useState(-1);
  const [currClass, setCurrClass] = useState();
  const [courses, setCourses] = useState([
    {
      title: "Javascript: Getting Started",
      creator: "Mark Zamoyta",
      img: "https://i.ytimg.com/vi/2nZiB1JItbY/maxresdefault.jpg",
      classes: [
        { title: "Course Overview", time: "1m 25s" },
        { title: "Introduction to Javascript", time: "13m 28s" },
        { title: "Javascript Beginnings", time: "23m 39s" },
        { title: "Variables and Constants", time: "25m 45s" },
        { title: "Types and Operators", time: "34m 58s" },
      ],
    },
    {
      title: "Python: Getting Started",
      creator: "The Code X",
      img: "https://thecodelearners.com/wp-content/uploads/2020/02/Python-Getting-Started.jpg",
      classes: [
        { title: "Course Overview", time: "1m 25s" },
        { title: "Introduction to Python", time: "13m 28s" },
        { title: "Python Beginnings", time: "23m 39s" },
        { title: "Variables and Constants", time: "25m 45s" },
        { title: "Types and Operators", time: "34m 58s" },
      ],
    },
    {
      title: "Typescript: Getting Started",
      creator: "Medi Madelen Gwosdz",
      img: "https://149351115.v2.pressablecdn.com/wp-content/uploads/2021/05/blog-getting-started-typescript.png",
      classes: [
        { title: "Course Overview", time: "1m 25s" },
        { title: "Introduction to Typescript", time: "13m 28s" },
        { title: "Typescript Beginnings", time: "23m 39s" },
        { title: "Variables and Constants", time: "25m 45s" },
        { title: "Types and Operators", time: "34m 58s" },
      ],
    },
  ]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home
              name={name}
              setName={setName}
              logged={logged}
              setLogged={setLogged}
              attempt={attempt}
              setAttempt={setAttempt}
              audience={audience}
              setAudience={setAudience}
            ></Home>
          }
        />
        <Route
          exact
          path="/user/:name"
          element={
            <Welcome
              name={name}
              setName={setName}
              logged={logged}
              setLogged={setLogged}
              attempt={attempt}
              setAttempt={setAttempt}
              audience={audience}
              setAudience={setAudience}
              courses={courses}
              setCourses={setCourses}
              currCourse={currCourse}
              setCurrCourse={setCurrCourse}
            ></Welcome>
          }
        />
        <Route
          exact
          path="/user/:name/VideoPlayer/Course/:course/*"
          element={
            <VideoPlayer
              currCourse={currCourse}
              setCurrCourse={setCurrCourse}
              currClass={currClass}
              setCurrClass={setCurrClass}
              courses={courses}
            ></VideoPlayer>
          }
        />
        <Route
          exact
          path="/user/:name/teachers"
          element={
            <Teachers
              name={name}
              setName={setName}
              logged={logged}
              setLogged={setLogged}
              attempt={attempt}
              setAttempt={setAttempt}
              audience={audience}
              setAudience={setAudience}
              courses={courses}
              setCourses={setCourses}
              currCourse={currCourse}
              setCurrCourse={setCurrCourse}
            ></Teachers>
          }
        />
        <Route
          exact
          path="/user/:name/teachers/VideoPlayer/Course/:course/*"
          element={
            <VideoPlayer
              currCourse={currCourse}
              setCurrCourse={setCurrCourse}
              currClass={currClass}
              setCurrClass={setCurrClass}
              courses={courses}
            ></VideoPlayer>
          }
        />
        <Route
          exact
          path="/user/:name/teachers/VideoPlayer/Course/:course/*"
          element={
            <VideoPlayer
              currCourse={currCourse}
              setCurrCourse={setCurrCourse}
              currClass={currClass}
              setCurrClass={setCurrClass}
              courses={courses}
            ></VideoPlayer>
          }
        />
        <Route
          exact
          path="/user/:name/students"
          element={
            <Students
              name={name}
              setName={setName}
              logged={logged}
              setLogged={setLogged}
              attempt={attempt}
              setAttempt={setAttempt}
              audience={audience}
              setAudience={setAudience}
              courses={courses}
              setCourses={setCourses}
              currCourse={currCourse}
              setCurrCourse={setCurrCourse}
            ></Students>
          }
        />
        <Route
          exact
          path="/user/:name/students/VideoPlayer/Course/:course/*"
          element={
            <VideoPlayer
              currCourse={currCourse}
              setCurrCourse={setCurrCourse}
              currClass={currClass}
              setCurrClass={setCurrClass}
              courses={courses}
            ></VideoPlayer>
          }
        />
        <Route
          exact
          path="/user/:name/suppliers"
          element={
            <Suppliers
              name={name}
              setName={setName}
              logged={logged}
              setLogged={setLogged}
              attempt={attempt}
              setAttempt={setAttempt}
              audience={audience}
              setAudience={setAudience}
              courses={courses}
              setCourses={setCourses}
              currCourse={currCourse}
              setCurrCourse={setCurrCourse}
            ></Suppliers>
          }
        />
        <Route
          exact
          path="/user/:name/suppliers/VideoPlayer/Course/:course/*"
          element={
            <VideoPlayer
              currCourse={currCourse}
              setCurrCourse={setCurrCourse}
              currClass={currClass}
              setCurrClass={setCurrClass}
              courses={courses}
            ></VideoPlayer>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
