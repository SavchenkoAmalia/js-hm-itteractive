//! 1

// const users = [
//     {name: 'Amalia', balance: 1000},
//     {name: 'Stepan', balance: 2000},
//     {name: 'Ivan', balance: 1500},
//     {name: 'Amelia', balance: 900}
// ]

// const summ = users.reduce((acc, user) => acc + user.balance, 0);

// console.log(summ)

//! 2

// const users = [
//     {name: 'Amalia', friends: 'Bob' },
//     {name: 'Stepan',  friends: 'Alina' },
//     {name: 'Ivan',  friends: 'Bob'},
//     {name: 'Amelia',  friends: 'Igor' },
//     {name: 'Maksim',  friends: 'Bob' }
// ]

// friendName = 'Bob';

// const findFriend = users.reduce((acc, user) => {
//     if(user.friends.includes('Bob')){
//         acc.push(user.name);
//     }
//     return acc 
// }, [])

// console.log(findFriend);

//! 3

// const users = [
//     { name: 'Amalia', friends: 4 },
//     { name: 'Stepan', friends: 7 },
//     { name: 'Ivan', friends: 1 },
//     { name: 'Amelia', friends: 0 },
//     { name: 'Maksim', friends: 3 }
// ];

// const numberOfFriends = users.map(user => {
//     const friendsCount = user.friends;
//     let message;

//     if (friendsCount === 0) {
//         message = `В користувача "${user.name}" немає друзів.`;
//     } else if (friendsCount >= 1 && friendsCount <= 3) {
//         message = `В користувача "${user.name}" мало друзів.`;
//     } else if (friendsCount >= 4 && friendsCount <= 5) {
//         message = `В користувача "${user.name}" достатньо друзів.`;
// } else 
//         message = `В користувача "${user.name}" багато друзів.`;

//     return message;
// });

// numberOfFriends.forEach(message => {
//     console.log(message);
// });

//! 4

const users = [
    { name: 'Amalia', skills: 'play volleyball' },
    { name: 'Stepan', skills: 'cooking' },
    { name: 'Ivan', skills: 'painting' },
    { name: 'Amelia', skills: 'dancing' },
    { name: 'Maksim', skills: 'play volleyball' }
];

const allSkills = [...new Set(users.flatMap(user => user.skills))];

allSkills.sort();

console.log(allSkills);