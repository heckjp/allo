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
          <v-form v-model="valid">
            <v-row class="mx-auto">
        <v-col
          cols="12"
          md="6"
        >
          <v-text-field
            v-model="form.name"
            label="Nome completo"
            required
            :rules="rules.name"

          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="6"
        >
          <v-text-field 
            v-mask="'###.###.###-##'"
            v-model="form.cpf"
            label="CPF"
            :rules="rules.cpf"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="6"
        >
          <v-text-field 
            v-mask="'(##)-#####-####'"
            v-model="form.phoneNumber"
            label="Telefone"
            :rules="rules.phoneNumber"
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
            :rules="rules.email"
            required
            type="e-mail"
          ></v-text-field>
          
        </v-col>
      </v-row>
      <v-row class="ml-auto">
        <v-col md="1"> 
           <v-btn
            :disabled="!valid"
            color="primary"
            @click="save()"
          >
            Enviar
          </v-btn>
        </v-col>
        <v-col md="1">
            <v-btn
              class="ml-2"
              color="error"
              @click="cancel()"
            >
              Cancelar
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
        valid:true,
        id:undefined,
        people:[],
        api:process.env.VUE_APP_API_URL,
        form: 
          {
            name:'',
            phoneNumber:'',
            cpf:'',
            email:''
          },
          rules: {
            name: [val => (val || '').length > 0 || 'O campo Nome obrigatório'],
            phoneNumber: [val => !!val  || 'O campo Telefone é obrigatório', val=>val.length ==15 || 'Telefone inválido'],
            cpf: [val => !!val  || 'O campo CPF é obrigatório', val=>val.length ==14 || 'CPF inválido'],
            email: [ val => !!val || 'E-mail é obrigatório',val => /.+@.+\..+/.test(val) || 'E-mail inválido',]
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
            if(res.status=='201'){
              this.$swal("Sucesso!","Cadastro realizado com sucesso",'success')
              this.$router.push({ path: `/`} )
            } else {
              console.log(res);
              this.$swal("Erro!","Ocorreu um erro ao efetuar o cadastro",'error')
            }
          })
        } else {
          this.$http.put(this.api+'/people/'+this.id,this.form).then((res)=>{
           if(res.status=='200'){
              this.$swal("Sucesso!","Cadastro editado com sucesso",'success')
            } else {
                this.$swal("Erro!","Erro ao editar cadastro",'error')
            }
          })
        }
      },
      cancel(){
        this.$router.push({ path: `/`} )
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
