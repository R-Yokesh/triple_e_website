import React from 'react'

function ContactForm() {
    return (
        <section className='contact-form-sec'>
            <form>
                <label htmlFor="inputEmail4">Name</label>
                <div className="row form-split">
                    <div className="col-12 col-sm-6">
                        <input type="text" className="form-control" placeholder="FIRST" />
                    </div>
                    <div className="col-12 col-sm-6">
                        <input type="text" className="form-control" placeholder="LAST" />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="inputAddress">Email</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="EMAIL" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Message</label>
                    <textarea className="form-control" placeholder='TYPE YOUR MESSAGE HERE' id="exampleFormControlTextarea1" rows="7"></textarea>
                </div>
                <div className='form-button'>
                    <button>Send</button>
                </div>
            </form>
        </section>
    )
}

export default ContactForm
