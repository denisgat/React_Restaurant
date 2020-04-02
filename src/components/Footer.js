import React from 'react';

function Footer() {
    return (
        <div id="footer" style={{}} className="row">
            <div className="col-6 p-5">
                <p>
                    Phone: +1-785-727-9191
                    <br></br>
                    <br></br>
                    Hours:
                    <br></br>
                    Mon: 9am-5pm
                    <br></br>
                    Tue: 9am-5pm
                    <br></br>
                    Wed: 9am-5pm
                    <br></br>
                    Thu: 9am-5pm
                    <br></br>
                    Fri: 9am-5pm
                    <br></br>
                    Sat: Closed
                    <br></br>
                    Sun: Closed
                    <br></br>
                </p>
            </div>
            <div className="col-6 p-5">
                Location:  348 E Main St, Lexington, KY 40507
                <br></br>
                <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12568.862453085565!2d-84.4926845!3d38.0420621!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x92c7783d2b2a2d15!2sAwesome%20Inc!5e0!3m2!1sen!2sus!4v1585846450903!5m2!1sen!2sus"
                 width="400" 
                 height="225" 
                 frameborder="0" 
                 style={{}} 
                 allowfullscreen="" 
                 aria-hidden="false" 
                 className="rounded my-3"
                 tabindex="0"></iframe>
            </div>
        </div>
    )
}

export default Footer