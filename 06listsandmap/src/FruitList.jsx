// What Is key?
// Now suppose React renders:
{/* <h2>Sayan</h2>
<h2>Disha</h2>
<h2>Rahul</h2>
<h2>Priya</h2> */}


// Later your array changes:
// const names = ["Sayan", "Rahul", "Priya"];

// Notice: Disha was removed. 


// React now has to figure out:
// Which item disappeared?
// Which item stayed?
// Which item moved?


// To do this efficiently, React needs an identifier.
// That identifier is: key 


// Example
// names.map((name, index) => {
//     return <h2 key={index}>{name}</h2>
// })


// React sees:
{/* <h2 key={0}>Sayan</h2>
<h2 key={1}>Disha</h2>
<h2 key={2}>Rahul</h2>
<h2 key={3}>Priya</h2> */}
// Now React can track items more easily. 


// Real-Life Analogy 
// Imagine your classroom.
// Students:
// Sayan
// Disha
// Rahul
// Priya


// Suppose I ask: 
// Remove Disha. 

// How do I know which student is Disha? 
// Because each student has a: Roll Number 


// Example:
// Roll	Name
// 1	    Sayan
// 2	    Disha
// 3	    Rahul
// 4	    Priya
// The roll number is like React's key.


function FruitList(){

    const fruits = ["Apple", "Mango", "Banana", "Orange"]

    return(
        <div>
            {
                fruits.map((fruit, index) => {
                    return <h2 key={index}>{index} - {fruit}</h2>
                })
            }
        </div>
    )
}

export default FruitList


// Important Question 
// Q. Why do we use key in React lists? 
// React uses keys to identify each item in a list so that it can track which item was added, removed, updated or moved. 

// When using map(): 
// The key goes on the outermost element that is returned from the map callback.