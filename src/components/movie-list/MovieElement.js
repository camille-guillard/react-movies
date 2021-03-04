import React, { Component } from 'react';

export default class MovieElement extends Component {

    render() {
        return (
            <div className="col-lg-3 col-sm-4 col-sm-6 p-2">
                <div className="card">
                    <img alt="film" src="https://fr.web.img6.acsta.net/medias/nmedia/18/36/25/10/19106210.jpg" className="card-img-top"/>
                    <div className="card-body">
                        <h5 className="card-title">ROCKY</h5>
                        <p className="card-text">
                            23 mars 1977 / 1h 59min / Action, Drame <br/>
                            Date de reprise 8 septembre 2021 <br/>
                            De John G. Avildsen <br/>
                            Avec Sylvester Stallone, Talia Shire, Burt Young <br/>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
} 