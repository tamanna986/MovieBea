import { Link } from "react-router-dom";

const Show = ({ show }) => {
    const {
        url,
        name,
        type,
        language,
        genres,
        schedule: { time, days },
        image,
        runtime,
        id
      } = show;
      const imageUrl = image && image.original ? image.original : null;
    
    return (
        <div className="mb-10">
            
            <div className="card h-96  shadow-xl image-full">
                <figure> {imageUrl && <img className="w-80 h-96" src={imageUrl} alt={`${name} Poster`} />}</figure>
                
                <div className="card-body h-96">
                {
                     runtime ? (
                        <div className="bg-back px-10 text-white badge badge-outline ml-16">
                          {runtime} Minutes
                        </div>
                      ) : null
                }
                    <div className="mt-6">
                    <h2 className="font-bold text-3xl flex items-center justify-center">{name}</h2>
                    <p>Genres : {genres.join(", ")}</p>
                    <p>Type: {type}</p>
                    </div>
                    <p>{time ? ` Schedule: ${time} on ${days.join(", ")}` : null}</p>
                    <div>
                        <Link to = {`/show/${id}`}><button className="btn bg-green-700 px-6  -ml-8 mt-28 text-white rounded-r-3xl border-0">Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Show;