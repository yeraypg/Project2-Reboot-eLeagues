# Project2-Reboot-eLeagues

All API Request must be prepended with /api


### Authentication Endpoints

The Authentication flow for the application is:

METHOD | ENDPOINT         | TOKEN | ROL | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|-----|--------------------------|-------------------------------------------------|--------------------
POST   | /auth/signup     | -     | -   | User Signup              | name, username, email, password                 | token
POST   | /auth/login      | -     | -   | User Login               | username, password                              | token


### User Endpoints


METHOD | ENDPOINT         | TOKEN | ROL | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|-----|--------------------------|-------------------------------------------------|--------------------
GET    | /user/profile    | YES   | -   | View own user profile    | -                                         | name, nick, email, age, team, rol, games, trophies
GET    | /user/:ID        | YES   | O   | View user profile by ID  |                                           | name, nick, email, age, team, rol, games, trophies
PUT    | /user/profile    | YES   | -   | Update own user profile  | data                                            | Updated user data
PUT    | /user/:ID        | YES   | O   | Update user profile by ID| userID, Data                                    | Updated user data
DELETE | /user/profile    | YES   | -   | Delete own user account  | password                                        | User deletion confirmation
DELETE | /user/:ID        | YES   | O   | Delete user by ID        | userID                                          | User deletion confirmation


### Team Endpoints


METHOD | ENDPOINT         | TOKEN | ROL | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|-----|--------------------------|-------------------------------------------------|--------------------
GET    | /team            | YES   | -   | View all teams           | -                                               | teams 
GET    | /team/:ID        | YES   | O   | View one team by ID      |                                                 | team
PUT    | /team            | YES   | TL  | Update own user team     | data                                            | Updated team data
PUT    | /team/:ID        | YES   | O   | Update one team by ID    | data                                            | Updated team data
DELETE | /team            | YES   | TL  | Delete own team          |                                                 | Team deletion confirmation
DELETE | /team/:ID        | YES   | O   | Delete one team by ID    |                                                 | Team deletion confirmation
POST   | /team            | YES   | User| Create new team          | name                                            | name, players, leader 


### League Endpoints


METHOD | ENDPOINT         | TOKEN | ROL | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|-----|--------------------------|-------------------------------------------------|--------------------
GET    | /league          | YES   | -   | View all leagues         | -                                               | leagues 
GET    | /league/:ID      | YES   | O   | View one league by ID    | leagueID                                        | leagues by status (open, close) 
PUT    | /league          | YES   | O   | Update own user league   | leagueID, data                                  | Updated league data
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

/*
### Category Endpoints


METHOD | ENDPOINT         | TOKEN | ROL | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|-----|--------------------------|-------------------------------------------------|--------------------
GET    | /category        | YES   | -   | View all categories      | -                                               | categories 
PUT    | /category/:ID    | YES   | O   | Update category by ID    | data                                            | Updated category data
DELETE | /category/:ID    | YES   | O   | Delete category by ID    |                                                 | category deletion confirmation
POST   | /category        | YES   | O   | Create new category      | name                                            | name

### Company Endpoints


METHOD | ENDPOINT         | TOKEN | ROL | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|-----|--------------------------|-------------------------------------------------|--------------------
GET    | /company        | YES   | -   | View all companies      | -                                                 | companies 
PUT    | /company/:ID    | YES   | O   | Update company by ID    | data                                              | Updated company data
DELETE | /company/:ID    | YES   | O   | Delete company by ID    |                                                   | company deletion confirmation
POST   | /company        | YES   | O   | Create new company      | name                                              | name 
*/


