<template>
  <div class="w-full flex flex-col gap-10 border border-gray-300 p-6 pb-6">
    <div class=" h-full flex justify-left">
      <card-futuristic
        v-on-click-outside="() => toggleSelect(true)"
        :visible
        :selected
        class="font-orbitron"
        @click="toggleSelect(true)"
      >
        <div class="flex flex-col gap-4">
          <div class="text-xl font-bold">
            {{ tiltle }}
          </div>

          <div>
            <span style="white-space: pre-wrap;">{{ content }}</span>
          </div>
        </div>
      </card-futuristic>
    </div>
  </div>
</template>

<script setup lang="ts">
import { vOnClickOutside } from '@vueuse/components'
import { useToggle } from '@vueuse/core'
import { ref } from 'vue'
import CardFuturistic from '../card-futuristic.vue'

const visible = ref(true)

const [selected, toggleSelect] = useToggle(true)
defineProps<{
  tiltle: string
  content: string
}>()
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100..900&family=Orbitron:wght@400..900&family=Oxanium:wght@200..800&display=swap')

.font-orbitron
  font-family: "Orbitron", sans-serif

.font-oxanium
  font-family: "Oxanium", sans-serif
</style>
