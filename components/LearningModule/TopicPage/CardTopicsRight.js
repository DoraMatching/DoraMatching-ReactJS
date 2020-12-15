import React from 'react'
import { useAuth } from '../../../contexts/auth'
import Schedule from '../../ProfileModule/Schedule/Schedule'


export default function CardTopicsRight() {
  const {user} = useAuth();
  return (
    <div>
      {user && <Schedule user={user} />}
    </div>
  )
}
