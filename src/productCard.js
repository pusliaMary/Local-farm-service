export const ProductCard = ({product, removeProduct})=>{

    const {id, image, text, price} = product;

    return (
        <div  key={id} className="container3">
            <img src={image} alt='pic' width="300px" />
            <p>{text}</p>
            <h3>{price}</h3>
            <button onClick={()=>removeProduct(id)}>Удалить товар</button>
        </div>
    )

}