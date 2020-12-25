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
        <section className="bg-gray-100 px-3 md:px-32 pt-3 md:pt-0 pb-3 md:pb-16">
            <div className="flex justify-center -mx-1.5">
                {services.map((service, key) => (
                    <div className="z-10 flex flex-col items-center bg-white text-center w-1/4 mx-1.5 md:-mt-3 px-12 py-12 rounded shadow transition hover:shadow-lg" key={key}>
                        <img className="h-20" src={service.image} alt={service.title} />
                        <h2 className="font-semibold text-sm mt-6 mb-3">
                            {service.title}
                        </h2>
                        <p className="text-xs text-gray-600">
                            {service.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;