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
             <template
        v-slot:no-data
      >
        Nenhum registro encontrado'
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
        api: process.env.VUE_APP_API_URL,
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
       this.$router.push({ path: `/edit/${id}` })
      },
      deletePeople:function(id){
           this.$swal({
          title: 'Deseja excluir este registro?',
          showCloseButton: true,
           showCancelButton: true,
          confirmButtonText: 'Sim',
          cancelButtonText: 'Não',
          confirmButtonColor:"#068c08",
          cancelButtonColor:"#b51105"
        }).then((res)=>{
          if (res.isConfirmed){
            this.$http.delete(this.api+"/people/"+id).then((result)=>{
                if(result.status=='200'){
                  this.$swal("Sucesso!","Registro excluído com sucesso",'success')
                  this.getPeople();
                } else {
                this.$swal("Erro!","Erro ao tentar excluir o cadastro",'error')
                }
            })
        }
        })
      }
    },
    mounted(){
      this.getPeople()
      console.log(process.env.VUE_APP_API_URL)
    }
  }
</script>
