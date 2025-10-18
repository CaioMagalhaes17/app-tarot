export function getDesktopGradientValues(path: string) {
  switch (path) {
    case '/':
      return ['30%', '100%']
    case '/minutes':
      return ['30%', '100%']
    case '/atendents/list':
      return ['20%', '50%']
    case '/atendents/profile/123':
      return ['0%', '35%']
    case '/atendents/profile/123/schedule':
      return ['0%', '35%']
    default:
      return ['30%', '100%']
  }
}

export function getMobileGradientValues(path: string) {
  switch (path) {
    case '/':
      return ['30%', '100%']
    case '/minutes':
      return ['30%', '100%']
    case '/atendents/list':
      return ['10%', '100%']
    case '/atendents/profile/123':
      return ['10%', '50%']
    case '/atendents/profile/123/schedule':
      return ['0%', '50%']
    default:
      return ['30%', '100%']
  }
}