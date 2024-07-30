<template>

<div class="page_title text-xl mb-2 mt-4">Users</div>

<div class="content-wrapper" style="width: 100%;">
    <table class="min-w-full  border divide-y divide-gray-300 grid_table">
    <thead>
        <tr>
            <th class="pl_1">ID</th>
            <th class="pl_1">User</th>
            <th class="pl_1">Email</th>
            <th class="pl_1">Phone</th>
            <th class="pl_1">Active</th>
            <th class="pl_1">Role</th>
            <th class="pl_1"></th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="user in users" :key="user.id" class="greed_tr">
            <td class="pl_1 fbold">{{ user.id }}</td>
            <td class="pl_4 fbold">{{ user.name }}</td>
            <td class="pl_4">{{ user.email }}</td>
            <td class="pl_4">{{ user.phone }}</td>
            <td class="tx_center">{{ formatBoolean(user.is_active) }}</td>
            <td class="pl_4">{{ user.permission.role_name }}</td>
            <td class="tx_center">
                <router-link
                    class="btn btn_lightgray inline-flex items-center px-4 py-2 text-xs font-semibold"
                    :to="{ name: 'users.show', params: { id: user.id} }">
                    Edit
                </router-link>
            </td>
        </tr>
    </tbody>
    </table>
</div>

</template>

<script setup>

import { onMounted } from 'vue'

import useUsers from '@/composables/users'
import { formatBoolean } from '@/helpers/functions'

const {users, getUsers} = useUsers();

onMounted( () => getUsers() );


</script>
