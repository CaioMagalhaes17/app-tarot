import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { login } from "../../api/login";
import { Button, IconLockDots, IconMail, IconPhone, Input, Text } from "@app/ui";
import useStore from "../../state";

interface LoginForm {
  login: string;
  password: string;
}

export function LoginPage() {
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
  return (
    <>
      <div style={{ backgroundImage: 'url("/stars2.png")' }} className="absolute inset-0">
      </div>
      <div className="relative font-extrabold flex min-h-screen items-center justify-center px-6 py-10">
        <div className="relative w-full max-w-[570px] rounded-md p-2">
          <div className="relative flex flex-col justify-center rounded-md  bg-[#6028dcd1] a px-6 py-10">
            <div className="mx-auto w-full">
              <div className="mb-10">
                <h1 className="text-3xl font-extrabold text-white">Entrar</h1>
                <div className="w-full border-black/60 border mt-2" />

              </div>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 text-white">
                <div className={`flex mb-4 gap-5 ${isMobile ? 'flex-col' : 'flex-row'}`}>
                  <label className="flex items-center text-white">
                    <input type="radio" onClick={() => setUseEmail(true)} className="mr-2" checked={useEmail} />
                    <span>Usar Email</span>
                  </label>
                  <label className="flex items-center text-white">
                    <input type="radio" onClick={() => setUseEmail(false)} className="mr-2" checked={!useEmail} />
                    <span>Usar Número de Telefone</span>
                  </label>
                </div>

                {useEmail ? (<div>
                  <label className="text-white" htmlFor="Name">Email</label>
                  <div className="relative text-white-dark">
                    <Input id="Name" type="text" placeholder="Digite seu email" {...register('login', { required: true })} className="form-input !ps-10 placeholder:text-white-dark" />
                    <span className="absolute start-4 top-1/2 -translate-y-1/2">
                      <IconMail fill={true} />
                    </span>
                  </div>
                  {errors.login && (<p className="font-bold text-danger">Campo Obrigatório</p>)}
                  <div className="mt-5">
                    <label className="text-white" htmlFor="Name">Senha</label>
                    <div className="relative text-white-dark">
                      <Input id="Name" type="password" placeholder="Senha" {...register('password', { required: true })} className="form-input !ps-10 placeholder:text-white-dark" />
                      <span className="absolute start-4 top-1/2 -translate-y-1/2">
                        <IconLockDots />
                      </span>
                    </div>
                    {errors.password && (<p className="font-bold text-danger">Campo Obrigatório</p>)}
                  </div>
                </div>) : (<div>
                  <label className="text-white" htmlFor="Name">Telefone</label>
                  <div className="relative text-white-dark">
                    <Input {...register('telNum', { required: true })} id="Name" placeholder="Digite seu número de telefone" className="form-input !ps-10 placeholder:text-white-dark" />
                    <span className="absolute start-4 top-1/2 -translate-y-1/2">
                      <IconPhone />
                    </span>
                  </div>
                  {errors.telNum && (<p className="font-bold text-danger">Campo Obrigatório</p>)}

                </div>)}


                <Button type="submit" className="btn btn-primary !mt-6 w-full border-0 uppercase ">
                  Entrar
                </Button>
              </form>
              <div className="relative my-7 text-center md:mb-9">
                <span className="absolute inset-x-0 top-1/2 h-px w-full -translate-y-1/2 bg-black"></span>
                <span className="relative px-2 font-extrabold uppercase text-white bg-white-dark rounded">Outras formas de entrar</span>
              </div>

              <div className="flex flex-col mb-10">
                <div className="flex flex-row border border-black p-2 items-center justify-center">
                  <img src="https://www.cdnlogo.com/logos/g/35/google-icon.svg" className="w-[50px] h-[50px]" />
                  <Text className="ml-5 text-white" as="span">Entrar com Google</Text>
                </div>
              </div>

              <div className="text-center text-white mb-5">
                Não possui uma conta?&nbsp;
                <Link to={`${searchParams.get('redirect') !== '' ? "/signup?redirect=" + searchParams.get('redirect') : "/signup"}`} className="uppercase text-primary underline transition">
                  Cadastrar
                </Link>
              </div>


            </div>
          </div>
        </div>
      </div>
    </>
  );
}