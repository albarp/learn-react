import type { Action } from "./Action";
import type { Task } from "./Task";

export default function taskReducer(tasks: Task[], action: Action): Task[] {
    switch(action.type) {
        case 'add': {
            if(!action.task) return tasks

            const nextId = tasks[tasks.length-1].id ?? 0

            action.task.id = nextId

            return [
                ...tasks,
                action.task
            ]
        }
        case 'change': {
            if(!action.id || !action.task) return tasks

            return tasks.map(t => {
                if(t.id == action.id) {
                    return action.task!
                }
                else{
                    return t
                }
            })
        }
        case 'delete': {
            if(!action.id) return tasks

            return tasks.filter(t => t.id == action.id)
        }
        default: {
            return tasks
        }
    }

}