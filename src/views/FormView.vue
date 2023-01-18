<template>
  <div>
  Cadastro
  </div>
</template>

<script>
  export default {
    name: 'FormView',
    data(){
      return{
        people:[]
      }
    },
    methods:{
      getById(id){
        return id
      }
    },
    mounted(){
      var id = this.$route.params.id;
      console.log(id);
    }
  }
</script>
