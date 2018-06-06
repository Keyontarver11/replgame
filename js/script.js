//select elements and create variables

  
var main = document.querySelector(".main") 
var L1 = document.querySelector(".L1")
var L1A1 = document.querySelector(".L1A1")
var song = document.querySelector("audio")


var player = {
  score: 0,
}


var replayVar = { you:["You"],
wanna: ["wanna get"],
schwifty: ["Schwifty?"] 
}

//define functions


function scoreshow() {
  return `schwiftnyness:${player.score}`
}

function replayg() {
  main.innerHTML = `<div class="main">
  <div class="level L1">
    <p class="L1Q1">
     ${replayVar.you[0]} ${replayVar.wanna[0]} ${replayVar.schwifty[0]}  
    </p>
    <button class="L1A1">Sure!</button>`

  var L1A1 = document.querySelector(".L1A1")

  L1A1.addEventListener('click', function (event) {
    main.innerHTML = ""
    l2a1()
    // event.target.disabled
    var s = document.querySelectorAll('.L1 button')
    s.forEach(function (btn) {
      btn.disabled
    })
  })
}





function go4() {
  player.score -= 1500
  main.innerHTML += `
  <div class=" level L7">
  <p class="goQ1">
  As you start to retrace your steps you forget to look left and right before you cross the street and are hit by a car. SMH could the night be any worse?
  </p>
  <div class = "score" >
  ${scoreshow()}
  </div><button class="goA2">replay the game</button>
  </div>


  
  `
  var goA2 = document.querySelector(".goA2")
  goA2.addEventListener('click', function (event) {
    main.innerHTML = ""

    replayg()
    document.querySelectorAll('.go button').forEach(function (btn) {
      btn.disabled
    })
  })
}
function go3() {
  player.score += 500
  main.innerHTML += `
  <div class=" level L7">
  <p class="goQ1">
  The night is completley awesome for you bro. Your a pretty Schwifty dude.
  </p>
  <div class = "score" >
  ${scoreshow()}
  </div>
  <button class="goA2">replay the game</button>
  
  </div>
  `
  var goA2 = document.querySelector(".goA2")




  goA2.addEventListener('click', function (event) {
    main.innerHTML = ""

    replayg()
   
  })
}


function go2() {
  player.score -= 100
  main.innerHTML += `
  <div class=" level L7">
  <p class="goQ1">
  Before you get a chance to do anything he immediately calls for backup and you are screwed for the night jail it is for you.
  </p>
  <div class = "score" >
  ${scoreshow()}
  </div>
  <button class="goA2">replay the game</button>
  
  </div>
  `
  var goA2 = document.querySelector(".goA2")




  goA2.addEventListener('click', function (event) {
    main.innerHTML = ""

    replayg()
    
  })
}

function go1() {
  player.score += 1000
  main.innerHTML += `
  <div class="level">
  <p class="goQ1">
  You tell him your lil waynes cousin and somehow this guys believes you! Party on brother your the schwiftyest.
  </p>
  <div class = "score" >
  ${scoreshow()}
  </div>
 <button class="goA1">get schwifty again</button>
  </div>
  `

  var goA1 = document.querySelector(".goA1")



  goA1.addEventListener('click', function (event) {
    main.innerHTML = ""

    replayg()
  
  })
}


function l7a8() {
  player.score += 30
  main.innerHTML += `
  <div class=" level L7">
  <p class="L7Q1">
  You smoke and get back to being schwifty then you and some random guy decide to par core on the roofs of some abandon buildings. This seems dangerous right?
  </p>
  <button class="L7A3">Im down lets go</button>
  
  </div>
  `
  var L7A3 = document.querySelector(".L7A3")

  L7A3.addEventListener('click', function (event) {
    main.innerHTML = ""

    go3()
   
  })
}
function l7a7() {
  player.score -= 40
  main.innerHTML += `
  <div class=" level L7">
  <p class="L7Q1">
  You decide to leave your current location and head home, seems like you have had a pretty long night you lost your id.You call a uber will you go home still ?
  </p>
  
  <button class="L7A4">retrace locations to find id</button>
  </div>
  `

  var L7A4 = document.querySelector(".L7A4")



  L7A4.addEventListener('click', function (event) {
    main.innerHTML = ""

    go4()
    
  })


}

function l7a1() {
  player.score += 100
  main.innerHTML += `
  <div class=" level L7">
  <p class="L7Q1">
  Hey! Whatever your doing bro it works, your the epitome of schwifty right now. The girls are flocking to you and you dont know which ones to pick...so?
  </p>
  <button class="L7A3">the hot girls in group 1</button>
  <button class="L7A4">the hot girls in group 2</button>
  </div>
  `
  var L7A3 = document.querySelector(".L7A3")
  var L7A4 = document.querySelector(".L7A4")



  L7A4.addEventListener('click', function (event) {
    main.innerHTML = ""

    go3()
  
  })

  L7A3.addEventListener('click', function (event) {
    main.innerHTML = ""

    go3()
   
  })
}

function l7a5() {
  player.score -= 40
  main.innerHTML += `
  <div class=" level L7">
  <p class="L7Q1">
  You pull up at walmart and the parking lot is empty,then the walmart security pulls your car over.What do you do?
  </p>
  <button class="L7A3">Run</button>
  <button class="L7A4">see what he wants</button>
  </div>
  `
  var L7A3 = document.querySelector(".L7A3")
  var L7A4 = document.querySelector(".L7A4")



  L7A4.addEventListener('click', function (event) {
    main.innerHTML = ""

    go2()
  
  })

  L7A3.addEventListener('click', function (event) {
    main.innerHTML = ""

    go2()
   
  })
}

function l7a6() {
  player.score += 50
  main.innerHTML += `
  <div class=" level L7">
  <p class="L7Q1">
  You head to the bar, but the bouncer doesnt want to let you in.... He thinks your too Schwifty.
  </p>
  <button class="L7A2">Tell him your Lil Waynes cousin</button>
  
  </div>
  `
  var L7A2 = document.querySelector(".L7A2")




  L7A2.addEventListener('click', function (event) {
    main.innerHTML = ""

    go1()
    
  })
}

function l6a4() {
  player.score += 20
  main.innerHTML += `
  <div class=" level L6">
  <p class="L6Q1">
  You take the pink pill pass out and wake up in a hotel room that smells like cigarettes. What do you do?
  </p>
  <button class="L6A3">Smoke the half of cigarette on the dreser</button>
  <button class="L6A4">Leave the hotel room</button>
  </div>
  `
  var L6A3 = document.querySelector(".L6A3")
  var L6A4 = document.querySelector(".L6A4")



  L6A4.addEventListener('click', function (event) {
    main.innerHTML = ""

    l7a7()
   
  })

  L6A3.addEventListener('click', function (event) {
    main.innerHTML = ""

    l7a7()
  
  })
}


function l6a3() {
  player.score += 20
  main.innerHTML += `
    <div class=" level L6">
    <p class="L6Q1">
    You take the blue pill capsule and decide to leave where your at to go get schwifty somewhere else. Where will you go?
    </p>
    <button class="L6A3">Go to a bar</button>
    <button class="L6A4">Go to Walmart</button>
    </div>
    `
  var L6A3 = document.querySelector(".L6A3")
  var L6A4 = document.querySelector(".L6A4")



  L6A4.addEventListener('click', function (event) {
    main.innerHTML = ""

    l7a5()
   
  })

  L6A3.addEventListener('click', function (event) {
    main.innerHTML = ""

    l7a5()
    document.querySelectorAll('.L6 button').forEach(function (btn) {
      btn.disabled
    })
  })
}


function l6a2() {
  player.score -= 20
  main.innerHTML += `
      <div class=" level L6">
      <p class="L6Q1">
      You decide to not dance and take the other box. You start to feel a little sick. You throw up. Now what? You want to go home or keep getting schwifty?
      </p>
      <button class="L6A3">Go home</button>
      <button class="L6A4">Keep getting schwifty</button>
      </div>
      `
  var L6A3 = document.querySelector(".L6A3")
  var L6A4 = document.querySelector(".L6A4")



  L6A4.addEventListener('click', function (event) {
    main.innerHTML = ""

    l7a8()
    
  })

  L6A3.addEventListener('click', function (event) {
    main.innerHTML = ""

    l7a7()
    document.querySelectorAll('.L6 button').forEach(function (btn) {
      btn.disabled
    })
  })
}

function l6a1() {
  player.score += 50
  main.innerHTML += `
        <div class=" level L6">
        <p class="L6Q1">
        You have decided to dance and before you know it your a hit with all the girls, and apparently the dance you picked is similar to the earth version of the stanky leg. Your killing it and girls love you now what?
        </p>
        <button class="L6A3">leave with some girls</button>
        <button class="L6A4">continue dancing</button>
        </div>
        `
  var L6A3 = document.querySelector(".L6A3")
  var L6A4 = document.querySelector(".L6A4")



  L6A4.addEventListener('click', function (event) {
    main.innerHTML = ""

    l7a1()
    
  })

  L6A3.addEventListener('click', function (event) {
    main.innerHTML = ""

    l7a1()
    document.querySelectorAll('.L6 button').forEach(function (btn) {
      btn.disabled
    })
  })
}



function l5a3() {
  player.score += 20
  main.innerHTML += `
            <div class=" level L5">
              <p class="L5Q1">
                You decide to roll with the "deew" and now your feeling pretty groovy. Then you see a bunch of girls.
              </p>
              
              <button class="L5A4">Go dance</button>
            </div>
            `

  var L5A4 = document.querySelector(".L5A4")



  L5A4.addEventListener('click', function (event) {
    main.innerHTML = ""

    l6a1()
   
  })
}






function l5a2() {
  player.score += 30
  main.innerHTML += `
          <div class=" level L5">
          <p class="L5Q1">
          You decide to switch it up and go with the other box, and within 20 minutes your feeling indestructible. You are presented with two pills which one will you take?
          </p>
          <button class="L5A3">take blue capsule pill</button>
          <button class="L5A4">take the pink pill</button>
          </div>
          `
  var L5A3 = document.querySelector(".L5A3")
  var L5A4 = document.querySelector(".L5A4")



  L5A4.addEventListener('click', function (event) {
    main.innerHTML = ""

    l6a4()
   
  })

  L5A3.addEventListener('click', function (event) {
    main.innerHTML = ""

    l6a3()
   
  })

}

function l5a1() {
  player.score += 20
  main.innerHTML += `
    <div class=" level L5">
      <p class="L5Q1">
       You decided to stick with the first box you picked no need to change things.Suddenly your head feels heavy and you get a certain urge to dance the "yknats gel". But the other box is still there for the taking? What are you going to do?
      </p>
      <button class="L5A1">yknats gel"</button>
      <button class="L5A2">yllom</button>
    </div>
    `
  var L5A1 = document.querySelector(".L5A1")
  var L5A2 = document.querySelector(".L5A2")



  L5A2.addEventListener('click', function (event) {
    main.innerHTML = ""

    l6a2()
   
  })

  L5A1.addEventListener('click', function (event) {
    main.innerHTML = ""

    l6a1()
  
  })

}

function l4a2() {
  player.score += 20
  main.innerHTML += `
    <div class=" level L4">
      <p class="L4Q1">
        The effects of this box take place immediatley and you are ready to take on the world your presented with more boxes. What will you do next? "deew" or "yllom"
      </p>
      <button class="L4A1">deew</button>
      <button class="L4A2">yllom</button>
    </div>
    `
  var L4A1 = document.querySelector(".L4A1")
  var L4A2 = document.querySelector(".L4A2")



  L4A2.addEventListener('click', function (event) {
    main.innerHTML = ""

    l5a2()
   
  })

  L4A1.addEventListener('click', function (event) {
    main.innerHTML = ""

    l5a3()
    
  })

}

function l4a1() {
  player.score += 10
  main.innerHTML += `
    <div class=" level L4">
      <p class="L3Q1">
        It feels as if the effects of this box had no effect on you. A strange man appears he offers you another opportunity to try the box again or pick another box labeled "nidociv". Which will you pick?
      </p>
      <button class="L4A1">lohocla</button>
      <button class="L4A2">nidociv</button>
    </div>
    `
  var L4A1 = document.querySelector(".L4A1")
  var L4A2 = document.querySelector(".L4A2")



  L4A2.addEventListener('click', function (event) {
    main.innerHTML = ""

    l5a2()
  
  })

  L4A1.addEventListener('click', function (event) {
    main.innerHTML = ""

    l5a1()
   
  })

}



function l3a1() {
  player.score += 20
  main.innerHTML += `
    <div class=" level L2">
      <p class="L3Q1">
        You are presented with two random boxes one labled "lohocla", the other labeled "eniacoc". Which one will you choose?
      </p>
      <button class="L3A1">lohocla</button>
      <button class="L3A2">eniacoc</button>
    </div>
    `
  var L3A1 = document.querySelector(".L3A1")
  var L3A2 = document.querySelector(".L3A2")



  L3A2.addEventListener('click', function (event) {
    main.innerHTML = ""

    l4a2()
   
  })

  L3A1.addEventListener('click', function (event) {
    main.innerHTML = ""

    l4a1()
   
  })

}


function l2a1() {
  player.score += 20
  main.innerHTML += `
  <div class=" level L2">
    <p class="L2Q1">
      Some of the choices you are given after this point will be written in an alien language. Still wanna get schwifty?
    </p>
    <button class="L2A1">Hell Yeah!</button>
    <button class="L2A2">Im Not Sure...</button>
  </div>
  `
  var L2A1 = document.querySelector(".L2A1")
  var L2A2 = document.querySelector(".L2A2")

  L2A1.addEventListener('click', function (event) {
    main.innerHTML = ""

    l3a1()
  
  })
  L2A2.addEventListener('click', function (event) {
    main.innerHTML = ""

    l3a1()
  
  })

}








//add Event Listeners and call functions
L1A1.addEventListener('click', function (event) {
  main.innerHTML = ""
  l2a1()
  // event.target.disabled
  var s = document.querySelectorAll('.L1 button')
  s.forEach(function (btn) {
    btn.disabled
  })
})

