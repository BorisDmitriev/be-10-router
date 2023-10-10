// Your Code goes here
const express = require("express")
const app = express()
const port = process.env.PORT || 3000
const router = require("./router/books.router")

// Middleware zum Parsen von JSON-Daten
app.use(express.json())


// Den Router in der Hauptanwendung verwenden
app.use("/api/books", router);

// Server starten
app.listen(port, () => {
    console.log("Server läuft auf Port", String(port))
})

// Codebuddy-Stuff :)
module.exports = app
