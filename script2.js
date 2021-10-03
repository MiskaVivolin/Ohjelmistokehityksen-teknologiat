let users = require('./users.json')
let posts = require('./posts.json')

let usernames = users.map( (e) => '[' + '\n' + '    {' + '\n' + '        "id": ' + e.id + ',' + '\n' + '        "name": ' + '"' +  e.name + '",' + '\n' + '        "username": ' + '"' + e.username + '",' + '\n' + '        "email": ' + '"' + e.email + '",' + '\n' + '        "address": {' + '\n'  + '            "street": ' + '"' + e.address.street + '",' + '\n'  + '            "suite": ' + '"' + e.address.suite + '",' + '\n'  + '            "city": ' + '"' + e.address.city + '",' + '\n'  + '            "street": ' + '"' + e.address.street + '",' + '\n'  + '            "zipcode": ' + '"' + e.address.zipcode + '",' + '\n'  + '            "geo": {' + '\n' + '                "latitude": ' + '"' + e.address.geo.lat + '",' + '\n'  + '                "longitude": ' + '"' + e.address.geo.lng + '"' + '\n' + '            }' + '\n' + '        },' + '\n' + '        "phone": ' + '"' + e.phone + '",' + '\n' + '        "website": ' + '"' + e.website + '",' + '\n' + '        "company": {' + '\n' + '            "name": ' + '"' + e.company.name + '",' + '\n' + '            "catchphrase": ' + '"' + e.company.catchPhrase + '",' + '\n' + '            "bs": "' + e.company.bs + '"' + '\n' + '        },' + '\n' + '\n')
let userposts = posts.map( (e) => '{' + '\n' +  '        "userId": ' + e.userId + ',' + '\n' + '        id: ' + '"' + e.id + '",' + '\n' + '        title: ' + '"' + e.title + '",' +'\n' + '        body: ' + '"' + e.body + '"' +'\n' + '}' +'\n')


let x = 0;
let length = users.length

let postIdCount = posts.length

for(let i = 0; i < length; i++){
    
    console.log(usernames[i])

    for(let j = 0; j < (postIdCount / length); j++){
        console.log(userposts[x])
        x++;
    }
    
    console.log()
}

