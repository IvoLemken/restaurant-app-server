# Server for restaurant app

This is a simple server for a restaurant reservation app

## Endpoints

| Method | Path                       | Purpose                             | required parameters   | auth | admin level |
| ------ | -------------------------- | ----------------------------------- | --------------------- | ---- | ----------- |
| POST   | '/signup'                  | Create a new user and get a token   | email, name, password | no   | no          |
| POST   | '/login'                   | Get a token with email & password   | email, password       | no   | no          |
| GET    | '/me'                      | Get information of this user        | none                  | yes  | no          |
| GET    | '/reservations/forDate'    | Get reserved tables for this date   | date                  | no   | no          |
| POST   | '/reservations/all'        | Get all future reservations (incl today) | none             | yes  | yes         |
| POST   | '/reservations/create'     | Create a reservation                | date, tableId         | yes  | yes         |
| POST   | '/reservations/cancel'     | Cancel a reservation                | id                    | yes  | yes         |
| GET    | '/tables'                  | Get a list of all tables            | none                  | no   | no          |
| GET    | '/users/all'               | Get all users                       | none                  | yes  | yes         |
| POST   | '/users/blockUnblock'      | Block or unblock a user             | id, accountBlocked    | yes  | yes         |