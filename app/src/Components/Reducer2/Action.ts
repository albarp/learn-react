import type { Task } from "./Task"

export type ActionType = 'add' | 'change' | 'delete'

export type Action = {
    type: ActionType
    task?: Task
    id?: number
}