<template>
<div>
  <br>
      <hr style="width: 400px; margin:auto" class="has-background-primary">
  <br>
  <br>
<div class="container is-max-desktop">
  <div class="notification is-primary has-text-centered">
    <div class="title">
    Campeonato de FIFA 21 - Inscrição
    </div>
  </div>
</div>
<br>
<br>

<article class="media">
  <figure class="media-left">
    <p class="image is-64x64">
      <img src="@/assets/fifalogo.png">
    </p>
  </figure>
  <div class="media-content">
    <div class="content">
      <p>
        <strong>Campeonato FIFA 21 - <small>data(21/10/2021) - das 19h às 21h - Participantes 10/12 - </small> <small><img src="@/assets/icone.png"> 400 </small></strong>
        <br>
        O campeonato de FIFA 21, ocorrerá nos dias 21 e 22 de outubro de 2021, das 19h até às 21h. No primeiro dia acontecerão as fases iniciais do torneiro, no segundo dia, as fases finais. O número mínimo de players necessários para que os jogos aconteçam é de 8, e o máximo 16, caso não seja atinjido o número mínimo de playes, o torneio será cancelado, e os Or8bitcoins serão devolvidos para aqueles que já estiverem inscritos A taxa de inscrição para o torneio é de 40 Or8bitcoins. <strong>Se inscreva preenchendo o formulario abaixo.</strong>
      </p>
    </div>
    <nav class="level is-mobile">
      <div class="level-left">
      </div>
    </nav>
  </div>
  <div class="media-right">
    <button class="delete"></button>
  </div>
</article>
<br>
<br>

<div class="field">
  <label class="label has-text-primary">Nome Completo</label>
  <div class="control">
    <input class="input" type="text" placeholder="Digite aqui">
  </div>
</div>

<div class="field">
  <label class="label has-text-primary">Nick</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input is-success" type="text" placeholder="Digite aqui" value="bulma">
    <span class="icon is-small is-left">
      <i class="fas fa-user"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
  </div>
  <p class="help is-success">Esse nickname está disponível</p>
</div>

<div class="field">
  <label class="label has-text-primary">E-mail</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input is-danger" type="email" placeholder="Digite o e-mail aqui" value="hello@">
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-exclamation-triangle"></i>
    </span>
  </div>
  <p class="help is-danger">Este e-mail não é valido</p>
</div>

<div class="field">
  <label class="label has-text-primary">Nome do Time</label>
  <div class="control">
    <input class="input" type="text" placeholder="Digite aqui">
  </div>
</div>


<div class="field">
  <div class="control">
    <label class="checkbox">
      <input type="checkbox">
      Eu concordo com os <a href="#">termos e condições</a>
    </label>
  </div>
</div>

<div class="field">
  <div class="control">
    <label class="checkbox">
      <input type="checkbox">
      Em concordo em receber notificações sobre novos campeonatos por E-mail
    </label>
  </div>
</div>

<div class="field is-grouped">
  <div class="control">
    <button class="button is-primary">Enviar</button>
  </div>
  <div class="control">
    <button class="button is-primary is-light">Cancelar</button>
  </div>
</div>
<br>
      <hr style="width: 400px; margin:auto" class="has-background-primary">
  
</div>
</template>