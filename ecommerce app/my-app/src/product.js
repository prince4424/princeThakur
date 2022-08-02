import react, {useState, useEffect} from 'react'
import Header from './header'


function Products (){
    const [product, setProduct] = useState([])
    const[copy, setCopy] = useState([])
  const data = async () => {
    try {
      // fethching api
      const datafromApi = await fetch('https://fakestoreapi.com/products')
    
      const dat = await datafromApi.json();
      setProduct(dat)
      setCopy(dat)
      console.log("datafromApi", dat)
    } catch (error) {
      console.log("error", error.name)
    }
  }
  useEffect(() => { data() }, [])



  return (
    <div>
     <Header copy={copy} setProduct={setProduct}/>
      <div className='container'>
        <div className='row'>
          {product.map((prod, index) =>
            <div className='col-md-3' key={index}>
              <div className='img-fluid' >
              <img src={prod.image} />
              </div>
              <h5> {prod.title}</h5>
              {/* <p> {prod.description}</p> */}
              {/* <p> {prod.id}</p>
              <p> {prod.category}</p> */}
            </div>
            )}
        </div>

      </div>
    </div>

  )
            }
            export default Products