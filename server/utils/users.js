class Users {
  constructor (){
    this.users = [];
  }

  isDuplicateUser (name, room) {
    if(this.getUserList(room).length === 0)
      return false;
    var duplicateUsers = this.users.filter((user) => {
      return (user.room === room && user.name === name);
    });
    return duplicateUsers.length > 0;
  }

  addUser (id, name, room) {
    var user = {id, name, room};
    this.users.push(user);
    return user;
  }

  removeUser (id) {
    var user = this.getUser(id);
    if (user) {
      this.users = this.users.filter((user) => {
        return user.id !== id;
      })
    }
    return user;
  }

  getUser (id) {
    return this.users.filter((user) => {
      return user.id === id;
    })[0];
  }

  getUserList (room) {
    var users = this.users.filter((user) => {
      return user.room === room;
    });
    var namesArray = users.map((user) => {
      return user.name;
    });
    return namesArray;
  }

  getRoomList () {
    var roomsArray = this.users.map((user) => {
      return user.room;
    });
    return roomsArray;
  }
}

module.exports = {Users};
