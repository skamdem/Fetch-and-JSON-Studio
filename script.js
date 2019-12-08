// TODO: add code here
window.addEventListener("load", function() {
    // put DOM code here to ensure elements have been loaded
    const fetchPromise = fetch("https://handlers.education.launchcode.org/static/astronauts.json");
    fetchPromise.then( function(response) {
        response.json().then( function(json) {
            const div = document.getElementById("container");
            // Add HTML that includes the JSON data
            /*for (let i = 0; i < json.length; i++){
                //console.log(i);
                let skillsList = json[i].skills;
                //skillsList = skillsList.replace(",",", ");//.join(", ");
                //console.log(typeof skillsList);
                div.innerHTML += `<div class="astronaut">
                <div class="bio">
                    <h3>${json[i].firstName} ${json[i].lastName}</h3>
                    <ul>
                        <li>Hours in space: ${json[i].hoursInSpace}</li>
                        <li>Active: ${json[i].hoursInSpace}</li>
                        <li>Skills: ${skillsList}</li>
                    </ul>
                </div>
                <img class="avatar" src="${json[i].picture}">
                </div>`;
            }*/
            //Display the astronauts sorted from most to least time in space.
            //div.innerHTML += "<div>SORTED BELOW HERE</div>";
            /*let sortedIds = [];
            for (let i = 0; i < json.length; i++){
                sortedIds[i] = json[i].hoursInSpace;
            }
            console.log(sortedIds);
            console.log(sortedIds.sort((a,b)=>{
                return a<b?1:-1;
            }));*/
            json.sort((a,b)=>{
                return a.hoursInSpace<b.hoursInSpace?1:-1;
            });
            for (let i = 0; i < json.length; i++){
                let skillsList = json[i].skills;
                skillsList = skillsList.join(", ");
                console.log(json[i].active);
                let color = "black";
                if (json[i].active === true) color = "green";
                div.innerHTML += `<div class="astronaut">
                <div class="bio">
                    <h3>${json[i].firstName} ${json[i].lastName}</h3>
                    <ul>
                        <li>Hours in space: ${json[i].hoursInSpace}</li>
                        <li style="color : ${color}">Active: ${json[i].active}</li>
                        <li>Skills: ${skillsList}</li>
                    </ul>
                </div>
                <img class="avatar" src="${json[i].picture}">
                </div>`;
            }
            div.innerHTML += `<p>There is a total of <b>${json.length}</b> Astronauts on this page</p>`;
        });
    });
    /*
    Bonus Missions¶
    Display the astronauts sorted from most to least time in space.
    Make the "Active: true" text green, for astronauts that are still active (active is true).
    Add a count of astronauts to the page
    */
});