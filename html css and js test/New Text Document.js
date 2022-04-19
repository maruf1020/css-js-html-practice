let style = `
<style>
.maruf{
    display: unset; 
}
.maruf .sc-e5a2a45e-0.kyBUyJ.sc-677a5199-0.iPBmth{
    max-width: 100%;
}
.maruf .gMCRWH{
    max-height: 100px;
}
.maruf .dAaGxl{
    justify-content: unset;
    display: flex;
    gap: 40px;
    justify-content: start;
    align-items: center;
}
img.my--image {
    width: 75px;
    height: 75px;
    border-radius: 100px;
}
.maruf .lazy-load-image-background.opacity.lazy-load-image-loaded {
    display: none !important;
    
}

.hidden{
    display:none;
}

.maruf--modal--overlay {
    background-color: rgb(39 43 46 / 60%);
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    z-index: 999993;
    /* border-radius: 8px; */
    /* box-shadow: 0 20px 30px 0 rgb(0 0 0 / 40%); */
}

.maruf--modal {
    background-color: white;
    height: 50vh;
    width: 50vw;
    position: fixed;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    z-index: 999999;
    border-radius: 8px;
    box-shadow: 0 20px 30px 0 rgba(0, 0, 0, 0.4);
}

button.modal-close {
    background: unset;
    border: unset;
    position: absolute;
    right: 0;
    margin-right: 20px;
    margin-top: 20px;
    font-size: 20px;
    background: orangered;
    border-radius: 100px;
    height: 50px;
    width: 50px;
    box-sizing: border-box;
    cursor: pointer;
}

a.modal--link--see--more, 
button.modal--button--see--more {
    text-decoration: none;
    border: unset;
    color: #fff;
    transition: 0.5s;
    padding: 10px 15px;
    background: #37b24d;
    border-radius: 10px;
    font-weight: bold;
    text-align: center;
    width: 10vw;
    /* margin: 0px auto; */
}

a.modal--link--see--more:hover,
button.modal--button--see--more:hover {
    color: rgb(47 110 167);
}

.modal--body {
    display: flex;
    flex-flow: column;
    flex-wrap: wrap;
    justify-content: center;
}

h2.modal--title {
    text-align: center;
    font-size: 50px;
    margin: 20px 0;
}

.button--rapper {
    display: flex;
    justify-content: space-evenly;
    margin-top: 34px;
}

img.modal--img {
    object-fit: cover;
}

</style>
`;

document.querySelector("head").insertAdjacentHTML("beforeend", style);

let a = document.querySelectorAll(".sc-e5a2a45e-0.ddykU.sc-c225b3ef-0.eCYSMu");
a[0].classList.add("maruf");


let b = document.querySelectorAll(
    ".maruf .sc-e5a2a45e-0.kyBUyJ.sc-677a5199-0.iPBmth"
);

// let d = document.querySelectorAll(".maruf .lazyload-img-wrapper");

let modalHTML = `
<div class="maruf--modal--overlay hidden">
    <div class="maruf--modal hidden">
        <button class="modal-close">❌</button>
        <div class="modal--body">
            <h2 class="modal--title"></h2>
            <img src="" alt="" class="modal--img"/>
            <div class="button--rapper">
                <a href="" class="modal--link--see--more">Read More</a>
                <button class="modal--button--see--more">Read More</button>
            </div>   
        </div>
    </div>
</div>
`;

document.querySelector("body").insertAdjacentHTML("beforeend", modalHTML);


b.forEach((item) => {
    let imgSource = item.querySelector("img").src;
    let newImgSource = item.querySelector(
        ".sc-e5a2a45e-0.OFrmn.sc-2478c537-3.dAaGxl"
    );
    let textData = item.querySelector(".sc-e664399e-0.ksVugt").textContent;
    // let textData = item.querySelector(".sc-e664399e-0.ksVugt").textContent.trim();
    let c = `<div class="sc-e5a2a45e-0 ddykU"><img
src="${imgSource}"
alt="img"
height="50px"
width="50px"
class="my--image"
/></div>`;

    let pageLink = item.querySelector(".sc-eb47a962-0.dKPbtk").href;


    let modaldata = document.querySelector(".maruf--modal");

    newImgSource.insertAdjacentHTML("afterbegin", c);
    item.querySelector(".gMCRWH").addEventListener("click", function (e) {
        e.preventDefault();

        modaldata.querySelector(".modal--title").textContent = textData;
        modaldata.querySelector(".modal--img").src = imgSource;
        modaldata.querySelector(".modal--link--see--more").href = pageLink;
        modaldata.querySelector(".modal--button--see--more").addEventListener("click", function (e) {
            location.href = pageLink;
        });
        modaldata.classList.remove("hidden")
        document.querySelector(".maruf--modal--overlay").classList.remove("hidden")
        console.log(e.target);


    });

    modaldata.querySelector(".modal-close").addEventListener("click", function (e) {
        modaldata.classList.add("hidden")
        document.querySelector(".maruf--modal--overlay").classList.add("hidden")
    })

    document.querySelector(".maruf--modal--overlay").addEventListener("click", function (e) {
        modaldata.classList.add("hidden")
        document.querySelector(".maruf--modal--overlay").classList.add("hidden")
    })

});




























// let style = `
// <style>
// .maruf{
//     display: unset; 
// }
// .maruf .sc-e5a2a45e-0.kyBUyJ.sc-677a5199-0.iPBmth{
//     max-width: 100%;
// }
// .maruf .gMCRWH{
//     max-height: 100px;
// }
// .maruf .dAaGxl{
//     justify-content: unset;
//     display: flex;
//     gap: 40px;
//     justify-content: start;
//     align-items: center;
// }
// img.my--image {
//     width: 75px;
//     height: 75px;
//     border-radius: 100px;
// }
// .maruf .lazy-load-image-background.opacity.lazy-load-image-loaded {
//     display: none !important;

// }

// .hidden{
//     display:none;
// }

// .maruf--modal {
//     background-color: red;
//     height: 50vh;
//     width: 50vw;
//     position: fixed;
//     top: 50%;
//     right: 50%;
//     transform: translate(50%, -50%);
//     z-index: 999999;
// }

// </style>
// `;

// document.querySelector("head").insertAdjacentHTML("beforeend", style);

// let a = document.querySelectorAll(".sc-e5a2a45e-0.ddykU.sc-c225b3ef-0.eCYSMu");
// a[0].classList.add("maruf");


// let b = document.querySelectorAll(
//     ".maruf .sc-e5a2a45e-0.kyBUyJ.sc-677a5199-0.iPBmth"
// );

// // let d = document.querySelectorAll(".maruf .lazyload-img-wrapper");

// let modalHTML = `
// <div class="maruf--modal hidden">
//     <button class="modal-close">❌</button>
//     <div class="modal--body">
//         <h2 class="modal--title"></h2>
//         <img src="" alt="" class="modal--img"/>
//         <a href="" class="modal--link--see--more">Read More</a>
//         <button class="modal--button--see--more">Read More</button>
//     </div>
// </div>
// `;

// document.querySelector("body").insertAdjacentHTML("beforeend", modalHTML);


// b.forEach((item) => {
//     let imgSource = item.querySelector("img").src;
//     let newImgSource = item.querySelector(
//         ".sc-e5a2a45e-0.OFrmn.sc-2478c537-3.dAaGxl"
//     );
//     let textData = item.querySelector(".sc-e664399e-0.ksVugt").textContent;
//     // let textData = item.querySelector(".sc-e664399e-0.ksVugt").textContent.trim();
//     let c = `<div class="sc-e5a2a45e-0 ddykU"><img
// src="${imgSource}"
// alt="img"
// height="50px"
// width="50px"
// class="my--image"
// /></div>`;

//     let pageLink = item.querySelector(".sc-eb47a962-0.dKPbtk").href;


//     let modaldata = document.querySelector(".maruf--modal");

//     newImgSource.insertAdjacentHTML("afterbegin", c);
//     item.querySelector(".gMCRWH").addEventListener("click", function (e) {
//         e.preventDefault();

//         modaldata.querySelector(".modal--title").textContent = textData;
//         modaldata.querySelector(".modal--img").src = imgSource;
//         modaldata.querySelector(".modal--link--see--more").href = pageLink;
//         modaldata.querySelector(".modal--button--see--more").addEventListener("click", function(e){
//             location.href= pageLink;
//         });
//         modaldata.classList.remove("hidden")
//         console.log(e.target);


//     });

//     modaldata.querySelector(".modal-close").addEventListener("click", function (e) {
//         modaldata.classList.add("hidden")
//     })


// });









// Extras

////////////////// moving element
let maruf = document.querySelector("#__next > div > div.sc-2d42a593-0.kOAAXg > div.sc-e5a2a45e-0.cUqiZs > div.sc-e5a2a45e-0.iwwlxl.sc-75a5b28c-0.kZMkQz")
document.querySelector("#__next > div > div.sc-2d42a593-0.kOAAXg > div.sc-e5a2a45e-0.cUqiZs > div.sc-e5a2a45e-0.cOrnzl.sc-c228687b-0.cCpXER").insertAdjacentElement('beforebegin', maruf);
//////coping element
let aa = document.querySelector("#__next > div > div.sc-2d42a593-0.kOAAXg > div.sc-e5a2a45e-0.cUqiZs > div.sc-e5a2a45e-0.aOcLz.sc-944dd836-0.eDjfJm")
let bb = aa.cloneNode(true)
document.querySelector("#__next > div > div.sc-2d42a593-0.kOAAXg > div.sc-e5a2a45e-0.cUqiZs > div.sc-e5a2a45e-0.cOrnzl.sc-c228687b-0.cCpXER").insertAdjacentElement('beforebegin', b)
////work with id and class 
a[0].setAttribute('id', 'maruf');  //for add any attribute
a[0].classList.remove('maruf'); //for remove class
a[0].classList.toggle('maruf'); //if there is a class then remove the class if not then add the class

// https://www.firsttable.co.nz/



// let style = `
// <style>

// .maruf{
//     display: unset;
// }

// .maruf .sc-e5a2a45e-0.kyBUyJ.sc-677a5199-0.iPBmth{
//     max-width: 100%;
// }

// .maruf .gMCRWH{
//     max-height: 100px;
// }

// .maruf .dAaGxl{
//     justify-content: unset;
//     display: flex;
//     gap: 40px;
//     justify-content: start;
//     align-items: center;

// }

// img.my--image {
//     width: 75px;
//     height: 75px;
//     border-radius: 100px;
// }

// </style>
// `;

// document.querySelector("head").insertAdjacentHTML("beforeend", style);

// let a = document.querySelectorAll(".sc-e5a2a45e-0.ddykU.sc-c225b3ef-0.eCYSMu");
// a[0].classList.add("maruf");

// let b = document.querySelectorAll(
//   ".maruf .sc-e5a2a45e-0.OFrmn.sc-2478c537-3.dAaGxl"
// );
// let c = `<div class="sc-e5a2a45e-0 ddykU"><img
// src="https://images.firsttable.net/300x264/public/Uploads/5ee30cd77b/Auckland-v2.jpeg"
// alt="img"
// height="50px"
// width="50px"
// class="my--image"
// /></div>`;

// let d = document.querySelectorAll(".maruf .lazyload-img-wrapper");

// for (var i = 0; i < b.length; i++) {
//   let e = d[i].querySelector("img");
//   let c = `<div class="sc-e5a2a45e-0 ddykU"><img
//   src="${e.src}"
//   alt="img"
//   height="50px"
//   width="50px"
//   class="my--image"
//   /></div>`;

//   b[i].insertAdjacentHTML("afterbegin", c);
// }