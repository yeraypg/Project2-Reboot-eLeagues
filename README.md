# Project2-Reboot-eLeagues

All API Request must be prepended with /api


### Authentication Endpoints

The Authentication flow for the application is:

METHOD | ENDPOINT         | TOKEN | ROL | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|-----|--------------------------|-------------------------------------------------|--------------------
POST   | /user/           | -     | -   | User Signup              | name, nick, email, password                     | email and token
POST   | /user/login      | -     | -   | User Login               | email, password                                 | email and token


### User Endpoints


METHOD | ENDPOINT         | TOKEN | ROL | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|-----|--------------------------|-------------------------------------------------|--------------------
GET    | /user/profile    | YES   | U   | View own user profile    | -                                               | user own profile
GET    | /user/:ID        | YES   | O   | View user profile by ID  |                                                 | user profile
GET    | /user/           | YES   | O   | View all users           |                                                 | list of all users
PUT    | /user/profile    | YES   | U   | Update own user profile  | name, password, email, nick, age                | Updated user data
PUT    | /user/:ID        | YES   | O   | Update user profile by ID| name, password, email, nick, age, rol           | Updated user data
DELETE | /user/profile    | YES   | U   | Delete own user account  |                                                 | User deletion confirmation
DELETE | /user/:ID        | YES   | O   | Delete user by ID        |                                                 | User deletion confirmation


### Team Endpoints


METHOD | ENDPOINT         | TOKEN | ROL | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|-----|--------------------------|-------------------------------------------------|--------------------
GET    | /team            | YES   | U   | View all teams           | -                                               | List of all teams 
GET    | /team/:ID        | YES   | U   | View one team by ID      | -                                               | team data
PUT    | /team/profile    | YES   | TL  | Update own user team     | name                                            | Updated team name
PUT    | /team/:ID        | YES   | O   | Update one team by ID    | name                                            | Updated team name
PATCH  | /team/addplayer  | YES   | TL  | add player to team       | userID                                          | Updated team
PATCH  | /team/deleteplayer | YES   | TL  | delete player from team | userID                                         | Updated team
DELETE | /team/profile    | YES   | TL  | Delete own team          |                                                 | Team deletion confirmation
DELETE | /team/:ID        | YES   | O   | Delete one team by ID    |                                                 | Team deletion confirmation
POST   | /team            | YES   | User| Create new team          | name                                            | name, players, leader 


### League Endpoints


METHOD | ENDPOINT         | TOKEN | ROL | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|-----|--------------------------|-------------------------------------------------|--------------------
GET    | /league          | YES   | -   | View all leagues         | -                                               | leagues 
GET    | /league/:ID      | YES   | O   | View one league by ID    |                                                 | leagues by status (open, close) 
PUT    | /league/:ID      | YES   | O   | Update one league by ID  | data                                            | Updated league data
PUT    | /league/:ID/winners | YES   | O   | Assign Trophy         | teamID                                          | team players, trophy
DELETE | /league/:ID      | YES   | O   | Delete one league by ID  |                                                 | League deletion confirmation
POST   | /league          | YES   | O   | Create new league        | name, Trophie, Game                             | name, teams, organizer, Trophie, game, status 


### Game Endpoints


METHOD | ENDPOINT         | TOKEN | ROL | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|-----|--------------------------|-------------------------------------------------|--------------------
GET    | /game            | YES   | -   | View all games           | -                                               | games 
GET    | /game/:ID        | YES   | -   | View game by ID          |                                                 | game
PUT    | /game/:ID        | YES   | O   | Update game by ID        | data                                            | Updated game data
DELETE | /game/:ID        | YES   | O   | Delete game by ID        |                                                 | game deletion confirmation
POST   | /game            | YES   | O   | Create new game          | name, categories, company                       | name, categories, image, company


### Trophy Endpoints


METHOD | ENDPOINT         | TOKEN | ROL | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|-----|--------------------------|-------------------------------------------------|--------------------
GET    | /trophy          | YES   | -   | View all trophies        | -                                               | trophies 
GET    | /trophy/:ID      | YES   | -   | View trophy by ID        |                                                 | trophy 
PUT    | /trophy/:ID      | YES   | O   | Update trophy by ID      | data                                            | Updated trophy data
DELETE | /trophy/:ID      | YES   | O   | Delete trophy by ID      |                                                 | Trophy deletion confirmation
POST   | /trophy          | YES   | O   | Create new trophy        | name                                            | name, image

