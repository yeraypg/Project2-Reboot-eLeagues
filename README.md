# Project2-Reboot-eLeagues

All API Request must be prepended with /api


### Authentication Endpoints

The Authentication flow for the application is:

METHOD | ENDPOINT         | TOKEN | ROL | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|-----|--------------------------|-------------------------------------------------|--------------------
POST   | /auth/signup     | -     | -   | User Signup              | name, username, email, password                 | token
POST   | /auth/login      | -     | -   | User Login               | username, password                              | token
POST   | /auth/check      | YES   | -   | Auth Token check         | -                                               | 
POST   | /auth/checkRol   | YES   | YES | User Rol Check           | email                                           | role


### User Endpoints


METHOD | ENDPOINT         | TOKEN | ROL | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|-----|--------------------------|-------------------------------------------------|--------------------
GET    | /user            | YES   | -   | View own user profile    | -                                               | name, nick, email, age, team, rol, games, trophies 
PUT    | /user            | YES   | -   | Update own user profile  | data                                            | Updated user data
DELETE | /user            | YES   | -   | Delete own user account  | password                                        | User deletion confirmation
GET    | /user/:ID        | YES   | O   | View user profile by ID  | userID                                          | name, nick, email, age, team, rol, games, trophies
PUT    | /user/:ID        | YES   | O   | Update user profile by ID| userID, Data                                    | Updated user data
DELETE | /user/:ID        | YES   | O   | Delete user by ID        | userID                                          | User deletion confirmation


### Team Endpoints


METHOD | ENDPOINT         | TOKEN | ROL | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|-----|--------------------------|-------------------------------------------------|--------------------
GET    | /team            | YES   | -   | View all teams           | -                                               | teams 
GET    | /team/:ID        | YES   | O   | View one team by ID      | teamID                                          | team
PUT    | /team            | YES   | TL  | Update own user team     | data                                            | Updated team data
DELETE | /team            | YES   | TL  | Delete own team          | teamID                                          | Team deletion confirmation
POST   | /team            | YES   | User| Create new team          | name                                            | name, players, leader 


### League Endpoints


METHOD | ENDPOINT         | TOKEN | ROL | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|-----|--------------------------|-------------------------------------------------|--------------------
GET    | /league          | YES   | -   | View all leagues         | -                                               | leagues 
GET    | /league/:ID      | YES   | O   | View one league by ID    | leagueID                                        | leagues by status (open, close) 
PUT    | /league          | YES   | O   | Update own user league   | leagueID, data                                  | Updated league data
DELETE | /league          | YES   | O   | Delete own league        | leagueID                                        | League deletion confirmation
POST   | /league          | YES   | O   | Create new league        | name, Trophie, Game                             | name, teams, organizer, Trophie, game, status 


### Game Endpoints


METHOD | ENDPOINT         | TOKEN | ROL | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|-----|--------------------------|-------------------------------------------------|--------------------
GET    | /game            | YES   | -   | View all games           | -                                               | games 
GET    | /game/:ID        | YES   | -   | View game by ID          | gameID                                          | game
PUT    | /game            | YES   | O   | Update game              | gameID, data                                    | Updated game data
DELETE | /game            | YES   | O   | Delete game              | gameID                                          | game deletion confirmation
POST   | /game            | YES   | O   | Create new game          | name, categories, company                       | name, categories, image, company


### Trophy Endpoints


METHOD | ENDPOINT         | TOKEN | ROL | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|-----|--------------------------|-------------------------------------------------|--------------------
GET    | /trophy          | YES   | -   | View all trophies        | -                                               | trophies 
GET    | /trophy/:ID      | YES   | -   | View trophy by ID        | trophyID                                        | trophy 
PUT    | /trophy          | YES   | O   | Update trophy            | trophyID, params                                | Updated trophy data
DELETE | /trophy          | YES   | O   | Delete trophy            | trophyID                                        | Trophy deletion confirmation
POST   | /trophy          | YES   | O   | Create new trophy        | name                                            | name, image


### Category Endpoints


METHOD | ENDPOINT         | TOKEN | ROL | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|-----|--------------------------|-------------------------------------------------|--------------------
GET    | /category        | YES   | -   | View all categories      | -                                               | categories 
PUT    | /category        | YES   | O   | Update category          | categoryID, data                                | Updated category data
DELETE | /category        | YES   | O   | Delete category          | categoryID                                      | category deletion confirmation
POST   | /category        | YES   | O   | Create new category      | name                                            | name



