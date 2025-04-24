const rand = Math.floor(Math.random()*50);
let f = 5;
console.log(rand)
document.querySelector("#button").addEventListener('click',()=>{
    let userGuess = Number(document.querySelector("#userGuess").value);
    let showResult = document.querySelector('#historyArea');
    if(userGuess && userGuess >= 1){
        if(f > 0){
            if (userGuess == rand){
                alert("برنده شدی!")
                showResult.innerHTML = "برنده شدی!"
            }else if (userGuess > rand){
                showResult.innerHTML = "زیاد گفتی!"
            }else if (userGuess < rand){
                showResult.innerHTML = "کم گفتی!"
            }
            f--
        }
        else{
            showResult.innerHTML = "فرصت های شما تمام شد!"
        }
    }
});
