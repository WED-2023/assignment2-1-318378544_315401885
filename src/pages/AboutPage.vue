<template>
    <div class="about-page">
      <div class="box">
        <div class="about-section">
          <h1 class="about-title">About Us</h1>
          <div class="about-description">
            <p>
                We are two students passionate about cooking and technology.
                Our goal is to provide food enthusiasts with a platform to discover and explore delicious recipes from around the world.
            </p>
            <p>
                This web app utilizes the Spoonacular API,
                which allows us to fetch a wide variety of recipes 
                and provide users with personalized search options based on their dietary preferences and restrictions.
            </p>
            <p>
                Through this project, we aim to make cooking more accessible
                 and enjoyable for everyone, whether you're a beginner or an 
                 experienced chef. We hope you find inspiration and delight 
                 in the culinary journey we've created.
            </p>
          </div>
        </div>
        <div class="developers-section">
          <h2 class="developers-title">Meet the Developers</h2>
          <div class="developer">
            <div class="developer-image">
              <img
                src="https://media.licdn.com/dms/image/v2/D4D03AQFY5_qbNd174w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1714631082734?e=1731542400&v=beta&t=oTiEGN52Lg5_LwC8ogA5fMQAaOCf5NRht0CavnVzIME"
                alt="Yael Kanevsky"
              />
            </div>
            <div class="developer-info">
              <h3 class="developer-name">Yael Kanevsky</h3>
              <p class="developer-description">
                4rd year student at Ben Gurion University of the Negev, studying
                Information Systems Engineering.
              </p>
            </div>
          </div>
          <div class="developer">
            <div class="developer-image">
              <img
                src="https://media.licdn.com/dms/image/v2/C4D03AQH1aAqfBjtLnA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1660598585893?e=1731542400&v=beta&t=h8QkXHrY8GHVcck3OL2CSy7fTTFcd09a4HDRizbPPpI"
                alt="Shelly"
              />
            </div>
            <div class="developer-info">
              <h3 class="developer-name">Shelly</h3>
              <p class="developer-description">
                3rd year student at Ben Gurion University of the Negev, studying
                Information Systems Engineering.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "AboutPage",
  };
  </script>
  
  <style scoped>
  .about-page {
    display: flex;
    justify-content: center;
    padding-top: 2em;
  }
  
  .box {
    border: 1px solid #cd5c5c; 
    border-radius: 8px;
    padding: 2rem;
    background: linear-gradient(
    to right,
        rgba(205, 92, 92, 0.1), 
        rgba(205, 92, 92, 0.3), 
        rgba(205, 92, 92, 0.5)  
  );
    border-radius: 10px;
    width: 70%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    margin-bottom: 2rem;
  }
  
  .about-title {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  
  .about-description {
    line-height: 1.5;
    font-size: 1.3rem;
    width: 70%;
  }
  
  .developers-title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  
  .developer {
    display: flex;
    align-items: center;
    padding: 1em;
    margin-bottom: 1rem;
  }
  
  
  .developer-image img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 50%; 
  
  }
  
  .developer-info {
    flex-grow: 1;
  }
  
  .developer-name {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    padding-left: 1em;
  }
  
  .developer-description {
    line-height: 1.5;
    padding-left: 1em;
    font-size: 1.3rem;
  }
  

  a:link {
    color: rgb(36, 49, 36);
    background-color: transparent;
    text-decoration: none;
  }
  
  a:visited {
    color: rgb(8, 75, 19);
    background-color: transparent;
    text-decoration: none;
  }
  
  a:hover {
    color: rgb(65, 57, 57);
    background-color: transparent;
    text-decoration: underline;
  }
  </style>