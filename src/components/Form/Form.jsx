import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Switch } from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';
import CheckIcon from '@mui/icons-material/Check';
import {
    Box,
    Checkbox,
    FormControlLabel,
    InputAdornment,
    MenuItem,
    Radio,
    RadioGroup,
    Select
} from '@mui/material';
import styles from './styles';

const Form = () => {
    const {
        handleSubmit,
        control,
        formState: { errors },
        reset
    } = useForm();

    const initialFormValues = {
        name: '',
        password: '',
        inputText: '',
        rememberMe: false,
        switch: false,
        radioSelection: 'radio1',
        dropdownOption: 'option1',
    };

    return (
        <Box sx={styles.main}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name="name"
                    control={control}
                    rules={{ required: 'Name is required' }}
                    render={({ field }) => (
                        <Box sx={styles.inputWrapper}>
                            <Box sx={styles.label}>Username</Box>
                            <TextField
                                placeholder="Enter username"
                                variant="outlined"
                                fullWidth
                                error={!!errors.name}
                                helperText={errors.name?.message}
                                InputProps={{
                                    endAdornment: errors.name && (
                                        <InputAdornment position="end">
                                            <ErrorIcon color="error" sx={styles.errorIcon} />
                                        </InputAdornment>
                                    ),
                                }}
                                {...field}
                                sx={field.value ? {...styles.input, ...styles.inputValue} : styles.input}
                            />
                        </Box>
                    )}
                />

                <Controller
                    name="password"
                    control={control}
                    rules={{ required: 'Password is required', validate: validatePassword}}
                    render={({ field }) => (
                       <Box sx={{...styles.inputWrapper, ...styles.passwordInput}}>
                           <Box sx={styles.label}>Password</Box>
                           <TextField
                               placeholder="Enter password"
                               variant="outlined"
                               fullWidth
                               error={!!errors.password}
                               helperText={errors.password?.message}
                               InputProps={{
                                   endAdornment: errors.password && (
                                       <InputAdornment position="end" sx={styles.errorIcon}>
                                           <ErrorIcon color="error" />
                                       </InputAdornment>
                                   ),
                               }}
                               {...field}
                               sx={field.value ? {...styles.input, ...styles.inputValue} : styles.input}
                           />
                           {!errors.password && (
                               <Box sx={styles.passwordHint}>Your password is between 4 and 12 characters</Box>
                           )}
                       </Box>
                    )}
                />

                <Controller
                    name="inputText"
                    control={control}
                    rules={{ required: 'Error message informing me of a problem' }}
                    render={({ field }) => (
                        <Box sx={styles.inputWrapper}>
                            <Box sx={styles.label}>Input Text Label</Box>
                            <TextField
                                placeholder="Enter text"
                                variant="outlined"
                                fullWidth
                                error={!!errors.inputText}
                                helperText={errors.inputText?.message}
                                InputProps={{
                                    endAdornment: errors.inputText && (
                                        <InputAdornment position="end">
                                            <ErrorIcon color="error" sx={styles.errorIcon} />
                                        </InputAdornment>
                                    ),
                                }}
                                {...field}
                                sx={field.value ? {...styles.input, ...styles.inputValue} : styles.input}
                            />
                        </Box>
                    )}
                />

                <Controller
                    name="rememberMe"
                    control={control}
                    defaultValue={false}
                    render={({ field }) => (
                        <Box sx={styles.checkboxWrapper}>
                            <Checkbox
                                {...field}
                                label="Remember Me"
                                checkedIcon={<CheckIcon sx={styles.checkIcon}/>}
                                sx={styles.checkbox}
                            />
                            <Box>Remember me</Box>
                        </Box>

                    )}
                />

                <Controller
                    name="switch"
                    control={control}
                    defaultValue={false}
                    render={({ field }) => (
                        <Switch
                            {...field}
                            color="default"
                            sx={field.value ? {...styles.switch, ...styles.switchValue} : styles.switch}
                        />
                    )}
                />

                <Controller
                    name="radioSelection"
                    control={control}
                    defaultValue="radio1"
                    render={({ field }) => (
                        <Box sx={styles.inputWrapper}>
                            <Box sx={styles.label}>Radio Title</Box>
                            <RadioGroup
                                {...field}
                                sx={styles.radioGroup}
                            >
                                <FormControlLabel
                                    value="radio1"
                                    control={<Radio sx={styles.radio}/>}
                                    label="Radio selection 1"
                                />
                                <FormControlLabel
                                    value="radio2"
                                    control={<Radio sx={styles.radio}/>}
                                    label="Radio selection 2"
                                />
                                <FormControlLabel
                                    value="radio3"
                                    control={<Radio sx={styles.radio}/>}
                                    label="Radio selection 3"
                                />
                            </RadioGroup>
                        </Box>
                    )}
                />

                <Controller
                    name="dropdownOption"
                    control={control}
                    defaultValue="option1" // Set the default value to "option1"
                    rules={{ required: 'Select option' }}
                    render={({ field }) => (
                        <Box sx={styles.inputWrapper}>
                            <Box sx={styles.label}>Dropdown Title</Box>
                            <Select
                                {...field}
                                variant="outlined"
                                fullWidth
                                error={!!errors.dropdownOption}
                                sx={styles.select}
                            >
                                <MenuItem value="option1" sx={styles.option}>
                                    Dropdown option
                                </MenuItem>
                                <MenuItem value="option2" sx={styles.option}>
                                    Dropdown option 2
                                </MenuItem>
                                <MenuItem value="option3" sx={styles.option}>
                                    Dropdown option 3
                                </MenuItem>
                            </Select>
                            {errors.dropdownOption && (
                                <Box sx={styles.errorText}>{errors.dropdownOption.message}</Box>
                            )}
                        </Box>
                    )}
                />

                <Box sx={styles.buttons}>
                    <Button
                        sx={styles.cancelButton}
                        variant="contained"
                        color="primary"
                        onClick={handleCancelClick}
                    >
                        Cancel
                    </Button>
                    <Button
                        sx={styles.nextButton}
                        type="submit"
                        variant="contained"
                        color="primary"
                    >
                        Next
                    </Button>
                </Box>

            </form>
        </Box>
    );

    function onSubmit(data) {
        alert(JSON.stringify(data, null, 2));
    }

    function validatePassword(value) {
        if (value.length < 4 || value.length > 12) {
            return 'Incorrect password';
        }
        return true;
    }

    function handleCancelClick() {
        reset(initialFormValues);
    }
};

export default Form;
