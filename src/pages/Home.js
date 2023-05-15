import { useState, useEffect } from 'react'
import {useLocation, useHistory} from 'react-router-dom'
import {getAllCategories} from '../api'
import CategoryList from '../components/CategoryList'
import Loader from '../components/Loader'
import Search from '../components/Search'

export default function Home() {
  const [catalog, setCatalog] = useState([])
  const [filterCatalog, setFilterCatalog] = useState([])

  const {pathName, search} = useLocation()
  const {push} = useHistory()

  const handleSearch = (str) => {
    setFilterCatalog(catalog.filter(item => item.strCategory.toLowerCase().includes(str.toLowerCase())))
    push({
      pathName,
      search: `?search=${str}`
    })
  }

  useEffect(() => {
    getAllCategories().then(data => {
      setCatalog(data.categories)
      setFilterCatalog(search ?
        data.categories.filter(item =>
          item.strCategory
          .toLowerCase()
          .includes(search.split('=')[1].toLowerCase())
          ) : data.categories
        )
    })
  }, [search])

  return(
    <>
    <Search cb={handleSearch} />
      {!catalog.length ?  (
        <Loader />
      ) : (
        <CategoryList catalog={filterCatalog} />
      )}
    </>
  )
}