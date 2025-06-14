
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
 * Model FeedbackAttachment
 * 
 */
export type FeedbackAttachment = $Result.DefaultSelection<Prisma.$FeedbackAttachmentPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more FeedbackAttachments
 * const feedbackAttachments = await prisma.feedbackAttachment.findMany()
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
   * // Fetch zero or more FeedbackAttachments
   * const feedbackAttachments = await prisma.feedbackAttachment.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.feedbackAttachment`: Exposes CRUD operations for the **FeedbackAttachment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FeedbackAttachments
    * const feedbackAttachments = await prisma.feedbackAttachment.findMany()
    * ```
    */
  get feedbackAttachment(): Prisma.FeedbackAttachmentDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    FeedbackAttachment: 'FeedbackAttachment'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "feedbackAttachment"
      txIsolationLevel: never
    }
    model: {
      FeedbackAttachment: {
        payload: Prisma.$FeedbackAttachmentPayload<ExtArgs>
        fields: Prisma.FeedbackAttachmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FeedbackAttachmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackAttachmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FeedbackAttachmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackAttachmentPayload>
          }
          findFirst: {
            args: Prisma.FeedbackAttachmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackAttachmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FeedbackAttachmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackAttachmentPayload>
          }
          findMany: {
            args: Prisma.FeedbackAttachmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackAttachmentPayload>[]
          }
          create: {
            args: Prisma.FeedbackAttachmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackAttachmentPayload>
          }
          createMany: {
            args: Prisma.FeedbackAttachmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FeedbackAttachmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackAttachmentPayload>
          }
          update: {
            args: Prisma.FeedbackAttachmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackAttachmentPayload>
          }
          deleteMany: {
            args: Prisma.FeedbackAttachmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FeedbackAttachmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FeedbackAttachmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackAttachmentPayload>
          }
          aggregate: {
            args: Prisma.FeedbackAttachmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFeedbackAttachment>
          }
          groupBy: {
            args: Prisma.FeedbackAttachmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<FeedbackAttachmentGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.FeedbackAttachmentFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.FeedbackAttachmentAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.FeedbackAttachmentCountArgs<ExtArgs>
            result: $Utils.Optional<FeedbackAttachmentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
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
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    feedbackAttachment?: FeedbackAttachmentOmit
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
    | 'updateManyAndReturn'
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
   * Models
   */

  /**
   * Model FeedbackAttachment
   */

  export type AggregateFeedbackAttachment = {
    _count: FeedbackAttachmentCountAggregateOutputType | null
    _min: FeedbackAttachmentMinAggregateOutputType | null
    _max: FeedbackAttachmentMaxAggregateOutputType | null
  }

  export type FeedbackAttachmentMinAggregateOutputType = {
    id: string | null
    feedback_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type FeedbackAttachmentMaxAggregateOutputType = {
    id: string | null
    feedback_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type FeedbackAttachmentCountAggregateOutputType = {
    id: number
    feedback_id: number
    attachment_link: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type FeedbackAttachmentMinAggregateInputType = {
    id?: true
    feedback_id?: true
    created_at?: true
    updated_at?: true
  }

  export type FeedbackAttachmentMaxAggregateInputType = {
    id?: true
    feedback_id?: true
    created_at?: true
    updated_at?: true
  }

  export type FeedbackAttachmentCountAggregateInputType = {
    id?: true
    feedback_id?: true
    attachment_link?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type FeedbackAttachmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FeedbackAttachment to aggregate.
     */
    where?: FeedbackAttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeedbackAttachments to fetch.
     */
    orderBy?: FeedbackAttachmentOrderByWithRelationInput | FeedbackAttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FeedbackAttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeedbackAttachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeedbackAttachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FeedbackAttachments
    **/
    _count?: true | FeedbackAttachmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeedbackAttachmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeedbackAttachmentMaxAggregateInputType
  }

  export type GetFeedbackAttachmentAggregateType<T extends FeedbackAttachmentAggregateArgs> = {
        [P in keyof T & keyof AggregateFeedbackAttachment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeedbackAttachment[P]>
      : GetScalarType<T[P], AggregateFeedbackAttachment[P]>
  }




  export type FeedbackAttachmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeedbackAttachmentWhereInput
    orderBy?: FeedbackAttachmentOrderByWithAggregationInput | FeedbackAttachmentOrderByWithAggregationInput[]
    by: FeedbackAttachmentScalarFieldEnum[] | FeedbackAttachmentScalarFieldEnum
    having?: FeedbackAttachmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeedbackAttachmentCountAggregateInputType | true
    _min?: FeedbackAttachmentMinAggregateInputType
    _max?: FeedbackAttachmentMaxAggregateInputType
  }

  export type FeedbackAttachmentGroupByOutputType = {
    id: string
    feedback_id: string
    attachment_link: string[]
    created_at: Date
    updated_at: Date
    _count: FeedbackAttachmentCountAggregateOutputType | null
    _min: FeedbackAttachmentMinAggregateOutputType | null
    _max: FeedbackAttachmentMaxAggregateOutputType | null
  }

  type GetFeedbackAttachmentGroupByPayload<T extends FeedbackAttachmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeedbackAttachmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeedbackAttachmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeedbackAttachmentGroupByOutputType[P]>
            : GetScalarType<T[P], FeedbackAttachmentGroupByOutputType[P]>
        }
      >
    >


  export type FeedbackAttachmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    feedback_id?: boolean
    attachment_link?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["feedbackAttachment"]>



  export type FeedbackAttachmentSelectScalar = {
    id?: boolean
    feedback_id?: boolean
    attachment_link?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type FeedbackAttachmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "feedback_id" | "attachment_link" | "created_at" | "updated_at", ExtArgs["result"]["feedbackAttachment"]>

  export type $FeedbackAttachmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FeedbackAttachment"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      feedback_id: string
      attachment_link: string[]
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["feedbackAttachment"]>
    composites: {}
  }

  type FeedbackAttachmentGetPayload<S extends boolean | null | undefined | FeedbackAttachmentDefaultArgs> = $Result.GetResult<Prisma.$FeedbackAttachmentPayload, S>

  type FeedbackAttachmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FeedbackAttachmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FeedbackAttachmentCountAggregateInputType | true
    }

  export interface FeedbackAttachmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FeedbackAttachment'], meta: { name: 'FeedbackAttachment' } }
    /**
     * Find zero or one FeedbackAttachment that matches the filter.
     * @param {FeedbackAttachmentFindUniqueArgs} args - Arguments to find a FeedbackAttachment
     * @example
     * // Get one FeedbackAttachment
     * const feedbackAttachment = await prisma.feedbackAttachment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FeedbackAttachmentFindUniqueArgs>(args: SelectSubset<T, FeedbackAttachmentFindUniqueArgs<ExtArgs>>): Prisma__FeedbackAttachmentClient<$Result.GetResult<Prisma.$FeedbackAttachmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FeedbackAttachment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FeedbackAttachmentFindUniqueOrThrowArgs} args - Arguments to find a FeedbackAttachment
     * @example
     * // Get one FeedbackAttachment
     * const feedbackAttachment = await prisma.feedbackAttachment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FeedbackAttachmentFindUniqueOrThrowArgs>(args: SelectSubset<T, FeedbackAttachmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FeedbackAttachmentClient<$Result.GetResult<Prisma.$FeedbackAttachmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FeedbackAttachment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackAttachmentFindFirstArgs} args - Arguments to find a FeedbackAttachment
     * @example
     * // Get one FeedbackAttachment
     * const feedbackAttachment = await prisma.feedbackAttachment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FeedbackAttachmentFindFirstArgs>(args?: SelectSubset<T, FeedbackAttachmentFindFirstArgs<ExtArgs>>): Prisma__FeedbackAttachmentClient<$Result.GetResult<Prisma.$FeedbackAttachmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FeedbackAttachment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackAttachmentFindFirstOrThrowArgs} args - Arguments to find a FeedbackAttachment
     * @example
     * // Get one FeedbackAttachment
     * const feedbackAttachment = await prisma.feedbackAttachment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FeedbackAttachmentFindFirstOrThrowArgs>(args?: SelectSubset<T, FeedbackAttachmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__FeedbackAttachmentClient<$Result.GetResult<Prisma.$FeedbackAttachmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FeedbackAttachments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackAttachmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FeedbackAttachments
     * const feedbackAttachments = await prisma.feedbackAttachment.findMany()
     * 
     * // Get first 10 FeedbackAttachments
     * const feedbackAttachments = await prisma.feedbackAttachment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const feedbackAttachmentWithIdOnly = await prisma.feedbackAttachment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FeedbackAttachmentFindManyArgs>(args?: SelectSubset<T, FeedbackAttachmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackAttachmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FeedbackAttachment.
     * @param {FeedbackAttachmentCreateArgs} args - Arguments to create a FeedbackAttachment.
     * @example
     * // Create one FeedbackAttachment
     * const FeedbackAttachment = await prisma.feedbackAttachment.create({
     *   data: {
     *     // ... data to create a FeedbackAttachment
     *   }
     * })
     * 
     */
    create<T extends FeedbackAttachmentCreateArgs>(args: SelectSubset<T, FeedbackAttachmentCreateArgs<ExtArgs>>): Prisma__FeedbackAttachmentClient<$Result.GetResult<Prisma.$FeedbackAttachmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FeedbackAttachments.
     * @param {FeedbackAttachmentCreateManyArgs} args - Arguments to create many FeedbackAttachments.
     * @example
     * // Create many FeedbackAttachments
     * const feedbackAttachment = await prisma.feedbackAttachment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FeedbackAttachmentCreateManyArgs>(args?: SelectSubset<T, FeedbackAttachmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FeedbackAttachment.
     * @param {FeedbackAttachmentDeleteArgs} args - Arguments to delete one FeedbackAttachment.
     * @example
     * // Delete one FeedbackAttachment
     * const FeedbackAttachment = await prisma.feedbackAttachment.delete({
     *   where: {
     *     // ... filter to delete one FeedbackAttachment
     *   }
     * })
     * 
     */
    delete<T extends FeedbackAttachmentDeleteArgs>(args: SelectSubset<T, FeedbackAttachmentDeleteArgs<ExtArgs>>): Prisma__FeedbackAttachmentClient<$Result.GetResult<Prisma.$FeedbackAttachmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FeedbackAttachment.
     * @param {FeedbackAttachmentUpdateArgs} args - Arguments to update one FeedbackAttachment.
     * @example
     * // Update one FeedbackAttachment
     * const feedbackAttachment = await prisma.feedbackAttachment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FeedbackAttachmentUpdateArgs>(args: SelectSubset<T, FeedbackAttachmentUpdateArgs<ExtArgs>>): Prisma__FeedbackAttachmentClient<$Result.GetResult<Prisma.$FeedbackAttachmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FeedbackAttachments.
     * @param {FeedbackAttachmentDeleteManyArgs} args - Arguments to filter FeedbackAttachments to delete.
     * @example
     * // Delete a few FeedbackAttachments
     * const { count } = await prisma.feedbackAttachment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FeedbackAttachmentDeleteManyArgs>(args?: SelectSubset<T, FeedbackAttachmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FeedbackAttachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackAttachmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FeedbackAttachments
     * const feedbackAttachment = await prisma.feedbackAttachment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FeedbackAttachmentUpdateManyArgs>(args: SelectSubset<T, FeedbackAttachmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FeedbackAttachment.
     * @param {FeedbackAttachmentUpsertArgs} args - Arguments to update or create a FeedbackAttachment.
     * @example
     * // Update or create a FeedbackAttachment
     * const feedbackAttachment = await prisma.feedbackAttachment.upsert({
     *   create: {
     *     // ... data to create a FeedbackAttachment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FeedbackAttachment we want to update
     *   }
     * })
     */
    upsert<T extends FeedbackAttachmentUpsertArgs>(args: SelectSubset<T, FeedbackAttachmentUpsertArgs<ExtArgs>>): Prisma__FeedbackAttachmentClient<$Result.GetResult<Prisma.$FeedbackAttachmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FeedbackAttachments that matches the filter.
     * @param {FeedbackAttachmentFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const feedbackAttachment = await prisma.feedbackAttachment.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: FeedbackAttachmentFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a FeedbackAttachment.
     * @param {FeedbackAttachmentAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const feedbackAttachment = await prisma.feedbackAttachment.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: FeedbackAttachmentAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of FeedbackAttachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackAttachmentCountArgs} args - Arguments to filter FeedbackAttachments to count.
     * @example
     * // Count the number of FeedbackAttachments
     * const count = await prisma.feedbackAttachment.count({
     *   where: {
     *     // ... the filter for the FeedbackAttachments we want to count
     *   }
     * })
    **/
    count<T extends FeedbackAttachmentCountArgs>(
      args?: Subset<T, FeedbackAttachmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeedbackAttachmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FeedbackAttachment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackAttachmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FeedbackAttachmentAggregateArgs>(args: Subset<T, FeedbackAttachmentAggregateArgs>): Prisma.PrismaPromise<GetFeedbackAttachmentAggregateType<T>>

    /**
     * Group by FeedbackAttachment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackAttachmentGroupByArgs} args - Group by arguments.
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
      T extends FeedbackAttachmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeedbackAttachmentGroupByArgs['orderBy'] }
        : { orderBy?: FeedbackAttachmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FeedbackAttachmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeedbackAttachmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FeedbackAttachment model
   */
  readonly fields: FeedbackAttachmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FeedbackAttachment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FeedbackAttachmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the FeedbackAttachment model
   */
  interface FeedbackAttachmentFieldRefs {
    readonly id: FieldRef<"FeedbackAttachment", 'String'>
    readonly feedback_id: FieldRef<"FeedbackAttachment", 'String'>
    readonly attachment_link: FieldRef<"FeedbackAttachment", 'String[]'>
    readonly created_at: FieldRef<"FeedbackAttachment", 'DateTime'>
    readonly updated_at: FieldRef<"FeedbackAttachment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FeedbackAttachment findUnique
   */
  export type FeedbackAttachmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackAttachment
     */
    select?: FeedbackAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedbackAttachment
     */
    omit?: FeedbackAttachmentOmit<ExtArgs> | null
    /**
     * Filter, which FeedbackAttachment to fetch.
     */
    where: FeedbackAttachmentWhereUniqueInput
  }

  /**
   * FeedbackAttachment findUniqueOrThrow
   */
  export type FeedbackAttachmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackAttachment
     */
    select?: FeedbackAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedbackAttachment
     */
    omit?: FeedbackAttachmentOmit<ExtArgs> | null
    /**
     * Filter, which FeedbackAttachment to fetch.
     */
    where: FeedbackAttachmentWhereUniqueInput
  }

  /**
   * FeedbackAttachment findFirst
   */
  export type FeedbackAttachmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackAttachment
     */
    select?: FeedbackAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedbackAttachment
     */
    omit?: FeedbackAttachmentOmit<ExtArgs> | null
    /**
     * Filter, which FeedbackAttachment to fetch.
     */
    where?: FeedbackAttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeedbackAttachments to fetch.
     */
    orderBy?: FeedbackAttachmentOrderByWithRelationInput | FeedbackAttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FeedbackAttachments.
     */
    cursor?: FeedbackAttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeedbackAttachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeedbackAttachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FeedbackAttachments.
     */
    distinct?: FeedbackAttachmentScalarFieldEnum | FeedbackAttachmentScalarFieldEnum[]
  }

  /**
   * FeedbackAttachment findFirstOrThrow
   */
  export type FeedbackAttachmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackAttachment
     */
    select?: FeedbackAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedbackAttachment
     */
    omit?: FeedbackAttachmentOmit<ExtArgs> | null
    /**
     * Filter, which FeedbackAttachment to fetch.
     */
    where?: FeedbackAttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeedbackAttachments to fetch.
     */
    orderBy?: FeedbackAttachmentOrderByWithRelationInput | FeedbackAttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FeedbackAttachments.
     */
    cursor?: FeedbackAttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeedbackAttachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeedbackAttachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FeedbackAttachments.
     */
    distinct?: FeedbackAttachmentScalarFieldEnum | FeedbackAttachmentScalarFieldEnum[]
  }

  /**
   * FeedbackAttachment findMany
   */
  export type FeedbackAttachmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackAttachment
     */
    select?: FeedbackAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedbackAttachment
     */
    omit?: FeedbackAttachmentOmit<ExtArgs> | null
    /**
     * Filter, which FeedbackAttachments to fetch.
     */
    where?: FeedbackAttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeedbackAttachments to fetch.
     */
    orderBy?: FeedbackAttachmentOrderByWithRelationInput | FeedbackAttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FeedbackAttachments.
     */
    cursor?: FeedbackAttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeedbackAttachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeedbackAttachments.
     */
    skip?: number
    distinct?: FeedbackAttachmentScalarFieldEnum | FeedbackAttachmentScalarFieldEnum[]
  }

  /**
   * FeedbackAttachment create
   */
  export type FeedbackAttachmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackAttachment
     */
    select?: FeedbackAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedbackAttachment
     */
    omit?: FeedbackAttachmentOmit<ExtArgs> | null
    /**
     * The data needed to create a FeedbackAttachment.
     */
    data: XOR<FeedbackAttachmentCreateInput, FeedbackAttachmentUncheckedCreateInput>
  }

  /**
   * FeedbackAttachment createMany
   */
  export type FeedbackAttachmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FeedbackAttachments.
     */
    data: FeedbackAttachmentCreateManyInput | FeedbackAttachmentCreateManyInput[]
  }

  /**
   * FeedbackAttachment update
   */
  export type FeedbackAttachmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackAttachment
     */
    select?: FeedbackAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedbackAttachment
     */
    omit?: FeedbackAttachmentOmit<ExtArgs> | null
    /**
     * The data needed to update a FeedbackAttachment.
     */
    data: XOR<FeedbackAttachmentUpdateInput, FeedbackAttachmentUncheckedUpdateInput>
    /**
     * Choose, which FeedbackAttachment to update.
     */
    where: FeedbackAttachmentWhereUniqueInput
  }

  /**
   * FeedbackAttachment updateMany
   */
  export type FeedbackAttachmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FeedbackAttachments.
     */
    data: XOR<FeedbackAttachmentUpdateManyMutationInput, FeedbackAttachmentUncheckedUpdateManyInput>
    /**
     * Filter which FeedbackAttachments to update
     */
    where?: FeedbackAttachmentWhereInput
    /**
     * Limit how many FeedbackAttachments to update.
     */
    limit?: number
  }

  /**
   * FeedbackAttachment upsert
   */
  export type FeedbackAttachmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackAttachment
     */
    select?: FeedbackAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedbackAttachment
     */
    omit?: FeedbackAttachmentOmit<ExtArgs> | null
    /**
     * The filter to search for the FeedbackAttachment to update in case it exists.
     */
    where: FeedbackAttachmentWhereUniqueInput
    /**
     * In case the FeedbackAttachment found by the `where` argument doesn't exist, create a new FeedbackAttachment with this data.
     */
    create: XOR<FeedbackAttachmentCreateInput, FeedbackAttachmentUncheckedCreateInput>
    /**
     * In case the FeedbackAttachment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FeedbackAttachmentUpdateInput, FeedbackAttachmentUncheckedUpdateInput>
  }

  /**
   * FeedbackAttachment delete
   */
  export type FeedbackAttachmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackAttachment
     */
    select?: FeedbackAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedbackAttachment
     */
    omit?: FeedbackAttachmentOmit<ExtArgs> | null
    /**
     * Filter which FeedbackAttachment to delete.
     */
    where: FeedbackAttachmentWhereUniqueInput
  }

  /**
   * FeedbackAttachment deleteMany
   */
  export type FeedbackAttachmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FeedbackAttachments to delete
     */
    where?: FeedbackAttachmentWhereInput
    /**
     * Limit how many FeedbackAttachments to delete.
     */
    limit?: number
  }

  /**
   * FeedbackAttachment findRaw
   */
  export type FeedbackAttachmentFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * FeedbackAttachment aggregateRaw
   */
  export type FeedbackAttachmentAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * FeedbackAttachment without action
   */
  export type FeedbackAttachmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackAttachment
     */
    select?: FeedbackAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedbackAttachment
     */
    omit?: FeedbackAttachmentOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const FeedbackAttachmentScalarFieldEnum: {
    id: 'id',
    feedback_id: 'feedback_id',
    attachment_link: 'attachment_link',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type FeedbackAttachmentScalarFieldEnum = (typeof FeedbackAttachmentScalarFieldEnum)[keyof typeof FeedbackAttachmentScalarFieldEnum]


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
   * Deep Input Types
   */


  export type FeedbackAttachmentWhereInput = {
    AND?: FeedbackAttachmentWhereInput | FeedbackAttachmentWhereInput[]
    OR?: FeedbackAttachmentWhereInput[]
    NOT?: FeedbackAttachmentWhereInput | FeedbackAttachmentWhereInput[]
    id?: StringFilter<"FeedbackAttachment"> | string
    feedback_id?: StringFilter<"FeedbackAttachment"> | string
    attachment_link?: StringNullableListFilter<"FeedbackAttachment">
    created_at?: DateTimeFilter<"FeedbackAttachment"> | Date | string
    updated_at?: DateTimeFilter<"FeedbackAttachment"> | Date | string
  }

  export type FeedbackAttachmentOrderByWithRelationInput = {
    id?: SortOrder
    feedback_id?: SortOrder
    attachment_link?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type FeedbackAttachmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FeedbackAttachmentWhereInput | FeedbackAttachmentWhereInput[]
    OR?: FeedbackAttachmentWhereInput[]
    NOT?: FeedbackAttachmentWhereInput | FeedbackAttachmentWhereInput[]
    feedback_id?: StringFilter<"FeedbackAttachment"> | string
    attachment_link?: StringNullableListFilter<"FeedbackAttachment">
    created_at?: DateTimeFilter<"FeedbackAttachment"> | Date | string
    updated_at?: DateTimeFilter<"FeedbackAttachment"> | Date | string
  }, "id">

  export type FeedbackAttachmentOrderByWithAggregationInput = {
    id?: SortOrder
    feedback_id?: SortOrder
    attachment_link?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: FeedbackAttachmentCountOrderByAggregateInput
    _max?: FeedbackAttachmentMaxOrderByAggregateInput
    _min?: FeedbackAttachmentMinOrderByAggregateInput
  }

  export type FeedbackAttachmentScalarWhereWithAggregatesInput = {
    AND?: FeedbackAttachmentScalarWhereWithAggregatesInput | FeedbackAttachmentScalarWhereWithAggregatesInput[]
    OR?: FeedbackAttachmentScalarWhereWithAggregatesInput[]
    NOT?: FeedbackAttachmentScalarWhereWithAggregatesInput | FeedbackAttachmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FeedbackAttachment"> | string
    feedback_id?: StringWithAggregatesFilter<"FeedbackAttachment"> | string
    attachment_link?: StringNullableListFilter<"FeedbackAttachment">
    created_at?: DateTimeWithAggregatesFilter<"FeedbackAttachment"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"FeedbackAttachment"> | Date | string
  }

  export type FeedbackAttachmentCreateInput = {
    id?: string
    feedback_id: string
    attachment_link?: FeedbackAttachmentCreateattachment_linkInput | string[]
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type FeedbackAttachmentUncheckedCreateInput = {
    id?: string
    feedback_id: string
    attachment_link?: FeedbackAttachmentCreateattachment_linkInput | string[]
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type FeedbackAttachmentUpdateInput = {
    feedback_id?: StringFieldUpdateOperationsInput | string
    attachment_link?: FeedbackAttachmentUpdateattachment_linkInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackAttachmentUncheckedUpdateInput = {
    feedback_id?: StringFieldUpdateOperationsInput | string
    attachment_link?: FeedbackAttachmentUpdateattachment_linkInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackAttachmentCreateManyInput = {
    id?: string
    feedback_id: string
    attachment_link?: FeedbackAttachmentCreateattachment_linkInput | string[]
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type FeedbackAttachmentUpdateManyMutationInput = {
    feedback_id?: StringFieldUpdateOperationsInput | string
    attachment_link?: FeedbackAttachmentUpdateattachment_linkInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackAttachmentUncheckedUpdateManyInput = {
    feedback_id?: StringFieldUpdateOperationsInput | string
    attachment_link?: FeedbackAttachmentUpdateattachment_linkInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
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

  export type FeedbackAttachmentCountOrderByAggregateInput = {
    id?: SortOrder
    feedback_id?: SortOrder
    attachment_link?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type FeedbackAttachmentMaxOrderByAggregateInput = {
    id?: SortOrder
    feedback_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type FeedbackAttachmentMinOrderByAggregateInput = {
    id?: SortOrder
    feedback_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
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

  export type FeedbackAttachmentCreateattachment_linkInput = {
    set: string[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type FeedbackAttachmentUpdateattachment_linkInput = {
    set?: string[]
    push?: string | string[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
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