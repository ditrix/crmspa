import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

export default function usePermisiions() {

    const router = useRouter();
    const permissions = ref([]);
    const permission = ref([]);
    const getPermissions = async () => {
        let response = await axios.get('api/permissions');
        permissions.value = response.data.data;
    }

    return {
        permissions,
        getPermissions,
    }

}
