import React, { Component } from 'react';
import Style from './MovieElement.module.scss'

export default class MovieElement extends Component {

    mouseEnter= () => {
        this.props.updateSelectedMovie(this.props.movie.title)
    }

    render() {
        return (
            <div onClick={ this.mouseEnter } className={ "d-flex flex-row bg-light " + Style.container }>
                <img alt="film" width="150" height="200" alt="film" src={ this.props.movie.img }/>
                <div className="flex-fill d-flex flex-column p-3">
                    <h5>{ this.props.movie.title }</h5>
                    <hr className="w-100" />                        
                    <span className="flex-fill">{ this.props.movie.details }</span>
                    <div className="d-flex flex-row justify-content-end">
                        { this.props.isFavori ? (
                            <button
                                className="btn btn-small btn-danger"
                                onClick={ () => {this.props.removeFavori(this.props.movie.title)}}
                            >Remove</button>
                        ) : (
                            <button
                                className="btn btn-small btn-primary"
                                onClick={ () => {this.props.addFavori(this.props.movie.title)}}
                            >Add</button>
                        ) }
                    </div>

                </div>
            </div>
        );
    }
} 