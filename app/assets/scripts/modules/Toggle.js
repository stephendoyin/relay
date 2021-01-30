class Toggle {
    constructor(){
        this.sturbornLabel = document.querySelector(".side-navigation__tab-link__label");
        this.triggerBtn = document.querySelector(".side-navigation__menu-link");
        this.menuBar = document.querySelector(".side-navigation__menu-link-container")
        this.eventCall();
    }

    eventCall(){
        
            this.triggerBtn.addEventListener("click", this.toggleMenu.bind(this));
        
    }

    toggleMenu(e){
        e.preventDefault();
        this.menuBar.classList.toggle('side-navigation__menu-link-container--close');
        this.sturbornLabel.classList.toggle("side-navigation__tab-link__label--close")
    }
}

export default Toggle;