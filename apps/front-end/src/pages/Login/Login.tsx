import { useMutation } from "@tanstack/react-query";
import { Link, useSearchParams } from "react-router-dom";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { login } from "../../api/login";
import { Button, IconLockDots, IconMail, Input } from "@app/ui";
import { GoogleLogin } from "@react-oauth/google";
import { loginWithGoogle as loginWithGoogleAPI } from "../../api/login-google";

interface LoginForm {
  login: string;
  password: string;
}

export function LoginPage() {
  const [searchParams] = useSearchParams({
    redirect: '',
  })
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

  const loginWithGoogle = async (accessToken: string) => {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('isAtendent')
    const response = await loginWithGoogleAPI(accessToken);
    console.log('response api', response)
    if (response.accessToken && response.accessToken.trim() !== '') {
      localStorage.setItem('accessToken', response.accessToken)
      localStorage.setItem('isAtendent', 'false')
    } else {
      throw new Error('Token não recebido do servidor');
    }
    window.location.replace('/')
  };
  return (
    <>
      <div style={{ backgroundImage: 'url("/stars2.png")' }} className="h-full w-full inset-0">
        <div className="relative font-extrabold flex min-h-screen items-center justify-center  px-6 py-10">
          <div className="w-full max-w-[570px] rounded-md p-2">
            <div className="flex flex-col justify-center rounded-md  bg-[#6028dcd1] a px-6 py-10">
              <div className="mx-auto scrollable w-full">
                <div className="mb-10">
                  <h1 className="text-3xl font-extrabold text-white">Entrar</h1>
                  <div className="w-full border-black/60 border mt-2" />

                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 text-white ">
                  <div>
                    <label className="text-left text-white" htmlFor="Name">Email</label>
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
                  </div>


                  <Button type="submit" className="btn btn-primary !mt-6 w-full border-0 uppercase ">
                    Entrar
                  </Button>
                </form>
                <div className="relative my-7 text-center md:mb-9">
                  <span className="absolute inset-x-0 top-1/2 h-px w-full -translate-y-1/2 bg-black"></span>
                  <span className="relative px-2 font-extrabold uppercase text-white bg-white-dark rounded">Outras formas de entrar</span>
                </div>

                <div className='mr-auto ml-auto flex justify-center mb-5'>
                  <GoogleLogin onSuccess={
                    async (response) => await loginWithGoogle(response.credential || '')
                  } onError={() => console.log('login failed')} width={'300px'} />
                </div>

                <div className="text-center text-white mb-5">
                  Não possui uma conta?&nbsp;
                  <Link to={`${searchParams.get('redirect') !== '' ? "/signup?redirect=" + searchParams.get('redirect') : "/signup"}`} className="uppercase relative px-2 font-extrabold uppercase text-white bg-white-dark rounded underline transition">
                    Cadastrar
                  </Link>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}