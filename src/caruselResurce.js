const userForm  = {
    photo : "user1.jped",
    text : "mytext",
}

const peopleInTeam = 7;
const ul = document.getElementById(`ul`);

for (let i = 0; i < peopleInTeam; i++) {
    const scrollblock = document.createElement(`li`);
    scrollblock.id = `user${i}`;
    scrollblock.className = `scroll`;
    const userimage = document.createElement(`img`);
    userimage.id = `userimg${i}`;
    userimage.className = `photo`;
    userimage.src = `#`;    //../materials/caruselMaterials/user${i}.jpeg
    userimage.alt = `photo`;
    const usertext = document.createElement(`div`);
    usertext.id = `usertext${i}`;
    usertext.className = `text`
    usertext.innerHTML = `hello${i}`;
    scrollblock.appendChild(userimage);
    scrollblock.appendChild(usertext);
    ul.appendChild(scrollblock);
}