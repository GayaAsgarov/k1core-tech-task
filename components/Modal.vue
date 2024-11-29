<template>
    <div v-if="isVisible" class="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
        <div class="bg-white p-6 rounded-lg w-[90%] sm:w-[500px] max-h-[80vh] overflow-y-auto shadow-lg">
            <div class="flex justify-between items-center mb-4">
                <h3 class="text-xl font-semibold text-gray-900">Post Details</h3>
                <button @click="closeModal" class="text-gray-500 hover:text-gray-700 focus:outline-none">
                    <span class="text-2xl">&times;</span>
                </button>
            </div>

            <div v-for="postData in postsData" :key="postData.id" class="space-y-4 mb-4">
                <div class="p-4 border border-gray-200 rounded-lg shadow-sm">
                    <p><strong class="text-gray-700">User ID:</strong> {{ postData.userId }}</p>
                    <p><strong class="text-gray-700">ID:</strong> {{ postData.id }}</p>
                    <p><strong class="text-gray-700">Title:</strong> {{ postData.title }}</p>
                    <p><strong class="text-gray-700">Body:</strong> {{ postData.body }}</p>
                </div>
            </div>

            <div class="mt-6 text-right">
                <button @click="closeModal"
                    class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none">
                    Close
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { type Post } from '~/types/Post';
interface Props {
    isVisible: Boolean;
    postsData: Post[];
}

const { isVisible, postsData } = defineProps<Props>();

const emit = defineEmits(['close']);

const closeModal = () => {
    emit('close');
};
</script>

<style scoped></style>