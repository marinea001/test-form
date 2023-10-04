import colors from "../../helpers/colors";

const styles = {
    main: {
        fontWeight: 400,
        backgroundColor: colors.white,
        padding: '96px 98px',
        width: 'max-content',
        margin: '0 auto',
        '&>form': {
            display: 'flex',
            flexDirection: 'column',
            gap: '32px',
            alignItems: 'flex-start'
        },
        color: colors.grey
    },
    inputWrapper: {
        width: '564px',
        position: 'relative'
    },
    input: {
        position: 'relative',
        borderRadius: '8px',
        '& div': {
            borderRadius: '8px',
            borderColor: colors.purple,
            paddingRight: '0'
        },
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: colors.purple,
        },
        '& .MuiFormHelperText-root': {
            margin: 0,
            padding: 0,
            position: 'absolute',
            left: 0,
            bottom: '-23px',
            fontSize: '12px',
        },
    },
    inputValue: {
        '& .MuiOutlinedInput-root.Mui-hover .MuiOutlinedInput-notchedOutline': {
            border: `2px solid ${colors.purple}`,
        },
        '& .MuiOutlinedInput-notchedOutline': {
            border: `2px solid ${colors.purple}`,
        },
    },
    errorIcon: {
        width: 20,
        height: 20,
        position: 'absolute',
        right: '16px'
    },
    label: {
        marginBottom: '8px',
        fontWeight: 600,
        fontSize: '12px'
    },
    passwordHint: {
        fontSize: '12px',
        position: 'absolute',
        left: 0,
        bottom: '-19px',
        fontWeight: 400
    },
    passwordInput: {
        marginBottom: '19px'
    },
    checkboxWrapper: {
        display: 'flex',
        alignItems: 'center',
        gap: '16px'
    },
    checkbox: {
        padding: 0,
        color: colors.white,
        border: `1px solid ${colors.lightGrey}`,
        borderRadius: '8px',
        '&:hover': {
            backgroundColor: colors.white
        }
    },
    checkIcon: {
        color: colors.purple
    },
    switch: {
        padding: 0,
        width: '50px',
        height: '28px',
        borderRadius: '40px',
        overflow: 'visible',
        backgroundColor: colors.white,
        '& .MuiSwitch-thumb': {
            backgroundColor: colors.lightGrey,
        },
        '& > span:first-of-type': {
            padding: '5px',
            '&:hover': {
                backgroundColor: 'transparent'
            }
        },
        '& > span:last-child': {
            backgroundColor: colors.white,
            border: `1px solid ${colors.lightGrey}`,
            opacity: 1
        },
        '& .MuiSwitch-track': {
            borderRadius: '40px',
        },
    },
    switchValue: {
        overflow: 'hidden' ,
        backgroundColor: colors.purple,
        '& .MuiSwitch-thumb': {
            backgroundColor: colors.white,
        },
    },
    radioGroup: {
        flexDirection: 'column',
        gap: '10px'
    },
    errorText: {
        color: colors.red,
        fontSize: '12px',
        marginTop: '5px',
    },
    option: {
        padding: '16px',
        backgroundColor: `${colors.white} !important`,
        '&:hover': {
            color: colors.white,
            backgroundColor: `${colors.purple} !important`
        }
    },
    select: {
        paddingBottom: 0,
        paddingTop: 0,
        borderRadius: '8px',
        borderColor: `${colors.lightGrey} !important`,
        '& fieldset': {
            border: `2px solid ${colors.purple} !important`,
        }
    },
    buttons: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        '& > button': {
            padding: '16px',
            borderRadius: '8px',
            fontSize: '16px',
            textTransform: 'capitalize'
        }
    },
    cancelButton: {
        width: '172px !important',
        backgroundColor: colors.white,
        color: colors.purple,
        border: `1px solid ${colors.purple}`,
        '&:hover': {
            backgroundColor: colors.purple,
            color: colors.white
        }
    },
    nextButton: {
        width: '172px !important',
        backgroundColor: colors.purple,
        color: colors.white,
        border: `1px solid ${colors.purple}`,
        '&:hover': {
            backgroundColor: colors.white,
            color: colors.purple
        }
    },
    radio: {
        color: colors.lightGrey,
        '&.Mui-checked': {
            color: colors.purple,
        }}
}

export default styles