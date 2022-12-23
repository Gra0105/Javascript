const user = {
    id: 24,
    displayName: 'Karen',
    fullName: 'Karen Ribet',
};

function introduce({displayName, fullName}) {
    console.log(`${displayName} is ${fullName}`);
}

introduce(user)