import { Button, HSeparator, IconLockDots, IconMail, IconPhone, Input, Text } from "@app/ui"
import { useLoginController } from "./useLoginController"
import SignUpPage from "./Signup"



export function Login({ redirectUrl }: { redirectUrl?: string }) {
  const { errors, handleSubmit, isMobile, onSubmit, register, searchParams, setUseEmail, useEmail, setSearchParams } = useLoginController({ redirectUrl })

  return (
    <>
      {
        searchParams.get('isLogin') === 'false' ? (
          <SignUpPage />
        ) : (
          <div className="flex items-center justify-center mt-5">
            <div className="w-full max-w-[570px] rounded-md p-2">
              <div style={{ backgroundImage: 'linear-gradient(360deg, #000000 0%, #1315356b 60%)' }} className="flex flex-col justify-center rounded-md  px-6 py-10">
                <div className="mx-auto scrollable w-full">
                  <div className="mb-10">
                    <h1 className="text-5xl font-bold text-white">Entrar</h1>
                    <HSeparator />
                  </div>
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

                    {useEmail ? (<div>
                      <label className="text-left text-white" htmlFor="Name">Email</label>
                      <div className="relative text-white-dark">
                        <Input id="Name" type="text" placeholder="Digite seu email" {...register('login', { required: true })} className="form-input !ps-10 placeholder:text-white-dark" />
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
                      Entrar
                    </Button>
                  </form>
                  <div className="relative my-7 text-center md:mb-9">
                    <span className="absolute inset-x-0 top-1/2 h-px w-full -translate-y-1/2 bg-black"></span>
                    <span className="relative px-2 font-extrabold uppercase text-white bg-white-dark rounded">Outras formas de entrar</span>
                  </div>

                  <div className="flex flex-col mb-10">
                    <div className="flex flex-row bg-[#3403918f] border rounded-xl border-black p-2 items-center justify-center">
                      <img src="https://www.cdnlogo.com/logos/g/35/google-icon.svg" className="w-[50px] h-[50px]" />
                      <Text className="ml-5 text-lg font-bold text-white" as="span">Entrar com Google</Text>
                    </div>
                  </div>

                  <div className="text-center text-white mb-5 text-lg">
                    Não possui uma conta?&nbsp;
                    <span onClick={() => setSearchParams({ isLogin: 'false' })} className="cursor-pointer uppercase text-primary underline transition">
                      Cadastrar
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }

    </>
  )
}