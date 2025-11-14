import { createServer } from 'http'
import { readFileSync } from 'fs'

const server = createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(readFileSync('backend/users.json'))
})
const host = 'localhost'
const port = 3000

// const users = [{ name: 'Adam Ondra', email: 'adam.ondra@climb.ing' }]
// const usersJson = JSON.stringify(users)
// writeFileSync('backend/users.json', usersJson)
// const readUsersJson = readFileSync('backend/users.json')
// const readUsers = JSON.parse(readUsersJson)
// console.log(readUsers)

 server.listen(port, host, () => {
   console.log(`Server listening on http://${host}:${port}`)
 })