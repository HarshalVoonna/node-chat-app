const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
  var users;

  beforeEach(() => {
      users = new Users();
      users.users = [{
        id: '1',
        name: 'name1',
        room: 'room1'
      }, {
        id: '2',
        name: 'name2',
        room: 'room2'
      }, {
        id: '3',
        name: 'name3',
        room: 'room1'
      }];
  });

  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: '123',
      name: 'Harsha',
      room: 'roomname'
    };
    var responseUser = users.addUser(user.id, user.name, user.room);
    expect(users.users).toEqual([user]);
  });

  it('should return names for room1', () => {
    var userList = users.getUserList('room1');
    expect(userList).toEqual(['name1', 'name3']);
  });

  it('should return names for room2', () => {
    var userList = users.getUserList('room2');
    expect(userList).toEqual(['name2']);
  });

  it('should remove a user', () => {
    var userId = '1';
    var user = users.removeUser(userId);
    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it('should not return a user', () => {
    var userId = 'randomId';
    var user = users.removeUser(userId);
    expect(user).toBeFalsy();
    expect(users.users.length).toBe(3);
  });

  it('should find user', () => {
    var userId = '2';
    var user = users.getUser(userId);
    expect(user.id).toBe(userId);
  });

  it('should not find user', () => {
    var userId = 'randomId';
    var user = users.getUser(userId);
    expect(user).toBeFalsy();
  });

});
