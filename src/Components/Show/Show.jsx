const Show = ({ show }) => {
    const {
        url,
        name,
        type,
        language,
        genres,
        schedule: { time, days },
        image
      } = show;
      const imageUrl = image && image.original ? image.original : null;
    
    return (
        <div>
            <h1>{show.name}</h1>
            <div className="card h-96  shadow-xl image-full">
                <figure> {imageUrl && <img className="w-80 h-96" src={imageUrl} alt={`${name} Poster`} />}</figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Show;