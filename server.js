const express = require('express')
const app = express()
const port = 3000
var cors = require('cors')
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send(properties)
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})

const properties = {
    accessory: ['none', 'roundGlasses', 'tinyGlasses', 'shades'],
    body: ['chest', 'breasts'],
    clothing: ['naked', 'shirt', 'dressShirt', 'vneck', 'tankTop', 'dress'],
    clothingColor: ['white', 'blue', 'black', 'green', 'red'],
    eyebrows: ['raised', 'leftLowered', 'serious', 'angry', 'concerned'],
    eyes: ['normal', 'leftTwitch', 'happy', 'content', 'squint', 'simple', 'dizzy', 'wink', 'heart'],
    facialHair: ['none', 'none2', 'none3', 'stubble', 'mediumBeard'],
    graphic: ['none', 'redwood', 'gatsby', 'vue', 'react', 'graphQL'],
    hair: ['none', 'long', 'bun', 'short', 'pixie', 'balding', 'buzz', 'afro', 'bob'],
    hairColor: ['blonde', 'orange', 'black', 'white', 'brown', 'blue', 'pink'],
    hat: ['none', 'none2', 'none3', 'none4', 'none5', 'beanie', 'turban'],
    hatColor: ['white', 'blue', 'black', 'green', 'red'],
    lashes: ['true', 'false'],
    lipColor: ['red', 'purple', 'pink', 'turqoise', 'green'],
    mask: [true, false],
    faceMask: [true, false],
    mouth: ['grin', 'sad', 'openSmile', 'lips', 'open', 'serious', 'tongue'],
    skinTone: ['light', 'yellow', 'brown', 'dark', 'red', 'black']
};