'use client'
import React from 'react'
import { formatAmount } from "@/lib/utils";
import CountUp from "react-countup";

const AnimatedCounter = ({amount}: {amount:number}) => {
  return (
    <div className='w-full'><CountUp 
    decimal=","
    prefix="$"
    decimals={2}
    end={amount} /></div>
  )
}

export default AnimatedCounter