class Check {
    constructor() {
        this.inputEmail = document.querySelector('#inputEmail');
        this.outEmail = document.querySelector('#outEmail');
        this.checkEmail = document.querySelector('#checkEmail');
        this.clearEmail = document.querySelector('#clearEmail');
        this.valueEmail = '';
        this.isValidEmail = null;
        this.emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

        this.inputUrl = document.querySelector('#inputUrl');
        this.outUrl = document.querySelector('#outUrl');
        this.checkUrl = document.querySelector('#checkUrl');
        this.clearUrl = document.querySelector('#clearUrl');
        this.valueUrl = '';
        this.isValidUrl = null;
        this.urlPattern = /^https:\/\/[a-zA-Z0-9._-]+/;

        this.init();
    }

    init() {
        this.checkEmail.addEventListener('click', () => {
            this.valueEmail = this.inputEmail.value;
            this.isValidEmail = this.emailPattern.test(this.inputEmail.value);
            if (this.isValidEmail) this.outEmail.innerHTML = `<span style="color: green"><i class="fa-solid fa-circle-check"></i></span> ${this.isValidEmail}`;
            else this.outEmail.innerHTML = `<span style="color: red"><i class="fa-solid fa-circle-check"></i></span> ${this.isValidEmail}`;
        })

        this.clearEmail.addEventListener('click', () => {
            this.inputEmail.value = '';
            this.outEmail.textContent = '';
        })

        this.checkUrl.addEventListener('click', () => {
            this.valueUrl = this.inputUrl.value;
            this.isValidUrl = this.urlPattern.test(this.inputUrl.value);
            if (this.isValidUrl) this.outUrl.innerHTML = `<span style="color: green"><i class="fa-solid fa-circle-check"></i></span> ${this.isValidUrl}`;
            else this.outUrl.innerHTML = `<span style="color: red"><i class="fa-solid fa-circle-check"></i></span> ${this.isValidUrl}`;
        })

        this.clearUrl.addEventListener('click', () => {
            this.inputUrl.value = '';
            this.outUrl.textContent = '';
        })
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new Check();
});