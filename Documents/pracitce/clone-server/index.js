const app = require('./api/server')


const Port = 5000

app.listen(Port, () => console.log(`server listening on PORT:${Port}`))