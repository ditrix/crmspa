<template>
    Permissions
    <table>
        <thead>
            <tr>
                <td>id</td>
                <td>role</td>
                <td>rw_own_customer</td>
                <td>rw_own_deals</td>
                <td>rw_own_reports</td>
                <td>rw_customer</td>
                <td>rw_deals</td>
                <td>rw_reports</td>
                <td>rw_options</td>
                <td>rw_parameters</td>
                <td>rw_users</td>
                <td>actions</td>
            </tr>
        </thead>
        <tbody>
            <tr v-for="permission in permissions" :key="permission.id">
                <td>{{ permission.id }}</td>
                <td>{{ permission.role }}</td>
                <td>{{ permission.rw_own_customer }}</td>
                <td>{{ permission.rw_own_deals }}</td>
                <td>{{  permission.rw_own_reports }}</td>
                <td>{{  permission.rw_customer }}</td>
                <td>{{  permission.rw_deals }}</td>
                <td>{{  permission.rw_reports }}</td>
                <td>{{  permission.rw_options }}</td>
                <td>{{  permission.rw_parameters }}</td>
                <td>{{  permission.rw_users }}</td>
                <td>show / delete</td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>
import { onMounted } from 'vue'

import usePermissions from '@/composables/permissions'

const {permissions, getPermissions} = usePermissions()

/*
Передача ссылки на функцию:
В onMounted следует передавать ссылку на функцию getPermissions, чтобы она вызывалась после монтирования компонента.
Когда вы пишете onMounted(getPermissions()), вы вызываете функцию немедленно и передаете результат вызова (а не саму функцию) в onMounted.
Правильный способ — передать саму функцию getPermissions в onMounted, чтобы она была вызвана в нужный момент.
*/

  onMounted(getPermissions) // NOT onMounted(getPermissions())

</script>

