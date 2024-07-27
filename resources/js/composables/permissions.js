import { ref } from 'vue'
import axios from 'axios'
import { useRouter, useRoute } from 'vue-router'

export default function usePermisiions() {

    const router = useRouter();

    const permissions = ref([]);
    const permission = ref([]);

    const getPermissions = async () => {
        let response = await axios.get('api/permissions');
        permissions.value = response.data.data;
    }

    const showPermission = async (id) => {

        const response = await axios.get(`/api/permissions/${id}`)
        permission.value = response.data.data

    }

    const updatePermission = async  (id) => {
        const response = await axios.put(`/api/permissions/${id}`,permission.value)

        await router.push({ name: 'permissions.index' });

    }

    return {
        permissions,
        permission,
        showPermission,
        getPermissions,
        updatePermission,
    }

}
