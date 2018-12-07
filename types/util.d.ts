type Omit<T, E extends keyof T> = {
    [K in Exclude<keyof T, E>]: T[K]
};
