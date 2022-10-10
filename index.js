const express = require('express')
const res = require('express/lib/response')
const app = express()
const port = 3000

const path = require('path')
app.use('/static', express.static(path.join(__dirname, 'public')))
app.set('view engine','ejs')
app.set('views',__dirname+'/views')

app.get('/', (req, res) => {
    //res.send('Pagina Principal')
    console.log(__dirname)
    res.render('index')
})

app.get('/Educacion', (req, res) => {
    res.render('educacion',{
        titulo:"seccion Educacion",
        descripcion:"Informacion Academica"
    })
  })

app.get('/Laboral', (req, res) => {
    res.render('laboral',{
        titulo:"seccion laboral",
        descripcion:"Informacion laboral"
    })
})

app.get('/DatosBasicos', (req, res) => {
    res.render('DatosBasicos',{
        titulo:"seccion DatosBasicos",
        descripcion:"Informacion DatosBasicos"
    })
})

app.get('/Habilidades', (req, res) => {
    res.render('Habilidades',{
        titulo:"seccion Habilidades",
        descripcion:"Informacion Habilidades"
    })
})

app.listen(port, () => {
  console.log(`Acceda al servidor haciendo click aqui http://localhost:${port}`)
})

app.use((req,res,next)=>{
    res.status(404).sendFile(__dirname+'/public/404.html')
})