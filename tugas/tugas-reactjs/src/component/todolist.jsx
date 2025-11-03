import ThingsToDo from "./thingsToDo.jsx";

export default function Todolist() {
  const thingsToDo = [
    "Belajar GIT & CLI",
    "Belajar HTML & CSS",
    "Belajar Javascript",
    "Belajar ReactJS Dasar",
    "Belajar ReactJS Advance",
  ];

  return (
    <>
      <form>
        <ul className="todo-list">
          {thingsToDo.map((item) => (
            <ThingsToDo name={item} />
          ))}
        </ul>

        <button type="submit" className="send-button">
          SEND
        </button>
      </form>
    </>
  );
}
