<script setup lang="ts">
import Card from './components/Card.vue'
import type {CardType} from "./types/cardType";
import {
  attention,
  basicCard,
  basicMessage,
  compensation,
  loginFailed,
  newStage, permanentBlocking,
  rewardForViewing, temporaryBlocking,
  thankForPurchase, warning
} from "./types/cardTypes";

const cardList: CardType[] = [
    basicMessage,
    basicCard,
    thankForPurchase,
    loginFailed,
    compensation,
    newStage,
    rewardForViewing,
    attention,
    warning,
    temporaryBlocking,
    permanentBlocking
]

</script>

<template>
  <div v-for="currentCard in cardList" :key="currentCard.id">
    <Card :card="currentCard"></Card>
  </div>
</template>

<style scoped>

</style>
