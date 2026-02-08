import Card from '../Card/Card';
import './ProductCard.css';

function ProductCard({ name, description, price, image, isOnSale, salePrice }) {
    return (
        <Card className="product-card">
            <img
                src={image}
                alt={name}
            />
            <div className='product-info'>
                <h3>{name}
                    {isOnSale && <span className="sale-badge">SALE</span>}
                </h3>
                <p>{description}</p>
                <span className="price-section">
                    {
                        isOnSale ? (
                            <>
                                <span className="original-price">${price}</span>
                                <span className="sale-price">${salePrice}</span>
                            </>
                        ) : (
                            <span className='price'>${price}</span>
                        )
                    }
                </span>
                <button className='add-to-cart-btn' onClick={() => alert(`Added ${name} to cart!`)}>
                    Add to Cart
                </button>
            </div>
        </Card>
    )
}

export default ProductCard;