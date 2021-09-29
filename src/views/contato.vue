<template>
<div>
<br>
<br>
<div class="container is-max-desktop">
  <div class="notification is-primary has-text-centered">
    <div class="title">
    Entre em contato com a Or8bit
    </div>
  </div>
</div>

<br>
<br>

  <div class="field">
  <label class="label">Nome</label>
  <div class="control">
    <input class="input" type="text" placeholder="Digite aqui">
  </div>
</div>

<div class="field">
  <label class="label">E-mail</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input is-danger" type="email" placeholder="Digite o e-mail aqui" value="hello@">
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-exclamation-triangle"></i>
    </span>
  </div>
  <p class="help is-danger">Este e-mail não é válido</p>
</div>

<div class="field">
  <label class="label">Assunto</label>
  <div class="control">
    <div class="select">
      <select>
        <option>Selecione</option>
        <option>Problema 1</option>
        <option>Problema 2</option>
        <option>Problema 3</option>
        <option>Problema 4</option>
      </select>
    </div>
  </div>
</div>

<div class="field">
  <label class="label">Mensagem</label>
  <div class="control">
    <textarea class="textarea" placeholder="Escreva aqui"></textarea>
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
</div>
</template>