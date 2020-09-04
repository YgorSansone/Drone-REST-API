
# Drone api - Node
---
[![Node.js](https://img.shields.io/badge/-Node.js-67a05b?logo=Node.js&logoColor=ffffff&link=https://github.com/YgorSansone/Agar.io_server_node)](https://github.com/YgorSansone/Drone-backend/)
[![Git](https://img.shields.io/badge/-Git-f1361f?logo=Git&logoColor=white&link=https://github.com/YgorSansone)](https://github.com/YgorSansone)

### CRUD RestAPI in NodeJS and SQLite for the control drones status
This solution includes the models for Drone as well as CRUD.
The Database is on code.

## About

- [x] SQLite    -> database
 
- [x] Sequelize -> ORM
 
- [x] Express   -> framework
 
- [x] Nodemon   -> tool

## Installation
```bash
npm install
```
```bash
npm init
```
```bash
npm install --save sqlite3 sequelize nodemon express
```

## Usage
1. Run the application.
```bash
node server.js
```
## Commands
#### List: GET /drones/
#### Detail: GET /drones/{id}
#### Update: PUT /drones/{id}
#### Delete: DEL /drones/{id}
#### Create: POST /drones/
#### Paginate: GET /drones?_page=7
#### Limit: GET /drones?_limit=20
#### Paginate and limit: GET /drones?_page=7&_limit=20
#### Sort: GET /drones?_sort=fly
#### Order: GET /drones?_order=asc
#### Order by: GET /drones_sort=current_fly&_order=asc

