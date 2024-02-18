const fs = require('fs')
const data = fs.readFileSync("index.txt")

const data_arr = JSON.parse(data)
const ndx = Math.floor(Math.random()*data_arr.length)
const city_name = data_arr[ndx].name

let lat = data_arr[ndx].lat
let lng = data_arr[ndx].lng
let api = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current_weather=true`
async function write_file(city_name_file, data_tmp){
    return new Promise((resolve)=>{
        resolve(fs.writeFileSync(city_name_file, data_tmp),
        console.log("file created successffully"))
    })
}
async function get_data(){
    const resp = await fetch(api)
    const json = await resp.json()

    let city_name_file =` ${city_name}.txt`
    let data_tmp =` ${data_arr[ndx].name} its temperature is ${json.current_weather.temperature}`
    await write_file(city_name_file, data_tmp)
}

get_data()