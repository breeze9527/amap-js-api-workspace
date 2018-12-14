type Omit<T, E extends keyof T> = {
    [K in Exclude<keyof T, E>]: T[K]
};

type OmitUndefined<M> = Omit<M, { [K in keyof M]: M[K] extends undefined ? K : never }[keyof M]>;
type PickUndefined<M> = Omit<M, keyof OmitUndefined<M>>;

type AsType<T> = { [K in keyof T]: T[K]; };
