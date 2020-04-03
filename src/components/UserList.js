import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as UserActions from '../actions/UserActions';
import PropTypes from 'prop-types';
import React from 'react';


class UserList extends React.Component {
    renderData() {
        return <div>{this.props.user}</div>;
    }


    render() {
        return (
            <div className="">
                {this.props.user.length > 0 ?
                    this.renderData()
                    :
                    <div className="">
                        No Data
                    </div>
                }
            </div>
        );
    }
}

UserList.propTypes = {
    UserActions: PropTypes.object,
    user: PropTypes.array
};

function mapStateToProps(state) {
    return {
        user: state.user
    };
}

function mapDispatchToProps(dispatch) {
    return {
        UserActions: bindActionCreators(UserActions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserList);