import {Link} from 'react-router-dom'


export default function CategoryItem(props) {
  const {idCategory, strCategory, strCategoryThumb, strCategoryDescription} = props
  return(
    <div className="card">
      <div className="card-image">
        <img src={strCategoryThumb} alt={strCategory} />
      </div>
      <div className="card-content">
        <h3 className="card-title"><b>{strCategory}</b></h3>
        <p>{strCategoryDescription.slice(0, 60)}...</p>
      </div>
      <div className='card-action'>
        <Link to={`/Category/${strCategory}`} className='btn' >watch Category</Link>
      </div>
    </div>
  )
}