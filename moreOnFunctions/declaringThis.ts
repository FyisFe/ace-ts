const user = {
  id: 123,
  admin: false,
  becomeAdmin: function () {
    this.admin = true
  },
}

interface User {
  id: number
  admin: boolean
}

declare const getDB: () => DB

interface DB {
  filterUser(filter: (this: User) => boolean): User[]
}

const db = getDB()
const admins = db.filterUser(function (this: User) {
  return this.admin
})
