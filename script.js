fetch("https://www.coursehubiitg.in/api/codingweek/contributions")
.then((response) => response.json())
.then((data) => {
    data.sort((a, b) => b.points - a.points);

    const winners = data.slice(0, 3);
    const rest  = data.slice(3,9);

    console.log(winners);
    console.log(rest);

    document.getElementsByClassName("rectangle-smaller")[0].textContent = `${winners[1].name} - ${winners[1].points}`;
    document.getElementsByClassName("rectangle-smaller")[1].textContent = `${winners[2].name} - ${winners[2].points}`;
    document.getElementsByClassName("rectangle")[0].textContent = `${winners[0].name} - ${winners[0].points}`;
    
    document.getElementsByClassName("small-circle")[0].style.backgroundImage = `url(${winners[1].avatar})`; 
    document.getElementsByClassName("small-circle")[1].style.backgroundImage = `url(${winners[2].avatar})`; 
    document.getElementsByClassName("large-circle")[0].style.backgroundImage = `url(${winners[0].avatar})`;
    

     let value = "";
     for( let index = 0; index < rest.length; index++){
        const values = rest[index];
        const position = index + 4;
        value+= `
           <div class="ranks">
             <div class="square">${position}</div>
             <div class="gola">
                <div class="avatar-image" style="background-image: url(${values.avatar})"></div>
             </div>
             <div class="name-box">${values.name}</div>
             <div class="score-box">${values.points}</div>
             
            </div>
           `;
     }
     
     document.getElementsByClassName("white-division")[0].innerHTML = value;
    })
    .catch((error) => {
        console.log("Error fetching data:", error);
    });
        
