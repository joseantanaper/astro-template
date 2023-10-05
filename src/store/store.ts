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

export const setConfig = (key: keyof Config, value: string) => {
  let config: Config = $config.get() as Config
  config[key] = value
  $config.set(config)
  console.log('store', 'setConfig', config)
}

export const setLast = (last: string) => {
  $last.set(last)
  setConfig('last', last)
  console.log('store', 'setLast', last)
  if (typeof window !== 'undefined') {
    console.log('store', 'setLast (localStorage)', last)
    setCookie('last', last)
    localStorage.setItem('last', last)
    sessionStorage.setItem('last', last)
  }
}

export const setTheme = (theme: string) => {
  $theme.set(theme)
  setConfig('theme', theme)
  console.log('store', 'setTheme', theme)
  if (typeof window !== 'undefined') {
    console.log('store', 'setTheme (localStorage)', theme)
    setCookie('theme', theme)
    localStorage.setItem('theme', theme)
    sessionStorage.setItem('theme', theme)
  }
}

export const setLanguage = (language: string) => {
  $language.set(language)
  setConfig('language', language)
  console.log('store', 'setLanguage', language)
  if (typeof window !== 'undefined') {
    console.log('store', 'setLanguage (localStorage)', language)
    setCookie('language', language)
    localStorage.setItem('language', language)
    sessionStorage.setItem('language', language)
  }
}

export const setUsername = (username: string) => {
  $username.set(username)
  setConfig('username', username)
  console.log('store', 'setUsername', username)
  if (typeof window !== 'undefined') {
    console.log('store', 'setUsername (localStorage)', username)
    setCookie('username', username)
    localStorage.setItem('username', username)
    sessionStorage.setItem('username', username)
  }
}
