import { useReducer, useState } from "react"
import taskReducer from "./taskReducer";

export default function ReducerTodoApp() {

    const initialTasks = [
        {id: 0, text: 'Visit Kafka Museum', done: true},
        {id: 1, text: 'Watch a puppet show', done: false},
        {id: 2, text: 'Lennon Wall pic', done: false},
      ];

    const [newItem, setNewItem] = useState("")
    const [tasks, dispatch] = useReducer(taskReducer, initialTasks)

      function onAddItemHandler() {
        dispatch({
            type: 'add',
            task: {
                text: newItem,
                done: false
            }
        })
      }

    return (
        <>
            <input type="text" value={newItem} onChange={e => setNewItem(e.target.value)}></input>
            <button onClick={onAddItemHandler}>Add</button>
            <ul>
                {tasks.map(t => {
                    return (
                        <li key={t.id}>
                            <label>{t.text}</label>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}