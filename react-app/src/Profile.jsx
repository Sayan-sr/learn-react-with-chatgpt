function Profile(){
    const name = "Sayan"
    const role = "Python Developer"

    return(
        <>
        <h2>Hello, {name} this side</h2>
        <p>I am a {role}</p>
        </>
    )
}

export default Profile  // Meaning: I am allowing other files to use this component, This is JavaScript, When you create a component in a separate file, it is private to that file. If you want to use it in another file, you must export it.


// Real-Life Analogy

// Think:

// Profile.jsx = your room
// App.jsx = your friend’s room

//  If your friend wants your book:

// You must give permission (export)
// Your friend must take it (import)


// Why import?
// To use a component from another file 

// why export? 
// To allow other files to use your component 


// Do we always import into App?
// ❌ No, components can be used anywhere