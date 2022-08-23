import { useState } from 'react'
import { useHistory } from "react-router-dom"
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Input from '@mui/material/Input'
import FormHelperText from '@mui/material/FormHelperText'
import CreateNewProfile3 from './CreateNewProfile3'
import TextField from '@mui/material/TextField';
import Form from './Form.css'

function CreateNewProfile2({ count, setCount, handleNextClick }) {
    
console.log(count)
console.log(handleNextClick)
    return (
        <>
        <div>test</div>
        <div className='form-box'>
          
                <div className='field1'>
                    <label className='label'>
                        Let's add some details
                    </label>
                    <FormControl>
                        <InputLabel htmlFor='my-input' >
                            Coding language</InputLabel>
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

                    <FormControl>
                        <InputLabel htmlFor='my-input' >
                            Education </InputLabel>
                        <Input
                            id="my-input"
                            aria-describedby='my-helper-text'
                            name="education"
                            value={form.education}
                            onChange={() => updateForm}
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
                            onChange={() => updateForm}
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
                            onChange={() => updateForm}
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
        </div>
        </>
    )
}

export default CreateNewProfile2;