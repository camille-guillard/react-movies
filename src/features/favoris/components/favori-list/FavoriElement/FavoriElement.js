import React, { Component } from 'react';
import Style from './FavoriElement.module.scss'

export default class FavoriElement extends Component {

    render() {
        return (
            <div onClick={ this.mouseEnter } className={ "d-flex flex-row bg-light " + Style.container }>
                <img alt="film" width="150" height="200" alt="film" src={ this.props.favori.img }/>
                <div className="flex-fill d-flex flex-column p-3">
                    <h5>{ this.props.favori.title }</h5>
                    <hr className="w-100" />                        
                    <span className="flex-fill">{ this.props.favori.details }</span>
                    <div className="d-flex flex-row justify-content-end">
                        <button
                            className="btn btn-small btn-danger"
                            onClick={ () => {this.props.removeFavori(this.props.favori.title)}}
                        >Remove</button>
                    </div>

                </div>
            </div>
        );
    }
} 