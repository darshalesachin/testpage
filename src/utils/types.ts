type Maybe<T> = null | undefined | T

type FetchError = {
    [key: string]: string
}

type FetchState<T> = {
    pending: boolean
    data: Maybe<T>
    error: Maybe<FetchError>
    lastFetch: Maybe<number>
}

type DemoResponseEntity = {
    payload: string
    httpResponseCode: string
}
