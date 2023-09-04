// setup IntersectionObserver
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        window.console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

// get all the elements to be observed
const targets = document.querySelectorAll('.hidden');

// start observing
targets.forEach((target) => {
    observer.observe(target);
});

const text = document.querySelectorAll('#ngw4text');

const textArray = ['____', 'n___', 'ng__', 'ngw_', 'ngw4']

const typeWriter = (textArray, element, speed) => {
    textArray.forEach((word, i) => {
        setTimeout(() => (element.innerHTML = word), speed * i);
    });
};

// typewrite
typeWriter(textArray, text[0], 430)


//daddy github copilot wrote comments for me :3
