import { defineStore } from 'pinia';
import axios from 'axios';
import type { Post } from '@/types/Post';

export const usePostsStore = defineStore('postsStore', {
    state: () => ({
        posts: [] as Post[], // Store the API response
    }),

    actions: {
        async fetchPosts() {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts/');
                this.posts = response.data;
            } catch (error) {
                console.error('Error fetching data:', error);
                this.posts = [];
            }
        },
    },
});
