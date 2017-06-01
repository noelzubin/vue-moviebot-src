<template lang="pug">
  div#app
    ChatApp
    SendMessage
</template>

<script>
// import Hello from './components/Hello';
import ChatApp from './components/ChatApp';
import SendMessage from './components/SendMessage';

export default {
  name: 'app',
  components: {
    ChatApp,
    SendMessage,
  },
};
</script>

<style lang="sass">

html, body 
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  margin: 0
  padding: 0
  width: 100%
  height: 100%
  -webkit-box-sizing: border-box
  -moz-box-sizing: border-box
  box-sizing: border-box
  background: #504B6D
  overflow: hidden
#app  
  height: 100%
  display: grid
  grid-template-rows: auto 60px
  grid-template-columns: auto 750px auto

@media (max-width: 750px) 
  #app
    grid-template-rows: calc(100% - 60px) 60px
    grid-template-columns:  auto
  
</style>
