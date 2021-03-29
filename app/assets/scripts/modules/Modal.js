class Modal {
  constructor() {
    this.injectHTML();
    this.modal = document.querySelector(".modal");
    this.closeIcon = document.querySelector(".modal__close");
    this.openModalButtons = document.querySelectorAll(".open-modal");
    this.events();
  }

  events() {
    // listen for close click
    this.closeIcon.addEventListener("click", () => this.closeTheModal());

    // pushes any key
    document.addEventListener("keyup", e => this.keyPressHandler(e));
  }

  keyPressHandler(e) {
    if (e.keyCode == 27) {
      this.closeTheModal();
    }
  }

  openTheModal(e) {
    this.modal.classList.add("modal--is-visible");
  }

  closeTheModal() {
    this.modal.classList.remove("modal--is-visible");
  }

  injectHTML() {
    document.body.insertAdjacentHTML('beforeend', `
    <div  class="modal" 
          role="dialog" 
          aria-labelledby="dialog-title" 
          aria-describedby="dialog-desc">
      <div class="modal__inner">

        <!-- Modal title -->
        <h2   class="heading heading-primary heading-primary--modal heading-dark" 
              id="dialog-title" 
              tabindex="0">
          Commences Dès Aujourd'hui !
        </h2>

        <div class="wrapper">

          <!-- heading secondary -->
          <h3   class="heading heading-secondary heading-dark" 
                id="dialog-desc" 
                tabindex="0">
            Seulement 2 minutes pour remplir ce formulaire ...
          </h3>

          <!-- heading tertiary -->
          <h4 class="heading heading-tertiary heading-dark" tabindex="0">
            Si tu veux plus d'informations et
            <strong>que l'on t'aide dans tes objectifs</strong>...
          </h4>
          

          <!-- Form section -->
          <form class="contact-form" id="form" action="#">

            <div class="form-group">
              <input class="form-input" type="text" name="lastname" id="lastname" placeholder="Votre nom" tabindex="0" aria-required="true" required>
              <label class="form-label" for="lastname">Nom</label>
            </div>


            <div class="form-group">
              <input class="form-input" type="email" name="email" id="email" placeholder="Votre email" tabindex="0" aria-required="true" required>
              <label class="form-label" for="email">Email</label>
            </div>
  
            <button class="btn-form btn btn--large btn--accent" type="submit" id="submit">
              C'est Parti  &rarr;
            </button>
  
          </form>
          

        </div>
          
      </div>

    <div class="modal__close">X</div>
  </div>
    `);
  }
}

export default Modal;