import { useParams } from "react-router-dom";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useEffect, useState } from "react";
import TicketBookingForm from "../../../Components/TicketBookingForm/TicketBookingForm";

const ShowDetails = () => {
    const { id } = useParams();
    const [showDetails, setShowDetails] = useState(null);
    const imageUrl = showDetails && showDetails.image && showDetails.image.original
        ? showDetails.image.original
        : null;

    // for the form visibility keeping it to a state
    const [isFormVisible, setFormVisible] = useState(false);

    useEffect(() => {
        fetch(`https://api.tvmaze.com/shows/${id}`)
            .then((res) => res.json())
            .then((data) => setShowDetails(data));
    }, [id]);

    // for form visibility creating this function  
    const handleBookTicketClick = () => {
        setFormVisible(true);
    };

    return (
        <div className="-mt-10">



            {isFormVisible ? (
                <TicketBookingForm
                    showDetails={showDetails}
                    onClose={() => setFormVisible(false)}
                />
            ) : (
                showDetails && (

                    <div>
                        <SectionTitle heading={"Show Detail"}></SectionTitle>
                        <div className="hero min-h-screen">
                            <div className="hero-content flex-col lg:flex-row-reverse gap-5">
                                {imageUrl && <img className="max-w-sm rounded-lg shadow-2xl" src={imageUrl} alt={showDetails.name} />}
                                <div>
                                    <h1 className="text-5xl font-bold bg-gradient-to-r from-black to-green-700 inline-block text-transparent bg-clip-text">{showDetails.name}</h1>
                                    <div className="py-6 bg-gradient-to-r from-black to-green-700 inline-block text-transparent bg-clip-text" dangerouslySetInnerHTML={{ __html: showDetails.summary }}></div>
                                    <button onClick={handleBookTicketClick} className="btn bg-gradient-to-r from-green-700 to-black text-white">Book Ticket</button>

                                    {/* Opening the form while clicking the button */}
                                    {isFormVisible && (
                                        <TicketBookingForm
                                            showDetails={showDetails}
                                            onClose={() => setFormVisible(false)}
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            )}
        </div>
    );
};

export default ShowDetails;
