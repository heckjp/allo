<template>
  <v-app>
    <v-row>
      <v-col md="2">
    <sidebar-component></sidebar-component>
      </v-col>
      <v-col md="10">
    <v-main>
      <router-view/>
    </v-main>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
import SidebarComponent from './components/SidebarComponent';
export default {
  name: 'App',

  data: () => ({
    //
  }),
  components:{SidebarComponent}
};
</script>
