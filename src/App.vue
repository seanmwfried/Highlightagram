<template>
  <div id="app" :class="gridTemplateColumnsClasses">
    <Sidebar />
    <router-view />
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar";
import { mapGetters } from "vuex";

export default {
  methods: {
    ...mapGetters(["getSideBarIsExpanded"])
  },
  components: {
    Sidebar
  },
  computed: {
    gridTemplateColumnsClasses: function() {
      let classes = "gridTemplateColumns";
      if (this.expanded) {
        classes += " expandedNav";
      }
      return classes;
    },
    expanded: function() {
      return this.getSideBarIsExpanded();
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  background: #222;
  color: #ccff66;
  overflow: hidden;
}

#app {
  display: grid;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  transition: 0.4s;
}

.gridTemplateColumns {
  grid-template-columns: 150px 1fr;
}

.expandedNav {
  grid-template-columns: 400px 1fr;
}
</style>
