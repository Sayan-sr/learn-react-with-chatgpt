import Child from "./Child";


function Parent({name}){

    return(
        <div>
            <Child name={name} />
        </div>
    )
}

export default Parent