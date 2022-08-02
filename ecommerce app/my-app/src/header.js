import React from 'react'

// category wise filtering

const Header = ({ setProduct, copy }) => {
  const filter = (e) => {
    if (e.target.id == "electronics") {
      const filtering = copy.filter(
        singleprod => singleprod.category == e.target.id);
      setProduct(filtering);
    }
    else if (e.target.id == "jewelery") {
      const filtering = copy.filter(
        singleprod => singleprod.category == e.target.id);
      setProduct(filtering);
    }
    else if (e.target.id == "men's clothing") {
      const filtering = copy.filter(
        singleprod => singleprod.category == e.target.id);
      setProduct(filtering);

    }
    else if (e.target.id == "women's clothing") {
      const filtering = copy.filter(
        singleprod => singleprod.category == e.target.id);
      setProduct(filtering);
    }
  }
  return (
    <div>
      {/* <h1>Products</h1>
      <button onClick={()=> setProduct(copy)}>All</button>

      <button id="electronics" onClick={(e) =>filter(e)}>Electronics</button>
      <button id="jewelery" onClick={(e) => filter(e)}>Jwellery</button>
      <button id="men's clothing" onClick={(e) => filter(e)}>Men's clothing</button>
      <button id="women's clothing" onClick={(e) =>filter(e)}>women's clothing</button> */}



      <nav class="navbar navbar-expand-lg navbar-light bg-light" >
        <a class="navbar-brand" >Products</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
{/* home  */}
              <a class="nav-link" onClick={() => setProduct(copy)}>Home </a>
            </li>
            {/* electronics */}
            <li class="nav-item">
              <a class="nav-link" id="electronics" onClick={(e) => filter(e)} >Electronics</a>
            </li>



{/* jwellery */}

            <li class="nav-item">
              <a class="nav-link" id="jewelery" onClick={(e) => filter(e)}>jewelery</a>
            </li>
            {/* men's clothing */}
            <li class="nav-item">
              <a class="nav-link" id="men's clothing" onClick={(e) => filter(e)}>Men's clothing</a>
            </li>
            {/* women's clothing */}
            <li class="nav-item">
              <a class="nav-link" id="women's clothing" onClick={(e) => filter(e)}>Women's clothing</a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
          </form>
        </div></nav></div>

  )
}
export default Header