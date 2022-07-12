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


### Profile Endpoints


METHOD | ENDPOINT         | TOKEN | ROL | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|-----|--------------------------|-------------------------------------------------|--------------------
GET    | /profile         | YES   | -   | View own user profile    | -                                               | name, nick, email, age, team, rol, games, trophies 
PUT    | /profile         | YES   | -   | Update own user profile  | userID, data                                    | Updated user data
DELETE | /profile         | YES   | -   | Delete own user account  | password                                        | User deletion confirmation


### Team Endpoints


METHOD | ENDPOINT         | TOKEN | ROL | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|-----|--------------------------|-------------------------------------------------|--------------------
GET    | /team            | YES   | -   | View all teams           | -                                               | teams 
PUT    | /team            | YES   | TL  | Update own user team     | teamID, data                                    | Updated team data
DELETE | /team            | YES   | TL  | Delete own team          | teamID                                          | Team deletion confirmation
POST   | /team            | YES   | User| Create new team          | name                                            | name, players, leader 


### League Endpoints


METHOD | ENDPOINT         | TOKEN | ROL | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|-----|--------------------------|-------------------------------------------------|--------------------
GET    | /league          | YES   | -   | View all leagues         | -                                               | leagues 
GET    | /league/status   | YES   | -   | View leagues by status   | -                                               | leagues by status (open, close) 
PUT    | /league          | YES   | O   | Update own user league   | leagueID, data                                  | Updated league data
DELETE | /league          | YES   | O   | Delete own league        | leagueID                                        | League deletion confirmation
POST   | /league          | YES   | O   | Create new league        | name, Trophie, Game                             | name, teams, organizer, Trophie, game, status 


### Game Endpoints


METHOD | ENDPOINT         | TOKEN | ROL | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|-----|--------------------------|-------------------------------------------------|--------------------
GET    | /game            | YES   | -   | View all games           | -                                               | games 
PUT    | /game            | YES   | O   | Update game              | gameID, data                                    | Updated game data
DELETE | /game            | YES   | O   | Delete game              | gameID                                          | game deletion confirmation
POST   | /game            | YES   | O   | Create new game          | name, categories, company                       | name, categories, image, company


### Trophy Endpoints


METHOD | ENDPOINT         | TOKEN | ROL | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|-----|--------------------------|-------------------------------------------------|--------------------
GET    | /trophy          | YES   | -   | View all trophies        | -                                               | trophies 
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



