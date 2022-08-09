import {db} from "../../db"
export default defineEventHandler((e) => {
    const method = e.req.method
    const context = e.context
    console.log(e.context)
    if (method === "PUT") {
        // 1) extract the path param
        const { id } = context.params
        // 2) find todo in db
        let index
        const todo = db.todos.find((t , i) => {
            if (t.id === id) {
                index = i
                return true
            }
            return false
        })

        // 3) throw error if todo  is not found
        if (!todo) throw new Error()
        // 4) update the completed status
        const updateTodo = {
            ...todo,
            completed: !todo.completed
        }
        db.todos[index] = updateTodo
        // 5) return the updated todo
        return updateTodo
    }
})