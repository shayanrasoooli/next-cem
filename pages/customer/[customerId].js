import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import CustomerDetailsPage from "../../component/template/CustomerDetailsPage";

function Index() {

  const [data, setData] = useState(null);
  const router = useRouter();
  const { query: { customerId } } = router;

  useEffect(() => {
      if (customerId) {
          fetch(`http://localhost:3000/api/customer/${customerId}`)
              .then((res) => res.json())
              .then(data => setData(data.data))
              .catch(error => console.error('Error fetching data:', error));
      }
    
  }, [customerId]);


  if (data) {
    return <CustomerDetailsPage data={data} />
  } else {
    console.log('nothing exists');
    return null; // make sure to return something if data doesn't exist
  }

}

export default Index