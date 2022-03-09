import {useEffect,useState} from 'react';

function TypeItemStudent(props){

    const takeLessonId=Object.values(props.typeItem)[0];
    const [isValid,setIsValid]=useState(true);
    
    useEffect(()=>{

        props.courseContext.lessonIds.forEach(element => {
            if(element.id===takeLessonId){
                console.log(takeLessonId)

                setIsValid(false);
            }
        });
        
    },[isValid])

    function buttonClickHandler(){
        props.courseContext.addLesson(props.typeItem);
        props.setIsExecute(true);
        props.setTakeLessonId(takeLessonId);
        setIsValid(false);
    }

    return(
        <tr>
            {Object.entries(props.typeItem).map(item => (<td>{item[1]}</td>))}
            {isValid?<td><button className="btn btn-light"onClick={buttonClickHandler}>Take Lesson</button></td>:<td>Lesson taken</td>}  
        </tr>
    )
}
export default TypeItemStudent;