const Hexagon = ({ children, width, height }) => {
    // h-20 w-24
    const initCLassName = 'inline-flex justify-center items-center bg-gray-900';
    const widthClassName = width ? ' w-' + width : '';
    const heightClassName = height ? ' h-' + height : '';

    return (
        <div
            className={initCLassName + widthClassName + heightClassName}
            style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%', }}
        >
            {children}
        </div>
    );
};

const WhyUs = () => {
    const whyUs = [
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
        <section className="bg-gray-100 mb-16 px-3 md:px-32 pt-3 md:pt-0 pb-3 md:pb-16">
            <div className="grid md:grid-cols-4 gap-3">
                {whyUs.map((whyUsItem, key) => (
                    <div className="z-50 bg-white text-center md:-mt-3 px-12 py-12 rounded" key={key}>
                        <Hexagon width={24} height={20}>
                            <img className="w-11" src={whyUsItem.image} alt={whyUsItem.title} />
                        </Hexagon>

                        <h2 className="font-semibold text-sm mt-6 mb-3 leading-none">
                            {whyUsItem.title}
                        </h2>
                        <p className="text-xs text-gray-600">
                            {whyUsItem.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhyUs;