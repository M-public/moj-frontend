<template>
  <div id="app">
    <template v-if="route.path.startsWith('/user')">
      <router-view />
    </template>
    <template v-else>
      <BasicLayout />
    </template>
  </div>
</template>

<style>
#app {
}
</style>
<script setup lang="ts">
import BasicLayout from "@/layouts/BasicLayout.vue";
import { useRoute } from "vue-router";
import { onMounted } from "vue";

const route = useRoute();

/**
 * 预留初始化函数，有全局单次调用的代码，都可以写在这里
 */
const doInit = () => {
  console.log("Hello, 欢迎来到M OJ项目");
};

onMounted(() => {
  doInit();
});
</script>
