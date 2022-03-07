export type KeyValueType = {
    [key: string]: string
}

export const makeObject = (key: string, value: string) => ({[key]: value})
