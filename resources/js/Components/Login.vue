<template>


    <div class="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">

      <h1>Login</h1>

      <form @submit.prevent="submit">
        <div>
            <label>Email</label>
          <input id="email" v-model="form.email" type="email" />
        </div>
        <div>
          <label for="password">Password</label>
          <input id="password" v-model="form.password" type="password" />
        </div>
        <button type="submit">Login</button>
      </form>

    </div>

  </template>

  <script setup>
  import { ref } from 'vue'
  import { useAuthStore } from '@/Stores/AuthStore'
  import { useRouter } from 'vue-router'

  const form = ref({
    email: '',
    password: ''
  })

  const authStore = useAuthStore()
  const router = useRouter()

  const submit = async () => {

    await authStore.login(form.value)

    if (authStore.isAuthenticated) {
      router.push('/dashboard')
    }

  }

  </script>

  <style scoped>
  /* Стили для страницы входа */
  </style>
