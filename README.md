# Bootcamp backend

A demo REST API for storing and fetching user and IP address data. A database is required, MySQL is used in this implementation.

The app is implemented by Java Script and these additional packages needed for running the app: express, cors, helmet.: express, cors, helmet, mysql (or other database package if you want to run the db on some other brand).

## Install
Clone the repository and install packages:
```bash
git clone [repo url]
npm install
```
The app needs the following environment variables, add these to .env
```bash
SQL_SERVER=[set db uri]
auth_user=[set api username]
auth_pass=[set api password]
```
## API services

Here are the API services.
```bash
urlToAPI + "/requestAuth";
urlToAPI + "/user/auth";
urlToAPI + "/user";
urlToAPI + "/ipAddr
```
**/requestAuth:** implements POSTing a new user with email parameter.

**/user/auth:** implements user authentication, user must be found on db (username, password).

**/user:** implements fetching and storing user data, uses basic authentication.

**/ipAddr:** implements fetching and storing IP address data.

## Frontend

Here is a frontend app for testing this REST API: 
https://github.com/dieselpolle/bootcamp_demo
