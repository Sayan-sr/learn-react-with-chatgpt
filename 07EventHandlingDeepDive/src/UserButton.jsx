

function UserButton(){

    function sayName(name){
        alert(name)
    }

    return(
        <div>
            <button onClick={() => sayName("Sayan")}>
                Show Name
            </button>
        </div>
    )
}

export default UserButton