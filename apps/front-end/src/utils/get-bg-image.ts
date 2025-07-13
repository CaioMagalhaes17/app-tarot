export function getBackgroundImg(path: string) {
  console.log(path)
  switch (path) {
    case '/':
      return 'https://templatekit.jegtheme.com/pandoora/wp-content/uploads/sites/171/2021/09/bg-3WECX7L.jpg'
    case '/minutes':
      return ''
    case '/atendents/list':
      return 'https://templatekit.jegtheme.com/pandoora/wp-content/uploads/sites/171/2021/09/fantastic-night-sky-over-mountains.jpg'
    case '/atendents/profile/123':
      return 'https://templatekit.jegtheme.com/pandoora/wp-content/uploads/sites/171/2021/09/fantastic-night-sky-over-mountains.jpg'
  }
}