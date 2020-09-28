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
    <div class="modal">
      <div class="modal__inner">

        <!-- Modal title -->
        <h2 class="heading-primary heading-primary--modal">
          Commences Dès Aujourd'hui !
        </h2>

        <div class="wrapper">

          <!-- P description -->
          <p>
            Seulement 2 minutes pour remplir ce formulaire et tu auras <strong>ton premier conseil coach sport santé
              entièrement gratuit</strong>.
          </p>
          

          <!-- Form section -->
          <form class="form" id="form" action="#">

            <div class="form__group">
              <input class="form__input" type="text" name="firstname" id="firstname" placeholder="Votre prénom" required>
              <label class="form__label" for="firstname">Prénom</label>
            </div>


            <div class="form__group">
              <input class="form__input" type="text" name="lastname" id="lastname" placeholder="Votre nom" required>
              <label class="form__label" for="lastname">Nom</label>
            </div>


            <div class="form__group">
              <input class="form__input" type="email" name="email" id="email" placeholder="Votre email" required>
              <label class="form__label" for="email">Email</label>
            </div>


            <div class="form__group">
              <input class="form__input" type="tel" name="phone" id="phone" placeholder="Votre téléphone * (optionnel)">
              <label class="form__label" for="phone">Téléphone</label>
            </div>


            <!--  Checkbox group  -->
            <div>
              <div class="form__checkbox-group">
                <input class="form__checkbox-input" type="checkbox" name="subject" id="coaching">
                <label class="form__checkbox-label" for="coaching">
                  <span class="form__checkbox-button"></span>
                  Coaching Personnel</label>
              </div>


              <div class="form__checkbox-group">
                <input class="form__checkbox-input" type="checkbox" name="subject" id="partnership">
                <label class="form__checkbox-label" for="partnership">
                  <span class="form__checkbox-button"></span>
                  Partenariat / Collaboration</label>
              </div>


              <div class="form__checkbox-group">
                <input class="form__checkbox-input" type="checkbox" name="subject" id="physical">
                <label class="form__checkbox-label" for="physical">
                  <span class="form__checkbox-button"></span>
                  Préparation Physique</label>
              </div>
            </div>
  
            <button class="form-btn btn btn--large btn--orange" type="submit" id="submit">
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