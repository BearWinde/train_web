<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          酷酷的元件
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <basic-usage />
    <q-drawer
      show-if-above
      side="left"
      bordered
      :width="220"
    >
    </q-drawer>
    <!-- <q-page-container class="w-full overflow-auto">
      <router-view />
    </q-page-container> -->
  </q-layout>
</template>

<script setup lang="ts">
import { version } from '../package.json'
import BasicUsage from './components/card-futuristic/examples/basic-usage.vue'

document.title += ` v${version}`
</script>

<style lang="sass">
html, body, #app
  width: 100%
  height: 100%
  padding: 0
  margin: 0

#app
  display: flex
  flex-direction: column
</style>
