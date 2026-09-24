// To know that how index actually works 

function NameListIndex(){

    const names = ["Sayan", "Disha", "Rahul", "Priya"]

    return(
        <div>
            {
                names.map((name, index) => {
                    return <h2>{index} - {name}</h2>
                })
            }
        </div>
    )
}

export default NameListIndex