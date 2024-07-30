import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

export default function useUsers() {

    const router = useRouter();

    const users = ref([]);

    const user = ref([]);

    const permissions = ref([]);

    const getUsers = async () => {

        try {

            let response = await axios.get('api/users');

            users.value = response.data.data;

        } catch(error) {
            console.error('error fetch data: ',error)
        }
    }

    const getUser = async (id) => {


        if (!id) {
            console.warn('ID is missing');
            return
        }

        try {

            const response = await axios.get(`/api/users/${id}`);
            user.value = response.data.data;

            const permissionsResponse = await axios.get('/api/permissions');
            permissions.value = permissionsResponse.data.data;

        } catch (error) {
            console.error('error fetch data: ',error)
        }

    }

    return {
        users,
        user,
        permissions,
        getUsers,
        getUser,
    }

}
