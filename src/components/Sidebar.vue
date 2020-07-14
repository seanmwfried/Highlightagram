/* eslint-disable prettier/prettier */
<template>
  <div ref="nav" class="nav" @click="expandNav">
    <button
      ref="openCloseNavButton"
      class="openCloseNavButton"
      @click="collapseNav"
    >
      >
    </button>
    <div class="container">
      <Login />
      <Filters />
      <Copyright />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Login from "./Login";
import Filters from "./Filters";
import Copyright from "./Copyright";

export default {
  components: {
    Login,
    Filters,
    Copyright
  },
  methods: {
    ...mapActions(["setSideBarIsExpanded"]),
    expandNav: function() {
      //If nav is collapsed, expand on click
      if (!this.expanded) {
        this.expanded = true;
        //Add expanded class to adjust styles
        this.$refs.nav.classList.add("expanded");
        //Change placeholder arrow direction
        this.$refs.openCloseNavButton.innerText = "<";
        //Update state
        this.setSideBarIsExpanded({ sideBarIsExpanded: true });
      }
    },
    collapseNav: function(event) {
      //If nav is expanded, collapse on button click
      if (this.expanded) {
        event.stopPropagation(); //Stop click from bubbling and reopening nav
        this.expanded = false;
        //Remove expanded class to adjust styles
        this.$refs.nav.classList.remove("expanded");
        //Change placeholder arrow direction
        this.$refs.openCloseNavButton.innerText = ">";
        //Update state
        this.setSideBarIsExpanded({ sideBarIsExpanded: false });
      }
    }
  }
}
</script>

<style scoped>
.nav {
  background: #333;
  box-shadow: #000 2px 0px 5px;
  text-align: left;
  height: 100vh;
}

.nav:not(.expanded) {
  cursor: pointer;
}

.openCloseNavButton {
  height: 50px;
  width: 100%;
  cursor: pointer;
  border: none;
  background: #ccff66;
  color: #333;
  font-weight: bold;
}

.container{
  padding: 10px;
}
</style>
