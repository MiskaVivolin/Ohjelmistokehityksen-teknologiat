let users = require('./users.json')
let posts = require('./posts.json')

let usernames = users.map( (e) => e.name)
let userposts = posts.map( (e) => e.title)

let x = 0;
let length = users.length

let postIdCount = posts.length

for(let i = 0; i < length; i++){
    
    console.log(usernames[i])

    for(let j = 0; j < (postIdCount / length); j++){
        console.log('- ' + userposts[x])
        x++;
    }
    
    console.log()
}