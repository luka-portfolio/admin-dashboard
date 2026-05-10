import React from 'react'
import Admins from "./components/admins";
import ActiveUsers from "./components/activeUsers";
import Statistics from "./components/statistics";

const main = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <ActiveUsers />
        <Statistics />
      </div>
      <h1 className="text-2xl font-bold mb-4">Admins</h1>
      <Admins />
    </>
  )
}

export default main