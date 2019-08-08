import * as React from 'react';
import {StoreState} from "../types";

export interface ICard {
    state: StoreState
}

export default class Card extends React.PureComponent<ICard> {
    render() {
        const {state} = this.props

        return (
            <p>
                This is a Card List Page. Now Value: {state.value}
            </p>
        )
    }
}