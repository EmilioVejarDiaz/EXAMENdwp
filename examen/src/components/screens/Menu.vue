<template>
    <b-container fluid>
        <b-row class="mt-4">
            <b-col>
                <h1>Menu</h1>
            </b-col>
        </b-row>
        <b-row class="mt-4">
            <b-col col="5">
        <div>
      <div>
        <b-breadcrumb :items="items"></b-breadcrumb>
      </div>
      <div id="navegacion">
        <b-row>
            <b-button @click="redirigirForms">Siguiente</b-button>
        </b-row>
      </div>
      <div id="info">
        
      </div>
    </div>
    </b-col>
    </b-row>


    </b-container>
    
  </template>
  
  <script>
  export default {
    name: 'MenuInicio',
    data() {
      return {
        items: [
  
          {
            text: 'Menu',
            active: true,
          }
  
        ]
      }
    },
    methods: {
      redirigirForms() {
        if (this.$route.path == '/formulario') {
          return
        }
        this.$router.push({ path: '/formulario' })
      },

    }
  }
  </script>
  
  <style></style>