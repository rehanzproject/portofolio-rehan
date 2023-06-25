import { useState } from "react";
import Sidebar from "../moleculs/Sidebar/Sidebar.molecul";
import PencilIcon from "../atoms/Icons/PencilIcon.icon";
import CompletedIcon from "../atoms/Icons/CompletedIcon.icon";
import TrashIcon from "../atoms/Icons/TrashIcon.icon";

function FullView() {
  type TodoProps = {
    id: number;
    name: string;
    isCompleted: boolean;
  };

  const [text, setText] = useState<string>("");
  const [todo, setTodo] = useState<TodoProps[]>([]);
  const [isEdit, setEdit] = useState<boolean>(false);
  const [idxSelected, setidxSelected] = useState<number>(0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleEdit = (value: TodoProps) => {
    setEdit(true);
    setText(value.name);
    setidxSelected(value.id);
  };
  const handleEditSubmit = () => {
    const updatedTodo = todo.map((item) =>
      item.id === idxSelected ? { ...item, name: text } : item
    );
    setTodo(updatedTodo);
    setText("");
    setEdit(false);
  };

  const handleSubmit = () => {
    if (text === "") return;
    const newTodo: TodoProps = {
      id: Date.now(),
      name: text,
      isCompleted: false,
    };

    setTodo([...todo, newTodo]);
    setText("");
    setEdit(false);
  };

  const deleteTodo = (value: TodoProps) => {
    setidxSelected(value.id);
    const newTodo = [...todo];
    const deleteData = newTodo.filter((item) => item !== value);
    setTodo(deleteData);
  };
  const completedTodo = (value: TodoProps) => {
    const updatedTodo = todo.map((item) =>
      item === value ? { ...item, isCompleted: true } : item
    );
    setTodo(updatedTodo);
  };
  return (
    <div className="border bg-gradient-to-br from-black to-blue-500 text-white h-screen">
      <div className="flex items-start">
        <Sidebar />
        <div className="flex flex-col p-10">
          To Do List
          <input
            type="text"
            value={text}
            onChange={handleChange}
            className="text-black"
            placeholder="Input here..."
          />
          <button
            className="py-2 border"
            onClick={isEdit ? handleEditSubmit : handleSubmit}
          >
            {isEdit ? "Edit" : "Submit"}
          </button>
        </div>
        <div>
          {todo.map((value) => (
            <div
              key={value.id}
              className="flex justify-between gap-4 my-4 p-5 border cursor-pointer"
            >
              <h1 className={`${value.isCompleted ? "line-through" : ""}`}>
                {value.name}
              </h1>{" "}
              <PencilIcon onClick={() => handleEdit(value)} width={24} />
              <CompletedIcon onClick={() => completedTodo(value)} />
              <TrashIcon onClick={() => deleteTodo(value)} />
            </div>
          ))}
        </div>

        {/* <AboutMe {...arg} /> */}
      </div>
    </div>
  );
}

export default FullView;
