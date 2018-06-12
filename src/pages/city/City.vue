<template>
<div class="basement">
<city-header :originCity="originCity"></city-header>
<!-- <city-search :originCity="originCity"></city-search> -->
<city-body :originCity="originCity" :originHotCity="originHotCity" :pickedLetter="pickedLetter"></city-body>
<city-alphabet :originCity="originCity" @change="handleLetterChange"></city-alphabet>
</div>

</template>
<script>
import CityHeader from "./components/CityHeader.vue";
// import CitySearch from "./components/CitySearch.vue";
import CityBody from "./components/CityBody.vue";
import CityAlphabet from "./components/CityAlphabet.vue";
export default {
  name: "City",
  components: {
    CityHeader,
    // CitySearch,
    CityBody,
    CityAlphabet
  },
  data() {
    return {
      originCity: {},
      originHotCity: [],
      pickedLetter: "",
      slideLetter: 0
    };
  },
  methods: {
    getCityInfo() {
      return new Promise((resolve, reject) => {
        this.$http({
          url: "/api/city.json",
          method: "GET"
        }).then(
          res => {
            res = res.body;
            if (res.ret && res.data) {
              const data = res.data;
              this.originCity = data.cities;
              this.originHotCity = data.hotCities;
              resolve();
            }
          },
          err => {
            reject(err);
          }
        );
      });
    },
    handleLetterChange(letter) {
      this.pickedLetter = letter;
    }
  },
  mounted() {
    this.getCityInfo();
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';
</style>


