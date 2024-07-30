<template>

<div class="contanier">


    <form class="show_form space-y-6 rounded-md shadow-md mt_2 p" v-on:submit.prevent="saveUser">

        <div class="page_title text-xl mb-2">User {{ user.id }}</div>

 <!-- TODO another fields  -->

        <div class="form-input_group_inline">

            <div class="form-item input-inline">
                <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                    <div class="mt-1">
                        <input type="text" name="name" id="name"
                                class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                v-model="user.name">
                    </div>
            </div>
        </div>

        <div  class="form-controll">
                <button
                    type="submit"
                    class="btn btn_blue inline-flex items-center ml-1  font-semiboldtext-sm font-medium mt_2">
                    Save
                </button>

                <router-link
                    class="btn btn_light_gray ml-2 inline-flex items-center  font-semibold ml_2"
                    :to="{ name: 'users.index' }">
                    Cancel
                </router-link>
            </div>
    </form>

</div>






</template>



<script setup>

import { onMounted } from 'vue'

import useUsers from '@/composables/users'

const {user, getUser} = useUsers();

// const saveUser = async () => {

// }

const props = defineProps({
    id: {
        required: true,
        type: String
    }
});



//console.log(user);

function saveUser() {

    console.log('save user');
}

onMounted( () => getUser(props.id) );

</script>

<!--
 id
permission_id,
is_active,
name,
email,
phone,
password,
role  -->
