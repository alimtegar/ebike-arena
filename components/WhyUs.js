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
        <section className="flex justify-center items-center px-32">
            {whyUs.map((whyUsItem, key) => (
                <div className="z-50 bg-white w-1/4 text-center -mt-3 mx-1.5 px-12 py-12 shadow-lg" key={key}>
                    <Hexagon width={24} height={20}>
                        <img className="w-11" src={whyUsItem.image} alt={whyUsItem.title} />
                    </Hexagon>

                    <h2 className="font-semibold text-sm mt-5 mb-1">
                        {whyUsItem.title}
                    </h2>
                    <p className="text-xs text-gray-500">
                        {whyUsItem.description}
                    </p>
                </div>
            ))}
        </section>
    );
};

export default WhyUs;