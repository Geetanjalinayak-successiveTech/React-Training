"use client";
import * as Yup from "yup";
import { useFormik } from "formik";
import { TextField, Button, Box, Typography } from "@mui/material";

const SignUpSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),

  Password: Yup.string()
    .min(4, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

export default function ComplexForm() {
  const formik = useFormik({
    initialValues: {
      email: "",
      Password: "",
    },
    validationSchema: SignUpSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Box
      sx={{
        maxWidth: 400,
        mx: "auto",
        mt: 8,
        p: 3,
        border: "1px solid #ccc",
        borderRadius: 2,
        boxShadow: 3,
        backgroundColor: "#fdfdfd",
      }}
    >
      <Typography variant="h5" align="center" gutterBottom>
        Signup Form
      </Typography>

      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          label="Email"
          name="email"
          margin="normal"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />

        <TextField
          fullWidth
          label="Password"
          name="Password"
          type="Password"
          margin="normal"
          value={formik.values.Password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.Password && Boolean(formik.errors.Password)}
          helperText={formik.touched.Password && formik.errors.Password}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          Submit
        </Button>
      </form>
    </Box>
  );
}
