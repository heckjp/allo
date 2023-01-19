<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Cadastro de Pessoas</h1>
      </v-col>
    </v-row>
    <v-row class="mt-4">
      <v-col>
        <v-card class="elevation-1">
          <v-form>
            <v-row>
        <v-col
          cols="12"
          md="6"
        >
          <v-text-field
            v-model="form.name"
            label="Nome completo"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="6"
        >
          <v-text-field
            v-model="form.cpf"
            label="CPF"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="6"
        >
          <v-text-field
            v-model="form.phoneNumber"
            label="Telefone"
            required
          ></v-text-field>
          
        </v-col>
        <v-col
          cols="12"
          md="6"
        >
          <v-text-field
            v-model="form.email"
            label="E-mail"
            required
          ></v-text-field>
          
        </v-col>
      </v-row>
      <v-row class="ml-auto">
        <v-col> 
           <v-btn
      color="primary"
      @click="save()"
    >
      Enviar
    </v-btn>
        </v-col>
      </v-row>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'FormView',
    data(){
      return{
        id:undefined,
        people:[],
        api:'http://localhost:8080/api',
        form: 
          {
            name:'',
            phoneNumber:'',
            cpf:'',
            email:''
          }
        
      }
    },
    methods:{
      getById(id){
        this.$http.get(this.api+'/people/'+id).then((res)=>{
          this.form = res.data;
        })
      },
      save(){
        if(this.id==undefined){
          this.$http.post(this.api+'/people',this.form).then((res)=>{
            console.log(res.data)
          })
        } else {
          this.$http.put(this.api+'people/'+this.id,this.form).then((res)=>{
            console.log(res.data)
          })
        }
        
      }
    },
    mounted(){
     this.id = this.$route.params.id;
     if(this.id!==undefined){
      this.getById(this.id);
     }
    }
  }
</script>
