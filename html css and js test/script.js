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

</style>
`;

document.querySelector("head").insertAdjacentHTML("beforeend", style);

let a = document.querySelectorAll(".sc-e5a2a45e-0.ddykU.sc-c225b3ef-0.eCYSMu");
a[0].classList.add("maruf");

let b = document.querySelectorAll(
  ".maruf .sc-e5a2a45e-0.kyBUyJ.sc-677a5199-0.iPBmth"
);

// let d = document.querySelectorAll(".maruf .lazyload-img-wrapper");

b.forEach((item) => {
  let imgSource = item.querySelector("img").src;
  let newImgSource = item.querySelector(
    ".sc-e5a2a45e-0.OFrmn.sc-2478c537-3.dAaGxl"
  );
  let c = `<div class="sc-e5a2a45e-0 ddykU"><img
src="${imgSource}"
alt="img"
height="50px"
width="50px"
class="my--image"
/></div>`;

  newImgSource.insertAdjacentHTML("afterbegin", c);
  item.querySelector(".gMCRWH").addEventListener("click", function (e) {
    e.preventDefault();
    console.log(imgSource);
  });
});

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
