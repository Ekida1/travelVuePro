<template>
  <ul class="AlphaList">
<li class="item" v-for="item in this.TransLetter" :key="item" :ref="item"
@click="handleLetterClick" @touchstart="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd">{{item}}</li>
  </ul>
</template>
<script>
export default {
  name: "CityAlphabet",
  data() {
    return {
      touchStates: false,
      startY: 0,
      timer: null
    };
  },
  props: {
    originCity: Object
  },
  computed: {
    TransLetter() {
      this.letter = [];
      for (let i in this.originCity) {
        this.letter.push(i);
      }
      return this.letter;
    }
  },
  methods: {
    handleLetterClick(e) {
      this.$emit("change", e.target.innerText);
    },
    handleTouchStart() {
      this.touchStates = true;
    },
    handleTouchMove(e) {
      if (this.touchStates) {
        if (this.timer) {
          clearTimeout(this.timer);
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 83;
          const index = Math.floor((touchY - this.startY) / 16.8);
          if (index >= 0 && index < this.letter.length) {
            this.$emit("change", this.letter[index]);
          }
        }, 16);
      }
    },
    handleTouchEnd() {
      this.touchStates = false;
    }
  },
  updated() {
    this.startY = this.$refs["A"][0].offsetParent.offsetTop - 83;
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.AlphaList {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 3rem;
  right: 0;
  width: 0.4rem;

  .item {
    line-height: 0.35rem;
    text-align: center;
    color: $bgColor;
  }
}
</style>


