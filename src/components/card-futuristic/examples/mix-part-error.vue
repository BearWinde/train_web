<template>
  <div class="w-full flex flex-col gap-4 border border-gray-300 p-6">
    <div class=" items-center justify-center gap-10">
      <card-futuristic
        v-for="item, i in list"
        :key="i"
        v-on-click-outside="() => item.selected = true"
        v-bind="item"
        class="font-orbitron"
        @click="item.selected = true"
      >
        <div class="flex flex-col">
          <div
            v-if="item.title"
            :class="item.titleClass"
          >
            {{ item.title }}
          </div>

          <div
            v-if="item.text"
            :class="item.textClass"
          >
            {{ item.text }}
          </div>
        </div>
      </card-futuristic>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Writable } from 'type-fest'
import type { ExtractComponentProps } from '../../../types'
import { vOnClickOutside } from '@vueuse/components'
import { promiseTimeout } from '@vueuse/core'
import { map, pipe } from 'remeda'
import { ref, watch } from 'vue'
import BaseCheckbox from '../../base-checkbox.vue'
import CardFuturistic from '../card-futuristic.vue'

type CardProp = Writable<ExtractComponentProps<typeof CardFuturistic>> & {
  title?: string;
  titleClass?: string;
  text?: string;
  textClass?: string;
}

const list = ref(pipe(
  [
    {
      title: 'ERROR 錯誤訊息',
      titleClass: 'text-2xl font-bold text-[#ba2507] ',
      text: 'FISH OVERWEIGHT',
      textClass: 'text-[#ba2507]',
      corner: null,
      bg: {
        type: 'typical',
        margin: '10px 0px',
        color: '#ffe8e8',
      },
      content: {
        type: 'typical',
        class: 'py-4 px-8',
      },
      border: {
        type: 'specific',
        color: '#ba2507',
        selectedColor: '#f07860',
        strokeWidth: 2,
        side: {
          t: {},
          b: {},
        },
      },
      animeSequence: {
        normal: {
          border: { delay: 0 },
        },
        visible: {
          border: { delay: 0 },
          bg: { delay: 400 },
          content: { delay: 500 },
        },
        hidden: {
          border: { delay: 300 },
          bg: { delay: 0 },
          content: { delay: 0 },
        },
        // null 表示停用動畫
        selected: { content: null },
        hover: { content: null },
      },
    },
  ] as CardProp[],
  map((data) => ({
    ...data,
    visible: true,
    selected: true,
  })),
))

const visible = ref(true)
watch(visible, async (value) => {
  for (const data of list.value) {
    data.visible = value
    await promiseTimeout(100)
  }
})
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100..900&family=Orbitron:wght@400..900&family=Oxanium:wght@200..800&display=swap')

.font-orbitron
  font-family: "Orbitron", sans-serif

.font-oxanium
  font-family: "Oxanium", sans-serif
</style>
