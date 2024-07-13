import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import CustomerEditPage from '../../component/template/CustomerEditPage';

function Index() {
    const [data , setData ] = useState(null);

    const router = useRouter();
    const {query : {customerId} , isReady} = router;

    useEffect(() => {
        if (isReady) {  
            fetch(`/api/customer/${customerId}`)
            .then((res) => res.json())
            .then(data => setData(data.data))
        }
    } , [isReady]);

    if (data) {
        <CustomerEditPage data={data} id={customerId}  /> 
    }else{
        console.log('nothing exist');
    }

}

export default Index