let users = [];

function adduser(username,id) {
    const newUser = {
        _id:id,
        username,
        isPresenting:users.length === 0 ? true : false
    }
    users.push(newUser);
}

function removeUser(id) {
    for(let i=0;i<users.length;i++) {
        if(users[i]._id === id) {
            if(users.length >= 2 && i === 0) {
                users[1].isPresenting = true;
            }
            users.splice(i,1);
            return ;
        }
    }
}

function getAllUsers() {
    return users;
}
module.exports = {
    adduser,
    removeUser,
    getAllUsers,
}