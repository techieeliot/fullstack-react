import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const App = () => {    
    // course is an object with a name and parts inside of an array and...
    const course = {

        name: `Half Stack application development`,
        parts: [
            /* ...each list item in the array is an object that
             has a section name and number of exercises */
            {
                section: `Fundamentals of React`,
                exercises: 11,
            },
            {
                section: `Using props to pass data`,
                exercises: 7
            },
            {
                section: `State of a component`,
                exercises: 14
            }
        ]
    } 

    // test the course object
    console.log(course.name);
    
    // props must be the param to the components
    const Header = (props) => {
        console.log(props);
        return(
            /*because of the course object 
            I can step into the object to 
            get the name, etc.*/
            <h1>{props.course.name}</h1> 
        )
    }


    const Content = (props) => {
        return (
            <div>
                <p>
                {props.course.parts[0].section} {props.course.parts[0].exercises}
                </p>        
                <p>
                {props.course.parts[1].section} {props.course.parts[1].exercises}
                </p>
                <p>
                {props.course.parts[2].section} {props.course.parts[2].exercises}
                </p>
                
            </div> 

        )
    }


    const Total = (props) => {
        // Save the sum of the exercises to a variable...
        const totalExercises= props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises;

        // then send the total to the dom using the variable
        return (
            <div>
                <section>
                    <p>Number of exercises {totalExercises}</p>
                </section>
            </div> 
        )
    }



    return(
        <div>
            {/* the component props must be linked to course object */}
            <Header course={course} />
            <Content course={course}/>
            <Total course={course}/>
        </div>


    )
  
}


ReactDOM.render(<App />, document.getElementById('root'));

