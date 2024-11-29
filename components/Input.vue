<template>
    <div>
        <input :type="type" :id="id" class="bg-white px-10 py-4 text-lg rounded-[100px] lg:w-[250px]"
            :placeholder="placeholder" v-model="modelValue" />
        <p v-if="errorMessage" class="text-red-500 text-sm">{{ errorMessage }}</p>
    </div>
</template>

<script lang="ts" setup>
import { useField } from "vee-validate";

interface Props {
    type: string;
    placeholder: string;
    id: string;
    name: string;
}

const { type, placeholder, id, name } = defineProps<Props>();

const { value: modelValue, errorMessage } = useField(name);
</script>

<style scoped></style>