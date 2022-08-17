import {useState} from 'react'
import { useHistory } from "react-router-dom"
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Input from '@mui/material/Input'
import FormHelperText from '@mui/material/FormHelperText'
import TextField from '@mui/material/TextField';
import Form from './Form.css' 
import CreateNewProfile2 from './CreateNewProfile'
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

function CreateNewProfile() {
    const [count, setCount] = useState(1)
    const history = useHistory();
    const [form, setForm] = useState({
        name: "",
        age: "",
        neighborhood: "",
        hometown: "",

        birthday: "",
        education: "",
        bio: "",
        photo: "",

        // gender: "",
        interestedIn: "",
        budget: "",
        comment: ""
    })
    const [gender, setGender] = useState('')
    
    //how do i save these values to state and keep them there as i push next?

    const handleChange = (event) => {
        setGender(event.target.value);
        console.log(gender)
    };

    function handleNextClick(e) {
        e.preventDefault()
        setCount(count + 1)        
    }

    const updateForm = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
        console.log(e.target)
        console.log(form)
    }

    return (
    <div className='form-box'>
        <h5 className='form-box-h5'> Steps: {count} of 4 
        </h5>

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
                            name="name"
                            onChange={updateForm} 
                            value={form.name}
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
                            name="neighborhood"
                            onChange={updateForm} 
                            value={form.neighborhood}
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
                            name="education"
                            value={form.education}
                            onChange={updateForm} 
                        />
                        <FormHelperText id='my-helper-text'
                        >
                            Where did you grow up?</FormHelperText>
                    </FormControl>
                    <br ></br>
                    {/* <button 
                    className='button-create-profile'
                    type="submit"
                    >
                        Submit
                    </button>
                    <br>
                    </br> */}
                    <button 
                        className="prevBtn" 
                        type="submit"
                        onClick={(() => 
                        setCount(count - 1) )
                        }
                    > 
                        PREV 
                    </button>
                    <button 
                        className="nextBtn" 
                        type="submit"
                        onClick={handleNextClick}
                    > 
                        NEXT 
                    </button>

                </div>
                            ) : null} 

                    {/* PAGE TWO  */}
       
                    {count === 2 ? (  //when the page count is 1 show this 
                        <div className='field1'>
                            <label className='label'>
                            Let's add some details
                            </label>
                            <FormControl>
                                <InputLabel htmlFor='my-input' >
                                     Birthday</InputLabel>
                                <Input
                                    id="my-input"
                                    aria-describedby='my-helper-text'
                                    name="birthday"
                                    value={form.birthday}
                                    onChange={updateForm} 
                                />
                                <FormHelperText id='my-helper-text'
                            >
                                When's your birthday?
                                    </FormHelperText>
                            </FormControl>

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
                                    name="photo"
                                    value={form.photo}
                                    onChange={updateForm} 
                                />
                                <FormHelperText id='my-helper-text'
                                >
                                    Add a profile photo</FormHelperText>
                            </FormControl>
                            <br></br>
                        <button
                            className="prevBtn"
                            type="submit"
                            onClick={(() =>
                                setCount(count - 1))
                            }
                        >
                            PREV
                        </button>
                        <button
                            className="nextBtn"
                            type="submit"
                            onClick={handleNextClick}
                        >
                            NEXT
                        </button>
                        </div>
                ) : null} 

                {/* PAGE THREE  */}

                {count === 3 ? (  
                    <div className='field1'>
                        <label className='label'>
                            Time to get personal 
                        </label>

                        <Box sx={{ maxWidth: 400 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">How do you identify?</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    // id="demo-simple-select"
                                    id="demo-simple-select-standard"
                                    value={gender}
                                    label="gender"
                                    // onChange={updateForm} 
                                    onChange={handleChange}
                                >
                                    <MenuItem value="">
                                        <em></em>
                                    </MenuItem>
                                    <MenuItem 
                                    value={1}
                                    >
                                        Male</MenuItem>
                                    <MenuItem 
                                    value={2}
                                    >
                                        Female</MenuItem>
                                    <MenuItem 
                                    // value={nonBinary} 
                                    >
                                        Non-Binary</MenuItem>
                                    <MenuItem 
                                    // value={trans}
                                    >
                                        Trans</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        <br></br>

                        <Box variant="standard" sx={{ maxWidth: 400 }}>
                            <FormControl fullWidth>
                                <InputLabel 
                                // id="demo-simple-select-label"
                                    id="demo-simple-select-standard-label"
                                >Who are you interested in?</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    // value={form.interestedIn}
                                    label="interestedIn"
                                    // onChange={updateForm} 
                                    onChange={handleChange}
                                >
                                    {/* why do these values throw an error and the ones from /step3 dont?
                                    i am providing unavailable values, change to hard coded select field tomorrow 
                                    add a name variable with the options and then map through them and input them into the input fields */}
                                    <MenuItem 
                                    // value={male}
                                    >Male</MenuItem>
                                    <MenuItem 
                                    // value={female}
                                    >Female</MenuItem>
                                    <MenuItem 
                                    // value={nonBinary}
                                    >Non-Binary</MenuItem>
                                    <MenuItem 
                                    // value={trans}
                                    >Trans</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>

                        <FormControl>
                            <InputLabel htmlFor='my-input' >
                                Birthday </InputLabel>
                            <Input
                                id="my-input"
                                aria-describedby='my-helper-text'
                                name="birthday"
                            />
                            <FormHelperText id='my-helper-text'
                            >
                                How do you identify?
                                 </FormHelperText>
                        </FormControl>

                        <FormControl>
                            <InputLabel htmlFor='my-input' >
                                Education </InputLabel>
                            <Input
                                id="my-input"
                                aria-describedby='my-helper-text'
                                name="education"
                            />
                            <FormHelperText id='my-helper-text'
                            >
                                Where did you go to school or coding bootcamp?</FormHelperText>
                        </FormControl>
                        <br></br>
                        <FormControl>
                            <InputLabel htmlFor='my-input'
                            >
                                Tell us about yourself </InputLabel>
                            <Input
                                id="my-input"
                                aria-describedby='my-helper-text'
                                name="neighborhood"
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
                                name="education"
                            />
                            <FormHelperText id='my-helper-text'
                            >
                                Add a profile photo</FormHelperText>
                        </FormControl>
                        <br></br>
                        <button
                            className="prevBtn"
                            type="submit"
                            onClick={(() =>
                                setCount(count - 1))
                            }
                        >
                            PREV
                        </button>
                        <button
                            className="nextBtn"
                            type="submit"
                            onClick={handleNextClick}
                        >
                            NEXT
                        </button>
                    </div>
                ) : null} 
            </form>
    </div>
  
  )
}

export default CreateNewProfile;