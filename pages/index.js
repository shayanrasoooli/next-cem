import HomePage from "../component/template/HomePage";
import Customer from "../models/Customers";
import ConnectDB from "../utils/ConnectDB";

export default function Home({customers}) {
  return (
    <HomePage customers={customers} />
  )
}



export async function getServerSideProps() {
  try {
    await ConnectDB();
    const customers = await Customer.find();
    return {
      props: {
        customers: JSON.parse(JSON.stringify(customers)),
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        customers: [],
      },
    };
  }
}