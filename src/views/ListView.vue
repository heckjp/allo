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
        >
            <template  v-slot:item.actions="{ item }">
              <v-icon small class="mr-2" @click="editPeople(item.id)">mdi-pencil</v-icon>
              <v-icon small @click="deletePeople(item.id)">mdi-delete</v-icon>
            </template>
        </v-data-table>
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
            {text: 'E-mail',value:'email'},
            {text: 'Ações', value:'actions',sortable:false}
          ]
      }
    },
    methods: {
      getPeople: function(){
        this.$http.get(this.api+"/people").then((res)=>{
          this.people = res.data;
        })
      },
      editPeople: function(id){
        console.log(id);
      },
      deletePeople:function(id){
        this.$http.delete(this.api+"/people/"+id).then((res)=>{
          console.log(res);
        })
      }
    },
    mounted(){
      this.getPeople()
    }
  }
</script>
