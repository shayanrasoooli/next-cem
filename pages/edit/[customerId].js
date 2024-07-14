import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import CustomerEditPage from '../../component/template/CustomerEditPage';

function Index() {
    const [data, setData] = useState(null);
    const router = useRouter();
    const { query: { customerId } } = router;
    console.log(customerId);

    useEffect(() => {
        if (customerId) {
            fetch(`http://localhost:3000/api/customer/${customerId}`)
                .then((res) => res.json())
                .then(data => setData(data.data))
                .catch(error => console.error('Error fetching data:', error));
        }
    }, [customerId]);

    if (data) {
        return <CustomerEditPage data={data} id={customerId}  /> 
    } else {
        console.log('nothing exists');
        return null; // make sure to return something if data doesn't exist
    }
}

export default Index