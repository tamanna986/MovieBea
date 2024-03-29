import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
 <footer className="footer p-10   md:pt-32  pl-20 md:pl-10 bg-black text-white">
            <aside className="-mt-6">
                <div className="flex gap-1 items-center">
                <img className="w-16" src="https://i.ibb.co/DDfshgW/m-removebg-preview.png" alt="" />
                <h1 className="text-xl font-bold  inline-block text text-green-800">MovieBea</h1>
                </div>
                {/* <img className="w-44" src="https://i.ibb.co/mcLmJpN/m1-removebg-preview.png" alt="" /> */}
                <p>Copyright © 2023 - All right reserved by SCC MovieBea</p>
            </aside>

            <nav>
                <header className="footer-title text-center  ">Movie Category</header>
                
                    <a className="link link-hover" href="/about">English</a>
                    <a className="link link-hover" href="/review">China</a>
                    <a className="link link-hover" href="/review">Hindi</a>
                    <a className="link link-hover" href="/review">Korean</a>
                    <a className="link link-hover" href="/review">Upcoming Movies</a>
              

            </nav>
            <nav>
                <header className="footer-title text-center ml-10 ">Company</header>
                <div className="flex gap-10 items-center justify-center">
                    <a className="link link-hover" href="/about">About us</a>
                    <a className="link link-hover" href="/review">Reviews</a>
                </div>

            </nav>

            <nav>
            <header className="footer-title text-center -ml-8 md:ml-6  pl-16 md:pl-0 ">Contact</header>   
                <div className="grid grid-flow-col gap-4">
                    <Link to="www.linkedin.com/in/tamanna-jahan-mim-659227246">      <a><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
                        <path fill="#0078d4" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z"></path><path d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z" opacity=".05"></path><path d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z" opacity=".07"></path><path fill="#fff" d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"></path>
                    </svg></a></Link>

                    <Link to="mailto:tamannajahan987@gmail.com">
                        <a><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
                            <path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"></path><path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"></path><polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"></polygon><path fill="#c62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"></path><path fill="#fbc02d" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"></path>
                        </svg></a>
                    </Link>
                    <Link to="https://github.com/tamanna986">
                        <a> <img className="w-8" src="https://i.ibb.co/tXqhHpJ/icons8-github-48.png" alt="" /></a>

                    </Link>


                </div>
            </nav>

        </footer>
        </div>
    );
};

export default Footer;