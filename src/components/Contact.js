import React from 'react';
import locationIcon from '../assets/location.png';
import dateIcon from '../assets/date.png';
import callIcon from '../assets/call.png';

function Contact() {
    return (
        <div className="container mx-auto" id='kontak'>
            <section className="p-5">
                <h2 className="text-2xl xl:text-3xl font-bold text-center md:text-xl mb-8">Informasi & Kontak</h2>
                <div className="flex flex-wrap items-start justify-center">
                    {/* Left Side: Address, Operating Hours, and Contact */}
                    <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold mb-2">Diamond Silver 925</h3>
                            <div className="flex items-center mb-2">
                                <img src={locationIcon} alt="Location" className="w-6 h-6 mr-2" />
                                <p className="text-gray-800">Porka, Jl. Jend. Sudirman No.150</p>
                            </div>
                            <p className="text-gray-800">Kec. Purwokerto Bar., Kabupaten Banyumas, Jawa Tengah 53133</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md mt-4">
                            <h3 className="text-xl font-bold mb-2">Jam Operasional</h3>
                            <div className="flex items-center mb-2">
                                <img src={dateIcon} alt="Jam Operasional" className="w-6 h-6 mr-2" />
                                <p className="text-gray-800">Senin - Minggu: 08:00 - 17:00</p>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md mt-4">
                            <h3 className="text-xl font-bold mb-2">Kontak</h3>
                            <div className="flex items-center mb-2">
                                <img src={callIcon} alt="Kontak" className="w-6 h-6 mr-2" />
                                <p className="text-gray-800">Telp: +6281228335313</p>
                            </div>
                        </div>
                    </div>
                    {/* Right Side: Google Map */}
                    <div className="w-full md:w-1/2 lg:w-2/3 px-4 mb-4">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <iframe 
                                width="100%" 
                                height="400" 
                                frameBorder="0" 
                                scrolling="no" 
                                marginHeight="0" 
                                marginWidth="0" 
                                id="gmap_canvas" 
                                src="https://maps.google.com/maps?width=100%&amp;height=400&amp;hl=en&amp;q=Porka,%20Jl.%20Jend.%20Sudirman%20No.150%20Kab.%20Banyumas+(Diamond%20Silver%20925)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                            </iframe>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;
