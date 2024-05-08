// const getuserName = (name) => {
//     setTimeout(() => {
//         return { user:name};
//     }, 3000);
// };

// const user = getuserName("GUVI");

// console.log(user);

// const getuserName = (userName, callback) => {
//     setTimeout(() => {
//         callback ({user: userName});
//     }, 2000);
// };

// const user = getuserName("GUVI",(user) => {
//     console.log(user);
// });

const getuserName = (userName, callback) => {
    setTimeout(() => {
        console.log("We have a username to display");
        callback (userName);
    }, 2000);
};

const getuserAge = (userName, age, callback) => {
    setTimeout(() => {
        console.log("We have a user ageto display");
        callback (userName + " " + age);
    }, 2000);
};

const getuserDesignation = (userName, age, callback) => {
    setTimeout(() => {
        console.log("We have a user designation to display");
        callback (userName + " " + age + " " + "Project Manager");
    }, 2000);
};

const user = getuserName("Manikandan", (userName) => {
    console.log(userName);
    getuserAge(userName, 33, (userNameWithAge) => {
        console.log(userNameWithAge);
        getuserDesignation(userName, 33, (userNameWithAgeandDesignation) => {
            console.log(userNameWithAgeandDesignation);
        });
    });
});

// const user = getuserName("Manikandan", (userName) => {
//     getuserAge(userName, (userNameWithAge) => {

//     })
// })