import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is a warning from admin.</p>}
            <WrappedComponent {...props} />
        </div>
    );
};

const requireAuthnication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthunicated ? (
                <WrappedComponent {...props} />
            ) : (
                    <p>Welcome, please login to view message.</p>
                )}
        </div>
    );
}
const AdminComponent = withAdminWarning(Info);
const AuthInfo = requireAuthnication(Info);

// ReactDOM.render(<AdminComponent isAdmin={true} info="There are many info." />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthunicated={true} info="There are many info." />, document.getElementById('app'));