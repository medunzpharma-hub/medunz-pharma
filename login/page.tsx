const handleLogin = async () => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    router.push("/dashboard");
  } catch (error) {
    setError("Correo o contraseña incorrectos");
  }
};