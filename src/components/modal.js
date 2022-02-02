import react from "react";



function Modal() {
    return (
        <>
<div class="modal fade show" id="loginModal" tabindex="-1" role="" style="display: block; padding-left: 0px;">
  <div class="modal-dialog modal-login" role="document">
      <div class="modal-content">
          <div class="card card-signup card-plain">
              <div class="modal-header">
                  <div class="card-header card-header-primary text-center">
                      <button type="button" class="close" data-dismiss="modal" aria-hidden="true"><i class="material-icons">clear</i></button>
                      <h4 class="card-title">Iniciar Sesión</h4>
                      <div class="social-line">
                          <a href="https://millaa.cl" class="btn btn-just-icon btn-link">
                              
                          </a>
                          <a href="https://millaa.cl" class="btn btn-just-icon btn-link">
                              
                          </a>
                          <a href="https://millaa.cl" class="btn btn-just-icon btn-link">
                              
                          <div class="ripple-container"></div></a>
                      </div>
                  </div>
              </div>
              <div class="modal-body">
                  <form class="form" method="" action="">
                      <p class="description text-center">Ingresa tus datos</p>
                      <div class="card-body">

                          <div class="form-group bmd-form-group">
                              <div class="input-group">
                                  <span class="input-group-addon">
                                      <i class="material-icons">face</i>
                                  </span>
                                  <input id="UsuarioLogin" type="text" class="form-control" placeholder="Nombre..."/>
                              </div>
                          </div>

                          <div class="form-group bmd-form-group">
                              <div class="input-group">
                                  <span class="input-group-addon">
                                      <i class="material-icons">email</i>
                                  </span>
                                  <input id="EmailLogin" type="text" class="form-control" placeholder="Email..."/>
                              </div>
                          </div>

                          <div class="form-group bmd-form-group">
                              <div class="input-group">
                                  <span class="input-group-addon">
                                      <i class="material-icons">lock_outline</i>
                                  </span>
                                  <input id="ContraseniaLogin" type="password" placeholder="Contraseña..." class="form-control"/>
                              </div>
                          </div>
                      </div>
                  </form>
              </div>
              <div class="modal-footer justify-content-center">
                <button class="btn btn-primary btn-link" onclick="ingresarSitio();">Ingresar</button>
              </div>
              <div class="modal-footer justify-content-center">
              <p id="mensajeValidacion"></p>
              <p><em><strong>nombre:admin ; email: yo@yo.com ; contraseña:123</strong></em></p>
            </div>
          </div>
      </div>
  </div>
</div>
</>

    );
  }

  export default Modal;