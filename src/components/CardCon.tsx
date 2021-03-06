import {connect} from 'react-redux';

import Card from "./Card";
import {StoreState} from "../types";

const mapStateToProps = (state: StoreState) => {
    return {
        state: state
    }
}

export default connect(mapStateToProps)(Card)