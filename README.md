# BACKEND-LEARN

Learning and Practising backend developement.

# Setup Configurations and Explanations

1. > .gitignore file
2. > .env file

   - To be included in .gitignore file
   - env-specific configs such as db credentials, keys and other sensitive data.
   - loaded by _dotenv_ module

3. > .prettier configs
4. > /src

   - app.js

     - entry of our app
     - initialize express app
     - middlewares configs
       - cors,express.json,cookie-parser

   - constants.js
     - stores database name variable
   - index.js

     - dotenv module config (load from path)
     - connectDB() import from /db/index.js
     - db port listening and error handling
       <br>

   - /controllers
   - /db
     - index.js
   - /middlewares
   - /models
   - /routes
   - /utils
     - aysncHandler.js

5. > dotenv configuration

   - as early as possible environment varibles should be available to entire app.

6. > connecting database

   - PORT, URL as env variable in .env file
   - mongoose installation
   - always use _async/await and try/catch_
   - mongoose and db connection setup in /db/index.js
   - as we have to communicate with db many times, it's good to have a utility file in /utils.

7. > custom api response and error handling
   - whenever any error comes, it should go through ApiError.js
   - some middlewares have to be written

   - /utils/asyncHandler
     - handling async operations more cleanly and efficiently.
   - /utils/ApiError.js
     - node.js api error Class
     - node.js api response Class
     - w
