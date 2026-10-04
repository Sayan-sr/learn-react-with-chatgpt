import useLocalStorage from "./useLocalStorage";


function LocalStorageExample(){

    const [name, setName] = useLocalStorage("name", "")


    return(
        <div>
            <input 
            type="text" 
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />

            <h2>Hello, {name}</h2>

            <button onClick={() => setName("")}>
                Clear
            </button>
        </div>
    )
}

export default LocalStorageExample