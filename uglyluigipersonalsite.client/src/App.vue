<script setup>
import Sidebar from './components/Sidebar.vue'

</script>

<template>
    <div class="h-screen flex flex-row w-auto">
        <Sidebar />

        <div class="px-4 py-4">
            <RouterView />
        </div>
    </div>
</template>

<style>
</style>
