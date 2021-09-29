<template>
  <div>
<br>
<br>
<div class="container is-max-desktop">
  <div class="notification is-primary has-text-centered">
    <div class="title">
    Criando sua conta Or8bit - Seja Bem Vindo
    </div>
  </div>
</div>
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

<b-field label="Senha">
                    <b-input
                        type="password"
                        :value="password"
                        password-reveal
                        placeholder="Sua senha"
                        required>
                    </b-input>
                </b-field>

<div class="field">
  <div class="control">
    <label class="checkbox">
      <input type="checkbox">
      Eu concordo com os <a href="#">termos e condições.</a>
    </label>
  </div>
</div>

<div class="field">
  <div class="control">
    <label class="checkbox">
      <input type="checkbox">
      Eu concordo em receber notificações sobre novos campeonatos e outros eventos por E-mail.
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
  </div>
</template>