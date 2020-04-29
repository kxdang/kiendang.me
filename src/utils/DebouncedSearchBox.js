import React, { Component } from 'react';

export default class SearchBox extends Component {
    timerId = null;

    state = {
        value: this.props.currentRefinement
    };

    onChangeDebounced = event => {
        const { refine, delay } = this.props;
        const value = event.currentTarget.value;

        clearTimeout(this.timerId);
        this.timerId = setTimeout(() => refine(value), delay);

        this.setState(() => ({
            value
        }));
    };

    render() {
        const { value } = this.state;

        return (
            <div className="ais-SearchBox">
                <form className="ais-SearchBox-form" role="search">
                    <input
                        className="ais-SearchBox-input"
                        value={value}
                        onChange={this.onChangeDebounced}
                        placeholder="Search here..."
                    />
                    <svg viewBox="0 0 40 40" className="ais-SearchBox-submitIcon"><path d="M26.804 29.01c-2.832 2.34-6.465 3.746-10.426 3.746C7.333 32.756 0 25.424 0 16.378 0 7.333 7.333 0 16.378 0c9.046 0 16.378 7.333 16.378 16.378 0 3.96-1.406 7.594-3.746 10.426l10.534 10.534c.607.607.61 1.59-.004 2.202-.61.61-1.597.61-2.202.004L26.804 29.01zm-10.426.627c7.323 0 13.26-5.936 13.26-13.26 0-7.32-5.937-13.257-13.26-13.257C9.056 3.12 3.12 9.056 3.12 16.378c0 7.323 5.936 13.26 13.258 13.26z"></path></svg>
                </form>
            </div >
        );
    }
}

