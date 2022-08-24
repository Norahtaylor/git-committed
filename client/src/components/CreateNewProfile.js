import {useState} from 'react'
import { useHistory } from "react-router-dom"
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Input from '@mui/material/Input'
import FormHelperText from '@mui/material/FormHelperText'
import Practice from './Practice'
import Footer from './Footer'

function CreateNewProfile({currentUser, setUser}) {
    const [count, setCount] = useState(1)
    const history = useHistory();
    const [form, setForm] = useState({
        first_name: "",
        age: "",
        location: "",
        hometown: "",

        education: "",
        bio: "",
        gender: "",
        interested_in: "",
        language: "",
        profile_photo: "",
    })
    const [error, setError] = useState()

    function handleSubmit(e) {
        e.preventDefault()
        //POST REQUEST TO CREATE PROFILE
        
        fetch(`/user_accounts/${currentUser.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
             form
            )

        })
        .then(res => res.json())
        .then((user) => setUser(user))

        console.log(currentUser)
        history.push('/myprofile')
     
    }


    function handleNextClick() {
        setCount((count) => count+ 1)       
    }

    const updateForm = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

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
                        onClick={()=> handleNextClick()}
                    > 
                        Go Back to Start 
                    </button>
            </div>
         ) :null
        }
            <form>
                {count === 1  ?  (  //when the page count is 1 show this 
                <div className='field1'>
                    <label className='label'>
                        Create Your Profile
                    </label>
                    <FormControl>
                        <InputLabel htmlFor='my-input' > 
                        Your Name </InputLabel>
                        <Input 
                            id="my-input" 
                            aria-describedby='my-helper-text'
                            name="first_name"
                            onChange={updateForm} 
                            value={form.first_name}
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
                            value={form.age}
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
                            value={form.location}
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
                            value={form.hometown}
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
                        setCount((count) => count- 1) )
                        }
                        > 
                    
                        PREV 
                    </button>
                    <button 
                        className="nextBtn" 
                        type="button"
                        onClick={()=> handleNextClick()}
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
                            Let's add some details
                            </label>

                            <FormControl>
                                <InputLabel htmlFor='my-input' >
                                Education </InputLabel>
                                <Input
                                    id="my-input"
                                    aria-describedby='my-helper-text'
                                    name="education"
                                    value={form.education}
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
                                    value={form.language}
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
                                    value={form.bio}
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
                                    value={form.profile_photo}
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
                        <Practice 
                            interested_in={form.interested_in} 
                            gender={form.gender}
                            count={count}
                            setCount={setCount} 
                            handleNextClick={handleNextClick}
                            handleSubmit={handleSubmit}
                            updateForm={updateForm}
                        /> : null
                    }
                </div>

            <Footer />
    </div>
  
  )
}

export default CreateNewProfile;