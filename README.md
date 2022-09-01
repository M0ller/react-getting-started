# react-getting-started


Börja ett tomt projekt och ha installerat node.js redan.

installera Vite först genom: 
``` 
npm init vite@latest .
```
välj react.
Efter det skriver du ``` npm install ```

För att använda reacts routing skriv in:
```
npm install react-router-dom
```

starta react genom:
```
npm run dev
```
________________
Ytterligare installation av [json server](https://www.npmjs.com/package/json-server) och [concurretly](https://www.npmjs.com/package/concurrently):

```
npm i json-server
```

```
npm i concurrently
```

Lägg till nya kommandon i Package.json filen för att starta json-server och concurrently samtidigt.
```
"server": "json-server --watch db.json",
"all": "concurrently \"npm run server\" \"npm run dev\""
```
