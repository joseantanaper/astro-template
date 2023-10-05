import type { MiddlewareNextResponse } from 'astro'
import { sequence } from 'astro:middleware'

const cookie = async ({ locals, cookies }, next: MiddlewareNextResponse) => {
  console.log(
    'middleware',
    'cookie',
    typeof locals,
    typeof cookies,
    typeof next
  )
  locals.cookie = {
    last: cookies.has('last') ? cookies.get('last')!.value : '',
    language: cookies.has('language') ? cookies.get('language')!.value : '',
    theme: cookies.has('theme') ? cookies.get('theme')!.value : '',
    username: cookies.has('username') ? cookies.get('username')!.value : ''
  }
  return next()
}

const validate = async ({ locals }, next) => {
  console.log('middleware', 'validate')
  if (!locals.cookie.username)
    return new Response('Forbidden', {
      status: 403
    })
  return next()
}

const title = async ({ locals }, next) => {
  console.log('middleware', 'title')
  locals.title = `App ${locals.cookie.username}`
  return next()
}

// export const onRequest = (context, next) => {
//   // intercept response data from a request
//   // optionally, transform the response by modifying `locals`
//   console.log('middleware', context, next)
//   return next()
// }

export const onRequest = sequence(cookie, validate, title)
