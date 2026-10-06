

function NameInput({name, setName}){

    


    return(
        <div>
            <input 
            type="text" 
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
        </div>
    )
}

export default NameInput