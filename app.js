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
let gold = 0

function drawFighters(){
let fighterElem = document.getElementById('fighter')
let template = ''
fighters.forEach(fighter => {
    template += `
    <div class="col-4">
    <div class="card my-2">
    <img src="${fighter.image}" class="img-fluid" alt="🫠">
    <p> Name:${fighter.name}</p>
    <p> Health:${fighter.health}</p>
    <p>Damage:${fighter.damage}</p>
</div>
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
        <div class="col-12 d-flex">
        <div class="card" onclick="fighterAttack('${boss.health}')">
        <img src="${boss.image}" alt="🫠">
        <p> Name:${boss.name}</p>
        <p> Health:${boss.health}</p>
        <p>Damage:${boss.damage}</p>
    </div>
    </div>
        `
    
    });
    // @ts-ignore
    bossElem.innerHTML=template
}


function fighterAttack(){
    let total = 0
    fighters.forEach(attack => {
        total += attack.damage
    });
// console.log(total);
// debugger
let bossHealth = boss.find(b => b.name == 'Balrog' )
// if(bossHealth) {
// @ts-ignore
bossHealth.health -= total
// console.log(bossHealth.health);
if(bossHealth.health <= 0){
    bossHealth.maxHealth = bossHealth.maxHealth*1.5
    bossHealth.health = bossHealth.maxHealth
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

// let fighterHealth = fighters.find(h=>h.health ==health)
fighters.forEach(f =>{
    if(f.health <= 0){
        f.health = 0
        f.damage = 0
    }

})
// debugger
// if(fighterHealth.health <0 ){
//     fighterHealth.health == 0
// }


drawFighters()

// console.log(fighters[damagePlayer].health);
}


// function levelUpBossHealth(health){
//     let bossHealth = boss.find(h => h.health == health)
    

// }

function getGold(){
    let reward = 0
    for (let i = 0; i < boss.length; i++) {
        const boss = boss[i];

        if (boss.health==0) {
            reward+=30
        }

        // switch (boss.health) {
        //     case 0:
        //         reward+=30
        //         break;
        
        //     default:
        //         break;
        // }
        
    }
}

setInterval(bossAttack, 1000)


drawFighters()
drawBoss()