# Project2-Reboot-eLeagues

All API Request must be prepended with /api


### Authentication Endpoints

The Authentication flow for the application is:

METHOD | ENDPOINT         | TOKEN | ROL | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|-----|--------------------------|-------------------------------------------------|--------------------
POST   | /auth/signup     | -     | -   | User Signup              | name, username, email, password                 | token
POST   | /auth/login      | -     | -   | User Login               | username, password                              | token
POST   | /auth/check      | YES   | -   | Auth Token check         | -                                               | 
POST   | /auth/checkRol   | YES   | YES | User Rol Check           | -                                               | role


### Profile Endpoints


METHOD | ENDPOINT         | TOKEN | ROL | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|-----|--------------------------|-------------------------------------------------|--------------------
GET    | /profile         | YES   | -   | View own user profile    | -                                               | name, nick, email, age, team, rol, games, trophies 
PUT    | /profile         | YES   | -   | Update own user profile  | name, nick, email, age, team, games             | Updated user data
DELETE | /profile         | YES   | -   | Deletes own user account | password                                        | User deletion confirmation


### Team Endpoints


METHOD | ENDPOINT         | TOKEN | ROL | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|-----|--------------------------|-------------------------------------------------|--------------------
GET    | /team            | YES   | -   | View all teams           | -                                               | teams 
PUT    | /team            | YES   | TL  | Update own user team     | team, params                                    | Updated team data
DELETE | /team            | YES   | TL  | Deletes own team         | password                                        | Team deletion confirmation
POST   | /team            | YES   | User| Create new team          | name                                            | name, players, leader 


### League Endpoints


METHOD | ENDPOINT         | TOKEN | ROL | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|-----|--------------------------|-------------------------------------------------|--------------------
GET    | /league          | YES   | -   | View all leagues         | -                                               | leagues 
PUT    | /league          | YES   | O   | Update own user league   | league, params                                  | Updated league data
DELETE | /league          | YES   | O   | Deletes own league       | password                                        | League deletion confirmation
POST   | /league          | YES   | O   | Create new league        | name, Trophie, Game                             | name, teams, organizer, Trophie, game, status 

