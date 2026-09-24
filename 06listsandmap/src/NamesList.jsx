

function NameList(){

    const names = ["Sayan", "Disha", "Rahul", "Priya"]

    return(
        <div>
            {
                names.map((name) => {
                    return <h2>{name}</h2>
                })
            }
        </div>
    )
}

export default NameList