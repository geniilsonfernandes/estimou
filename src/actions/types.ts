export type ActionResponse<T = undefined> = {
  success: boolean
  message: string
} & (T extends undefined ? object : { data: T })
