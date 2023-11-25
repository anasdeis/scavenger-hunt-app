export function compare(a, b) {
  if (a.nbFound < b.nbFound) {
    return 1;
  }
  if (a.nbFound > b.nbFound) {
    return -1;
  }
  return 0;
}

export function sortUsers(userList) {
  var newUserList = [...userList];
  return newUserList.sort(compare);
}
