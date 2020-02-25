# Discord Bot

A basic chat bot that interacts with users by responding to commands and key phrases.

## Prerequisite Installations

- [NodeJS](https://nodejs.org/en/) v10.16.0 or greater
- NPM v6.9.0 or greater (At the time of making this documentation, NPM comes with the Node.js installation)
- [MySQL](https://mariadb.com/) v8.0.19 or greater

## Ensure MySQL is installed and running (MacOS)
1. Install the `MySQL` server is installed.
```
$ brew install mysql
```

2. Then start the server.
```
$ mysql.server start
```

3. To access the server you can enter the following command.
```
$ mysql -u root -p <PASSWORD>
```

4. To get the discord bot to work, you must run the `SQL` query in the `src/responses/Tables.sql` file to create the tables for the project.

## How to run (MacOS/Windows)

1. Download the repository to your local machine with the following code.

```
$ git clone https://github.com/AroneSusau/Zendesk-Coding-Challenge
```

2. Navigate to the v1 repository directory in your MacOS Terminal or equivalent command line application.
3. Install all npm modules with the following code.

```
$ npm install
```

4. Add your discord API key to your environment variables.
```
export BOT_KEY=<API KEY GOES HERE>
```

5. Run the program with the following code.

```
$ npm start
```
