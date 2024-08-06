import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

export default function useCustomers() {

    const router = useRouter();

    const errors = ref('');

    const customers = ref([]);

    const customer = ref([]);

    const getCustomers = async () => {

        let response = await axios.get('/api/customers');

        customers.value = response.data.data;


    }

    const getCustomer = async (id) => {

            if (!id) {
                console.warn('ID is missing');
                return
            }

           try {
                const response = await axios.get(`/api/contract_type/${id}`);

                customer.value = response.data.data;

            } catch (error) {
                console.error('error fetch data: ',error)
            }

    }

    const updateCustomer = async  (id) => {

        if (!id) {
            console.warn('ID is missing');
            return
        }

        errors.value = ''

        try {

            await axios.put(`/api/customers/${id}`,custmomer.value)
        }
        catch(error) {

            if (error.response.status === 422) {
                for (const key in error.response.data.errors) {
                    errors.value = error.response.data.errors
                }
            }
        }

    }

    const storeCustomer = async (data) => {
        errors.value = ''

        try {
            let response = await axios.post(`/api/customers`, data);
            await router.push({ name: 'customers.index' });

        } catch(error) {
            console.error('error post data',error);
            if (error.response.status === 422) {
                for (const key in error.response.data.errors) {
                    errors.value = error.response.data.errors
                }
            }
        }
    }

    const destroyCustomer = async (id) => {

        let response = await axios.delete(`/api/customer/${id}`);

    }

    return {
        errors,
        customers,
        customer,
        getCustomers,
        getCustomer,
        updateCustomer,
        storeCustomer,
        destroyCustomer,
    }

}
