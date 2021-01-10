const AboutUs = ({ content }) => (
    <section className="flex justify-center text-center px-6 md:px-3 md:px-24 py-6 md:py-12">
        <div className="w-full md:w-1/2">
            <h1 className="text-lg font-bold mb-6">
                About ebike arena
                        <sup className="font-semibold text-sm ml-1">.id</sup>
            </h1>
            <div className="text-xs text-gray-600" dangerouslySetInnerHTML={{ __html: content }} />
            {/* <p className="text-xs text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fusce id velit ut tortor pretium. Aliquam sem et tortor consequat id porta. Enim neque volutpat ac tincidunt vitae. Tellus pellentesque eu tincidunt tortor aliquam. Sem nulla pharetra diam sit amet nisl.
            </p> */}
        </div>
    </section>
);

export default AboutUs;