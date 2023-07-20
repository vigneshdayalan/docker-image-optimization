import React from 'react';

const App = () => {
  const linkedinProfileUrl = 'https://www.linkedin.com/in/vignesh-dayalan';

  return (
    <div>
      <h1>Hello, Dockerized React App!</h1>
      <p>Hey there! This is Vignesh Dayalan.</p>
      <p>Feel free to reach out to me on my <a href={linkedinProfileUrl}>LinkedIn profile</a></p>
      <p>Thank you for visiting my Dockerized React app. Have a great day! Cheers!</p>
    </div>
  );
}

export default App;
