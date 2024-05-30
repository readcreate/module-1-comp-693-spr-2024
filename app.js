import express from 'express'

// make app
const app = express()

// use build-in express middleware function to set public folder as  static
app.use(express.static('public'))

// see Comp 692, Mod 6 Lec 6 file app.js.bkp for details
// have the '/' route load 'index.html' from the public folder
const router = express.Router()
router.route('/').get((req,res) => { 
    res.sendFile('index.html', {root: 'public'}) 
})

app.use(router)
const PORT = 5000 // not doing process.env.PORT for now
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))

// HOW TO RUN THE APP:
// open terminal 1 in root directory; run 
// npm run watch
// open terminal 2 in root directory; run
// npm run start