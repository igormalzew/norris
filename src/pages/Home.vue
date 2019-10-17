<template>
  <div class="container-fluid home-page">
    <div class="row m-4 d-flex justify-content-center">
      <img src="../assets/images/chuk.gif" />
     </div>

    <div class="row">
        <div class="col mb-4">
          <Button
            text="Получить шутку"
            class="btn-primary"
            :isDisabled="isJokeLoading"
            @click="getRandomJoke"
          />
        </div>
        <div class="col mb-4">
          <Button
            :text="autoGettingBtnText"
            class="btn-warning"
            :isDisabled="isJokeLoading"
            @click="jokeAutoGettingClickHandler"
          />
        </div>
    </div>

    <div class="row">
      <div class="col">
        <TextBox :text="joke.value" />
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button";
import TextBox from "@/components/TextBox";

const GETTING_JOKE_INTERVAL = 10;

export default {
  name: "Home",
  components: {
    Button,
    TextBox
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
    getRandomJoke() {
      this.isJokeLoading = true;
      this.$store.dispatch("joke/getRandomJoke")
        .finally(() => this.isJokeLoading = false);
    }
  },
  computed: {
    autoGettingBtnText() {
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
.home-page {
  max-width: 800px;
}
</style>