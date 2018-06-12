<template>
  <div calss="basement">
  <block-index></block-index>
  <block-recommend></block-recommend>
  <block-tickets></block-tickets>
  </div>
</template>
<script>
import BlockIndex from "./BlockIndex";
import BlockTickets from "./BlockTickets";
import BlockRecommend from "./BlockRecommend";
export default {
  name: "DetailBody",
  components: {
    BlockIndex,
    BlockRecommend,
    BlockTickets
  }
};
</script>
<style lang="stylus" scoped>
.basement {
  width: 100%;
}
</style>


