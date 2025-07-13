export function convertPathName(path: string) {
  switch (path) {
    case 'home':
      return 'Início'
    case 'minutes':
      return 'Minutos'
    case 'atendents':
      return 'Atendentes'
    case 'list':
      return 'Lista'
    case 'profile':
      return 'Perfil'
    default:
      return ''
  }

}