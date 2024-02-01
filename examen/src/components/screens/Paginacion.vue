<template>
  <b-container fluid>
    <b-row class="mt-4">

      <b-col>
        <h1>Paginacion</h1>
      </b-col>
    </b-row>

    <b-row class="mt-4">
            <b-col col="5">
                <b-breadcrumb :items="items"></b-breadcrumb>
                <div>
                  <b-buton @click="redirigirMenu">
                    Atras
                  </b-buton>

<b-pagination
v-model="currentPage"
:total-rows="rows"
:per-page="perPage"
aria-controls="my-table"
></b-pagination>

<p class="mt-3">Current Page: {{ currentPage }}</p>

<b-table
:items="items"
:fields="fields"
:sort-by.sync="sortBy"
:sort-desc.sync="sortDesc"
responsive="sm"
></b-table>

<div>
Sorting By: <b>{{ sortBy }}</b>, Sort Direction:
<b>{{ sortDesc ? 'Descending' : 'Ascending' }}</b>
</div>
</div>
            </b-col>
        </b-row>
  </b-container>
    
  </template>
  
  <script>
    export default {
      name: 'PaginacionCarros',
      data() {
        return {
          sortBy: 'age',
          sortDesc: false,
          fields: [
            { key: 'last_name', sortable: true },
            { key: 'first_name', sortable: true },
            { key: 'age', sortable: true },
            { key: 'isActive', sortable: false }
          ],
          items: [
          ]
        }
      },
      methods:{
        redirigirMenu() {
        if (this.$route.path == '/menu') {
          return
        }
        this.$router.push({ path: '/menu' })
      },
      }
    }
  </script>