<script setup>
import { TabsContent, TabsIndicator, TabsList, TabsRoot, TabsTrigger } from 'radix-vue'
import PollDetailsView from '@/views/PollDetailsView.vue'
import ContextView from '@/views/ContextView.vue'
import ResourceView from '@/views/ResourceView.vue'
</script>

<template>
  <div class="flex flex-col w-[98%] md:w-[80%] lg:w-[60%] min-h-[600px] mx-auto padding-5 m-5">
    <TabsRoot class="flex flex-col w-full min-h-[200px]" default-value="poll">
      <TabsList
        class="relative shrink-0 flex border-b border-mauve6"
        aria-label="Manage your account"
      >
        <TabsIndicator
          class="absolute px-8 left-0 h-[2px] bottom-0 w-[--radix-tabs-indicator-size] translate-x-[--radix-tabs-indicator-position] rounded-full transition-[width,transform] duration-300"
        >
          <div class="bg-orange-600 w-full h-full" />
        </TabsIndicator>
        <TabsTrigger
          class="bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none rounded-tl-md hover:text-grass11 data-[state=active]:text-grass11 outline-none cursor-default"
          value="poll"
        >
          <span class="font-bold text-xs">Poll</span>
        </TabsTrigger>
        <TabsTrigger
          class="bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none rounded-tr-md hover:text-grass11 data-[state=active]:text-grass11 outline-none cursor-default"
          value="context"
        >
          <span class="font-bold text-xs">Context</span>
        </TabsTrigger>
        <TabsTrigger
          class="bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none rounded-tr-md hover:text-grass11 data-[state=active]:text-grass11 outline-none cursor-default"
          value="resources"
        >
          <span class="font-bold text-xs">Resources</span>
        </TabsTrigger>
      </TabsList>
      <TabsContent
        class="grow p-5 bg-white rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
        value="poll"
      >
        <PollDetailsView />
      </TabsContent>
      <TabsContent
        class="grow p-5 bg-white rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
        value="context"
      >
        <ContextView />
      </TabsContent>
      <TabsContent
        class="grow p-5 bg-white rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
        value="resources"
      >
        <ResourceView />
      </TabsContent>
    </TabsRoot>
  </div>
</template>
