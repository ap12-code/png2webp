const fs = require("fs")
const sharp = require("sharp")
const config = require("./config.json")

if (!fs.existsSync("./output")) fs.mkdirSync("./output")

fs.readdir("./input", (err, files) => {
    files.forEach((v, i) => {
        if (v.endsWith(".png")) {
            sharp(v)
            .resize(config.size.width, config.size.height)
            .webp()
            .toFile(`./output/${config.name_format.replace("{old_name}", v.replace(".png", "")).replace("{index}", i)}`)
            .then(() => {
                console.log(`Coverted: ${v}`)
            })
        }
    })
})
