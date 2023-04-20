To start the project, clone or download the repo on github:

### ` git@github.com:woengus/developpez-un-tableau-de-bord.git`

install the application with:
`npm install`
To run the app, do this:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

To use the micro api for the sport analytics and dashbord Sportsee, you need to start another node project and follow this guide :

1. General information
   To start this project, you are free to use Docker or not. In this documentation, we will see several methods to launch the project easily.

2. Project (without Docker)
   2.1 Prerequisites
   NodeJS (version 12.18)
   Yarn
   If you are working with several versions of NodeJS, we recommend you install nvm. This tool will allow you to easily manage your NodeJS versions.

2.2 Launching the project
Fork the repository
Clone it on your computer.
The yarn command will allow you to install the dependencies.
The yarn dev command will allow you to run the micro API. 3. Project (with Docker)
2.1 Prerequisites
Docker Desktop
2.2 Starting the project
The docker image build --no-cache -t micro-api . command will allow you to build your image.
The docker container run --name micro-api -p 3000:3000 -dt micro-api yarn command will allow you to create your Docker container and run your image on port 3000.
The docker container stop micro-api command will allow you to stop your micro-api.
The docker container rm micro-api command will allow you to delete your micro-api container.
2.3 Vscode and container remotes
Finally, if you have VsCode, you can easily launch your project in a docker environment.

You will need the Remote Development extension. Once you have this extension installed, just click on the Reopen in Container button.

Once in the container, run the yarn dev command.

4. Endpoints
   4.1 Possible endpoints
   This project includes four endpoints that you will be able to use:

http://localhost:3000/user/${userId} - retrieves information from a user. This first endpoint includes the user id, user information (first name, last name and age), the current day's score (todayScore) and key data (calorie, macronutrient, etc.).
http://localhost:3000/user/${userId}/activity - retrieves a user's activity day by day with kilograms and calories.
http://localhost:3000/user/${userId}/average-sessions - retrieves the average sessions of a user per day. The week starts on Monday.
http://localhost:3000/user/${userId}/performance - retrieves a user's performance (energy, endurance, etc.).
Warning, currently only two users have been mocked. They have userId 12 and 18 respectively.

4.2 Examples of queries
http://localhost:3000/user/12/performance - Retrieves the performance of the user with id 12
http://localhost:3000/user/18 - Retrieves user 18's main information.
