export type APIResponse<T> = {
    code: string,
    message: string,
    data?: T
};