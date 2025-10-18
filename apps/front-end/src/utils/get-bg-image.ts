export function getBackgroundImg(path: string) {

  if (path === '/') {
    return 'https://templatekit.jegtheme.com/pandoora/wp-content/uploads/sites/171/2021/09/bg-3WECX7L.jpg'
  }
  if (path.includes('/schedule')) {
    return 'https://templatekit.jegtheme.com/pandoora/wp-content/uploads/sites/171/2021/09/fantastic-night-sky-over-mountains.jpg'
  }
  return 'https://templatekit.jegtheme.com/pandoora/wp-content/uploads/sites/171/2021/09/fantastic-night-sky-over-mountains.jpg'
}