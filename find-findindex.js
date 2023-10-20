
function findUserByUsername(users, targetUsername) {
  return users.find(function (user) {
    return user.username === targetUsername;
  });
}


function removeUser(usersArray, username) {
  const index = users.findIndex(function (user) {
    return user.username === targetUsername;
  });
  if (index !== -1) {
    return users.splice(index, 1)[0];
  } else {
    return undefined;
  }
}