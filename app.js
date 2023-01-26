let fighters = [
    {
        image: 'aragorn.png',
        name: 'Aragorn',
        race: 'Human',
        health: 50,
        damage: 5
    },
    {
        image: 'legolas.png',
        name: 'Legolas',
        race: 'Elf',
        health: 50,
        damage: 5
    },
    {
        image: 'gimli.png',
        name: 'Gimli',
        race: 'Dwarf',
        health: 50,
        damage: 5
    },
    {
        image: 'gandalf.png',
        name: 'Gandalf',
        race: 'Wizard',
        health: 50,
        damage: 10
    },
    {
        image: 'frodo.png',
        name: 'Frodo',
        race: 'Hobbit',
        health: 40,
        damage: 2,
    }
]

let boss = [
    {
        image: 'balrog.png',
        name: 'Balrog',
        health: 200,
        maxHealth: 200,
        damage: 15,
        level: 1
    }
]


function drawFighters(){
let fighterElem = document.getElementById('fighter')
let template = ''
fighters.forEach(fighter => {
    template += `
    <div class="card">
    <img src="${fighter.image}" class="img-fluid" alt="🫠">
    <p> Name:${fighter.name}</p>
    <p> Health:${fighter.health}</p>
    <p>Damage:${fighter.damage}</p>
</div>
    `

});
fighterElem.innerHTML=template
}

function drawBoss(){
    let bossElem = document.getElementById('boss')
    let template = ''
    boss.forEach(boss => {
        template += `
        <div class="card" onclick="fighterAttack('${boss.health}')">
        <img src="${boss.image}" alt="🫠">
        <p> Name:${boss.name}</p>
        <p> Health:${boss.health}</p>
        <p>Damage:${boss.damage}</p>
    </div>
        `
    
    });
    // @ts-ignore
    bossElem.innerHTML=template
}


function fighterAttack(health){
    let total = 0
    fighters.forEach(attack => {
        total += attack.damage
    });
// console.log(total);
// debugger
let bossHealth = boss.find(h=> h.health == health )
// if(bossHealth) {
// @ts-ignore
bossHealth.health -= total
// console.log(bossHealth.health);
if(bossHealth.health < 0){
    bossHealth.health = 0
}

drawBoss()
}

function bossAttack(){
    let total = 0
boss.forEach(attack => {
    total += attack.damage
})
    // console.log(total);

let damagePlayer = Math.floor(Math.random() * fighters.length)

fighters[damagePlayer].health -= total

drawFighters()

console.log(fighters[damagePlayer].health);
}


// function levelUpBossHealth(health){
//     let bossHealth = boss.find(h => h.health == health)
    

// }

// setInterval(bossAttack, 5000)


drawFighters()
drawBoss()