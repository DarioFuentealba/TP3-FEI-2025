
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link, useNavigate } from "react-router-dom";
import { loginUser, getUsuarioActual } from "../../api/auth";
import { useUser } from "../../context/UserContext";
import { parseJwt } from "../../utils/jwt";
import IconoRazer from "../../Components/Icono/Marca/IconoRazer/IconoRazer";
import IconoAsus from "../../Components/Icono/Marca/IconoAsus/IconoAsus";
import IconoAMD from "../../Components/Icono/Marca/IconoAMD/IconoAMD";
import IconoAcer from "../../Components/Icono/Marca/IconoAcer/IconoAcer";

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");
  const navigate = useNavigate();
  const {login} = useUser();


  const onSubmit = async (data) => {
    setLoading(true);
    setApiError("");

    try {
      // JWT login endpoint - Llamada al backend
      const res = await loginUser({
        username: data.username,
        password: data.password,
      });

    const { access, refresh } = res.data;

    // ✅ Usamos la función del contexto para guardar sesión
    login(access, refresh);
    const usuario = await getUsuarioActual();

    // ✅ Redirige al perfil
    //const decoded = parseJwt(access);
    //console.log('DATA=> ',usuario);
    if(usuario.is_superuser){

      navigate(`/administrador/${usuario.id}`);
    }
    else{

      navigate(`/perfil/${usuario.id}`);
    }

  } catch (error) {
    setApiError(error.response?.data?.detail || "Error con la conexión a la BD");
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

      {/* Cuadro del login */}
      <div
        className="flex flex-col gap-4 p-6 rounded-lg w-full max-w-3xl m-4
        bg-[#1F2937]
        dark:bg-[#000000] dark:[box-shadow:0_0_6px_#00FF84,0_0_12px_#00FF84]"
      >


      {/*<div className="flex justify-center items-center min-h-screen bg-transparent">
      */}
        <h2
          className="text-center text-3xl font-semibold mb-6 
          text-[#ffffff] 
          dark:text-[#00FF84]"
        >
          Login
        </h2>

        {apiError && (
          <div className="p-3 bg-red-100 text-red-700 border border-red-300 rounded mb-4">
            {apiError}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div 
            className="bg-[#1F2937] border-[#000000] text-[#ffffff]
            dark:bg-[#000000] dark:border-[#00FF84] dark:text-[#00FF84]"
          >
            <TextField
              label="Username"
              variant="outlined"
              {...register("username", { required: "Ingrese su username" })}
              error={!!errors.username}
              helperText={errors.username?.message}
              fullWidth
              margin="normal"
              InputProps={{ style: { color: "inherit" } }}
              InputLabelProps={{ style: { color: "inherit" } }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#ffffff",
                  },
                  "&:hover fieldset": {
                    borderColor: "#ffffff",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#ffffff",
                  },
                },
                "@media (prefers-color-scheme: dark)": {
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#000000",
                    },
                    "&:hover fieldset": {
                      borderColor: "#00FF84",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#00FF84",
                    },
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#00FF84",
                  },
                },
              }}
            />
          </div>

          <div 
            className="bg-[#1F2937] border-[#000000] text-[#ffffff]
            dark:bg-[#000000] dark:border-[#00FF84] dark:text-[#00FF84]"
          >
            <TextField
              label="Password"
              type={showPassword ? "text" : "password"}
              variant="outlined"
              {...register("password", { required: "Ingrese su password" })}
              error={!!errors.password}
              helperText={errors.password?.message}
              fullWidth
              margin="normal"
              InputProps={{
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
                          InputLabelProps={{ style: { color: "inherit" } }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#ffffff",       // borde normal en modo claro
                },
                "&:hover fieldset": {
                  borderColor: "#ffffff",       // borde al pasar el mouse en modo claro
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#ffffff",       // borde al enfocar en modo claro
                },
                "& input": {
                  color: "#ffffff",             // texto dentro del input en modo claro
                },
              },
              "& .MuiInputLabel-root": {
                color: "#ffffff",               // color del label en modo claro
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#ffffff",               // label enfocado en modo claro
              },
              "@media (prefers-color-scheme: dark)": {
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#000000",     // borde normal en modo oscuro
                  },
                  "&:hover fieldset": {
                    borderColor: "#00FF84",    // borde al pasar el mouse en modo oscuro
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#00FF84",    // borde al enfocar en modo oscuro
                  },
                  "& input": {
                    color: "#00FF84",           // texto dentro del input en modo oscuro
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "#00FF84",             // color del label en modo oscuro
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#00FF84",             // label enfocado en modo oscuro
                },
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
            {loading ? "Ingresando..." : "Login"}
          </button>

          <p className="mt-4 text-center text-sm text-[#ffffff]">
            ¿No tienes cuenta? <Link to="/register" className="text-[#00FF84]">Registrate</Link>
          </p>

        </form>
      </div>
    </div>
  );
}

