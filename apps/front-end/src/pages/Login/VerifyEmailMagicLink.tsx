import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"
import { validateMagicLink } from "../../api/verifyLink"
import { useEffect } from "react"

export function VerifyEmailMagicLink() {
  const { token } = useParams() as { token: string }
  const { data } = useQuery({
    queryKey: ['validateToken'],
    queryFn: () => validateMagicLink(token)
  })
  console.log(data)
  useEffect(() => {
    window.location.replace('/')
  }, [data])
  return <>Redirecionando...</>
}