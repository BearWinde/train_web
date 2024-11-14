<script setup lang="ts">
import { buttonVariants } from '../components/ui/button'
import { Button,Input} from 'ant-design-vue';

import { cn } from '../lib/utils'
import { ref } from 'vue'
import GitHubLogo from '../radix-icons/github-logo.svg'

const isLoading = ref(false)
async function onSubmit(event: Event) {
  event.preventDefault()
  isLoading.value = true

  setTimeout(() => {
    isLoading.value = false
  }, 3000)
}
</script>

<template>

  <div class="container relative hidden h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
    <div class="relative hidden h-full items-center justify-center flex-col bg-muted p-10 text-white dark:border-r lg:flex">
      <div class="absolute inset-0 bg-zinc-900" />
      <div class="relative z-20 flex items-center text-lg font-medium">
        <div class="lg:p-8">
        <div class="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div class="flex flex-col space-y-2 text-center">
          <h1 class="text-2xl font-semibold tracking-tight">
            登入
          </h1>
          <p class="text-sm text-muted-foreground">
            在下面輸入您的電子郵件以登入您的帳戶
          </p>
        </div>
        <div >
    <form @submit="onSubmit">
      <div class="grid gap-2">
        <div class="grid gap-1">
          <Input
            id="email"
            placeholder="name@example.com"
            type="email"
            auto-capitalize="none"
            auto-complete="email"
            auto-correct="off"
            :disabled="isLoading"
          />
          <Input
            id="password"
            placeholder="請輸入密碼"
            type="password"
            auto-capitalize="none"
            auto-complete="password"
            auto-correct="off"
            :disabled="isLoading"
          />
        </div>
        <Button style="background-color: black; color: white;">
          使用電子郵件登入
        </Button>
        <div class="flex ">
        <div class="relative m-4" style="width: 20%;">
        <div class="absolute inset-0 flex items-center">
          <span class="w-full border-t" />
        </div>
      </div>
      <div class="relative flex justify-center text-xs " style="padding-top:10px; width: 50%;">
          <span class="bg-background px-2 text-muted-foreground">
            或繼續使用下列帳號登入
          </span>
        </div>
      <div class="relative m-4" style="width: 20%;">
        <div class="absolute inset-0 flex items-center">
          <span class="w-full border-t" />
        </div>
      </div>
      </div>
        <Button variant="outline" :disabled="isLoading" style="display: flex; align-items: center; justify-content: center;">
          <img  class="mr-2 h-4 w-4"  src="../radix-icons/github-logo.svg" alt="">
          GitHub
        </Button>
        <p class="px-8 text-center text-sm text-muted-foreground">
          按一下繼續即表示您同意我們的
          <a
            href="/terms"
            class="underline underline-offset-4 hover:text-primary"
          >
          服務條款
          </a>
          和
          <a
            href="/privacy"
            class="underline underline-offset-4 hover:text-primary"
          >
          隱私權政策
          </a>
          。
        </p>
      </div>
    </form>
  </div>
  </div>
      </div>
      </div>
    </div>
    <div class="lg:p-8">
      <div class="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div class="flex flex-col space-y-2 text-center">
          <h1 class="text-2xl font-semibold tracking-tight">
            建立一個帳戶
          </h1>
          <p class="text-sm text-muted-foreground">
            在下面輸入您的資訊以建立您的帳戶
          </p>
        </div>
        <div >
    <form @submit="onSubmit">
      <div class="grid gap-2">
        <div class="grid gap-4">
          <Input
            id="email"
            placeholder="name@example.com"
            type="email"
            auto-capitalize="none"
            auto-complete="email"
            auto-correct="off"
            :disabled="isLoading"
          />
          <Input
            id="password"
            placeholder="請輸入密碼"
            type="password"
            auto-capitalize="none"
            auto-complete="password"
            auto-correct="off"
            :disabled="isLoading"
          />
          <Input
            id="password"
            placeholder="姓氏"
            type="password"
            auto-capitalize="none"
            auto-complete="password"
            auto-correct="off"
            :disabled="isLoading"
          />
          <Input
            id="password"
            placeholder="名字"
            type="password"
            auto-capitalize="none"
            auto-complete="password"
            auto-correct="off"
            :disabled="isLoading"
          />
        </div>
        <Button style="background-color: black; color: white;">
          建立帳戶
        </Button>
        <div class="relative m-4" >
        <div class="absolute inset-0 flex items-center">
          <span class="w-full border-t" />
        </div>
      </div>

      </div>
    </form>
  </div>
      </div>
    </div>
  </div>
</template>