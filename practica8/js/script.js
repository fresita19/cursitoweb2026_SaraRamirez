const loginForm = document.getElementById('login-form');
const btnCreateAccount = document.getElementById('btn-create-account');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email && password) {
        alert(`[SIMULACIÓN EN CLASE]\nIntento de inicio de sesión recibido:\nUsuario: ${email}`);
    }
});

btnCreateAccount.addEventListener('click', () => {
    alert('[SIMULACIÓN EN CLASE]\nAquí se abriría la ventana emergente para crear una cuenta nueva.');
});

// RECUPERAR CONTRASEÑA
const recoveryForm = document.getElementById('recovery-form');
const btnRecoveryAccount = document.getElementById('btn-create-account');

if (recoveryForm) {
    recoveryForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const recoveryEmail = document.getElementById('recovery-email').value;

        if (recoveryEmail) {
            alert('[SIMULACIÓN EN CLASE]\nSolicitud de recuperación recibida correctamente.');
        }
    });
    
btnCreateAccount.addEventListener('click', () => {
    alert('[SIMULACIÓN EN CLASE]\nAquí se abriría la ventana emergente para crear una cuenta nueva.');
});    
}