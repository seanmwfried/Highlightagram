<template>
  <div class="container">
    <h2 :class="loginHeadingExpandedClass">Login</h2>
    <!-- This one is invisible to keep landing space for transition -->
    <h2 class="loginHeadingSpacer">Login</h2>
    <div :class="formContainerExpandedClass">
      <form action="" :class="formExpandedClass">
        <label for="userName">UserName</label>
        <input type="text" name="userName" id="userName" required />
        <label for="password">Password</label>
        <input type="password" name="password" id="password" required />
        <div class="formButtons">
          <input
            class="button registerButton"
            @click.prevent="processRegister"
            type="submit"
            value="Register"
          />
          <input
            class="button loginButton"
            @click.prevent="processLogin"
            type="submit"
            value="Login"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  methods: {
    ...mapGetters(["getSideBarIsExpanded"]),
    processLogin: function() {
      //Process Login
    },
    processRegister: function() {
      //Process Register
    }
  },
  computed: {
    sideBarIsExpanded: function() {
      return this.getSideBarIsExpanded();
    },
    loginHeadingExpandedClass: function() {
      let classes = ["loginHeading"];
      if (this.sideBarIsExpanded) {
        classes.push("loginHeadingExpanded");
      }
      return classes.join(" ");
    },
    formExpandedClass: function() {
      let classes = [];
      if (this.sideBarIsExpanded) {
        classes.push("formExpanded");
      }
      return classes.join(" ");
    },
    formContainerExpandedClass: function() {
      let classes = ["formContainer"];
      if (this.sideBarIsExpanded) {
        classes.push("formContainerExpanded");
      }
      return classes.join(" ");
    }
  }
};
</script>

<style scoped>
.container {
  border: black solid 2px;
  border-radius: 5px;
  background-color: #222;
  position: relative;
}

form {
  display: flex;
  flex-direction: column;
  color: #fff;
  opacity: 0;
}

.formExpanded {
  opacity: 1;
}

.formContainer {
  transition: 0.4s;
  opacity: 0;
  height: 20px;
  overflow: hidden;
}

.formContainerExpanded {
  height: 140px;
  opacity: 1;
}

input {
  background: #444;
  border: none;
  border-radius: 5px;
  height: 25px;
}

.loginHeading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0px 0px;
  color: #ccff66;
  transition: 0.4s;
}

.loginHeadingExpanded {
  top: 5px;
  left: 10px;
  transform: inherit;
}

.loginHeadingSpacer {
  visibility: hidden;
  margin: 5px 0px;
}

.formButtons {
  margin: 7px 0px;
  margin-bottom: 0;
  display: flex;
  justify-content: end;
}

.button {
  height: 2.5rem;
  width: 5rem;
  font-size: 1.1rem;
}

.registerButton {
  background-color: #222;
  border: #ccff66 2px solid;
  margin-right: 5px;
  color: #ccff66;
}

.loginButton {
  background-color: #ccff66;
}
</style>
