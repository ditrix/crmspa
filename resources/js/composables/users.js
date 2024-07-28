import { ref } from 'vue'
import axios from 'axios'
import { useRouter, useRoute } from 'vue-router'


export default function useUsers() {

    const router = useRouter();

    const users = ref([]);

    const user = ref([]);


    const getUsers = async () => {


        try {

            let response = await axios.get('api/users');

//            console.log(response.data.data[0]);

            users.value = response.data.data;



        } catch(error) {
            console.error('error fetch data: ',error)
        }

    }


    return {
        users,
        getUsers,
    }

}
