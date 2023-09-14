import React, { Component } from 'react'

export default class Cart extends Component {
    arrayCart = [
        {
            contentH2: "Fresh new layout",
            contentP: "With Bootstrap 5, we've created a fresh new layout for this template!",
        },
        {
            contentH2: "Free to download",
            contentP: "As always, Start Bootstrap has a powerful collectin of free templates.",
        },
        {
            contentH2: "Jumbotron hero header",
            contentP: "The heroic part of this template is the jumbotron hero header!",
        },
        {
            contentH2: "Fresh new layout",
            contentP: "We've created some custom feature boxes using Bootstrap icons!",
        },
        {
            contentH2: "Simple clean code",
            contentP: "We keep our dependencies up to date and squash bugs as they come!",
        },
        {
            contentH2: "A name you trust",
            contentP: "Start Bootstrap has been the leader in free Bootstrap templates since 2013!",
        }

    ]
    cartTitle = () => {
        return this.arrayCart.map((content) => {
            let { contentH2, contentP } = content;
            return <div className="col-lg-6 col-xxl-4 mb-5">
                <div className="card bg-light border-0 h-100">
                    <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                        <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i className="bi bi-collection" /></div>
                        <h2 className="fs-4 fw-bold">{contentH2}</h2>
                        <p className="mb-0">{contentP}</p>
                    </div>
                </div>
            </div>
        })

    }
    render() {
        return (
            <section className='pt-4'>
                <div className="container px-lg-5">
                    <div className="row gx-lg-5">
                        {this.cartTitle()}
                    </div>
                </div>
            </section>
        )
    }
}
