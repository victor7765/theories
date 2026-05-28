// SMOOTH NAVIGATION

const links =
document.querySelectorAll("nav a");

links.forEach(link => {

    link.addEventListener("click", e => {

        e.preventDefault();

        const target =
        document.querySelector(
            link.getAttribute("href")
        );

        target.scrollIntoView({

            behavior:"smooth"

        });

    });

});

// ANIMATION

const observer =
new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{

    threshold:0.15

});

const cards =
document.querySelectorAll(".glass");

cards.forEach(card => {

    card.classList.add("hidden");

    observer.observe(card);

});

// DYNAMIC TITLE EFFECT

const title =
document.querySelector(".hero h1");

window.addEventListener("mousemove", e => {

    let x =
    (window.innerWidth / 2 - e.pageX) / 40;

    let y =
    (window.innerHeight / 2 - e.pageY) / 40;

    title.style.transform =
    `translate(${x}px, ${y}px)`;

});

// DOWNLOAD COUNTER

let downloads = 0;

const downloadButtons =
document.querySelectorAll(".download-btn, .secondary-btn");

downloadButtons.forEach(button => {

    button.addEventListener("click", () => {

        downloads++;

        console.log(
            "PDF Downloads:",
            downloads
        );

    });

});

// CONSOLE MESSAGE

console.log(

`
THEORIES WEBSITE ACTIVE

AG Cars:
Artificial Gravity Transportation Systems

Published by:
Victor Gupta & ChatGPT
`

);