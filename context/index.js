import { createContext, useState } from 'react';

const Context = createContext();

export function Provider({ children })
{
  const [estacionado, setEstacionado] = useState(false)
  const [recentes, setRecentes] = useState([])
  const [vaga, setVaga] = useState({local: '', predio: '', andar:'', vaga:'', idLocal: -1, idPredio: -1})
  const [mapSelect, setMapSelect] = useState(false)

  const [locais, setLocais] = useState(require('../data/locais.json'))
  const [vagas, setVagas] = useState(require('../data/vagas.json'))

  function mudarVagaLocal(vaga, ocupar) {
    if(ocupar){
      setLocais([...locais].map(local => {
        if(vaga.idLocal === local.id)
        {
          return {
            ...local,
            data: {
              sectors: [...(local.data.sectors)].map((sector, index) => {
                if(index === vaga.idPredio)
                  return {
                    name: sector.name,
                    total: sector.total + 1, 
                    floors: [...(sector.floors)].map(floor => {
                      if(floor.number === vaga.andar)
                        return {number: floor.number, available: floor.available + 1}
                      else
                        return floor
                    })}
                else
                  return sector
            })
            }
          }
        } else
          return local
      }))

      setVagas([...vagas].map((vagaPredio, index) => {
        if((vagaPredio.id === vaga.idLocal) && (vagaPredio.sector === vaga.predio))
        {
          return {
            ...vagaPredio,
            floors:
              [...vagaPredio.floors].map(floor => {
                return {
                  id: floor.id, 
                  data: floor.data.map(vagaA => {
                    if((vagaA.vaga === vaga.vaga) && (floor.id === vaga.andar)){
                      return {...vagaA, ocupado: false}
                    } else {
                      return {...vagaA}
                    }})
                }
              })
          }
        } else {
          return vagaPredio
        }
      }))
    }
    else {
      setLocais([...locais].map(local => {
        if(vaga.idLocal === local.id)
        {
          return {
            ...local, 
            data: {
              sectors: [...(local.data.sectors)].map((sector, index) => {
                  if(index === vaga.idPredio)
                    return {
                      name: sector.name,
                      total: sector.total - 1, 
                      floors: [...(sector.floors)].map(floor => {
                        if(floor.number === vaga.andar)
                          return {number: floor.number, available: floor.available - 1}
                        else
                          return floor
                      })}
                  else
                    return sector
              })
            }
          }
        } else
          return local
      }))
    }
  }

  return (
    <Context.Provider value={{locais, vagas, setVagas, estacionado, setVaga, setEstacionado, recentes, setRecentes, vaga, mapSelect, setMapSelect, mudarVagaLocal}}>
      {children}
    </Context.Provider>
  )
}

export default Context;