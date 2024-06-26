import HeaderBox from "@/components/HeaderBox"
import Rightsidebar from "@/components/Rightsidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react"

const Home = () => {
  const loggedIn = {firstName:'Abiodun', lastName:'Olatunji', email:'olatunjia889@gmail.com'};
  return (
    <section className="home">
      <div className="home-content bg-red500">
        <header className="home-header"> 
        <HeaderBox 
        type="greeting"
        title="Welcome"
        user={loggedIn?.firstName || 'Guest'}
        subtext="Access and manage your accounts and transcations efficiently."
        />
        <TotalBalanceBox 
        accounts={[]}
        totalBanks={1}
        totalCurrentBalance={1250.35}
        
        />
         </header>
         RECENT TRANSACTIONS
      </div>
      <Rightsidebar 
      user={loggedIn}
      transactions={[]}
      banks={[{currentBalance:123.50},{currentBalance:500.50}]}
      />
    </section>
  )
}

export default Home
