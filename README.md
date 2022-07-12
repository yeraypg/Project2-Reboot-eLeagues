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
PUT    | /profile         | YES   | Update own user profile  | name, nick, email, age, team, games             | Updated user data
DELETE | /profile         | YES   | Deletes own user account | password                                        | User deletion confirmation


### Team Endpoints


METHOD | ENDPOINT         | TOKEN | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|--------------------------|-------------------------------------------------|--------------------
GET    | /team            | YES   | View own user team       | -                                               | name, teams 
PUT    | /team            | YES   | Update own user team     | nick, team                                      | Updated user data
DELETE | /profile         | YES   | Deletes own user account | password                                        | User deletion confirmation


