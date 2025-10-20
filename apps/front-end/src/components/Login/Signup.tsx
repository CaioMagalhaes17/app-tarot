import { Button, HSeparator, IconLockDots, IconMail, IconPhone, IconUser, Input, Text } from "@app/ui";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import { signup } from "../../api/signup";
import useStore from "../../state";
import Swal from "sweetalert2";
import { sendVerifyLink } from "../../api/sendVerifyLink";

export default function SignUpPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  console.log(searchParams)
  const [useEmail, setUseEmail] = useState<boolean>(false)
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
    if (!useEmail) {
      Swal.fire({
        title: 'Login com número de telefone temporariamente indisponível',
        text: 'Utilize email e senha enquanto',
        icon: 'error'
      })
      return
    }
    console.log('a?')

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

  async function handleRegisterWithGoogle() {
    Swal.fire({
      title: 'Login com Google temporariamente indisponível',
      text: 'Utilize email e senha por enquanto',
      icon: 'error'
    })
  }

  async function handleResendLink() {
    const { name, email } = getValues()
    await postSendVerifyLink({
      name,
      email
    })
  }

  const { isMobile } = useStore()

  return (
    <>
      <div className="flex items-center justify-center mt-5">
        <div className="w-full max-w-[570px] rounded-md p-2">
          <div style={{ backgroundImage: 'linear-gradient(360deg, #000000 0%, #1315356b 60%)' }} className="flex flex-col justify-center rounded-md  px-6 py-10">
            <div className="mx-auto scrollable w-full">
              <div className="mb-10">
                <h1 className="text-5xl font-bold text-white">Cadastrar</h1>
                <HSeparator />
              </div>

              {
                !emailSent ? (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 text-white">
                    <div className={`flex text-lg mb-4 gap-5 ${isMobile ? 'flex-col' : 'flex-row'}`}>
                      <label className="flex items-center text-white">
                        <input type="radio" onClick={() => setUseEmail(false)} className="mr-2" checked={!useEmail} />
                        <span>Usar Número de Telefone</span>
                      </label>
                      <label className="flex items-center text-white">
                        <input type="radio" onClick={() => setUseEmail(true)} className="mr-2" checked={useEmail} />
                        <span>Usar Email</span>
                      </label>
                    </div>

                    <div className="mb-2">
                      <label className="text-left text-lg" htmlFor="Name">Nome</label>
                      <div className="relative text-white-dark">
                        <Input {...register('name', { required: true })} type="text" placeholder="Digite seu nome completo" className="form-input !ps-10 placeholder:text-white-dark" />
                        <span className="absolute start-4 top-1/2 -translate-y-1/2">
                          <IconUser fill={true} />
                        </span>
                      </div>
                      {errors.name && (<p className="font-bold text-danger text-left">Campo Obrigatório*</p>)}
                    </div>

                    {useEmail ? (<div>
                      <label className="text-left text-white" htmlFor="Name">Email</label>
                      <div className="relative text-white-dark">
                        <Input id="Name" type="text" placeholder="Digite seu email" {...register('email', { required: true })} className="form-input !ps-10 placeholder:text-white-dark" />
                        <span className="absolute start-4 top-1/2 -translate-y-1/2">
                          <IconMail fill={true} />
                        </span>
                      </div>
                      {errors.login && (<p className="font-bold text-danger">Campo Obrigatório</p>)}
                      <div className="mt-5">
                        <label className="text-left text-white" htmlFor="Name">Senha</label>
                        <div className="relative text-white-dark">
                          <Input id="Name" type="password" placeholder="Senha" {...register('password', { required: true })} className="form-input !ps-10 placeholder:text-white-dark" />
                          <span className="absolute start-4 top-1/2 -translate-y-1/2">
                            <IconLockDots />
                          </span>
                        </div>
                        {errors.password && (<p className="font-bold text-danger">Campo Obrigatório</p>)}
                      </div>
                    </div>) : (<div>
                      <label className="text-left text-white text-lg font-bold" htmlFor="Name">Telefone</label>
                      <div className="relative text-white-dark">
                        <Input {...register('telNum', { required: true })} id="Name" placeholder="Digite seu número de telefone" className="form-input !ps-10 placeholder:text-white-dark" />
                        <span className="absolute start-4 top-1/2 -translate-y-1/2">
                          <IconPhone />
                        </span>
                      </div>
                      {errors.telNum && (<p className="font-bold text-danger">Campo Obrigatório</p>)}

                    </div>)}




                    <Button type="submit" className="btn btn-primary !mt-6 w-full border-0 uppercase ">
                      {
                        useEmail ? 'Cadastrar' : 'Receber Código de Verificação'
                      }
                    </Button>
                  </form>
                ) :
                  (
                    <div className="flex flex-col h-[200px] text-lg font-bold">
                      <Text as="span" className=" text-white">Um link de confirmação de conta foi enviado ao seu email</Text>
                      <Text as="span" className="text-white-dark text-lg">Verifique a pasta de SPAM</Text>
                      <Text as="span" className=" text-sm text-white-dark mt-3">Após a verificação, você pode fechar essa janela</Text>
                      <div className="w-full border-black/60 border mt-5 mb-5" />
                      <Button onClick={() => handleResendLink()} className="btn-primary mt-auto">Reenviar link pelo e-mail</Button>
                    </div>
                  )}

              <div className="relative my-7 text-center md:mb-9">
                <span className="absolute inset-x-0 top-1/2 h-px w-full -translate-y-1/2 bg-black"></span>
                <span className="relative px-2 font-extrabold uppercase text-white bg-white-dark rounded">Outras formas de entrar</span>
              </div>

              <div className="flex flex-col mb-10">
                <div className="flex flex-row bg-[#3403918f] border rounded-xl border-black p-2 items-center justify-center">
                  <img src="https://www.cdnlogo.com/logos/g/35/google-icon.svg" className="w-[50px] h-[50px]" />
                  <Text onClick={handleRegisterWithGoogle} className="ml-5 text-lg font-bold text-white" as="span">Entrar com Google</Text>
                </div>
              </div>

              <div className="text-center text-white mb-5 text-lg">
                Possui uma conta?&nbsp;
                <span onClick={() => setSearchParams({ isLogin: 'true' })} className="cursor-pointer uppercase text-primary underline transition">
                  Login
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}