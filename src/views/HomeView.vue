
<template>
  
  <basic-usage tiltle="模型訓練" content=""/>
  <!-- <div class="container mt-4">
    <router-link to="/inference" class="button-style p-2 text-decoration-none">推理</router-link>
    <router-link to="/training" class="button-style p-2 text-decoration-none">訓練</router-link>
    <router-link to="/audio-slicing" class="button-style p-2 text-decoration-none">智能音頻切片</router-link>
    <router-link to="/testing" class="button-style p-2 text-decoration-none">test</router-link>
  </div>
  <div class="container pt-2">
    <router-view class="content-style"></router-view>
  </div> -->
  <div class="container center">
    <Tabs default-value="preview" class="relative mr-auto w-full">
      <div class="flex items-center justify-between pb-3">
        <TabsList class="w-full justify-start rounded-none border-b bg-transparent p-0">
          <TabsTrigger
            value="preview"
            class="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
          >
          推理
          </TabsTrigger>
          <TabsTrigger
            value="train"
            class="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
          >
          訓練
          </TabsTrigger>
          <TabsTrigger
            value="code"
            class="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
          >
          資料切片
          </TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="train" class="relative rounded-md border">
        <TrainModelView></TrainModelView>
      </TabsContent>
    </Tabs>
  </div>

</template>
  
<script setup lang="ts">
import BasicUsage from '../components/card-futuristic/examples/basic-usage.vue'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs'
import TrainModelView from './TrainModelView.vue';

</script>
