<template>
  <div id="home">
    <img src="../assets/images/chuk.gif" />

    <div class="btns-container">
      <div class="item">
        <Button
          title="Получить шутку"
          class="btn-primary"
          :isDisabled="isJokeLoading"
          @click="getRandomJoke"
        />
      </div>

      <div class="item">
        <Button
          :title="autoGettingBtnTitle"
          class="btn-warning"
          :isDisabled="isJokeLoading"
          @click="jokeAutoGettingClickHandler"
        />
      </div>
    </div>

    <div class="joke-box-container">
      <JokeBox :title="joke.value" :iconUrl="joke.icon_url" />
    </div>
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
    this.getRandomJoke();
    this.switchOnJokeAutoGetting();
  },
  methods: {
    switchOnJokeAutoGetting() {
      this.remainingTimeUntilGettingJoke = GETTING_JOKE_INTERVAL;

      this.autoGettingIntervalId = setInterval(() => {
        this.remainingTimeUntilGettingJoke--;

        if (this.remainingTimeUntilGettingJoke === 0) {
          this.getRandomJoke();
          this.remainingTimeUntilGettingJoke = GETTING_JOKE_INTERVAL;
        }
      }, 1000);
    },
    switchOffJokeAutoGetting() {
      clearInterval(this.autoGettingIntervalId);
    },
    jokeAutoGettingClickHandler() {
      this.isAutoGettingJoke = !this.isAutoGettingJoke;

      if (!this.isAutoGettingJoke) {
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
    autoGettingBtnTitle() {
      return this.isAutoGettingJoke
        ? this.remainingTimeUntilGettingJoke.toString()
        : "Получать автоматически";
    },
    joke() {
      return this.$store.state.joke.currentJoke;
    }
  }
};
</script>

<style scoped>
#home {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 2em;
}

.btns-container {
  display: flex;
  width: 100%;
}
.btns-container > .item {
  padding: 0.5em;
  width: 100%;
}

.joke-box-container {
  padding: 0.5em;
  width: 100%;
}
</style>>