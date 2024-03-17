/**
 * A Deferred is a helpful utility class to deal with promises.
 * 
 * It provides methods to resolve and reject a promise rather than having
 * to do this via a callback.
 */
export class Deferred<T> {
    private readonly _promise: Promise<T>;

    // definite assignment since both are received and set in promise callback
    private _resolve!: (value: any) => void;
    private _reject!: (reason?: any) => void;

    constructor() {
        this._promise = new Promise<T>((resolve, reject) => {
            this._resolve = resolve;
            this._reject = reject;
        });
    }

    /**
     * Returns underlying promise held by the Deferred
     */
    public promise(): Promise<T> {
        return this._promise;
    }

    /**
     * Resolve the Deferred
     */
    public resolve(value: T) {
        this._resolve(value);
    }

    /**
     * Rejects the Deferred
     */
    public reject(reason?: any) {
        this._reject(reason);
    }
}
