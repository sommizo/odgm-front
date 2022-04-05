import {
    Button,
    Icon,
    Grid,
    Radio,
    RadioGroup,
    FormControlLabel,
    Checkbox,
} from '@mui/material'
import { styled } from '@mui/system'
import { Span } from 'app/components/Typography'
import React, { useState, useEffect } from 'react'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import { DatePicker } from '@mui/lab'

const TextField = styled(TextValidator)(() => ({
    width: '100%',
    marginBottom: '16px',
}))

const NaturePrestationForm = () => {
    const [state, setState] = useState({
        date: new Date(),
    })

    useEffect(() => {
        ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
            console.log(value)

            if (value !== state.password) {
                return false
            }
            return true
        })
        return () => ValidatorForm.removeValidationRule('isPasswordMatch')
    }, [state.password])

    const handleSubmit = (event) => {
        // console.log("submitted");
        // console.log(event);
    }

    const handleChange = (event) => {
        event.persist()
        setState({
            ...state,
            [event.target.name]: event.target.value,
        })
    }

    const handleDateChange = (date) => {
        setState({ ...state, date })
    }

    const {
        libelle,
        statut
    } = state

    return (
        <div>
            <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
                <Grid container spacing={6}>
                    <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                        <TextField
                            type="text"
                            name="libelle"
                            id="standard-basic"
                            onChange={handleChange}
                            value={libelle || ''}
                            validators={[
                                'required',
                                'minStringLength: 4',
                                'maxStringLength: 9',
                            ]}
                            label="Nom de Prestation (longueur Min 4, longueur Max 20)"
                            errorMessages={['Ce champs est obligatoire']}
                        />
                        
                        <RadioGroup
                            sx={{ mb: 2 }}
                            value={statut || ''}
                            name="statut"
                            onChange={handleChange}
                            row >
                            <FormControlLabel
                                value="Active"
                                control={<Radio color="secondary" />}
                                label="Activé"
                                labelPlacement="end"
                            />
                            <FormControlLabel
                                value="Desactive"
                                control={<Radio color="secondary" />}
                                label="Desactivé"
                                labelPlacement="end"
                            />
                        </RadioGroup>
                    </Grid>
                </Grid>
                <Button color="primary" variant="contained" type="submit">
                    <Icon>save</Icon>
                    <Span sx={{ pl: 1, textTransform: 'capitalize' }}>
                        Ajouter
                    </Span>
                </Button>
                <Button color="primary" variant="contained" type="submit">
                    <Icon>close</Icon>
                    <Span sx={{ pl: 1, textTransform: 'capitalize' }}>
                        Annuler
                    </Span>
                </Button>
            </ValidatorForm>
        </div>
    )
}

export default NaturePrestationForm
