import HeaderBox from "@/components/HeaderBox"
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react"

const Home = () => {
  const loggenIn = {firstName:'Abiodun'};
  return (
    <section className="home">
      <div className="home-content bg-red500">
        <header className="home-header"> 
        <HeaderBox 
        type="greeting"
        title="Welcome"
        user={loggenIn?.firstName || 'Guest'}
        subtext="Access and manage your accounts and transcations efficiently."
        />
        <TotalBalanceBox 
        accounts={[]}
        totalBanks={1}
        totalCurrentBalance={1250.35}
        
        />
         </header>
      </div>
    </section>
  )
}

export default Home
