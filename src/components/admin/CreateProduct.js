import React, { useState, useEffect } from 'react';
import Layout from '../Layout';
import { Link } from 'react-router-dom';
import { showError, showSuccess, showLoading } from '../../utils/messages';
import { getCategories, createProduct } from '../../api/apiAdmin';

const CreateProduct = () => {
    const [values, setValues] = useState({
        name: '',
        description: '',
        price: '',
        categories: [],
        category: '',
        quantity: '',
        loading: false,
        error: false,
        success: false,
        disabled: false,
        formData: '',
    });

    const {
        name,
        description,
        price,
        category,
        categories,
        quantity,
        loading,
        error,
        success,
        formData,
        disabled
    } = values;

    useEffect(() => {
        getCategories()
            .then(response => {
                setValues({
                    ...values,
                    categories: response.data,
                    formData: new FormData()
                })
            })
            .catch(error => {
                setValues({
                    ...values,
                    error: "Failed to load categories!",
                    formData: new FormData()
                })
            })
    }, [])

    const handleChange = (e) => {

    }

    const handleSubmit = (e) => {
        e.preventDefault();

    }

    const productForm = () => (
        <form className="mb-3" onSubmit={handleSubmit}>
            <h4>Photo:</h4>
            <div className="form-group">
                <label className="btn btn-secondary">
                    <input
                        type="file"
                        name="photo"
                        onChange={handleChange}
                        accept="image/*"
                        required
                    />
                </label>
            </div>
            <div className="form-group">
                <label className="text-muted">Name:</label>
                <input
                    name="name"
                    onChange={handleChange}
                    type="text"
                    className="form-control"
                    value={name}
                    required
                />
            </div>
            <div className="form-group">
                <label className="text-muted">Description:</label>
                <textarea
                    name="description"
                    onChange={handleChange}
                    className="form-control"
                    value={description}
                    required
                />
            </div>
            <div className="form-group">
                <label className="text-muted">Price:</label>
                <input
                    name="price"
                    onChange={handleChange}
                    className="form-control"
                    type="number"
                    value={price}
                    required
                />
            </div>
            <div className="form-group">
                <label className="text-muted">Quantity:</label>
                <input
                    name="quantity"
                    onChange={handleChange}
                    className="form-control"
                    type="number"
                    value={quantity}
                    required
                />
            </div>
            <div className="form-group">
                <label className="text-muted">Category:</label>
                <select name="category" value={category} onChange={handleChange} className="form-control" required>
                    <option value="">----Select Category----</option>
                    {categories && categories.map(item => (
                        <option value={item._id} key={item._id}>{item.name}</option>
                    ))}
                </select>
            </div>
            <button className="btn btn-outline-primary" type="submit" disabled={disabled}>Create Product</button>
        </form>
    );

    const goBack = () => (<div className="mt-5">
        <Link to="/admin/dashboard" className="text-warning">Go to Dashboard</Link>
    </div>)


    return (
        <Layout title="Add a new product">
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    {showError(error, error)}
                    {showLoading(loading)}
                    {showSuccess(success, 'Product Added Successfully!')}
                    {productForm()}
                    {goBack()}
                </div>
            </div>
        </Layout>
    );

}

export default CreateProduct;