import Link from "next/link"


function layout({children}) {
  return (
    <>
    <header className="header">
        <h2>nextJS crm</h2>
        <Link href='/add-customer'>Add Customer</Link>
    </header>
    <div className="main">{children}</div>
    <footer>
        <a href="https://google.com" rel="noreferrer" target="_blank">shayan</a>
        NextJS Practise || CRM Project &copy;
    </footer>
    </>

  )
}

export default layout