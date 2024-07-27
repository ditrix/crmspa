<template>

    <div class="page_title text-xl mb-4">Permission {{ permission.role }}</div>

        <form class="show_form space-y-6 rounded-md shadow-md mt_2 p" v-on:submit.prevent="SavePermission">
            <div class="form-block">
                <div class="form-item">
                    <div class="form-item">
                        <label for="rw_own_customer" class="block text-sm font-medium text-gray-700">R/W own customer</label>
                        <div class="mt-1">
                            <select class="widget_25 px-4 py-3 rounded-full" name="rw_own_customer" v-model="permission.rw_own_customer">
                                <option value="0">No</option>
                                <option value="1">Yes</option>
                            </select>
                        </div>
                    </div>

                    <div class="form-item">
                        <label for="rw_customer" class="block text-sm font-medium text-gray-700">R/W all customer</label>
                        <div class="mt-1">
                            <select class="widget_25 px-4 py-3 rounded-full" name="rw_customer" v-model="permission.rw_customer">
                                <option value="0">No</option>
                                <option value="1">Yes</option>
                            </select>
                        </div>
                    </div>


                </div>
            </div>

             <!-- TODO: another fields   -->

            <div class="mt-4">
                <!-- <label for="deal_title" class="block text-sm font-medium text-gray-700">Title</label>
                <div class="mt-1">
                    <input type="text" name="title" id="deal_title"
                        class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        v-model="">
                </div> -->
            </div>

            <div  class="form-controll">
                <button
                    type="submit"
                    class="btn btn_green inline-flex items-center ml-1 px-6 py-2 text-xs font-semiboldtext-sm font-medium mt_2">
                    Save
                </button>
            </div>

    </form>

</template>
<script setup>
    import { ref, onMounted } from 'vue';

    import axios from 'axios'

    import usePermissions from '@/composables/permissions'

    const {permission, showPermission, updatePermission} = usePermissions()

    const props = defineProps({
        id: {
            required: true,
            type: String
        }
    });


    const SavePermission = async () => {
        await updatePermission(props.id)
        //await console.log(SavePermission)
    }

    onMounted(
        () => showPermission(props.id)
    )


</script>
