<template>
<div>
    <div>
    <section class="section">
        <h1 class="title has-text-primary has-text-centered">Entre em contato com a Or8bit</h1>
    </section>
  </div>
  <div class="field">
  <label class="label">Nome</label>
  <div class="control">
    <input class="input" type="text" placeholder="Text input">
  </div>
</div>

<div class="field">
  <label class="label">E-mail</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input is-danger" type="email" placeholder="Email input" value="hello@">
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
    <textarea class="textarea" placeholder="Textarea"></textarea>
  </div>
</div>

<div class="field is-grouped">
  <div class="control">
    <button class="button is-primary">Submit</button>
  </div>
  <div class="control">
    <button class="button is-primary is-light">Cancel</button>
  </div>
</div>
</div>
</template>