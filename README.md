# Movie-Shop-370
A group software project on CS-370 focuses on the searching, buying, and watching of movies.
Working with React, Javascript, CSS, PostgreSQL.

## Getting Started

1. Set-up SSH public and private keys
    ```shell
    ssh-keygen
    ```
2. Clone this repository 
    ```shell
    git clone git@github.com:Julian-Centen01/Movie-Shop-370.git
    ```
3. Install dependencies 
    ```shell
    # Install backend dependencies 
    cd Movie-Shop-370/Application/node-postgres
    npm install
    cd ../..
    
    # Install frontend dependencies 
    cd Movie-Shop-370/Application/node-postgres
    npm install
    ```
4. Run frontend and backend
    ```shell
    # Start backend in one terminal
    cd Movie-Shop-370/Application/node-postgres
    node backend/index.js
   
    # Start frontend in one terminal
    cd Movie-Shop-370/Application/react-postgres
    npm start 
    ```