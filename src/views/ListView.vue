<template>
 <v-container>
  <v-row>
    <v-col>
      <h1>Listagem de Pessoas</h1>
    </v-col>
  </v-row>
  <v-row class="mt-4">
    <v-col>
          <v-data-table
          :headers="headers"
          :items="people"
          :items-per-page="5"
          class="elevation-1"
        ></v-data-table>
    </v-col>
  </v-row>
 </v-container>
</template>

<script>
 

  export default {
    name: 'ListView',
    data(){
      return {
        people:[],
        api: 'http://localhost:8080/api',
        headers: 
          [
            {text: 'Nome',value:'name'},
            {text: 'CPF',value:'cpf'},
            {text: 'Telefone',value:'phoneNumber'},
            {text: 'E-mail',value:'e-mail'},
          ]
      }
    },
    methods: {
      getPeople: function(){
        this.$http.get(this.api+"/people").then((res)=>{
          this.people = res.data;
        })
      }
    },
    mounted(){
      this.getPeople()
    }
  }
</script>
