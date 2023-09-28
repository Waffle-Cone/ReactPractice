import {CardContainer} from '../UI/Card.jsx';
import useLoad from '../api/useLoad.js';
import UserCard from '../Entity/user/userCard.jsx';
import "./Students.scss";



function Students(){
   
    //Initialisation ------------------------------------------------------
    const newStudent = {
        "UserFirstname": "gcmcghc", 
        "UserLastname": "nbcnbvvn", 
        "UserEmail": "K9999999@kingston.ac.uk", 
        "UserRegistered": 0, 
        "UserLevel": 4, 
        "UserYearID": 1, 
        "UserUsertypeID": 2, 
        "UserImageURL": "https://images.generated.photos/evdpMs0ZUOoMA0ACfCy98zzmy347YQxRmrPCWHp3v0g/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MzUzMTEyLmpwZw.jpg", 
        "UserUsertypeName": "Student", 
        "UserYearName": "2022-23"

    };

    const loggedInUserGroup = 13;
    const myGroupEndpoint = `/users/groups/${loggedInUserGroup}`

    //state  --------------------------------------------------------------
    const [students, setStudents,loadingMessage] = useLoad(myGroupEndpoint);

    //Handlers ------------------------------------------------------------
    const handleAdd = (newStudent) => {
        newStudent.UserID = Math.floor(Math.random() * 10000);
        setStudents([...students, newStudent]);
        console.log("student list length: " + students.length);
        

    };
    //View ----------------------------------------------------------------

    return(
        <>
            <h1>Students</h1>
            {   !students
                ? <p>{loadingMessage}</p>
                : (
                    <>
                        <CardContainer>
                            { students.map((student)=> <UserCard user ={student}  key={student.UserID}/>) }
                        </CardContainer> 
                        <button onClick={() => handleAdd(newStudent)}> Add student </button>
                    </>
            )}
        </>
        
    );
};

export default Students;