
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText'


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};



// function getStyles(name, interestIn, theme) {
//     return {
//         fontWeight:
//             interestIn.indexOf(name) === -1
//                 ? theme.typography.fontWeightRegular
//                 : theme.typography.fontWeightMedium,
//     };
// }

export default function MultipleSelect({ handleNextClick, updateForm, handleSubmit, setCount, count, gender, interested_in,  }) {
    const theme = useTheme();


    return (
        <div>
            <label className='label'>
                Let's get personal
            </label>
   


            <FormControl sx={{ padding: 3, m: 1, width: 300 }}>
                <InputLabel 
                    sx={{padding: 3}}
                    id="demo-multiple-name-label"
                >
                    Select
                </InputLabel>

                <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-multiple-name"
                    name="gender"
                    value={gender}
                    onChange={updateForm}
                    input={<OutlinedInput label="Name" />}
                    MenuProps={MenuProps}
                >

                    <MenuItem value="female">Female</MenuItem>
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value="non-binary">Non-Binary</MenuItem>
                    <MenuItem value="trans">Trans</MenuItem>
                </Select>
                <FormHelperText sx={{
                    fontSize: 18,
                    paddingTop: 2
                    
                }}
                id='my-helper-text'
                >
                    How do you indentify?
                </FormHelperText>
            </FormControl> 

            <FormControl sx={{ padding: 3, m: 1, width: 300 }}>
                <InputLabel 
                    id="demo-multiple-name-label"
                    sx={{ padding: 3 }}
                >
                    Select
                </InputLabel>
                <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    name="interested_in"
                    value={interested_in}
                    onChange={updateForm}
                    input={<OutlinedInput label="Name" />}
                    MenuProps={MenuProps}
                >
                    <MenuItem value="female">Female</MenuItem>
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value="non-binary">Non-Binary</MenuItem>
                    <MenuItem value="trans">Trans People</MenuItem>
                    <MenuItem value="everyone">Everyone</MenuItem>
                   
                </Select>
                <FormHelperText 
                id='my-helper-text'
                    sx={{
                        fontSize: 18,
                        paddingTop: 2

                    }}
                >
                    Who are you interested in?                         
                </FormHelperText>
            </FormControl>
            <br></br>
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
                    className='button-create-profile'
                    type="submit"
                    onClick={handleSubmit}
                    >
                        Submit
                    </button>
                    <br>
                    </br>
        </div>
    );
}