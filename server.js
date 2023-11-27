const app = require('./src/app')

const PORT = process.env.PORT || 5432

app.listen(PORT, () => {
    console.log(`server running in http://localhost:${PORT}/api`)
})