import PropTypes from 'prop-types';
import {Card} from '../../UI/Card.jsx';
import "./userCard.scss";

function UserCard ({user}){
    // Initialisation ------------------------------------------------------
    // State ---------------------------------------------------------------
    // View ----------------------------------------------------------------
    return (
        <div className='userCard'> 
        <Card>
        <p>{user.UserEmail.substring(0,8)}</p>
        <p>{`${user.UserFirstname} ${user.UserLastname}`}</p>
        <img src={user.UserImageURL} />
        </Card>
    </div> 
  

    );
}

UserCard.propTypes = {
    module: PropTypes.shape({
        UserEmail: PropTypes.string.isRequired,
        UserFirstname: PropTypes.string.isRequired,
        UserLastname: PropTypes.string.isRequired,
        UserImageURL: PropTypes.string.isRequired,
    })
};



export default UserCard;