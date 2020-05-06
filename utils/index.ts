import React from 'react'


export const ResultContext = React.createContext([{
  id: Math.random(),
  value: ''
}]);