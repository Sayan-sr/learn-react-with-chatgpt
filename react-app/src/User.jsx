function User(props) {

    return (
        <>
            <h2>Hello, {props.name} this side</h2>
            <p>I am a {props.role}</p>
        </>
    )
}

export default User