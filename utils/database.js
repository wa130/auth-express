import fs from 'fs'

const dbPath = './database/users.json'

export function loadUsers() {
    const data = fs.readFileSync(dbPath, 'utf-8')

    return JSON.parse(data)
}

export function addUsers(name, password) {
    const data = loadUsers()
    const date = new Date

    const types = {
        name: name,
        password: password,
        creade_at: date
    }

    data.push(types)
    fs.writeFileSync(dbPath, JSON.stringify(data, null, 2))

    return true
}
