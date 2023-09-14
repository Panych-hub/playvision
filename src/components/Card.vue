<template>

  <button type="button" class="btn btn-primary m-2" data-bs-toggle="modal" :data-bs-target="'#'+props.card.id">
    Run {{props.card.id}}
  </button>
  <div class="modal fade text-center fw-bold " :id="props.card.id" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
        >
          <div class="mt-4">
            <img v-if="props.card.body.logo" :src="images[props.card.body.logo]" style="width: 60px" :alt="props.card.body.logo" />

          </div>

          <h4 class="mt-4 mb-4" :style="{'color': props.card.body.titleColor}">
            {{props.card.body.title}}
          </h4>
          <div v-for="paragraph in props.card.body.description" class="mb-4 mx-5" style="color: #98abce">
            <p v-for="sentence in paragraph" class="mb-1 " :class="[{'text-start': props.card.body.textConfig}]">

              {{ sentence }}
            </p>
          </div>
          <div class="d-flex justify-content-center"
               v-if="props.card.body.inputField"
          >
            <input
                   type="email"
                   class="form-control w-50 fw-bold"
                   id="email_input"
                   placeholder="example@email.com"
                   required
                   style="background-color: #010b25; color: white"
                   ref="emailInput"
                   v-model="emailValue"
            >
          </div>
          <span v-if="isEmailInvalid || emailValue === '' && props.card.body.inputField" style="color: #e44457">
            Обязательное поле
          </span>
          <br v-else>

        </div>
        <div class="modal-footer justify-content-around border-0" style="background-color: #021031">

          <button
              v-for="button in props.card.footer.buttons"
              type="submit"
              class="btn btn-secondary fw-bold border-0"
              data-bs-dismiss="modal"
              :style="{'background-color':  button.color}"
              style="min-width: 30%"
              :disabled="isEmailInvalid || emailValue === '' && props.card.body.inputField"
          >
            {{button.text}}
          </button>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed, type ComputedRef, defineProps, type Ref, ref, watch} from "vue"
import {CardType} from "../types/cardType";
import flag from '@/assets/flag.png'
import buy from '@/assets/buy-48.png'
import error from '@/assets/error.png'
import chips from '@/assets/chips.png'

const images = {
  'flag': flag,
  'buy': buy,
  'error': error,
  'chips': chips
}

const props = defineProps<{
    card: CardType;
  }>()
const logoColor: string = props.card.body.logoColor || '#010b25'
const img = '@/assets/' + props.card.body.logo
const emailInput: Ref<HTMLInputElement | null> = ref(null);
const emailValue: Ref<string> = ref("");
watch(emailValue, (newValue) => {
  emailInput.value.value = newValue;
});
const isEmailInvalid: ComputedRef<boolean> = computed(() => {
  if (!emailValue.value) {
    return false;
  }
  if (!emailInput.value) {
    return true;
  }
  const requiredAttribute = emailInput.value.validity;
  return !requiredAttribute.valid;
})

</script>

<style scoped>
input:required {
  border-color: #437ab6;
  border-width: 3px;
}
input:required:invalid {
  border-color: #c00000;
}
#email_input::placeholder{
  color: #3c4355;
}
</style>