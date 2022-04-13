import Home from "./pages/Home";
import Teachers from "./pages/Teachers";
import Students from "./pages/Students";
import Suppliers from "./pages/Suppliers";
import Welcome from "./pages/Welcome.jsx";
import VideoPlayerPage from "./pages/VideoPlayerPage.jsx";
import { React, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AppTwo.css";
import axios from "axios";

function App() {
  const [name, setName] = useState();
  const [logged, setLogged] = useState(false);
  const [attempt, setAttempt] = useState(false);
  const [audience, setAudience] = useState();
  const [currCourse, setCurrCourse] = useState(-1);
  const [currClass, setCurrClass] = useState();
  const [currLesson, setCurrLesson] = useState();
  const [youtube, setYoutube] = useState();
  const [courses, setCourses] = useState([
    {
      title: "Javascript: Getting Started",
      creator: "Mark Zamoyta",
      img: "https://i.ytimg.com/vi/2nZiB1JItbY/maxresdefault.jpg",
      classes: [
        { title: "Course Overview", time: "1m 25s" },
        {
          title: "Introduction to Javascript",
          time: "13m 28s",
          lessons: [
            { title: "Introduction", time: "2m 15s" },
            { title: "Installing Development Software", time: "1m 53s" },
            { title: "Hello World Project1 from Github", time: "5m 8s" },
            { title: "Our Sample Website", time: "4m 10s" },
          ],
        },
        {
          title: "Javascript Beginnings",
          time: "23m 39s",
          lessons: [
            { title: "Introduction", time: "2m 15s" },
            { title: "Installing Development Software", time: "1m 53s" },
            { title: "Hello World Project1 from Github", time: "5m 8s" },
          ],
        },
        {
          title: "Variables and Constants",
          time: "25m 45s",
          lessons: [
            { title: "Introduction", time: "2m 15s" },
            { title: "Installing Development Software", time: "1m 53s" },
            { title: "Hello World Project1 from Github", time: "5m 8s" },
          ],
        },
        {
          title: "Types and Operators",
          time: "34m 58s",
          lessons: [
            { title: "Introduction", time: "2m 15s" },
            { title: "Installing Development Software", time: "1m 53s" },
          ],
        },
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

  // fetching Chapter data from Google Youtube Data API
  // Uses Auth 2.0 Playground, aka temporary auth access token
  // need to familiarize/implement Auth 2.0 further to make sustainable requests

  useEffect(() => {
    const fetchVideo = async () => {
      const data = await axios
        .get(
          "https://www.googleapis.com/youtube/v3/videos?part=snippet&id=8124kv-632k&key=[AIzaSyD3B5mg2tiB1I5cemOs7GObGRLnHZkDIvs]",
          {
            headers: {
              Authorization:
                "Bearer ya29.A0ARrdaM-gko9vAKaQ1W--wxyWeOzfX1A7TwsW7H3KRUHsRlSbHhMxGRfiorISsUaRuUeu-3_z_XRF366WTD_MZC9Teqe-6DtcoLd4umqj0me16irUb91yenwSJHSp9Uyxg9v0DIvtwdzPE-ek9spWqdhNUHCj",
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          console.log(res);
        });
    };
    fetchVideo().catch(console.error);
  }, []);

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
          path="/user/:name/VideoPlayer/Course/*"
          element={
            <VideoPlayerPage
              currCourse={currCourse}
              setCurrCourse={setCurrCourse}
              currClass={currClass}
              setCurrClass={setCurrClass}
              courses={courses}
              name={name}
              currLesson={currLesson}
              setCurrLesson={setCurrLesson}
            ></VideoPlayerPage>
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
          path="/user/:name/teachers/VideoPlayer/Course/:currCourse_:currClass_:currLesson"
          element={
            <VideoPlayerPage
              currCourse={currCourse}
              setCurrCourse={setCurrCourse}
              currClass={currClass}
              setCurrClass={setCurrClass}
              courses={courses}
              name={name}
              currLesson={currLesson}
              setCurrLesson={setCurrLesson}
            ></VideoPlayerPage>
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
          path="/user/:name/students/VideoPlayer/Course/*"
          element={
            <VideoPlayerPage
              currCourse={currCourse}
              setCurrCourse={setCurrCourse}
              currClass={currClass}
              setCurrClass={setCurrClass}
              courses={courses}
              name={name}
              currLesson={currLesson}
              setCurrLesson={setCurrLesson}
            ></VideoPlayerPage>
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
          path="/user/:name/suppliers/VideoPlayer/Course/*"
          element={
            <VideoPlayerPage
              currCourse={currCourse}
              setCurrCourse={setCurrCourse}
              currClass={currClass}
              setCurrClass={setCurrClass}
              courses={courses}
              name={name}
              currLesson={currLesson}
              setCurrLesson={setCurrLesson}
            ></VideoPlayerPage>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
