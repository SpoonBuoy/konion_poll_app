import wretch from 'wretch'

const setError = (e) => {
  //set error in dialog

  console.log(e)
}

function handle403() {
  console.log('http-error - handle403')
  //show user a dialog to say that they are not allowed to do that operation
  setError('Forbidden')
}

function handle401() {
  console.log('http-error - handle401')
  //show user a dialog to say user needs to login Again
  setError('Unauthorized')
}

function handleTimeout() {
  console.log('http-error - handleTimeout')
  setError('Timeout')
}

function handle500() {
  console.log('http-error - handle500')
  setError('ServerError')
}

function handleFetchError() {
  console.log('http-error - handleFetchError')
  setError('Error')
}

export const api = () => {
  return (
    wretch(import.meta.env.VITE_API_SERVER) // Base url
      //.auth(`Bearer ${auth.token}`)
      .options({ credentials: 'include', mode: 'cors' })
      .middlewares([
        (next) => {
          return next
        }
      ])
      .resolve((res) => {
        res
          .forbidden(handle403)
          .unauthorized(handle401)
          .timeout(handleTimeout)
          .internalError(handle500)
          .fetchError(handleFetchError)

        return res
      })
  )
}
