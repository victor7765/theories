// SMOOTH SCROLL EFFECT

const links =
document.querySelectorAll('nav a');

links.forEach(link => {

    link.addEventListener('click', e => {

        e.preventDefault();

        const target =
        document.querySelector(
            link.getAttribute('href')
        );

        target.scrollIntoView({

            behavior:'smooth'

        });

    });

});

// FADE-IN ANIMATION

const cards =
document.querySelectorAll('.card');

const observer =
new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add('show');

        }

    });

},{

    threshold:0.2

});

cards.forEach(card => {

    card.classList.add('hidden');

    observer.observe(card);

});
