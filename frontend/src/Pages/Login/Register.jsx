import React, { useState } from "react";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../api/auth";
import IconoRazer from "../../Components/Icono/Marca/IconoRazer/IconoRazer";
import IconoAsus from "../../Components/Icono/Marca/IconoAsus/IconoAsus";
import IconoAMD from "../../Components/Icono/Marca/IconoAMD/IconoAMD";
import IconoAcer from "../../Components/Icono/Marca/IconoAcer/IconoAcer";

export default function Register() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");
  const navigate = useNavigate();

  const password = watch("password", "");

  const onSubmit = async (data) => {
    setLoading(true);
    setApiError("");

    try {
      // Registro con el endpoint register del ViewSet
      const res = await registerUser({
        username: data.username,
        email: data.email,
        first_name: data.first_name,
        last_name: data.last_name,
        password: data.password,
        password2: data.password2,
        codigo_postal: data.codigo_postal,
      });

      // Guardar tokens directamente del registro
      //const { access, refresh } = register.data;
      localStorage.setItem("access", res.data.access);
      localStorage.setItem("refresh", res.data.refresh);

      alert("Usuario registrado con éxito ✅");
      navigate("/login");

    } catch (error) {
      setApiError(error.response?.data || "Error de conexion con la BD");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-transparent">

      {/* 🌌 SVG flotantes */}
      {/* Izquierda - medio vertical */}
      <div className="absolute top-[40%] left-[15%] -translate-y-1/2 animate-hologram" style={{ width: "75%" }}>
        <IconoRazer />
      </div>

      {/* Izquierda - un poco más arriba */}
      <div className="absolute top-[20%] left-[10%] animate-hologram" style={{ width: "50%" }}>
        <IconoAsus />
      </div>

      {/* Derecha - medio vertical */}
      <div className="absolute top-[30%] left-[85%] -translate-y-1/2 animate-hologram" style={{ width: "50%" }}>
        <IconoAMD />
      </div>

      {/* Derecha - un poco más arriba */}
      <div className="absolute top-[50%] left-[85%] animate-hologram" style={{ width: "50%" }}>
        <IconoAcer />
      </div>

      <div className="flex flex-col gap-4 p-6 rounded-lg w-full max-w-3xl m-4
        bg-[#1F2937]
        dark:bg-[#000000] dark:[box-shadow:0_0_6px_#00FF84,0_0_12px_#00FF84]">

        <h2 className="text-center text-3xl font-semibold mb-6 text-[#ffffff] dark:text-[#00FF84]">
          Registro
        </h2>

        {apiError && (
          <div className="p-3 bg-red-100 text-red-700 border border-red-300 rounded mb-4">
            {typeof apiError === "string"
              ? apiError
              : Object.entries(apiError).map(([key, value]) => (
                  <div key={key}>
                    <strong>{key}:</strong> {Array.isArray(value) ? value.join(", ") : value}
                  </div>
                ))}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          {/* Username */}
          <div className="bg-[#1F2937] border-[#000000] text-[#ffffff] dark:bg-[#000000] dark:border-[#00FF84] dark:text-[#00FF84]">
            <TextField
              label="Username"
              variant="outlined"
              {...register("username", { required: "Ingrese un username" })}
              error={!!errors.username}
              helperText={errors.username?.message}
              fullWidth
              margin="normal"
              slotPropsinput={{ style: { color: "inherit" } }}
              slotPropsinputLabel={{ style: { color: "inherit" } }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#ffffff" },
                  "&:hover fieldset": { borderColor: "#ffffff" },
                  "&.Mui-focused fieldset": { borderColor: "#ffffff" },
                  "& input": { color: "#ffffff" },
                },
                "& .MuiInputLabel-root": { color: "#ffffff" },
                "& .MuiInputLabel-root.Mui-focused": { color: "#ffffff" },
                "@media (prefers-color-scheme: dark)": {
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#000000" },
                    "&:hover fieldset": { borderColor: "#00FF84" },
                    "&.Mui-focused fieldset": { borderColor: "#00FF84" },
                    "& input": { color: "#00FF84" },
                  },
                  "& .MuiInputLabel-root": { color: "#00FF84" },
                  "& .MuiInputLabel-root.Mui-focused": { color: "#00FF84" },
                },
              }}
            />
          </div>

          {/* Email */}
          <div className="bg-[#1F2937] border-[#000000] text-[#ffffff] dark:bg-[#000000] dark:border-[#00FF84] dark:text-[#00FF84]">
            <TextField
              label="Email"
              variant="outlined"
              {...register("email", {
                required: "Ingrese un email",
                pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Email inválido" }
              })}
              error={!!errors.email}
              helperText={errors.email?.message}
              fullWidth
              margin="normal"
              slotPropsinput={{ style: { color: "inherit" } }}
              slotPropsinputLabel={{ style: { color: "inherit" } }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#ffffff" },
                  "&:hover fieldset": { borderColor: "#ffffff" },
                  "&.Mui-focused fieldset": { borderColor: "#ffffff" },
                  "& input": { color: "#ffffff" },
                },
                "& .MuiInputLabel-root": { color: "#ffffff" },
                "& .MuiInputLabel-root.Mui-focused": { color: "#ffffff" },
                "@media (prefers-color-scheme: dark)": {
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#000000" },
                    "&:hover fieldset": { borderColor: "#00FF84" },
                    "&.Mui-focused fieldset": { borderColor: "#00FF84" },
                    "& input": { color: "#00FF84" },
                  },
                  "& .MuiInputLabel-root": { color: "#00FF84" },
                  "& .MuiInputLabel-root.Mui-focused": { color: "#00FF84" },
                },
              }}
            />
          </div>

          {/* Codigo postal */}
          <div className="bg-[#1F2937] border-[#000000] text-[#ffffff] dark:bg-[#000000] dark:border-[#00FF84] dark:text-[#00FF84]">
            <TextField
              label="Código Postal"
              variant="outlined"
              {...register("codigo_postal")}
              fullWidth
              margin="normal"
              slotPropsinput={{ style: { color: "inherit" } }}
              slotPropsinputLabel={{ style: { color: "inherit" } }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#ffffff" },
                  "&:hover fieldset": { borderColor: "#ffffff" },
                  "&.Mui-focused fieldset": { borderColor: "#ffffff" },
                  "& input": { color: "#ffffff" },
                },
                "& .MuiInputLabel-root": { color: "#ffffff" },
                "& .MuiInputLabel-root.Mui-focused": { color: "#ffffff" },
                "@media (prefers-color-scheme: dark)": {
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#000000" },
                    "&:hover fieldset": { borderColor: "#00FF84" },
                    "&.Mui-focused fieldset": { borderColor: "#00FF84" },
                    "& input": { color: "#00FF84" },
                  },
                  "& .MuiInputLabel-root": { color: "#00FF84" },
                  "& .MuiInputLabel-root.Mui-focused": { color: "#00FF84" },
                },
              }}
            />
          </div>

          {/* Codigo postal */}
          <div className="bg-[#1F2937] border-[#000000] text-[#ffffff] dark:bg-[#000000] dark:border-[#00FF84] dark:text-[#00FF84]">
            <TextField
              label="Código Postal"
              variant="outlined"
              {...register("codigo_postal")}
              fullWidth
              margin="normal"
              InputProps={{ style: { color: "inherit" } }}
              InputLabelProps={{ style: { color: "inherit" } }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#ffffff" },
                  "&:hover fieldset": { borderColor: "#ffffff" },
                  "&.Mui-focused fieldset": { borderColor: "#ffffff" },
                  "& input": { color: "#ffffff" },
                },
                "& .MuiInputLabel-root": { color: "#ffffff" },
                "& .MuiInputLabel-root.Mui-focused": { color: "#ffffff" },
                "@media (prefers-color-scheme: dark)": {
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#000000" },
                    "&:hover fieldset": { borderColor: "#00FF84" },
                    "&.Mui-focused fieldset": { borderColor: "#00FF84" },
                    "& input": { color: "#00FF84" },
                  },
                  "& .MuiInputLabel-root": { color: "#00FF84" },
                  "& .MuiInputLabel-root.Mui-focused": { color: "#00FF84" },
                },
              }}
            />
          </div>

          {/* First Name */}
          <div className="bg-[#1F2937] border-[#000000] text-[#ffffff] dark:bg-[#000000] dark:border-[#00FF84] dark:text-[#00FF84]">
            <TextField
              label="Nombre"
              variant="outlined"
              {...register("first_name")}
              fullWidth
              margin="normal"
              slotPropsinput={{ style: { color: "inherit" } }}
              slotPropsinputLabel={{ style: { color: "inherit" } }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#ffffff" },
                  "&:hover fieldset": { borderColor: "#ffffff" },
                  "&.Mui-focused fieldset": { borderColor: "#ffffff" },
                  "& input": { color: "#ffffff" },
                },
                "& .MuiInputLabel-root": { color: "#ffffff" },
                "& .MuiInputLabel-root.Mui-focused": { color: "#ffffff" },
                "@media (prefers-color-scheme: dark)": {
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#000000" },
                    "&:hover fieldset": { borderColor: "#00FF84" },
                    "&.Mui-focused fieldset": { borderColor: "#00FF84" },
                    "& input": { color: "#00FF84" },
                  },
                  "& .MuiInputLabel-root": { color: "#00FF84" },
                  "& .MuiInputLabel-root.Mui-focused": { color: "#00FF84" },
                },
              }}
            />
          </div>

          {/* Last Name */}
          <div className="bg-[#1F2937] border-[#000000] text-[#ffffff] dark:bg-[#000000] dark:border-[#00FF84] dark:text-[#00FF84]">
            <TextField
              label="Apellido"
              variant="outlined"
              {...register("last_name")}
              fullWidth
              margin="normal"
              slotPropsinput={{ style: { color: "inherit" } }}
              slotPropsinputLabel={{ style: { color: "inherit" } }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#ffffff" },
                  "&:hover fieldset": { borderColor: "#ffffff" },
                  "&.Mui-focused fieldset": { borderColor: "#ffffff" },
                  "& input": { color: "#ffffff" },
                },
                "& .MuiInputLabel-root": { color: "#ffffff" },
                "& .MuiInputLabel-root.Mui-focused": { color: "#ffffff" },
                "@media (prefers-color-scheme: dark)": {
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#000000" },
                    "&:hover fieldset": { borderColor: "#00FF84" },
                    "&.Mui-focused fieldset": { borderColor: "#00FF84" },
                    "& input": { color: "#00FF84" },
                  },
                  "& .MuiInputLabel-root": { color: "#00FF84" },
                  "& .MuiInputLabel-root.Mui-focused": { color: "#00FF84" },
                },
              }}
            />
          </div>

          {/* Password */}
          <div className="bg-[#1F2937] border-[#000000] text-[#ffffff] dark:bg-[#000000] dark:border-[#00FF84] dark:text-[#00FF84]">
            <TextField
              label="Password"
              type={showPassword ? "text" : "password"}
              variant="outlined"
              {...register("password", {
                required: "Ingrese su password",
                minLength: { value: 8, message: "Debe tener al menos 8 caracteres" }
              })}
              error={!!errors.password}
              helperText={errors.password?.message}
              fullWidth
              margin="normal"
              slotPropsinput={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton 
                      onClick={() => setShowPassword(prev => !prev)} 
                      edge="end"
                      sx={(theme) => ({
                        color: theme.palette.mode === "dark" ? "#00FF84" : "#ffffff"
                      })}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              slotPropsinputLabel={{ style: { color: "inherit" } }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#ffffff" },
                  "&:hover fieldset": { borderColor: "#ffffff" },
                  "&.Mui-focused fieldset": { borderColor: "#ffffff" },
                  "& input": { color: "#ffffff" },
                },
                "& .MuiInputLabel-root": { color: "#ffffff" },
                "& .MuiInputLabel-root.Mui-focused": { color: "#ffffff" },
                "@media (prefers-color-scheme: dark)": {
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#000000" },
                    "&:hover fieldset": { borderColor: "#00FF84" },
                    "&.Mui-focused fieldset": { borderColor: "#00FF84" },
                    "& input": { color: "#00FF84" },
                  },
                  "& .MuiInputLabel-root": { color: "#00FF84" },
                  "& .MuiInputLabel-root.Mui-focused": { color: "#00FF84" },
                },
              }}
            />
          </div>

          {/* Confirm Password */}
          <div className="bg-[#1F2937] border-[#000000] text-[#ffffff] dark:bg-[#000000] dark:border-[#00FF84] dark:text-[#00FF84]">
            <TextField
              label="Confirmar Password"
              type={showPassword2 ? "text" : "password"}
              variant="outlined"
              {...register("password2", {
                required: "Confirme su password",
                validate: value => value === password || "Las contraseñas no coinciden"
              })}
              error={!!errors.password2}
              helperText={errors.password2?.message}
              fullWidth
              margin="normal"
              slotPropsinput={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton 
                      onClick={() => setShowPassword2(prev => !prev)} 
                      edge="end"
                      sx={(theme) => ({
                        color: theme.palette.mode === "dark" ? "#00FF84" : "#ffffff"
                      })}
                    >
                      {showPassword2 ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              slotPropsinputLabel={{ style: { color: "inherit" } }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#ffffff" },
                  "&:hover fieldset": { borderColor: "#ffffff" },
                  "&.Mui-focused fieldset": { borderColor: "#ffffff" },
                  "& input": { color: "#ffffff" },
                },
                "& .MuiInputLabel-root": { color: "#ffffff" },
                "& .MuiInputLabel-root.Mui-focused": { color: "#ffffff" },
                "@media (prefers-color-scheme: dark)": {
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#000000" },
                    "&:hover fieldset": { borderColor: "#00FF84" },
                    "&.Mui-focused fieldset": { borderColor: "#00FF84" },
                    "& input": { color: "#00FF84" },
                  },
                  "& .MuiInputLabel-root": { color: "#00FF84" },
                  "& .MuiInputLabel-root.Mui-focused": { color: "#00FF84" },
                },
              }}
            />
          </div>


          <button
            type="submit"
            disabled={loading}
            className="rounded-full border-2 transition transform
              bg-[#ffffff] text-[#000000] m-4 font-bold px-6 py-3 border-[#ffffff] 
              hover:bg-[#1F2937] hover:text-[#ffffff] hover:scale-105 
              hover:shadow-[0_0_15px_#ffffff]
              dark:bg-[#000000] dark:text-[#00FF84] dark:border-[#00FF84] 
              dark:hover:bg-[#00FF84] dark:hover:text-black 
              dark:hover:shadow-[0_0_15px_#00FF84]"
          >
            {loading ? "Registrando..." : "Registrarse"}
          </button>

          <p className="mt-4 text-center text-sm text-[#ffffff]">
            ¿Ya tienes cuenta? <Link to="/login" className="text-[#00FF84]">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
