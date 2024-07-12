document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    const toggleThemeButton = document.getElementById('toggleTheme');
    const body = document.body;


        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const fields = [
                { id: 'nombre', error: 'El nombre es obligatorio.' },
                { id: 'apellido', error: 'El apellido es obligatorio.' },
                { id: 'email', error: 'El email es obligatorio.' },
                { id: 'fechaNacimiento', error: 'La fecha de nacimiento es obligatoria.' },
                { id: 'provincia', error: 'La provincia es obligatoria.' }
            ];

            let formIsValid = true;

            fields.forEach(field => {
                const input = document.getElementById(field.id);
                const errorElement = input.nextElementSibling;

                if (!input.value.trim()) {
                    input.style.borderColor = 'red';
                    errorElement.textContent = field.error;
                    formIsValid = false;
                } else {
                    input.style.borderColor = '';
                    errorElement.textContent = '';
                }
            });

            if (formIsValid) {
                alert('Formulario enviado con éxito.');
                form.reset();
                fields.forEach(field => {
                    const input = document.getElementById(field.id);
                    input.style.borderColor = '';
                    const errorElement = input.nextElementSibling;
                    if (errorElement) {
                        errorElement.textContent = '';
                    }
                });
            }
        });









  //  form.addEventListener('submit', function(event) {
    //    event.preventDefault();

   //     const nombre = document.getElementById('nombre').value.trim();
     //   const apellido = document.getElementById('//apellido').value.trim();
      //  const email = document.getElementById('email').value.trim();
     //   const fechaNacimiento = document.getElementById('fechaNacimiento').value.trim();
    //    const provincia = document.getElementById('provincia').value.trim();

      //  if (!nombre || !apellido || !email || !fechaNacimiento || !provincia) {
           // alert('Todos los campos son obligatorios.');
       // } else {
          //  alert('Formulario enviado con éxito.');
            //form.reset();
    //    }
 //   });

    toggleThemeButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const labels = document.getElementsByTagName('label');
        for (let i = 0; i < labels.length; i++) {
            labels[i].classList.toggle('text-light');
    }
    });
});




                      
