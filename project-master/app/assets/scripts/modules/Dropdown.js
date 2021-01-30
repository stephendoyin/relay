class Dropdown {
    constructor(){
        this.drodDownEl = document.querySelector(".side-navigation__sub-links-container");
        this.triggerBtn = document.querySelector(".side-navigation__tab-link--drp");
        this.arrow = document.querySelector(".side-navigation__tab-link-arrow")
        this.triggerEvent();
    }

    triggerEvent(){
        
            this.triggerBtn.addEventListener("click", this.toggleDropdown.bind(this));
        
    }

    toggleDropdown(e){
        e.preventDefault();
        this.drodDownEl.classList.toggle('side-navigation__sub-link-container--close');
        this.arrow.classList.toggle("side-navigation__tab-link-arrow--close")
    }
}

export default Dropdown;