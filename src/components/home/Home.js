import { useState, useEffect } from 'react';
import Layout from '../Layout';
import Card from './Card';
import CheckBox from './CheckBox'
import { showError, showSuccess } from '../../utils/messages';
import { getCategories, getProducts, getProductDetails } from '../../api/apiProduct';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [limit, setLimit] = useState(30);
    const [order, setOrder] = useState('desc');
    const [sortBy, setSortBy] = useState('createdAt');
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        getProducts(sortBy, order, limit)
            .then(response => setProducts(response.data))
            .catch(err => setError("Failed to load products!"));

        getCategories()
            .then(response => setCategories(response.data))
            .catch(err => setError("Failed to load categories!"));
    }, [])

    const showFilters = () => {
        return (
            <>
                <div className="row">
                    <div className="col-sm-3">
                        <h5>Filter By Categories:</h5>
                        <ul>
                            <CheckBox
                                categories={categories}
                            />
                        </ul>
                    </div>
                </div>
            </>
        )
    }

    return (
        <Layout title="Home Page" className="container-fluid">
            {showFilters()}
            <div style={{ width: "100%" }}>
                {showError(error, error)}
                {showSuccess(success, "Added to cart successfully!")}
            </div>
            <div className="row">
                {products && products.map(product => <Card product={product} key={product._id} />)}
            </div>
        </Layout>
    )
}

export default Home;