export default () => {
  const vistaMuro = `
    <section class= 'muro'>
      <header id='barrita'>
        <nav id='barraHorizontal'>
          <figure id='figureLogo'>
            <img src='img/logo.jpeg' id='logoLoginRegistro'>
          </figure>
          <input type="checkbox" id="menu-toggle"/>
  <label id="trigger" for="menu-toggle"></label>
  <label id="burger" for="menu-toggle"></label>
  <ul id="menu">
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Portfolio</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
        </nav>    
      </header>  
        <section class='profile'>
            <div class='front'>Mariana Costa</div>
                <div class='userProfile'>
                    <img src='https://image.flaticon.com/icons/png/512/145/145847.png' id='imgPerfil'>
                </div>
            </div>
        </section>
      
        <section id='container-posts' class='container-posts'>
            <div class='card-new-post'>
                <textarea name='' id='' placeholder='¿Qué quieres compartir?'></textarea>
                <i class="fas fa-image"></i> 
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
