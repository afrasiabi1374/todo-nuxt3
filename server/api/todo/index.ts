import {db} from "../../db"
import {v4 as uuid} from "uuid"
import {sendError} from "h3"
export default defineCachedEventHandler(
    async (e) => {
        // console.log(e);
        const method = e.req.method
        if(method === "GET"){
            return db.todos
        }
        if(method === "POST"){
            const body = await useBody(e)
            console.log({body});
            // اگه خالی بود ارور بده
            if (!body.item) {
                const TodoNotFoundError = ({
                    statusCode: 400,
                    statusMessage: "no item provided alii joonam!",
                    data: {
    
                    }
                })
                sendError(e, TodoNotFoundError)                
            }
            const newTodo = {
                id : uuid(),
                item: body.item,
                completed: false
            }
            db.todos.push(newTodo)
            return newTodo
        }
    })