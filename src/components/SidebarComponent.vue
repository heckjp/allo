<template>
     <v-navigation-drawer permanent>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            <v-img src="../assets/allo_logo.png" width="50px" height="50px" class="ml-10"></v-img>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          link href="/"
        >
          <v-list-item-icon>
            <v-icon>mdi-format-list-bulleted</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Listar</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
         <v-list-item href="/add"
          link
        >
          <v-list-item-icon>
            <v-icon>mdi-account-plus</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Cadastrar</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>

<script>


  export default {
    name: 'SidebarComponent',
     data () {
      return {
        items: [
          { title: 'Listar', icon: 'mdi-format-list-bulleted' },
          { title: 'Cadastrar', icon: 'mdi-account-plus' },
        ],
        right: null,
      }
    },

  }
</script>
