<template>
  <div class="AuthForm">
    <FormField
      type="password"
      placeholder="access code"
      @change="(event) => (password = event.target.value)"
    />
    <Button
      variant="outline"
      color="primary"
      @click="authenticate"
      width="full"
    >
      ENTER
    </Button>
  </div>
</template>

<script setup lang="ts">
const password = ref("");
const authenticated = useCookie("authenticated");

function authenticate() {
  if (password.value === "kinderbueno") {
    authenticated.value = "true";
    window.location.reload();
  }
}
</script>

<style lang="scss">
.AuthForm {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #000;
  color: #fff;
  input {
    width: 100%;
    height: 50px;
    font-size: 1.5rem;
    padding: 0 1rem;
    border: 1px solid #fff;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }
}
</style>
