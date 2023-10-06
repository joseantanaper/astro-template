import { atom } from 'nanostores'
import { setCookie } from '../utils/cookie'

interface Config {
  last: string
  language: string
  theme: string
  username: string
}

export const $config = atom({})
export const $last = atom('none')
export const $language = atom('')
export const $theme = atom('')
export const $username = atom('')

export const storeConfig = (key: keyof Config, value: string) => {
  let config: Config = $config.get() as Config
  config[key] = value
  $config.set(config)
  console.log('store', 'storeConfig', config)
}

export const storeLast = (last: string) => {
  $last.set(last)
  storeConfig('last', last)
  console.log('store', 'storeLast', last)
  if (typeof window !== 'undefined') {
    console.log('store', 'storeLast (localStorage)', last)
    setCookie('last', last)
    localStorage.setItem('last', last)
    sessionStorage.setItem('last', last)
  }
}

export const storeTheme = (theme: string) => {
  $theme.set(theme)
  storeConfig('theme', theme)
  console.log('store', 'setTheme', theme)
  if (typeof window !== 'undefined') {
    console.log('store', 'storeTheme (localStorage)', theme)
    setCookie('theme', theme)
    localStorage.setItem('theme', theme)
    sessionStorage.setItem('theme', theme)
  }
}

export const storeLanguage = (language: string) => {
  $language.set(language)
  storeConfig('language', language)
  console.log('store', 'storeLanguage', language)
  if (typeof window !== 'undefined') {
    console.log('store', 'storeLanguage (localStorage)', language)
    setCookie('language', language)
    localStorage.setItem('language', language)
    sessionStorage.setItem('language', language)
  }
}

export const storeUsername = (username: string) => {
  $username.set(username)
  storeConfig('username', username)
  console.log('store', 'storeUsername', username)
  if (typeof window !== 'undefined') {
    console.log('store', 'storeUsername (localStorage)', username)
    setCookie('username', username)
    localStorage.setItem('username', username)
    sessionStorage.setItem('username', username)
  }
}

export const retrieveTheme = () => {
  console.log('store', 'retrieveTheme', $theme.get())
  return $theme.get()
}
