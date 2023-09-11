<script setup lang="ts">
import Card from './components/Card.vue'
import type {CardType} from "./types/cardType";
import {basicCard, basicMessage, loginFailed, thankForPurchase} from "./types/cardTypes";

const cardList: CardType[] = [
    basicMessage,
    basicCard,
    thankForPurchase,
    loginFailed
]

</script>

<template>
  <div v-for="currentCard in cardList" :key="currentCard.id">
    <Card :card="currentCard"></Card>
  </div>
</template>

<style scoped>

</style>
