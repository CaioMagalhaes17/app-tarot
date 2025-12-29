import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import { login } from "../../api/login";
import useStore from "../../state";
import { loginWithGoogle as loginWithGoogleAPI } from "../../api/login-google";

interface LoginForm {
  login: string;
  password: string;
}

export function useLoginController({ redirectUrl }: { redirectUrl?: string }) {
  const [searchParams, setSearchParams] = useSearchParams({
    redirect: '',
    isLogin: ''
  })
  const [useEmail, setUseEmail] = useState<boolean>(true)
  const { register, formState: { errors }, handleSubmit } = useForm()
  const { mutateAsync } = useMutation({
    mutationFn: (data: LoginForm) => login(data),
    mutationKey: ['login']
  })
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('isAtendent')
    const response = await mutateAsync(data as LoginForm);
    localStorage.setItem('accessToken', response.token)
    localStorage.setItem('isAtendent', 'false')
    window.location.replace(redirectUrl || '/')
  };
  const { isMobile } = useStore()

  const loginWithGoogle = async (accessToken: string) => {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('isAtendent')
    const response = await loginWithGoogleAPI(accessToken);
    if (response.accessToken && response.accessToken.trim() !== '') {
      localStorage.setItem('accessToken', response.accessToken)
      localStorage.setItem('isAtendent', 'false')
    } else {
      throw new Error('Token não recebido do servidor');
    }
    window.location.replace(redirectUrl || '/')
  };

  return { isMobile, onSubmit, register, errors, handleSubmit, useEmail, setUseEmail, searchParams, setSearchParams, loginWithGoogle }
}