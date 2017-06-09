<template lang="pug">
  div#app
    ChatApp( :messages="messages")
    SendMessage(@askDialogue="askDialogue" :showAnim="showAnim")
</template>

<script>
// import Hello from './components/Hello';
import ChatApp from './components/ChatApp';
import SendMessage from './components/SendMessage';
import MovieService from './components/movie.service';

export default {
  name: 'app',
  components: {
    ChatApp,
    SendMessage,
  },
  data() {
    return {
      movieSerivce: new MovieService(),
      messages: [
        {
          type: 'bot',
          dialogue: 'send a quote and the bot replies with the next quote from the movie.',
          movie: 'noel zubin',
        },
      ],
      showAnim: false,
    };
  },
  methods: {
    askDialogue(dialogue) {
      // const that = this;
      this.messages.push({ type: 'user', dialogue });
      this.showAnim = true;
      this.movieSerivce.getReply(dialogue)
        .then((data) => {
          this.messages.push({ type: 'bot', dialogue: data.data.reply, movie: data.data.movieTitle });
          this.showAnim = false;
        })
        .catch(() => {
          this.messages.push({ type: 'bot', dialogue: 'couldn\'t find dialogue, You win this time', movie: '' });
          this.showAnim = false;
        });
    },
  },
};
</script>

<style lang="sass">

input
  font-family: 'Montserrat', sans-serif  
html, body 
  font-family: 'Montserrat', sans-serif
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
