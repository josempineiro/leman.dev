<template>
  <div class="AuthForm">
    <div class="AuthFormWrapper">
      <FormField
        type="password"
        placeholder="Access code"
        @change="(event) => (password = event.target.value)"
      />
      <Button
        variant="outline"
        color="accent"
        @click="authenticate"
        width="full"
      >
        ENTER
      </Button>
    </div>
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
.AuthFormWrapper {
  gap: 1rem;
  display: flex;
  flex-direction: column;
  background-color: var(--surface-color);
  padding: 2rem 1rem;
  width: 100%;
  border: 1px solid var(--border-color);
  border-radius: 1rem;
  max-width: 500px;
}
.AuthForm {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  padding: 1rem;
  color: #fff;
  input {
    width: 100%;
    height: 50px;
    font-size: 1.5rem;
    padding: 0 1rem;
    border: 1px solid var(--border-color);

    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &::placeholder {
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: var(--text-color-secondary);
      opacity: 1; /* Firefox */
    }
  }
  input:focus {
    border: 1px solid var(--text-color-primary);
  }
}
</style>
