<template>

  <button type="button" class="btn btn-primary m-2" data-bs-toggle="modal" :data-bs-target="'#'+props.card.id">
    Run {{props.card.id}}
  </button>
  <div class="modal fade text-center fw-bold" :id="props.card.id" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">

        <div class="modal-header border-0 justify-content-around"
             style="background-color: #01143f">
          <h3 class="modal-title" id="exampleModalLabel " style="color: #569de4">{{props.card.header.info}}</h3>
          <button v-if="props.card.header?.exitButton"
                  type="button"
                  class="btn-close btn-close-white position-absolute"
                  data-bs-dismiss="modal"
                  aria-label="Закрыть"
                  style="right:30px"
          ></button>
        </div>

        <div class="modal-body"
             :style="{'background': 'radial-gradient(200px 160px at top,'+ logoColor +', #010b25 130px, #010b25)'}"
             style="background-position: 50% 50%"
        >
          <span v-html="props.card.body.logo" />
          <h4 class="mt-4 mb-4" :style="{'color': props.card.body.titleColor}">
            {{props.card.body.title}}</h4>
          <div v-for="paragraph in props.card.body.description" class="mb-4 mx-5" style="color: #98abce">
            <p v-for="sentence in paragraph" class="mb-1 " :class="[{'text-start': props.card.body.textConfig}]">

              {{ sentence }}
            </p>
          </div>
        </div>

        <div class="modal-footer justify-content-around border-0" style="background-color: #021031">
          <button v-for="button in props.card.footer.buttons" type="button"
                  class="btn btn-secondary fw-bold border-0"
                  data-bs-dismiss="modal"
                  :style="{'background-color':  button.color}"
                  style="min-width: 30%"
          >
            {{button.text}}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {defineProps} from "vue"
import {CardType} from "../types/cardType";


const props = defineProps<{
    card: CardType;
  }>()
const logoColor: string = props.card.body.logoColor || '#010b25'

</script>

<style scoped>

</style>