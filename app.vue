<template>
  <section class="flex justify-center items-center h-screen gap-20 px-4 flex-col lg:flex-row">
    <div class="lg:min-h-80 flex gap-8 justify-end flex-col-reverse lg:flex-row">
      <div class="flex flex-row-reverse lg:flex-col gap-8 justify-between lg:justify-normal">
        <ContactInfo v-for="{ title, value } in contactInfos" :infoTitle="title" :infoValue="value" />
      </div>
      <div>
        <div class="grid grid-cols-4 lg:grid-cols-2 gap-8">
          <SocialMediaIcon v-for="iconName in socialMediaIcons" :iconName="iconName" />
        </div>
      </div>
    </div>
    <form @submit.prevent="onSubmit" class="min-h-80">
      <div class="flex gap-10 flex-col lg:flex-row">
        <Input type="text" placeholder="Ваше имя" id="name" name="name" />
        <Input type="text" placeholder="Ваш телефон" id="telephone" name="telephone" />
      </div>
      <div class="flex lg:items-center gap-10 mt-8 flex-col-reverse lg:flex-row">
        <button type="submit"
          class="bg-red-500 px-10 py-4 text-lg rounded-[100px] w-[250px] text-white">Записаться</button>
        <p class="text-xl text-slate-600 w-[250px]">Наш менеджер свяжется с вами в течении дня</p>
      </div>
    </form>
    <Modal :isVisible="showModal" :postsData="posts" @close="closeModal" />
  </section>
</template>

<script setup lang="ts">
import { useForm } from 'vee-validate';
import { toFormValidator } from "@vee-validate/zod";
import { formSchema } from '~/validationSchema';
import { usePostsStore } from './stores/postsStore';

const postsStore = usePostsStore();

const showModal = ref(false);

const socialMediaIcons = ["mdi:twitter", "mdi:facebook-box", "bx:bxl-vk", "gg:instagram"];
const contactInfos = [
  { title: "Телефон", value: "123-45-67" },
  { title: "Электронная почта", value: "email@gmail.com" },
];

const { handleSubmit, resetForm, errors } = useForm({
  validationSchema: toFormValidator(formSchema),
});

const onSubmit = handleSubmit(async (values) => {
  await postsStore.fetchPosts();
  showModal.value = true;
  console.log("Form values:", values);
  resetForm();
});

const posts = computed(() => postsStore.posts);

const closeModal = () => {
  showModal.value = false;
};
</script>

<style scoped></style>
