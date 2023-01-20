<template>
  <div class="Title">
    <div class="Name">Jose Piñeiro</div>
    <div class="Position">Front End Dev</div>
    <div class="Description">specialized in Web application development</div>
  </div>
</template>
<script setup></script>
<style lang="scss">
.Title {
  color: white;
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 32px;
  align-items: center;
  justify-content: center;
  .Name,
  .Position,
  .Developer {
    font-size: 60px;
    font-weight: 700;
    text-transform: uppercase;
  }
  .Name {
    font-size: 40px;
  }
  .Position {
    color: #025b62;
    background-color: white;
    padding: 0 32px;
  }
  .Description {
    font-size: 20px;
    font-weight: 200;
    margin-top: 16px;
  }
}
</style>
