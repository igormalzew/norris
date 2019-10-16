<template>
  <div id="home">
    <img src="../assets/images/chuk.gif">

    <div class="btn-block">
      <Button title="Получить шутку" :isDisabled="isJokeLoading" @click="getRandomJoke"/>
      <Button :title="autoGettingBtnTitle" :isDisabled="isJokeLoading" @click="jokeAutoGettingClickHandler"/>
    </div>

    <JokeBox :title="joke.value" :iconUrl="joke.icon_url"/>
  </div>
</template>

<script>
import { mapActions } from "vuex";

import Button from "@/components/Button";
import JokeBox from "@/components/JokeBox";

const GETTING_JOKE_INTERVAL = 10;

export default {
  name: "Home",
  components: {
    Button,
    JokeBox
  },
  data() {
    return {
      isJokeLoading: false,
      isAutoGettingJoke: true,
      remainingTimeUntilGettingJoke: GETTING_JOKE_INTERVAL,
      autoGettingIntervalId: null
    };
  },
  created() {
    console.log('created')
    this.switchOnJokeAutoGetting();
  },
  methods: {
    switchOnJokeAutoGetting () {
      this.remainingTimeUntilGetting = 9;
            console.log(this.remainingTimeUntilGettingJoke)

      if(this.remainingTimeUntilGetting === 0) {
        console.log('this.remainingTimeUntilGetting === 0')
        this.getRandomJoke();
        this.remainingTimeUntilGetting = GETTING_JOKE_INTERVAL;
      }
    },
    switchOffJokeAutoGetting () {
      //console.log(this.autoGettingIntervalId)
      clearInterval(this.autoGettingIntervalId);
    },
    jokeAutoGettingClickHandler () {
      this.isAutoGettingJoke = !this.isAutoGettingJoke;

      if(!this.isAutoGettingJoke) {
        this.switchOffJokeAutoGetting();
      } else {
        this.switchOnJokeAutoGetting();
      }
    },
    ...mapActions({
      getRandomJoke: "joke/getRandomJoke"
    })
  },
  computed: {
    autoGettingBtnTitle () {
      return this.isAutoGettingJoke ? this.remainingTimeUntilGettingJoke.toString() : "Получать автоматически";
    },
    joke () {
      return this.$store.state.joke.currentJoke;
    }
  }
};
</script>

<style>
#home {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.btn-block {

}
</style>
