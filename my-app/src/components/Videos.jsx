import { React } from 'react'
import { Card, Nav } from 'react-bootstrap'
import Home from '../pages/Home'



const Videos = ({audience}) => {
    const exVideos = [
        {
            "title": "Javascript: Getting Started",
            "creator": "Mark Zamoyta",
            "img": "https://i.ytimg.com/vi/2nZiB1JItbY/maxresdefault.jpg",
            "classes": [
                {"title": "Course Overview", "length":"1m 25s"} ,
                {"title": "Introduction to Javascript", "length":"13m 28s"},
                {"title": "Javascript Beginnings", "length":"23m 39s"},
                {"title": "Variables and Constants", "length":"25m 45s"},
                {"title": "Types and Operators", "length":"34m 58s"},
            ]
        },
        {
            "title": "Python: Getting Started",
            "creator": "The Code X",
            "img": "https://thecodelearners.com/wp-content/uploads/2020/02/Python-Getting-Started.jpg",
            "classes": [
                {"title": "Course Overview", "length":"1m 25s"} ,
                {"title": "Introduction to Javascript", "length":"13m 28s"},
                {"title": "Javascript Beginnings", "length":"23m 39s"},
                {"title": "Variables and Constants", "length":"25m 45s"},
                {"title": "Types and Operators", "length":"34m 58s"},
            ]
        },
        {
            "title": "Typescript: Getting Started",
            "creator": "Medi Madelen Gwosdz",
            "img": "https://149351115.v2.pressablecdn.com/wp-content/uploads/2021/05/blog-getting-started-typescript.png",
            "classes": [
                {"title": "Course Overview", "length":"1m 25s"} ,
                {"title": "Introduction to Javascript", "length":"13m 28s"},
                {"title": "Javascript Beginnings", "length":"23m 39s"},
                {"title": "Variables and Constants", "length":"25m 45s"},
                {"title": "Types and Operators", "length":"34m 58s"},
            ]
        }
    ]
    return (
        <>
            {audience ? <h6>{audience}' Videos</h6>
            : <h6>Your Videos</h6>}
            <Nav>    
                {exVideos.map((video) => {
                    return (
                        <Card className="videoCard">
                            <Card.Img variant="top" src={`${video.img}`} className="videoImg"></Card.Img>
                            <Card.Body className="videoBody">
                                <Card.Title>
                                    {video.title}
                                </Card.Title>
                                <Card.Text>
                                    created by: {video.creator}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    )
                })}
            </Nav>
        </>
    )
}

export default Videos;