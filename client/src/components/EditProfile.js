import { useState } from 'react'
import { useHistory } from "react-router-dom"
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Input from '@mui/material/Input'
import FormHelperText from '@mui/material/FormHelperText'
import TextField from '@mui/material/TextField';
import Form from './Form.css';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import EditProfile2 from './EditProfile2'
import Footer from './Footer'


function EditProfile({ user, editDetails, setUser, setEditDetails  }) {
    const [count, setCount] = useState(1)
    const history = useHistory();
    const [error, setError] = useState()

     console.log(editDetails)

    function handleSubmit(e) {
       e.preventDefault()
        //POST REQUEST TO CREATE PROFILE
         fetch(`/user_accounts/${user.id}`, {
             method: "PATCH",
             headers: {
                 "Content-Type": "application/json"
             },
             body: JSON.stringify(
                 editDetails
             )

         })
             .then(res => res.json())
             .then((user) => setUser(user))
         history.push('/myprofile')
     }

    function handleNextClick() {
        setCount((count) => count + 1)
    }

    const updateForm = (e) => {
        setEditDetails({
            ...editDetails,
            [e.target.name]: e.target.value,
        })
    }
    console.log(editDetails.hometown)

    return (

        <div className='form-box'>
            <h5 className='form-box-h5'> Steps: {count} of 3
            </h5>
            {count === 0 ? (
                <div>
                    <h1
                        style={{
                            color: "#7D5EF1",
                            padding: "100px",
                        }}
                    >Oops too far!</h1>
                    <button

                        className="startBtn"
                        type="button"
                        onClick={() => handleNextClick()}
                    >
                        Go Back to Start
                    </button>
                </div>
            ) : null
            }
            <form>
                {count === 1 ? (  //when the page count is 1 show this 
                    <div className='field1'>
                        <label className='label'>
                            Edit your profile
                        </label>
                        <FormControl>
                            <InputLabel htmlFor='my-input' >
                                Your Name </InputLabel>
                            <Input
                                id="my-input"
                                aria-describedby='my-helper-text'
                                name="first_name"
                                onChange={updateForm}
                                value={editDetails.first_name}
                            />
                            <FormHelperText id='my-helper-text'
                            >
                                Name potential matches will see.</FormHelperText>
                        </FormControl>

                        <FormControl>
                            <InputLabel htmlFor='my-input' >
                                Age </InputLabel>
                            <Input
                                id="my-input"
                                aria-describedby='my-helper-text'
                                name="age"
                                onChange={updateForm}
                                value={editDetails.age}
                            />
                            <FormHelperText id='my-helper-text'
                            >
                                How old are you?</FormHelperText>
                        </FormControl>
                        <br></br>
                        <FormControl>
                            <InputLabel htmlFor='my-input'
                            >
                                Neighborhood</InputLabel>
                            <Input
                                id="my-input"
                                aria-describedby='my-helper-text'
                                name="location"
                                onChange={updateForm}
                                value={editDetails.location}
                            />
                            <FormHelperText id='my-helper-text'
                            >
                                Where do you live?
                            </FormHelperText>
                        </FormControl>
                        <FormControl>
                            <InputLabel htmlFor='my-input' >
                                Hometown </InputLabel>
                            <Input
                                id="my-input"
                                aria-describedby='my-helper-text'
                                name="hometown"
                                value={editDetails.hometown}
                                onChange={updateForm}
                            />
                            <FormHelperText id='my-helper-text'
                            >
                                Where did you grow up?</FormHelperText>
                        </FormControl>
                        <br ></br>
                        <button
                            className="prevBtn"
                            type="button"
                            onClick={(() =>
                                setCount((count) => count - 1))
                            }
                        >
                            {console.log(count)}
                            PREV
                        </button>
                        <button
                            className="nextBtn"
                            type="button"
                            onClick={() => handleNextClick()}
                        >
                            NEXT
                        </button>
                    </div>) : null}
            </form>

            {/* PAGE TWO  */}
            {count === 2 ? (
                <>

                    <div className='field1'>
                        <label className='label'>
                           
                        </label>
                        <br></br>

                        <FormControl>
                            <InputLabel htmlFor='my-input' >
                                Education </InputLabel>
                            
                            <Input
                                id="my-input"
                                aria-describedby='my-helper-text'
                                name="education"
                                value={editDetails.education}
                                onChange={updateForm}
                            />
                            <FormHelperText id='my-helper-text'
                            >
                                Where did you go to school or coding bootcamp?</FormHelperText>
                        </FormControl>
                       
                        <FormControl>
                            <InputLabel htmlFor='my-input' >
                                Coding Language</InputLabel>
                            <Input
                                id="my-input"
                                aria-describedby='my-helper-text'
                                name="language"
                                value={editDetails.language}
                                onChange={updateForm}
                            />
                            <FormHelperText id='my-helper-text'
                            >
                                What's your favorite coding language?
                            </FormHelperText>
                        </FormControl>
                        <br></br>
                        <FormControl>
                            <InputLabel htmlFor='my-input'
                            >
                                Tell us about yourself </InputLabel>
                            <Input
                                id="my-input"
                                aria-describedby='my-helper-text'
                                name="bio"
                                value={editDetails.bio}
                                onChange={updateForm}
                            />
                            <FormHelperText id='my-helper-text'
                            >
                                This bio will be displayed to potential matches
                            </FormHelperText>
                        </FormControl>
                        <FormControl>
                            <InputLabel htmlFor='my-input' >
                                Insert photo URL </InputLabel>
                            <Input
                                id="my-input"
                                aria-describedby='my-helper-text'
                                name="profile_photo"
                                value={editDetails.profile_photo}
                                onChange={updateForm}
                            />
                            <FormHelperText id='my-helper-text'
                            >
                                Add a profile photo</FormHelperText>
                        </FormControl>
                        <br></br>
                        <button
                            className="prevBtn"
                            type="button"
                            onClick={(() =>
                                setCount(count - 1))
                            }
                        >
                            PREV
                        </button>
                        <button
                            className="nextBtn"
                            type="button"
                            onClick={() => handleNextClick()}
                        >
                            NEXT
                        </button>
                    </div>
                </>
            ) : null}

            {/* PAGE THREE  */}
            <div>
                {count === 3 ?
                    <EditProfile2
                        count={count}
                        setCount={setCount}
                        handleNextClick={handleNextClick}
                        handleSubmit={handleSubmit}
                        updateForm={updateForm}
                        editDetails={editDetails}
                    /> : null
                }
            </div>

            <Footer />
        </div>

    )
}

export default EditProfile;