import React from 'react'

  

  function Details() {
    const User = {
      name: "PRINCE",
      location: "CHANDIGARH",
      foodType: "Vegeterian",
      age: 20,
      likes: "listning music",
      twitterUsername: "prince50",
      avatar:"https://res.cloudinary.com/betterdev/image/upload/v1624211301/chris_ge6pzx.jpg"}
    return (
      <div className="App">
        {/* Show user data here */}
        <div className="user-deets">
          <h5> {User.name}</h5>
          <h5>{User.age}</h5>
          <h5>{User.location}</h5>
          <h5>{User.foodType}</h5>
          <h5>{User.likes}</h5> 
          </div>
      </div>
    );
  }

  
  // const rootElement = document.getElementById("root");
  // ReactDOM.render(<App />, rootElement);
  

  
export default Details
