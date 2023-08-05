import { createContext, useState } from 'react';

const Context = createContext();

export function Provider({ children })
{
  const [estacionado, setEstacionado] = useState(true)
  const [recentes, setRecentes] = useState([])
  const [vaga, setVaga] = useState({local: 'Bourbon Shopping', predio: 'Norte', andar:'2', vaga:'C9'})

  return (
    <Context.Provider value={{data: {}, estacionado, setEstacionado, recentes, setRecentes, vaga}}>
      {children}
    </Context.Provider>
  )
}

export default Context;