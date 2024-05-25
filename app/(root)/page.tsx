import HeaderBox from "@/components/HeaderBox"
import React from "react"

const Home = () => {
  const loggenIn = {firstName:'Abiodun'};
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header"> 
        <HeaderBox 
        type="greeting"
        title="Welcome"
        user={loggenIn?.firstName || 'Guest'}
        subtext="Access and manage your accounts and transcations efficiently."
        />
         </header>
      </div>
    </section>
  )
}

export default Home
