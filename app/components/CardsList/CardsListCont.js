/**
 * Created by dionid on 20.02.17.
 */

import React, {Component} from "react";
import {connect} from "react-redux";
import CardsListPR from "./CardsListPR";
import {getAllCardsAsArray} from "../../reducers/index";
import {requestCards} from "../../actions/index";
import {getCardsNumber,isCardsOrHistoryInLoading} from "../../reducers/index";

class CardsListCont extends Component{

    static propTypes = {
        cards: React.PropTypes.array.isRequired,
        requestCards: React.PropTypes.func.isRequired
    };

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.cards !== this.props.cards;
    }

    componentDidMount(){
        this.props.requestCards();
    }

    render(){
        return (
            <CardsListPR {...this.props} />
        )
    }
}

const mapStateToProps = (state,ownProps)=>{
    return {
        cards: getAllCardsAsArray(state),
        cardsNumber: getCardsNumber(state),
        loading: isCardsOrHistoryInLoading(state)
    }
};

const mapDispatchToProps = (dispatch)=>{
    return {
        requestCards: ()=> dispatch(requestCards())
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(CardsListCont);