<template>
    <div class="container">
        <div class="navbar">
            <Menu />
        </div>
        <div class="content">
            <router-view />
        </div>
    </div>
</template>
<script setup>
    import Menu from './Menu.vue'
</script>
<style scoped>
    /* Стили для основного компонента */
</style>
