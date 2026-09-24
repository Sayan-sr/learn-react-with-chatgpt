

function ButtonClick(){

    function handleClick(){
        alert('Button Clicked')
    }

    return(
        <div>
            <button onClick={handleClick()}>
                Click me
            </button>
        </div>
    )
}

export default ButtonClick


// Now Let's Learn Something Very Important
// Version 1
// onClick={handleClick}
// React stores a reference to the function.


// Think: 
// "Hey React, when the button is clicked,
// run handleClick later."
// Nothing happens immediately 
// The alert appears only when you click.


// Version 2
// onClick={handleClick()}
// Notice the parentheses: ()
// This mean: "Run the function right now."
// So when React renders the page, it immediately executes: handleClick()
// which means: alert("Button Clicked")
// runs instantly.
// You may see the alert as soon as the page loads.


// JavaScript Example
// Suppose:
// function greet() {
//     console.log("Hello");
// }

// Function Reference: greet 


// means: Here is the function.
// It is not executed. 


// Function Call
// greet()
// means: Execute the function now.
// Output: Hello 


// React Works the Same Way
// onClick={handleClick}
// ✔️ Pass the function

// onClick={handleClick()}
// ❌ Execute immediately


// Very Important Rule
// No Arguments
// Use: onClick={handleClick}

// With Arguments
// Use: onClick={() => handleClick("Sayan")}
// Not: onClick={handleClick("Sayan")}

// because that would execute immediately.


