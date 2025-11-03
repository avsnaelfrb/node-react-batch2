function ThingsToDo(props) {
  return (
    <li>
      <div>
      <input type="checkbox" id="todo" name="todo" value={props.name} />
      <label htmlFor="todo">{props.name}</label>
      </div>
    </li>
  );
}

export default ThingsToDo;
