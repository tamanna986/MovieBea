import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import Show from "../Show/Show";

const Shows = () => {
    const [allShow, setAllShow] = useState([]);
    useEffect(() =>{
        fetch('https://api.tvmaze.com/search/shows?q=all')
        .then(res => res.json())
        .then(data => setAllShow(data))
    },[])
    console.log(allShow.length, allShow)
    return (
        <div>
            <SectionTitle heading = {"Shows"}></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
                {
                    allShow.map(show =>
                       <Show
                       key = {show.index}
                       show = {show.show}
                       >

                       </Show> 
                        )
                }
            </div>
        </div>
    );
};

export default Shows;