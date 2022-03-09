import TypeItemStudent from "./TypeItemStudent";
import { Table } from "react-bootstrap";

function TypeItemListStudent(props) {
  return (
    <div className="col-sm-8 offset-sm-2">
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            {props.tableItems.map((item) => (
              <th>{item}</th>
            ))}
            <th>Operations</th>
          </tr>
          
        </thead>
        <tbody>{props.typeItems.map((item) => (
          <TypeItemStudent
            setIsExecute={props.setIsExecute}
            typeItem={item}
            setTakeLessonId={props.setTakeLessonId}
            courseContext={props.courseContext}
          />
        ))}</tbody>         
        
      </Table>
    </div>
  );
}
export default TypeItemListStudent;
