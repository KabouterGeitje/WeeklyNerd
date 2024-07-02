import { App } from '@tinyhttp/app'
import { logger } from '@tinyhttp/logger'
import { Liquid } from 'liquidjs';
import serveStatic from 'serve-static';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

import { sprekers, vakken, leerdoelen, reflectie, toekomst } from './data/sprekers.js'

const __filename = fileURLToPath(import.meta.url); // Convert the URL of the current module to a file path
const __dirname = dirname(__filename); // Get the directory name of the current module

const engine = new Liquid();
const app = new App()
//dit moet gewoon om liquid templates te kunnen renderen
const renderTemplate = (template, data) => {
  return engine.renderFileSync(template, data)
}
// dit moet gewoon om objects in te kunnen laden
function convertion(object) {
  return Object.keys(object).map(key => object[key])
}

app
.use(logger())
.use(serveStatic(path.join(__dirname, 'src')))
.engine('liquid', engine)
.set('views', './views')
.set('view engine', 'liquid')
.listen(7777, () => console.log(`Listening on http://localhost:7777`))
  
// naam van document wordt hier veranderd naar Home
app.get('/', async (req, res) => {
  return res.send(renderTemplate('views/index.liquid', {
    hoofdTitel: "Weekly Nerd"
  }))
})

app.get('/:name', async (req, res) => {
  // naam van de pagina wordt uit de url gehaald.
  const url = req.params.name;
  // als de naam uit de url gelijk is aan sprekers render dan de sprekers pagina. De content kan allemaal in detail.liquid gezet worden,
  // maar het komt er pas echt in te staan wanneer dat hier wordt aangegeven (meegegeven) Zoals bij reflectie en toekomst. Die worden
  //specifiek aan de mijn ontwikkeling pagina gegeven.
  if (url === "sprekers") {
    return res.send(renderTemplate('views/detail.liquid', {
      content: convertion(sprekers),
      url: url,
      secondTitel: "Sprekers",
      hoofdTitel: "Weekly Nerd"
    }))
  } else if (url === "mijn-ontwikkeling") {
    return res.send(renderTemplate('views/detail.liquid', {
      content: convertion(vakken),
      url: url,
      leerdoelen: convertion(leerdoelen),
      reflectie: reflectie,
      toekomst: toekomst,
      secondTitel: "Mijn Ontwikkeling",
      hoofdTitel: "Weekly Nerd"
    }))
  }
})


// als iemand naar /sprekers/huppeldepup gaat dan is :name huppeldepup. Hierdoor is de waarde van de url huppeldepup.
// als huppeldepup in het object sprekers voorkomt render dan de sprekerspagina met de value van de key huppeldepup
// als huppeldupup niet bestaat dan wordt de error pagina gerendered. 
app.get('/sprekers/:name', async (req, res) => {
  const url = req.params.name;
  if (sprekers[url]) {
    return res.send(renderTemplate('views/sprekers.liquid', {
      spreker: sprekers[url],
      titel: sprekers[url].naam,
      secondTitel: "Sprekers",
      hoofdTitel: "Weekly Nerd",
      urlSecond: "sprekers"
    }))
  } else {
    return res.status(404).send(renderTemplate('views/error.liquid', {
      titel: "Error"
    }))
  }
})


app.get('mijn-ontwikkeling/:name', async (req, res) => {
  const url = req.params.name;
  if (vakken[url]) {
    return res.send(renderTemplate('views/vakken.liquid', {
      vak: vakken[url],
      titel: vakken[url].titel,
      secondTitel: "Mijn Ontwikkeling",
      hoofdTitel: "Weekly Nerd",
      urlSecond: "mijn-ontwikkeling"
    }))
  } else {
    return res.status(404).send(renderTemplate('views/error.liquid', {
      titel: "Error"
    }))
  }

})


