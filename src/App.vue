<template>
  <v-app>
    <v-navigation-drawer
      app
      temporary
      v-model="drawer"
    >
      <v-list>
        <v-list-tile
          v-for="link of links"
          :key="link.title"
          :to="link.url"
        >
          <v-list-tile-action>
            <v-icon>{{link.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="link.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile
          v-if="isUserLoggedIn"
          @click="onLogout"
        >
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="'Logout'"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar 
    app 
    dark 
    color="indigo darken-3">
      <v-toolbar-side-icon
        @click="drawer = !drawer"
        class="hidden-md-and-up"
      ></v-toolbar-side-icon>
      <v-toolbar-title>
      	<router-link to="/" tag="span" class="pointer">TTR Logic</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          v-for="link in links"
          :key="link.title"
          :to="link.url"
          flat
        >
          <v-icon left>{{link.icon}}</v-icon>
          {{link.title}}
        </v-btn>
        <v-btn
          @click="onLogout"
          flat
          v-if="isUserLoggedIn"
        >
          <v-icon left>exit_to_app</v-icon>
          Logout
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>


    <v-content>
      <router-view></router-view>
      <template v-if="error">
	      <v-snackbar
	        :timeout="5000"
	        :multi-line="true"
	        color="error"
	        @input="closeError"
	      >
	        {{error}}
	        <v-btn flat dark @click.native="closeError">Close</v-btn>
	      </v-snackbar>
      </template>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: false
    }
  },
  computed: {
    error () {
      return this.$store.getters.error
    },
    isUserLoggedIn () {
      return this.$store.getters.isUserLoggedIn
    },
    links () {
      if (this.isUserLoggedIn) {
        return [
        ]
      }

      return [
        {title: 'Login', icon: 'lock', url: '/login'},
        {title: 'Registration', icon: 'face', url: '/registration'}
      ]
    }
  },
  methods: {
    closeError () {
      this.$store.dispatch('clearError')
    },
    onLogout () {
      this.$store.dispatch('logOutUser')
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
  .pointer {
    cursor: pointer;
  }
</style>