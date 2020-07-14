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
        <h2 class="section-title section-title--blue section-title--less-margin">
          Commences <strong>Dès Aujourd'hui</strong> !
        </h2>

        <div class="wrapper wrapper--narrow generic-content-container">

          <!-- P description 
          <p class="d-none-until-XSmall">
          Dès aujourd'hui, tu accèdes au premier <strong>questionnaire d'entrée de Coaching</strong>. C'est gratuit, aucun engagement, cela nous permet déjà de prendre les premières informations nécessaires pour te proposer la méthode adaptée à tes besoins et te conseiller selon tes besoins vers les priorités que tu pourrai mettre en place. 
          </p>
          -->
          <p>
          Seulement 2 minutes pour remplir ce formulaire et tu auras <strong>ton premier conseil coach sport santé entièrement gratuit</strong>.
          </p>

          <!-- Form section -->
          <form id="formSendSurvey">
  
            <div class="form-group">
              <label id="firstname" for="firstname">Prénom</label>
              <input type="text" name="firstname" id="firstname" class="form-control" placeholder="Ecrivez votre prénom" required>
            </div>
  
            <div class="form-group">
              <label id="lastname" for="lastname">Nom</label>
              <input type="text" name="lastname" id="lastname" class="form-control" placeholder="Ecrivez votre nom" required>
            </div>
  
            <div class="form-group">
              <label for="email" id="email-label">Email</label>
              <input type="email" name="email" id="email" class="form-control" placeholder="Ecrivez votre email" required>
            </div>
  
            <button type="submit" id="submit" class="btn-submit">
              C'est Parti !
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