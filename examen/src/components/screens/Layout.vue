<template>
    <div>
    <div id="nav">
      <b-row>
        <div>
          <b-nav tabs>
            <b-nav-item active>Active</b-nav-item>
            <b-nav-item>Link</b-nav-item>
            <b-nav-item>Another Link</b-nav-item>
            <b-nav-item disabled>Disabled</b-nav-item>
          </b-nav>
        </div>
      </b-row>
      <b-row>
        <div id="sideBar">
          <b-button v-b-toggle.sidebar-left>
            <b-icon-list></b-icon-list>
          </b-button>
          <b-sidebar id="sidebar-left" title="Sidebar" left shadow>
            <div class="px-3 py-2">
              <div id="opcSide">
  
                <b-button @click="redirigirMenu" size="sm" variant="primary" class="mb-2">Menu</b-button>
                <b-button @click="redirigirForms" size="sm" variant="primary" class="mb-2">Formulario</b-button>
                <b-button @click="redirigirTable" size="sm" variant="primary" class="mb-2">Tabla</b-button>
              </div>
            </div>
          </b-sidebar>
        </div>
      </b-row>
      
    </div>
    <div>
      
    </div>
    <router-view>
   
  
  
    
  </router-view>
  
  <b-col>
  
  
  
  </b-col>
  </div>
    
   
  </template>
  <script>
  export default {
    name: 'LayoutTotal',
    methods: {
      redirigirMenu() {
        if (this.$route.path == '/menu') {
          return
        }
        this.$router.push({ path: '/menu' })
      },
      redirigirForms() {
        if (this.$route.path == '/formulario') {
          return
        }
        this.$router.push({ path: '/formulario' })
      },
      redirigirTable() {
        if (this.$route.path == '/pagninacion') {
          return
        }
        this.$router.push({ path: '/paginacion' })
      }
    }
  }
  </script>
  
  <style scoped>
  #nav {
    background-color: #f5f5f5;
    border-bottom: 1px solid #648d92;
    border-top: 1px solid #e3e3e3;
    padding: 0.5rem 1rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  #sideBar {
    display: flex;
    justify-content: space-between;
    align-items: center;
  
  }
  
  #opcSide {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
  
  }
  
  #info {
    width: 60%;
    margin-top: 50px;
    margin-left: 40px;
  
    }
  
    b-text {
      font-size: 15px;
      text-align: justify;
    }
  
    #texto {
      margin-top: 50px;
      width: 70%;
      margin-left: 40px;
  }
  </style>
  