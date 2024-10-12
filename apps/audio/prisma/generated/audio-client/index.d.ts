
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Audio
 * 
 */
export type Audio = $Result.DefaultSelection<Prisma.$AudioPayload>
/**
 * Model Track
 * 
 */
export type Track = $Result.DefaultSelection<Prisma.$TrackPayload>
/**
 * Model DSP
 * 
 */
export type DSP = $Result.DefaultSelection<Prisma.$DSPPayload>
/**
 * Model Streams
 * 
 */
export type Streams = $Result.DefaultSelection<Prisma.$StreamsPayload>
/**
 * Model Country
 * 
 */
export type Country = $Result.DefaultSelection<Prisma.$CountryPayload>
/**
 * Model StreamByCountry
 * 
 */
export type StreamByCountry = $Result.DefaultSelection<Prisma.$StreamByCountryPayload>
/**
 * Model Store
 * 
 */
export type Store = $Result.DefaultSelection<Prisma.$StorePayload>
/**
 * Model CountryEarnings
 * 
 */
export type CountryEarnings = $Result.DefaultSelection<Prisma.$CountryEarningsPayload>
/**
 * Model MonthlyReport
 * 
 */
export type MonthlyReport = $Result.DefaultSelection<Prisma.$MonthlyReportPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Audio
 * const audio = await prisma.audio.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Audio
   * const audio = await prisma.audio.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.audio`: Exposes CRUD operations for the **Audio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Audio
    * const audio = await prisma.audio.findMany()
    * ```
    */
  get audio(): Prisma.AudioDelegate<ExtArgs>;

  /**
   * `prisma.track`: Exposes CRUD operations for the **Track** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tracks
    * const tracks = await prisma.track.findMany()
    * ```
    */
  get track(): Prisma.TrackDelegate<ExtArgs>;

  /**
   * `prisma.dSP`: Exposes CRUD operations for the **DSP** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DSPS
    * const dSPS = await prisma.dSP.findMany()
    * ```
    */
  get dSP(): Prisma.DSPDelegate<ExtArgs>;

  /**
   * `prisma.streams`: Exposes CRUD operations for the **Streams** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Streams
    * const streams = await prisma.streams.findMany()
    * ```
    */
  get streams(): Prisma.StreamsDelegate<ExtArgs>;

  /**
   * `prisma.country`: Exposes CRUD operations for the **Country** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Countries
    * const countries = await prisma.country.findMany()
    * ```
    */
  get country(): Prisma.CountryDelegate<ExtArgs>;

  /**
   * `prisma.streamByCountry`: Exposes CRUD operations for the **StreamByCountry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StreamByCountries
    * const streamByCountries = await prisma.streamByCountry.findMany()
    * ```
    */
  get streamByCountry(): Prisma.StreamByCountryDelegate<ExtArgs>;

  /**
   * `prisma.store`: Exposes CRUD operations for the **Store** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stores
    * const stores = await prisma.store.findMany()
    * ```
    */
  get store(): Prisma.StoreDelegate<ExtArgs>;

  /**
   * `prisma.countryEarnings`: Exposes CRUD operations for the **CountryEarnings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CountryEarnings
    * const countryEarnings = await prisma.countryEarnings.findMany()
    * ```
    */
  get countryEarnings(): Prisma.CountryEarningsDelegate<ExtArgs>;

  /**
   * `prisma.monthlyReport`: Exposes CRUD operations for the **MonthlyReport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MonthlyReports
    * const monthlyReports = await prisma.monthlyReport.findMany()
    * ```
    */
  get monthlyReport(): Prisma.MonthlyReportDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.18.0
   * Query Engine version: 4c784e32044a8a016d99474bd02a3b6123742169
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Audio: 'Audio',
    Track: 'Track',
    DSP: 'DSP',
    Streams: 'Streams',
    Country: 'Country',
    StreamByCountry: 'StreamByCountry',
    Store: 'Store',
    CountryEarnings: 'CountryEarnings',
    MonthlyReport: 'MonthlyReport'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "audio" | "track" | "dSP" | "streams" | "country" | "streamByCountry" | "store" | "countryEarnings" | "monthlyReport"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Audio: {
        payload: Prisma.$AudioPayload<ExtArgs>
        fields: Prisma.AudioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AudioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AudioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioPayload>
          }
          findFirst: {
            args: Prisma.AudioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AudioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioPayload>
          }
          findMany: {
            args: Prisma.AudioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioPayload>[]
          }
          create: {
            args: Prisma.AudioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioPayload>
          }
          createMany: {
            args: Prisma.AudioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AudioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioPayload>[]
          }
          delete: {
            args: Prisma.AudioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioPayload>
          }
          update: {
            args: Prisma.AudioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioPayload>
          }
          deleteMany: {
            args: Prisma.AudioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AudioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AudioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioPayload>
          }
          aggregate: {
            args: Prisma.AudioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAudio>
          }
          groupBy: {
            args: Prisma.AudioGroupByArgs<ExtArgs>
            result: $Utils.Optional<AudioGroupByOutputType>[]
          }
          count: {
            args: Prisma.AudioCountArgs<ExtArgs>
            result: $Utils.Optional<AudioCountAggregateOutputType> | number
          }
        }
      }
      Track: {
        payload: Prisma.$TrackPayload<ExtArgs>
        fields: Prisma.TrackFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TrackFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TrackFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackPayload>
          }
          findFirst: {
            args: Prisma.TrackFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TrackFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackPayload>
          }
          findMany: {
            args: Prisma.TrackFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackPayload>[]
          }
          create: {
            args: Prisma.TrackCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackPayload>
          }
          createMany: {
            args: Prisma.TrackCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TrackCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackPayload>[]
          }
          delete: {
            args: Prisma.TrackDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackPayload>
          }
          update: {
            args: Prisma.TrackUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackPayload>
          }
          deleteMany: {
            args: Prisma.TrackDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TrackUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TrackUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackPayload>
          }
          aggregate: {
            args: Prisma.TrackAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrack>
          }
          groupBy: {
            args: Prisma.TrackGroupByArgs<ExtArgs>
            result: $Utils.Optional<TrackGroupByOutputType>[]
          }
          count: {
            args: Prisma.TrackCountArgs<ExtArgs>
            result: $Utils.Optional<TrackCountAggregateOutputType> | number
          }
        }
      }
      DSP: {
        payload: Prisma.$DSPPayload<ExtArgs>
        fields: Prisma.DSPFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DSPFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DSPPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DSPFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DSPPayload>
          }
          findFirst: {
            args: Prisma.DSPFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DSPPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DSPFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DSPPayload>
          }
          findMany: {
            args: Prisma.DSPFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DSPPayload>[]
          }
          create: {
            args: Prisma.DSPCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DSPPayload>
          }
          createMany: {
            args: Prisma.DSPCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DSPCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DSPPayload>[]
          }
          delete: {
            args: Prisma.DSPDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DSPPayload>
          }
          update: {
            args: Prisma.DSPUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DSPPayload>
          }
          deleteMany: {
            args: Prisma.DSPDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DSPUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DSPUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DSPPayload>
          }
          aggregate: {
            args: Prisma.DSPAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDSP>
          }
          groupBy: {
            args: Prisma.DSPGroupByArgs<ExtArgs>
            result: $Utils.Optional<DSPGroupByOutputType>[]
          }
          count: {
            args: Prisma.DSPCountArgs<ExtArgs>
            result: $Utils.Optional<DSPCountAggregateOutputType> | number
          }
        }
      }
      Streams: {
        payload: Prisma.$StreamsPayload<ExtArgs>
        fields: Prisma.StreamsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StreamsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StreamsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamsPayload>
          }
          findFirst: {
            args: Prisma.StreamsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StreamsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamsPayload>
          }
          findMany: {
            args: Prisma.StreamsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamsPayload>[]
          }
          create: {
            args: Prisma.StreamsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamsPayload>
          }
          createMany: {
            args: Prisma.StreamsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StreamsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamsPayload>[]
          }
          delete: {
            args: Prisma.StreamsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamsPayload>
          }
          update: {
            args: Prisma.StreamsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamsPayload>
          }
          deleteMany: {
            args: Prisma.StreamsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StreamsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StreamsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamsPayload>
          }
          aggregate: {
            args: Prisma.StreamsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStreams>
          }
          groupBy: {
            args: Prisma.StreamsGroupByArgs<ExtArgs>
            result: $Utils.Optional<StreamsGroupByOutputType>[]
          }
          count: {
            args: Prisma.StreamsCountArgs<ExtArgs>
            result: $Utils.Optional<StreamsCountAggregateOutputType> | number
          }
        }
      }
      Country: {
        payload: Prisma.$CountryPayload<ExtArgs>
        fields: Prisma.CountryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CountryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CountryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          findFirst: {
            args: Prisma.CountryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CountryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          findMany: {
            args: Prisma.CountryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>[]
          }
          create: {
            args: Prisma.CountryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          createMany: {
            args: Prisma.CountryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CountryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>[]
          }
          delete: {
            args: Prisma.CountryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          update: {
            args: Prisma.CountryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          deleteMany: {
            args: Prisma.CountryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CountryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CountryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          aggregate: {
            args: Prisma.CountryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCountry>
          }
          groupBy: {
            args: Prisma.CountryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CountryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CountryCountArgs<ExtArgs>
            result: $Utils.Optional<CountryCountAggregateOutputType> | number
          }
        }
      }
      StreamByCountry: {
        payload: Prisma.$StreamByCountryPayload<ExtArgs>
        fields: Prisma.StreamByCountryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StreamByCountryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamByCountryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StreamByCountryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamByCountryPayload>
          }
          findFirst: {
            args: Prisma.StreamByCountryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamByCountryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StreamByCountryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamByCountryPayload>
          }
          findMany: {
            args: Prisma.StreamByCountryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamByCountryPayload>[]
          }
          create: {
            args: Prisma.StreamByCountryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamByCountryPayload>
          }
          createMany: {
            args: Prisma.StreamByCountryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StreamByCountryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamByCountryPayload>[]
          }
          delete: {
            args: Prisma.StreamByCountryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamByCountryPayload>
          }
          update: {
            args: Prisma.StreamByCountryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamByCountryPayload>
          }
          deleteMany: {
            args: Prisma.StreamByCountryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StreamByCountryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StreamByCountryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamByCountryPayload>
          }
          aggregate: {
            args: Prisma.StreamByCountryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStreamByCountry>
          }
          groupBy: {
            args: Prisma.StreamByCountryGroupByArgs<ExtArgs>
            result: $Utils.Optional<StreamByCountryGroupByOutputType>[]
          }
          count: {
            args: Prisma.StreamByCountryCountArgs<ExtArgs>
            result: $Utils.Optional<StreamByCountryCountAggregateOutputType> | number
          }
        }
      }
      Store: {
        payload: Prisma.$StorePayload<ExtArgs>
        fields: Prisma.StoreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StoreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StoreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          findFirst: {
            args: Prisma.StoreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StoreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          findMany: {
            args: Prisma.StoreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>[]
          }
          create: {
            args: Prisma.StoreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          createMany: {
            args: Prisma.StoreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StoreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>[]
          }
          delete: {
            args: Prisma.StoreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          update: {
            args: Prisma.StoreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          deleteMany: {
            args: Prisma.StoreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StoreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StoreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          aggregate: {
            args: Prisma.StoreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStore>
          }
          groupBy: {
            args: Prisma.StoreGroupByArgs<ExtArgs>
            result: $Utils.Optional<StoreGroupByOutputType>[]
          }
          count: {
            args: Prisma.StoreCountArgs<ExtArgs>
            result: $Utils.Optional<StoreCountAggregateOutputType> | number
          }
        }
      }
      CountryEarnings: {
        payload: Prisma.$CountryEarningsPayload<ExtArgs>
        fields: Prisma.CountryEarningsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CountryEarningsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryEarningsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CountryEarningsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryEarningsPayload>
          }
          findFirst: {
            args: Prisma.CountryEarningsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryEarningsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CountryEarningsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryEarningsPayload>
          }
          findMany: {
            args: Prisma.CountryEarningsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryEarningsPayload>[]
          }
          create: {
            args: Prisma.CountryEarningsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryEarningsPayload>
          }
          createMany: {
            args: Prisma.CountryEarningsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CountryEarningsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryEarningsPayload>[]
          }
          delete: {
            args: Prisma.CountryEarningsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryEarningsPayload>
          }
          update: {
            args: Prisma.CountryEarningsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryEarningsPayload>
          }
          deleteMany: {
            args: Prisma.CountryEarningsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CountryEarningsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CountryEarningsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryEarningsPayload>
          }
          aggregate: {
            args: Prisma.CountryEarningsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCountryEarnings>
          }
          groupBy: {
            args: Prisma.CountryEarningsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CountryEarningsGroupByOutputType>[]
          }
          count: {
            args: Prisma.CountryEarningsCountArgs<ExtArgs>
            result: $Utils.Optional<CountryEarningsCountAggregateOutputType> | number
          }
        }
      }
      MonthlyReport: {
        payload: Prisma.$MonthlyReportPayload<ExtArgs>
        fields: Prisma.MonthlyReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MonthlyReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MonthlyReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyReportPayload>
          }
          findFirst: {
            args: Prisma.MonthlyReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MonthlyReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyReportPayload>
          }
          findMany: {
            args: Prisma.MonthlyReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyReportPayload>[]
          }
          create: {
            args: Prisma.MonthlyReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyReportPayload>
          }
          createMany: {
            args: Prisma.MonthlyReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MonthlyReportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyReportPayload>[]
          }
          delete: {
            args: Prisma.MonthlyReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyReportPayload>
          }
          update: {
            args: Prisma.MonthlyReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyReportPayload>
          }
          deleteMany: {
            args: Prisma.MonthlyReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MonthlyReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MonthlyReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyReportPayload>
          }
          aggregate: {
            args: Prisma.MonthlyReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMonthlyReport>
          }
          groupBy: {
            args: Prisma.MonthlyReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<MonthlyReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.MonthlyReportCountArgs<ExtArgs>
            result: $Utils.Optional<MonthlyReportCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AudioCountOutputType
   */

  export type AudioCountOutputType = {
    Track: number
    Streams: number
    StreamByCountry: number
    Store: number
    MonthlyReport: number
    CountryEarnings: number
  }

  export type AudioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Track?: boolean | AudioCountOutputTypeCountTrackArgs
    Streams?: boolean | AudioCountOutputTypeCountStreamsArgs
    StreamByCountry?: boolean | AudioCountOutputTypeCountStreamByCountryArgs
    Store?: boolean | AudioCountOutputTypeCountStoreArgs
    MonthlyReport?: boolean | AudioCountOutputTypeCountMonthlyReportArgs
    CountryEarnings?: boolean | AudioCountOutputTypeCountCountryEarningsArgs
  }

  // Custom InputTypes
  /**
   * AudioCountOutputType without action
   */
  export type AudioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioCountOutputType
     */
    select?: AudioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AudioCountOutputType without action
   */
  export type AudioCountOutputTypeCountTrackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrackWhereInput
  }

  /**
   * AudioCountOutputType without action
   */
  export type AudioCountOutputTypeCountStreamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StreamsWhereInput
  }

  /**
   * AudioCountOutputType without action
   */
  export type AudioCountOutputTypeCountStreamByCountryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StreamByCountryWhereInput
  }

  /**
   * AudioCountOutputType without action
   */
  export type AudioCountOutputTypeCountStoreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoreWhereInput
  }

  /**
   * AudioCountOutputType without action
   */
  export type AudioCountOutputTypeCountMonthlyReportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MonthlyReportWhereInput
  }

  /**
   * AudioCountOutputType without action
   */
  export type AudioCountOutputTypeCountCountryEarningsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CountryEarningsWhereInput
  }


  /**
   * Count Type DSPCountOutputType
   */

  export type DSPCountOutputType = {
    streams: number
  }

  export type DSPCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    streams?: boolean | DSPCountOutputTypeCountStreamsArgs
  }

  // Custom InputTypes
  /**
   * DSPCountOutputType without action
   */
  export type DSPCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DSPCountOutputType
     */
    select?: DSPCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DSPCountOutputType without action
   */
  export type DSPCountOutputTypeCountStreamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StreamsWhereInput
  }


  /**
   * Count Type CountryCountOutputType
   */

  export type CountryCountOutputType = {
    streamsByCountry: number
  }

  export type CountryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    streamsByCountry?: boolean | CountryCountOutputTypeCountStreamsByCountryArgs
  }

  // Custom InputTypes
  /**
   * CountryCountOutputType without action
   */
  export type CountryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryCountOutputType
     */
    select?: CountryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CountryCountOutputType without action
   */
  export type CountryCountOutputTypeCountStreamsByCountryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StreamByCountryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Audio
   */

  export type AggregateAudio = {
    _count: AudioCountAggregateOutputType | null
    _min: AudioMinAggregateOutputType | null
    _max: AudioMaxAggregateOutputType | null
  }

  export type AudioMinAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    artist: string | null
    releaseDate: Date | null
    primaryGenre: string | null
    secondaryGenre: string | null
    language: string | null
    label: string | null
    copyrightHolder: string | null
    copyrightYear: string | null
    productionHolder: string | null
    productionYear: string | null
    releaseCover: string | null
    releaseAudio: string | null
    releaseAudioLink: string | null
    lyrics: string | null
    releaseType: string | null
    status: string | null
    UPC: string | null
    ISRC: string | null
    createdAt: Date | null
    updatedAt: Date | null
    smartLink: string | null
  }

  export type AudioMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    artist: string | null
    releaseDate: Date | null
    primaryGenre: string | null
    secondaryGenre: string | null
    language: string | null
    label: string | null
    copyrightHolder: string | null
    copyrightYear: string | null
    productionHolder: string | null
    productionYear: string | null
    releaseCover: string | null
    releaseAudio: string | null
    releaseAudioLink: string | null
    lyrics: string | null
    releaseType: string | null
    status: string | null
    UPC: string | null
    ISRC: string | null
    createdAt: Date | null
    updatedAt: Date | null
    smartLink: string | null
  }

  export type AudioCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    artist: number
    releaseDate: number
    primaryGenre: number
    secondaryGenre: number
    language: number
    label: number
    copyrightHolder: number
    copyrightYear: number
    productionHolder: number
    productionYear: number
    releaseCover: number
    releaseAudio: number
    releaseAudioLink: number
    lyrics: number
    releaseType: number
    status: number
    UPC: number
    ISRC: number
    createdAt: number
    updatedAt: number
    smartLink: number
    _all: number
  }


  export type AudioMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    artist?: true
    releaseDate?: true
    primaryGenre?: true
    secondaryGenre?: true
    language?: true
    label?: true
    copyrightHolder?: true
    copyrightYear?: true
    productionHolder?: true
    productionYear?: true
    releaseCover?: true
    releaseAudio?: true
    releaseAudioLink?: true
    lyrics?: true
    releaseType?: true
    status?: true
    UPC?: true
    ISRC?: true
    createdAt?: true
    updatedAt?: true
    smartLink?: true
  }

  export type AudioMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    artist?: true
    releaseDate?: true
    primaryGenre?: true
    secondaryGenre?: true
    language?: true
    label?: true
    copyrightHolder?: true
    copyrightYear?: true
    productionHolder?: true
    productionYear?: true
    releaseCover?: true
    releaseAudio?: true
    releaseAudioLink?: true
    lyrics?: true
    releaseType?: true
    status?: true
    UPC?: true
    ISRC?: true
    createdAt?: true
    updatedAt?: true
    smartLink?: true
  }

  export type AudioCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    artist?: true
    releaseDate?: true
    primaryGenre?: true
    secondaryGenre?: true
    language?: true
    label?: true
    copyrightHolder?: true
    copyrightYear?: true
    productionHolder?: true
    productionYear?: true
    releaseCover?: true
    releaseAudio?: true
    releaseAudioLink?: true
    lyrics?: true
    releaseType?: true
    status?: true
    UPC?: true
    ISRC?: true
    createdAt?: true
    updatedAt?: true
    smartLink?: true
    _all?: true
  }

  export type AudioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Audio to aggregate.
     */
    where?: AudioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Audio to fetch.
     */
    orderBy?: AudioOrderByWithRelationInput | AudioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AudioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Audio from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Audio.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Audio
    **/
    _count?: true | AudioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AudioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AudioMaxAggregateInputType
  }

  export type GetAudioAggregateType<T extends AudioAggregateArgs> = {
        [P in keyof T & keyof AggregateAudio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAudio[P]>
      : GetScalarType<T[P], AggregateAudio[P]>
  }




  export type AudioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AudioWhereInput
    orderBy?: AudioOrderByWithAggregationInput | AudioOrderByWithAggregationInput[]
    by: AudioScalarFieldEnum[] | AudioScalarFieldEnum
    having?: AudioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AudioCountAggregateInputType | true
    _min?: AudioMinAggregateInputType
    _max?: AudioMaxAggregateInputType
  }

  export type AudioGroupByOutputType = {
    id: string
    userId: string
    title: string
    artist: string
    releaseDate: Date
    primaryGenre: string
    secondaryGenre: string
    language: string
    label: string
    copyrightHolder: string
    copyrightYear: string
    productionHolder: string
    productionYear: string
    releaseCover: string
    releaseAudio: string | null
    releaseAudioLink: string | null
    lyrics: string | null
    releaseType: string
    status: string
    UPC: string
    ISRC: string
    createdAt: Date
    updatedAt: Date
    smartLink: string
    _count: AudioCountAggregateOutputType | null
    _min: AudioMinAggregateOutputType | null
    _max: AudioMaxAggregateOutputType | null
  }

  type GetAudioGroupByPayload<T extends AudioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AudioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AudioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AudioGroupByOutputType[P]>
            : GetScalarType<T[P], AudioGroupByOutputType[P]>
        }
      >
    >


  export type AudioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    artist?: boolean
    releaseDate?: boolean
    primaryGenre?: boolean
    secondaryGenre?: boolean
    language?: boolean
    label?: boolean
    copyrightHolder?: boolean
    copyrightYear?: boolean
    productionHolder?: boolean
    productionYear?: boolean
    releaseCover?: boolean
    releaseAudio?: boolean
    releaseAudioLink?: boolean
    lyrics?: boolean
    releaseType?: boolean
    status?: boolean
    UPC?: boolean
    ISRC?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    smartLink?: boolean
    Track?: boolean | Audio$TrackArgs<ExtArgs>
    Streams?: boolean | Audio$StreamsArgs<ExtArgs>
    StreamByCountry?: boolean | Audio$StreamByCountryArgs<ExtArgs>
    Store?: boolean | Audio$StoreArgs<ExtArgs>
    MonthlyReport?: boolean | Audio$MonthlyReportArgs<ExtArgs>
    CountryEarnings?: boolean | Audio$CountryEarningsArgs<ExtArgs>
    _count?: boolean | AudioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["audio"]>

  export type AudioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    artist?: boolean
    releaseDate?: boolean
    primaryGenre?: boolean
    secondaryGenre?: boolean
    language?: boolean
    label?: boolean
    copyrightHolder?: boolean
    copyrightYear?: boolean
    productionHolder?: boolean
    productionYear?: boolean
    releaseCover?: boolean
    releaseAudio?: boolean
    releaseAudioLink?: boolean
    lyrics?: boolean
    releaseType?: boolean
    status?: boolean
    UPC?: boolean
    ISRC?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    smartLink?: boolean
  }, ExtArgs["result"]["audio"]>

  export type AudioSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    artist?: boolean
    releaseDate?: boolean
    primaryGenre?: boolean
    secondaryGenre?: boolean
    language?: boolean
    label?: boolean
    copyrightHolder?: boolean
    copyrightYear?: boolean
    productionHolder?: boolean
    productionYear?: boolean
    releaseCover?: boolean
    releaseAudio?: boolean
    releaseAudioLink?: boolean
    lyrics?: boolean
    releaseType?: boolean
    status?: boolean
    UPC?: boolean
    ISRC?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    smartLink?: boolean
  }

  export type AudioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Track?: boolean | Audio$TrackArgs<ExtArgs>
    Streams?: boolean | Audio$StreamsArgs<ExtArgs>
    StreamByCountry?: boolean | Audio$StreamByCountryArgs<ExtArgs>
    Store?: boolean | Audio$StoreArgs<ExtArgs>
    MonthlyReport?: boolean | Audio$MonthlyReportArgs<ExtArgs>
    CountryEarnings?: boolean | Audio$CountryEarningsArgs<ExtArgs>
    _count?: boolean | AudioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AudioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AudioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Audio"
    objects: {
      Track: Prisma.$TrackPayload<ExtArgs>[]
      Streams: Prisma.$StreamsPayload<ExtArgs>[]
      StreamByCountry: Prisma.$StreamByCountryPayload<ExtArgs>[]
      Store: Prisma.$StorePayload<ExtArgs>[]
      MonthlyReport: Prisma.$MonthlyReportPayload<ExtArgs>[]
      CountryEarnings: Prisma.$CountryEarningsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      title: string
      artist: string
      releaseDate: Date
      primaryGenre: string
      secondaryGenre: string
      language: string
      label: string
      copyrightHolder: string
      copyrightYear: string
      productionHolder: string
      productionYear: string
      releaseCover: string
      releaseAudio: string | null
      releaseAudioLink: string | null
      lyrics: string | null
      releaseType: string
      status: string
      UPC: string
      ISRC: string
      createdAt: Date
      updatedAt: Date
      smartLink: string
    }, ExtArgs["result"]["audio"]>
    composites: {}
  }

  type AudioGetPayload<S extends boolean | null | undefined | AudioDefaultArgs> = $Result.GetResult<Prisma.$AudioPayload, S>

  type AudioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AudioFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AudioCountAggregateInputType | true
    }

  export interface AudioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Audio'], meta: { name: 'Audio' } }
    /**
     * Find zero or one Audio that matches the filter.
     * @param {AudioFindUniqueArgs} args - Arguments to find a Audio
     * @example
     * // Get one Audio
     * const audio = await prisma.audio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AudioFindUniqueArgs>(args: SelectSubset<T, AudioFindUniqueArgs<ExtArgs>>): Prisma__AudioClient<$Result.GetResult<Prisma.$AudioPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Audio that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AudioFindUniqueOrThrowArgs} args - Arguments to find a Audio
     * @example
     * // Get one Audio
     * const audio = await prisma.audio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AudioFindUniqueOrThrowArgs>(args: SelectSubset<T, AudioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AudioClient<$Result.GetResult<Prisma.$AudioPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Audio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioFindFirstArgs} args - Arguments to find a Audio
     * @example
     * // Get one Audio
     * const audio = await prisma.audio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AudioFindFirstArgs>(args?: SelectSubset<T, AudioFindFirstArgs<ExtArgs>>): Prisma__AudioClient<$Result.GetResult<Prisma.$AudioPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Audio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioFindFirstOrThrowArgs} args - Arguments to find a Audio
     * @example
     * // Get one Audio
     * const audio = await prisma.audio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AudioFindFirstOrThrowArgs>(args?: SelectSubset<T, AudioFindFirstOrThrowArgs<ExtArgs>>): Prisma__AudioClient<$Result.GetResult<Prisma.$AudioPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Audio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Audio
     * const audio = await prisma.audio.findMany()
     * 
     * // Get first 10 Audio
     * const audio = await prisma.audio.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const audioWithIdOnly = await prisma.audio.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AudioFindManyArgs>(args?: SelectSubset<T, AudioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AudioPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Audio.
     * @param {AudioCreateArgs} args - Arguments to create a Audio.
     * @example
     * // Create one Audio
     * const Audio = await prisma.audio.create({
     *   data: {
     *     // ... data to create a Audio
     *   }
     * })
     * 
     */
    create<T extends AudioCreateArgs>(args: SelectSubset<T, AudioCreateArgs<ExtArgs>>): Prisma__AudioClient<$Result.GetResult<Prisma.$AudioPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Audio.
     * @param {AudioCreateManyArgs} args - Arguments to create many Audio.
     * @example
     * // Create many Audio
     * const audio = await prisma.audio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AudioCreateManyArgs>(args?: SelectSubset<T, AudioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Audio and returns the data saved in the database.
     * @param {AudioCreateManyAndReturnArgs} args - Arguments to create many Audio.
     * @example
     * // Create many Audio
     * const audio = await prisma.audio.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Audio and only return the `id`
     * const audioWithIdOnly = await prisma.audio.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AudioCreateManyAndReturnArgs>(args?: SelectSubset<T, AudioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AudioPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Audio.
     * @param {AudioDeleteArgs} args - Arguments to delete one Audio.
     * @example
     * // Delete one Audio
     * const Audio = await prisma.audio.delete({
     *   where: {
     *     // ... filter to delete one Audio
     *   }
     * })
     * 
     */
    delete<T extends AudioDeleteArgs>(args: SelectSubset<T, AudioDeleteArgs<ExtArgs>>): Prisma__AudioClient<$Result.GetResult<Prisma.$AudioPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Audio.
     * @param {AudioUpdateArgs} args - Arguments to update one Audio.
     * @example
     * // Update one Audio
     * const audio = await prisma.audio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AudioUpdateArgs>(args: SelectSubset<T, AudioUpdateArgs<ExtArgs>>): Prisma__AudioClient<$Result.GetResult<Prisma.$AudioPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Audio.
     * @param {AudioDeleteManyArgs} args - Arguments to filter Audio to delete.
     * @example
     * // Delete a few Audio
     * const { count } = await prisma.audio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AudioDeleteManyArgs>(args?: SelectSubset<T, AudioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Audio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Audio
     * const audio = await prisma.audio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AudioUpdateManyArgs>(args: SelectSubset<T, AudioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Audio.
     * @param {AudioUpsertArgs} args - Arguments to update or create a Audio.
     * @example
     * // Update or create a Audio
     * const audio = await prisma.audio.upsert({
     *   create: {
     *     // ... data to create a Audio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Audio we want to update
     *   }
     * })
     */
    upsert<T extends AudioUpsertArgs>(args: SelectSubset<T, AudioUpsertArgs<ExtArgs>>): Prisma__AudioClient<$Result.GetResult<Prisma.$AudioPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Audio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioCountArgs} args - Arguments to filter Audio to count.
     * @example
     * // Count the number of Audio
     * const count = await prisma.audio.count({
     *   where: {
     *     // ... the filter for the Audio we want to count
     *   }
     * })
    **/
    count<T extends AudioCountArgs>(
      args?: Subset<T, AudioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AudioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Audio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AudioAggregateArgs>(args: Subset<T, AudioAggregateArgs>): Prisma.PrismaPromise<GetAudioAggregateType<T>>

    /**
     * Group by Audio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AudioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AudioGroupByArgs['orderBy'] }
        : { orderBy?: AudioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AudioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAudioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Audio model
   */
  readonly fields: AudioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Audio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AudioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Track<T extends Audio$TrackArgs<ExtArgs> = {}>(args?: Subset<T, Audio$TrackArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "findMany"> | Null>
    Streams<T extends Audio$StreamsArgs<ExtArgs> = {}>(args?: Subset<T, Audio$StreamsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StreamsPayload<ExtArgs>, T, "findMany"> | Null>
    StreamByCountry<T extends Audio$StreamByCountryArgs<ExtArgs> = {}>(args?: Subset<T, Audio$StreamByCountryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StreamByCountryPayload<ExtArgs>, T, "findMany"> | Null>
    Store<T extends Audio$StoreArgs<ExtArgs> = {}>(args?: Subset<T, Audio$StoreArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findMany"> | Null>
    MonthlyReport<T extends Audio$MonthlyReportArgs<ExtArgs> = {}>(args?: Subset<T, Audio$MonthlyReportArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonthlyReportPayload<ExtArgs>, T, "findMany"> | Null>
    CountryEarnings<T extends Audio$CountryEarningsArgs<ExtArgs> = {}>(args?: Subset<T, Audio$CountryEarningsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountryEarningsPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Audio model
   */ 
  interface AudioFieldRefs {
    readonly id: FieldRef<"Audio", 'String'>
    readonly userId: FieldRef<"Audio", 'String'>
    readonly title: FieldRef<"Audio", 'String'>
    readonly artist: FieldRef<"Audio", 'String'>
    readonly releaseDate: FieldRef<"Audio", 'DateTime'>
    readonly primaryGenre: FieldRef<"Audio", 'String'>
    readonly secondaryGenre: FieldRef<"Audio", 'String'>
    readonly language: FieldRef<"Audio", 'String'>
    readonly label: FieldRef<"Audio", 'String'>
    readonly copyrightHolder: FieldRef<"Audio", 'String'>
    readonly copyrightYear: FieldRef<"Audio", 'String'>
    readonly productionHolder: FieldRef<"Audio", 'String'>
    readonly productionYear: FieldRef<"Audio", 'String'>
    readonly releaseCover: FieldRef<"Audio", 'String'>
    readonly releaseAudio: FieldRef<"Audio", 'String'>
    readonly releaseAudioLink: FieldRef<"Audio", 'String'>
    readonly lyrics: FieldRef<"Audio", 'String'>
    readonly releaseType: FieldRef<"Audio", 'String'>
    readonly status: FieldRef<"Audio", 'String'>
    readonly UPC: FieldRef<"Audio", 'String'>
    readonly ISRC: FieldRef<"Audio", 'String'>
    readonly createdAt: FieldRef<"Audio", 'DateTime'>
    readonly updatedAt: FieldRef<"Audio", 'DateTime'>
    readonly smartLink: FieldRef<"Audio", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Audio findUnique
   */
  export type AudioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audio
     */
    select?: AudioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudioInclude<ExtArgs> | null
    /**
     * Filter, which Audio to fetch.
     */
    where: AudioWhereUniqueInput
  }

  /**
   * Audio findUniqueOrThrow
   */
  export type AudioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audio
     */
    select?: AudioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudioInclude<ExtArgs> | null
    /**
     * Filter, which Audio to fetch.
     */
    where: AudioWhereUniqueInput
  }

  /**
   * Audio findFirst
   */
  export type AudioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audio
     */
    select?: AudioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudioInclude<ExtArgs> | null
    /**
     * Filter, which Audio to fetch.
     */
    where?: AudioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Audio to fetch.
     */
    orderBy?: AudioOrderByWithRelationInput | AudioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Audio.
     */
    cursor?: AudioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Audio from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Audio.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Audio.
     */
    distinct?: AudioScalarFieldEnum | AudioScalarFieldEnum[]
  }

  /**
   * Audio findFirstOrThrow
   */
  export type AudioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audio
     */
    select?: AudioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudioInclude<ExtArgs> | null
    /**
     * Filter, which Audio to fetch.
     */
    where?: AudioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Audio to fetch.
     */
    orderBy?: AudioOrderByWithRelationInput | AudioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Audio.
     */
    cursor?: AudioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Audio from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Audio.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Audio.
     */
    distinct?: AudioScalarFieldEnum | AudioScalarFieldEnum[]
  }

  /**
   * Audio findMany
   */
  export type AudioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audio
     */
    select?: AudioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudioInclude<ExtArgs> | null
    /**
     * Filter, which Audio to fetch.
     */
    where?: AudioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Audio to fetch.
     */
    orderBy?: AudioOrderByWithRelationInput | AudioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Audio.
     */
    cursor?: AudioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Audio from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Audio.
     */
    skip?: number
    distinct?: AudioScalarFieldEnum | AudioScalarFieldEnum[]
  }

  /**
   * Audio create
   */
  export type AudioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audio
     */
    select?: AudioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudioInclude<ExtArgs> | null
    /**
     * The data needed to create a Audio.
     */
    data: XOR<AudioCreateInput, AudioUncheckedCreateInput>
  }

  /**
   * Audio createMany
   */
  export type AudioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Audio.
     */
    data: AudioCreateManyInput | AudioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Audio createManyAndReturn
   */
  export type AudioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audio
     */
    select?: AudioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Audio.
     */
    data: AudioCreateManyInput | AudioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Audio update
   */
  export type AudioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audio
     */
    select?: AudioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudioInclude<ExtArgs> | null
    /**
     * The data needed to update a Audio.
     */
    data: XOR<AudioUpdateInput, AudioUncheckedUpdateInput>
    /**
     * Choose, which Audio to update.
     */
    where: AudioWhereUniqueInput
  }

  /**
   * Audio updateMany
   */
  export type AudioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Audio.
     */
    data: XOR<AudioUpdateManyMutationInput, AudioUncheckedUpdateManyInput>
    /**
     * Filter which Audio to update
     */
    where?: AudioWhereInput
  }

  /**
   * Audio upsert
   */
  export type AudioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audio
     */
    select?: AudioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudioInclude<ExtArgs> | null
    /**
     * The filter to search for the Audio to update in case it exists.
     */
    where: AudioWhereUniqueInput
    /**
     * In case the Audio found by the `where` argument doesn't exist, create a new Audio with this data.
     */
    create: XOR<AudioCreateInput, AudioUncheckedCreateInput>
    /**
     * In case the Audio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AudioUpdateInput, AudioUncheckedUpdateInput>
  }

  /**
   * Audio delete
   */
  export type AudioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audio
     */
    select?: AudioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudioInclude<ExtArgs> | null
    /**
     * Filter which Audio to delete.
     */
    where: AudioWhereUniqueInput
  }

  /**
   * Audio deleteMany
   */
  export type AudioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Audio to delete
     */
    where?: AudioWhereInput
  }

  /**
   * Audio.Track
   */
  export type Audio$TrackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackInclude<ExtArgs> | null
    where?: TrackWhereInput
    orderBy?: TrackOrderByWithRelationInput | TrackOrderByWithRelationInput[]
    cursor?: TrackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TrackScalarFieldEnum | TrackScalarFieldEnum[]
  }

  /**
   * Audio.Streams
   */
  export type Audio$StreamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streams
     */
    select?: StreamsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamsInclude<ExtArgs> | null
    where?: StreamsWhereInput
    orderBy?: StreamsOrderByWithRelationInput | StreamsOrderByWithRelationInput[]
    cursor?: StreamsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StreamsScalarFieldEnum | StreamsScalarFieldEnum[]
  }

  /**
   * Audio.StreamByCountry
   */
  export type Audio$StreamByCountryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamByCountry
     */
    select?: StreamByCountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamByCountryInclude<ExtArgs> | null
    where?: StreamByCountryWhereInput
    orderBy?: StreamByCountryOrderByWithRelationInput | StreamByCountryOrderByWithRelationInput[]
    cursor?: StreamByCountryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StreamByCountryScalarFieldEnum | StreamByCountryScalarFieldEnum[]
  }

  /**
   * Audio.Store
   */
  export type Audio$StoreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    where?: StoreWhereInput
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    cursor?: StoreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }

  /**
   * Audio.MonthlyReport
   */
  export type Audio$MonthlyReportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyReport
     */
    select?: MonthlyReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyReportInclude<ExtArgs> | null
    where?: MonthlyReportWhereInput
    orderBy?: MonthlyReportOrderByWithRelationInput | MonthlyReportOrderByWithRelationInput[]
    cursor?: MonthlyReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MonthlyReportScalarFieldEnum | MonthlyReportScalarFieldEnum[]
  }

  /**
   * Audio.CountryEarnings
   */
  export type Audio$CountryEarningsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryEarnings
     */
    select?: CountryEarningsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryEarningsInclude<ExtArgs> | null
    where?: CountryEarningsWhereInput
    orderBy?: CountryEarningsOrderByWithRelationInput | CountryEarningsOrderByWithRelationInput[]
    cursor?: CountryEarningsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CountryEarningsScalarFieldEnum | CountryEarningsScalarFieldEnum[]
  }

  /**
   * Audio without action
   */
  export type AudioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audio
     */
    select?: AudioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudioInclude<ExtArgs> | null
  }


  /**
   * Model Track
   */

  export type AggregateTrack = {
    _count: TrackCountAggregateOutputType | null
    _avg: TrackAvgAggregateOutputType | null
    _sum: TrackSumAggregateOutputType | null
    _min: TrackMinAggregateOutputType | null
    _max: TrackMaxAggregateOutputType | null
  }

  export type TrackAvgAggregateOutputType = {
    trackNumber: number | null
  }

  export type TrackSumAggregateOutputType = {
    trackNumber: number | null
  }

  export type TrackMinAggregateOutputType = {
    id: string | null
    audioId: string | null
    title: string | null
    lyrics: string | null
    productionCredit: string | null
    ISRC: string | null
    trackNumber: number | null
    audioLink: string | null
  }

  export type TrackMaxAggregateOutputType = {
    id: string | null
    audioId: string | null
    title: string | null
    lyrics: string | null
    productionCredit: string | null
    ISRC: string | null
    trackNumber: number | null
    audioLink: string | null
  }

  export type TrackCountAggregateOutputType = {
    id: number
    audioId: number
    title: number
    lyrics: number
    productionCredit: number
    ISRC: number
    trackNumber: number
    audioLink: number
    _all: number
  }


  export type TrackAvgAggregateInputType = {
    trackNumber?: true
  }

  export type TrackSumAggregateInputType = {
    trackNumber?: true
  }

  export type TrackMinAggregateInputType = {
    id?: true
    audioId?: true
    title?: true
    lyrics?: true
    productionCredit?: true
    ISRC?: true
    trackNumber?: true
    audioLink?: true
  }

  export type TrackMaxAggregateInputType = {
    id?: true
    audioId?: true
    title?: true
    lyrics?: true
    productionCredit?: true
    ISRC?: true
    trackNumber?: true
    audioLink?: true
  }

  export type TrackCountAggregateInputType = {
    id?: true
    audioId?: true
    title?: true
    lyrics?: true
    productionCredit?: true
    ISRC?: true
    trackNumber?: true
    audioLink?: true
    _all?: true
  }

  export type TrackAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Track to aggregate.
     */
    where?: TrackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tracks to fetch.
     */
    orderBy?: TrackOrderByWithRelationInput | TrackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TrackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tracks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tracks
    **/
    _count?: true | TrackCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TrackAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TrackSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrackMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrackMaxAggregateInputType
  }

  export type GetTrackAggregateType<T extends TrackAggregateArgs> = {
        [P in keyof T & keyof AggregateTrack]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrack[P]>
      : GetScalarType<T[P], AggregateTrack[P]>
  }




  export type TrackGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrackWhereInput
    orderBy?: TrackOrderByWithAggregationInput | TrackOrderByWithAggregationInput[]
    by: TrackScalarFieldEnum[] | TrackScalarFieldEnum
    having?: TrackScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrackCountAggregateInputType | true
    _avg?: TrackAvgAggregateInputType
    _sum?: TrackSumAggregateInputType
    _min?: TrackMinAggregateInputType
    _max?: TrackMaxAggregateInputType
  }

  export type TrackGroupByOutputType = {
    id: string
    audioId: string
    title: string
    lyrics: string | null
    productionCredit: string | null
    ISRC: string | null
    trackNumber: number
    audioLink: string
    _count: TrackCountAggregateOutputType | null
    _avg: TrackAvgAggregateOutputType | null
    _sum: TrackSumAggregateOutputType | null
    _min: TrackMinAggregateOutputType | null
    _max: TrackMaxAggregateOutputType | null
  }

  type GetTrackGroupByPayload<T extends TrackGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TrackGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrackGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrackGroupByOutputType[P]>
            : GetScalarType<T[P], TrackGroupByOutputType[P]>
        }
      >
    >


  export type TrackSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    audioId?: boolean
    title?: boolean
    lyrics?: boolean
    productionCredit?: boolean
    ISRC?: boolean
    trackNumber?: boolean
    audioLink?: boolean
    Audio?: boolean | AudioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["track"]>

  export type TrackSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    audioId?: boolean
    title?: boolean
    lyrics?: boolean
    productionCredit?: boolean
    ISRC?: boolean
    trackNumber?: boolean
    audioLink?: boolean
    Audio?: boolean | AudioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["track"]>

  export type TrackSelectScalar = {
    id?: boolean
    audioId?: boolean
    title?: boolean
    lyrics?: boolean
    productionCredit?: boolean
    ISRC?: boolean
    trackNumber?: boolean
    audioLink?: boolean
  }

  export type TrackInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Audio?: boolean | AudioDefaultArgs<ExtArgs>
  }
  export type TrackIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Audio?: boolean | AudioDefaultArgs<ExtArgs>
  }

  export type $TrackPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Track"
    objects: {
      Audio: Prisma.$AudioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      audioId: string
      title: string
      lyrics: string | null
      productionCredit: string | null
      ISRC: string | null
      trackNumber: number
      audioLink: string
    }, ExtArgs["result"]["track"]>
    composites: {}
  }

  type TrackGetPayload<S extends boolean | null | undefined | TrackDefaultArgs> = $Result.GetResult<Prisma.$TrackPayload, S>

  type TrackCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TrackFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TrackCountAggregateInputType | true
    }

  export interface TrackDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Track'], meta: { name: 'Track' } }
    /**
     * Find zero or one Track that matches the filter.
     * @param {TrackFindUniqueArgs} args - Arguments to find a Track
     * @example
     * // Get one Track
     * const track = await prisma.track.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TrackFindUniqueArgs>(args: SelectSubset<T, TrackFindUniqueArgs<ExtArgs>>): Prisma__TrackClient<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Track that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TrackFindUniqueOrThrowArgs} args - Arguments to find a Track
     * @example
     * // Get one Track
     * const track = await prisma.track.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TrackFindUniqueOrThrowArgs>(args: SelectSubset<T, TrackFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TrackClient<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Track that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackFindFirstArgs} args - Arguments to find a Track
     * @example
     * // Get one Track
     * const track = await prisma.track.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TrackFindFirstArgs>(args?: SelectSubset<T, TrackFindFirstArgs<ExtArgs>>): Prisma__TrackClient<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Track that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackFindFirstOrThrowArgs} args - Arguments to find a Track
     * @example
     * // Get one Track
     * const track = await prisma.track.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TrackFindFirstOrThrowArgs>(args?: SelectSubset<T, TrackFindFirstOrThrowArgs<ExtArgs>>): Prisma__TrackClient<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tracks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tracks
     * const tracks = await prisma.track.findMany()
     * 
     * // Get first 10 Tracks
     * const tracks = await prisma.track.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const trackWithIdOnly = await prisma.track.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TrackFindManyArgs>(args?: SelectSubset<T, TrackFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Track.
     * @param {TrackCreateArgs} args - Arguments to create a Track.
     * @example
     * // Create one Track
     * const Track = await prisma.track.create({
     *   data: {
     *     // ... data to create a Track
     *   }
     * })
     * 
     */
    create<T extends TrackCreateArgs>(args: SelectSubset<T, TrackCreateArgs<ExtArgs>>): Prisma__TrackClient<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tracks.
     * @param {TrackCreateManyArgs} args - Arguments to create many Tracks.
     * @example
     * // Create many Tracks
     * const track = await prisma.track.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TrackCreateManyArgs>(args?: SelectSubset<T, TrackCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tracks and returns the data saved in the database.
     * @param {TrackCreateManyAndReturnArgs} args - Arguments to create many Tracks.
     * @example
     * // Create many Tracks
     * const track = await prisma.track.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tracks and only return the `id`
     * const trackWithIdOnly = await prisma.track.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TrackCreateManyAndReturnArgs>(args?: SelectSubset<T, TrackCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Track.
     * @param {TrackDeleteArgs} args - Arguments to delete one Track.
     * @example
     * // Delete one Track
     * const Track = await prisma.track.delete({
     *   where: {
     *     // ... filter to delete one Track
     *   }
     * })
     * 
     */
    delete<T extends TrackDeleteArgs>(args: SelectSubset<T, TrackDeleteArgs<ExtArgs>>): Prisma__TrackClient<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Track.
     * @param {TrackUpdateArgs} args - Arguments to update one Track.
     * @example
     * // Update one Track
     * const track = await prisma.track.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TrackUpdateArgs>(args: SelectSubset<T, TrackUpdateArgs<ExtArgs>>): Prisma__TrackClient<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tracks.
     * @param {TrackDeleteManyArgs} args - Arguments to filter Tracks to delete.
     * @example
     * // Delete a few Tracks
     * const { count } = await prisma.track.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TrackDeleteManyArgs>(args?: SelectSubset<T, TrackDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tracks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tracks
     * const track = await prisma.track.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TrackUpdateManyArgs>(args: SelectSubset<T, TrackUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Track.
     * @param {TrackUpsertArgs} args - Arguments to update or create a Track.
     * @example
     * // Update or create a Track
     * const track = await prisma.track.upsert({
     *   create: {
     *     // ... data to create a Track
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Track we want to update
     *   }
     * })
     */
    upsert<T extends TrackUpsertArgs>(args: SelectSubset<T, TrackUpsertArgs<ExtArgs>>): Prisma__TrackClient<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tracks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackCountArgs} args - Arguments to filter Tracks to count.
     * @example
     * // Count the number of Tracks
     * const count = await prisma.track.count({
     *   where: {
     *     // ... the filter for the Tracks we want to count
     *   }
     * })
    **/
    count<T extends TrackCountArgs>(
      args?: Subset<T, TrackCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrackCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Track.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TrackAggregateArgs>(args: Subset<T, TrackAggregateArgs>): Prisma.PrismaPromise<GetTrackAggregateType<T>>

    /**
     * Group by Track.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TrackGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TrackGroupByArgs['orderBy'] }
        : { orderBy?: TrackGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TrackGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrackGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Track model
   */
  readonly fields: TrackFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Track.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TrackClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Audio<T extends AudioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AudioDefaultArgs<ExtArgs>>): Prisma__AudioClient<$Result.GetResult<Prisma.$AudioPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Track model
   */ 
  interface TrackFieldRefs {
    readonly id: FieldRef<"Track", 'String'>
    readonly audioId: FieldRef<"Track", 'String'>
    readonly title: FieldRef<"Track", 'String'>
    readonly lyrics: FieldRef<"Track", 'String'>
    readonly productionCredit: FieldRef<"Track", 'String'>
    readonly ISRC: FieldRef<"Track", 'String'>
    readonly trackNumber: FieldRef<"Track", 'Int'>
    readonly audioLink: FieldRef<"Track", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Track findUnique
   */
  export type TrackFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackInclude<ExtArgs> | null
    /**
     * Filter, which Track to fetch.
     */
    where: TrackWhereUniqueInput
  }

  /**
   * Track findUniqueOrThrow
   */
  export type TrackFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackInclude<ExtArgs> | null
    /**
     * Filter, which Track to fetch.
     */
    where: TrackWhereUniqueInput
  }

  /**
   * Track findFirst
   */
  export type TrackFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackInclude<ExtArgs> | null
    /**
     * Filter, which Track to fetch.
     */
    where?: TrackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tracks to fetch.
     */
    orderBy?: TrackOrderByWithRelationInput | TrackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tracks.
     */
    cursor?: TrackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tracks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tracks.
     */
    distinct?: TrackScalarFieldEnum | TrackScalarFieldEnum[]
  }

  /**
   * Track findFirstOrThrow
   */
  export type TrackFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackInclude<ExtArgs> | null
    /**
     * Filter, which Track to fetch.
     */
    where?: TrackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tracks to fetch.
     */
    orderBy?: TrackOrderByWithRelationInput | TrackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tracks.
     */
    cursor?: TrackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tracks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tracks.
     */
    distinct?: TrackScalarFieldEnum | TrackScalarFieldEnum[]
  }

  /**
   * Track findMany
   */
  export type TrackFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackInclude<ExtArgs> | null
    /**
     * Filter, which Tracks to fetch.
     */
    where?: TrackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tracks to fetch.
     */
    orderBy?: TrackOrderByWithRelationInput | TrackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tracks.
     */
    cursor?: TrackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tracks.
     */
    skip?: number
    distinct?: TrackScalarFieldEnum | TrackScalarFieldEnum[]
  }

  /**
   * Track create
   */
  export type TrackCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackInclude<ExtArgs> | null
    /**
     * The data needed to create a Track.
     */
    data: XOR<TrackCreateInput, TrackUncheckedCreateInput>
  }

  /**
   * Track createMany
   */
  export type TrackCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tracks.
     */
    data: TrackCreateManyInput | TrackCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Track createManyAndReturn
   */
  export type TrackCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Tracks.
     */
    data: TrackCreateManyInput | TrackCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Track update
   */
  export type TrackUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackInclude<ExtArgs> | null
    /**
     * The data needed to update a Track.
     */
    data: XOR<TrackUpdateInput, TrackUncheckedUpdateInput>
    /**
     * Choose, which Track to update.
     */
    where: TrackWhereUniqueInput
  }

  /**
   * Track updateMany
   */
  export type TrackUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tracks.
     */
    data: XOR<TrackUpdateManyMutationInput, TrackUncheckedUpdateManyInput>
    /**
     * Filter which Tracks to update
     */
    where?: TrackWhereInput
  }

  /**
   * Track upsert
   */
  export type TrackUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackInclude<ExtArgs> | null
    /**
     * The filter to search for the Track to update in case it exists.
     */
    where: TrackWhereUniqueInput
    /**
     * In case the Track found by the `where` argument doesn't exist, create a new Track with this data.
     */
    create: XOR<TrackCreateInput, TrackUncheckedCreateInput>
    /**
     * In case the Track was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TrackUpdateInput, TrackUncheckedUpdateInput>
  }

  /**
   * Track delete
   */
  export type TrackDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackInclude<ExtArgs> | null
    /**
     * Filter which Track to delete.
     */
    where: TrackWhereUniqueInput
  }

  /**
   * Track deleteMany
   */
  export type TrackDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tracks to delete
     */
    where?: TrackWhereInput
  }

  /**
   * Track without action
   */
  export type TrackDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackInclude<ExtArgs> | null
  }


  /**
   * Model DSP
   */

  export type AggregateDSP = {
    _count: DSPCountAggregateOutputType | null
    _min: DSPMinAggregateOutputType | null
    _max: DSPMaxAggregateOutputType | null
  }

  export type DSPMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type DSPMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type DSPCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type DSPMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type DSPMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type DSPCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type DSPAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DSP to aggregate.
     */
    where?: DSPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DSPS to fetch.
     */
    orderBy?: DSPOrderByWithRelationInput | DSPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DSPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DSPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DSPS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DSPS
    **/
    _count?: true | DSPCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DSPMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DSPMaxAggregateInputType
  }

  export type GetDSPAggregateType<T extends DSPAggregateArgs> = {
        [P in keyof T & keyof AggregateDSP]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDSP[P]>
      : GetScalarType<T[P], AggregateDSP[P]>
  }




  export type DSPGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DSPWhereInput
    orderBy?: DSPOrderByWithAggregationInput | DSPOrderByWithAggregationInput[]
    by: DSPScalarFieldEnum[] | DSPScalarFieldEnum
    having?: DSPScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DSPCountAggregateInputType | true
    _min?: DSPMinAggregateInputType
    _max?: DSPMaxAggregateInputType
  }

  export type DSPGroupByOutputType = {
    id: string
    name: string
    _count: DSPCountAggregateOutputType | null
    _min: DSPMinAggregateOutputType | null
    _max: DSPMaxAggregateOutputType | null
  }

  type GetDSPGroupByPayload<T extends DSPGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DSPGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DSPGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DSPGroupByOutputType[P]>
            : GetScalarType<T[P], DSPGroupByOutputType[P]>
        }
      >
    >


  export type DSPSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    streams?: boolean | DSP$streamsArgs<ExtArgs>
    _count?: boolean | DSPCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dSP"]>

  export type DSPSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["dSP"]>

  export type DSPSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type DSPInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    streams?: boolean | DSP$streamsArgs<ExtArgs>
    _count?: boolean | DSPCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DSPIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DSPPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DSP"
    objects: {
      streams: Prisma.$StreamsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["dSP"]>
    composites: {}
  }

  type DSPGetPayload<S extends boolean | null | undefined | DSPDefaultArgs> = $Result.GetResult<Prisma.$DSPPayload, S>

  type DSPCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DSPFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DSPCountAggregateInputType | true
    }

  export interface DSPDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DSP'], meta: { name: 'DSP' } }
    /**
     * Find zero or one DSP that matches the filter.
     * @param {DSPFindUniqueArgs} args - Arguments to find a DSP
     * @example
     * // Get one DSP
     * const dSP = await prisma.dSP.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DSPFindUniqueArgs>(args: SelectSubset<T, DSPFindUniqueArgs<ExtArgs>>): Prisma__DSPClient<$Result.GetResult<Prisma.$DSPPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one DSP that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DSPFindUniqueOrThrowArgs} args - Arguments to find a DSP
     * @example
     * // Get one DSP
     * const dSP = await prisma.dSP.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DSPFindUniqueOrThrowArgs>(args: SelectSubset<T, DSPFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DSPClient<$Result.GetResult<Prisma.$DSPPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first DSP that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DSPFindFirstArgs} args - Arguments to find a DSP
     * @example
     * // Get one DSP
     * const dSP = await prisma.dSP.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DSPFindFirstArgs>(args?: SelectSubset<T, DSPFindFirstArgs<ExtArgs>>): Prisma__DSPClient<$Result.GetResult<Prisma.$DSPPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first DSP that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DSPFindFirstOrThrowArgs} args - Arguments to find a DSP
     * @example
     * // Get one DSP
     * const dSP = await prisma.dSP.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DSPFindFirstOrThrowArgs>(args?: SelectSubset<T, DSPFindFirstOrThrowArgs<ExtArgs>>): Prisma__DSPClient<$Result.GetResult<Prisma.$DSPPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more DSPS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DSPFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DSPS
     * const dSPS = await prisma.dSP.findMany()
     * 
     * // Get first 10 DSPS
     * const dSPS = await prisma.dSP.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dSPWithIdOnly = await prisma.dSP.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DSPFindManyArgs>(args?: SelectSubset<T, DSPFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DSPPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a DSP.
     * @param {DSPCreateArgs} args - Arguments to create a DSP.
     * @example
     * // Create one DSP
     * const DSP = await prisma.dSP.create({
     *   data: {
     *     // ... data to create a DSP
     *   }
     * })
     * 
     */
    create<T extends DSPCreateArgs>(args: SelectSubset<T, DSPCreateArgs<ExtArgs>>): Prisma__DSPClient<$Result.GetResult<Prisma.$DSPPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many DSPS.
     * @param {DSPCreateManyArgs} args - Arguments to create many DSPS.
     * @example
     * // Create many DSPS
     * const dSP = await prisma.dSP.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DSPCreateManyArgs>(args?: SelectSubset<T, DSPCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DSPS and returns the data saved in the database.
     * @param {DSPCreateManyAndReturnArgs} args - Arguments to create many DSPS.
     * @example
     * // Create many DSPS
     * const dSP = await prisma.dSP.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DSPS and only return the `id`
     * const dSPWithIdOnly = await prisma.dSP.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DSPCreateManyAndReturnArgs>(args?: SelectSubset<T, DSPCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DSPPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a DSP.
     * @param {DSPDeleteArgs} args - Arguments to delete one DSP.
     * @example
     * // Delete one DSP
     * const DSP = await prisma.dSP.delete({
     *   where: {
     *     // ... filter to delete one DSP
     *   }
     * })
     * 
     */
    delete<T extends DSPDeleteArgs>(args: SelectSubset<T, DSPDeleteArgs<ExtArgs>>): Prisma__DSPClient<$Result.GetResult<Prisma.$DSPPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one DSP.
     * @param {DSPUpdateArgs} args - Arguments to update one DSP.
     * @example
     * // Update one DSP
     * const dSP = await prisma.dSP.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DSPUpdateArgs>(args: SelectSubset<T, DSPUpdateArgs<ExtArgs>>): Prisma__DSPClient<$Result.GetResult<Prisma.$DSPPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more DSPS.
     * @param {DSPDeleteManyArgs} args - Arguments to filter DSPS to delete.
     * @example
     * // Delete a few DSPS
     * const { count } = await prisma.dSP.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DSPDeleteManyArgs>(args?: SelectSubset<T, DSPDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DSPS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DSPUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DSPS
     * const dSP = await prisma.dSP.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DSPUpdateManyArgs>(args: SelectSubset<T, DSPUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DSP.
     * @param {DSPUpsertArgs} args - Arguments to update or create a DSP.
     * @example
     * // Update or create a DSP
     * const dSP = await prisma.dSP.upsert({
     *   create: {
     *     // ... data to create a DSP
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DSP we want to update
     *   }
     * })
     */
    upsert<T extends DSPUpsertArgs>(args: SelectSubset<T, DSPUpsertArgs<ExtArgs>>): Prisma__DSPClient<$Result.GetResult<Prisma.$DSPPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of DSPS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DSPCountArgs} args - Arguments to filter DSPS to count.
     * @example
     * // Count the number of DSPS
     * const count = await prisma.dSP.count({
     *   where: {
     *     // ... the filter for the DSPS we want to count
     *   }
     * })
    **/
    count<T extends DSPCountArgs>(
      args?: Subset<T, DSPCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DSPCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DSP.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DSPAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DSPAggregateArgs>(args: Subset<T, DSPAggregateArgs>): Prisma.PrismaPromise<GetDSPAggregateType<T>>

    /**
     * Group by DSP.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DSPGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DSPGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DSPGroupByArgs['orderBy'] }
        : { orderBy?: DSPGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DSPGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDSPGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DSP model
   */
  readonly fields: DSPFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DSP.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DSPClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    streams<T extends DSP$streamsArgs<ExtArgs> = {}>(args?: Subset<T, DSP$streamsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StreamsPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DSP model
   */ 
  interface DSPFieldRefs {
    readonly id: FieldRef<"DSP", 'String'>
    readonly name: FieldRef<"DSP", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DSP findUnique
   */
  export type DSPFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DSP
     */
    select?: DSPSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DSPInclude<ExtArgs> | null
    /**
     * Filter, which DSP to fetch.
     */
    where: DSPWhereUniqueInput
  }

  /**
   * DSP findUniqueOrThrow
   */
  export type DSPFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DSP
     */
    select?: DSPSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DSPInclude<ExtArgs> | null
    /**
     * Filter, which DSP to fetch.
     */
    where: DSPWhereUniqueInput
  }

  /**
   * DSP findFirst
   */
  export type DSPFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DSP
     */
    select?: DSPSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DSPInclude<ExtArgs> | null
    /**
     * Filter, which DSP to fetch.
     */
    where?: DSPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DSPS to fetch.
     */
    orderBy?: DSPOrderByWithRelationInput | DSPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DSPS.
     */
    cursor?: DSPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DSPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DSPS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DSPS.
     */
    distinct?: DSPScalarFieldEnum | DSPScalarFieldEnum[]
  }

  /**
   * DSP findFirstOrThrow
   */
  export type DSPFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DSP
     */
    select?: DSPSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DSPInclude<ExtArgs> | null
    /**
     * Filter, which DSP to fetch.
     */
    where?: DSPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DSPS to fetch.
     */
    orderBy?: DSPOrderByWithRelationInput | DSPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DSPS.
     */
    cursor?: DSPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DSPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DSPS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DSPS.
     */
    distinct?: DSPScalarFieldEnum | DSPScalarFieldEnum[]
  }

  /**
   * DSP findMany
   */
  export type DSPFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DSP
     */
    select?: DSPSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DSPInclude<ExtArgs> | null
    /**
     * Filter, which DSPS to fetch.
     */
    where?: DSPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DSPS to fetch.
     */
    orderBy?: DSPOrderByWithRelationInput | DSPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DSPS.
     */
    cursor?: DSPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DSPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DSPS.
     */
    skip?: number
    distinct?: DSPScalarFieldEnum | DSPScalarFieldEnum[]
  }

  /**
   * DSP create
   */
  export type DSPCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DSP
     */
    select?: DSPSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DSPInclude<ExtArgs> | null
    /**
     * The data needed to create a DSP.
     */
    data: XOR<DSPCreateInput, DSPUncheckedCreateInput>
  }

  /**
   * DSP createMany
   */
  export type DSPCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DSPS.
     */
    data: DSPCreateManyInput | DSPCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DSP createManyAndReturn
   */
  export type DSPCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DSP
     */
    select?: DSPSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many DSPS.
     */
    data: DSPCreateManyInput | DSPCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DSP update
   */
  export type DSPUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DSP
     */
    select?: DSPSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DSPInclude<ExtArgs> | null
    /**
     * The data needed to update a DSP.
     */
    data: XOR<DSPUpdateInput, DSPUncheckedUpdateInput>
    /**
     * Choose, which DSP to update.
     */
    where: DSPWhereUniqueInput
  }

  /**
   * DSP updateMany
   */
  export type DSPUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DSPS.
     */
    data: XOR<DSPUpdateManyMutationInput, DSPUncheckedUpdateManyInput>
    /**
     * Filter which DSPS to update
     */
    where?: DSPWhereInput
  }

  /**
   * DSP upsert
   */
  export type DSPUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DSP
     */
    select?: DSPSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DSPInclude<ExtArgs> | null
    /**
     * The filter to search for the DSP to update in case it exists.
     */
    where: DSPWhereUniqueInput
    /**
     * In case the DSP found by the `where` argument doesn't exist, create a new DSP with this data.
     */
    create: XOR<DSPCreateInput, DSPUncheckedCreateInput>
    /**
     * In case the DSP was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DSPUpdateInput, DSPUncheckedUpdateInput>
  }

  /**
   * DSP delete
   */
  export type DSPDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DSP
     */
    select?: DSPSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DSPInclude<ExtArgs> | null
    /**
     * Filter which DSP to delete.
     */
    where: DSPWhereUniqueInput
  }

  /**
   * DSP deleteMany
   */
  export type DSPDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DSPS to delete
     */
    where?: DSPWhereInput
  }

  /**
   * DSP.streams
   */
  export type DSP$streamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streams
     */
    select?: StreamsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamsInclude<ExtArgs> | null
    where?: StreamsWhereInput
    orderBy?: StreamsOrderByWithRelationInput | StreamsOrderByWithRelationInput[]
    cursor?: StreamsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StreamsScalarFieldEnum | StreamsScalarFieldEnum[]
  }

  /**
   * DSP without action
   */
  export type DSPDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DSP
     */
    select?: DSPSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DSPInclude<ExtArgs> | null
  }


  /**
   * Model Streams
   */

  export type AggregateStreams = {
    _count: StreamsCountAggregateOutputType | null
    _avg: StreamsAvgAggregateOutputType | null
    _sum: StreamsSumAggregateOutputType | null
    _min: StreamsMinAggregateOutputType | null
    _max: StreamsMaxAggregateOutputType | null
  }

  export type StreamsAvgAggregateOutputType = {
    total: number | null
  }

  export type StreamsSumAggregateOutputType = {
    total: number | null
  }

  export type StreamsMinAggregateOutputType = {
    id: string | null
    dspId: string | null
    total: number | null
    date: Date | null
    audioId: string | null
  }

  export type StreamsMaxAggregateOutputType = {
    id: string | null
    dspId: string | null
    total: number | null
    date: Date | null
    audioId: string | null
  }

  export type StreamsCountAggregateOutputType = {
    id: number
    dspId: number
    total: number
    date: number
    audioId: number
    _all: number
  }


  export type StreamsAvgAggregateInputType = {
    total?: true
  }

  export type StreamsSumAggregateInputType = {
    total?: true
  }

  export type StreamsMinAggregateInputType = {
    id?: true
    dspId?: true
    total?: true
    date?: true
    audioId?: true
  }

  export type StreamsMaxAggregateInputType = {
    id?: true
    dspId?: true
    total?: true
    date?: true
    audioId?: true
  }

  export type StreamsCountAggregateInputType = {
    id?: true
    dspId?: true
    total?: true
    date?: true
    audioId?: true
    _all?: true
  }

  export type StreamsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Streams to aggregate.
     */
    where?: StreamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Streams to fetch.
     */
    orderBy?: StreamsOrderByWithRelationInput | StreamsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StreamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Streams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Streams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Streams
    **/
    _count?: true | StreamsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StreamsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StreamsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StreamsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StreamsMaxAggregateInputType
  }

  export type GetStreamsAggregateType<T extends StreamsAggregateArgs> = {
        [P in keyof T & keyof AggregateStreams]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStreams[P]>
      : GetScalarType<T[P], AggregateStreams[P]>
  }




  export type StreamsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StreamsWhereInput
    orderBy?: StreamsOrderByWithAggregationInput | StreamsOrderByWithAggregationInput[]
    by: StreamsScalarFieldEnum[] | StreamsScalarFieldEnum
    having?: StreamsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StreamsCountAggregateInputType | true
    _avg?: StreamsAvgAggregateInputType
    _sum?: StreamsSumAggregateInputType
    _min?: StreamsMinAggregateInputType
    _max?: StreamsMaxAggregateInputType
  }

  export type StreamsGroupByOutputType = {
    id: string
    dspId: string
    total: number
    date: Date
    audioId: string
    _count: StreamsCountAggregateOutputType | null
    _avg: StreamsAvgAggregateOutputType | null
    _sum: StreamsSumAggregateOutputType | null
    _min: StreamsMinAggregateOutputType | null
    _max: StreamsMaxAggregateOutputType | null
  }

  type GetStreamsGroupByPayload<T extends StreamsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StreamsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StreamsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StreamsGroupByOutputType[P]>
            : GetScalarType<T[P], StreamsGroupByOutputType[P]>
        }
      >
    >


  export type StreamsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dspId?: boolean
    total?: boolean
    date?: boolean
    audioId?: boolean
    dsp?: boolean | DSPDefaultArgs<ExtArgs>
    Audio?: boolean | AudioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["streams"]>

  export type StreamsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dspId?: boolean
    total?: boolean
    date?: boolean
    audioId?: boolean
    dsp?: boolean | DSPDefaultArgs<ExtArgs>
    Audio?: boolean | AudioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["streams"]>

  export type StreamsSelectScalar = {
    id?: boolean
    dspId?: boolean
    total?: boolean
    date?: boolean
    audioId?: boolean
  }

  export type StreamsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dsp?: boolean | DSPDefaultArgs<ExtArgs>
    Audio?: boolean | AudioDefaultArgs<ExtArgs>
  }
  export type StreamsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dsp?: boolean | DSPDefaultArgs<ExtArgs>
    Audio?: boolean | AudioDefaultArgs<ExtArgs>
  }

  export type $StreamsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Streams"
    objects: {
      dsp: Prisma.$DSPPayload<ExtArgs>
      Audio: Prisma.$AudioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      dspId: string
      total: number
      date: Date
      audioId: string
    }, ExtArgs["result"]["streams"]>
    composites: {}
  }

  type StreamsGetPayload<S extends boolean | null | undefined | StreamsDefaultArgs> = $Result.GetResult<Prisma.$StreamsPayload, S>

  type StreamsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StreamsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StreamsCountAggregateInputType | true
    }

  export interface StreamsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Streams'], meta: { name: 'Streams' } }
    /**
     * Find zero or one Streams that matches the filter.
     * @param {StreamsFindUniqueArgs} args - Arguments to find a Streams
     * @example
     * // Get one Streams
     * const streams = await prisma.streams.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StreamsFindUniqueArgs>(args: SelectSubset<T, StreamsFindUniqueArgs<ExtArgs>>): Prisma__StreamsClient<$Result.GetResult<Prisma.$StreamsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Streams that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {StreamsFindUniqueOrThrowArgs} args - Arguments to find a Streams
     * @example
     * // Get one Streams
     * const streams = await prisma.streams.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StreamsFindUniqueOrThrowArgs>(args: SelectSubset<T, StreamsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StreamsClient<$Result.GetResult<Prisma.$StreamsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Streams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamsFindFirstArgs} args - Arguments to find a Streams
     * @example
     * // Get one Streams
     * const streams = await prisma.streams.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StreamsFindFirstArgs>(args?: SelectSubset<T, StreamsFindFirstArgs<ExtArgs>>): Prisma__StreamsClient<$Result.GetResult<Prisma.$StreamsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Streams that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamsFindFirstOrThrowArgs} args - Arguments to find a Streams
     * @example
     * // Get one Streams
     * const streams = await prisma.streams.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StreamsFindFirstOrThrowArgs>(args?: SelectSubset<T, StreamsFindFirstOrThrowArgs<ExtArgs>>): Prisma__StreamsClient<$Result.GetResult<Prisma.$StreamsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Streams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Streams
     * const streams = await prisma.streams.findMany()
     * 
     * // Get first 10 Streams
     * const streams = await prisma.streams.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const streamsWithIdOnly = await prisma.streams.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StreamsFindManyArgs>(args?: SelectSubset<T, StreamsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StreamsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Streams.
     * @param {StreamsCreateArgs} args - Arguments to create a Streams.
     * @example
     * // Create one Streams
     * const Streams = await prisma.streams.create({
     *   data: {
     *     // ... data to create a Streams
     *   }
     * })
     * 
     */
    create<T extends StreamsCreateArgs>(args: SelectSubset<T, StreamsCreateArgs<ExtArgs>>): Prisma__StreamsClient<$Result.GetResult<Prisma.$StreamsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Streams.
     * @param {StreamsCreateManyArgs} args - Arguments to create many Streams.
     * @example
     * // Create many Streams
     * const streams = await prisma.streams.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StreamsCreateManyArgs>(args?: SelectSubset<T, StreamsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Streams and returns the data saved in the database.
     * @param {StreamsCreateManyAndReturnArgs} args - Arguments to create many Streams.
     * @example
     * // Create many Streams
     * const streams = await prisma.streams.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Streams and only return the `id`
     * const streamsWithIdOnly = await prisma.streams.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StreamsCreateManyAndReturnArgs>(args?: SelectSubset<T, StreamsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StreamsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Streams.
     * @param {StreamsDeleteArgs} args - Arguments to delete one Streams.
     * @example
     * // Delete one Streams
     * const Streams = await prisma.streams.delete({
     *   where: {
     *     // ... filter to delete one Streams
     *   }
     * })
     * 
     */
    delete<T extends StreamsDeleteArgs>(args: SelectSubset<T, StreamsDeleteArgs<ExtArgs>>): Prisma__StreamsClient<$Result.GetResult<Prisma.$StreamsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Streams.
     * @param {StreamsUpdateArgs} args - Arguments to update one Streams.
     * @example
     * // Update one Streams
     * const streams = await prisma.streams.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StreamsUpdateArgs>(args: SelectSubset<T, StreamsUpdateArgs<ExtArgs>>): Prisma__StreamsClient<$Result.GetResult<Prisma.$StreamsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Streams.
     * @param {StreamsDeleteManyArgs} args - Arguments to filter Streams to delete.
     * @example
     * // Delete a few Streams
     * const { count } = await prisma.streams.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StreamsDeleteManyArgs>(args?: SelectSubset<T, StreamsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Streams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Streams
     * const streams = await prisma.streams.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StreamsUpdateManyArgs>(args: SelectSubset<T, StreamsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Streams.
     * @param {StreamsUpsertArgs} args - Arguments to update or create a Streams.
     * @example
     * // Update or create a Streams
     * const streams = await prisma.streams.upsert({
     *   create: {
     *     // ... data to create a Streams
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Streams we want to update
     *   }
     * })
     */
    upsert<T extends StreamsUpsertArgs>(args: SelectSubset<T, StreamsUpsertArgs<ExtArgs>>): Prisma__StreamsClient<$Result.GetResult<Prisma.$StreamsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Streams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamsCountArgs} args - Arguments to filter Streams to count.
     * @example
     * // Count the number of Streams
     * const count = await prisma.streams.count({
     *   where: {
     *     // ... the filter for the Streams we want to count
     *   }
     * })
    **/
    count<T extends StreamsCountArgs>(
      args?: Subset<T, StreamsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StreamsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Streams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StreamsAggregateArgs>(args: Subset<T, StreamsAggregateArgs>): Prisma.PrismaPromise<GetStreamsAggregateType<T>>

    /**
     * Group by Streams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StreamsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StreamsGroupByArgs['orderBy'] }
        : { orderBy?: StreamsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StreamsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStreamsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Streams model
   */
  readonly fields: StreamsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Streams.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StreamsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dsp<T extends DSPDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DSPDefaultArgs<ExtArgs>>): Prisma__DSPClient<$Result.GetResult<Prisma.$DSPPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    Audio<T extends AudioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AudioDefaultArgs<ExtArgs>>): Prisma__AudioClient<$Result.GetResult<Prisma.$AudioPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Streams model
   */ 
  interface StreamsFieldRefs {
    readonly id: FieldRef<"Streams", 'String'>
    readonly dspId: FieldRef<"Streams", 'String'>
    readonly total: FieldRef<"Streams", 'Int'>
    readonly date: FieldRef<"Streams", 'DateTime'>
    readonly audioId: FieldRef<"Streams", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Streams findUnique
   */
  export type StreamsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streams
     */
    select?: StreamsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamsInclude<ExtArgs> | null
    /**
     * Filter, which Streams to fetch.
     */
    where: StreamsWhereUniqueInput
  }

  /**
   * Streams findUniqueOrThrow
   */
  export type StreamsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streams
     */
    select?: StreamsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamsInclude<ExtArgs> | null
    /**
     * Filter, which Streams to fetch.
     */
    where: StreamsWhereUniqueInput
  }

  /**
   * Streams findFirst
   */
  export type StreamsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streams
     */
    select?: StreamsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamsInclude<ExtArgs> | null
    /**
     * Filter, which Streams to fetch.
     */
    where?: StreamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Streams to fetch.
     */
    orderBy?: StreamsOrderByWithRelationInput | StreamsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Streams.
     */
    cursor?: StreamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Streams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Streams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Streams.
     */
    distinct?: StreamsScalarFieldEnum | StreamsScalarFieldEnum[]
  }

  /**
   * Streams findFirstOrThrow
   */
  export type StreamsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streams
     */
    select?: StreamsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamsInclude<ExtArgs> | null
    /**
     * Filter, which Streams to fetch.
     */
    where?: StreamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Streams to fetch.
     */
    orderBy?: StreamsOrderByWithRelationInput | StreamsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Streams.
     */
    cursor?: StreamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Streams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Streams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Streams.
     */
    distinct?: StreamsScalarFieldEnum | StreamsScalarFieldEnum[]
  }

  /**
   * Streams findMany
   */
  export type StreamsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streams
     */
    select?: StreamsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamsInclude<ExtArgs> | null
    /**
     * Filter, which Streams to fetch.
     */
    where?: StreamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Streams to fetch.
     */
    orderBy?: StreamsOrderByWithRelationInput | StreamsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Streams.
     */
    cursor?: StreamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Streams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Streams.
     */
    skip?: number
    distinct?: StreamsScalarFieldEnum | StreamsScalarFieldEnum[]
  }

  /**
   * Streams create
   */
  export type StreamsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streams
     */
    select?: StreamsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamsInclude<ExtArgs> | null
    /**
     * The data needed to create a Streams.
     */
    data: XOR<StreamsCreateInput, StreamsUncheckedCreateInput>
  }

  /**
   * Streams createMany
   */
  export type StreamsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Streams.
     */
    data: StreamsCreateManyInput | StreamsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Streams createManyAndReturn
   */
  export type StreamsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streams
     */
    select?: StreamsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Streams.
     */
    data: StreamsCreateManyInput | StreamsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Streams update
   */
  export type StreamsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streams
     */
    select?: StreamsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamsInclude<ExtArgs> | null
    /**
     * The data needed to update a Streams.
     */
    data: XOR<StreamsUpdateInput, StreamsUncheckedUpdateInput>
    /**
     * Choose, which Streams to update.
     */
    where: StreamsWhereUniqueInput
  }

  /**
   * Streams updateMany
   */
  export type StreamsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Streams.
     */
    data: XOR<StreamsUpdateManyMutationInput, StreamsUncheckedUpdateManyInput>
    /**
     * Filter which Streams to update
     */
    where?: StreamsWhereInput
  }

  /**
   * Streams upsert
   */
  export type StreamsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streams
     */
    select?: StreamsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamsInclude<ExtArgs> | null
    /**
     * The filter to search for the Streams to update in case it exists.
     */
    where: StreamsWhereUniqueInput
    /**
     * In case the Streams found by the `where` argument doesn't exist, create a new Streams with this data.
     */
    create: XOR<StreamsCreateInput, StreamsUncheckedCreateInput>
    /**
     * In case the Streams was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StreamsUpdateInput, StreamsUncheckedUpdateInput>
  }

  /**
   * Streams delete
   */
  export type StreamsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streams
     */
    select?: StreamsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamsInclude<ExtArgs> | null
    /**
     * Filter which Streams to delete.
     */
    where: StreamsWhereUniqueInput
  }

  /**
   * Streams deleteMany
   */
  export type StreamsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Streams to delete
     */
    where?: StreamsWhereInput
  }

  /**
   * Streams without action
   */
  export type StreamsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streams
     */
    select?: StreamsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamsInclude<ExtArgs> | null
  }


  /**
   * Model Country
   */

  export type AggregateCountry = {
    _count: CountryCountAggregateOutputType | null
    _min: CountryMinAggregateOutputType | null
    _max: CountryMaxAggregateOutputType | null
  }

  export type CountryMinAggregateOutputType = {
    id: string | null
    name: string | null
    isoCode: string | null
  }

  export type CountryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    isoCode: string | null
  }

  export type CountryCountAggregateOutputType = {
    id: number
    name: number
    isoCode: number
    _all: number
  }


  export type CountryMinAggregateInputType = {
    id?: true
    name?: true
    isoCode?: true
  }

  export type CountryMaxAggregateInputType = {
    id?: true
    name?: true
    isoCode?: true
  }

  export type CountryCountAggregateInputType = {
    id?: true
    name?: true
    isoCode?: true
    _all?: true
  }

  export type CountryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Country to aggregate.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Countries
    **/
    _count?: true | CountryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CountryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CountryMaxAggregateInputType
  }

  export type GetCountryAggregateType<T extends CountryAggregateArgs> = {
        [P in keyof T & keyof AggregateCountry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCountry[P]>
      : GetScalarType<T[P], AggregateCountry[P]>
  }




  export type CountryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CountryWhereInput
    orderBy?: CountryOrderByWithAggregationInput | CountryOrderByWithAggregationInput[]
    by: CountryScalarFieldEnum[] | CountryScalarFieldEnum
    having?: CountryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CountryCountAggregateInputType | true
    _min?: CountryMinAggregateInputType
    _max?: CountryMaxAggregateInputType
  }

  export type CountryGroupByOutputType = {
    id: string
    name: string
    isoCode: string
    _count: CountryCountAggregateOutputType | null
    _min: CountryMinAggregateOutputType | null
    _max: CountryMaxAggregateOutputType | null
  }

  type GetCountryGroupByPayload<T extends CountryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CountryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CountryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CountryGroupByOutputType[P]>
            : GetScalarType<T[P], CountryGroupByOutputType[P]>
        }
      >
    >


  export type CountrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isoCode?: boolean
    streamsByCountry?: boolean | Country$streamsByCountryArgs<ExtArgs>
    _count?: boolean | CountryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["country"]>

  export type CountrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isoCode?: boolean
  }, ExtArgs["result"]["country"]>

  export type CountrySelectScalar = {
    id?: boolean
    name?: boolean
    isoCode?: boolean
  }

  export type CountryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    streamsByCountry?: boolean | Country$streamsByCountryArgs<ExtArgs>
    _count?: boolean | CountryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CountryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CountryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Country"
    objects: {
      streamsByCountry: Prisma.$StreamByCountryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      isoCode: string
    }, ExtArgs["result"]["country"]>
    composites: {}
  }

  type CountryGetPayload<S extends boolean | null | undefined | CountryDefaultArgs> = $Result.GetResult<Prisma.$CountryPayload, S>

  type CountryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CountryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CountryCountAggregateInputType | true
    }

  export interface CountryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Country'], meta: { name: 'Country' } }
    /**
     * Find zero or one Country that matches the filter.
     * @param {CountryFindUniqueArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CountryFindUniqueArgs>(args: SelectSubset<T, CountryFindUniqueArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Country that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CountryFindUniqueOrThrowArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CountryFindUniqueOrThrowArgs>(args: SelectSubset<T, CountryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Country that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindFirstArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CountryFindFirstArgs>(args?: SelectSubset<T, CountryFindFirstArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Country that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindFirstOrThrowArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CountryFindFirstOrThrowArgs>(args?: SelectSubset<T, CountryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Countries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Countries
     * const countries = await prisma.country.findMany()
     * 
     * // Get first 10 Countries
     * const countries = await prisma.country.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const countryWithIdOnly = await prisma.country.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CountryFindManyArgs>(args?: SelectSubset<T, CountryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Country.
     * @param {CountryCreateArgs} args - Arguments to create a Country.
     * @example
     * // Create one Country
     * const Country = await prisma.country.create({
     *   data: {
     *     // ... data to create a Country
     *   }
     * })
     * 
     */
    create<T extends CountryCreateArgs>(args: SelectSubset<T, CountryCreateArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Countries.
     * @param {CountryCreateManyArgs} args - Arguments to create many Countries.
     * @example
     * // Create many Countries
     * const country = await prisma.country.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CountryCreateManyArgs>(args?: SelectSubset<T, CountryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Countries and returns the data saved in the database.
     * @param {CountryCreateManyAndReturnArgs} args - Arguments to create many Countries.
     * @example
     * // Create many Countries
     * const country = await prisma.country.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Countries and only return the `id`
     * const countryWithIdOnly = await prisma.country.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CountryCreateManyAndReturnArgs>(args?: SelectSubset<T, CountryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Country.
     * @param {CountryDeleteArgs} args - Arguments to delete one Country.
     * @example
     * // Delete one Country
     * const Country = await prisma.country.delete({
     *   where: {
     *     // ... filter to delete one Country
     *   }
     * })
     * 
     */
    delete<T extends CountryDeleteArgs>(args: SelectSubset<T, CountryDeleteArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Country.
     * @param {CountryUpdateArgs} args - Arguments to update one Country.
     * @example
     * // Update one Country
     * const country = await prisma.country.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CountryUpdateArgs>(args: SelectSubset<T, CountryUpdateArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Countries.
     * @param {CountryDeleteManyArgs} args - Arguments to filter Countries to delete.
     * @example
     * // Delete a few Countries
     * const { count } = await prisma.country.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CountryDeleteManyArgs>(args?: SelectSubset<T, CountryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Countries
     * const country = await prisma.country.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CountryUpdateManyArgs>(args: SelectSubset<T, CountryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Country.
     * @param {CountryUpsertArgs} args - Arguments to update or create a Country.
     * @example
     * // Update or create a Country
     * const country = await prisma.country.upsert({
     *   create: {
     *     // ... data to create a Country
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Country we want to update
     *   }
     * })
     */
    upsert<T extends CountryUpsertArgs>(args: SelectSubset<T, CountryUpsertArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryCountArgs} args - Arguments to filter Countries to count.
     * @example
     * // Count the number of Countries
     * const count = await prisma.country.count({
     *   where: {
     *     // ... the filter for the Countries we want to count
     *   }
     * })
    **/
    count<T extends CountryCountArgs>(
      args?: Subset<T, CountryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CountryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Country.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CountryAggregateArgs>(args: Subset<T, CountryAggregateArgs>): Prisma.PrismaPromise<GetCountryAggregateType<T>>

    /**
     * Group by Country.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CountryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CountryGroupByArgs['orderBy'] }
        : { orderBy?: CountryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CountryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCountryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Country model
   */
  readonly fields: CountryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Country.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CountryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    streamsByCountry<T extends Country$streamsByCountryArgs<ExtArgs> = {}>(args?: Subset<T, Country$streamsByCountryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StreamByCountryPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Country model
   */ 
  interface CountryFieldRefs {
    readonly id: FieldRef<"Country", 'String'>
    readonly name: FieldRef<"Country", 'String'>
    readonly isoCode: FieldRef<"Country", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Country findUnique
   */
  export type CountryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country findUniqueOrThrow
   */
  export type CountryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country findFirst
   */
  export type CountryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Countries.
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Countries.
     */
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }

  /**
   * Country findFirstOrThrow
   */
  export type CountryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Countries.
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Countries.
     */
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }

  /**
   * Country findMany
   */
  export type CountryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Countries to fetch.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Countries.
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }

  /**
   * Country create
   */
  export type CountryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * The data needed to create a Country.
     */
    data: XOR<CountryCreateInput, CountryUncheckedCreateInput>
  }

  /**
   * Country createMany
   */
  export type CountryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Countries.
     */
    data: CountryCreateManyInput | CountryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Country createManyAndReturn
   */
  export type CountryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Countries.
     */
    data: CountryCreateManyInput | CountryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Country update
   */
  export type CountryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * The data needed to update a Country.
     */
    data: XOR<CountryUpdateInput, CountryUncheckedUpdateInput>
    /**
     * Choose, which Country to update.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country updateMany
   */
  export type CountryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Countries.
     */
    data: XOR<CountryUpdateManyMutationInput, CountryUncheckedUpdateManyInput>
    /**
     * Filter which Countries to update
     */
    where?: CountryWhereInput
  }

  /**
   * Country upsert
   */
  export type CountryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * The filter to search for the Country to update in case it exists.
     */
    where: CountryWhereUniqueInput
    /**
     * In case the Country found by the `where` argument doesn't exist, create a new Country with this data.
     */
    create: XOR<CountryCreateInput, CountryUncheckedCreateInput>
    /**
     * In case the Country was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CountryUpdateInput, CountryUncheckedUpdateInput>
  }

  /**
   * Country delete
   */
  export type CountryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter which Country to delete.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country deleteMany
   */
  export type CountryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Countries to delete
     */
    where?: CountryWhereInput
  }

  /**
   * Country.streamsByCountry
   */
  export type Country$streamsByCountryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamByCountry
     */
    select?: StreamByCountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamByCountryInclude<ExtArgs> | null
    where?: StreamByCountryWhereInput
    orderBy?: StreamByCountryOrderByWithRelationInput | StreamByCountryOrderByWithRelationInput[]
    cursor?: StreamByCountryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StreamByCountryScalarFieldEnum | StreamByCountryScalarFieldEnum[]
  }

  /**
   * Country without action
   */
  export type CountryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
  }


  /**
   * Model StreamByCountry
   */

  export type AggregateStreamByCountry = {
    _count: StreamByCountryCountAggregateOutputType | null
    _avg: StreamByCountryAvgAggregateOutputType | null
    _sum: StreamByCountrySumAggregateOutputType | null
    _min: StreamByCountryMinAggregateOutputType | null
    _max: StreamByCountryMaxAggregateOutputType | null
  }

  export type StreamByCountryAvgAggregateOutputType = {
    total: number | null
  }

  export type StreamByCountrySumAggregateOutputType = {
    total: number | null
  }

  export type StreamByCountryMinAggregateOutputType = {
    id: string | null
    countryId: string | null
    total: number | null
    date: Date | null
    audioId: string | null
  }

  export type StreamByCountryMaxAggregateOutputType = {
    id: string | null
    countryId: string | null
    total: number | null
    date: Date | null
    audioId: string | null
  }

  export type StreamByCountryCountAggregateOutputType = {
    id: number
    countryId: number
    total: number
    date: number
    audioId: number
    _all: number
  }


  export type StreamByCountryAvgAggregateInputType = {
    total?: true
  }

  export type StreamByCountrySumAggregateInputType = {
    total?: true
  }

  export type StreamByCountryMinAggregateInputType = {
    id?: true
    countryId?: true
    total?: true
    date?: true
    audioId?: true
  }

  export type StreamByCountryMaxAggregateInputType = {
    id?: true
    countryId?: true
    total?: true
    date?: true
    audioId?: true
  }

  export type StreamByCountryCountAggregateInputType = {
    id?: true
    countryId?: true
    total?: true
    date?: true
    audioId?: true
    _all?: true
  }

  export type StreamByCountryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StreamByCountry to aggregate.
     */
    where?: StreamByCountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StreamByCountries to fetch.
     */
    orderBy?: StreamByCountryOrderByWithRelationInput | StreamByCountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StreamByCountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StreamByCountries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StreamByCountries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StreamByCountries
    **/
    _count?: true | StreamByCountryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StreamByCountryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StreamByCountrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StreamByCountryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StreamByCountryMaxAggregateInputType
  }

  export type GetStreamByCountryAggregateType<T extends StreamByCountryAggregateArgs> = {
        [P in keyof T & keyof AggregateStreamByCountry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStreamByCountry[P]>
      : GetScalarType<T[P], AggregateStreamByCountry[P]>
  }




  export type StreamByCountryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StreamByCountryWhereInput
    orderBy?: StreamByCountryOrderByWithAggregationInput | StreamByCountryOrderByWithAggregationInput[]
    by: StreamByCountryScalarFieldEnum[] | StreamByCountryScalarFieldEnum
    having?: StreamByCountryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StreamByCountryCountAggregateInputType | true
    _avg?: StreamByCountryAvgAggregateInputType
    _sum?: StreamByCountrySumAggregateInputType
    _min?: StreamByCountryMinAggregateInputType
    _max?: StreamByCountryMaxAggregateInputType
  }

  export type StreamByCountryGroupByOutputType = {
    id: string
    countryId: string
    total: number
    date: Date
    audioId: string
    _count: StreamByCountryCountAggregateOutputType | null
    _avg: StreamByCountryAvgAggregateOutputType | null
    _sum: StreamByCountrySumAggregateOutputType | null
    _min: StreamByCountryMinAggregateOutputType | null
    _max: StreamByCountryMaxAggregateOutputType | null
  }

  type GetStreamByCountryGroupByPayload<T extends StreamByCountryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StreamByCountryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StreamByCountryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StreamByCountryGroupByOutputType[P]>
            : GetScalarType<T[P], StreamByCountryGroupByOutputType[P]>
        }
      >
    >


  export type StreamByCountrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    countryId?: boolean
    total?: boolean
    date?: boolean
    audioId?: boolean
    country?: boolean | CountryDefaultArgs<ExtArgs>
    audio?: boolean | AudioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["streamByCountry"]>

  export type StreamByCountrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    countryId?: boolean
    total?: boolean
    date?: boolean
    audioId?: boolean
    country?: boolean | CountryDefaultArgs<ExtArgs>
    audio?: boolean | AudioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["streamByCountry"]>

  export type StreamByCountrySelectScalar = {
    id?: boolean
    countryId?: boolean
    total?: boolean
    date?: boolean
    audioId?: boolean
  }

  export type StreamByCountryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    country?: boolean | CountryDefaultArgs<ExtArgs>
    audio?: boolean | AudioDefaultArgs<ExtArgs>
  }
  export type StreamByCountryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    country?: boolean | CountryDefaultArgs<ExtArgs>
    audio?: boolean | AudioDefaultArgs<ExtArgs>
  }

  export type $StreamByCountryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StreamByCountry"
    objects: {
      country: Prisma.$CountryPayload<ExtArgs>
      audio: Prisma.$AudioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      countryId: string
      total: number
      date: Date
      audioId: string
    }, ExtArgs["result"]["streamByCountry"]>
    composites: {}
  }

  type StreamByCountryGetPayload<S extends boolean | null | undefined | StreamByCountryDefaultArgs> = $Result.GetResult<Prisma.$StreamByCountryPayload, S>

  type StreamByCountryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StreamByCountryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StreamByCountryCountAggregateInputType | true
    }

  export interface StreamByCountryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StreamByCountry'], meta: { name: 'StreamByCountry' } }
    /**
     * Find zero or one StreamByCountry that matches the filter.
     * @param {StreamByCountryFindUniqueArgs} args - Arguments to find a StreamByCountry
     * @example
     * // Get one StreamByCountry
     * const streamByCountry = await prisma.streamByCountry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StreamByCountryFindUniqueArgs>(args: SelectSubset<T, StreamByCountryFindUniqueArgs<ExtArgs>>): Prisma__StreamByCountryClient<$Result.GetResult<Prisma.$StreamByCountryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one StreamByCountry that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {StreamByCountryFindUniqueOrThrowArgs} args - Arguments to find a StreamByCountry
     * @example
     * // Get one StreamByCountry
     * const streamByCountry = await prisma.streamByCountry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StreamByCountryFindUniqueOrThrowArgs>(args: SelectSubset<T, StreamByCountryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StreamByCountryClient<$Result.GetResult<Prisma.$StreamByCountryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first StreamByCountry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamByCountryFindFirstArgs} args - Arguments to find a StreamByCountry
     * @example
     * // Get one StreamByCountry
     * const streamByCountry = await prisma.streamByCountry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StreamByCountryFindFirstArgs>(args?: SelectSubset<T, StreamByCountryFindFirstArgs<ExtArgs>>): Prisma__StreamByCountryClient<$Result.GetResult<Prisma.$StreamByCountryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first StreamByCountry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamByCountryFindFirstOrThrowArgs} args - Arguments to find a StreamByCountry
     * @example
     * // Get one StreamByCountry
     * const streamByCountry = await prisma.streamByCountry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StreamByCountryFindFirstOrThrowArgs>(args?: SelectSubset<T, StreamByCountryFindFirstOrThrowArgs<ExtArgs>>): Prisma__StreamByCountryClient<$Result.GetResult<Prisma.$StreamByCountryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more StreamByCountries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamByCountryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StreamByCountries
     * const streamByCountries = await prisma.streamByCountry.findMany()
     * 
     * // Get first 10 StreamByCountries
     * const streamByCountries = await prisma.streamByCountry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const streamByCountryWithIdOnly = await prisma.streamByCountry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StreamByCountryFindManyArgs>(args?: SelectSubset<T, StreamByCountryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StreamByCountryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a StreamByCountry.
     * @param {StreamByCountryCreateArgs} args - Arguments to create a StreamByCountry.
     * @example
     * // Create one StreamByCountry
     * const StreamByCountry = await prisma.streamByCountry.create({
     *   data: {
     *     // ... data to create a StreamByCountry
     *   }
     * })
     * 
     */
    create<T extends StreamByCountryCreateArgs>(args: SelectSubset<T, StreamByCountryCreateArgs<ExtArgs>>): Prisma__StreamByCountryClient<$Result.GetResult<Prisma.$StreamByCountryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many StreamByCountries.
     * @param {StreamByCountryCreateManyArgs} args - Arguments to create many StreamByCountries.
     * @example
     * // Create many StreamByCountries
     * const streamByCountry = await prisma.streamByCountry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StreamByCountryCreateManyArgs>(args?: SelectSubset<T, StreamByCountryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StreamByCountries and returns the data saved in the database.
     * @param {StreamByCountryCreateManyAndReturnArgs} args - Arguments to create many StreamByCountries.
     * @example
     * // Create many StreamByCountries
     * const streamByCountry = await prisma.streamByCountry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StreamByCountries and only return the `id`
     * const streamByCountryWithIdOnly = await prisma.streamByCountry.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StreamByCountryCreateManyAndReturnArgs>(args?: SelectSubset<T, StreamByCountryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StreamByCountryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a StreamByCountry.
     * @param {StreamByCountryDeleteArgs} args - Arguments to delete one StreamByCountry.
     * @example
     * // Delete one StreamByCountry
     * const StreamByCountry = await prisma.streamByCountry.delete({
     *   where: {
     *     // ... filter to delete one StreamByCountry
     *   }
     * })
     * 
     */
    delete<T extends StreamByCountryDeleteArgs>(args: SelectSubset<T, StreamByCountryDeleteArgs<ExtArgs>>): Prisma__StreamByCountryClient<$Result.GetResult<Prisma.$StreamByCountryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one StreamByCountry.
     * @param {StreamByCountryUpdateArgs} args - Arguments to update one StreamByCountry.
     * @example
     * // Update one StreamByCountry
     * const streamByCountry = await prisma.streamByCountry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StreamByCountryUpdateArgs>(args: SelectSubset<T, StreamByCountryUpdateArgs<ExtArgs>>): Prisma__StreamByCountryClient<$Result.GetResult<Prisma.$StreamByCountryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more StreamByCountries.
     * @param {StreamByCountryDeleteManyArgs} args - Arguments to filter StreamByCountries to delete.
     * @example
     * // Delete a few StreamByCountries
     * const { count } = await prisma.streamByCountry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StreamByCountryDeleteManyArgs>(args?: SelectSubset<T, StreamByCountryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StreamByCountries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamByCountryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StreamByCountries
     * const streamByCountry = await prisma.streamByCountry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StreamByCountryUpdateManyArgs>(args: SelectSubset<T, StreamByCountryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StreamByCountry.
     * @param {StreamByCountryUpsertArgs} args - Arguments to update or create a StreamByCountry.
     * @example
     * // Update or create a StreamByCountry
     * const streamByCountry = await prisma.streamByCountry.upsert({
     *   create: {
     *     // ... data to create a StreamByCountry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StreamByCountry we want to update
     *   }
     * })
     */
    upsert<T extends StreamByCountryUpsertArgs>(args: SelectSubset<T, StreamByCountryUpsertArgs<ExtArgs>>): Prisma__StreamByCountryClient<$Result.GetResult<Prisma.$StreamByCountryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of StreamByCountries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamByCountryCountArgs} args - Arguments to filter StreamByCountries to count.
     * @example
     * // Count the number of StreamByCountries
     * const count = await prisma.streamByCountry.count({
     *   where: {
     *     // ... the filter for the StreamByCountries we want to count
     *   }
     * })
    **/
    count<T extends StreamByCountryCountArgs>(
      args?: Subset<T, StreamByCountryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StreamByCountryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StreamByCountry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamByCountryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StreamByCountryAggregateArgs>(args: Subset<T, StreamByCountryAggregateArgs>): Prisma.PrismaPromise<GetStreamByCountryAggregateType<T>>

    /**
     * Group by StreamByCountry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamByCountryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StreamByCountryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StreamByCountryGroupByArgs['orderBy'] }
        : { orderBy?: StreamByCountryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StreamByCountryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStreamByCountryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StreamByCountry model
   */
  readonly fields: StreamByCountryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StreamByCountry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StreamByCountryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    country<T extends CountryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CountryDefaultArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    audio<T extends AudioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AudioDefaultArgs<ExtArgs>>): Prisma__AudioClient<$Result.GetResult<Prisma.$AudioPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StreamByCountry model
   */ 
  interface StreamByCountryFieldRefs {
    readonly id: FieldRef<"StreamByCountry", 'String'>
    readonly countryId: FieldRef<"StreamByCountry", 'String'>
    readonly total: FieldRef<"StreamByCountry", 'Int'>
    readonly date: FieldRef<"StreamByCountry", 'DateTime'>
    readonly audioId: FieldRef<"StreamByCountry", 'String'>
  }
    

  // Custom InputTypes
  /**
   * StreamByCountry findUnique
   */
  export type StreamByCountryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamByCountry
     */
    select?: StreamByCountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamByCountryInclude<ExtArgs> | null
    /**
     * Filter, which StreamByCountry to fetch.
     */
    where: StreamByCountryWhereUniqueInput
  }

  /**
   * StreamByCountry findUniqueOrThrow
   */
  export type StreamByCountryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamByCountry
     */
    select?: StreamByCountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamByCountryInclude<ExtArgs> | null
    /**
     * Filter, which StreamByCountry to fetch.
     */
    where: StreamByCountryWhereUniqueInput
  }

  /**
   * StreamByCountry findFirst
   */
  export type StreamByCountryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamByCountry
     */
    select?: StreamByCountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamByCountryInclude<ExtArgs> | null
    /**
     * Filter, which StreamByCountry to fetch.
     */
    where?: StreamByCountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StreamByCountries to fetch.
     */
    orderBy?: StreamByCountryOrderByWithRelationInput | StreamByCountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StreamByCountries.
     */
    cursor?: StreamByCountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StreamByCountries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StreamByCountries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StreamByCountries.
     */
    distinct?: StreamByCountryScalarFieldEnum | StreamByCountryScalarFieldEnum[]
  }

  /**
   * StreamByCountry findFirstOrThrow
   */
  export type StreamByCountryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamByCountry
     */
    select?: StreamByCountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamByCountryInclude<ExtArgs> | null
    /**
     * Filter, which StreamByCountry to fetch.
     */
    where?: StreamByCountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StreamByCountries to fetch.
     */
    orderBy?: StreamByCountryOrderByWithRelationInput | StreamByCountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StreamByCountries.
     */
    cursor?: StreamByCountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StreamByCountries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StreamByCountries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StreamByCountries.
     */
    distinct?: StreamByCountryScalarFieldEnum | StreamByCountryScalarFieldEnum[]
  }

  /**
   * StreamByCountry findMany
   */
  export type StreamByCountryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamByCountry
     */
    select?: StreamByCountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamByCountryInclude<ExtArgs> | null
    /**
     * Filter, which StreamByCountries to fetch.
     */
    where?: StreamByCountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StreamByCountries to fetch.
     */
    orderBy?: StreamByCountryOrderByWithRelationInput | StreamByCountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StreamByCountries.
     */
    cursor?: StreamByCountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StreamByCountries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StreamByCountries.
     */
    skip?: number
    distinct?: StreamByCountryScalarFieldEnum | StreamByCountryScalarFieldEnum[]
  }

  /**
   * StreamByCountry create
   */
  export type StreamByCountryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamByCountry
     */
    select?: StreamByCountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamByCountryInclude<ExtArgs> | null
    /**
     * The data needed to create a StreamByCountry.
     */
    data: XOR<StreamByCountryCreateInput, StreamByCountryUncheckedCreateInput>
  }

  /**
   * StreamByCountry createMany
   */
  export type StreamByCountryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StreamByCountries.
     */
    data: StreamByCountryCreateManyInput | StreamByCountryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StreamByCountry createManyAndReturn
   */
  export type StreamByCountryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamByCountry
     */
    select?: StreamByCountrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many StreamByCountries.
     */
    data: StreamByCountryCreateManyInput | StreamByCountryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamByCountryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StreamByCountry update
   */
  export type StreamByCountryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamByCountry
     */
    select?: StreamByCountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamByCountryInclude<ExtArgs> | null
    /**
     * The data needed to update a StreamByCountry.
     */
    data: XOR<StreamByCountryUpdateInput, StreamByCountryUncheckedUpdateInput>
    /**
     * Choose, which StreamByCountry to update.
     */
    where: StreamByCountryWhereUniqueInput
  }

  /**
   * StreamByCountry updateMany
   */
  export type StreamByCountryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StreamByCountries.
     */
    data: XOR<StreamByCountryUpdateManyMutationInput, StreamByCountryUncheckedUpdateManyInput>
    /**
     * Filter which StreamByCountries to update
     */
    where?: StreamByCountryWhereInput
  }

  /**
   * StreamByCountry upsert
   */
  export type StreamByCountryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamByCountry
     */
    select?: StreamByCountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamByCountryInclude<ExtArgs> | null
    /**
     * The filter to search for the StreamByCountry to update in case it exists.
     */
    where: StreamByCountryWhereUniqueInput
    /**
     * In case the StreamByCountry found by the `where` argument doesn't exist, create a new StreamByCountry with this data.
     */
    create: XOR<StreamByCountryCreateInput, StreamByCountryUncheckedCreateInput>
    /**
     * In case the StreamByCountry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StreamByCountryUpdateInput, StreamByCountryUncheckedUpdateInput>
  }

  /**
   * StreamByCountry delete
   */
  export type StreamByCountryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamByCountry
     */
    select?: StreamByCountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamByCountryInclude<ExtArgs> | null
    /**
     * Filter which StreamByCountry to delete.
     */
    where: StreamByCountryWhereUniqueInput
  }

  /**
   * StreamByCountry deleteMany
   */
  export type StreamByCountryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StreamByCountries to delete
     */
    where?: StreamByCountryWhereInput
  }

  /**
   * StreamByCountry without action
   */
  export type StreamByCountryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamByCountry
     */
    select?: StreamByCountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamByCountryInclude<ExtArgs> | null
  }


  /**
   * Model Store
   */

  export type AggregateStore = {
    _count: StoreCountAggregateOutputType | null
    _avg: StoreAvgAggregateOutputType | null
    _sum: StoreSumAggregateOutputType | null
    _min: StoreMinAggregateOutputType | null
    _max: StoreMaxAggregateOutputType | null
  }

  export type StoreAvgAggregateOutputType = {
    trackDownloads: number | null
    streams: number | null
    totalSales: number | null
    earnings: number | null
  }

  export type StoreSumAggregateOutputType = {
    trackDownloads: number | null
    streams: number | null
    totalSales: number | null
    earnings: number | null
  }

  export type StoreMinAggregateOutputType = {
    id: string | null
    name: string | null
    trackDownloads: number | null
    streams: number | null
    totalSales: number | null
    earnings: number | null
    audioId: string | null
  }

  export type StoreMaxAggregateOutputType = {
    id: string | null
    name: string | null
    trackDownloads: number | null
    streams: number | null
    totalSales: number | null
    earnings: number | null
    audioId: string | null
  }

  export type StoreCountAggregateOutputType = {
    id: number
    name: number
    trackDownloads: number
    streams: number
    totalSales: number
    earnings: number
    audioId: number
    _all: number
  }


  export type StoreAvgAggregateInputType = {
    trackDownloads?: true
    streams?: true
    totalSales?: true
    earnings?: true
  }

  export type StoreSumAggregateInputType = {
    trackDownloads?: true
    streams?: true
    totalSales?: true
    earnings?: true
  }

  export type StoreMinAggregateInputType = {
    id?: true
    name?: true
    trackDownloads?: true
    streams?: true
    totalSales?: true
    earnings?: true
    audioId?: true
  }

  export type StoreMaxAggregateInputType = {
    id?: true
    name?: true
    trackDownloads?: true
    streams?: true
    totalSales?: true
    earnings?: true
    audioId?: true
  }

  export type StoreCountAggregateInputType = {
    id?: true
    name?: true
    trackDownloads?: true
    streams?: true
    totalSales?: true
    earnings?: true
    audioId?: true
    _all?: true
  }

  export type StoreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Store to aggregate.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Stores
    **/
    _count?: true | StoreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StoreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StoreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StoreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StoreMaxAggregateInputType
  }

  export type GetStoreAggregateType<T extends StoreAggregateArgs> = {
        [P in keyof T & keyof AggregateStore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStore[P]>
      : GetScalarType<T[P], AggregateStore[P]>
  }




  export type StoreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoreWhereInput
    orderBy?: StoreOrderByWithAggregationInput | StoreOrderByWithAggregationInput[]
    by: StoreScalarFieldEnum[] | StoreScalarFieldEnum
    having?: StoreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StoreCountAggregateInputType | true
    _avg?: StoreAvgAggregateInputType
    _sum?: StoreSumAggregateInputType
    _min?: StoreMinAggregateInputType
    _max?: StoreMaxAggregateInputType
  }

  export type StoreGroupByOutputType = {
    id: string
    name: string
    trackDownloads: number
    streams: number
    totalSales: number
    earnings: number
    audioId: string
    _count: StoreCountAggregateOutputType | null
    _avg: StoreAvgAggregateOutputType | null
    _sum: StoreSumAggregateOutputType | null
    _min: StoreMinAggregateOutputType | null
    _max: StoreMaxAggregateOutputType | null
  }

  type GetStoreGroupByPayload<T extends StoreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StoreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StoreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StoreGroupByOutputType[P]>
            : GetScalarType<T[P], StoreGroupByOutputType[P]>
        }
      >
    >


  export type StoreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    trackDownloads?: boolean
    streams?: boolean
    totalSales?: boolean
    earnings?: boolean
    audioId?: boolean
    audio?: boolean | AudioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["store"]>

  export type StoreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    trackDownloads?: boolean
    streams?: boolean
    totalSales?: boolean
    earnings?: boolean
    audioId?: boolean
    audio?: boolean | AudioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["store"]>

  export type StoreSelectScalar = {
    id?: boolean
    name?: boolean
    trackDownloads?: boolean
    streams?: boolean
    totalSales?: boolean
    earnings?: boolean
    audioId?: boolean
  }

  export type StoreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    audio?: boolean | AudioDefaultArgs<ExtArgs>
  }
  export type StoreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    audio?: boolean | AudioDefaultArgs<ExtArgs>
  }

  export type $StorePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Store"
    objects: {
      audio: Prisma.$AudioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      trackDownloads: number
      streams: number
      totalSales: number
      earnings: number
      audioId: string
    }, ExtArgs["result"]["store"]>
    composites: {}
  }

  type StoreGetPayload<S extends boolean | null | undefined | StoreDefaultArgs> = $Result.GetResult<Prisma.$StorePayload, S>

  type StoreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StoreFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StoreCountAggregateInputType | true
    }

  export interface StoreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Store'], meta: { name: 'Store' } }
    /**
     * Find zero or one Store that matches the filter.
     * @param {StoreFindUniqueArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StoreFindUniqueArgs>(args: SelectSubset<T, StoreFindUniqueArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Store that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {StoreFindUniqueOrThrowArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StoreFindUniqueOrThrowArgs>(args: SelectSubset<T, StoreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Store that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreFindFirstArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StoreFindFirstArgs>(args?: SelectSubset<T, StoreFindFirstArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Store that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreFindFirstOrThrowArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StoreFindFirstOrThrowArgs>(args?: SelectSubset<T, StoreFindFirstOrThrowArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Stores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stores
     * const stores = await prisma.store.findMany()
     * 
     * // Get first 10 Stores
     * const stores = await prisma.store.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const storeWithIdOnly = await prisma.store.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StoreFindManyArgs>(args?: SelectSubset<T, StoreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Store.
     * @param {StoreCreateArgs} args - Arguments to create a Store.
     * @example
     * // Create one Store
     * const Store = await prisma.store.create({
     *   data: {
     *     // ... data to create a Store
     *   }
     * })
     * 
     */
    create<T extends StoreCreateArgs>(args: SelectSubset<T, StoreCreateArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Stores.
     * @param {StoreCreateManyArgs} args - Arguments to create many Stores.
     * @example
     * // Create many Stores
     * const store = await prisma.store.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StoreCreateManyArgs>(args?: SelectSubset<T, StoreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Stores and returns the data saved in the database.
     * @param {StoreCreateManyAndReturnArgs} args - Arguments to create many Stores.
     * @example
     * // Create many Stores
     * const store = await prisma.store.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Stores and only return the `id`
     * const storeWithIdOnly = await prisma.store.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StoreCreateManyAndReturnArgs>(args?: SelectSubset<T, StoreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Store.
     * @param {StoreDeleteArgs} args - Arguments to delete one Store.
     * @example
     * // Delete one Store
     * const Store = await prisma.store.delete({
     *   where: {
     *     // ... filter to delete one Store
     *   }
     * })
     * 
     */
    delete<T extends StoreDeleteArgs>(args: SelectSubset<T, StoreDeleteArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Store.
     * @param {StoreUpdateArgs} args - Arguments to update one Store.
     * @example
     * // Update one Store
     * const store = await prisma.store.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StoreUpdateArgs>(args: SelectSubset<T, StoreUpdateArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Stores.
     * @param {StoreDeleteManyArgs} args - Arguments to filter Stores to delete.
     * @example
     * // Delete a few Stores
     * const { count } = await prisma.store.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StoreDeleteManyArgs>(args?: SelectSubset<T, StoreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stores
     * const store = await prisma.store.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StoreUpdateManyArgs>(args: SelectSubset<T, StoreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Store.
     * @param {StoreUpsertArgs} args - Arguments to update or create a Store.
     * @example
     * // Update or create a Store
     * const store = await prisma.store.upsert({
     *   create: {
     *     // ... data to create a Store
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Store we want to update
     *   }
     * })
     */
    upsert<T extends StoreUpsertArgs>(args: SelectSubset<T, StoreUpsertArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreCountArgs} args - Arguments to filter Stores to count.
     * @example
     * // Count the number of Stores
     * const count = await prisma.store.count({
     *   where: {
     *     // ... the filter for the Stores we want to count
     *   }
     * })
    **/
    count<T extends StoreCountArgs>(
      args?: Subset<T, StoreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StoreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Store.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StoreAggregateArgs>(args: Subset<T, StoreAggregateArgs>): Prisma.PrismaPromise<GetStoreAggregateType<T>>

    /**
     * Group by Store.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StoreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StoreGroupByArgs['orderBy'] }
        : { orderBy?: StoreGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Store model
   */
  readonly fields: StoreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Store.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StoreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    audio<T extends AudioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AudioDefaultArgs<ExtArgs>>): Prisma__AudioClient<$Result.GetResult<Prisma.$AudioPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Store model
   */ 
  interface StoreFieldRefs {
    readonly id: FieldRef<"Store", 'String'>
    readonly name: FieldRef<"Store", 'String'>
    readonly trackDownloads: FieldRef<"Store", 'Int'>
    readonly streams: FieldRef<"Store", 'Int'>
    readonly totalSales: FieldRef<"Store", 'Int'>
    readonly earnings: FieldRef<"Store", 'Float'>
    readonly audioId: FieldRef<"Store", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Store findUnique
   */
  export type StoreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where: StoreWhereUniqueInput
  }

  /**
   * Store findUniqueOrThrow
   */
  export type StoreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where: StoreWhereUniqueInput
  }

  /**
   * Store findFirst
   */
  export type StoreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stores.
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stores.
     */
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }

  /**
   * Store findFirstOrThrow
   */
  export type StoreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stores.
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stores.
     */
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }

  /**
   * Store findMany
   */
  export type StoreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Stores to fetch.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Stores.
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }

  /**
   * Store create
   */
  export type StoreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * The data needed to create a Store.
     */
    data: XOR<StoreCreateInput, StoreUncheckedCreateInput>
  }

  /**
   * Store createMany
   */
  export type StoreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Stores.
     */
    data: StoreCreateManyInput | StoreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Store createManyAndReturn
   */
  export type StoreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Stores.
     */
    data: StoreCreateManyInput | StoreCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Store update
   */
  export type StoreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * The data needed to update a Store.
     */
    data: XOR<StoreUpdateInput, StoreUncheckedUpdateInput>
    /**
     * Choose, which Store to update.
     */
    where: StoreWhereUniqueInput
  }

  /**
   * Store updateMany
   */
  export type StoreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Stores.
     */
    data: XOR<StoreUpdateManyMutationInput, StoreUncheckedUpdateManyInput>
    /**
     * Filter which Stores to update
     */
    where?: StoreWhereInput
  }

  /**
   * Store upsert
   */
  export type StoreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * The filter to search for the Store to update in case it exists.
     */
    where: StoreWhereUniqueInput
    /**
     * In case the Store found by the `where` argument doesn't exist, create a new Store with this data.
     */
    create: XOR<StoreCreateInput, StoreUncheckedCreateInput>
    /**
     * In case the Store was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StoreUpdateInput, StoreUncheckedUpdateInput>
  }

  /**
   * Store delete
   */
  export type StoreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter which Store to delete.
     */
    where: StoreWhereUniqueInput
  }

  /**
   * Store deleteMany
   */
  export type StoreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stores to delete
     */
    where?: StoreWhereInput
  }

  /**
   * Store without action
   */
  export type StoreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
  }


  /**
   * Model CountryEarnings
   */

  export type AggregateCountryEarnings = {
    _count: CountryEarningsCountAggregateOutputType | null
    _avg: CountryEarningsAvgAggregateOutputType | null
    _sum: CountryEarningsSumAggregateOutputType | null
    _min: CountryEarningsMinAggregateOutputType | null
    _max: CountryEarningsMaxAggregateOutputType | null
  }

  export type CountryEarningsAvgAggregateOutputType = {
    trackDownloads: number | null
    streams: number | null
    totalSales: number | null
    earnings: number | null
  }

  export type CountryEarningsSumAggregateOutputType = {
    trackDownloads: number | null
    streams: number | null
    totalSales: number | null
    earnings: number | null
  }

  export type CountryEarningsMinAggregateOutputType = {
    id: string | null
    name: string | null
    trackDownloads: number | null
    streams: number | null
    totalSales: number | null
    earnings: number | null
    audioId: string | null
  }

  export type CountryEarningsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    trackDownloads: number | null
    streams: number | null
    totalSales: number | null
    earnings: number | null
    audioId: string | null
  }

  export type CountryEarningsCountAggregateOutputType = {
    id: number
    name: number
    trackDownloads: number
    streams: number
    totalSales: number
    earnings: number
    audioId: number
    _all: number
  }


  export type CountryEarningsAvgAggregateInputType = {
    trackDownloads?: true
    streams?: true
    totalSales?: true
    earnings?: true
  }

  export type CountryEarningsSumAggregateInputType = {
    trackDownloads?: true
    streams?: true
    totalSales?: true
    earnings?: true
  }

  export type CountryEarningsMinAggregateInputType = {
    id?: true
    name?: true
    trackDownloads?: true
    streams?: true
    totalSales?: true
    earnings?: true
    audioId?: true
  }

  export type CountryEarningsMaxAggregateInputType = {
    id?: true
    name?: true
    trackDownloads?: true
    streams?: true
    totalSales?: true
    earnings?: true
    audioId?: true
  }

  export type CountryEarningsCountAggregateInputType = {
    id?: true
    name?: true
    trackDownloads?: true
    streams?: true
    totalSales?: true
    earnings?: true
    audioId?: true
    _all?: true
  }

  export type CountryEarningsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CountryEarnings to aggregate.
     */
    where?: CountryEarningsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CountryEarnings to fetch.
     */
    orderBy?: CountryEarningsOrderByWithRelationInput | CountryEarningsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CountryEarningsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CountryEarnings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CountryEarnings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CountryEarnings
    **/
    _count?: true | CountryEarningsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CountryEarningsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CountryEarningsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CountryEarningsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CountryEarningsMaxAggregateInputType
  }

  export type GetCountryEarningsAggregateType<T extends CountryEarningsAggregateArgs> = {
        [P in keyof T & keyof AggregateCountryEarnings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCountryEarnings[P]>
      : GetScalarType<T[P], AggregateCountryEarnings[P]>
  }




  export type CountryEarningsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CountryEarningsWhereInput
    orderBy?: CountryEarningsOrderByWithAggregationInput | CountryEarningsOrderByWithAggregationInput[]
    by: CountryEarningsScalarFieldEnum[] | CountryEarningsScalarFieldEnum
    having?: CountryEarningsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CountryEarningsCountAggregateInputType | true
    _avg?: CountryEarningsAvgAggregateInputType
    _sum?: CountryEarningsSumAggregateInputType
    _min?: CountryEarningsMinAggregateInputType
    _max?: CountryEarningsMaxAggregateInputType
  }

  export type CountryEarningsGroupByOutputType = {
    id: string
    name: string
    trackDownloads: number
    streams: number
    totalSales: number
    earnings: number
    audioId: string
    _count: CountryEarningsCountAggregateOutputType | null
    _avg: CountryEarningsAvgAggregateOutputType | null
    _sum: CountryEarningsSumAggregateOutputType | null
    _min: CountryEarningsMinAggregateOutputType | null
    _max: CountryEarningsMaxAggregateOutputType | null
  }

  type GetCountryEarningsGroupByPayload<T extends CountryEarningsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CountryEarningsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CountryEarningsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CountryEarningsGroupByOutputType[P]>
            : GetScalarType<T[P], CountryEarningsGroupByOutputType[P]>
        }
      >
    >


  export type CountryEarningsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    trackDownloads?: boolean
    streams?: boolean
    totalSales?: boolean
    earnings?: boolean
    audioId?: boolean
    audio?: boolean | AudioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["countryEarnings"]>

  export type CountryEarningsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    trackDownloads?: boolean
    streams?: boolean
    totalSales?: boolean
    earnings?: boolean
    audioId?: boolean
    audio?: boolean | AudioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["countryEarnings"]>

  export type CountryEarningsSelectScalar = {
    id?: boolean
    name?: boolean
    trackDownloads?: boolean
    streams?: boolean
    totalSales?: boolean
    earnings?: boolean
    audioId?: boolean
  }

  export type CountryEarningsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    audio?: boolean | AudioDefaultArgs<ExtArgs>
  }
  export type CountryEarningsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    audio?: boolean | AudioDefaultArgs<ExtArgs>
  }

  export type $CountryEarningsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CountryEarnings"
    objects: {
      audio: Prisma.$AudioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      trackDownloads: number
      streams: number
      totalSales: number
      earnings: number
      audioId: string
    }, ExtArgs["result"]["countryEarnings"]>
    composites: {}
  }

  type CountryEarningsGetPayload<S extends boolean | null | undefined | CountryEarningsDefaultArgs> = $Result.GetResult<Prisma.$CountryEarningsPayload, S>

  type CountryEarningsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CountryEarningsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CountryEarningsCountAggregateInputType | true
    }

  export interface CountryEarningsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CountryEarnings'], meta: { name: 'CountryEarnings' } }
    /**
     * Find zero or one CountryEarnings that matches the filter.
     * @param {CountryEarningsFindUniqueArgs} args - Arguments to find a CountryEarnings
     * @example
     * // Get one CountryEarnings
     * const countryEarnings = await prisma.countryEarnings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CountryEarningsFindUniqueArgs>(args: SelectSubset<T, CountryEarningsFindUniqueArgs<ExtArgs>>): Prisma__CountryEarningsClient<$Result.GetResult<Prisma.$CountryEarningsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one CountryEarnings that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CountryEarningsFindUniqueOrThrowArgs} args - Arguments to find a CountryEarnings
     * @example
     * // Get one CountryEarnings
     * const countryEarnings = await prisma.countryEarnings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CountryEarningsFindUniqueOrThrowArgs>(args: SelectSubset<T, CountryEarningsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CountryEarningsClient<$Result.GetResult<Prisma.$CountryEarningsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first CountryEarnings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryEarningsFindFirstArgs} args - Arguments to find a CountryEarnings
     * @example
     * // Get one CountryEarnings
     * const countryEarnings = await prisma.countryEarnings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CountryEarningsFindFirstArgs>(args?: SelectSubset<T, CountryEarningsFindFirstArgs<ExtArgs>>): Prisma__CountryEarningsClient<$Result.GetResult<Prisma.$CountryEarningsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first CountryEarnings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryEarningsFindFirstOrThrowArgs} args - Arguments to find a CountryEarnings
     * @example
     * // Get one CountryEarnings
     * const countryEarnings = await prisma.countryEarnings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CountryEarningsFindFirstOrThrowArgs>(args?: SelectSubset<T, CountryEarningsFindFirstOrThrowArgs<ExtArgs>>): Prisma__CountryEarningsClient<$Result.GetResult<Prisma.$CountryEarningsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more CountryEarnings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryEarningsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CountryEarnings
     * const countryEarnings = await prisma.countryEarnings.findMany()
     * 
     * // Get first 10 CountryEarnings
     * const countryEarnings = await prisma.countryEarnings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const countryEarningsWithIdOnly = await prisma.countryEarnings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CountryEarningsFindManyArgs>(args?: SelectSubset<T, CountryEarningsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountryEarningsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a CountryEarnings.
     * @param {CountryEarningsCreateArgs} args - Arguments to create a CountryEarnings.
     * @example
     * // Create one CountryEarnings
     * const CountryEarnings = await prisma.countryEarnings.create({
     *   data: {
     *     // ... data to create a CountryEarnings
     *   }
     * })
     * 
     */
    create<T extends CountryEarningsCreateArgs>(args: SelectSubset<T, CountryEarningsCreateArgs<ExtArgs>>): Prisma__CountryEarningsClient<$Result.GetResult<Prisma.$CountryEarningsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many CountryEarnings.
     * @param {CountryEarningsCreateManyArgs} args - Arguments to create many CountryEarnings.
     * @example
     * // Create many CountryEarnings
     * const countryEarnings = await prisma.countryEarnings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CountryEarningsCreateManyArgs>(args?: SelectSubset<T, CountryEarningsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CountryEarnings and returns the data saved in the database.
     * @param {CountryEarningsCreateManyAndReturnArgs} args - Arguments to create many CountryEarnings.
     * @example
     * // Create many CountryEarnings
     * const countryEarnings = await prisma.countryEarnings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CountryEarnings and only return the `id`
     * const countryEarningsWithIdOnly = await prisma.countryEarnings.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CountryEarningsCreateManyAndReturnArgs>(args?: SelectSubset<T, CountryEarningsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountryEarningsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a CountryEarnings.
     * @param {CountryEarningsDeleteArgs} args - Arguments to delete one CountryEarnings.
     * @example
     * // Delete one CountryEarnings
     * const CountryEarnings = await prisma.countryEarnings.delete({
     *   where: {
     *     // ... filter to delete one CountryEarnings
     *   }
     * })
     * 
     */
    delete<T extends CountryEarningsDeleteArgs>(args: SelectSubset<T, CountryEarningsDeleteArgs<ExtArgs>>): Prisma__CountryEarningsClient<$Result.GetResult<Prisma.$CountryEarningsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one CountryEarnings.
     * @param {CountryEarningsUpdateArgs} args - Arguments to update one CountryEarnings.
     * @example
     * // Update one CountryEarnings
     * const countryEarnings = await prisma.countryEarnings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CountryEarningsUpdateArgs>(args: SelectSubset<T, CountryEarningsUpdateArgs<ExtArgs>>): Prisma__CountryEarningsClient<$Result.GetResult<Prisma.$CountryEarningsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more CountryEarnings.
     * @param {CountryEarningsDeleteManyArgs} args - Arguments to filter CountryEarnings to delete.
     * @example
     * // Delete a few CountryEarnings
     * const { count } = await prisma.countryEarnings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CountryEarningsDeleteManyArgs>(args?: SelectSubset<T, CountryEarningsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CountryEarnings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryEarningsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CountryEarnings
     * const countryEarnings = await prisma.countryEarnings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CountryEarningsUpdateManyArgs>(args: SelectSubset<T, CountryEarningsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CountryEarnings.
     * @param {CountryEarningsUpsertArgs} args - Arguments to update or create a CountryEarnings.
     * @example
     * // Update or create a CountryEarnings
     * const countryEarnings = await prisma.countryEarnings.upsert({
     *   create: {
     *     // ... data to create a CountryEarnings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CountryEarnings we want to update
     *   }
     * })
     */
    upsert<T extends CountryEarningsUpsertArgs>(args: SelectSubset<T, CountryEarningsUpsertArgs<ExtArgs>>): Prisma__CountryEarningsClient<$Result.GetResult<Prisma.$CountryEarningsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of CountryEarnings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryEarningsCountArgs} args - Arguments to filter CountryEarnings to count.
     * @example
     * // Count the number of CountryEarnings
     * const count = await prisma.countryEarnings.count({
     *   where: {
     *     // ... the filter for the CountryEarnings we want to count
     *   }
     * })
    **/
    count<T extends CountryEarningsCountArgs>(
      args?: Subset<T, CountryEarningsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CountryEarningsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CountryEarnings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryEarningsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CountryEarningsAggregateArgs>(args: Subset<T, CountryEarningsAggregateArgs>): Prisma.PrismaPromise<GetCountryEarningsAggregateType<T>>

    /**
     * Group by CountryEarnings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryEarningsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CountryEarningsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CountryEarningsGroupByArgs['orderBy'] }
        : { orderBy?: CountryEarningsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CountryEarningsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCountryEarningsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CountryEarnings model
   */
  readonly fields: CountryEarningsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CountryEarnings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CountryEarningsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    audio<T extends AudioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AudioDefaultArgs<ExtArgs>>): Prisma__AudioClient<$Result.GetResult<Prisma.$AudioPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CountryEarnings model
   */ 
  interface CountryEarningsFieldRefs {
    readonly id: FieldRef<"CountryEarnings", 'String'>
    readonly name: FieldRef<"CountryEarnings", 'String'>
    readonly trackDownloads: FieldRef<"CountryEarnings", 'Int'>
    readonly streams: FieldRef<"CountryEarnings", 'Int'>
    readonly totalSales: FieldRef<"CountryEarnings", 'Int'>
    readonly earnings: FieldRef<"CountryEarnings", 'Float'>
    readonly audioId: FieldRef<"CountryEarnings", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CountryEarnings findUnique
   */
  export type CountryEarningsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryEarnings
     */
    select?: CountryEarningsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryEarningsInclude<ExtArgs> | null
    /**
     * Filter, which CountryEarnings to fetch.
     */
    where: CountryEarningsWhereUniqueInput
  }

  /**
   * CountryEarnings findUniqueOrThrow
   */
  export type CountryEarningsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryEarnings
     */
    select?: CountryEarningsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryEarningsInclude<ExtArgs> | null
    /**
     * Filter, which CountryEarnings to fetch.
     */
    where: CountryEarningsWhereUniqueInput
  }

  /**
   * CountryEarnings findFirst
   */
  export type CountryEarningsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryEarnings
     */
    select?: CountryEarningsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryEarningsInclude<ExtArgs> | null
    /**
     * Filter, which CountryEarnings to fetch.
     */
    where?: CountryEarningsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CountryEarnings to fetch.
     */
    orderBy?: CountryEarningsOrderByWithRelationInput | CountryEarningsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CountryEarnings.
     */
    cursor?: CountryEarningsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CountryEarnings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CountryEarnings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CountryEarnings.
     */
    distinct?: CountryEarningsScalarFieldEnum | CountryEarningsScalarFieldEnum[]
  }

  /**
   * CountryEarnings findFirstOrThrow
   */
  export type CountryEarningsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryEarnings
     */
    select?: CountryEarningsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryEarningsInclude<ExtArgs> | null
    /**
     * Filter, which CountryEarnings to fetch.
     */
    where?: CountryEarningsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CountryEarnings to fetch.
     */
    orderBy?: CountryEarningsOrderByWithRelationInput | CountryEarningsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CountryEarnings.
     */
    cursor?: CountryEarningsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CountryEarnings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CountryEarnings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CountryEarnings.
     */
    distinct?: CountryEarningsScalarFieldEnum | CountryEarningsScalarFieldEnum[]
  }

  /**
   * CountryEarnings findMany
   */
  export type CountryEarningsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryEarnings
     */
    select?: CountryEarningsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryEarningsInclude<ExtArgs> | null
    /**
     * Filter, which CountryEarnings to fetch.
     */
    where?: CountryEarningsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CountryEarnings to fetch.
     */
    orderBy?: CountryEarningsOrderByWithRelationInput | CountryEarningsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CountryEarnings.
     */
    cursor?: CountryEarningsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CountryEarnings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CountryEarnings.
     */
    skip?: number
    distinct?: CountryEarningsScalarFieldEnum | CountryEarningsScalarFieldEnum[]
  }

  /**
   * CountryEarnings create
   */
  export type CountryEarningsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryEarnings
     */
    select?: CountryEarningsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryEarningsInclude<ExtArgs> | null
    /**
     * The data needed to create a CountryEarnings.
     */
    data: XOR<CountryEarningsCreateInput, CountryEarningsUncheckedCreateInput>
  }

  /**
   * CountryEarnings createMany
   */
  export type CountryEarningsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CountryEarnings.
     */
    data: CountryEarningsCreateManyInput | CountryEarningsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CountryEarnings createManyAndReturn
   */
  export type CountryEarningsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryEarnings
     */
    select?: CountryEarningsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many CountryEarnings.
     */
    data: CountryEarningsCreateManyInput | CountryEarningsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryEarningsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CountryEarnings update
   */
  export type CountryEarningsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryEarnings
     */
    select?: CountryEarningsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryEarningsInclude<ExtArgs> | null
    /**
     * The data needed to update a CountryEarnings.
     */
    data: XOR<CountryEarningsUpdateInput, CountryEarningsUncheckedUpdateInput>
    /**
     * Choose, which CountryEarnings to update.
     */
    where: CountryEarningsWhereUniqueInput
  }

  /**
   * CountryEarnings updateMany
   */
  export type CountryEarningsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CountryEarnings.
     */
    data: XOR<CountryEarningsUpdateManyMutationInput, CountryEarningsUncheckedUpdateManyInput>
    /**
     * Filter which CountryEarnings to update
     */
    where?: CountryEarningsWhereInput
  }

  /**
   * CountryEarnings upsert
   */
  export type CountryEarningsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryEarnings
     */
    select?: CountryEarningsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryEarningsInclude<ExtArgs> | null
    /**
     * The filter to search for the CountryEarnings to update in case it exists.
     */
    where: CountryEarningsWhereUniqueInput
    /**
     * In case the CountryEarnings found by the `where` argument doesn't exist, create a new CountryEarnings with this data.
     */
    create: XOR<CountryEarningsCreateInput, CountryEarningsUncheckedCreateInput>
    /**
     * In case the CountryEarnings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CountryEarningsUpdateInput, CountryEarningsUncheckedUpdateInput>
  }

  /**
   * CountryEarnings delete
   */
  export type CountryEarningsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryEarnings
     */
    select?: CountryEarningsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryEarningsInclude<ExtArgs> | null
    /**
     * Filter which CountryEarnings to delete.
     */
    where: CountryEarningsWhereUniqueInput
  }

  /**
   * CountryEarnings deleteMany
   */
  export type CountryEarningsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CountryEarnings to delete
     */
    where?: CountryEarningsWhereInput
  }

  /**
   * CountryEarnings without action
   */
  export type CountryEarningsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryEarnings
     */
    select?: CountryEarningsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryEarningsInclude<ExtArgs> | null
  }


  /**
   * Model MonthlyReport
   */

  export type AggregateMonthlyReport = {
    _count: MonthlyReportCountAggregateOutputType | null
    _avg: MonthlyReportAvgAggregateOutputType | null
    _sum: MonthlyReportSumAggregateOutputType | null
    _min: MonthlyReportMinAggregateOutputType | null
    _max: MonthlyReportMaxAggregateOutputType | null
  }

  export type MonthlyReportAvgAggregateOutputType = {
    month: number | null
    year: number | null
    trackDownloads: number | null
    streams: number | null
    totalSales: number | null
    earnings: number | null
  }

  export type MonthlyReportSumAggregateOutputType = {
    month: number | null
    year: number | null
    trackDownloads: number | null
    streams: number | null
    totalSales: number | null
    earnings: number | null
  }

  export type MonthlyReportMinAggregateOutputType = {
    id: string | null
    month: number | null
    year: number | null
    trackDownloads: number | null
    streams: number | null
    totalSales: number | null
    earnings: number | null
    date: string | null
    audioId: string | null
  }

  export type MonthlyReportMaxAggregateOutputType = {
    id: string | null
    month: number | null
    year: number | null
    trackDownloads: number | null
    streams: number | null
    totalSales: number | null
    earnings: number | null
    date: string | null
    audioId: string | null
  }

  export type MonthlyReportCountAggregateOutputType = {
    id: number
    month: number
    year: number
    trackDownloads: number
    streams: number
    totalSales: number
    earnings: number
    date: number
    audioId: number
    _all: number
  }


  export type MonthlyReportAvgAggregateInputType = {
    month?: true
    year?: true
    trackDownloads?: true
    streams?: true
    totalSales?: true
    earnings?: true
  }

  export type MonthlyReportSumAggregateInputType = {
    month?: true
    year?: true
    trackDownloads?: true
    streams?: true
    totalSales?: true
    earnings?: true
  }

  export type MonthlyReportMinAggregateInputType = {
    id?: true
    month?: true
    year?: true
    trackDownloads?: true
    streams?: true
    totalSales?: true
    earnings?: true
    date?: true
    audioId?: true
  }

  export type MonthlyReportMaxAggregateInputType = {
    id?: true
    month?: true
    year?: true
    trackDownloads?: true
    streams?: true
    totalSales?: true
    earnings?: true
    date?: true
    audioId?: true
  }

  export type MonthlyReportCountAggregateInputType = {
    id?: true
    month?: true
    year?: true
    trackDownloads?: true
    streams?: true
    totalSales?: true
    earnings?: true
    date?: true
    audioId?: true
    _all?: true
  }

  export type MonthlyReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MonthlyReport to aggregate.
     */
    where?: MonthlyReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonthlyReports to fetch.
     */
    orderBy?: MonthlyReportOrderByWithRelationInput | MonthlyReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MonthlyReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonthlyReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonthlyReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MonthlyReports
    **/
    _count?: true | MonthlyReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MonthlyReportAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MonthlyReportSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MonthlyReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MonthlyReportMaxAggregateInputType
  }

  export type GetMonthlyReportAggregateType<T extends MonthlyReportAggregateArgs> = {
        [P in keyof T & keyof AggregateMonthlyReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMonthlyReport[P]>
      : GetScalarType<T[P], AggregateMonthlyReport[P]>
  }




  export type MonthlyReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MonthlyReportWhereInput
    orderBy?: MonthlyReportOrderByWithAggregationInput | MonthlyReportOrderByWithAggregationInput[]
    by: MonthlyReportScalarFieldEnum[] | MonthlyReportScalarFieldEnum
    having?: MonthlyReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MonthlyReportCountAggregateInputType | true
    _avg?: MonthlyReportAvgAggregateInputType
    _sum?: MonthlyReportSumAggregateInputType
    _min?: MonthlyReportMinAggregateInputType
    _max?: MonthlyReportMaxAggregateInputType
  }

  export type MonthlyReportGroupByOutputType = {
    id: string
    month: number
    year: number
    trackDownloads: number
    streams: number
    totalSales: number
    earnings: number
    date: string
    audioId: string
    _count: MonthlyReportCountAggregateOutputType | null
    _avg: MonthlyReportAvgAggregateOutputType | null
    _sum: MonthlyReportSumAggregateOutputType | null
    _min: MonthlyReportMinAggregateOutputType | null
    _max: MonthlyReportMaxAggregateOutputType | null
  }

  type GetMonthlyReportGroupByPayload<T extends MonthlyReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MonthlyReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MonthlyReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MonthlyReportGroupByOutputType[P]>
            : GetScalarType<T[P], MonthlyReportGroupByOutputType[P]>
        }
      >
    >


  export type MonthlyReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    month?: boolean
    year?: boolean
    trackDownloads?: boolean
    streams?: boolean
    totalSales?: boolean
    earnings?: boolean
    date?: boolean
    audioId?: boolean
    audio?: boolean | AudioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["monthlyReport"]>

  export type MonthlyReportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    month?: boolean
    year?: boolean
    trackDownloads?: boolean
    streams?: boolean
    totalSales?: boolean
    earnings?: boolean
    date?: boolean
    audioId?: boolean
    audio?: boolean | AudioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["monthlyReport"]>

  export type MonthlyReportSelectScalar = {
    id?: boolean
    month?: boolean
    year?: boolean
    trackDownloads?: boolean
    streams?: boolean
    totalSales?: boolean
    earnings?: boolean
    date?: boolean
    audioId?: boolean
  }

  export type MonthlyReportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    audio?: boolean | AudioDefaultArgs<ExtArgs>
  }
  export type MonthlyReportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    audio?: boolean | AudioDefaultArgs<ExtArgs>
  }

  export type $MonthlyReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MonthlyReport"
    objects: {
      audio: Prisma.$AudioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      month: number
      year: number
      trackDownloads: number
      streams: number
      totalSales: number
      earnings: number
      date: string
      audioId: string
    }, ExtArgs["result"]["monthlyReport"]>
    composites: {}
  }

  type MonthlyReportGetPayload<S extends boolean | null | undefined | MonthlyReportDefaultArgs> = $Result.GetResult<Prisma.$MonthlyReportPayload, S>

  type MonthlyReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MonthlyReportFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MonthlyReportCountAggregateInputType | true
    }

  export interface MonthlyReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MonthlyReport'], meta: { name: 'MonthlyReport' } }
    /**
     * Find zero or one MonthlyReport that matches the filter.
     * @param {MonthlyReportFindUniqueArgs} args - Arguments to find a MonthlyReport
     * @example
     * // Get one MonthlyReport
     * const monthlyReport = await prisma.monthlyReport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MonthlyReportFindUniqueArgs>(args: SelectSubset<T, MonthlyReportFindUniqueArgs<ExtArgs>>): Prisma__MonthlyReportClient<$Result.GetResult<Prisma.$MonthlyReportPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one MonthlyReport that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MonthlyReportFindUniqueOrThrowArgs} args - Arguments to find a MonthlyReport
     * @example
     * // Get one MonthlyReport
     * const monthlyReport = await prisma.monthlyReport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MonthlyReportFindUniqueOrThrowArgs>(args: SelectSubset<T, MonthlyReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MonthlyReportClient<$Result.GetResult<Prisma.$MonthlyReportPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first MonthlyReport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyReportFindFirstArgs} args - Arguments to find a MonthlyReport
     * @example
     * // Get one MonthlyReport
     * const monthlyReport = await prisma.monthlyReport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MonthlyReportFindFirstArgs>(args?: SelectSubset<T, MonthlyReportFindFirstArgs<ExtArgs>>): Prisma__MonthlyReportClient<$Result.GetResult<Prisma.$MonthlyReportPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first MonthlyReport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyReportFindFirstOrThrowArgs} args - Arguments to find a MonthlyReport
     * @example
     * // Get one MonthlyReport
     * const monthlyReport = await prisma.monthlyReport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MonthlyReportFindFirstOrThrowArgs>(args?: SelectSubset<T, MonthlyReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__MonthlyReportClient<$Result.GetResult<Prisma.$MonthlyReportPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more MonthlyReports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MonthlyReports
     * const monthlyReports = await prisma.monthlyReport.findMany()
     * 
     * // Get first 10 MonthlyReports
     * const monthlyReports = await prisma.monthlyReport.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const monthlyReportWithIdOnly = await prisma.monthlyReport.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MonthlyReportFindManyArgs>(args?: SelectSubset<T, MonthlyReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonthlyReportPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a MonthlyReport.
     * @param {MonthlyReportCreateArgs} args - Arguments to create a MonthlyReport.
     * @example
     * // Create one MonthlyReport
     * const MonthlyReport = await prisma.monthlyReport.create({
     *   data: {
     *     // ... data to create a MonthlyReport
     *   }
     * })
     * 
     */
    create<T extends MonthlyReportCreateArgs>(args: SelectSubset<T, MonthlyReportCreateArgs<ExtArgs>>): Prisma__MonthlyReportClient<$Result.GetResult<Prisma.$MonthlyReportPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many MonthlyReports.
     * @param {MonthlyReportCreateManyArgs} args - Arguments to create many MonthlyReports.
     * @example
     * // Create many MonthlyReports
     * const monthlyReport = await prisma.monthlyReport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MonthlyReportCreateManyArgs>(args?: SelectSubset<T, MonthlyReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MonthlyReports and returns the data saved in the database.
     * @param {MonthlyReportCreateManyAndReturnArgs} args - Arguments to create many MonthlyReports.
     * @example
     * // Create many MonthlyReports
     * const monthlyReport = await prisma.monthlyReport.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MonthlyReports and only return the `id`
     * const monthlyReportWithIdOnly = await prisma.monthlyReport.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MonthlyReportCreateManyAndReturnArgs>(args?: SelectSubset<T, MonthlyReportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonthlyReportPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a MonthlyReport.
     * @param {MonthlyReportDeleteArgs} args - Arguments to delete one MonthlyReport.
     * @example
     * // Delete one MonthlyReport
     * const MonthlyReport = await prisma.monthlyReport.delete({
     *   where: {
     *     // ... filter to delete one MonthlyReport
     *   }
     * })
     * 
     */
    delete<T extends MonthlyReportDeleteArgs>(args: SelectSubset<T, MonthlyReportDeleteArgs<ExtArgs>>): Prisma__MonthlyReportClient<$Result.GetResult<Prisma.$MonthlyReportPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one MonthlyReport.
     * @param {MonthlyReportUpdateArgs} args - Arguments to update one MonthlyReport.
     * @example
     * // Update one MonthlyReport
     * const monthlyReport = await prisma.monthlyReport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MonthlyReportUpdateArgs>(args: SelectSubset<T, MonthlyReportUpdateArgs<ExtArgs>>): Prisma__MonthlyReportClient<$Result.GetResult<Prisma.$MonthlyReportPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more MonthlyReports.
     * @param {MonthlyReportDeleteManyArgs} args - Arguments to filter MonthlyReports to delete.
     * @example
     * // Delete a few MonthlyReports
     * const { count } = await prisma.monthlyReport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MonthlyReportDeleteManyArgs>(args?: SelectSubset<T, MonthlyReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MonthlyReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MonthlyReports
     * const monthlyReport = await prisma.monthlyReport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MonthlyReportUpdateManyArgs>(args: SelectSubset<T, MonthlyReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MonthlyReport.
     * @param {MonthlyReportUpsertArgs} args - Arguments to update or create a MonthlyReport.
     * @example
     * // Update or create a MonthlyReport
     * const monthlyReport = await prisma.monthlyReport.upsert({
     *   create: {
     *     // ... data to create a MonthlyReport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MonthlyReport we want to update
     *   }
     * })
     */
    upsert<T extends MonthlyReportUpsertArgs>(args: SelectSubset<T, MonthlyReportUpsertArgs<ExtArgs>>): Prisma__MonthlyReportClient<$Result.GetResult<Prisma.$MonthlyReportPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of MonthlyReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyReportCountArgs} args - Arguments to filter MonthlyReports to count.
     * @example
     * // Count the number of MonthlyReports
     * const count = await prisma.monthlyReport.count({
     *   where: {
     *     // ... the filter for the MonthlyReports we want to count
     *   }
     * })
    **/
    count<T extends MonthlyReportCountArgs>(
      args?: Subset<T, MonthlyReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MonthlyReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MonthlyReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MonthlyReportAggregateArgs>(args: Subset<T, MonthlyReportAggregateArgs>): Prisma.PrismaPromise<GetMonthlyReportAggregateType<T>>

    /**
     * Group by MonthlyReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyReportGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MonthlyReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MonthlyReportGroupByArgs['orderBy'] }
        : { orderBy?: MonthlyReportGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MonthlyReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMonthlyReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MonthlyReport model
   */
  readonly fields: MonthlyReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MonthlyReport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MonthlyReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    audio<T extends AudioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AudioDefaultArgs<ExtArgs>>): Prisma__AudioClient<$Result.GetResult<Prisma.$AudioPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MonthlyReport model
   */ 
  interface MonthlyReportFieldRefs {
    readonly id: FieldRef<"MonthlyReport", 'String'>
    readonly month: FieldRef<"MonthlyReport", 'Int'>
    readonly year: FieldRef<"MonthlyReport", 'Int'>
    readonly trackDownloads: FieldRef<"MonthlyReport", 'Int'>
    readonly streams: FieldRef<"MonthlyReport", 'Int'>
    readonly totalSales: FieldRef<"MonthlyReport", 'Int'>
    readonly earnings: FieldRef<"MonthlyReport", 'Float'>
    readonly date: FieldRef<"MonthlyReport", 'String'>
    readonly audioId: FieldRef<"MonthlyReport", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MonthlyReport findUnique
   */
  export type MonthlyReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyReport
     */
    select?: MonthlyReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyReportInclude<ExtArgs> | null
    /**
     * Filter, which MonthlyReport to fetch.
     */
    where: MonthlyReportWhereUniqueInput
  }

  /**
   * MonthlyReport findUniqueOrThrow
   */
  export type MonthlyReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyReport
     */
    select?: MonthlyReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyReportInclude<ExtArgs> | null
    /**
     * Filter, which MonthlyReport to fetch.
     */
    where: MonthlyReportWhereUniqueInput
  }

  /**
   * MonthlyReport findFirst
   */
  export type MonthlyReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyReport
     */
    select?: MonthlyReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyReportInclude<ExtArgs> | null
    /**
     * Filter, which MonthlyReport to fetch.
     */
    where?: MonthlyReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonthlyReports to fetch.
     */
    orderBy?: MonthlyReportOrderByWithRelationInput | MonthlyReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MonthlyReports.
     */
    cursor?: MonthlyReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonthlyReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonthlyReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MonthlyReports.
     */
    distinct?: MonthlyReportScalarFieldEnum | MonthlyReportScalarFieldEnum[]
  }

  /**
   * MonthlyReport findFirstOrThrow
   */
  export type MonthlyReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyReport
     */
    select?: MonthlyReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyReportInclude<ExtArgs> | null
    /**
     * Filter, which MonthlyReport to fetch.
     */
    where?: MonthlyReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonthlyReports to fetch.
     */
    orderBy?: MonthlyReportOrderByWithRelationInput | MonthlyReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MonthlyReports.
     */
    cursor?: MonthlyReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonthlyReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonthlyReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MonthlyReports.
     */
    distinct?: MonthlyReportScalarFieldEnum | MonthlyReportScalarFieldEnum[]
  }

  /**
   * MonthlyReport findMany
   */
  export type MonthlyReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyReport
     */
    select?: MonthlyReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyReportInclude<ExtArgs> | null
    /**
     * Filter, which MonthlyReports to fetch.
     */
    where?: MonthlyReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonthlyReports to fetch.
     */
    orderBy?: MonthlyReportOrderByWithRelationInput | MonthlyReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MonthlyReports.
     */
    cursor?: MonthlyReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonthlyReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonthlyReports.
     */
    skip?: number
    distinct?: MonthlyReportScalarFieldEnum | MonthlyReportScalarFieldEnum[]
  }

  /**
   * MonthlyReport create
   */
  export type MonthlyReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyReport
     */
    select?: MonthlyReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyReportInclude<ExtArgs> | null
    /**
     * The data needed to create a MonthlyReport.
     */
    data: XOR<MonthlyReportCreateInput, MonthlyReportUncheckedCreateInput>
  }

  /**
   * MonthlyReport createMany
   */
  export type MonthlyReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MonthlyReports.
     */
    data: MonthlyReportCreateManyInput | MonthlyReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MonthlyReport createManyAndReturn
   */
  export type MonthlyReportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyReport
     */
    select?: MonthlyReportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many MonthlyReports.
     */
    data: MonthlyReportCreateManyInput | MonthlyReportCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyReportIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MonthlyReport update
   */
  export type MonthlyReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyReport
     */
    select?: MonthlyReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyReportInclude<ExtArgs> | null
    /**
     * The data needed to update a MonthlyReport.
     */
    data: XOR<MonthlyReportUpdateInput, MonthlyReportUncheckedUpdateInput>
    /**
     * Choose, which MonthlyReport to update.
     */
    where: MonthlyReportWhereUniqueInput
  }

  /**
   * MonthlyReport updateMany
   */
  export type MonthlyReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MonthlyReports.
     */
    data: XOR<MonthlyReportUpdateManyMutationInput, MonthlyReportUncheckedUpdateManyInput>
    /**
     * Filter which MonthlyReports to update
     */
    where?: MonthlyReportWhereInput
  }

  /**
   * MonthlyReport upsert
   */
  export type MonthlyReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyReport
     */
    select?: MonthlyReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyReportInclude<ExtArgs> | null
    /**
     * The filter to search for the MonthlyReport to update in case it exists.
     */
    where: MonthlyReportWhereUniqueInput
    /**
     * In case the MonthlyReport found by the `where` argument doesn't exist, create a new MonthlyReport with this data.
     */
    create: XOR<MonthlyReportCreateInput, MonthlyReportUncheckedCreateInput>
    /**
     * In case the MonthlyReport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MonthlyReportUpdateInput, MonthlyReportUncheckedUpdateInput>
  }

  /**
   * MonthlyReport delete
   */
  export type MonthlyReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyReport
     */
    select?: MonthlyReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyReportInclude<ExtArgs> | null
    /**
     * Filter which MonthlyReport to delete.
     */
    where: MonthlyReportWhereUniqueInput
  }

  /**
   * MonthlyReport deleteMany
   */
  export type MonthlyReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MonthlyReports to delete
     */
    where?: MonthlyReportWhereInput
  }

  /**
   * MonthlyReport without action
   */
  export type MonthlyReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyReport
     */
    select?: MonthlyReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyReportInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AudioScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    artist: 'artist',
    releaseDate: 'releaseDate',
    primaryGenre: 'primaryGenre',
    secondaryGenre: 'secondaryGenre',
    language: 'language',
    label: 'label',
    copyrightHolder: 'copyrightHolder',
    copyrightYear: 'copyrightYear',
    productionHolder: 'productionHolder',
    productionYear: 'productionYear',
    releaseCover: 'releaseCover',
    releaseAudio: 'releaseAudio',
    releaseAudioLink: 'releaseAudioLink',
    lyrics: 'lyrics',
    releaseType: 'releaseType',
    status: 'status',
    UPC: 'UPC',
    ISRC: 'ISRC',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    smartLink: 'smartLink'
  };

  export type AudioScalarFieldEnum = (typeof AudioScalarFieldEnum)[keyof typeof AudioScalarFieldEnum]


  export const TrackScalarFieldEnum: {
    id: 'id',
    audioId: 'audioId',
    title: 'title',
    lyrics: 'lyrics',
    productionCredit: 'productionCredit',
    ISRC: 'ISRC',
    trackNumber: 'trackNumber',
    audioLink: 'audioLink'
  };

  export type TrackScalarFieldEnum = (typeof TrackScalarFieldEnum)[keyof typeof TrackScalarFieldEnum]


  export const DSPScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type DSPScalarFieldEnum = (typeof DSPScalarFieldEnum)[keyof typeof DSPScalarFieldEnum]


  export const StreamsScalarFieldEnum: {
    id: 'id',
    dspId: 'dspId',
    total: 'total',
    date: 'date',
    audioId: 'audioId'
  };

  export type StreamsScalarFieldEnum = (typeof StreamsScalarFieldEnum)[keyof typeof StreamsScalarFieldEnum]


  export const CountryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    isoCode: 'isoCode'
  };

  export type CountryScalarFieldEnum = (typeof CountryScalarFieldEnum)[keyof typeof CountryScalarFieldEnum]


  export const StreamByCountryScalarFieldEnum: {
    id: 'id',
    countryId: 'countryId',
    total: 'total',
    date: 'date',
    audioId: 'audioId'
  };

  export type StreamByCountryScalarFieldEnum = (typeof StreamByCountryScalarFieldEnum)[keyof typeof StreamByCountryScalarFieldEnum]


  export const StoreScalarFieldEnum: {
    id: 'id',
    name: 'name',
    trackDownloads: 'trackDownloads',
    streams: 'streams',
    totalSales: 'totalSales',
    earnings: 'earnings',
    audioId: 'audioId'
  };

  export type StoreScalarFieldEnum = (typeof StoreScalarFieldEnum)[keyof typeof StoreScalarFieldEnum]


  export const CountryEarningsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    trackDownloads: 'trackDownloads',
    streams: 'streams',
    totalSales: 'totalSales',
    earnings: 'earnings',
    audioId: 'audioId'
  };

  export type CountryEarningsScalarFieldEnum = (typeof CountryEarningsScalarFieldEnum)[keyof typeof CountryEarningsScalarFieldEnum]


  export const MonthlyReportScalarFieldEnum: {
    id: 'id',
    month: 'month',
    year: 'year',
    trackDownloads: 'trackDownloads',
    streams: 'streams',
    totalSales: 'totalSales',
    earnings: 'earnings',
    date: 'date',
    audioId: 'audioId'
  };

  export type MonthlyReportScalarFieldEnum = (typeof MonthlyReportScalarFieldEnum)[keyof typeof MonthlyReportScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type AudioWhereInput = {
    AND?: AudioWhereInput | AudioWhereInput[]
    OR?: AudioWhereInput[]
    NOT?: AudioWhereInput | AudioWhereInput[]
    id?: StringFilter<"Audio"> | string
    userId?: StringFilter<"Audio"> | string
    title?: StringFilter<"Audio"> | string
    artist?: StringFilter<"Audio"> | string
    releaseDate?: DateTimeFilter<"Audio"> | Date | string
    primaryGenre?: StringFilter<"Audio"> | string
    secondaryGenre?: StringFilter<"Audio"> | string
    language?: StringFilter<"Audio"> | string
    label?: StringFilter<"Audio"> | string
    copyrightHolder?: StringFilter<"Audio"> | string
    copyrightYear?: StringFilter<"Audio"> | string
    productionHolder?: StringFilter<"Audio"> | string
    productionYear?: StringFilter<"Audio"> | string
    releaseCover?: StringFilter<"Audio"> | string
    releaseAudio?: StringNullableFilter<"Audio"> | string | null
    releaseAudioLink?: StringNullableFilter<"Audio"> | string | null
    lyrics?: StringNullableFilter<"Audio"> | string | null
    releaseType?: StringFilter<"Audio"> | string
    status?: StringFilter<"Audio"> | string
    UPC?: StringFilter<"Audio"> | string
    ISRC?: StringFilter<"Audio"> | string
    createdAt?: DateTimeFilter<"Audio"> | Date | string
    updatedAt?: DateTimeFilter<"Audio"> | Date | string
    smartLink?: StringFilter<"Audio"> | string
    Track?: TrackListRelationFilter
    Streams?: StreamsListRelationFilter
    StreamByCountry?: StreamByCountryListRelationFilter
    Store?: StoreListRelationFilter
    MonthlyReport?: MonthlyReportListRelationFilter
    CountryEarnings?: CountryEarningsListRelationFilter
  }

  export type AudioOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    artist?: SortOrder
    releaseDate?: SortOrder
    primaryGenre?: SortOrder
    secondaryGenre?: SortOrder
    language?: SortOrder
    label?: SortOrder
    copyrightHolder?: SortOrder
    copyrightYear?: SortOrder
    productionHolder?: SortOrder
    productionYear?: SortOrder
    releaseCover?: SortOrder
    releaseAudio?: SortOrderInput | SortOrder
    releaseAudioLink?: SortOrderInput | SortOrder
    lyrics?: SortOrderInput | SortOrder
    releaseType?: SortOrder
    status?: SortOrder
    UPC?: SortOrder
    ISRC?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    smartLink?: SortOrder
    Track?: TrackOrderByRelationAggregateInput
    Streams?: StreamsOrderByRelationAggregateInput
    StreamByCountry?: StreamByCountryOrderByRelationAggregateInput
    Store?: StoreOrderByRelationAggregateInput
    MonthlyReport?: MonthlyReportOrderByRelationAggregateInput
    CountryEarnings?: CountryEarningsOrderByRelationAggregateInput
  }

  export type AudioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AudioWhereInput | AudioWhereInput[]
    OR?: AudioWhereInput[]
    NOT?: AudioWhereInput | AudioWhereInput[]
    userId?: StringFilter<"Audio"> | string
    title?: StringFilter<"Audio"> | string
    artist?: StringFilter<"Audio"> | string
    releaseDate?: DateTimeFilter<"Audio"> | Date | string
    primaryGenre?: StringFilter<"Audio"> | string
    secondaryGenre?: StringFilter<"Audio"> | string
    language?: StringFilter<"Audio"> | string
    label?: StringFilter<"Audio"> | string
    copyrightHolder?: StringFilter<"Audio"> | string
    copyrightYear?: StringFilter<"Audio"> | string
    productionHolder?: StringFilter<"Audio"> | string
    productionYear?: StringFilter<"Audio"> | string
    releaseCover?: StringFilter<"Audio"> | string
    releaseAudio?: StringNullableFilter<"Audio"> | string | null
    releaseAudioLink?: StringNullableFilter<"Audio"> | string | null
    lyrics?: StringNullableFilter<"Audio"> | string | null
    releaseType?: StringFilter<"Audio"> | string
    status?: StringFilter<"Audio"> | string
    UPC?: StringFilter<"Audio"> | string
    ISRC?: StringFilter<"Audio"> | string
    createdAt?: DateTimeFilter<"Audio"> | Date | string
    updatedAt?: DateTimeFilter<"Audio"> | Date | string
    smartLink?: StringFilter<"Audio"> | string
    Track?: TrackListRelationFilter
    Streams?: StreamsListRelationFilter
    StreamByCountry?: StreamByCountryListRelationFilter
    Store?: StoreListRelationFilter
    MonthlyReport?: MonthlyReportListRelationFilter
    CountryEarnings?: CountryEarningsListRelationFilter
  }, "id">

  export type AudioOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    artist?: SortOrder
    releaseDate?: SortOrder
    primaryGenre?: SortOrder
    secondaryGenre?: SortOrder
    language?: SortOrder
    label?: SortOrder
    copyrightHolder?: SortOrder
    copyrightYear?: SortOrder
    productionHolder?: SortOrder
    productionYear?: SortOrder
    releaseCover?: SortOrder
    releaseAudio?: SortOrderInput | SortOrder
    releaseAudioLink?: SortOrderInput | SortOrder
    lyrics?: SortOrderInput | SortOrder
    releaseType?: SortOrder
    status?: SortOrder
    UPC?: SortOrder
    ISRC?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    smartLink?: SortOrder
    _count?: AudioCountOrderByAggregateInput
    _max?: AudioMaxOrderByAggregateInput
    _min?: AudioMinOrderByAggregateInput
  }

  export type AudioScalarWhereWithAggregatesInput = {
    AND?: AudioScalarWhereWithAggregatesInput | AudioScalarWhereWithAggregatesInput[]
    OR?: AudioScalarWhereWithAggregatesInput[]
    NOT?: AudioScalarWhereWithAggregatesInput | AudioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Audio"> | string
    userId?: StringWithAggregatesFilter<"Audio"> | string
    title?: StringWithAggregatesFilter<"Audio"> | string
    artist?: StringWithAggregatesFilter<"Audio"> | string
    releaseDate?: DateTimeWithAggregatesFilter<"Audio"> | Date | string
    primaryGenre?: StringWithAggregatesFilter<"Audio"> | string
    secondaryGenre?: StringWithAggregatesFilter<"Audio"> | string
    language?: StringWithAggregatesFilter<"Audio"> | string
    label?: StringWithAggregatesFilter<"Audio"> | string
    copyrightHolder?: StringWithAggregatesFilter<"Audio"> | string
    copyrightYear?: StringWithAggregatesFilter<"Audio"> | string
    productionHolder?: StringWithAggregatesFilter<"Audio"> | string
    productionYear?: StringWithAggregatesFilter<"Audio"> | string
    releaseCover?: StringWithAggregatesFilter<"Audio"> | string
    releaseAudio?: StringNullableWithAggregatesFilter<"Audio"> | string | null
    releaseAudioLink?: StringNullableWithAggregatesFilter<"Audio"> | string | null
    lyrics?: StringNullableWithAggregatesFilter<"Audio"> | string | null
    releaseType?: StringWithAggregatesFilter<"Audio"> | string
    status?: StringWithAggregatesFilter<"Audio"> | string
    UPC?: StringWithAggregatesFilter<"Audio"> | string
    ISRC?: StringWithAggregatesFilter<"Audio"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Audio"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Audio"> | Date | string
    smartLink?: StringWithAggregatesFilter<"Audio"> | string
  }

  export type TrackWhereInput = {
    AND?: TrackWhereInput | TrackWhereInput[]
    OR?: TrackWhereInput[]
    NOT?: TrackWhereInput | TrackWhereInput[]
    id?: StringFilter<"Track"> | string
    audioId?: StringFilter<"Track"> | string
    title?: StringFilter<"Track"> | string
    lyrics?: StringNullableFilter<"Track"> | string | null
    productionCredit?: StringNullableFilter<"Track"> | string | null
    ISRC?: StringNullableFilter<"Track"> | string | null
    trackNumber?: IntFilter<"Track"> | number
    audioLink?: StringFilter<"Track"> | string
    Audio?: XOR<AudioRelationFilter, AudioWhereInput>
  }

  export type TrackOrderByWithRelationInput = {
    id?: SortOrder
    audioId?: SortOrder
    title?: SortOrder
    lyrics?: SortOrderInput | SortOrder
    productionCredit?: SortOrderInput | SortOrder
    ISRC?: SortOrderInput | SortOrder
    trackNumber?: SortOrder
    audioLink?: SortOrder
    Audio?: AudioOrderByWithRelationInput
  }

  export type TrackWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TrackWhereInput | TrackWhereInput[]
    OR?: TrackWhereInput[]
    NOT?: TrackWhereInput | TrackWhereInput[]
    audioId?: StringFilter<"Track"> | string
    title?: StringFilter<"Track"> | string
    lyrics?: StringNullableFilter<"Track"> | string | null
    productionCredit?: StringNullableFilter<"Track"> | string | null
    ISRC?: StringNullableFilter<"Track"> | string | null
    trackNumber?: IntFilter<"Track"> | number
    audioLink?: StringFilter<"Track"> | string
    Audio?: XOR<AudioRelationFilter, AudioWhereInput>
  }, "id">

  export type TrackOrderByWithAggregationInput = {
    id?: SortOrder
    audioId?: SortOrder
    title?: SortOrder
    lyrics?: SortOrderInput | SortOrder
    productionCredit?: SortOrderInput | SortOrder
    ISRC?: SortOrderInput | SortOrder
    trackNumber?: SortOrder
    audioLink?: SortOrder
    _count?: TrackCountOrderByAggregateInput
    _avg?: TrackAvgOrderByAggregateInput
    _max?: TrackMaxOrderByAggregateInput
    _min?: TrackMinOrderByAggregateInput
    _sum?: TrackSumOrderByAggregateInput
  }

  export type TrackScalarWhereWithAggregatesInput = {
    AND?: TrackScalarWhereWithAggregatesInput | TrackScalarWhereWithAggregatesInput[]
    OR?: TrackScalarWhereWithAggregatesInput[]
    NOT?: TrackScalarWhereWithAggregatesInput | TrackScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Track"> | string
    audioId?: StringWithAggregatesFilter<"Track"> | string
    title?: StringWithAggregatesFilter<"Track"> | string
    lyrics?: StringNullableWithAggregatesFilter<"Track"> | string | null
    productionCredit?: StringNullableWithAggregatesFilter<"Track"> | string | null
    ISRC?: StringNullableWithAggregatesFilter<"Track"> | string | null
    trackNumber?: IntWithAggregatesFilter<"Track"> | number
    audioLink?: StringWithAggregatesFilter<"Track"> | string
  }

  export type DSPWhereInput = {
    AND?: DSPWhereInput | DSPWhereInput[]
    OR?: DSPWhereInput[]
    NOT?: DSPWhereInput | DSPWhereInput[]
    id?: StringFilter<"DSP"> | string
    name?: StringFilter<"DSP"> | string
    streams?: StreamsListRelationFilter
  }

  export type DSPOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    streams?: StreamsOrderByRelationAggregateInput
  }

  export type DSPWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: DSPWhereInput | DSPWhereInput[]
    OR?: DSPWhereInput[]
    NOT?: DSPWhereInput | DSPWhereInput[]
    streams?: StreamsListRelationFilter
  }, "id" | "name">

  export type DSPOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: DSPCountOrderByAggregateInput
    _max?: DSPMaxOrderByAggregateInput
    _min?: DSPMinOrderByAggregateInput
  }

  export type DSPScalarWhereWithAggregatesInput = {
    AND?: DSPScalarWhereWithAggregatesInput | DSPScalarWhereWithAggregatesInput[]
    OR?: DSPScalarWhereWithAggregatesInput[]
    NOT?: DSPScalarWhereWithAggregatesInput | DSPScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DSP"> | string
    name?: StringWithAggregatesFilter<"DSP"> | string
  }

  export type StreamsWhereInput = {
    AND?: StreamsWhereInput | StreamsWhereInput[]
    OR?: StreamsWhereInput[]
    NOT?: StreamsWhereInput | StreamsWhereInput[]
    id?: StringFilter<"Streams"> | string
    dspId?: StringFilter<"Streams"> | string
    total?: IntFilter<"Streams"> | number
    date?: DateTimeFilter<"Streams"> | Date | string
    audioId?: StringFilter<"Streams"> | string
    dsp?: XOR<DSPRelationFilter, DSPWhereInput>
    Audio?: XOR<AudioRelationFilter, AudioWhereInput>
  }

  export type StreamsOrderByWithRelationInput = {
    id?: SortOrder
    dspId?: SortOrder
    total?: SortOrder
    date?: SortOrder
    audioId?: SortOrder
    dsp?: DSPOrderByWithRelationInput
    Audio?: AudioOrderByWithRelationInput
  }

  export type StreamsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    dspId_date_audioId?: StreamsDspIdDateAudioIdCompoundUniqueInput
    AND?: StreamsWhereInput | StreamsWhereInput[]
    OR?: StreamsWhereInput[]
    NOT?: StreamsWhereInput | StreamsWhereInput[]
    dspId?: StringFilter<"Streams"> | string
    total?: IntFilter<"Streams"> | number
    date?: DateTimeFilter<"Streams"> | Date | string
    audioId?: StringFilter<"Streams"> | string
    dsp?: XOR<DSPRelationFilter, DSPWhereInput>
    Audio?: XOR<AudioRelationFilter, AudioWhereInput>
  }, "id" | "dspId_date_audioId">

  export type StreamsOrderByWithAggregationInput = {
    id?: SortOrder
    dspId?: SortOrder
    total?: SortOrder
    date?: SortOrder
    audioId?: SortOrder
    _count?: StreamsCountOrderByAggregateInput
    _avg?: StreamsAvgOrderByAggregateInput
    _max?: StreamsMaxOrderByAggregateInput
    _min?: StreamsMinOrderByAggregateInput
    _sum?: StreamsSumOrderByAggregateInput
  }

  export type StreamsScalarWhereWithAggregatesInput = {
    AND?: StreamsScalarWhereWithAggregatesInput | StreamsScalarWhereWithAggregatesInput[]
    OR?: StreamsScalarWhereWithAggregatesInput[]
    NOT?: StreamsScalarWhereWithAggregatesInput | StreamsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Streams"> | string
    dspId?: StringWithAggregatesFilter<"Streams"> | string
    total?: IntWithAggregatesFilter<"Streams"> | number
    date?: DateTimeWithAggregatesFilter<"Streams"> | Date | string
    audioId?: StringWithAggregatesFilter<"Streams"> | string
  }

  export type CountryWhereInput = {
    AND?: CountryWhereInput | CountryWhereInput[]
    OR?: CountryWhereInput[]
    NOT?: CountryWhereInput | CountryWhereInput[]
    id?: StringFilter<"Country"> | string
    name?: StringFilter<"Country"> | string
    isoCode?: StringFilter<"Country"> | string
    streamsByCountry?: StreamByCountryListRelationFilter
  }

  export type CountryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    isoCode?: SortOrder
    streamsByCountry?: StreamByCountryOrderByRelationAggregateInput
  }

  export type CountryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    isoCode?: string
    AND?: CountryWhereInput | CountryWhereInput[]
    OR?: CountryWhereInput[]
    NOT?: CountryWhereInput | CountryWhereInput[]
    streamsByCountry?: StreamByCountryListRelationFilter
  }, "id" | "name" | "isoCode">

  export type CountryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    isoCode?: SortOrder
    _count?: CountryCountOrderByAggregateInput
    _max?: CountryMaxOrderByAggregateInput
    _min?: CountryMinOrderByAggregateInput
  }

  export type CountryScalarWhereWithAggregatesInput = {
    AND?: CountryScalarWhereWithAggregatesInput | CountryScalarWhereWithAggregatesInput[]
    OR?: CountryScalarWhereWithAggregatesInput[]
    NOT?: CountryScalarWhereWithAggregatesInput | CountryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Country"> | string
    name?: StringWithAggregatesFilter<"Country"> | string
    isoCode?: StringWithAggregatesFilter<"Country"> | string
  }

  export type StreamByCountryWhereInput = {
    AND?: StreamByCountryWhereInput | StreamByCountryWhereInput[]
    OR?: StreamByCountryWhereInput[]
    NOT?: StreamByCountryWhereInput | StreamByCountryWhereInput[]
    id?: StringFilter<"StreamByCountry"> | string
    countryId?: StringFilter<"StreamByCountry"> | string
    total?: IntFilter<"StreamByCountry"> | number
    date?: DateTimeFilter<"StreamByCountry"> | Date | string
    audioId?: StringFilter<"StreamByCountry"> | string
    country?: XOR<CountryRelationFilter, CountryWhereInput>
    audio?: XOR<AudioRelationFilter, AudioWhereInput>
  }

  export type StreamByCountryOrderByWithRelationInput = {
    id?: SortOrder
    countryId?: SortOrder
    total?: SortOrder
    date?: SortOrder
    audioId?: SortOrder
    country?: CountryOrderByWithRelationInput
    audio?: AudioOrderByWithRelationInput
  }

  export type StreamByCountryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StreamByCountryWhereInput | StreamByCountryWhereInput[]
    OR?: StreamByCountryWhereInput[]
    NOT?: StreamByCountryWhereInput | StreamByCountryWhereInput[]
    countryId?: StringFilter<"StreamByCountry"> | string
    total?: IntFilter<"StreamByCountry"> | number
    date?: DateTimeFilter<"StreamByCountry"> | Date | string
    audioId?: StringFilter<"StreamByCountry"> | string
    country?: XOR<CountryRelationFilter, CountryWhereInput>
    audio?: XOR<AudioRelationFilter, AudioWhereInput>
  }, "id">

  export type StreamByCountryOrderByWithAggregationInput = {
    id?: SortOrder
    countryId?: SortOrder
    total?: SortOrder
    date?: SortOrder
    audioId?: SortOrder
    _count?: StreamByCountryCountOrderByAggregateInput
    _avg?: StreamByCountryAvgOrderByAggregateInput
    _max?: StreamByCountryMaxOrderByAggregateInput
    _min?: StreamByCountryMinOrderByAggregateInput
    _sum?: StreamByCountrySumOrderByAggregateInput
  }

  export type StreamByCountryScalarWhereWithAggregatesInput = {
    AND?: StreamByCountryScalarWhereWithAggregatesInput | StreamByCountryScalarWhereWithAggregatesInput[]
    OR?: StreamByCountryScalarWhereWithAggregatesInput[]
    NOT?: StreamByCountryScalarWhereWithAggregatesInput | StreamByCountryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StreamByCountry"> | string
    countryId?: StringWithAggregatesFilter<"StreamByCountry"> | string
    total?: IntWithAggregatesFilter<"StreamByCountry"> | number
    date?: DateTimeWithAggregatesFilter<"StreamByCountry"> | Date | string
    audioId?: StringWithAggregatesFilter<"StreamByCountry"> | string
  }

  export type StoreWhereInput = {
    AND?: StoreWhereInput | StoreWhereInput[]
    OR?: StoreWhereInput[]
    NOT?: StoreWhereInput | StoreWhereInput[]
    id?: StringFilter<"Store"> | string
    name?: StringFilter<"Store"> | string
    trackDownloads?: IntFilter<"Store"> | number
    streams?: IntFilter<"Store"> | number
    totalSales?: IntFilter<"Store"> | number
    earnings?: FloatFilter<"Store"> | number
    audioId?: StringFilter<"Store"> | string
    audio?: XOR<AudioRelationFilter, AudioWhereInput>
  }

  export type StoreOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    trackDownloads?: SortOrder
    streams?: SortOrder
    totalSales?: SortOrder
    earnings?: SortOrder
    audioId?: SortOrder
    audio?: AudioOrderByWithRelationInput
  }

  export type StoreWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StoreWhereInput | StoreWhereInput[]
    OR?: StoreWhereInput[]
    NOT?: StoreWhereInput | StoreWhereInput[]
    name?: StringFilter<"Store"> | string
    trackDownloads?: IntFilter<"Store"> | number
    streams?: IntFilter<"Store"> | number
    totalSales?: IntFilter<"Store"> | number
    earnings?: FloatFilter<"Store"> | number
    audioId?: StringFilter<"Store"> | string
    audio?: XOR<AudioRelationFilter, AudioWhereInput>
  }, "id">

  export type StoreOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    trackDownloads?: SortOrder
    streams?: SortOrder
    totalSales?: SortOrder
    earnings?: SortOrder
    audioId?: SortOrder
    _count?: StoreCountOrderByAggregateInput
    _avg?: StoreAvgOrderByAggregateInput
    _max?: StoreMaxOrderByAggregateInput
    _min?: StoreMinOrderByAggregateInput
    _sum?: StoreSumOrderByAggregateInput
  }

  export type StoreScalarWhereWithAggregatesInput = {
    AND?: StoreScalarWhereWithAggregatesInput | StoreScalarWhereWithAggregatesInput[]
    OR?: StoreScalarWhereWithAggregatesInput[]
    NOT?: StoreScalarWhereWithAggregatesInput | StoreScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Store"> | string
    name?: StringWithAggregatesFilter<"Store"> | string
    trackDownloads?: IntWithAggregatesFilter<"Store"> | number
    streams?: IntWithAggregatesFilter<"Store"> | number
    totalSales?: IntWithAggregatesFilter<"Store"> | number
    earnings?: FloatWithAggregatesFilter<"Store"> | number
    audioId?: StringWithAggregatesFilter<"Store"> | string
  }

  export type CountryEarningsWhereInput = {
    AND?: CountryEarningsWhereInput | CountryEarningsWhereInput[]
    OR?: CountryEarningsWhereInput[]
    NOT?: CountryEarningsWhereInput | CountryEarningsWhereInput[]
    id?: StringFilter<"CountryEarnings"> | string
    name?: StringFilter<"CountryEarnings"> | string
    trackDownloads?: IntFilter<"CountryEarnings"> | number
    streams?: IntFilter<"CountryEarnings"> | number
    totalSales?: IntFilter<"CountryEarnings"> | number
    earnings?: FloatFilter<"CountryEarnings"> | number
    audioId?: StringFilter<"CountryEarnings"> | string
    audio?: XOR<AudioRelationFilter, AudioWhereInput>
  }

  export type CountryEarningsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    trackDownloads?: SortOrder
    streams?: SortOrder
    totalSales?: SortOrder
    earnings?: SortOrder
    audioId?: SortOrder
    audio?: AudioOrderByWithRelationInput
  }

  export type CountryEarningsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CountryEarningsWhereInput | CountryEarningsWhereInput[]
    OR?: CountryEarningsWhereInput[]
    NOT?: CountryEarningsWhereInput | CountryEarningsWhereInput[]
    name?: StringFilter<"CountryEarnings"> | string
    trackDownloads?: IntFilter<"CountryEarnings"> | number
    streams?: IntFilter<"CountryEarnings"> | number
    totalSales?: IntFilter<"CountryEarnings"> | number
    earnings?: FloatFilter<"CountryEarnings"> | number
    audioId?: StringFilter<"CountryEarnings"> | string
    audio?: XOR<AudioRelationFilter, AudioWhereInput>
  }, "id">

  export type CountryEarningsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    trackDownloads?: SortOrder
    streams?: SortOrder
    totalSales?: SortOrder
    earnings?: SortOrder
    audioId?: SortOrder
    _count?: CountryEarningsCountOrderByAggregateInput
    _avg?: CountryEarningsAvgOrderByAggregateInput
    _max?: CountryEarningsMaxOrderByAggregateInput
    _min?: CountryEarningsMinOrderByAggregateInput
    _sum?: CountryEarningsSumOrderByAggregateInput
  }

  export type CountryEarningsScalarWhereWithAggregatesInput = {
    AND?: CountryEarningsScalarWhereWithAggregatesInput | CountryEarningsScalarWhereWithAggregatesInput[]
    OR?: CountryEarningsScalarWhereWithAggregatesInput[]
    NOT?: CountryEarningsScalarWhereWithAggregatesInput | CountryEarningsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CountryEarnings"> | string
    name?: StringWithAggregatesFilter<"CountryEarnings"> | string
    trackDownloads?: IntWithAggregatesFilter<"CountryEarnings"> | number
    streams?: IntWithAggregatesFilter<"CountryEarnings"> | number
    totalSales?: IntWithAggregatesFilter<"CountryEarnings"> | number
    earnings?: FloatWithAggregatesFilter<"CountryEarnings"> | number
    audioId?: StringWithAggregatesFilter<"CountryEarnings"> | string
  }

  export type MonthlyReportWhereInput = {
    AND?: MonthlyReportWhereInput | MonthlyReportWhereInput[]
    OR?: MonthlyReportWhereInput[]
    NOT?: MonthlyReportWhereInput | MonthlyReportWhereInput[]
    id?: StringFilter<"MonthlyReport"> | string
    month?: IntFilter<"MonthlyReport"> | number
    year?: IntFilter<"MonthlyReport"> | number
    trackDownloads?: IntFilter<"MonthlyReport"> | number
    streams?: IntFilter<"MonthlyReport"> | number
    totalSales?: IntFilter<"MonthlyReport"> | number
    earnings?: FloatFilter<"MonthlyReport"> | number
    date?: StringFilter<"MonthlyReport"> | string
    audioId?: StringFilter<"MonthlyReport"> | string
    audio?: XOR<AudioRelationFilter, AudioWhereInput>
  }

  export type MonthlyReportOrderByWithRelationInput = {
    id?: SortOrder
    month?: SortOrder
    year?: SortOrder
    trackDownloads?: SortOrder
    streams?: SortOrder
    totalSales?: SortOrder
    earnings?: SortOrder
    date?: SortOrder
    audioId?: SortOrder
    audio?: AudioOrderByWithRelationInput
  }

  export type MonthlyReportWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MonthlyReportWhereInput | MonthlyReportWhereInput[]
    OR?: MonthlyReportWhereInput[]
    NOT?: MonthlyReportWhereInput | MonthlyReportWhereInput[]
    month?: IntFilter<"MonthlyReport"> | number
    year?: IntFilter<"MonthlyReport"> | number
    trackDownloads?: IntFilter<"MonthlyReport"> | number
    streams?: IntFilter<"MonthlyReport"> | number
    totalSales?: IntFilter<"MonthlyReport"> | number
    earnings?: FloatFilter<"MonthlyReport"> | number
    date?: StringFilter<"MonthlyReport"> | string
    audioId?: StringFilter<"MonthlyReport"> | string
    audio?: XOR<AudioRelationFilter, AudioWhereInput>
  }, "id">

  export type MonthlyReportOrderByWithAggregationInput = {
    id?: SortOrder
    month?: SortOrder
    year?: SortOrder
    trackDownloads?: SortOrder
    streams?: SortOrder
    totalSales?: SortOrder
    earnings?: SortOrder
    date?: SortOrder
    audioId?: SortOrder
    _count?: MonthlyReportCountOrderByAggregateInput
    _avg?: MonthlyReportAvgOrderByAggregateInput
    _max?: MonthlyReportMaxOrderByAggregateInput
    _min?: MonthlyReportMinOrderByAggregateInput
    _sum?: MonthlyReportSumOrderByAggregateInput
  }

  export type MonthlyReportScalarWhereWithAggregatesInput = {
    AND?: MonthlyReportScalarWhereWithAggregatesInput | MonthlyReportScalarWhereWithAggregatesInput[]
    OR?: MonthlyReportScalarWhereWithAggregatesInput[]
    NOT?: MonthlyReportScalarWhereWithAggregatesInput | MonthlyReportScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MonthlyReport"> | string
    month?: IntWithAggregatesFilter<"MonthlyReport"> | number
    year?: IntWithAggregatesFilter<"MonthlyReport"> | number
    trackDownloads?: IntWithAggregatesFilter<"MonthlyReport"> | number
    streams?: IntWithAggregatesFilter<"MonthlyReport"> | number
    totalSales?: IntWithAggregatesFilter<"MonthlyReport"> | number
    earnings?: FloatWithAggregatesFilter<"MonthlyReport"> | number
    date?: StringWithAggregatesFilter<"MonthlyReport"> | string
    audioId?: StringWithAggregatesFilter<"MonthlyReport"> | string
  }

  export type AudioCreateInput = {
    id?: string
    userId: string
    title: string
    artist: string
    releaseDate?: Date | string
    primaryGenre: string
    secondaryGenre: string
    language: string
    label: string
    copyrightHolder: string
    copyrightYear: string
    productionHolder: string
    productionYear: string
    releaseCover: string
    releaseAudio?: string | null
    releaseAudioLink?: string | null
    lyrics?: string | null
    releaseType: string
    status: string
    UPC?: string
    ISRC?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    smartLink?: string
    Track?: TrackCreateNestedManyWithoutAudioInput
    Streams?: StreamsCreateNestedManyWithoutAudioInput
    StreamByCountry?: StreamByCountryCreateNestedManyWithoutAudioInput
    Store?: StoreCreateNestedManyWithoutAudioInput
    MonthlyReport?: MonthlyReportCreateNestedManyWithoutAudioInput
    CountryEarnings?: CountryEarningsCreateNestedManyWithoutAudioInput
  }

  export type AudioUncheckedCreateInput = {
    id?: string
    userId: string
    title: string
    artist: string
    releaseDate?: Date | string
    primaryGenre: string
    secondaryGenre: string
    language: string
    label: string
    copyrightHolder: string
    copyrightYear: string
    productionHolder: string
    productionYear: string
    releaseCover: string
    releaseAudio?: string | null
    releaseAudioLink?: string | null
    lyrics?: string | null
    releaseType: string
    status: string
    UPC?: string
    ISRC?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    smartLink?: string
    Track?: TrackUncheckedCreateNestedManyWithoutAudioInput
    Streams?: StreamsUncheckedCreateNestedManyWithoutAudioInput
    StreamByCountry?: StreamByCountryUncheckedCreateNestedManyWithoutAudioInput
    Store?: StoreUncheckedCreateNestedManyWithoutAudioInput
    MonthlyReport?: MonthlyReportUncheckedCreateNestedManyWithoutAudioInput
    CountryEarnings?: CountryEarningsUncheckedCreateNestedManyWithoutAudioInput
  }

  export type AudioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    artist?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    primaryGenre?: StringFieldUpdateOperationsInput | string
    secondaryGenre?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    copyrightHolder?: StringFieldUpdateOperationsInput | string
    copyrightYear?: StringFieldUpdateOperationsInput | string
    productionHolder?: StringFieldUpdateOperationsInput | string
    productionYear?: StringFieldUpdateOperationsInput | string
    releaseCover?: StringFieldUpdateOperationsInput | string
    releaseAudio?: NullableStringFieldUpdateOperationsInput | string | null
    releaseAudioLink?: NullableStringFieldUpdateOperationsInput | string | null
    lyrics?: NullableStringFieldUpdateOperationsInput | string | null
    releaseType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    UPC?: StringFieldUpdateOperationsInput | string
    ISRC?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    smartLink?: StringFieldUpdateOperationsInput | string
    Track?: TrackUpdateManyWithoutAudioNestedInput
    Streams?: StreamsUpdateManyWithoutAudioNestedInput
    StreamByCountry?: StreamByCountryUpdateManyWithoutAudioNestedInput
    Store?: StoreUpdateManyWithoutAudioNestedInput
    MonthlyReport?: MonthlyReportUpdateManyWithoutAudioNestedInput
    CountryEarnings?: CountryEarningsUpdateManyWithoutAudioNestedInput
  }

  export type AudioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    artist?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    primaryGenre?: StringFieldUpdateOperationsInput | string
    secondaryGenre?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    copyrightHolder?: StringFieldUpdateOperationsInput | string
    copyrightYear?: StringFieldUpdateOperationsInput | string
    productionHolder?: StringFieldUpdateOperationsInput | string
    productionYear?: StringFieldUpdateOperationsInput | string
    releaseCover?: StringFieldUpdateOperationsInput | string
    releaseAudio?: NullableStringFieldUpdateOperationsInput | string | null
    releaseAudioLink?: NullableStringFieldUpdateOperationsInput | string | null
    lyrics?: NullableStringFieldUpdateOperationsInput | string | null
    releaseType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    UPC?: StringFieldUpdateOperationsInput | string
    ISRC?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    smartLink?: StringFieldUpdateOperationsInput | string
    Track?: TrackUncheckedUpdateManyWithoutAudioNestedInput
    Streams?: StreamsUncheckedUpdateManyWithoutAudioNestedInput
    StreamByCountry?: StreamByCountryUncheckedUpdateManyWithoutAudioNestedInput
    Store?: StoreUncheckedUpdateManyWithoutAudioNestedInput
    MonthlyReport?: MonthlyReportUncheckedUpdateManyWithoutAudioNestedInput
    CountryEarnings?: CountryEarningsUncheckedUpdateManyWithoutAudioNestedInput
  }

  export type AudioCreateManyInput = {
    id?: string
    userId: string
    title: string
    artist: string
    releaseDate?: Date | string
    primaryGenre: string
    secondaryGenre: string
    language: string
    label: string
    copyrightHolder: string
    copyrightYear: string
    productionHolder: string
    productionYear: string
    releaseCover: string
    releaseAudio?: string | null
    releaseAudioLink?: string | null
    lyrics?: string | null
    releaseType: string
    status: string
    UPC?: string
    ISRC?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    smartLink?: string
  }

  export type AudioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    artist?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    primaryGenre?: StringFieldUpdateOperationsInput | string
    secondaryGenre?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    copyrightHolder?: StringFieldUpdateOperationsInput | string
    copyrightYear?: StringFieldUpdateOperationsInput | string
    productionHolder?: StringFieldUpdateOperationsInput | string
    productionYear?: StringFieldUpdateOperationsInput | string
    releaseCover?: StringFieldUpdateOperationsInput | string
    releaseAudio?: NullableStringFieldUpdateOperationsInput | string | null
    releaseAudioLink?: NullableStringFieldUpdateOperationsInput | string | null
    lyrics?: NullableStringFieldUpdateOperationsInput | string | null
    releaseType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    UPC?: StringFieldUpdateOperationsInput | string
    ISRC?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    smartLink?: StringFieldUpdateOperationsInput | string
  }

  export type AudioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    artist?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    primaryGenre?: StringFieldUpdateOperationsInput | string
    secondaryGenre?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    copyrightHolder?: StringFieldUpdateOperationsInput | string
    copyrightYear?: StringFieldUpdateOperationsInput | string
    productionHolder?: StringFieldUpdateOperationsInput | string
    productionYear?: StringFieldUpdateOperationsInput | string
    releaseCover?: StringFieldUpdateOperationsInput | string
    releaseAudio?: NullableStringFieldUpdateOperationsInput | string | null
    releaseAudioLink?: NullableStringFieldUpdateOperationsInput | string | null
    lyrics?: NullableStringFieldUpdateOperationsInput | string | null
    releaseType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    UPC?: StringFieldUpdateOperationsInput | string
    ISRC?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    smartLink?: StringFieldUpdateOperationsInput | string
  }

  export type TrackCreateInput = {
    id?: string
    title: string
    lyrics?: string | null
    productionCredit?: string | null
    ISRC?: string | null
    trackNumber: number
    audioLink: string
    Audio: AudioCreateNestedOneWithoutTrackInput
  }

  export type TrackUncheckedCreateInput = {
    id?: string
    audioId: string
    title: string
    lyrics?: string | null
    productionCredit?: string | null
    ISRC?: string | null
    trackNumber: number
    audioLink: string
  }

  export type TrackUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    lyrics?: NullableStringFieldUpdateOperationsInput | string | null
    productionCredit?: NullableStringFieldUpdateOperationsInput | string | null
    ISRC?: NullableStringFieldUpdateOperationsInput | string | null
    trackNumber?: IntFieldUpdateOperationsInput | number
    audioLink?: StringFieldUpdateOperationsInput | string
    Audio?: AudioUpdateOneRequiredWithoutTrackNestedInput
  }

  export type TrackUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    audioId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    lyrics?: NullableStringFieldUpdateOperationsInput | string | null
    productionCredit?: NullableStringFieldUpdateOperationsInput | string | null
    ISRC?: NullableStringFieldUpdateOperationsInput | string | null
    trackNumber?: IntFieldUpdateOperationsInput | number
    audioLink?: StringFieldUpdateOperationsInput | string
  }

  export type TrackCreateManyInput = {
    id?: string
    audioId: string
    title: string
    lyrics?: string | null
    productionCredit?: string | null
    ISRC?: string | null
    trackNumber: number
    audioLink: string
  }

  export type TrackUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    lyrics?: NullableStringFieldUpdateOperationsInput | string | null
    productionCredit?: NullableStringFieldUpdateOperationsInput | string | null
    ISRC?: NullableStringFieldUpdateOperationsInput | string | null
    trackNumber?: IntFieldUpdateOperationsInput | number
    audioLink?: StringFieldUpdateOperationsInput | string
  }

  export type TrackUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    audioId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    lyrics?: NullableStringFieldUpdateOperationsInput | string | null
    productionCredit?: NullableStringFieldUpdateOperationsInput | string | null
    ISRC?: NullableStringFieldUpdateOperationsInput | string | null
    trackNumber?: IntFieldUpdateOperationsInput | number
    audioLink?: StringFieldUpdateOperationsInput | string
  }

  export type DSPCreateInput = {
    id?: string
    name: string
    streams?: StreamsCreateNestedManyWithoutDspInput
  }

  export type DSPUncheckedCreateInput = {
    id?: string
    name: string
    streams?: StreamsUncheckedCreateNestedManyWithoutDspInput
  }

  export type DSPUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    streams?: StreamsUpdateManyWithoutDspNestedInput
  }

  export type DSPUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    streams?: StreamsUncheckedUpdateManyWithoutDspNestedInput
  }

  export type DSPCreateManyInput = {
    id?: string
    name: string
  }

  export type DSPUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DSPUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type StreamsCreateInput = {
    id?: string
    total: number
    date: Date | string
    dsp: DSPCreateNestedOneWithoutStreamsInput
    Audio: AudioCreateNestedOneWithoutStreamsInput
  }

  export type StreamsUncheckedCreateInput = {
    id?: string
    dspId: string
    total: number
    date: Date | string
    audioId: string
  }

  export type StreamsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    dsp?: DSPUpdateOneRequiredWithoutStreamsNestedInput
    Audio?: AudioUpdateOneRequiredWithoutStreamsNestedInput
  }

  export type StreamsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dspId?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    audioId?: StringFieldUpdateOperationsInput | string
  }

  export type StreamsCreateManyInput = {
    id?: string
    dspId: string
    total: number
    date: Date | string
    audioId: string
  }

  export type StreamsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StreamsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    dspId?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    audioId?: StringFieldUpdateOperationsInput | string
  }

  export type CountryCreateInput = {
    id?: string
    name: string
    isoCode: string
    streamsByCountry?: StreamByCountryCreateNestedManyWithoutCountryInput
  }

  export type CountryUncheckedCreateInput = {
    id?: string
    name: string
    isoCode: string
    streamsByCountry?: StreamByCountryUncheckedCreateNestedManyWithoutCountryInput
  }

  export type CountryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isoCode?: StringFieldUpdateOperationsInput | string
    streamsByCountry?: StreamByCountryUpdateManyWithoutCountryNestedInput
  }

  export type CountryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isoCode?: StringFieldUpdateOperationsInput | string
    streamsByCountry?: StreamByCountryUncheckedUpdateManyWithoutCountryNestedInput
  }

  export type CountryCreateManyInput = {
    id?: string
    name: string
    isoCode: string
  }

  export type CountryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isoCode?: StringFieldUpdateOperationsInput | string
  }

  export type CountryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isoCode?: StringFieldUpdateOperationsInput | string
  }

  export type StreamByCountryCreateInput = {
    id?: string
    total: number
    date: Date | string
    country: CountryCreateNestedOneWithoutStreamsByCountryInput
    audio: AudioCreateNestedOneWithoutStreamByCountryInput
  }

  export type StreamByCountryUncheckedCreateInput = {
    id?: string
    countryId: string
    total: number
    date: Date | string
    audioId: string
  }

  export type StreamByCountryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: CountryUpdateOneRequiredWithoutStreamsByCountryNestedInput
    audio?: AudioUpdateOneRequiredWithoutStreamByCountryNestedInput
  }

  export type StreamByCountryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    countryId?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    audioId?: StringFieldUpdateOperationsInput | string
  }

  export type StreamByCountryCreateManyInput = {
    id?: string
    countryId: string
    total: number
    date: Date | string
    audioId: string
  }

  export type StreamByCountryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StreamByCountryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    countryId?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    audioId?: StringFieldUpdateOperationsInput | string
  }

  export type StoreCreateInput = {
    id?: string
    name: string
    trackDownloads: number
    streams: number
    totalSales: number
    earnings: number
    audio: AudioCreateNestedOneWithoutStoreInput
  }

  export type StoreUncheckedCreateInput = {
    id?: string
    name: string
    trackDownloads: number
    streams: number
    totalSales: number
    earnings: number
    audioId: string
  }

  export type StoreUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    trackDownloads?: IntFieldUpdateOperationsInput | number
    streams?: IntFieldUpdateOperationsInput | number
    totalSales?: IntFieldUpdateOperationsInput | number
    earnings?: FloatFieldUpdateOperationsInput | number
    audio?: AudioUpdateOneRequiredWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    trackDownloads?: IntFieldUpdateOperationsInput | number
    streams?: IntFieldUpdateOperationsInput | number
    totalSales?: IntFieldUpdateOperationsInput | number
    earnings?: FloatFieldUpdateOperationsInput | number
    audioId?: StringFieldUpdateOperationsInput | string
  }

  export type StoreCreateManyInput = {
    id?: string
    name: string
    trackDownloads: number
    streams: number
    totalSales: number
    earnings: number
    audioId: string
  }

  export type StoreUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    trackDownloads?: IntFieldUpdateOperationsInput | number
    streams?: IntFieldUpdateOperationsInput | number
    totalSales?: IntFieldUpdateOperationsInput | number
    earnings?: FloatFieldUpdateOperationsInput | number
  }

  export type StoreUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    trackDownloads?: IntFieldUpdateOperationsInput | number
    streams?: IntFieldUpdateOperationsInput | number
    totalSales?: IntFieldUpdateOperationsInput | number
    earnings?: FloatFieldUpdateOperationsInput | number
    audioId?: StringFieldUpdateOperationsInput | string
  }

  export type CountryEarningsCreateInput = {
    id?: string
    name: string
    trackDownloads: number
    streams: number
    totalSales: number
    earnings: number
    audio: AudioCreateNestedOneWithoutCountryEarningsInput
  }

  export type CountryEarningsUncheckedCreateInput = {
    id?: string
    name: string
    trackDownloads: number
    streams: number
    totalSales: number
    earnings: number
    audioId: string
  }

  export type CountryEarningsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    trackDownloads?: IntFieldUpdateOperationsInput | number
    streams?: IntFieldUpdateOperationsInput | number
    totalSales?: IntFieldUpdateOperationsInput | number
    earnings?: FloatFieldUpdateOperationsInput | number
    audio?: AudioUpdateOneRequiredWithoutCountryEarningsNestedInput
  }

  export type CountryEarningsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    trackDownloads?: IntFieldUpdateOperationsInput | number
    streams?: IntFieldUpdateOperationsInput | number
    totalSales?: IntFieldUpdateOperationsInput | number
    earnings?: FloatFieldUpdateOperationsInput | number
    audioId?: StringFieldUpdateOperationsInput | string
  }

  export type CountryEarningsCreateManyInput = {
    id?: string
    name: string
    trackDownloads: number
    streams: number
    totalSales: number
    earnings: number
    audioId: string
  }

  export type CountryEarningsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    trackDownloads?: IntFieldUpdateOperationsInput | number
    streams?: IntFieldUpdateOperationsInput | number
    totalSales?: IntFieldUpdateOperationsInput | number
    earnings?: FloatFieldUpdateOperationsInput | number
  }

  export type CountryEarningsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    trackDownloads?: IntFieldUpdateOperationsInput | number
    streams?: IntFieldUpdateOperationsInput | number
    totalSales?: IntFieldUpdateOperationsInput | number
    earnings?: FloatFieldUpdateOperationsInput | number
    audioId?: StringFieldUpdateOperationsInput | string
  }

  export type MonthlyReportCreateInput = {
    id?: string
    month: number
    year: number
    trackDownloads: number
    streams: number
    totalSales: number
    earnings: number
    date: string
    audio: AudioCreateNestedOneWithoutMonthlyReportInput
  }

  export type MonthlyReportUncheckedCreateInput = {
    id?: string
    month: number
    year: number
    trackDownloads: number
    streams: number
    totalSales: number
    earnings: number
    date: string
    audioId: string
  }

  export type MonthlyReportUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    trackDownloads?: IntFieldUpdateOperationsInput | number
    streams?: IntFieldUpdateOperationsInput | number
    totalSales?: IntFieldUpdateOperationsInput | number
    earnings?: FloatFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    audio?: AudioUpdateOneRequiredWithoutMonthlyReportNestedInput
  }

  export type MonthlyReportUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    trackDownloads?: IntFieldUpdateOperationsInput | number
    streams?: IntFieldUpdateOperationsInput | number
    totalSales?: IntFieldUpdateOperationsInput | number
    earnings?: FloatFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    audioId?: StringFieldUpdateOperationsInput | string
  }

  export type MonthlyReportCreateManyInput = {
    id?: string
    month: number
    year: number
    trackDownloads: number
    streams: number
    totalSales: number
    earnings: number
    date: string
    audioId: string
  }

  export type MonthlyReportUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    trackDownloads?: IntFieldUpdateOperationsInput | number
    streams?: IntFieldUpdateOperationsInput | number
    totalSales?: IntFieldUpdateOperationsInput | number
    earnings?: FloatFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
  }

  export type MonthlyReportUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    trackDownloads?: IntFieldUpdateOperationsInput | number
    streams?: IntFieldUpdateOperationsInput | number
    totalSales?: IntFieldUpdateOperationsInput | number
    earnings?: FloatFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    audioId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type TrackListRelationFilter = {
    every?: TrackWhereInput
    some?: TrackWhereInput
    none?: TrackWhereInput
  }

  export type StreamsListRelationFilter = {
    every?: StreamsWhereInput
    some?: StreamsWhereInput
    none?: StreamsWhereInput
  }

  export type StreamByCountryListRelationFilter = {
    every?: StreamByCountryWhereInput
    some?: StreamByCountryWhereInput
    none?: StreamByCountryWhereInput
  }

  export type StoreListRelationFilter = {
    every?: StoreWhereInput
    some?: StoreWhereInput
    none?: StoreWhereInput
  }

  export type MonthlyReportListRelationFilter = {
    every?: MonthlyReportWhereInput
    some?: MonthlyReportWhereInput
    none?: MonthlyReportWhereInput
  }

  export type CountryEarningsListRelationFilter = {
    every?: CountryEarningsWhereInput
    some?: CountryEarningsWhereInput
    none?: CountryEarningsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TrackOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StreamsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StreamByCountryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StoreOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MonthlyReportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CountryEarningsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AudioCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    artist?: SortOrder
    releaseDate?: SortOrder
    primaryGenre?: SortOrder
    secondaryGenre?: SortOrder
    language?: SortOrder
    label?: SortOrder
    copyrightHolder?: SortOrder
    copyrightYear?: SortOrder
    productionHolder?: SortOrder
    productionYear?: SortOrder
    releaseCover?: SortOrder
    releaseAudio?: SortOrder
    releaseAudioLink?: SortOrder
    lyrics?: SortOrder
    releaseType?: SortOrder
    status?: SortOrder
    UPC?: SortOrder
    ISRC?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    smartLink?: SortOrder
  }

  export type AudioMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    artist?: SortOrder
    releaseDate?: SortOrder
    primaryGenre?: SortOrder
    secondaryGenre?: SortOrder
    language?: SortOrder
    label?: SortOrder
    copyrightHolder?: SortOrder
    copyrightYear?: SortOrder
    productionHolder?: SortOrder
    productionYear?: SortOrder
    releaseCover?: SortOrder
    releaseAudio?: SortOrder
    releaseAudioLink?: SortOrder
    lyrics?: SortOrder
    releaseType?: SortOrder
    status?: SortOrder
    UPC?: SortOrder
    ISRC?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    smartLink?: SortOrder
  }

  export type AudioMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    artist?: SortOrder
    releaseDate?: SortOrder
    primaryGenre?: SortOrder
    secondaryGenre?: SortOrder
    language?: SortOrder
    label?: SortOrder
    copyrightHolder?: SortOrder
    copyrightYear?: SortOrder
    productionHolder?: SortOrder
    productionYear?: SortOrder
    releaseCover?: SortOrder
    releaseAudio?: SortOrder
    releaseAudioLink?: SortOrder
    lyrics?: SortOrder
    releaseType?: SortOrder
    status?: SortOrder
    UPC?: SortOrder
    ISRC?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    smartLink?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type AudioRelationFilter = {
    is?: AudioWhereInput
    isNot?: AudioWhereInput
  }

  export type TrackCountOrderByAggregateInput = {
    id?: SortOrder
    audioId?: SortOrder
    title?: SortOrder
    lyrics?: SortOrder
    productionCredit?: SortOrder
    ISRC?: SortOrder
    trackNumber?: SortOrder
    audioLink?: SortOrder
  }

  export type TrackAvgOrderByAggregateInput = {
    trackNumber?: SortOrder
  }

  export type TrackMaxOrderByAggregateInput = {
    id?: SortOrder
    audioId?: SortOrder
    title?: SortOrder
    lyrics?: SortOrder
    productionCredit?: SortOrder
    ISRC?: SortOrder
    trackNumber?: SortOrder
    audioLink?: SortOrder
  }

  export type TrackMinOrderByAggregateInput = {
    id?: SortOrder
    audioId?: SortOrder
    title?: SortOrder
    lyrics?: SortOrder
    productionCredit?: SortOrder
    ISRC?: SortOrder
    trackNumber?: SortOrder
    audioLink?: SortOrder
  }

  export type TrackSumOrderByAggregateInput = {
    trackNumber?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DSPCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type DSPMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type DSPMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type DSPRelationFilter = {
    is?: DSPWhereInput
    isNot?: DSPWhereInput
  }

  export type StreamsDspIdDateAudioIdCompoundUniqueInput = {
    dspId: string
    date: Date | string
    audioId: string
  }

  export type StreamsCountOrderByAggregateInput = {
    id?: SortOrder
    dspId?: SortOrder
    total?: SortOrder
    date?: SortOrder
    audioId?: SortOrder
  }

  export type StreamsAvgOrderByAggregateInput = {
    total?: SortOrder
  }

  export type StreamsMaxOrderByAggregateInput = {
    id?: SortOrder
    dspId?: SortOrder
    total?: SortOrder
    date?: SortOrder
    audioId?: SortOrder
  }

  export type StreamsMinOrderByAggregateInput = {
    id?: SortOrder
    dspId?: SortOrder
    total?: SortOrder
    date?: SortOrder
    audioId?: SortOrder
  }

  export type StreamsSumOrderByAggregateInput = {
    total?: SortOrder
  }

  export type CountryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isoCode?: SortOrder
  }

  export type CountryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isoCode?: SortOrder
  }

  export type CountryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isoCode?: SortOrder
  }

  export type CountryRelationFilter = {
    is?: CountryWhereInput
    isNot?: CountryWhereInput
  }

  export type StreamByCountryCountOrderByAggregateInput = {
    id?: SortOrder
    countryId?: SortOrder
    total?: SortOrder
    date?: SortOrder
    audioId?: SortOrder
  }

  export type StreamByCountryAvgOrderByAggregateInput = {
    total?: SortOrder
  }

  export type StreamByCountryMaxOrderByAggregateInput = {
    id?: SortOrder
    countryId?: SortOrder
    total?: SortOrder
    date?: SortOrder
    audioId?: SortOrder
  }

  export type StreamByCountryMinOrderByAggregateInput = {
    id?: SortOrder
    countryId?: SortOrder
    total?: SortOrder
    date?: SortOrder
    audioId?: SortOrder
  }

  export type StreamByCountrySumOrderByAggregateInput = {
    total?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type StoreCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    trackDownloads?: SortOrder
    streams?: SortOrder
    totalSales?: SortOrder
    earnings?: SortOrder
    audioId?: SortOrder
  }

  export type StoreAvgOrderByAggregateInput = {
    trackDownloads?: SortOrder
    streams?: SortOrder
    totalSales?: SortOrder
    earnings?: SortOrder
  }

  export type StoreMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    trackDownloads?: SortOrder
    streams?: SortOrder
    totalSales?: SortOrder
    earnings?: SortOrder
    audioId?: SortOrder
  }

  export type StoreMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    trackDownloads?: SortOrder
    streams?: SortOrder
    totalSales?: SortOrder
    earnings?: SortOrder
    audioId?: SortOrder
  }

  export type StoreSumOrderByAggregateInput = {
    trackDownloads?: SortOrder
    streams?: SortOrder
    totalSales?: SortOrder
    earnings?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type CountryEarningsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    trackDownloads?: SortOrder
    streams?: SortOrder
    totalSales?: SortOrder
    earnings?: SortOrder
    audioId?: SortOrder
  }

  export type CountryEarningsAvgOrderByAggregateInput = {
    trackDownloads?: SortOrder
    streams?: SortOrder
    totalSales?: SortOrder
    earnings?: SortOrder
  }

  export type CountryEarningsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    trackDownloads?: SortOrder
    streams?: SortOrder
    totalSales?: SortOrder
    earnings?: SortOrder
    audioId?: SortOrder
  }

  export type CountryEarningsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    trackDownloads?: SortOrder
    streams?: SortOrder
    totalSales?: SortOrder
    earnings?: SortOrder
    audioId?: SortOrder
  }

  export type CountryEarningsSumOrderByAggregateInput = {
    trackDownloads?: SortOrder
    streams?: SortOrder
    totalSales?: SortOrder
    earnings?: SortOrder
  }

  export type MonthlyReportCountOrderByAggregateInput = {
    id?: SortOrder
    month?: SortOrder
    year?: SortOrder
    trackDownloads?: SortOrder
    streams?: SortOrder
    totalSales?: SortOrder
    earnings?: SortOrder
    date?: SortOrder
    audioId?: SortOrder
  }

  export type MonthlyReportAvgOrderByAggregateInput = {
    month?: SortOrder
    year?: SortOrder
    trackDownloads?: SortOrder
    streams?: SortOrder
    totalSales?: SortOrder
    earnings?: SortOrder
  }

  export type MonthlyReportMaxOrderByAggregateInput = {
    id?: SortOrder
    month?: SortOrder
    year?: SortOrder
    trackDownloads?: SortOrder
    streams?: SortOrder
    totalSales?: SortOrder
    earnings?: SortOrder
    date?: SortOrder
    audioId?: SortOrder
  }

  export type MonthlyReportMinOrderByAggregateInput = {
    id?: SortOrder
    month?: SortOrder
    year?: SortOrder
    trackDownloads?: SortOrder
    streams?: SortOrder
    totalSales?: SortOrder
    earnings?: SortOrder
    date?: SortOrder
    audioId?: SortOrder
  }

  export type MonthlyReportSumOrderByAggregateInput = {
    month?: SortOrder
    year?: SortOrder
    trackDownloads?: SortOrder
    streams?: SortOrder
    totalSales?: SortOrder
    earnings?: SortOrder
  }

  export type TrackCreateNestedManyWithoutAudioInput = {
    create?: XOR<TrackCreateWithoutAudioInput, TrackUncheckedCreateWithoutAudioInput> | TrackCreateWithoutAudioInput[] | TrackUncheckedCreateWithoutAudioInput[]
    connectOrCreate?: TrackCreateOrConnectWithoutAudioInput | TrackCreateOrConnectWithoutAudioInput[]
    createMany?: TrackCreateManyAudioInputEnvelope
    connect?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
  }

  export type StreamsCreateNestedManyWithoutAudioInput = {
    create?: XOR<StreamsCreateWithoutAudioInput, StreamsUncheckedCreateWithoutAudioInput> | StreamsCreateWithoutAudioInput[] | StreamsUncheckedCreateWithoutAudioInput[]
    connectOrCreate?: StreamsCreateOrConnectWithoutAudioInput | StreamsCreateOrConnectWithoutAudioInput[]
    createMany?: StreamsCreateManyAudioInputEnvelope
    connect?: StreamsWhereUniqueInput | StreamsWhereUniqueInput[]
  }

  export type StreamByCountryCreateNestedManyWithoutAudioInput = {
    create?: XOR<StreamByCountryCreateWithoutAudioInput, StreamByCountryUncheckedCreateWithoutAudioInput> | StreamByCountryCreateWithoutAudioInput[] | StreamByCountryUncheckedCreateWithoutAudioInput[]
    connectOrCreate?: StreamByCountryCreateOrConnectWithoutAudioInput | StreamByCountryCreateOrConnectWithoutAudioInput[]
    createMany?: StreamByCountryCreateManyAudioInputEnvelope
    connect?: StreamByCountryWhereUniqueInput | StreamByCountryWhereUniqueInput[]
  }

  export type StoreCreateNestedManyWithoutAudioInput = {
    create?: XOR<StoreCreateWithoutAudioInput, StoreUncheckedCreateWithoutAudioInput> | StoreCreateWithoutAudioInput[] | StoreUncheckedCreateWithoutAudioInput[]
    connectOrCreate?: StoreCreateOrConnectWithoutAudioInput | StoreCreateOrConnectWithoutAudioInput[]
    createMany?: StoreCreateManyAudioInputEnvelope
    connect?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
  }

  export type MonthlyReportCreateNestedManyWithoutAudioInput = {
    create?: XOR<MonthlyReportCreateWithoutAudioInput, MonthlyReportUncheckedCreateWithoutAudioInput> | MonthlyReportCreateWithoutAudioInput[] | MonthlyReportUncheckedCreateWithoutAudioInput[]
    connectOrCreate?: MonthlyReportCreateOrConnectWithoutAudioInput | MonthlyReportCreateOrConnectWithoutAudioInput[]
    createMany?: MonthlyReportCreateManyAudioInputEnvelope
    connect?: MonthlyReportWhereUniqueInput | MonthlyReportWhereUniqueInput[]
  }

  export type CountryEarningsCreateNestedManyWithoutAudioInput = {
    create?: XOR<CountryEarningsCreateWithoutAudioInput, CountryEarningsUncheckedCreateWithoutAudioInput> | CountryEarningsCreateWithoutAudioInput[] | CountryEarningsUncheckedCreateWithoutAudioInput[]
    connectOrCreate?: CountryEarningsCreateOrConnectWithoutAudioInput | CountryEarningsCreateOrConnectWithoutAudioInput[]
    createMany?: CountryEarningsCreateManyAudioInputEnvelope
    connect?: CountryEarningsWhereUniqueInput | CountryEarningsWhereUniqueInput[]
  }

  export type TrackUncheckedCreateNestedManyWithoutAudioInput = {
    create?: XOR<TrackCreateWithoutAudioInput, TrackUncheckedCreateWithoutAudioInput> | TrackCreateWithoutAudioInput[] | TrackUncheckedCreateWithoutAudioInput[]
    connectOrCreate?: TrackCreateOrConnectWithoutAudioInput | TrackCreateOrConnectWithoutAudioInput[]
    createMany?: TrackCreateManyAudioInputEnvelope
    connect?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
  }

  export type StreamsUncheckedCreateNestedManyWithoutAudioInput = {
    create?: XOR<StreamsCreateWithoutAudioInput, StreamsUncheckedCreateWithoutAudioInput> | StreamsCreateWithoutAudioInput[] | StreamsUncheckedCreateWithoutAudioInput[]
    connectOrCreate?: StreamsCreateOrConnectWithoutAudioInput | StreamsCreateOrConnectWithoutAudioInput[]
    createMany?: StreamsCreateManyAudioInputEnvelope
    connect?: StreamsWhereUniqueInput | StreamsWhereUniqueInput[]
  }

  export type StreamByCountryUncheckedCreateNestedManyWithoutAudioInput = {
    create?: XOR<StreamByCountryCreateWithoutAudioInput, StreamByCountryUncheckedCreateWithoutAudioInput> | StreamByCountryCreateWithoutAudioInput[] | StreamByCountryUncheckedCreateWithoutAudioInput[]
    connectOrCreate?: StreamByCountryCreateOrConnectWithoutAudioInput | StreamByCountryCreateOrConnectWithoutAudioInput[]
    createMany?: StreamByCountryCreateManyAudioInputEnvelope
    connect?: StreamByCountryWhereUniqueInput | StreamByCountryWhereUniqueInput[]
  }

  export type StoreUncheckedCreateNestedManyWithoutAudioInput = {
    create?: XOR<StoreCreateWithoutAudioInput, StoreUncheckedCreateWithoutAudioInput> | StoreCreateWithoutAudioInput[] | StoreUncheckedCreateWithoutAudioInput[]
    connectOrCreate?: StoreCreateOrConnectWithoutAudioInput | StoreCreateOrConnectWithoutAudioInput[]
    createMany?: StoreCreateManyAudioInputEnvelope
    connect?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
  }

  export type MonthlyReportUncheckedCreateNestedManyWithoutAudioInput = {
    create?: XOR<MonthlyReportCreateWithoutAudioInput, MonthlyReportUncheckedCreateWithoutAudioInput> | MonthlyReportCreateWithoutAudioInput[] | MonthlyReportUncheckedCreateWithoutAudioInput[]
    connectOrCreate?: MonthlyReportCreateOrConnectWithoutAudioInput | MonthlyReportCreateOrConnectWithoutAudioInput[]
    createMany?: MonthlyReportCreateManyAudioInputEnvelope
    connect?: MonthlyReportWhereUniqueInput | MonthlyReportWhereUniqueInput[]
  }

  export type CountryEarningsUncheckedCreateNestedManyWithoutAudioInput = {
    create?: XOR<CountryEarningsCreateWithoutAudioInput, CountryEarningsUncheckedCreateWithoutAudioInput> | CountryEarningsCreateWithoutAudioInput[] | CountryEarningsUncheckedCreateWithoutAudioInput[]
    connectOrCreate?: CountryEarningsCreateOrConnectWithoutAudioInput | CountryEarningsCreateOrConnectWithoutAudioInput[]
    createMany?: CountryEarningsCreateManyAudioInputEnvelope
    connect?: CountryEarningsWhereUniqueInput | CountryEarningsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type TrackUpdateManyWithoutAudioNestedInput = {
    create?: XOR<TrackCreateWithoutAudioInput, TrackUncheckedCreateWithoutAudioInput> | TrackCreateWithoutAudioInput[] | TrackUncheckedCreateWithoutAudioInput[]
    connectOrCreate?: TrackCreateOrConnectWithoutAudioInput | TrackCreateOrConnectWithoutAudioInput[]
    upsert?: TrackUpsertWithWhereUniqueWithoutAudioInput | TrackUpsertWithWhereUniqueWithoutAudioInput[]
    createMany?: TrackCreateManyAudioInputEnvelope
    set?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    disconnect?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    delete?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    connect?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    update?: TrackUpdateWithWhereUniqueWithoutAudioInput | TrackUpdateWithWhereUniqueWithoutAudioInput[]
    updateMany?: TrackUpdateManyWithWhereWithoutAudioInput | TrackUpdateManyWithWhereWithoutAudioInput[]
    deleteMany?: TrackScalarWhereInput | TrackScalarWhereInput[]
  }

  export type StreamsUpdateManyWithoutAudioNestedInput = {
    create?: XOR<StreamsCreateWithoutAudioInput, StreamsUncheckedCreateWithoutAudioInput> | StreamsCreateWithoutAudioInput[] | StreamsUncheckedCreateWithoutAudioInput[]
    connectOrCreate?: StreamsCreateOrConnectWithoutAudioInput | StreamsCreateOrConnectWithoutAudioInput[]
    upsert?: StreamsUpsertWithWhereUniqueWithoutAudioInput | StreamsUpsertWithWhereUniqueWithoutAudioInput[]
    createMany?: StreamsCreateManyAudioInputEnvelope
    set?: StreamsWhereUniqueInput | StreamsWhereUniqueInput[]
    disconnect?: StreamsWhereUniqueInput | StreamsWhereUniqueInput[]
    delete?: StreamsWhereUniqueInput | StreamsWhereUniqueInput[]
    connect?: StreamsWhereUniqueInput | StreamsWhereUniqueInput[]
    update?: StreamsUpdateWithWhereUniqueWithoutAudioInput | StreamsUpdateWithWhereUniqueWithoutAudioInput[]
    updateMany?: StreamsUpdateManyWithWhereWithoutAudioInput | StreamsUpdateManyWithWhereWithoutAudioInput[]
    deleteMany?: StreamsScalarWhereInput | StreamsScalarWhereInput[]
  }

  export type StreamByCountryUpdateManyWithoutAudioNestedInput = {
    create?: XOR<StreamByCountryCreateWithoutAudioInput, StreamByCountryUncheckedCreateWithoutAudioInput> | StreamByCountryCreateWithoutAudioInput[] | StreamByCountryUncheckedCreateWithoutAudioInput[]
    connectOrCreate?: StreamByCountryCreateOrConnectWithoutAudioInput | StreamByCountryCreateOrConnectWithoutAudioInput[]
    upsert?: StreamByCountryUpsertWithWhereUniqueWithoutAudioInput | StreamByCountryUpsertWithWhereUniqueWithoutAudioInput[]
    createMany?: StreamByCountryCreateManyAudioInputEnvelope
    set?: StreamByCountryWhereUniqueInput | StreamByCountryWhereUniqueInput[]
    disconnect?: StreamByCountryWhereUniqueInput | StreamByCountryWhereUniqueInput[]
    delete?: StreamByCountryWhereUniqueInput | StreamByCountryWhereUniqueInput[]
    connect?: StreamByCountryWhereUniqueInput | StreamByCountryWhereUniqueInput[]
    update?: StreamByCountryUpdateWithWhereUniqueWithoutAudioInput | StreamByCountryUpdateWithWhereUniqueWithoutAudioInput[]
    updateMany?: StreamByCountryUpdateManyWithWhereWithoutAudioInput | StreamByCountryUpdateManyWithWhereWithoutAudioInput[]
    deleteMany?: StreamByCountryScalarWhereInput | StreamByCountryScalarWhereInput[]
  }

  export type StoreUpdateManyWithoutAudioNestedInput = {
    create?: XOR<StoreCreateWithoutAudioInput, StoreUncheckedCreateWithoutAudioInput> | StoreCreateWithoutAudioInput[] | StoreUncheckedCreateWithoutAudioInput[]
    connectOrCreate?: StoreCreateOrConnectWithoutAudioInput | StoreCreateOrConnectWithoutAudioInput[]
    upsert?: StoreUpsertWithWhereUniqueWithoutAudioInput | StoreUpsertWithWhereUniqueWithoutAudioInput[]
    createMany?: StoreCreateManyAudioInputEnvelope
    set?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    disconnect?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    delete?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    connect?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    update?: StoreUpdateWithWhereUniqueWithoutAudioInput | StoreUpdateWithWhereUniqueWithoutAudioInput[]
    updateMany?: StoreUpdateManyWithWhereWithoutAudioInput | StoreUpdateManyWithWhereWithoutAudioInput[]
    deleteMany?: StoreScalarWhereInput | StoreScalarWhereInput[]
  }

  export type MonthlyReportUpdateManyWithoutAudioNestedInput = {
    create?: XOR<MonthlyReportCreateWithoutAudioInput, MonthlyReportUncheckedCreateWithoutAudioInput> | MonthlyReportCreateWithoutAudioInput[] | MonthlyReportUncheckedCreateWithoutAudioInput[]
    connectOrCreate?: MonthlyReportCreateOrConnectWithoutAudioInput | MonthlyReportCreateOrConnectWithoutAudioInput[]
    upsert?: MonthlyReportUpsertWithWhereUniqueWithoutAudioInput | MonthlyReportUpsertWithWhereUniqueWithoutAudioInput[]
    createMany?: MonthlyReportCreateManyAudioInputEnvelope
    set?: MonthlyReportWhereUniqueInput | MonthlyReportWhereUniqueInput[]
    disconnect?: MonthlyReportWhereUniqueInput | MonthlyReportWhereUniqueInput[]
    delete?: MonthlyReportWhereUniqueInput | MonthlyReportWhereUniqueInput[]
    connect?: MonthlyReportWhereUniqueInput | MonthlyReportWhereUniqueInput[]
    update?: MonthlyReportUpdateWithWhereUniqueWithoutAudioInput | MonthlyReportUpdateWithWhereUniqueWithoutAudioInput[]
    updateMany?: MonthlyReportUpdateManyWithWhereWithoutAudioInput | MonthlyReportUpdateManyWithWhereWithoutAudioInput[]
    deleteMany?: MonthlyReportScalarWhereInput | MonthlyReportScalarWhereInput[]
  }

  export type CountryEarningsUpdateManyWithoutAudioNestedInput = {
    create?: XOR<CountryEarningsCreateWithoutAudioInput, CountryEarningsUncheckedCreateWithoutAudioInput> | CountryEarningsCreateWithoutAudioInput[] | CountryEarningsUncheckedCreateWithoutAudioInput[]
    connectOrCreate?: CountryEarningsCreateOrConnectWithoutAudioInput | CountryEarningsCreateOrConnectWithoutAudioInput[]
    upsert?: CountryEarningsUpsertWithWhereUniqueWithoutAudioInput | CountryEarningsUpsertWithWhereUniqueWithoutAudioInput[]
    createMany?: CountryEarningsCreateManyAudioInputEnvelope
    set?: CountryEarningsWhereUniqueInput | CountryEarningsWhereUniqueInput[]
    disconnect?: CountryEarningsWhereUniqueInput | CountryEarningsWhereUniqueInput[]
    delete?: CountryEarningsWhereUniqueInput | CountryEarningsWhereUniqueInput[]
    connect?: CountryEarningsWhereUniqueInput | CountryEarningsWhereUniqueInput[]
    update?: CountryEarningsUpdateWithWhereUniqueWithoutAudioInput | CountryEarningsUpdateWithWhereUniqueWithoutAudioInput[]
    updateMany?: CountryEarningsUpdateManyWithWhereWithoutAudioInput | CountryEarningsUpdateManyWithWhereWithoutAudioInput[]
    deleteMany?: CountryEarningsScalarWhereInput | CountryEarningsScalarWhereInput[]
  }

  export type TrackUncheckedUpdateManyWithoutAudioNestedInput = {
    create?: XOR<TrackCreateWithoutAudioInput, TrackUncheckedCreateWithoutAudioInput> | TrackCreateWithoutAudioInput[] | TrackUncheckedCreateWithoutAudioInput[]
    connectOrCreate?: TrackCreateOrConnectWithoutAudioInput | TrackCreateOrConnectWithoutAudioInput[]
    upsert?: TrackUpsertWithWhereUniqueWithoutAudioInput | TrackUpsertWithWhereUniqueWithoutAudioInput[]
    createMany?: TrackCreateManyAudioInputEnvelope
    set?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    disconnect?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    delete?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    connect?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    update?: TrackUpdateWithWhereUniqueWithoutAudioInput | TrackUpdateWithWhereUniqueWithoutAudioInput[]
    updateMany?: TrackUpdateManyWithWhereWithoutAudioInput | TrackUpdateManyWithWhereWithoutAudioInput[]
    deleteMany?: TrackScalarWhereInput | TrackScalarWhereInput[]
  }

  export type StreamsUncheckedUpdateManyWithoutAudioNestedInput = {
    create?: XOR<StreamsCreateWithoutAudioInput, StreamsUncheckedCreateWithoutAudioInput> | StreamsCreateWithoutAudioInput[] | StreamsUncheckedCreateWithoutAudioInput[]
    connectOrCreate?: StreamsCreateOrConnectWithoutAudioInput | StreamsCreateOrConnectWithoutAudioInput[]
    upsert?: StreamsUpsertWithWhereUniqueWithoutAudioInput | StreamsUpsertWithWhereUniqueWithoutAudioInput[]
    createMany?: StreamsCreateManyAudioInputEnvelope
    set?: StreamsWhereUniqueInput | StreamsWhereUniqueInput[]
    disconnect?: StreamsWhereUniqueInput | StreamsWhereUniqueInput[]
    delete?: StreamsWhereUniqueInput | StreamsWhereUniqueInput[]
    connect?: StreamsWhereUniqueInput | StreamsWhereUniqueInput[]
    update?: StreamsUpdateWithWhereUniqueWithoutAudioInput | StreamsUpdateWithWhereUniqueWithoutAudioInput[]
    updateMany?: StreamsUpdateManyWithWhereWithoutAudioInput | StreamsUpdateManyWithWhereWithoutAudioInput[]
    deleteMany?: StreamsScalarWhereInput | StreamsScalarWhereInput[]
  }

  export type StreamByCountryUncheckedUpdateManyWithoutAudioNestedInput = {
    create?: XOR<StreamByCountryCreateWithoutAudioInput, StreamByCountryUncheckedCreateWithoutAudioInput> | StreamByCountryCreateWithoutAudioInput[] | StreamByCountryUncheckedCreateWithoutAudioInput[]
    connectOrCreate?: StreamByCountryCreateOrConnectWithoutAudioInput | StreamByCountryCreateOrConnectWithoutAudioInput[]
    upsert?: StreamByCountryUpsertWithWhereUniqueWithoutAudioInput | StreamByCountryUpsertWithWhereUniqueWithoutAudioInput[]
    createMany?: StreamByCountryCreateManyAudioInputEnvelope
    set?: StreamByCountryWhereUniqueInput | StreamByCountryWhereUniqueInput[]
    disconnect?: StreamByCountryWhereUniqueInput | StreamByCountryWhereUniqueInput[]
    delete?: StreamByCountryWhereUniqueInput | StreamByCountryWhereUniqueInput[]
    connect?: StreamByCountryWhereUniqueInput | StreamByCountryWhereUniqueInput[]
    update?: StreamByCountryUpdateWithWhereUniqueWithoutAudioInput | StreamByCountryUpdateWithWhereUniqueWithoutAudioInput[]
    updateMany?: StreamByCountryUpdateManyWithWhereWithoutAudioInput | StreamByCountryUpdateManyWithWhereWithoutAudioInput[]
    deleteMany?: StreamByCountryScalarWhereInput | StreamByCountryScalarWhereInput[]
  }

  export type StoreUncheckedUpdateManyWithoutAudioNestedInput = {
    create?: XOR<StoreCreateWithoutAudioInput, StoreUncheckedCreateWithoutAudioInput> | StoreCreateWithoutAudioInput[] | StoreUncheckedCreateWithoutAudioInput[]
    connectOrCreate?: StoreCreateOrConnectWithoutAudioInput | StoreCreateOrConnectWithoutAudioInput[]
    upsert?: StoreUpsertWithWhereUniqueWithoutAudioInput | StoreUpsertWithWhereUniqueWithoutAudioInput[]
    createMany?: StoreCreateManyAudioInputEnvelope
    set?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    disconnect?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    delete?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    connect?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    update?: StoreUpdateWithWhereUniqueWithoutAudioInput | StoreUpdateWithWhereUniqueWithoutAudioInput[]
    updateMany?: StoreUpdateManyWithWhereWithoutAudioInput | StoreUpdateManyWithWhereWithoutAudioInput[]
    deleteMany?: StoreScalarWhereInput | StoreScalarWhereInput[]
  }

  export type MonthlyReportUncheckedUpdateManyWithoutAudioNestedInput = {
    create?: XOR<MonthlyReportCreateWithoutAudioInput, MonthlyReportUncheckedCreateWithoutAudioInput> | MonthlyReportCreateWithoutAudioInput[] | MonthlyReportUncheckedCreateWithoutAudioInput[]
    connectOrCreate?: MonthlyReportCreateOrConnectWithoutAudioInput | MonthlyReportCreateOrConnectWithoutAudioInput[]
    upsert?: MonthlyReportUpsertWithWhereUniqueWithoutAudioInput | MonthlyReportUpsertWithWhereUniqueWithoutAudioInput[]
    createMany?: MonthlyReportCreateManyAudioInputEnvelope
    set?: MonthlyReportWhereUniqueInput | MonthlyReportWhereUniqueInput[]
    disconnect?: MonthlyReportWhereUniqueInput | MonthlyReportWhereUniqueInput[]
    delete?: MonthlyReportWhereUniqueInput | MonthlyReportWhereUniqueInput[]
    connect?: MonthlyReportWhereUniqueInput | MonthlyReportWhereUniqueInput[]
    update?: MonthlyReportUpdateWithWhereUniqueWithoutAudioInput | MonthlyReportUpdateWithWhereUniqueWithoutAudioInput[]
    updateMany?: MonthlyReportUpdateManyWithWhereWithoutAudioInput | MonthlyReportUpdateManyWithWhereWithoutAudioInput[]
    deleteMany?: MonthlyReportScalarWhereInput | MonthlyReportScalarWhereInput[]
  }

  export type CountryEarningsUncheckedUpdateManyWithoutAudioNestedInput = {
    create?: XOR<CountryEarningsCreateWithoutAudioInput, CountryEarningsUncheckedCreateWithoutAudioInput> | CountryEarningsCreateWithoutAudioInput[] | CountryEarningsUncheckedCreateWithoutAudioInput[]
    connectOrCreate?: CountryEarningsCreateOrConnectWithoutAudioInput | CountryEarningsCreateOrConnectWithoutAudioInput[]
    upsert?: CountryEarningsUpsertWithWhereUniqueWithoutAudioInput | CountryEarningsUpsertWithWhereUniqueWithoutAudioInput[]
    createMany?: CountryEarningsCreateManyAudioInputEnvelope
    set?: CountryEarningsWhereUniqueInput | CountryEarningsWhereUniqueInput[]
    disconnect?: CountryEarningsWhereUniqueInput | CountryEarningsWhereUniqueInput[]
    delete?: CountryEarningsWhereUniqueInput | CountryEarningsWhereUniqueInput[]
    connect?: CountryEarningsWhereUniqueInput | CountryEarningsWhereUniqueInput[]
    update?: CountryEarningsUpdateWithWhereUniqueWithoutAudioInput | CountryEarningsUpdateWithWhereUniqueWithoutAudioInput[]
    updateMany?: CountryEarningsUpdateManyWithWhereWithoutAudioInput | CountryEarningsUpdateManyWithWhereWithoutAudioInput[]
    deleteMany?: CountryEarningsScalarWhereInput | CountryEarningsScalarWhereInput[]
  }

  export type AudioCreateNestedOneWithoutTrackInput = {
    create?: XOR<AudioCreateWithoutTrackInput, AudioUncheckedCreateWithoutTrackInput>
    connectOrCreate?: AudioCreateOrConnectWithoutTrackInput
    connect?: AudioWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AudioUpdateOneRequiredWithoutTrackNestedInput = {
    create?: XOR<AudioCreateWithoutTrackInput, AudioUncheckedCreateWithoutTrackInput>
    connectOrCreate?: AudioCreateOrConnectWithoutTrackInput
    upsert?: AudioUpsertWithoutTrackInput
    connect?: AudioWhereUniqueInput
    update?: XOR<XOR<AudioUpdateToOneWithWhereWithoutTrackInput, AudioUpdateWithoutTrackInput>, AudioUncheckedUpdateWithoutTrackInput>
  }

  export type StreamsCreateNestedManyWithoutDspInput = {
    create?: XOR<StreamsCreateWithoutDspInput, StreamsUncheckedCreateWithoutDspInput> | StreamsCreateWithoutDspInput[] | StreamsUncheckedCreateWithoutDspInput[]
    connectOrCreate?: StreamsCreateOrConnectWithoutDspInput | StreamsCreateOrConnectWithoutDspInput[]
    createMany?: StreamsCreateManyDspInputEnvelope
    connect?: StreamsWhereUniqueInput | StreamsWhereUniqueInput[]
  }

  export type StreamsUncheckedCreateNestedManyWithoutDspInput = {
    create?: XOR<StreamsCreateWithoutDspInput, StreamsUncheckedCreateWithoutDspInput> | StreamsCreateWithoutDspInput[] | StreamsUncheckedCreateWithoutDspInput[]
    connectOrCreate?: StreamsCreateOrConnectWithoutDspInput | StreamsCreateOrConnectWithoutDspInput[]
    createMany?: StreamsCreateManyDspInputEnvelope
    connect?: StreamsWhereUniqueInput | StreamsWhereUniqueInput[]
  }

  export type StreamsUpdateManyWithoutDspNestedInput = {
    create?: XOR<StreamsCreateWithoutDspInput, StreamsUncheckedCreateWithoutDspInput> | StreamsCreateWithoutDspInput[] | StreamsUncheckedCreateWithoutDspInput[]
    connectOrCreate?: StreamsCreateOrConnectWithoutDspInput | StreamsCreateOrConnectWithoutDspInput[]
    upsert?: StreamsUpsertWithWhereUniqueWithoutDspInput | StreamsUpsertWithWhereUniqueWithoutDspInput[]
    createMany?: StreamsCreateManyDspInputEnvelope
    set?: StreamsWhereUniqueInput | StreamsWhereUniqueInput[]
    disconnect?: StreamsWhereUniqueInput | StreamsWhereUniqueInput[]
    delete?: StreamsWhereUniqueInput | StreamsWhereUniqueInput[]
    connect?: StreamsWhereUniqueInput | StreamsWhereUniqueInput[]
    update?: StreamsUpdateWithWhereUniqueWithoutDspInput | StreamsUpdateWithWhereUniqueWithoutDspInput[]
    updateMany?: StreamsUpdateManyWithWhereWithoutDspInput | StreamsUpdateManyWithWhereWithoutDspInput[]
    deleteMany?: StreamsScalarWhereInput | StreamsScalarWhereInput[]
  }

  export type StreamsUncheckedUpdateManyWithoutDspNestedInput = {
    create?: XOR<StreamsCreateWithoutDspInput, StreamsUncheckedCreateWithoutDspInput> | StreamsCreateWithoutDspInput[] | StreamsUncheckedCreateWithoutDspInput[]
    connectOrCreate?: StreamsCreateOrConnectWithoutDspInput | StreamsCreateOrConnectWithoutDspInput[]
    upsert?: StreamsUpsertWithWhereUniqueWithoutDspInput | StreamsUpsertWithWhereUniqueWithoutDspInput[]
    createMany?: StreamsCreateManyDspInputEnvelope
    set?: StreamsWhereUniqueInput | StreamsWhereUniqueInput[]
    disconnect?: StreamsWhereUniqueInput | StreamsWhereUniqueInput[]
    delete?: StreamsWhereUniqueInput | StreamsWhereUniqueInput[]
    connect?: StreamsWhereUniqueInput | StreamsWhereUniqueInput[]
    update?: StreamsUpdateWithWhereUniqueWithoutDspInput | StreamsUpdateWithWhereUniqueWithoutDspInput[]
    updateMany?: StreamsUpdateManyWithWhereWithoutDspInput | StreamsUpdateManyWithWhereWithoutDspInput[]
    deleteMany?: StreamsScalarWhereInput | StreamsScalarWhereInput[]
  }

  export type DSPCreateNestedOneWithoutStreamsInput = {
    create?: XOR<DSPCreateWithoutStreamsInput, DSPUncheckedCreateWithoutStreamsInput>
    connectOrCreate?: DSPCreateOrConnectWithoutStreamsInput
    connect?: DSPWhereUniqueInput
  }

  export type AudioCreateNestedOneWithoutStreamsInput = {
    create?: XOR<AudioCreateWithoutStreamsInput, AudioUncheckedCreateWithoutStreamsInput>
    connectOrCreate?: AudioCreateOrConnectWithoutStreamsInput
    connect?: AudioWhereUniqueInput
  }

  export type DSPUpdateOneRequiredWithoutStreamsNestedInput = {
    create?: XOR<DSPCreateWithoutStreamsInput, DSPUncheckedCreateWithoutStreamsInput>
    connectOrCreate?: DSPCreateOrConnectWithoutStreamsInput
    upsert?: DSPUpsertWithoutStreamsInput
    connect?: DSPWhereUniqueInput
    update?: XOR<XOR<DSPUpdateToOneWithWhereWithoutStreamsInput, DSPUpdateWithoutStreamsInput>, DSPUncheckedUpdateWithoutStreamsInput>
  }

  export type AudioUpdateOneRequiredWithoutStreamsNestedInput = {
    create?: XOR<AudioCreateWithoutStreamsInput, AudioUncheckedCreateWithoutStreamsInput>
    connectOrCreate?: AudioCreateOrConnectWithoutStreamsInput
    upsert?: AudioUpsertWithoutStreamsInput
    connect?: AudioWhereUniqueInput
    update?: XOR<XOR<AudioUpdateToOneWithWhereWithoutStreamsInput, AudioUpdateWithoutStreamsInput>, AudioUncheckedUpdateWithoutStreamsInput>
  }

  export type StreamByCountryCreateNestedManyWithoutCountryInput = {
    create?: XOR<StreamByCountryCreateWithoutCountryInput, StreamByCountryUncheckedCreateWithoutCountryInput> | StreamByCountryCreateWithoutCountryInput[] | StreamByCountryUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: StreamByCountryCreateOrConnectWithoutCountryInput | StreamByCountryCreateOrConnectWithoutCountryInput[]
    createMany?: StreamByCountryCreateManyCountryInputEnvelope
    connect?: StreamByCountryWhereUniqueInput | StreamByCountryWhereUniqueInput[]
  }

  export type StreamByCountryUncheckedCreateNestedManyWithoutCountryInput = {
    create?: XOR<StreamByCountryCreateWithoutCountryInput, StreamByCountryUncheckedCreateWithoutCountryInput> | StreamByCountryCreateWithoutCountryInput[] | StreamByCountryUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: StreamByCountryCreateOrConnectWithoutCountryInput | StreamByCountryCreateOrConnectWithoutCountryInput[]
    createMany?: StreamByCountryCreateManyCountryInputEnvelope
    connect?: StreamByCountryWhereUniqueInput | StreamByCountryWhereUniqueInput[]
  }

  export type StreamByCountryUpdateManyWithoutCountryNestedInput = {
    create?: XOR<StreamByCountryCreateWithoutCountryInput, StreamByCountryUncheckedCreateWithoutCountryInput> | StreamByCountryCreateWithoutCountryInput[] | StreamByCountryUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: StreamByCountryCreateOrConnectWithoutCountryInput | StreamByCountryCreateOrConnectWithoutCountryInput[]
    upsert?: StreamByCountryUpsertWithWhereUniqueWithoutCountryInput | StreamByCountryUpsertWithWhereUniqueWithoutCountryInput[]
    createMany?: StreamByCountryCreateManyCountryInputEnvelope
    set?: StreamByCountryWhereUniqueInput | StreamByCountryWhereUniqueInput[]
    disconnect?: StreamByCountryWhereUniqueInput | StreamByCountryWhereUniqueInput[]
    delete?: StreamByCountryWhereUniqueInput | StreamByCountryWhereUniqueInput[]
    connect?: StreamByCountryWhereUniqueInput | StreamByCountryWhereUniqueInput[]
    update?: StreamByCountryUpdateWithWhereUniqueWithoutCountryInput | StreamByCountryUpdateWithWhereUniqueWithoutCountryInput[]
    updateMany?: StreamByCountryUpdateManyWithWhereWithoutCountryInput | StreamByCountryUpdateManyWithWhereWithoutCountryInput[]
    deleteMany?: StreamByCountryScalarWhereInput | StreamByCountryScalarWhereInput[]
  }

  export type StreamByCountryUncheckedUpdateManyWithoutCountryNestedInput = {
    create?: XOR<StreamByCountryCreateWithoutCountryInput, StreamByCountryUncheckedCreateWithoutCountryInput> | StreamByCountryCreateWithoutCountryInput[] | StreamByCountryUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: StreamByCountryCreateOrConnectWithoutCountryInput | StreamByCountryCreateOrConnectWithoutCountryInput[]
    upsert?: StreamByCountryUpsertWithWhereUniqueWithoutCountryInput | StreamByCountryUpsertWithWhereUniqueWithoutCountryInput[]
    createMany?: StreamByCountryCreateManyCountryInputEnvelope
    set?: StreamByCountryWhereUniqueInput | StreamByCountryWhereUniqueInput[]
    disconnect?: StreamByCountryWhereUniqueInput | StreamByCountryWhereUniqueInput[]
    delete?: StreamByCountryWhereUniqueInput | StreamByCountryWhereUniqueInput[]
    connect?: StreamByCountryWhereUniqueInput | StreamByCountryWhereUniqueInput[]
    update?: StreamByCountryUpdateWithWhereUniqueWithoutCountryInput | StreamByCountryUpdateWithWhereUniqueWithoutCountryInput[]
    updateMany?: StreamByCountryUpdateManyWithWhereWithoutCountryInput | StreamByCountryUpdateManyWithWhereWithoutCountryInput[]
    deleteMany?: StreamByCountryScalarWhereInput | StreamByCountryScalarWhereInput[]
  }

  export type CountryCreateNestedOneWithoutStreamsByCountryInput = {
    create?: XOR<CountryCreateWithoutStreamsByCountryInput, CountryUncheckedCreateWithoutStreamsByCountryInput>
    connectOrCreate?: CountryCreateOrConnectWithoutStreamsByCountryInput
    connect?: CountryWhereUniqueInput
  }

  export type AudioCreateNestedOneWithoutStreamByCountryInput = {
    create?: XOR<AudioCreateWithoutStreamByCountryInput, AudioUncheckedCreateWithoutStreamByCountryInput>
    connectOrCreate?: AudioCreateOrConnectWithoutStreamByCountryInput
    connect?: AudioWhereUniqueInput
  }

  export type CountryUpdateOneRequiredWithoutStreamsByCountryNestedInput = {
    create?: XOR<CountryCreateWithoutStreamsByCountryInput, CountryUncheckedCreateWithoutStreamsByCountryInput>
    connectOrCreate?: CountryCreateOrConnectWithoutStreamsByCountryInput
    upsert?: CountryUpsertWithoutStreamsByCountryInput
    connect?: CountryWhereUniqueInput
    update?: XOR<XOR<CountryUpdateToOneWithWhereWithoutStreamsByCountryInput, CountryUpdateWithoutStreamsByCountryInput>, CountryUncheckedUpdateWithoutStreamsByCountryInput>
  }

  export type AudioUpdateOneRequiredWithoutStreamByCountryNestedInput = {
    create?: XOR<AudioCreateWithoutStreamByCountryInput, AudioUncheckedCreateWithoutStreamByCountryInput>
    connectOrCreate?: AudioCreateOrConnectWithoutStreamByCountryInput
    upsert?: AudioUpsertWithoutStreamByCountryInput
    connect?: AudioWhereUniqueInput
    update?: XOR<XOR<AudioUpdateToOneWithWhereWithoutStreamByCountryInput, AudioUpdateWithoutStreamByCountryInput>, AudioUncheckedUpdateWithoutStreamByCountryInput>
  }

  export type AudioCreateNestedOneWithoutStoreInput = {
    create?: XOR<AudioCreateWithoutStoreInput, AudioUncheckedCreateWithoutStoreInput>
    connectOrCreate?: AudioCreateOrConnectWithoutStoreInput
    connect?: AudioWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AudioUpdateOneRequiredWithoutStoreNestedInput = {
    create?: XOR<AudioCreateWithoutStoreInput, AudioUncheckedCreateWithoutStoreInput>
    connectOrCreate?: AudioCreateOrConnectWithoutStoreInput
    upsert?: AudioUpsertWithoutStoreInput
    connect?: AudioWhereUniqueInput
    update?: XOR<XOR<AudioUpdateToOneWithWhereWithoutStoreInput, AudioUpdateWithoutStoreInput>, AudioUncheckedUpdateWithoutStoreInput>
  }

  export type AudioCreateNestedOneWithoutCountryEarningsInput = {
    create?: XOR<AudioCreateWithoutCountryEarningsInput, AudioUncheckedCreateWithoutCountryEarningsInput>
    connectOrCreate?: AudioCreateOrConnectWithoutCountryEarningsInput
    connect?: AudioWhereUniqueInput
  }

  export type AudioUpdateOneRequiredWithoutCountryEarningsNestedInput = {
    create?: XOR<AudioCreateWithoutCountryEarningsInput, AudioUncheckedCreateWithoutCountryEarningsInput>
    connectOrCreate?: AudioCreateOrConnectWithoutCountryEarningsInput
    upsert?: AudioUpsertWithoutCountryEarningsInput
    connect?: AudioWhereUniqueInput
    update?: XOR<XOR<AudioUpdateToOneWithWhereWithoutCountryEarningsInput, AudioUpdateWithoutCountryEarningsInput>, AudioUncheckedUpdateWithoutCountryEarningsInput>
  }

  export type AudioCreateNestedOneWithoutMonthlyReportInput = {
    create?: XOR<AudioCreateWithoutMonthlyReportInput, AudioUncheckedCreateWithoutMonthlyReportInput>
    connectOrCreate?: AudioCreateOrConnectWithoutMonthlyReportInput
    connect?: AudioWhereUniqueInput
  }

  export type AudioUpdateOneRequiredWithoutMonthlyReportNestedInput = {
    create?: XOR<AudioCreateWithoutMonthlyReportInput, AudioUncheckedCreateWithoutMonthlyReportInput>
    connectOrCreate?: AudioCreateOrConnectWithoutMonthlyReportInput
    upsert?: AudioUpsertWithoutMonthlyReportInput
    connect?: AudioWhereUniqueInput
    update?: XOR<XOR<AudioUpdateToOneWithWhereWithoutMonthlyReportInput, AudioUpdateWithoutMonthlyReportInput>, AudioUncheckedUpdateWithoutMonthlyReportInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type TrackCreateWithoutAudioInput = {
    id?: string
    title: string
    lyrics?: string | null
    productionCredit?: string | null
    ISRC?: string | null
    trackNumber: number
    audioLink: string
  }

  export type TrackUncheckedCreateWithoutAudioInput = {
    id?: string
    title: string
    lyrics?: string | null
    productionCredit?: string | null
    ISRC?: string | null
    trackNumber: number
    audioLink: string
  }

  export type TrackCreateOrConnectWithoutAudioInput = {
    where: TrackWhereUniqueInput
    create: XOR<TrackCreateWithoutAudioInput, TrackUncheckedCreateWithoutAudioInput>
  }

  export type TrackCreateManyAudioInputEnvelope = {
    data: TrackCreateManyAudioInput | TrackCreateManyAudioInput[]
    skipDuplicates?: boolean
  }

  export type StreamsCreateWithoutAudioInput = {
    id?: string
    total: number
    date: Date | string
    dsp: DSPCreateNestedOneWithoutStreamsInput
  }

  export type StreamsUncheckedCreateWithoutAudioInput = {
    id?: string
    dspId: string
    total: number
    date: Date | string
  }

  export type StreamsCreateOrConnectWithoutAudioInput = {
    where: StreamsWhereUniqueInput
    create: XOR<StreamsCreateWithoutAudioInput, StreamsUncheckedCreateWithoutAudioInput>
  }

  export type StreamsCreateManyAudioInputEnvelope = {
    data: StreamsCreateManyAudioInput | StreamsCreateManyAudioInput[]
    skipDuplicates?: boolean
  }

  export type StreamByCountryCreateWithoutAudioInput = {
    id?: string
    total: number
    date: Date | string
    country: CountryCreateNestedOneWithoutStreamsByCountryInput
  }

  export type StreamByCountryUncheckedCreateWithoutAudioInput = {
    id?: string
    countryId: string
    total: number
    date: Date | string
  }

  export type StreamByCountryCreateOrConnectWithoutAudioInput = {
    where: StreamByCountryWhereUniqueInput
    create: XOR<StreamByCountryCreateWithoutAudioInput, StreamByCountryUncheckedCreateWithoutAudioInput>
  }

  export type StreamByCountryCreateManyAudioInputEnvelope = {
    data: StreamByCountryCreateManyAudioInput | StreamByCountryCreateManyAudioInput[]
    skipDuplicates?: boolean
  }

  export type StoreCreateWithoutAudioInput = {
    id?: string
    name: string
    trackDownloads: number
    streams: number
    totalSales: number
    earnings: number
  }

  export type StoreUncheckedCreateWithoutAudioInput = {
    id?: string
    name: string
    trackDownloads: number
    streams: number
    totalSales: number
    earnings: number
  }

  export type StoreCreateOrConnectWithoutAudioInput = {
    where: StoreWhereUniqueInput
    create: XOR<StoreCreateWithoutAudioInput, StoreUncheckedCreateWithoutAudioInput>
  }

  export type StoreCreateManyAudioInputEnvelope = {
    data: StoreCreateManyAudioInput | StoreCreateManyAudioInput[]
    skipDuplicates?: boolean
  }

  export type MonthlyReportCreateWithoutAudioInput = {
    id?: string
    month: number
    year: number
    trackDownloads: number
    streams: number
    totalSales: number
    earnings: number
    date: string
  }

  export type MonthlyReportUncheckedCreateWithoutAudioInput = {
    id?: string
    month: number
    year: number
    trackDownloads: number
    streams: number
    totalSales: number
    earnings: number
    date: string
  }

  export type MonthlyReportCreateOrConnectWithoutAudioInput = {
    where: MonthlyReportWhereUniqueInput
    create: XOR<MonthlyReportCreateWithoutAudioInput, MonthlyReportUncheckedCreateWithoutAudioInput>
  }

  export type MonthlyReportCreateManyAudioInputEnvelope = {
    data: MonthlyReportCreateManyAudioInput | MonthlyReportCreateManyAudioInput[]
    skipDuplicates?: boolean
  }

  export type CountryEarningsCreateWithoutAudioInput = {
    id?: string
    name: string
    trackDownloads: number
    streams: number
    totalSales: number
    earnings: number
  }

  export type CountryEarningsUncheckedCreateWithoutAudioInput = {
    id?: string
    name: string
    trackDownloads: number
    streams: number
    totalSales: number
    earnings: number
  }

  export type CountryEarningsCreateOrConnectWithoutAudioInput = {
    where: CountryEarningsWhereUniqueInput
    create: XOR<CountryEarningsCreateWithoutAudioInput, CountryEarningsUncheckedCreateWithoutAudioInput>
  }

  export type CountryEarningsCreateManyAudioInputEnvelope = {
    data: CountryEarningsCreateManyAudioInput | CountryEarningsCreateManyAudioInput[]
    skipDuplicates?: boolean
  }

  export type TrackUpsertWithWhereUniqueWithoutAudioInput = {
    where: TrackWhereUniqueInput
    update: XOR<TrackUpdateWithoutAudioInput, TrackUncheckedUpdateWithoutAudioInput>
    create: XOR<TrackCreateWithoutAudioInput, TrackUncheckedCreateWithoutAudioInput>
  }

  export type TrackUpdateWithWhereUniqueWithoutAudioInput = {
    where: TrackWhereUniqueInput
    data: XOR<TrackUpdateWithoutAudioInput, TrackUncheckedUpdateWithoutAudioInput>
  }

  export type TrackUpdateManyWithWhereWithoutAudioInput = {
    where: TrackScalarWhereInput
    data: XOR<TrackUpdateManyMutationInput, TrackUncheckedUpdateManyWithoutAudioInput>
  }

  export type TrackScalarWhereInput = {
    AND?: TrackScalarWhereInput | TrackScalarWhereInput[]
    OR?: TrackScalarWhereInput[]
    NOT?: TrackScalarWhereInput | TrackScalarWhereInput[]
    id?: StringFilter<"Track"> | string
    audioId?: StringFilter<"Track"> | string
    title?: StringFilter<"Track"> | string
    lyrics?: StringNullableFilter<"Track"> | string | null
    productionCredit?: StringNullableFilter<"Track"> | string | null
    ISRC?: StringNullableFilter<"Track"> | string | null
    trackNumber?: IntFilter<"Track"> | number
    audioLink?: StringFilter<"Track"> | string
  }

  export type StreamsUpsertWithWhereUniqueWithoutAudioInput = {
    where: StreamsWhereUniqueInput
    update: XOR<StreamsUpdateWithoutAudioInput, StreamsUncheckedUpdateWithoutAudioInput>
    create: XOR<StreamsCreateWithoutAudioInput, StreamsUncheckedCreateWithoutAudioInput>
  }

  export type StreamsUpdateWithWhereUniqueWithoutAudioInput = {
    where: StreamsWhereUniqueInput
    data: XOR<StreamsUpdateWithoutAudioInput, StreamsUncheckedUpdateWithoutAudioInput>
  }

  export type StreamsUpdateManyWithWhereWithoutAudioInput = {
    where: StreamsScalarWhereInput
    data: XOR<StreamsUpdateManyMutationInput, StreamsUncheckedUpdateManyWithoutAudioInput>
  }

  export type StreamsScalarWhereInput = {
    AND?: StreamsScalarWhereInput | StreamsScalarWhereInput[]
    OR?: StreamsScalarWhereInput[]
    NOT?: StreamsScalarWhereInput | StreamsScalarWhereInput[]
    id?: StringFilter<"Streams"> | string
    dspId?: StringFilter<"Streams"> | string
    total?: IntFilter<"Streams"> | number
    date?: DateTimeFilter<"Streams"> | Date | string
    audioId?: StringFilter<"Streams"> | string
  }

  export type StreamByCountryUpsertWithWhereUniqueWithoutAudioInput = {
    where: StreamByCountryWhereUniqueInput
    update: XOR<StreamByCountryUpdateWithoutAudioInput, StreamByCountryUncheckedUpdateWithoutAudioInput>
    create: XOR<StreamByCountryCreateWithoutAudioInput, StreamByCountryUncheckedCreateWithoutAudioInput>
  }

  export type StreamByCountryUpdateWithWhereUniqueWithoutAudioInput = {
    where: StreamByCountryWhereUniqueInput
    data: XOR<StreamByCountryUpdateWithoutAudioInput, StreamByCountryUncheckedUpdateWithoutAudioInput>
  }

  export type StreamByCountryUpdateManyWithWhereWithoutAudioInput = {
    where: StreamByCountryScalarWhereInput
    data: XOR<StreamByCountryUpdateManyMutationInput, StreamByCountryUncheckedUpdateManyWithoutAudioInput>
  }

  export type StreamByCountryScalarWhereInput = {
    AND?: StreamByCountryScalarWhereInput | StreamByCountryScalarWhereInput[]
    OR?: StreamByCountryScalarWhereInput[]
    NOT?: StreamByCountryScalarWhereInput | StreamByCountryScalarWhereInput[]
    id?: StringFilter<"StreamByCountry"> | string
    countryId?: StringFilter<"StreamByCountry"> | string
    total?: IntFilter<"StreamByCountry"> | number
    date?: DateTimeFilter<"StreamByCountry"> | Date | string
    audioId?: StringFilter<"StreamByCountry"> | string
  }

  export type StoreUpsertWithWhereUniqueWithoutAudioInput = {
    where: StoreWhereUniqueInput
    update: XOR<StoreUpdateWithoutAudioInput, StoreUncheckedUpdateWithoutAudioInput>
    create: XOR<StoreCreateWithoutAudioInput, StoreUncheckedCreateWithoutAudioInput>
  }

  export type StoreUpdateWithWhereUniqueWithoutAudioInput = {
    where: StoreWhereUniqueInput
    data: XOR<StoreUpdateWithoutAudioInput, StoreUncheckedUpdateWithoutAudioInput>
  }

  export type StoreUpdateManyWithWhereWithoutAudioInput = {
    where: StoreScalarWhereInput
    data: XOR<StoreUpdateManyMutationInput, StoreUncheckedUpdateManyWithoutAudioInput>
  }

  export type StoreScalarWhereInput = {
    AND?: StoreScalarWhereInput | StoreScalarWhereInput[]
    OR?: StoreScalarWhereInput[]
    NOT?: StoreScalarWhereInput | StoreScalarWhereInput[]
    id?: StringFilter<"Store"> | string
    name?: StringFilter<"Store"> | string
    trackDownloads?: IntFilter<"Store"> | number
    streams?: IntFilter<"Store"> | number
    totalSales?: IntFilter<"Store"> | number
    earnings?: FloatFilter<"Store"> | number
    audioId?: StringFilter<"Store"> | string
  }

  export type MonthlyReportUpsertWithWhereUniqueWithoutAudioInput = {
    where: MonthlyReportWhereUniqueInput
    update: XOR<MonthlyReportUpdateWithoutAudioInput, MonthlyReportUncheckedUpdateWithoutAudioInput>
    create: XOR<MonthlyReportCreateWithoutAudioInput, MonthlyReportUncheckedCreateWithoutAudioInput>
  }

  export type MonthlyReportUpdateWithWhereUniqueWithoutAudioInput = {
    where: MonthlyReportWhereUniqueInput
    data: XOR<MonthlyReportUpdateWithoutAudioInput, MonthlyReportUncheckedUpdateWithoutAudioInput>
  }

  export type MonthlyReportUpdateManyWithWhereWithoutAudioInput = {
    where: MonthlyReportScalarWhereInput
    data: XOR<MonthlyReportUpdateManyMutationInput, MonthlyReportUncheckedUpdateManyWithoutAudioInput>
  }

  export type MonthlyReportScalarWhereInput = {
    AND?: MonthlyReportScalarWhereInput | MonthlyReportScalarWhereInput[]
    OR?: MonthlyReportScalarWhereInput[]
    NOT?: MonthlyReportScalarWhereInput | MonthlyReportScalarWhereInput[]
    id?: StringFilter<"MonthlyReport"> | string
    month?: IntFilter<"MonthlyReport"> | number
    year?: IntFilter<"MonthlyReport"> | number
    trackDownloads?: IntFilter<"MonthlyReport"> | number
    streams?: IntFilter<"MonthlyReport"> | number
    totalSales?: IntFilter<"MonthlyReport"> | number
    earnings?: FloatFilter<"MonthlyReport"> | number
    date?: StringFilter<"MonthlyReport"> | string
    audioId?: StringFilter<"MonthlyReport"> | string
  }

  export type CountryEarningsUpsertWithWhereUniqueWithoutAudioInput = {
    where: CountryEarningsWhereUniqueInput
    update: XOR<CountryEarningsUpdateWithoutAudioInput, CountryEarningsUncheckedUpdateWithoutAudioInput>
    create: XOR<CountryEarningsCreateWithoutAudioInput, CountryEarningsUncheckedCreateWithoutAudioInput>
  }

  export type CountryEarningsUpdateWithWhereUniqueWithoutAudioInput = {
    where: CountryEarningsWhereUniqueInput
    data: XOR<CountryEarningsUpdateWithoutAudioInput, CountryEarningsUncheckedUpdateWithoutAudioInput>
  }

  export type CountryEarningsUpdateManyWithWhereWithoutAudioInput = {
    where: CountryEarningsScalarWhereInput
    data: XOR<CountryEarningsUpdateManyMutationInput, CountryEarningsUncheckedUpdateManyWithoutAudioInput>
  }

  export type CountryEarningsScalarWhereInput = {
    AND?: CountryEarningsScalarWhereInput | CountryEarningsScalarWhereInput[]
    OR?: CountryEarningsScalarWhereInput[]
    NOT?: CountryEarningsScalarWhereInput | CountryEarningsScalarWhereInput[]
    id?: StringFilter<"CountryEarnings"> | string
    name?: StringFilter<"CountryEarnings"> | string
    trackDownloads?: IntFilter<"CountryEarnings"> | number
    streams?: IntFilter<"CountryEarnings"> | number
    totalSales?: IntFilter<"CountryEarnings"> | number
    earnings?: FloatFilter<"CountryEarnings"> | number
    audioId?: StringFilter<"CountryEarnings"> | string
  }

  export type AudioCreateWithoutTrackInput = {
    id?: string
    userId: string
    title: string
    artist: string
    releaseDate?: Date | string
    primaryGenre: string
    secondaryGenre: string
    language: string
    label: string
    copyrightHolder: string
    copyrightYear: string
    productionHolder: string
    productionYear: string
    releaseCover: string
    releaseAudio?: string | null
    releaseAudioLink?: string | null
    lyrics?: string | null
    releaseType: string
    status: string
    UPC?: string
    ISRC?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    smartLink?: string
    Streams?: StreamsCreateNestedManyWithoutAudioInput
    StreamByCountry?: StreamByCountryCreateNestedManyWithoutAudioInput
    Store?: StoreCreateNestedManyWithoutAudioInput
    MonthlyReport?: MonthlyReportCreateNestedManyWithoutAudioInput
    CountryEarnings?: CountryEarningsCreateNestedManyWithoutAudioInput
  }

  export type AudioUncheckedCreateWithoutTrackInput = {
    id?: string
    userId: string
    title: string
    artist: string
    releaseDate?: Date | string
    primaryGenre: string
    secondaryGenre: string
    language: string
    label: string
    copyrightHolder: string
    copyrightYear: string
    productionHolder: string
    productionYear: string
    releaseCover: string
    releaseAudio?: string | null
    releaseAudioLink?: string | null
    lyrics?: string | null
    releaseType: string
    status: string
    UPC?: string
    ISRC?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    smartLink?: string
    Streams?: StreamsUncheckedCreateNestedManyWithoutAudioInput
    StreamByCountry?: StreamByCountryUncheckedCreateNestedManyWithoutAudioInput
    Store?: StoreUncheckedCreateNestedManyWithoutAudioInput
    MonthlyReport?: MonthlyReportUncheckedCreateNestedManyWithoutAudioInput
    CountryEarnings?: CountryEarningsUncheckedCreateNestedManyWithoutAudioInput
  }

  export type AudioCreateOrConnectWithoutTrackInput = {
    where: AudioWhereUniqueInput
    create: XOR<AudioCreateWithoutTrackInput, AudioUncheckedCreateWithoutTrackInput>
  }

  export type AudioUpsertWithoutTrackInput = {
    update: XOR<AudioUpdateWithoutTrackInput, AudioUncheckedUpdateWithoutTrackInput>
    create: XOR<AudioCreateWithoutTrackInput, AudioUncheckedCreateWithoutTrackInput>
    where?: AudioWhereInput
  }

  export type AudioUpdateToOneWithWhereWithoutTrackInput = {
    where?: AudioWhereInput
    data: XOR<AudioUpdateWithoutTrackInput, AudioUncheckedUpdateWithoutTrackInput>
  }

  export type AudioUpdateWithoutTrackInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    artist?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    primaryGenre?: StringFieldUpdateOperationsInput | string
    secondaryGenre?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    copyrightHolder?: StringFieldUpdateOperationsInput | string
    copyrightYear?: StringFieldUpdateOperationsInput | string
    productionHolder?: StringFieldUpdateOperationsInput | string
    productionYear?: StringFieldUpdateOperationsInput | string
    releaseCover?: StringFieldUpdateOperationsInput | string
    releaseAudio?: NullableStringFieldUpdateOperationsInput | string | null
    releaseAudioLink?: NullableStringFieldUpdateOperationsInput | string | null
    lyrics?: NullableStringFieldUpdateOperationsInput | string | null
    releaseType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    UPC?: StringFieldUpdateOperationsInput | string
    ISRC?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    smartLink?: StringFieldUpdateOperationsInput | string
    Streams?: StreamsUpdateManyWithoutAudioNestedInput
    StreamByCountry?: StreamByCountryUpdateManyWithoutAudioNestedInput
    Store?: StoreUpdateManyWithoutAudioNestedInput
    MonthlyReport?: MonthlyReportUpdateManyWithoutAudioNestedInput
    CountryEarnings?: CountryEarningsUpdateManyWithoutAudioNestedInput
  }

  export type AudioUncheckedUpdateWithoutTrackInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    artist?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    primaryGenre?: StringFieldUpdateOperationsInput | string
    secondaryGenre?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    copyrightHolder?: StringFieldUpdateOperationsInput | string
    copyrightYear?: StringFieldUpdateOperationsInput | string
    productionHolder?: StringFieldUpdateOperationsInput | string
    productionYear?: StringFieldUpdateOperationsInput | string
    releaseCover?: StringFieldUpdateOperationsInput | string
    releaseAudio?: NullableStringFieldUpdateOperationsInput | string | null
    releaseAudioLink?: NullableStringFieldUpdateOperationsInput | string | null
    lyrics?: NullableStringFieldUpdateOperationsInput | string | null
    releaseType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    UPC?: StringFieldUpdateOperationsInput | string
    ISRC?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    smartLink?: StringFieldUpdateOperationsInput | string
    Streams?: StreamsUncheckedUpdateManyWithoutAudioNestedInput
    StreamByCountry?: StreamByCountryUncheckedUpdateManyWithoutAudioNestedInput
    Store?: StoreUncheckedUpdateManyWithoutAudioNestedInput
    MonthlyReport?: MonthlyReportUncheckedUpdateManyWithoutAudioNestedInput
    CountryEarnings?: CountryEarningsUncheckedUpdateManyWithoutAudioNestedInput
  }

  export type StreamsCreateWithoutDspInput = {
    id?: string
    total: number
    date: Date | string
    Audio: AudioCreateNestedOneWithoutStreamsInput
  }

  export type StreamsUncheckedCreateWithoutDspInput = {
    id?: string
    total: number
    date: Date | string
    audioId: string
  }

  export type StreamsCreateOrConnectWithoutDspInput = {
    where: StreamsWhereUniqueInput
    create: XOR<StreamsCreateWithoutDspInput, StreamsUncheckedCreateWithoutDspInput>
  }

  export type StreamsCreateManyDspInputEnvelope = {
    data: StreamsCreateManyDspInput | StreamsCreateManyDspInput[]
    skipDuplicates?: boolean
  }

  export type StreamsUpsertWithWhereUniqueWithoutDspInput = {
    where: StreamsWhereUniqueInput
    update: XOR<StreamsUpdateWithoutDspInput, StreamsUncheckedUpdateWithoutDspInput>
    create: XOR<StreamsCreateWithoutDspInput, StreamsUncheckedCreateWithoutDspInput>
  }

  export type StreamsUpdateWithWhereUniqueWithoutDspInput = {
    where: StreamsWhereUniqueInput
    data: XOR<StreamsUpdateWithoutDspInput, StreamsUncheckedUpdateWithoutDspInput>
  }

  export type StreamsUpdateManyWithWhereWithoutDspInput = {
    where: StreamsScalarWhereInput
    data: XOR<StreamsUpdateManyMutationInput, StreamsUncheckedUpdateManyWithoutDspInput>
  }

  export type DSPCreateWithoutStreamsInput = {
    id?: string
    name: string
  }

  export type DSPUncheckedCreateWithoutStreamsInput = {
    id?: string
    name: string
  }

  export type DSPCreateOrConnectWithoutStreamsInput = {
    where: DSPWhereUniqueInput
    create: XOR<DSPCreateWithoutStreamsInput, DSPUncheckedCreateWithoutStreamsInput>
  }

  export type AudioCreateWithoutStreamsInput = {
    id?: string
    userId: string
    title: string
    artist: string
    releaseDate?: Date | string
    primaryGenre: string
    secondaryGenre: string
    language: string
    label: string
    copyrightHolder: string
    copyrightYear: string
    productionHolder: string
    productionYear: string
    releaseCover: string
    releaseAudio?: string | null
    releaseAudioLink?: string | null
    lyrics?: string | null
    releaseType: string
    status: string
    UPC?: string
    ISRC?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    smartLink?: string
    Track?: TrackCreateNestedManyWithoutAudioInput
    StreamByCountry?: StreamByCountryCreateNestedManyWithoutAudioInput
    Store?: StoreCreateNestedManyWithoutAudioInput
    MonthlyReport?: MonthlyReportCreateNestedManyWithoutAudioInput
    CountryEarnings?: CountryEarningsCreateNestedManyWithoutAudioInput
  }

  export type AudioUncheckedCreateWithoutStreamsInput = {
    id?: string
    userId: string
    title: string
    artist: string
    releaseDate?: Date | string
    primaryGenre: string
    secondaryGenre: string
    language: string
    label: string
    copyrightHolder: string
    copyrightYear: string
    productionHolder: string
    productionYear: string
    releaseCover: string
    releaseAudio?: string | null
    releaseAudioLink?: string | null
    lyrics?: string | null
    releaseType: string
    status: string
    UPC?: string
    ISRC?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    smartLink?: string
    Track?: TrackUncheckedCreateNestedManyWithoutAudioInput
    StreamByCountry?: StreamByCountryUncheckedCreateNestedManyWithoutAudioInput
    Store?: StoreUncheckedCreateNestedManyWithoutAudioInput
    MonthlyReport?: MonthlyReportUncheckedCreateNestedManyWithoutAudioInput
    CountryEarnings?: CountryEarningsUncheckedCreateNestedManyWithoutAudioInput
  }

  export type AudioCreateOrConnectWithoutStreamsInput = {
    where: AudioWhereUniqueInput
    create: XOR<AudioCreateWithoutStreamsInput, AudioUncheckedCreateWithoutStreamsInput>
  }

  export type DSPUpsertWithoutStreamsInput = {
    update: XOR<DSPUpdateWithoutStreamsInput, DSPUncheckedUpdateWithoutStreamsInput>
    create: XOR<DSPCreateWithoutStreamsInput, DSPUncheckedCreateWithoutStreamsInput>
    where?: DSPWhereInput
  }

  export type DSPUpdateToOneWithWhereWithoutStreamsInput = {
    where?: DSPWhereInput
    data: XOR<DSPUpdateWithoutStreamsInput, DSPUncheckedUpdateWithoutStreamsInput>
  }

  export type DSPUpdateWithoutStreamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DSPUncheckedUpdateWithoutStreamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AudioUpsertWithoutStreamsInput = {
    update: XOR<AudioUpdateWithoutStreamsInput, AudioUncheckedUpdateWithoutStreamsInput>
    create: XOR<AudioCreateWithoutStreamsInput, AudioUncheckedCreateWithoutStreamsInput>
    where?: AudioWhereInput
  }

  export type AudioUpdateToOneWithWhereWithoutStreamsInput = {
    where?: AudioWhereInput
    data: XOR<AudioUpdateWithoutStreamsInput, AudioUncheckedUpdateWithoutStreamsInput>
  }

  export type AudioUpdateWithoutStreamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    artist?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    primaryGenre?: StringFieldUpdateOperationsInput | string
    secondaryGenre?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    copyrightHolder?: StringFieldUpdateOperationsInput | string
    copyrightYear?: StringFieldUpdateOperationsInput | string
    productionHolder?: StringFieldUpdateOperationsInput | string
    productionYear?: StringFieldUpdateOperationsInput | string
    releaseCover?: StringFieldUpdateOperationsInput | string
    releaseAudio?: NullableStringFieldUpdateOperationsInput | string | null
    releaseAudioLink?: NullableStringFieldUpdateOperationsInput | string | null
    lyrics?: NullableStringFieldUpdateOperationsInput | string | null
    releaseType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    UPC?: StringFieldUpdateOperationsInput | string
    ISRC?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    smartLink?: StringFieldUpdateOperationsInput | string
    Track?: TrackUpdateManyWithoutAudioNestedInput
    StreamByCountry?: StreamByCountryUpdateManyWithoutAudioNestedInput
    Store?: StoreUpdateManyWithoutAudioNestedInput
    MonthlyReport?: MonthlyReportUpdateManyWithoutAudioNestedInput
    CountryEarnings?: CountryEarningsUpdateManyWithoutAudioNestedInput
  }

  export type AudioUncheckedUpdateWithoutStreamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    artist?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    primaryGenre?: StringFieldUpdateOperationsInput | string
    secondaryGenre?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    copyrightHolder?: StringFieldUpdateOperationsInput | string
    copyrightYear?: StringFieldUpdateOperationsInput | string
    productionHolder?: StringFieldUpdateOperationsInput | string
    productionYear?: StringFieldUpdateOperationsInput | string
    releaseCover?: StringFieldUpdateOperationsInput | string
    releaseAudio?: NullableStringFieldUpdateOperationsInput | string | null
    releaseAudioLink?: NullableStringFieldUpdateOperationsInput | string | null
    lyrics?: NullableStringFieldUpdateOperationsInput | string | null
    releaseType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    UPC?: StringFieldUpdateOperationsInput | string
    ISRC?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    smartLink?: StringFieldUpdateOperationsInput | string
    Track?: TrackUncheckedUpdateManyWithoutAudioNestedInput
    StreamByCountry?: StreamByCountryUncheckedUpdateManyWithoutAudioNestedInput
    Store?: StoreUncheckedUpdateManyWithoutAudioNestedInput
    MonthlyReport?: MonthlyReportUncheckedUpdateManyWithoutAudioNestedInput
    CountryEarnings?: CountryEarningsUncheckedUpdateManyWithoutAudioNestedInput
  }

  export type StreamByCountryCreateWithoutCountryInput = {
    id?: string
    total: number
    date: Date | string
    audio: AudioCreateNestedOneWithoutStreamByCountryInput
  }

  export type StreamByCountryUncheckedCreateWithoutCountryInput = {
    id?: string
    total: number
    date: Date | string
    audioId: string
  }

  export type StreamByCountryCreateOrConnectWithoutCountryInput = {
    where: StreamByCountryWhereUniqueInput
    create: XOR<StreamByCountryCreateWithoutCountryInput, StreamByCountryUncheckedCreateWithoutCountryInput>
  }

  export type StreamByCountryCreateManyCountryInputEnvelope = {
    data: StreamByCountryCreateManyCountryInput | StreamByCountryCreateManyCountryInput[]
    skipDuplicates?: boolean
  }

  export type StreamByCountryUpsertWithWhereUniqueWithoutCountryInput = {
    where: StreamByCountryWhereUniqueInput
    update: XOR<StreamByCountryUpdateWithoutCountryInput, StreamByCountryUncheckedUpdateWithoutCountryInput>
    create: XOR<StreamByCountryCreateWithoutCountryInput, StreamByCountryUncheckedCreateWithoutCountryInput>
  }

  export type StreamByCountryUpdateWithWhereUniqueWithoutCountryInput = {
    where: StreamByCountryWhereUniqueInput
    data: XOR<StreamByCountryUpdateWithoutCountryInput, StreamByCountryUncheckedUpdateWithoutCountryInput>
  }

  export type StreamByCountryUpdateManyWithWhereWithoutCountryInput = {
    where: StreamByCountryScalarWhereInput
    data: XOR<StreamByCountryUpdateManyMutationInput, StreamByCountryUncheckedUpdateManyWithoutCountryInput>
  }

  export type CountryCreateWithoutStreamsByCountryInput = {
    id?: string
    name: string
    isoCode: string
  }

  export type CountryUncheckedCreateWithoutStreamsByCountryInput = {
    id?: string
    name: string
    isoCode: string
  }

  export type CountryCreateOrConnectWithoutStreamsByCountryInput = {
    where: CountryWhereUniqueInput
    create: XOR<CountryCreateWithoutStreamsByCountryInput, CountryUncheckedCreateWithoutStreamsByCountryInput>
  }

  export type AudioCreateWithoutStreamByCountryInput = {
    id?: string
    userId: string
    title: string
    artist: string
    releaseDate?: Date | string
    primaryGenre: string
    secondaryGenre: string
    language: string
    label: string
    copyrightHolder: string
    copyrightYear: string
    productionHolder: string
    productionYear: string
    releaseCover: string
    releaseAudio?: string | null
    releaseAudioLink?: string | null
    lyrics?: string | null
    releaseType: string
    status: string
    UPC?: string
    ISRC?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    smartLink?: string
    Track?: TrackCreateNestedManyWithoutAudioInput
    Streams?: StreamsCreateNestedManyWithoutAudioInput
    Store?: StoreCreateNestedManyWithoutAudioInput
    MonthlyReport?: MonthlyReportCreateNestedManyWithoutAudioInput
    CountryEarnings?: CountryEarningsCreateNestedManyWithoutAudioInput
  }

  export type AudioUncheckedCreateWithoutStreamByCountryInput = {
    id?: string
    userId: string
    title: string
    artist: string
    releaseDate?: Date | string
    primaryGenre: string
    secondaryGenre: string
    language: string
    label: string
    copyrightHolder: string
    copyrightYear: string
    productionHolder: string
    productionYear: string
    releaseCover: string
    releaseAudio?: string | null
    releaseAudioLink?: string | null
    lyrics?: string | null
    releaseType: string
    status: string
    UPC?: string
    ISRC?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    smartLink?: string
    Track?: TrackUncheckedCreateNestedManyWithoutAudioInput
    Streams?: StreamsUncheckedCreateNestedManyWithoutAudioInput
    Store?: StoreUncheckedCreateNestedManyWithoutAudioInput
    MonthlyReport?: MonthlyReportUncheckedCreateNestedManyWithoutAudioInput
    CountryEarnings?: CountryEarningsUncheckedCreateNestedManyWithoutAudioInput
  }

  export type AudioCreateOrConnectWithoutStreamByCountryInput = {
    where: AudioWhereUniqueInput
    create: XOR<AudioCreateWithoutStreamByCountryInput, AudioUncheckedCreateWithoutStreamByCountryInput>
  }

  export type CountryUpsertWithoutStreamsByCountryInput = {
    update: XOR<CountryUpdateWithoutStreamsByCountryInput, CountryUncheckedUpdateWithoutStreamsByCountryInput>
    create: XOR<CountryCreateWithoutStreamsByCountryInput, CountryUncheckedCreateWithoutStreamsByCountryInput>
    where?: CountryWhereInput
  }

  export type CountryUpdateToOneWithWhereWithoutStreamsByCountryInput = {
    where?: CountryWhereInput
    data: XOR<CountryUpdateWithoutStreamsByCountryInput, CountryUncheckedUpdateWithoutStreamsByCountryInput>
  }

  export type CountryUpdateWithoutStreamsByCountryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isoCode?: StringFieldUpdateOperationsInput | string
  }

  export type CountryUncheckedUpdateWithoutStreamsByCountryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isoCode?: StringFieldUpdateOperationsInput | string
  }

  export type AudioUpsertWithoutStreamByCountryInput = {
    update: XOR<AudioUpdateWithoutStreamByCountryInput, AudioUncheckedUpdateWithoutStreamByCountryInput>
    create: XOR<AudioCreateWithoutStreamByCountryInput, AudioUncheckedCreateWithoutStreamByCountryInput>
    where?: AudioWhereInput
  }

  export type AudioUpdateToOneWithWhereWithoutStreamByCountryInput = {
    where?: AudioWhereInput
    data: XOR<AudioUpdateWithoutStreamByCountryInput, AudioUncheckedUpdateWithoutStreamByCountryInput>
  }

  export type AudioUpdateWithoutStreamByCountryInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    artist?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    primaryGenre?: StringFieldUpdateOperationsInput | string
    secondaryGenre?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    copyrightHolder?: StringFieldUpdateOperationsInput | string
    copyrightYear?: StringFieldUpdateOperationsInput | string
    productionHolder?: StringFieldUpdateOperationsInput | string
    productionYear?: StringFieldUpdateOperationsInput | string
    releaseCover?: StringFieldUpdateOperationsInput | string
    releaseAudio?: NullableStringFieldUpdateOperationsInput | string | null
    releaseAudioLink?: NullableStringFieldUpdateOperationsInput | string | null
    lyrics?: NullableStringFieldUpdateOperationsInput | string | null
    releaseType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    UPC?: StringFieldUpdateOperationsInput | string
    ISRC?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    smartLink?: StringFieldUpdateOperationsInput | string
    Track?: TrackUpdateManyWithoutAudioNestedInput
    Streams?: StreamsUpdateManyWithoutAudioNestedInput
    Store?: StoreUpdateManyWithoutAudioNestedInput
    MonthlyReport?: MonthlyReportUpdateManyWithoutAudioNestedInput
    CountryEarnings?: CountryEarningsUpdateManyWithoutAudioNestedInput
  }

  export type AudioUncheckedUpdateWithoutStreamByCountryInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    artist?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    primaryGenre?: StringFieldUpdateOperationsInput | string
    secondaryGenre?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    copyrightHolder?: StringFieldUpdateOperationsInput | string
    copyrightYear?: StringFieldUpdateOperationsInput | string
    productionHolder?: StringFieldUpdateOperationsInput | string
    productionYear?: StringFieldUpdateOperationsInput | string
    releaseCover?: StringFieldUpdateOperationsInput | string
    releaseAudio?: NullableStringFieldUpdateOperationsInput | string | null
    releaseAudioLink?: NullableStringFieldUpdateOperationsInput | string | null
    lyrics?: NullableStringFieldUpdateOperationsInput | string | null
    releaseType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    UPC?: StringFieldUpdateOperationsInput | string
    ISRC?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    smartLink?: StringFieldUpdateOperationsInput | string
    Track?: TrackUncheckedUpdateManyWithoutAudioNestedInput
    Streams?: StreamsUncheckedUpdateManyWithoutAudioNestedInput
    Store?: StoreUncheckedUpdateManyWithoutAudioNestedInput
    MonthlyReport?: MonthlyReportUncheckedUpdateManyWithoutAudioNestedInput
    CountryEarnings?: CountryEarningsUncheckedUpdateManyWithoutAudioNestedInput
  }

  export type AudioCreateWithoutStoreInput = {
    id?: string
    userId: string
    title: string
    artist: string
    releaseDate?: Date | string
    primaryGenre: string
    secondaryGenre: string
    language: string
    label: string
    copyrightHolder: string
    copyrightYear: string
    productionHolder: string
    productionYear: string
    releaseCover: string
    releaseAudio?: string | null
    releaseAudioLink?: string | null
    lyrics?: string | null
    releaseType: string
    status: string
    UPC?: string
    ISRC?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    smartLink?: string
    Track?: TrackCreateNestedManyWithoutAudioInput
    Streams?: StreamsCreateNestedManyWithoutAudioInput
    StreamByCountry?: StreamByCountryCreateNestedManyWithoutAudioInput
    MonthlyReport?: MonthlyReportCreateNestedManyWithoutAudioInput
    CountryEarnings?: CountryEarningsCreateNestedManyWithoutAudioInput
  }

  export type AudioUncheckedCreateWithoutStoreInput = {
    id?: string
    userId: string
    title: string
    artist: string
    releaseDate?: Date | string
    primaryGenre: string
    secondaryGenre: string
    language: string
    label: string
    copyrightHolder: string
    copyrightYear: string
    productionHolder: string
    productionYear: string
    releaseCover: string
    releaseAudio?: string | null
    releaseAudioLink?: string | null
    lyrics?: string | null
    releaseType: string
    status: string
    UPC?: string
    ISRC?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    smartLink?: string
    Track?: TrackUncheckedCreateNestedManyWithoutAudioInput
    Streams?: StreamsUncheckedCreateNestedManyWithoutAudioInput
    StreamByCountry?: StreamByCountryUncheckedCreateNestedManyWithoutAudioInput
    MonthlyReport?: MonthlyReportUncheckedCreateNestedManyWithoutAudioInput
    CountryEarnings?: CountryEarningsUncheckedCreateNestedManyWithoutAudioInput
  }

  export type AudioCreateOrConnectWithoutStoreInput = {
    where: AudioWhereUniqueInput
    create: XOR<AudioCreateWithoutStoreInput, AudioUncheckedCreateWithoutStoreInput>
  }

  export type AudioUpsertWithoutStoreInput = {
    update: XOR<AudioUpdateWithoutStoreInput, AudioUncheckedUpdateWithoutStoreInput>
    create: XOR<AudioCreateWithoutStoreInput, AudioUncheckedCreateWithoutStoreInput>
    where?: AudioWhereInput
  }

  export type AudioUpdateToOneWithWhereWithoutStoreInput = {
    where?: AudioWhereInput
    data: XOR<AudioUpdateWithoutStoreInput, AudioUncheckedUpdateWithoutStoreInput>
  }

  export type AudioUpdateWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    artist?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    primaryGenre?: StringFieldUpdateOperationsInput | string
    secondaryGenre?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    copyrightHolder?: StringFieldUpdateOperationsInput | string
    copyrightYear?: StringFieldUpdateOperationsInput | string
    productionHolder?: StringFieldUpdateOperationsInput | string
    productionYear?: StringFieldUpdateOperationsInput | string
    releaseCover?: StringFieldUpdateOperationsInput | string
    releaseAudio?: NullableStringFieldUpdateOperationsInput | string | null
    releaseAudioLink?: NullableStringFieldUpdateOperationsInput | string | null
    lyrics?: NullableStringFieldUpdateOperationsInput | string | null
    releaseType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    UPC?: StringFieldUpdateOperationsInput | string
    ISRC?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    smartLink?: StringFieldUpdateOperationsInput | string
    Track?: TrackUpdateManyWithoutAudioNestedInput
    Streams?: StreamsUpdateManyWithoutAudioNestedInput
    StreamByCountry?: StreamByCountryUpdateManyWithoutAudioNestedInput
    MonthlyReport?: MonthlyReportUpdateManyWithoutAudioNestedInput
    CountryEarnings?: CountryEarningsUpdateManyWithoutAudioNestedInput
  }

  export type AudioUncheckedUpdateWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    artist?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    primaryGenre?: StringFieldUpdateOperationsInput | string
    secondaryGenre?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    copyrightHolder?: StringFieldUpdateOperationsInput | string
    copyrightYear?: StringFieldUpdateOperationsInput | string
    productionHolder?: StringFieldUpdateOperationsInput | string
    productionYear?: StringFieldUpdateOperationsInput | string
    releaseCover?: StringFieldUpdateOperationsInput | string
    releaseAudio?: NullableStringFieldUpdateOperationsInput | string | null
    releaseAudioLink?: NullableStringFieldUpdateOperationsInput | string | null
    lyrics?: NullableStringFieldUpdateOperationsInput | string | null
    releaseType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    UPC?: StringFieldUpdateOperationsInput | string
    ISRC?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    smartLink?: StringFieldUpdateOperationsInput | string
    Track?: TrackUncheckedUpdateManyWithoutAudioNestedInput
    Streams?: StreamsUncheckedUpdateManyWithoutAudioNestedInput
    StreamByCountry?: StreamByCountryUncheckedUpdateManyWithoutAudioNestedInput
    MonthlyReport?: MonthlyReportUncheckedUpdateManyWithoutAudioNestedInput
    CountryEarnings?: CountryEarningsUncheckedUpdateManyWithoutAudioNestedInput
  }

  export type AudioCreateWithoutCountryEarningsInput = {
    id?: string
    userId: string
    title: string
    artist: string
    releaseDate?: Date | string
    primaryGenre: string
    secondaryGenre: string
    language: string
    label: string
    copyrightHolder: string
    copyrightYear: string
    productionHolder: string
    productionYear: string
    releaseCover: string
    releaseAudio?: string | null
    releaseAudioLink?: string | null
    lyrics?: string | null
    releaseType: string
    status: string
    UPC?: string
    ISRC?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    smartLink?: string
    Track?: TrackCreateNestedManyWithoutAudioInput
    Streams?: StreamsCreateNestedManyWithoutAudioInput
    StreamByCountry?: StreamByCountryCreateNestedManyWithoutAudioInput
    Store?: StoreCreateNestedManyWithoutAudioInput
    MonthlyReport?: MonthlyReportCreateNestedManyWithoutAudioInput
  }

  export type AudioUncheckedCreateWithoutCountryEarningsInput = {
    id?: string
    userId: string
    title: string
    artist: string
    releaseDate?: Date | string
    primaryGenre: string
    secondaryGenre: string
    language: string
    label: string
    copyrightHolder: string
    copyrightYear: string
    productionHolder: string
    productionYear: string
    releaseCover: string
    releaseAudio?: string | null
    releaseAudioLink?: string | null
    lyrics?: string | null
    releaseType: string
    status: string
    UPC?: string
    ISRC?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    smartLink?: string
    Track?: TrackUncheckedCreateNestedManyWithoutAudioInput
    Streams?: StreamsUncheckedCreateNestedManyWithoutAudioInput
    StreamByCountry?: StreamByCountryUncheckedCreateNestedManyWithoutAudioInput
    Store?: StoreUncheckedCreateNestedManyWithoutAudioInput
    MonthlyReport?: MonthlyReportUncheckedCreateNestedManyWithoutAudioInput
  }

  export type AudioCreateOrConnectWithoutCountryEarningsInput = {
    where: AudioWhereUniqueInput
    create: XOR<AudioCreateWithoutCountryEarningsInput, AudioUncheckedCreateWithoutCountryEarningsInput>
  }

  export type AudioUpsertWithoutCountryEarningsInput = {
    update: XOR<AudioUpdateWithoutCountryEarningsInput, AudioUncheckedUpdateWithoutCountryEarningsInput>
    create: XOR<AudioCreateWithoutCountryEarningsInput, AudioUncheckedCreateWithoutCountryEarningsInput>
    where?: AudioWhereInput
  }

  export type AudioUpdateToOneWithWhereWithoutCountryEarningsInput = {
    where?: AudioWhereInput
    data: XOR<AudioUpdateWithoutCountryEarningsInput, AudioUncheckedUpdateWithoutCountryEarningsInput>
  }

  export type AudioUpdateWithoutCountryEarningsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    artist?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    primaryGenre?: StringFieldUpdateOperationsInput | string
    secondaryGenre?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    copyrightHolder?: StringFieldUpdateOperationsInput | string
    copyrightYear?: StringFieldUpdateOperationsInput | string
    productionHolder?: StringFieldUpdateOperationsInput | string
    productionYear?: StringFieldUpdateOperationsInput | string
    releaseCover?: StringFieldUpdateOperationsInput | string
    releaseAudio?: NullableStringFieldUpdateOperationsInput | string | null
    releaseAudioLink?: NullableStringFieldUpdateOperationsInput | string | null
    lyrics?: NullableStringFieldUpdateOperationsInput | string | null
    releaseType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    UPC?: StringFieldUpdateOperationsInput | string
    ISRC?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    smartLink?: StringFieldUpdateOperationsInput | string
    Track?: TrackUpdateManyWithoutAudioNestedInput
    Streams?: StreamsUpdateManyWithoutAudioNestedInput
    StreamByCountry?: StreamByCountryUpdateManyWithoutAudioNestedInput
    Store?: StoreUpdateManyWithoutAudioNestedInput
    MonthlyReport?: MonthlyReportUpdateManyWithoutAudioNestedInput
  }

  export type AudioUncheckedUpdateWithoutCountryEarningsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    artist?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    primaryGenre?: StringFieldUpdateOperationsInput | string
    secondaryGenre?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    copyrightHolder?: StringFieldUpdateOperationsInput | string
    copyrightYear?: StringFieldUpdateOperationsInput | string
    productionHolder?: StringFieldUpdateOperationsInput | string
    productionYear?: StringFieldUpdateOperationsInput | string
    releaseCover?: StringFieldUpdateOperationsInput | string
    releaseAudio?: NullableStringFieldUpdateOperationsInput | string | null
    releaseAudioLink?: NullableStringFieldUpdateOperationsInput | string | null
    lyrics?: NullableStringFieldUpdateOperationsInput | string | null
    releaseType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    UPC?: StringFieldUpdateOperationsInput | string
    ISRC?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    smartLink?: StringFieldUpdateOperationsInput | string
    Track?: TrackUncheckedUpdateManyWithoutAudioNestedInput
    Streams?: StreamsUncheckedUpdateManyWithoutAudioNestedInput
    StreamByCountry?: StreamByCountryUncheckedUpdateManyWithoutAudioNestedInput
    Store?: StoreUncheckedUpdateManyWithoutAudioNestedInput
    MonthlyReport?: MonthlyReportUncheckedUpdateManyWithoutAudioNestedInput
  }

  export type AudioCreateWithoutMonthlyReportInput = {
    id?: string
    userId: string
    title: string
    artist: string
    releaseDate?: Date | string
    primaryGenre: string
    secondaryGenre: string
    language: string
    label: string
    copyrightHolder: string
    copyrightYear: string
    productionHolder: string
    productionYear: string
    releaseCover: string
    releaseAudio?: string | null
    releaseAudioLink?: string | null
    lyrics?: string | null
    releaseType: string
    status: string
    UPC?: string
    ISRC?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    smartLink?: string
    Track?: TrackCreateNestedManyWithoutAudioInput
    Streams?: StreamsCreateNestedManyWithoutAudioInput
    StreamByCountry?: StreamByCountryCreateNestedManyWithoutAudioInput
    Store?: StoreCreateNestedManyWithoutAudioInput
    CountryEarnings?: CountryEarningsCreateNestedManyWithoutAudioInput
  }

  export type AudioUncheckedCreateWithoutMonthlyReportInput = {
    id?: string
    userId: string
    title: string
    artist: string
    releaseDate?: Date | string
    primaryGenre: string
    secondaryGenre: string
    language: string
    label: string
    copyrightHolder: string
    copyrightYear: string
    productionHolder: string
    productionYear: string
    releaseCover: string
    releaseAudio?: string | null
    releaseAudioLink?: string | null
    lyrics?: string | null
    releaseType: string
    status: string
    UPC?: string
    ISRC?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    smartLink?: string
    Track?: TrackUncheckedCreateNestedManyWithoutAudioInput
    Streams?: StreamsUncheckedCreateNestedManyWithoutAudioInput
    StreamByCountry?: StreamByCountryUncheckedCreateNestedManyWithoutAudioInput
    Store?: StoreUncheckedCreateNestedManyWithoutAudioInput
    CountryEarnings?: CountryEarningsUncheckedCreateNestedManyWithoutAudioInput
  }

  export type AudioCreateOrConnectWithoutMonthlyReportInput = {
    where: AudioWhereUniqueInput
    create: XOR<AudioCreateWithoutMonthlyReportInput, AudioUncheckedCreateWithoutMonthlyReportInput>
  }

  export type AudioUpsertWithoutMonthlyReportInput = {
    update: XOR<AudioUpdateWithoutMonthlyReportInput, AudioUncheckedUpdateWithoutMonthlyReportInput>
    create: XOR<AudioCreateWithoutMonthlyReportInput, AudioUncheckedCreateWithoutMonthlyReportInput>
    where?: AudioWhereInput
  }

  export type AudioUpdateToOneWithWhereWithoutMonthlyReportInput = {
    where?: AudioWhereInput
    data: XOR<AudioUpdateWithoutMonthlyReportInput, AudioUncheckedUpdateWithoutMonthlyReportInput>
  }

  export type AudioUpdateWithoutMonthlyReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    artist?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    primaryGenre?: StringFieldUpdateOperationsInput | string
    secondaryGenre?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    copyrightHolder?: StringFieldUpdateOperationsInput | string
    copyrightYear?: StringFieldUpdateOperationsInput | string
    productionHolder?: StringFieldUpdateOperationsInput | string
    productionYear?: StringFieldUpdateOperationsInput | string
    releaseCover?: StringFieldUpdateOperationsInput | string
    releaseAudio?: NullableStringFieldUpdateOperationsInput | string | null
    releaseAudioLink?: NullableStringFieldUpdateOperationsInput | string | null
    lyrics?: NullableStringFieldUpdateOperationsInput | string | null
    releaseType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    UPC?: StringFieldUpdateOperationsInput | string
    ISRC?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    smartLink?: StringFieldUpdateOperationsInput | string
    Track?: TrackUpdateManyWithoutAudioNestedInput
    Streams?: StreamsUpdateManyWithoutAudioNestedInput
    StreamByCountry?: StreamByCountryUpdateManyWithoutAudioNestedInput
    Store?: StoreUpdateManyWithoutAudioNestedInput
    CountryEarnings?: CountryEarningsUpdateManyWithoutAudioNestedInput
  }

  export type AudioUncheckedUpdateWithoutMonthlyReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    artist?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    primaryGenre?: StringFieldUpdateOperationsInput | string
    secondaryGenre?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    copyrightHolder?: StringFieldUpdateOperationsInput | string
    copyrightYear?: StringFieldUpdateOperationsInput | string
    productionHolder?: StringFieldUpdateOperationsInput | string
    productionYear?: StringFieldUpdateOperationsInput | string
    releaseCover?: StringFieldUpdateOperationsInput | string
    releaseAudio?: NullableStringFieldUpdateOperationsInput | string | null
    releaseAudioLink?: NullableStringFieldUpdateOperationsInput | string | null
    lyrics?: NullableStringFieldUpdateOperationsInput | string | null
    releaseType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    UPC?: StringFieldUpdateOperationsInput | string
    ISRC?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    smartLink?: StringFieldUpdateOperationsInput | string
    Track?: TrackUncheckedUpdateManyWithoutAudioNestedInput
    Streams?: StreamsUncheckedUpdateManyWithoutAudioNestedInput
    StreamByCountry?: StreamByCountryUncheckedUpdateManyWithoutAudioNestedInput
    Store?: StoreUncheckedUpdateManyWithoutAudioNestedInput
    CountryEarnings?: CountryEarningsUncheckedUpdateManyWithoutAudioNestedInput
  }

  export type TrackCreateManyAudioInput = {
    id?: string
    title: string
    lyrics?: string | null
    productionCredit?: string | null
    ISRC?: string | null
    trackNumber: number
    audioLink: string
  }

  export type StreamsCreateManyAudioInput = {
    id?: string
    dspId: string
    total: number
    date: Date | string
  }

  export type StreamByCountryCreateManyAudioInput = {
    id?: string
    countryId: string
    total: number
    date: Date | string
  }

  export type StoreCreateManyAudioInput = {
    id?: string
    name: string
    trackDownloads: number
    streams: number
    totalSales: number
    earnings: number
  }

  export type MonthlyReportCreateManyAudioInput = {
    id?: string
    month: number
    year: number
    trackDownloads: number
    streams: number
    totalSales: number
    earnings: number
    date: string
  }

  export type CountryEarningsCreateManyAudioInput = {
    id?: string
    name: string
    trackDownloads: number
    streams: number
    totalSales: number
    earnings: number
  }

  export type TrackUpdateWithoutAudioInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    lyrics?: NullableStringFieldUpdateOperationsInput | string | null
    productionCredit?: NullableStringFieldUpdateOperationsInput | string | null
    ISRC?: NullableStringFieldUpdateOperationsInput | string | null
    trackNumber?: IntFieldUpdateOperationsInput | number
    audioLink?: StringFieldUpdateOperationsInput | string
  }

  export type TrackUncheckedUpdateWithoutAudioInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    lyrics?: NullableStringFieldUpdateOperationsInput | string | null
    productionCredit?: NullableStringFieldUpdateOperationsInput | string | null
    ISRC?: NullableStringFieldUpdateOperationsInput | string | null
    trackNumber?: IntFieldUpdateOperationsInput | number
    audioLink?: StringFieldUpdateOperationsInput | string
  }

  export type TrackUncheckedUpdateManyWithoutAudioInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    lyrics?: NullableStringFieldUpdateOperationsInput | string | null
    productionCredit?: NullableStringFieldUpdateOperationsInput | string | null
    ISRC?: NullableStringFieldUpdateOperationsInput | string | null
    trackNumber?: IntFieldUpdateOperationsInput | number
    audioLink?: StringFieldUpdateOperationsInput | string
  }

  export type StreamsUpdateWithoutAudioInput = {
    id?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    dsp?: DSPUpdateOneRequiredWithoutStreamsNestedInput
  }

  export type StreamsUncheckedUpdateWithoutAudioInput = {
    id?: StringFieldUpdateOperationsInput | string
    dspId?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StreamsUncheckedUpdateManyWithoutAudioInput = {
    id?: StringFieldUpdateOperationsInput | string
    dspId?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StreamByCountryUpdateWithoutAudioInput = {
    id?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: CountryUpdateOneRequiredWithoutStreamsByCountryNestedInput
  }

  export type StreamByCountryUncheckedUpdateWithoutAudioInput = {
    id?: StringFieldUpdateOperationsInput | string
    countryId?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StreamByCountryUncheckedUpdateManyWithoutAudioInput = {
    id?: StringFieldUpdateOperationsInput | string
    countryId?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoreUpdateWithoutAudioInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    trackDownloads?: IntFieldUpdateOperationsInput | number
    streams?: IntFieldUpdateOperationsInput | number
    totalSales?: IntFieldUpdateOperationsInput | number
    earnings?: FloatFieldUpdateOperationsInput | number
  }

  export type StoreUncheckedUpdateWithoutAudioInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    trackDownloads?: IntFieldUpdateOperationsInput | number
    streams?: IntFieldUpdateOperationsInput | number
    totalSales?: IntFieldUpdateOperationsInput | number
    earnings?: FloatFieldUpdateOperationsInput | number
  }

  export type StoreUncheckedUpdateManyWithoutAudioInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    trackDownloads?: IntFieldUpdateOperationsInput | number
    streams?: IntFieldUpdateOperationsInput | number
    totalSales?: IntFieldUpdateOperationsInput | number
    earnings?: FloatFieldUpdateOperationsInput | number
  }

  export type MonthlyReportUpdateWithoutAudioInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    trackDownloads?: IntFieldUpdateOperationsInput | number
    streams?: IntFieldUpdateOperationsInput | number
    totalSales?: IntFieldUpdateOperationsInput | number
    earnings?: FloatFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
  }

  export type MonthlyReportUncheckedUpdateWithoutAudioInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    trackDownloads?: IntFieldUpdateOperationsInput | number
    streams?: IntFieldUpdateOperationsInput | number
    totalSales?: IntFieldUpdateOperationsInput | number
    earnings?: FloatFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
  }

  export type MonthlyReportUncheckedUpdateManyWithoutAudioInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    trackDownloads?: IntFieldUpdateOperationsInput | number
    streams?: IntFieldUpdateOperationsInput | number
    totalSales?: IntFieldUpdateOperationsInput | number
    earnings?: FloatFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
  }

  export type CountryEarningsUpdateWithoutAudioInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    trackDownloads?: IntFieldUpdateOperationsInput | number
    streams?: IntFieldUpdateOperationsInput | number
    totalSales?: IntFieldUpdateOperationsInput | number
    earnings?: FloatFieldUpdateOperationsInput | number
  }

  export type CountryEarningsUncheckedUpdateWithoutAudioInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    trackDownloads?: IntFieldUpdateOperationsInput | number
    streams?: IntFieldUpdateOperationsInput | number
    totalSales?: IntFieldUpdateOperationsInput | number
    earnings?: FloatFieldUpdateOperationsInput | number
  }

  export type CountryEarningsUncheckedUpdateManyWithoutAudioInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    trackDownloads?: IntFieldUpdateOperationsInput | number
    streams?: IntFieldUpdateOperationsInput | number
    totalSales?: IntFieldUpdateOperationsInput | number
    earnings?: FloatFieldUpdateOperationsInput | number
  }

  export type StreamsCreateManyDspInput = {
    id?: string
    total: number
    date: Date | string
    audioId: string
  }

  export type StreamsUpdateWithoutDspInput = {
    id?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    Audio?: AudioUpdateOneRequiredWithoutStreamsNestedInput
  }

  export type StreamsUncheckedUpdateWithoutDspInput = {
    id?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    audioId?: StringFieldUpdateOperationsInput | string
  }

  export type StreamsUncheckedUpdateManyWithoutDspInput = {
    id?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    audioId?: StringFieldUpdateOperationsInput | string
  }

  export type StreamByCountryCreateManyCountryInput = {
    id?: string
    total: number
    date: Date | string
    audioId: string
  }

  export type StreamByCountryUpdateWithoutCountryInput = {
    id?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    audio?: AudioUpdateOneRequiredWithoutStreamByCountryNestedInput
  }

  export type StreamByCountryUncheckedUpdateWithoutCountryInput = {
    id?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    audioId?: StringFieldUpdateOperationsInput | string
  }

  export type StreamByCountryUncheckedUpdateManyWithoutCountryInput = {
    id?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    audioId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use AudioCountOutputTypeDefaultArgs instead
     */
    export type AudioCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AudioCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DSPCountOutputTypeDefaultArgs instead
     */
    export type DSPCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DSPCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CountryCountOutputTypeDefaultArgs instead
     */
    export type CountryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CountryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AudioDefaultArgs instead
     */
    export type AudioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AudioDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TrackDefaultArgs instead
     */
    export type TrackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TrackDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DSPDefaultArgs instead
     */
    export type DSPArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DSPDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StreamsDefaultArgs instead
     */
    export type StreamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StreamsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CountryDefaultArgs instead
     */
    export type CountryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CountryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StreamByCountryDefaultArgs instead
     */
    export type StreamByCountryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StreamByCountryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StoreDefaultArgs instead
     */
    export type StoreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StoreDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CountryEarningsDefaultArgs instead
     */
    export type CountryEarningsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CountryEarningsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MonthlyReportDefaultArgs instead
     */
    export type MonthlyReportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MonthlyReportDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}