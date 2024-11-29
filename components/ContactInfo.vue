<template>
    <div>
        <p class="text-blue-700 font-bold text-base mb-2">{{ infoTitle }}</p>
        <span class="text-slate-600 text-base">{{ infoValue }}</span>
    </div>
</template>

<script setup lang="ts">
interface Props {
    infoTitle: string;
    infoValue: string;
}

const { infoTitle, infoValue } = defineProps<Props>();
</script>

<style scoped></style>