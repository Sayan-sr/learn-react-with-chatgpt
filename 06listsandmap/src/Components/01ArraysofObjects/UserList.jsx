// Arrays of Objects 

function UserList(){

    const users = [
        {
            id: 1,
            name: "Sayan",
            role: "Python Developer"
        },
        {
            id: 2,
            name: "Disha",
            role: "Web Developer"
        },
        {
            id: 3,
            name: "Saiful",
            role: "Java Developer"
        },
        {
            id: 4,
            name: "Priya",
            role: "AI Engineer"
        }
    ]

    return(
        <div>
            {
                users.map((user) => {
                    return(
                        <div key={user.id}>
                            <h2>{user.name}</h2>
                            <p>{user.role}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default UserList