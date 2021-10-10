const { response } = require('express');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const fetch = require("node-fetch")


app.get('/postitoimipaikka/:id', async function (req, res) {

    let id = req.params.id;
    fetch('https://raw.githubusercontent.com/theikkila/postinumerot/master/postcode_map_light.json')
    .then(response => response.json())
    .then(response => {
        let list = []
        let paikkakunta = []
        
        let keys = Object.keys(response);
        for (let i = 0; i < keys.length; i++){
            const key = keys[i];
            list = list + key
            console.log(list)
            if(key == id){
            paikkakunta = paikkakunta + [key, response[key]]
                
            }
        }

        let jsonString = JSON.stringify(paikkakunta, null, 4)
        res.send(jsonString || null);
        
    })
})

app.listen(PORT, () => console.log(`palvelin käynnissä portissa ${PORT}`));