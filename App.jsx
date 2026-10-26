
import { useState } from "react";
import "./index.css";



function App() {
  return (
  <div>
    <div class="UserFriendly">
      <h2 class="Goodh2">User Friendly Card </h2>
      <p class="Goodp">This is a simple card built with React that is user friendly.</p>
      <button class="Goodbutton">Learn More</button>
    </div>
    <div class="NotUserFriendly">
      <h2 class="Badh2">Not User Friendly Card</h2>
      <p class="Badp">This is a simple card built with React that is not user friendly.</p>
      <button class="Badbutton">Learn More</button>
    </div>
  </div>

  );
}

export default App;

