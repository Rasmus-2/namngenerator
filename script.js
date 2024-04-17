const url = "https://api.api-ninjas.com/v1/babynames?gender="
const key = "xZG2k6LgkxSVwpbF/E+4Ug==QgOZY1insFiiVzkR"

function getNames(gender){
    document.getElementById("nameList").innerHTML = ""
    let popular = document.querySelector('.popularBox').checked

    console.log(popular)

    fetch(url + gender + "&popular_only=" + popular ,{
        headers: {'X-Api-Key': key}
    })
    .then(function (respone) {return respone.json()})
    .then(function (data) {
        data.map(function (d){
            let li = document.createElement("li")
            li.setAttribute("id", "nameListItem")
            li.innerHTML = d
            document.getElementById("nameList").appendChild(li)
        })
    })
    .catch(function (error){
        console.log("Something went wrong: " + error)
    })
}