import React from 'react';
import pic1 from './images/facebook.jpg';
import pic2 from './images/what.png';
import pic3 from './images/instagram.jpg';
import pic4 from './images/gmap.jpg';

const Foter = () => {
    return (
        <div>
            <footer className="footer">
                <div style={{ backgroundColor: "#000000", borderTopLeftRadius: "150px", borderBottomRightRadius: "100px", padding: '18px',border: '7px groove white' }}>
                    <div className="container">
                        <div className="row" style={{ color: "white" }}>
                            <div>
                                <br />
                                <h6>Contact Us</h6>
                                <p>Email: <a href="mailto:saimotors@gmail.com" style={{ textDecoration: 'none' }}>saimotors@gmail.com</a></p>
                                <p>Phone: <a href="tel:+8788747059" style={{ textDecoration: 'none' }}>91XXXXXXXXX</a></p>
                                <img src={pic1} alt="" width={"8%"} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <img src={pic2} alt="" width={"8%"} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <img src={pic3} alt="" width={"8%"} />
                                <br /><br />
                                <a href="https://maps.app.goo.gl/PV26EBN24syphErc7" style={{ textDecoration: 'none' }}>&nbsp;&nbsp;<i style={{ fontSize: "16px" }}><img src={pic4} alt="" width={"5%"} />&nbsp;&nbsp;&nbsp;&nbsp;https://maps.app.goo.gl</i></a>
                            </div>
                        </div>
                    </div>
                    <marquee style={{ color: "white", paddingLeft: '10px', paddingRight: '10px' }}>🛻 Sai-Motors, Nagar-Daund Highway, Kolgaon Phata, Srigonda Ahmednagar, Maharashtra 413728</marquee>                </div>
                
            </footer>
            <br/>
        </div>
    );
};

export default Foter;