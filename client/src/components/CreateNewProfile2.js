import { useState } from 'react'
import { useHistory } from "react-router-dom"
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Input from '@mui/material/Input'
import FormHelperText from '@mui/material/FormHelperText'
import CreateNewProfile3 from './CreateNewProfile3'
import TextField from '@mui/material/TextField';
import Form from './Form.css'

function CreateNewProfile2({count, setCount}) {
console.log(count)
    return (
        <>
        <div>test</div>
        <div className='form-box'>
            <h5 className='form-box-h5'> Steps: {count} of 4
            </h5>
            <form>
                {count === 2 ? (  
                    <div className='field1'>
                        <label className='label'>
                            Create Your Profile
                        </label>
                        <FormControl>
                            <InputLabel htmlFor='my-input' >
                                Your Name </InputLabel>
                            <Input id="my-input" aria-describedby='my-helper-text' />
                            <FormHelperText id='my-helper-text'>Name potential matches will see.</FormHelperText>
                        </FormControl>

                        <FormControl>
                            <InputLabel htmlFor='my-input' >
                                Age </InputLabel>
                            <Input id="my-input" aria-describedby='my-helper-text' />
                            <FormHelperText id='my-helper-text'>How old are you?</FormHelperText>
                        </FormControl>
                        <br></br>
                        <FormControl>
                            <InputLabel htmlFor='my-input' >
                                Neighborhood </InputLabel>
                            <Input id="my-input" aria-describedby='my-helper-text' />
                            <FormHelperText id='my-helper-text'>Where do you live?</FormHelperText>
                        </FormControl>
                        <FormControl>
                            <InputLabel htmlFor='my-input' >
                                Education </InputLabel>
                            <Input id="my-input" aria-describedby='my-helper-text' />
                            <FormHelperText id='my-helper-text'>Where did you go to school or coding bootcamp?</FormHelperText>
                        </FormControl>
                        <br ></br>
                        <button
                            className='button-create-profile'
                            type="submit"
                        >
                            Submit
                        </button>
                        <br>
                        </br>
                        <button
                            className="prevBtn"
                            type="submit"
                            onClick={() => setCount(count - 1)}
                        >
                            PREV
                        </button>
                        <button
                            className="nextBtn"
                            type="submit"
                            onClick={() => setCount(count + 1)}
                        >
                            NEXT
                        </button>

                    </div>
                ) : null}
                <div>
                    {count === 3 ?
                        <CreateNewProfile3 count={count} /> : null
                    }
                </div>

            </form>
        </div>
        </>
    )
}

export default CreateNewProfile2;