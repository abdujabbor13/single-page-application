import { useEffect, useState } from 'react'
import {useParams, useHistory} from 'react-router-dom'
import {getMealById} from '../api'
import Loader from '../components/Loader'

export default function Resipe() {
  const [resipe, setResipe] = useState([])
  const [showRecipe, setShowRecipe] = useState(false)
  const {id} = useParams()
  const {goBack} = useHistory()

  const handleResipe = () => {
    setShowRecipe(!showRecipe)
  }

  useEffect(() => {
    getMealById(id).then((data) => setResipe(data.meals[0]))
  }, [])

  return(
    <>
      <button className='btn' onClick={goBack}>go back</button>
      {!resipe.idMeal ? <Loader /> : (
        <div className='resipe'>
          <img src={resipe.strMealThumb} alt={resipe.strMeal} />
          <h1>{resipe.strMeal}</h1>
          <h6><b>Category: </b>{resipe.strCategory}</h6>
          {resipe.strArea ? <h6><b>Area: </b>{resipe.strArea}</h6> : null}
          <p>{resipe.strInstructions}</p>
          <button className='btn' onClick={handleResipe}>show Resipe</button>
          {showRecipe ? (
            <table>
            <thead>
            <tr>
              <th>ingredient</th>
              <th>measure</th>
            </tr>
            </thead>
            <tbody>
              {Object.keys(resipe).map(key => {
                if(key.includes('Ingredient') && resipe[key]) {
                  return (
                    <tr>
                      <td>{resipe[key]}</td>
                      <td>{resipe[`strMeasure${key.slice(13)}`]}</td>
                    </tr>
                  )
                }
              })}
            </tbody>
            </table>
          ) : null}

          {resipe.strYoutube ? (
            <div className='row'>
              <h4>video resipe</h4>
              <iframe src={`https://www.youtube.com/embed/${resipe.strYoutube.slice(-11)}`} allowFullScreen title={id} />
            </div>
          ) : ''}
        </div>
      )}
    </>
  )
}