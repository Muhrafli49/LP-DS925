import React from 'react';
import Images from '../assets/Images';

function Hero() {
    return (
        <div className="max-w-screen-xl mx-auto p-5">
            {/* Layanan Kami Section */}
            <section className="mb-5" id='layanankami'>
                <h1 className="text-2xl xl:text-3xl font-bold text-center md:text-xl mb-8">Layanan Kami</h1>
                <div className="flex flex-wrap justify-center -mx-4">
                    <Card title="Jual" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra tellus ac imperdiet rhoncus." image={Images.jual} />
                    <Card title="Sepuh & Patri" content="Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas." image={Images.cuci} />
                    <Card title="Beli" content="Suspendisse potenti. Integer commodo felis nec risus maximus, a iaculis nulla vestibulum." image={Images.beli} />
                </div>
            </section>

            {/* Catalog Produk Section */}
            <section className="mb-5" id='produk'>
                <h2 className="text-2xl xl:text-3xl font-bold text-center md:text-xl mb-8">Catalog Produk</h2>
                <div className="flex flex-wrap justify-center -mx-2 md:-mx-4">
                    <ProductCard image={Images.product1} productName="Produk 1" />
                    <ProductCard image={Images.product2} productName="Produk 2" />
                    <ProductCard image={Images.product3} productName="Produk 3" />
                    <ProductCard image={Images.product4} productName="Produk 4" />
                    <ProductCard image={Images.product5} productName="Produk 5" />
                    <ProductCard image={Images.product6} productName="Produk 6" />
                    <ProductCard image={Images.product7} productName="Produk 7" />
                    <ProductCard image={Images.product8} productName="Produk 8" />
                </div>
            </section>
        </div>
    );
}

// Card component for Layanan Kami section
function Card({ title, content, image }) {
    return (
        <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-4">
            <div className="bg-gradient-to-br from-blue-600 to-blue-900 text-white rounded-lg shadow-lg p-4 hover:bg-blue-600 transition transform hover:scale-105">
                <img
                    src={image}
                    alt={title}
                    className="w-full rounded-lg p-2 mx-auto"
                    style={{ maxWidth: '50px', height: 'auto' }} // Added style to resize the image
                />
                <h2 className="text-2xl font-bold mb-4 text-center">{title}</h2>
                <p className="text-gray-100">{content}</p>
            </div>
        </div>
    );
}

// Product card component for Catalog Produk section
function ProductCard({ image, productName }) {
    return (
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 md:px-4 mb-4">
            <div className="bg-blue-200 rounded-lg shadow-lg p-4 hover:shadow-xl transition duration-300 relative h-full flex flex-col">
                <img
                    src={image}
                    alt="Product"
                    className="w-full rounded-lg mb-4 flex-grow"
                />
                <h3 className="text-xl font-bold mb-2">{productName}</h3>
            </div>
        </div>
    );
}

export default Hero;
