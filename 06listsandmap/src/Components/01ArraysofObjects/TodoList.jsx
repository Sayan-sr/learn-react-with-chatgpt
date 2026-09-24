

function TodoList(){

    const todos = [
        {
            id: 1,
            task: "Learn React"
        },

        {
            id: 2,
            task: "Practice DSA"
        },

        {
            id: 3,
            task: "Build Portfolio"
        }
    ]

    return(
        <div>
            {
                todos.map((todo) => (
                    <h2 key={todo.id}>
                        {todo.task}
                    </h2>
                ))
            }
        </div>
    )
}

export default TodoList