import React, { useState } from "react";

import {
    Button,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    Typography,
} from "@material-ui/core";
import { FormProvider, useForm } from "react-hook-form";

import FormInput from "./CustomTextField";
import { commerce } from "../../lib/commerce";

const AddressForm = () => {
    const [shippingCountries, setShippingCountries] = useState([]);
    const [shippingCountry, setShippingCountry] = useState("");
    const [shippingSubdivions, setShippingSubdivions] = useState([]);
    const [shippingSubdivion, setShippingSubdivion] = useState("");
    const [shippingOptions, setShippingOptions] = useState([]);
    const [shippingOption, setShippingOption] = useState("");

    const methods = useForm();

    const fetchShippingCountries = async (checkoutTokenId) => {
        const {
            countries,
        } = await commerce.services.localeListShippingCountries(
            checkoutTokenId
        );
        setShippingCountries(countries);
    };

    return (
        <>
            <Typography variant="h6" gutterBottom>
                Shipping Address
            </Typography>
            <FormProvider {...methods}>
                <form onSubmit="">
                    <Grid container spacing={3}>
                        <FormInput
                            required
                            name="firstName"
                            label="First name"
                        />
                        <FormInput required name="lastName" label="Last name" />
                        <FormInput required name="address1" label="Address" />
                        <FormInput required name="email" label="Email" />
                        <FormInput required name="city" label="City" />
                        <FormInput
                            required
                            name="zip"
                            label="ZIP / Postal Code"
                        />
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Country</InputLabel>
                            <Select value={} fullWidth onChange={}>
                                <MenuItem key={} value={}>
                                    Select Me
                                </MenuItem>
                            </Select>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Subdivision</InputLabel>
                            <Select value={} fullWidth onChange={}>
                                <MenuItem key={} value={}>
                                    Select Me
                                </MenuItem>
                            </Select>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Options</InputLabel>
                            <Select value={} fullWidth onChange={}>
                                <MenuItem key={} value={}>
                                    Select Me
                                </MenuItem>
                            </Select>
                        </Grid>
                    </Grid>
                </form>
            </FormProvider>
        </>
    );
};

export default AddressForm;
