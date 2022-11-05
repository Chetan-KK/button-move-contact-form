let modeBut = document.querySelector('.mode');

if (localStorage.getItem('mode') == 'dark') {
    dark(modeBut);
}

function theme() {
    if (document.body.classList.contains('dark')) {
        light();
        localStorage.setItem('mode', 'light');
    }
    else {
        dark();
        localStorage.setItem('mode', 'dark');
    }
}

function dark() {
    document.body.classList.add('dark');
    modeBut.innerText = "Light Mode";
}
function light() {
    document.body.classList.remove('dark');
    modeBut.innerText = "Dark Mode";
}

let nameI = document.getElementById('name');
let emailI = document.getElementById('email');
let button = document.getElementById('button');

nameI.addEventListener('input', () => {
    if (/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/.test(nameI.value)) {
        valid(nameI);
    }
    else {
        invalid(nameI);
    }
});

emailI.addEventListener('input', () => {
    if (/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(emailI.value)) {
        valid(emailI);
    }
    else {
        invalid(emailI);
    }
});

function valid(element) {
    element.classList.remove('invalid');
    element.classList.add('valid');
    butDisplay();
}
function invalid(element) {
    element.classList.add('invalid');
    element.classList.remove('valid');
    butDisplay();
}


let lastTransform = 0;
button.addEventListener('mouseover', () => {
    if (emailI.classList.contains('valid') && nameI.classList.contains('valid')) {
    } else {
        if (button.style.transform == `translateX(${150 + lastTransform}px)`) {
            button.style.transform = `translateX(${lastTransform}px)`;
        }
        else {
            lastTransform = Math.floor(Math.random() * 30);
            button.style.transform = `translateX(${150 + lastTransform}px)`;
        }
    }
});

function butDisplay() {
    if (window.innerWidth < 500) {
        if (emailI.classList.contains('valid') && nameI.classList.contains('valid')) {
            button.style.display = 'inline';
        } else {
            button.style.display = 'none';
        }
    }
}