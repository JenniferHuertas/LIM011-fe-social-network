export default () => {
  const vistaMuro = `
    <section class= 'perfil'>
      <figure id='figureLogo'>
        <img src='img/logo.jpeg' id='logoLoginRegistro'>
      </figure>
     
    <section id='container-posts' class='container-posts'>
    <div class='card-new-post'>
      <textarea name='' id='' placeholder='¿Qué quieres compartir?'></textarea>
      <i class='icon-general far fa-images'></i>
      <button class='share-post type='submit'>Compartir</button>
    </div>
  </section>

    </section>
`;

  const divElement = document.createElement('div');
  divElement.classList.add('position');
  divElement.innerHTML = vistaMuro;
  return divElement;
};
