
<template>
  <div class="container mt-4 ">
    <basic-usage tiltle="模型訓練" content=""/>
    <Tabs default-value="preview" class="relative mr-auto w-full">
      <div class="flex items-center justify-between pb-3">
        <TabsList class="w-full justify-start rounded-none border-b bg-transparent p-0">
          <TabsTrigger
            value="predict"
            class="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
          >
          預測
          </TabsTrigger>
          <TabsTrigger
            value="train"
            class="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
          >
          訓練
          </TabsTrigger>
          <TabsTrigger
            value="slice"
            class="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
          >
          資料切片
          </TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="predict" class="relative rounded-md border">
        <PredictModelView></PredictModelView>
      </TabsContent>
      <TabsContent value="train" class="relative rounded-md border">
        <TrainModelView></TrainModelView>
      </TabsContent>
      <TabsContent value="slice" class="relative rounded-md border">
        <SliceModelView></SliceModelView>
      </TabsContent>
    </Tabs>
    <br/>
  </div>
</template>
  
<script setup lang="ts">
import BasicUsage from '../components/card-futuristic/examples/basic-usage.vue'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs'
import TrainModelView from './TrainModelView.vue';
import PredictModelView from './PredictModelView.vue';
import SliceModelView from './SliceModelView.vue';

</script>
