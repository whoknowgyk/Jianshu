import React , { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";

class Write extends PureComponent {
    render() {

        const login = this.props.loginStatus;

        if (login){
            return(
                <div>写文章</div>
            )
        }
        else {
            return <Redirect to='/login'/>
        }


    }
}

const mapStateToProps = (state) => ({
    loginStatus: state.get('login').get('login')
});


export default connect(mapStateToProps,null)(Write);