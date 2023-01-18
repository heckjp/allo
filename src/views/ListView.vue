<template>
 <div>
  Listagem
 </div>
</template>

<script>
 

  export default {
    name: 'ListView',
    data(){
      return {
        people:[],
        api: 'http://localhost:8080/api'
      }
    },
    methods: {
      
      getPeople: function(){
        this.$http.get(this.api+"/people").then((res)=>{
          this.people = res.data;
          console.log(this.people)
        })
      }
    },
    mounted(){
      this.getPeople()
    }
  }
</script>
