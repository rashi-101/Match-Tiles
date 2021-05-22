document.addEventListener("DOMContentLoaded", function () {
    let grid = document.querySelectorAll(".puzzle");
    let updateScore = document.querySelector(".updated-score");
    let arr = ["arnab", "ravish", "modi", "kejri", "arnab", "ravish", "modi", "kejri", "arnab", "ravish", "modi", "kejri", "arnab", "ravish", "modi", "kejri"];
    let clickArr = [];
    let score = 0;
    let startBtn = document.querySelector(".game-start");
    alert("Click on tiles to look for similar tiles, you'll win if you manage to find all pairs");
    shuffleArr(arr);
    for (let i = 0; i < grid.length; i++) {
        grid[i].setAttribute("cellId", i);
        grid[i].addEventListener("click", mainFunction);
    }
    function mainFunction() {
        let idx = this.getAttribute("cellId");
        //console.log(idx);
        this.classList.add(arr[idx]);
        clickArr.push(this);
        setTimeout(match, 500);

    }

    function match() {
        if (clickArr.length == 2) {
            if (clickArr[0].classList[1] == clickArr[1].classList[1]) {
                score += 12.5;
                updateScore.innerText = score;
                alert("Sahi pakde hain");
                clickArr[0].innerHTML = "<h1 class='color'><i class='fas fa-check-square '></i></h1>";
                clickArr[1].innerHTML = "<h1 class='color'><i class='fas fa-check-square '></i></h1>";
                clickArr[0].classList.remove(clickArr[0].classList[1]);
                clickArr[1].classList.remove(clickArr[1].classList[1]);
                clickArr[0].removeEventListener("click", mainFunction);
                clickArr[1].removeEventListener("click", mainFunction);
            }
            else {
                alert("Try again");
            }
            clickArr[0].classList.remove(clickArr[0].classList[1]);
            clickArr[1].classList.remove(clickArr[1].classList[1]);
            clickArr.pop();
            clickArr.pop();
        }
        if (score == 100) {
            alert("Wohoo! You won");
        }
    }

    startBtn.addEventListener("click", restart);

    function restart() {
        window.location.reload();
    }

    //this shuffling algorithm is called Fisher-Yates Shuffling algorithm
    function shuffleArr(arr){
        for(let i=arr.length-1; i>=0; i--){
            let j= Math.floor(Math.random()*(i+1));
            //swapped using destructring assignment syntax, RHS: values are put, LHS: rhs values are assigned to lhs variables
            [arr[i],arr[j]] = [arr[j],arr[i]];
        }
    }
});

