<template>user index soon
<ul>
    <li v-for="user in users" :key="user.id">
        {{ user.id }} | {{ user.name }} | {{ user.email }} | {{ user.phone }}| {{ user.is_active }} | {{ user.permission_id }} | {{ user.permission.role }}
    </li>

</ul>
</template>
<script setup>

import { onMounted } from 'vue'

import useUsers from '@/composables/users'

const {users, getUsers} = useUsers();

console.log(users)

onMounted( () => getUsers() );


</script>
