import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/display_lesson.css";
// import {ProgressBar} from "./component/progressBar";

const LessonComponent = () => {
    const { store, actions } = useContext(Context);

    return (

        <div className="background">
            <div className="mt-1">
                {/* <div className="clearfix"> */}
                <div className="container-fluid">
                    <div className="game-section">
                        Section for the games / games selection
                    </div>
                    <div>
                        <h1 className="title">Lesson 1</h1>
                        <div>

                            {/* <img src="https://picsum.photos/seed/picsum/350/200" id="main-image" className="col-md-6 float-md-end mb-3 ms-md-3" alt="..." /> */}

                            <p className="stories">
                                This section is where we will use stories to teach our user how to read or write a new language.
                                This section is where we will use stories to teach our user how to read or write a new language.
                            </p>

                            {/* <p>
                            As you can see the paragraphs gracefully wrap around the floated image. Now imagine how this would look with some actual content in here, rather than just this boring placeholder text that goes on and on, but actually conveys no tangible information at. It simply takes up space and should not really be read.
                        </p>

                        <p>
                            And yet, here you are, still persevering in reading this placeholder text, hoping for some more insights, or some hidden easter egg of content. A joke, perhaps. Unfortunately, there's none of that here.
                        </p> */}
                        </div>
                        <h1>{store.current_lesson.name}</h1>

                        {/* <div>
                        Section for the games / games selection
                    </div> */}

                        {/* <h1>Stories /Lesson</h1> */}

                        <div>
                            <h1 className="question">Ex: Pick the car </h1>

                            <div>
                                <div className="card-group">
                                    <div className="card">
                                        <h1 className='box1'>喝</h1>
                                        {/* <img src="https://picsum.photos/seed/picsum/350/200" id="main-image" className="card-img-top" alt="..." /> */}
                                        <div className="card-body">
                                            <h5 className="card-title"></h5>
                                            <p className="card-text">Shuǐ</p>
                                        </div>
                                        {/* <div className="card-footer">
                                            <small className="text-muted">Last updated 3 mins ago</small>
                                        </div> */}
                                    </div>
                                    <div className="card">
                                    <h1 className='box2'>车</h1>
                                        {/* <img src="https://picsum.photos/seed/picsum/350/200" id="main-image" className="card-img-top" alt="..." /> */}
                                        <div className="card-body">
                                            <h5 className="card-title"></h5>
                                            <p className="card-text">Chē</p>
                                        </div>
                                        {/* <div className="card-footer">
                                            <small className="text-muted">Last updated 3 mins ago</small>
                                        </div> */}
                                    </div>
                                    <div className="card">
                                    <h1 className='box3'>卫生间</h1>
                                        {/* <img src="https://picsum.photos/seed/picsum/350/200" id="main-image" className="card-img-top" alt="..." /> */}
                                        <div className="card-body">
                                            <h5 className="card-title"></h5>
                                            <p className="card-text">Wei sheng jian</p>
                                        </div>
                                        {/* <div className="card-footer">
                                            <small className="text-muted">Last updated 3 mins ago</small>
                                        </div> */}
                                    </div>
                                </div>
                                <div style={{color:"blue", marginTop:"20px"}}>
                                    <h3 className="answer-alert">That is Correct!!</h3>
                                    <div style={{textAlign:"center"}}>
                                        {/* <h2 className="progress-bar">Space for progressBar</h2> */}
                                        <img src="https://reactscript.com/wp-content/uploads/2016/11/Circular-Progress-Indicator-Component-For-React.png"></img>
                                        {/* <div className="progress">
                                        <div className="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                                    </div> */}
                                        {/* <div className="progress">
                                            <div className="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                                        </div> */}
                                        {/* <ProgressBar /> */}

                                    </div>

                                </div>

                                <div className="next">
                                    <button type="button" onClick={actions.loadNextLesson} className="btn btn-primary btn-lg btn-block">Next Lesson</button>
                                   
                                </div>

                            </div>

                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default LessonComponent;