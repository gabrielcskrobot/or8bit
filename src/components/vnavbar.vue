<template>
<div>
    <b-navbar>
        <template #brand>
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="@/assets/or8bit-logo.png"
                >
            </b-navbar-item>
        </template>
        <template #start>
            <b-navbar-item href="#/">
                Home
            </b-navbar-item>
            <b-navbar-item href="#/eventos">
                Eventos
            </b-navbar-item>
            <b-navbar-item href="#/contato">
                Contato
            </b-navbar-item>
        </template>
        <template #end>
                    <b-navbar-item tag="div">
                        <div class="buttons">
                            <a class="button is-primary" @click="isLoginModalActive = true">
                                Login
                            </a>
                        </div>
                    </b-navbar-item>
                </template>        
    </b-navbar>
     <b-modal
            v-model="isLoginModalActive"
            has-modal-card
            trap-focus
            :destroy-on-hide="false"
            aria-role="dialog"
            aria-label="Login"
            aria-modal>
            <template #default="props">
                <modal-login @close="props.close"></modal-login>
            </template>
        </b-modal>      
</div>
</template>
<script>
import ModalLogin from './modal-login.vue'
export default {
    data(){
        return {
            isLoginModalActive: false
        }
    },
    components: {
        'modal-login': ModalLogin
    }
}
</script>