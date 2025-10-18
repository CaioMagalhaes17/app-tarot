import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import { login } from "../../api/login";
import useStore from "../../state";

interface LoginForm {
  login: string;
  password: string;
}

export function useLoginController() {
  const [searchParams] = useSearchParams({
    redirect: '',
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
    window.location.replace('/')
  };
  const { isMobile } = useStore()

  return { isMobile, onSubmit, register, errors, handleSubmit, useEmail, setUseEmail, searchParams }
}