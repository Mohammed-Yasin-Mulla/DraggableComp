import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [list, setList] = useState([1, 2, 3]);
  const dragItemIndex = useRef(-1);
  const dragOverItemIndex = useRef(-1);

  const draggableStart = (e: any, index: number) => {
    dragItemIndex.current = index;
  };

  const draggableEnter = (e: any, index: number) => {
    dragOverItemIndex.current = index;
  };

  const draggableEnd = (e: any, index: number) => {
    // insert the dragged item into the new position
    const newList = [...list];
    newList.splice(
      dragOverItemIndex.current,
      0,
      newList.splice(dragItemIndex.current, 1)[0]
    );
    setList(newList);
  };

  // function to add a number to list
  const addNumber = () => {
    const newList = [...list];
    newList.push(Math.floor(Math.random() * 100));
    setList(newList);
  };

  return (
    <div className="App">
      {list.map((item, index) => {
        return (
            <div
              draggable
              onDragStart={(e) => draggableStart(e, index)}
              onDragEnter={(e) => draggableEnter(e, index)}
              onDragEnd={(e) => draggableEnd(e, index)}
              className="container"
              key={index}
            >
              {item}
            </div>
           
        );
      })}
       <button onClick={addNumber} >Add Item</button>
    </div>
  );
}

export default App;
