import { defineStore } from 'pinia'
import axios from 'axios'


export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    isAuthenticated: false,
  }),

  actions: {
    async login(credentials) {
      try {
        await axios.get('/sanctum/csrf-cookie')
        const response = await axios.post('/login', credentials)
        this.user = response.data.user
        this.isAuthenticated = true

      } catch (error) {
        console.error('Login failed:', error)
        this.isAuthenticated = false
      }
    },
    async logout() {
      try {
        await axios.post('/logout')
        this.user = null
        this.isAuthenticated = false
      } catch (error) {
        console.error('Logout failed:', error)
      }
    },
    async checkAuth() {
      try {
        const response = await axios.get('/api/user')
        this.user = response.data
        this.isAuthenticated = true
      } catch (error) {
        console.error('Failed to check authentication:', error)
        this.isAuthenticated = false
      }
    }
  }
})
