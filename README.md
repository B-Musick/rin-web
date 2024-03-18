# JSON-server
https://www.freecodecamp.org/news/json-server-for-frontend-development/
- Used as mock server until I completed setting up api

## Install
```
npm install -g json-server
```

## db.json
- Create this file and add data to it in json format
- Restful endpoints created based on the input data
- Giving each object an id will allow you to access it with parameters
```
"plants":[
    { "id": "1", "genus": "populous", "species": "tremuloides", "family":"populaceae", "commonName": "trembling aspen", "petals": 2, "sepals":2 },
    { "id": "2", "genus": "betula", "species": "papyrifera", "family": "betulaceae", "commonName": "white birch", "petals": 3, "sepals": 2 }
],
```
- Can then access plant as:
```
plants/:id
```
## Start
```
json-server --watch db.json
```