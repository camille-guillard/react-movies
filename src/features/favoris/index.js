import React from 'react';
import FavoriList from './components/favori-list/FavoriList';
import Loading from '../../components/utils/Loading';


export default (props) => {
    return (
        <>
            { 
                props.loaded ? (
                <div className="d-flex flex-row flex-fill pt-4 p-2" >
                <FavoriList 
                    favoris= {props.favoris}
                    removeFavori= {props.removeFavori}
                />
                </div>
                ) : (
                <Loading />
          )}
        </>
    )
}