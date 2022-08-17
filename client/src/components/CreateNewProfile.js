import {useState} from 'react'
import { useHistory } from "react-router-dom"
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Input from '@mui/material/Input'
import FormHelperText from '@mui/material/FormHelperText'
import TextField from '@mui/material/TextField';
import Form from './Form.css' 
import CreateNewProfile2 from './CreateNewProfile'
import CreateNewProfile3 from './CreateNewProfile3';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Practice from './Practice'


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

    // const handleChange = (event) => {
    //     setGender(event.target.value);
    //     console.log(gender)
    // };

    function handleNextClick(e) {
        e.preventDefault()
        setCount((count) => count+1)    
        console.log(count)    
    }

    const updateForm = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
        console.log(e.target)
        console.log(form)
    }
    console.log(count)

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
            </form>

                    {/* PAGE TWO  */}
       
                    {count === 2 ? (  
                    <CreateNewProfile2 
                    handleNextClick={handleNextClick} 
                    count={count}/>
                        // <div className='field1'>
                        //     <label className='label'>
                        //     Let's add some details
                        //     </label>
                        //     <FormControl>
                        //         <InputLabel htmlFor='my-input' >
                        //              Birthday</InputLabel>
                        //         <Input
                        //             id="my-input"
                        //             aria-describedby='my-helper-text'
                        //             name="birthday"
                        //             value={form.birthday}
                        //             onChange={updateForm} 
                        //         />
                        //         <FormHelperText id='my-helper-text'
                        //     >
                        //         When's your birthday?
                        //             </FormHelperText>
                        //     </FormControl>

                        //     <FormControl>
                        //         <InputLabel htmlFor='my-input' >
                        //         Education </InputLabel>
                        //         <Input
                        //             id="my-input"
                        //             aria-describedby='my-helper-text'
                        //             name="education"
                        //             value={form.education}
                        //             onChange={updateForm} 
                        //         />
                        //         <FormHelperText id='my-helper-text'
                        //         >
                        //         Where did you go to school or coding bootcamp?</FormHelperText>
                        //     </FormControl>
                        //     <br></br>
                        //     <FormControl>
                        //         <InputLabel htmlFor='my-input'
                        //         >
                        //         Tell us about yourself </InputLabel>
                        //         <Input
                        //             id="my-input"
                        //             aria-describedby='my-helper-text'
                        //             name="bio"
                        //             value={form.bio}
                        //             onChange={updateForm} 
                        //         />
                        //         <FormHelperText id='my-helper-text'
                        //         >
                        //             This bio will be displayed to potential matches
                        //         </FormHelperText>
                        //     </FormControl>
                        //     <FormControl>
                        //         <InputLabel htmlFor='my-input' >
                        //             Insert photo URL </InputLabel>
                        //         <Input
                        //             id="my-input"
                        //             aria-describedby='my-helper-text'
                        //             name="photo"
                        //             value={form.photo}
                        //             onChange={updateForm} 
                        //         />
                        //         <FormHelperText id='my-helper-text'
                        //         >
                        //             Add a profile photo</FormHelperText>
                        //     </FormControl>
                        //     <br></br>
                        // <button
                        //     className="prevBtn"
                        //     type="submit"
                        //     onClick={(() =>
                        //         setCount(count - 1))
                        //     }
                        // >
                        //     PREV
                        // </button>
                        // <button
                        //     className="nextBtn"
                        //     type="submit"
                        //     onClick={handleNextClick}
                        // >
                        //     NEXT
                        // </button>
                        // </div>
                ) : null} 

                {/* PAGE THREE  */}
                <div>
                    {count === 3 ?
                        <CreateNewProfile3 count={count} /> : null
                    }
                </div>

                {/* {count === 3 ? (  
                    <div className='field1'>
                        <label className='label'>
                            Time to get personal 
                        </label>
                    </div>       
                ) : null}  */}
        

            {count === 4 ? 
            <Practice newCount={count} /> : null }
            
        
    </div>
  
  )
}

export default CreateNewProfile;