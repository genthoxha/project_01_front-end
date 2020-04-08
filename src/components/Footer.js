import React from "react";
import { connect } from 'react-redux'
import {countVehicle} from '../redux'


const Footer = () => {
    return (
        <div> Footer.js </div>
    )
};

const mapStateToProps = state => {
    return{
        count: state.count
    }
};

const mapDispatchToProps = dispatch =>{
    return{
        countVehicle: () => dispatch(countVehicle())
    }
};



export default connect(mapStateToProps, mapDispatchToProps)( Footer);
