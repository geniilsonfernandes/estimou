export type ActionResponse<T = undefined> = {
  success: boolean
  message: string
} & (T extends undefined ? object : { data: T })

export class CustomError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'CustomError'
  }
}