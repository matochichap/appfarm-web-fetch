const fs = require("fs")
const functions = require("./out/functions.js")
const result = Object.fromEntries(
    Object.entries(functions).map(([k, v]) => [k, v.toString()])
)
fs.writeFile("./out/functions.json", JSON.stringify(result, null, 4), (err) => {
    if (err) {
        console.error(err)
    }
})
