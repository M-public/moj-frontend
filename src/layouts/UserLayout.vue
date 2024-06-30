<template>
  <div id="userLayout">
    <a-layout style="min-height: 100vh">
      <a-layout-header class="header"> 用户布局 </a-layout-header>
      <a-layout-content class="content">
        <router-view />
      </a-layout-content>
      <a-layout-footer class="footer">
        <a href="https://yupi.icu" target="_blank"> moj by X.amateur </a>
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<style scoped>
#userLayout {
}

#userLayout .header {
  margin-bottom: 15px;
  box-shadow: #eee 1px 1px 5px;
}

#userLayout .content {
  background: linear-gradient(to right, #00a6ff, #ff7fa1);
  margin-bottom: 15px;
  padding: 20px;
}

#userLayout .footer {
  background: aquamarine;
  padding: 16px;
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
}
</style>
<script setup lang="ts"></script>
