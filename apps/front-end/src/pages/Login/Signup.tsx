import { Button, IconLockDots, IconMail, IconUser, Input, Text } from "@app/ui";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { signup } from "../../api/signup";
import { loginWithGoogle as loginWithGoogleAPI } from "../../api/login-google";
import { sendVerifyLink } from "../../api/sendVerifyLink";
import { GoogleLogin } from "@react-oauth/google";

export default function SignUpPage() {
  const [emailSent, setEmailSent] = useState(false)
  const { register, handleSubmit, formState: { errors }, setError, getValues } = useForm()
  const { mutateAsync } = useMutation({
    mutationFn: signup
  })

  const { mutateAsync: postSendVerifyLink } = useMutation({
    mutationFn: ({ name, email }: { name: string, email: string }) => sendVerifyLink(name, email)
  })



  async function onSubmit(data: FieldValues) {

    localStorage.removeItem('accessToken')
    localStorage.removeItem('isAtendent')
    if (data.password !== data.passwordConfirm) {
      setError('passwordConfirm', {
        message: 'As senhas não se coincidem',
        type: 'confirmError'
      })
    }
    const response = await mutateAsync({
      login: data.email,
      password: data.password,
      name: data.name,
      isAtendent: false,
      permission: 'user',
      isVerified: false
    })
    await postSendVerifyLink({
      name: data.name,
      email: data.email
    })
    localStorage.setItem('accessToken', response.token)
    localStorage.setItem('isAtendent', 'false')
    setEmailSent(true)

  }

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
    window.location.replace('/')
  };

  async function handleResendLink() {
    const { name, email } = getValues()
    await postSendVerifyLink({
      name,
      email
    })
  }


  return (
    <>
      <div style={{ backgroundImage: 'url("/stars2.png")' }} className="inset-0">
        <div className="font-extrabold relative flex min-h-screen items-center  justify-center  px-6 py-10 sm:px-16">
          <div className="relative w-full max-w-[570px] rounded-md p-2">
            <div className="relative flex flex-col justify-center rounded-md  bg-[#6028dcd1] px-6 py-10">
              <div className="mx-auto w-full">
                <div className="mb-5">
                  <h1 className="text-3xl font-extrabold text-black dark:text-white">{!emailSent ? 'Crie sua conta' : 'Verifique seu Email'}</h1>
                  <div className="w-full border-black/60 border mt-2" />
                </div>
                {!emailSent ? (
                  <>
                    <form onSubmit={handleSubmit(onSubmit)} className="text-dark dark:text-white">
                      <div className="mb-2">
                        <label htmlFor="Name">Nome</label>
                        <div className="relative text-white-dark">
                          <Input {...register('name', { required: true })} type="text" placeholder="Digite seu nome completo" className="form-input !ps-10 placeholder:text-white-dark" />
                          <span className="absolute start-4 top-1/2 -translate-y-1/2">
                            <IconUser fill={true} />
                          </span>
                        </div>
                        {errors.name && (<p className="font-bold text-danger text-left">Campo Obrigatório*</p>)}
                      </div>


                      <div>
                        <label htmlFor="Name">Email</label>
                        <div className="relative text-white-dark">
                          <Input {...register('email', { required: true })} type="text" placeholder="Digite seu email" className="form-input !ps-10 placeholder:text-white-dark" />
                          <span className="absolute start-4 top-1/2 -translate-y-1/2">
                            <IconMail />
                          </span>
                        </div>
                        {errors.name && (<p className="font-bold text-danger text-left">Campo Obrigatório*</p>)}

                      </div>
                      <div className="mt-5">
                        <label htmlFor="Name">Senha</label>
                        <div className="relative text-white-dark">
                          <Input
                            {...register('password', { required: { message: 'Campo Obrigatório*', value: true }, minLength: { message: 'Sua senha deve conter no mínimo 8 caracteres', value: 8 } })}
                            type="password"
                            placeholder="Digite sua senha"
                            className="form-input !ps-10 placeholder:text-white-dark"
                          />
                          <span className="absolute start-4 top-1/2 -translate-y-1/2">
                            <IconLockDots />
                          </span>
                        </div>
                        {errors.password && (<p className="font-bold text-danger text-left">{errors.password.message?.toString() || 'Campo Obrigatório*'}</p>)}
                      </div>
                      <div className="mt-5">
                        <label htmlFor="Name">Confirmar senha</label>
                        <div className="relative text-white-dark">
                          <Input {...register('passwordConfirm', { required: true })} type="password" placeholder="Confirme sua senha" className="form-input !ps-10 placeholder:text-white-dark" />
                          <span className="absolute start-4 top-1/2 -translate-y-1/2">
                            <IconLockDots />
                          </span>
                        </div>
                        {errors.passwordConfirm && (<p className="font-bold text-danger text-left">Campo Obrigatório*</p>)}
                        {errors.passwordConfirm?.type === 'confirmError' && (<p className="font-bold text-danger text-left">{errors.passwordConfirm?.message as string}</p>)}
                      </div>
                      <Button type="submit" className="btn btn-primary !mt-6 w-full border-0 uppercase ">
                        Cadastrar
                      </Button>
                    </form>
                    <div className="relative my-7 text-center md:mb-9">
                      <span className="absolute inset-x-0 top-1/2 h-px w-full -translate-y-1/2 bg-black"></span>
                      <span className="relative px-2 font-extrabold uppercase text-white bg-white-dark rounded">Outras formas de criar conta</span>
                    </div>

                    <div className='mr-auto ml-auto flex justify-center mb-5'>
                      <GoogleLogin text="signup_with" onSuccess={
                        async (response) => await loginWithGoogle(response.credential || '')
                      } onError={() => console.log('login failed')} width={'300px'} />
                    </div>


                    <div className="text-center text-dark dark:text-white mb-5">
                      Já possui uma conta?&nbsp;
                      <Link to="/login" className="uppercase relative px-2 font-extrabold uppercase text-white bg-white-dark rounded underline transition">
                        Entrar
                      </Link>
                    </div>
                  </>
                ) : (
                  <div className="flex flex-col h-[200px]">
                    <Text as="span" className=" text-white">Um link de confirmação de conta foi enviado ao seu email</Text>
                    <Text as="span" className=" text-sm text-white-dark mt-5">Verifique a pasta de SPAM</Text>
                    <Text as="span" className=" text-sm text-white-dark">Depois de verificar você pode fechar essa janela</Text>
                    <div className="w-full border-black/60 border mt-5 mb-5" />
                    <Button onClick={() => handleResendLink()} className="btn-primary mt-auto">Reenviar link pelo e-mail</Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}