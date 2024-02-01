const SectionTitle = ({heading}) => {
    return (
        <div>
        <h2 className="mt-20  text-3xl bg-gradient-to-r from-black to-green-700 inline-block text-transparent bg-clip-text font-semibold w-32 ml-[110px] md:ml-[300px] lg:ml-[560px] ">{heading}</h2>
        
        <p className=" mb-10 mx-auto w-32 border-b-4 border-green-900"></p>
    </div>
    );
};

export default SectionTitle;