
# Book Finder

A web app to search for books. The app facilitates a user input in the search bar and returns the matching items with Name Author and its Average Rating.

## Technologies 

Project is created with the following technologies :

React : Client side appilication (Port 5173)

Node  : Query Server (Port 3000) and Data Server (Port 4000)

## 


## Features

- Search for Books 
- Live previews as cards 
- Error notification if the Search fails


## API Reference

#### Query Service - Handle user input

```http
  GET /api/search
```

| Query | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Search Keyword` | `string` | **Required**

#### Data Service - Request from Query service

```http
  GET /api/fetch-books
```

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| Search Keyword      | `string` | **Required**. Keyword to fetch books data |




## Installation

Clone the repository

```bash
  cd data-service 
  npm install 
  npm start

  cd query service
  npm install 
  npm start

  cd client 
  npm run dev

```
Access **http://localhost:5173/** over the browser for the UI
