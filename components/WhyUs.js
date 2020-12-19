const Hexagon = () => (
    <div className="inline-flex bg-gray-900 h-20 w-24" style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%', }}>

    </div>
);

const WhyUs = () => (
    <section className="flex justify-center items-center px-32">
        {/* <div> */}
        <div className="z-50 bg-white w-1/4 text-center -mt-3 mx-1.5 px-12 py-12 shadow-lg">
            <Hexagon />

            <h2 className="font-semibold text-sm mt-5 mb-1">Installment 0%</h2>
            <p className="text-xs text-gray-500">
                Available Purchase above $500 only
            </p>
        </div>
        
        <div className="z-50 bg-white w-1/4 text-center -mt-3 mx-1.5 px-12 py-12 shadow-lg">
            <Hexagon />

            <h2 className="font-semibold text-sm mt-5 mb-1">Free Local Delivery</h2>
            <p className="text-xs text-gray-500">
                Free shipping with minimum spend
            </p>
        </div>

        <div className="z-50 bg-white w-1/4 text-center -mt-3 mx-1.5 px-12 py-12 shadow-lg">
            <Hexagon />

            <h2 className="font-semibold text-sm mt-5 mb-1">Ready to Ride</h2>
            <p className="text-xs text-gray-500">
                We'll deliver your bike in assembled
            </p>
        </div>
        {/* </div> */}
    </section>
);

export default WhyUs;