<template>
  <div class="LinkedInCanva">
    <BannersLinkedinBackground />
    <div class="Canva">
      <div class="Padding">
        <Avatar />
        <BannersLinkedinSocials />
        <BannersLinkedinTitle />
        <BannersLinkedinTechs />
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style lang="scss">
.LinkedInCanva {
  width: 100%;
  padding-bottom: 25%;
  position: relative;

  .Canva {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 16px;
    > * {
      position: relative;
      width: 100%;
      height: 100%;
      display: flex;
    }
  }

  .Avatar {
    position: absolute;
    bottom: -50px;
    left: 0;
    width: 300px;
    height: 300px;
  }

  .AppLogo {
    color: white;
    font-size: 80px;
    font-weight: 100;
  }

  .Background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .Socials {
    position: absolute;
    top: 0;
    right: 0;
    align-items: flex-end;
    .Social {
      flex-direction: row-reverse;
    }
  }

  .Techs {
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: #192b5588;
    padding: 16px;
    border: 1px solid white;
    flex-direction: row-reverse;
  }

  .Title {
    padding-left: 40%;
    padding-bottom: 5%;
  }
}
</style>
