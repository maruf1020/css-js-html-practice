let style = `
<style>
.sc-e5a2a45e-0.ddykU.sc-c225b3ef-0.eCYSMu.maruf {
    flex-wrap: nowrap;
    overflow: hidden;
}

.button--wrapper {
    top: 0;
    display: flex;
    justify-content: space-between;
}

button.button--right {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(50%, 50%);
    display: flex;
    align-items: center;
    justify-content: center;
}


button.button--left {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(18%, 40%);
    display: flex;
    align-items: center;
    justify-content: center;
}

.maruf1 .btn {
    border: unset;
    height: 50px;
    width: 50px;
    background: #fff;
    border-radius: 100px;
    box-shadow: 0 20px 30px 0 rgb(0 0 0 / 30%);
    cursor: pointer;
}

.movingElement{
    transition: .5s;
}

</style>
`;
document.querySelector("head").insertAdjacentHTML("beforeend", style);
let a = document.querySelectorAll(".sc-e5a2a45e-0.ddykU.sc-c225b3ef-0.eCYSMu");
a[0].classList.add("maruf");
let c = document.querySelectorAll(".maruf .sc-e5a2a45e-0.kyBUyJ.sc-677a5199-0.iPBmth")

let buttonsHTML = `
    <div class="button--top--wrapper maruf1"> 
        <div class="button--wrapper"> 
            <button class="button--left btn">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <button class="button--right btn">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    </div>
    `
a[0].insertAdjacentHTML('afterend', buttonsHTML);


let currentPosition = 0;

document.querySelector(".maruf .sc-e5a2a45e-0.kyBUyJ.sc-677a5199-0.iPBmth:nth-child(1)").classList.add("movingElement")

document.querySelector(".maruf1 .button--left").addEventListener("click", function (e) {
    console.log("left")
    if (currentPosition != 0) {
        document.querySelector(".movingElement").style.marginLeft = (currentPosition + 25) + '%'
        currentPosition += 25;
    }
});

document.querySelector(".maruf1 .button--right").addEventListener("click", function (e) {
    if ((currentPosition + (c.length * 25 - 100)) == 0) {
        return;
    }
    console.log("currentPosition: ", currentPosition, "c.length*25: ", c.length * 25)
    console.log("right")
    document.querySelector(".movingElement").style.marginLeft = (currentPosition - 25) + '%'
    currentPosition -= 25;
});



