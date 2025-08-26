
import './App.css';
import { useState } from 'react';
import { dataProducts } from './dataProducts';
import { ProductCard } from './productCard';
import { ServicesCard } from './ServicesCard';
import { dataServices } from './dataServices';


function App() {

  const [products, setProducts] = useState(dataProducts);
  const [services, setServices] = useState(0);

  const removeProduct = (id)=> {
    let newProducts = products.filter(product=> product.id !==id);
    setProducts(newProducts);
  }

  const prevButton = ()=> {
            setServices(service=> {
              service--;
              if (service<0) {
                return dataServices.length -1
              }
              return service
            })
        }

  const nextButton = ()=> {
            setServices(service=> {
              service++;
              if (service>dataServices.length-1) {
                return service=0
              }
              return service
            })
        }      


  return (
    <div className='container1'>
      <h2 className='heading'>Local farm's servise</h2>
      <h3>{products.length} species available</h3>
      <div className='container2'>
        {products.map(product=> (
          
          <ProductCard
            key={product.id}
            product={product}
            removeProduct={removeProduct}
            
          
          />
          
        ))}
      </div>
      
      <button className="btn" onClick={()=>setProducts([])}>Удалить все товары</button>
      
      <div className='container2'>
        
          <ServicesCard
            key={services.id}
            services={services}
            prevButton={prevButton}
            nextButton={nextButton}
                      
          />
          
        
      </div>
    </div>
  );
}

export default App;
