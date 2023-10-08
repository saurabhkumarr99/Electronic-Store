import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { orderLaptopLessThan2Lakh, orderLaptopGreaterThan2Lakh } from '../redux/slices/laptopsSlice';
import { orderMobile } from '../redux/slices/mobilesSlice';

const LaptopShop = () => {
    const laptopStockLessThan2Lakh = useSelector((state) => state.laptops.stockLessThan2Lakh);
    const laptopStockGreaterThan2Lakh = useSelector((state) => state.laptops.stockGreaterThan2Lakh);
    const laptopOrdersLessThan2Lakh = useSelector((state) => state.laptops.orderslessThan2Lakh);
    const laptopOrdersGreaterThan2Lakh = useSelector((state) => state.laptops.ordersgreaterThan2Lakh);
    const dispatch = useDispatch();

    const handleLaptopOrderLessThan2Lakh = () => {
        if (laptopStockLessThan2Lakh > 0) {
            dispatch(orderLaptopLessThan2Lakh());
        } else {
            // Handle out-of-stock scenario
            alert('Laptops less than 2 lakh are out of stock.');
        }
    };

    const handleLaptopOrderGreaterThan2Lakh = () => {
        if (laptopStockGreaterThan2Lakh > 0) {
            dispatch(orderLaptopGreaterThan2Lakh());
            dispatch(orderMobile());
        } else {
            // Handle out-of-stock scenario
            alert('Laptops greater than 2 lakh are out of stock.');
        }
    };

    return (
        <div >
            <h2 align='center'>Laptop Shop</h2>
            <div className="row" style={{ display: 'flex', justifyContent: 'center' }}>
                {/* Laptop Card (Worth Less Than 2 Lakh) */}
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <img
                            src="../../images/laptop1.jpeg"
                            className="card-img-top"
                            style={{ maxWidth: '100%', height: '340px' }}
                            alt="Laptop 1"
                        />
                        <div className="card-body text-center">
                            <h5 className="card-title">Laptop (&lt; 2 Lakh)</h5>
                            <p className="card-text">Available: {laptopStockLessThan2Lakh}</p>
                            <p className="card-text">Orders: {laptopOrdersLessThan2Lakh}</p>
                            <button onClick={handleLaptopOrderLessThan2Lakh} className="btn btn-primary">
                                Order Laptop (Less Than 2 Lakh)
                            </button>
                        </div>
                    </div>
                </div>

                {/* Laptop Card (Worth Greater Than 2 Lakh) */}
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <img
                            src="../../images/laptop2.jpeg"
                            className="card-img-top"
                            style={{ maxWidth: '100%', height: '300px' }}
                            alt="Laptop 2"
                        />
                        <div className="card-body text-center">
                            <h5 className="card-title">Laptop (&gt; 2 Lakh)</h5>
                            <p className="offer-text">Get a Mobile Free</p>
                            <p className="card-text">Available: {laptopStockGreaterThan2Lakh}</p>
                            <p className="card-text">Orders: {laptopOrdersGreaterThan2Lakh}</p>
                            <button onClick={handleLaptopOrderGreaterThan2Lakh} className="btn btn-primary">
                                Order Laptop (Greater Than 2 Lakh)
                            </button>
                        </div>
                    </div>
                </div>
            </div>
    
            <section className="container mt-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className="text-center offer-text">
                            <h2>Special Offer!</h2>
                            <p>Buy a laptop worth more than ₹2 Lakh and get a <span className="offer-highlight">FREE MOBILE PHONE!</span></p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LaptopShop;
