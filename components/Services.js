const Services = () => {
    const services = [
        {
            title: 'Installment 0%',
            description: 'Available Purchase above $500 only',
            image: '/images/why-us-1.png',
        },
        {
            title: 'Free Local Delivery',
            description: 'Free shipping with minimum spend',
            image: '/images/why-us-2.png',
        },
        {
            title: 'Ready to Ride',
            description: 'We\'ll deliver your bike in assembled',
            image: '/images/why-us-3.png',
        },
    ];

    return (
        <section className="bg-gray-50 px-3 md:px-24 pt-3 md:pt-0 pb-3 md:pb-12">
            <div className="flex flex-wrap justify-center -m-1.5">
                {services.map((service, key) => (
                    <div className="w-full md:w-1/4 p-1.5">
                        <div className="relative z-10 flex md:flex-col items-center bg-white md:text-center md:-mt-3 p-6 md:p-12 rounded shadow hover:shadow-lg transition duration-300" key={key}>
                            <img className="h-20 mr-6 md:mr-0 mb-0 md:mb-6" src={service.image} alt={service.title} />
                            <div>
                                <h2 className="font-semibold text-sm mb-3">
                                    {service.title}
                                </h2>
                                <p className="text-xs text-gray-600">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;