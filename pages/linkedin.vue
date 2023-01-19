<template>
  <div class="LinkedInCanva">
    <div class="Canva">
      <div class="Container">
        <Avatar />
        <div class="Text">
          <AppLogo />
          <span class="FrontEnd">FrontEnd</span>
          <span class="Developer">Developer</span>
        </div>
        <div class="Techs">
          <div>
            <IconGraphQL class="Icon" />
            <IconApolloGraphQL class="Icon" />
          </div>
          <div>
            <IconVue class="Icon" />
            <IconNuxt class="Icon" />
            <IconReact class="Icon" />
            <IconNext class="Icon" />
          </div>
          <div>
            <IconJavascript class="Icon" />
            <IconTypescript class="Icon" />
          </div>
          <div>
            <IconCSS class="Icon" />
            <IconTailwind class="Icon" />
            <IconSass class="Icon" />
          </div>
          <div>
            <IconWebpack class="Icon" />
            <IconRollup class="Icon" />
          </div>
        </div>
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

  > .Canva {
    position: absolute;
    background-color: #192b55;
    top: 0;
    left: 0;
    padding: 16px;
    width: 100%;
    height: 100%;
    > .Container {
      position: relative;
      width: 100%;
      height: 100%;
    }
  }
  .Techs {
    position: absolute;
    bottom: 0px;
    right: 0px;
    display: flex;
    flex-direction: column;
    gap: 32px;
    > div {
      display: flex;
      gap: 16px;
      justify-content: flex-end;
    }
  }
  .Icon {
    width: 60px;
    height: 60px;
  }
  .Avatar {
    position: absolute;
    bottom: -50px;
    left: 0;
    width: 300px;
    height: 300px;
  }
  .Text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .AppLogo {
    color: white;
    font-size: 80px;
    font-weight: 100;
  }
  .FrontEnd,
  .Developer {
    font-size: 40px;
    font-weight: 700;
    text-transform: uppercase;
  }
  .FrontEnd {
    font-size: 40px;
    font-weight: 700;
    margin-top: 0;
  }
  .Developer {
    background-color: #025b62;
    padding: 0 8px;
  }
}
</style>
