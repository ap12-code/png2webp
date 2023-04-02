const fs = require("fs")
const sharp = require("sharp")

if (!fs.existsSync("./output")) fs.mkdirSync("./output")

fs.readdir("./input", (err, files) => {
    files.forEach((v, i) => {
        if (v.endsWith(".png")) {
            sharp(v)
            .webp()
            .toFile(`./output/${v.replace(".png", ".webp")}`)
            .then(() => {
                console.log(`Coverted: ${v}`)
            })
        }
    })
})
