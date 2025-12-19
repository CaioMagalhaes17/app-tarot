export function convertPathName(path: string) {
  switch (path) {
    case 'home':
      return 'Início'
    case 'minutes':
      return 'Minutos'
    case 'atendents':
      return 'Atendentes'
    case 'atendent':
      return 'Atendente'
    case 'services':
      return 'Serviços'
    case 'list':
      return 'Lista'
    case 'profile':
      return 'Perfil'
    case 'schedule':
      return 'Agendamento'
    default:
      return path
  }

}