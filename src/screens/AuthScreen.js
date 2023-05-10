import { useState } from 'react';
import { View, Text, TextInput, Pressable, ActivityIndicator } from 'react-native';
import { Formik } from "formik";
import * as Yup from "yup";
import { useAuthContext } from '../context/AuthContext';
import { useNavigation } from '@react-navigation/native';

const AuthScreen = () => {
  const { signIn, signUp } = useAuthContext();
  const [loading, setLoading] = useState(false);
  const [signUpState, setSignUpState] = useState(false)
  const navigation = useNavigation();

  const SigninFormSchema = Yup.object().shape({
    email: Yup.string().email().required("An email is required"),
    password: Yup.string().required("Clave es requerido"),
  });

  const SignupFormSchema = Yup.object().shape({
    email: Yup.string().email().required("An email is required"),
    phone: Yup.number().required("Teléfono es requerido"),
    password: Yup.string().min(
      6,
      "Tu clave debe tener minimo 6 caracteres."
    ),
  });


  return (
    <View className={`flex-1 items-center justify-center bg-blue-900`}>

      {
        signUpState ? 
        (
          <Formik
          initialValues={{ email: "", password: "", phone: "" }}
          onSubmit={(data) => {
            setLoading(true);
            signUp(data, navigation, setLoading)
          }}
          validationSchema={SignupFormSchema}
          validateOnMount={true}
        >
          {({
            handleBlur,
            handleChange,
            handleSubmit,
            values,
            errors,
            isValid,
          }) => (
            <View  className={`p-8 w-full max-w-sm`}>
              <Text className={`text-5xl font-bold mb-6 text-white`}>Inicio de sesión</Text>
  
              <TextInput
                className={`w-full bg-white rounded-md h-12 px-4 mb-4`}
                na
                placeholderTextColor="#000"
                placeholder="Correo"
                autoCapitalize="none"
                keyboardType="email-address"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />

              <TextInput
                className={`w-full bg-white rounded-md h-12 px-4 mb-4`}
                na
                placeholderTextColor="#000"
                placeholder="Teléfono"
                autoCapitalize="none"
                keyboardType="numeric"
                onChangeText={handleChange("phone")}
                onBlur={handleBlur("phone")}
                value={values.phone}
              />
  
  
              <TextInput
                className={`w-full bg-white rounded-md h-12 px-4 mb-4`}
                placeholderTextColor="#000"
                placeholder="Clave"
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                secureTextEntry={true}
                textContentType="password"
                value={values.password}
              />


  
              <Pressable
                className={`h-12 border-2 border-white rounded-md flex flex-row justify-center items-center px-6`}
                onPress={handleSubmit}
              >
                <View className={`flex-1 flex items-center`}>
                  <Text className={`text-white text-base font-medium`}> {
                    loading ? <ActivityIndicator size="small" color="#fff" /> : <Text style={{ color: "#fff" }}>Entrar</Text>
                  }</Text>
                </View>
              </Pressable>
  
              <Text onPress={() => setSignUpState(false)} className="text-center text-white font-bold mt-10">tienes cuenta? Entra acá</Text>
            </View>
          )}
  
        </Formik>
        ) : (
          <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(data) => {
            setLoading(true);
            signIn(data, navigation, setLoading)
          }}
          validationSchema={SigninFormSchema}
          validateOnMount={true}
        >
          {({
            handleBlur,
            handleChange,
            handleSubmit,
            values,
            errors,
            isValid,
          }) => (
            <View  className={`p-8 w-full max-w-sm`}>
              <Text className={`text-5xl font-bold mb-6 text-white`}>Inicio de sesión</Text>
  
              <TextInput
                className={`w-full bg-white rounded-md h-12 px-4 mb-4`}
                na
                placeholderTextColor="#000"
                placeholder="Correo"
                autoCapitalize="none"
                keyboardType="email-address"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />
  
  
              <TextInput
                className={`w-full bg-white rounded-md h-12 px-4 mb-4`}
                placeholderTextColor="#000"
                placeholder="Clave"
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                secureTextEntry={true}
                textContentType="password"
                value={values.password}
              />
  
              <Pressable
                className={`h-12 border-2 border-white rounded-md flex flex-row justify-center items-center px-6`}
                onPress={handleSubmit}
              >
                <View className={`flex-1 flex items-center`}>
                  <Text className={`text-white text-base font-medium`}> {
                    loading ? <ActivityIndicator size="small" color="#fff" /> : <Text style={{ color: "#fff" }}>Entrar</Text>
                  }</Text>
                </View>
              </Pressable>
  
              <Text onPress={() => setSignUpState(true)} className="text-center text-white font-bold mt-10">No tienes cuenta? Registrate acá</Text>
            </View>
          )}
  
        </Formik>
        )
      }
    </View>
  )
}

export default AuthScreen
