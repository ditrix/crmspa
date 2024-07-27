<template>
    Permissions
    <table class="min-w-full  border divide-y divide-gray-300 grid_table">
        <thead>
            <tr>
                <th>role</th>
                <th>r/w own customer</th>
                <th>r/w own deals</th>
                <th>r/w own reports</th>
                <th>r/w customer</th>
                <th>r/w deals</th>
                <th>r/w reports</th>
                <th>r/w options</th>
                <th>r/w parameters</th>
                <th>r/w users</th>
                <th>actions</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="permission in permissions" :key="permission.id">
                <td class="pl_1">{{ permission.role }}</td>
                <td class="tx_center">{{ formatBoolean(permission.rw_own_customer) }}</td>
                <td class="tx_center">{{ formatBoolean(permission.rw_own_deals) }}</td>
                <td class="tx_center">{{ formatBoolean(permission.rw_own_reports) }}</td>
                <td class="tx_center">{{ formatBoolean(permission.rw_customer) }}</td>
                <td class="tx_center">{{ formatBoolean(permission.rw_deals) }}</td>
                <td class="tx_center">{{ formatBoolean(permission.rw_reports) }}</td>
                <td class="tx_center">{{ formatBoolean(permission.rw_options) }}</td>
                <td class="tx_center">{{ formatBoolean(permission.rw_parameters) }}</td>
                <td class="tx_center">{{ formatBoolean(permission.rw_users) }}</td>
                <td class="tx_center">
                    <router-link
                        class="btn btn_gray inline-flex items-center px-4 py-2 text-xs font-semibold"
                        :to="{ name: 'permissions.show', params: { id: permission.id} }">
                        Edit
                    </router-link>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>
import { onMounted } from 'vue'
import { formatBoolean } from '@/helpers/functions'

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

