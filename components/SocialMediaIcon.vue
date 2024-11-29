<template>
    <div class="bg-red-500 text-white p-3 grid place-items-center rounded-full">
        <Icon :name="iconName" size="1.8em" />
    </div>
</template>

<script setup lang="ts">
interface Props {
    iconName: string;
};

const { iconName } = defineProps<Props>();
</script>

<style scoped></style>