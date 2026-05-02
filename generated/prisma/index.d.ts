
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Teaching
 * 
 */
export type Teaching = $Result.DefaultSelection<Prisma.$TeachingPayload>
/**
 * Model TeachingAttachment
 * 
 */
export type TeachingAttachment = $Result.DefaultSelection<Prisma.$TeachingAttachmentPayload>
/**
 * Model Blog
 * 
 */
export type Blog = $Result.DefaultSelection<Prisma.$BlogPayload>
/**
 * Model BlogAttachment
 * 
 */
export type BlogAttachment = $Result.DefaultSelection<Prisma.$BlogAttachmentPayload>
/**
 * Model Event
 * 
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>
/**
 * Model Manifesto
 * 
 */
export type Manifesto = $Result.DefaultSelection<Prisma.$ManifestoPayload>
/**
 * Model MembershipRequest
 * 
 */
export type MembershipRequest = $Result.DefaultSelection<Prisma.$MembershipRequestPayload>
/**
 * Model MembershipNotification
 * 
 */
export type MembershipNotification = $Result.DefaultSelection<Prisma.$MembershipNotificationPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Verification
 * 
 */
export type Verification = $Result.DefaultSelection<Prisma.$VerificationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const BlogStatus: {
  DRAFT: 'DRAFT',
  PUBLISHED: 'PUBLISHED'
};

export type BlogStatus = (typeof BlogStatus)[keyof typeof BlogStatus]


export const MembershipStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  EXPIRED: 'EXPIRED',
  REJECTED: 'REJECTED'
};

export type MembershipStatus = (typeof MembershipStatus)[keyof typeof MembershipStatus]

}

export type BlogStatus = $Enums.BlogStatus

export const BlogStatus: typeof $Enums.BlogStatus

export type MembershipStatus = $Enums.MembershipStatus

export const MembershipStatus: typeof $Enums.MembershipStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Teachings
 * const teachings = await prisma.teaching.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Teachings
   * const teachings = await prisma.teaching.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.teaching`: Exposes CRUD operations for the **Teaching** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teachings
    * const teachings = await prisma.teaching.findMany()
    * ```
    */
  get teaching(): Prisma.TeachingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teachingAttachment`: Exposes CRUD operations for the **TeachingAttachment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TeachingAttachments
    * const teachingAttachments = await prisma.teachingAttachment.findMany()
    * ```
    */
  get teachingAttachment(): Prisma.TeachingAttachmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blog`: Exposes CRUD operations for the **Blog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Blogs
    * const blogs = await prisma.blog.findMany()
    * ```
    */
  get blog(): Prisma.BlogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blogAttachment`: Exposes CRUD operations for the **BlogAttachment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BlogAttachments
    * const blogAttachments = await prisma.blogAttachment.findMany()
    * ```
    */
  get blogAttachment(): Prisma.BlogAttachmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.EventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.manifesto`: Exposes CRUD operations for the **Manifesto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Manifestos
    * const manifestos = await prisma.manifesto.findMany()
    * ```
    */
  get manifesto(): Prisma.ManifestoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.membershipRequest`: Exposes CRUD operations for the **MembershipRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MembershipRequests
    * const membershipRequests = await prisma.membershipRequest.findMany()
    * ```
    */
  get membershipRequest(): Prisma.MembershipRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.membershipNotification`: Exposes CRUD operations for the **MembershipNotification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MembershipNotifications
    * const membershipNotifications = await prisma.membershipNotification.findMany()
    * ```
    */
  get membershipNotification(): Prisma.MembershipNotificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verification`: Exposes CRUD operations for the **Verification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Verifications
    * const verifications = await prisma.verification.findMany()
    * ```
    */
  get verification(): Prisma.VerificationDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.7.0
   * Query Engine version: 75cbdc1eb7150937890ad5465d861175c6624711
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Teaching: 'Teaching',
    TeachingAttachment: 'TeachingAttachment',
    Blog: 'Blog',
    BlogAttachment: 'BlogAttachment',
    Event: 'Event',
    Manifesto: 'Manifesto',
    MembershipRequest: 'MembershipRequest',
    MembershipNotification: 'MembershipNotification',
    User: 'User',
    Session: 'Session',
    Account: 'Account',
    Verification: 'Verification'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "teaching" | "teachingAttachment" | "blog" | "blogAttachment" | "event" | "manifesto" | "membershipRequest" | "membershipNotification" | "user" | "session" | "account" | "verification"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Teaching: {
        payload: Prisma.$TeachingPayload<ExtArgs>
        fields: Prisma.TeachingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeachingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeachingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingPayload>
          }
          findFirst: {
            args: Prisma.TeachingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeachingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingPayload>
          }
          findMany: {
            args: Prisma.TeachingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingPayload>[]
          }
          create: {
            args: Prisma.TeachingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingPayload>
          }
          createMany: {
            args: Prisma.TeachingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeachingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingPayload>[]
          }
          delete: {
            args: Prisma.TeachingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingPayload>
          }
          update: {
            args: Prisma.TeachingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingPayload>
          }
          deleteMany: {
            args: Prisma.TeachingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeachingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeachingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingPayload>[]
          }
          upsert: {
            args: Prisma.TeachingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingPayload>
          }
          aggregate: {
            args: Prisma.TeachingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeaching>
          }
          groupBy: {
            args: Prisma.TeachingGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeachingGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeachingCountArgs<ExtArgs>
            result: $Utils.Optional<TeachingCountAggregateOutputType> | number
          }
        }
      }
      TeachingAttachment: {
        payload: Prisma.$TeachingAttachmentPayload<ExtArgs>
        fields: Prisma.TeachingAttachmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeachingAttachmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingAttachmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeachingAttachmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingAttachmentPayload>
          }
          findFirst: {
            args: Prisma.TeachingAttachmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingAttachmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeachingAttachmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingAttachmentPayload>
          }
          findMany: {
            args: Prisma.TeachingAttachmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingAttachmentPayload>[]
          }
          create: {
            args: Prisma.TeachingAttachmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingAttachmentPayload>
          }
          createMany: {
            args: Prisma.TeachingAttachmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeachingAttachmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingAttachmentPayload>[]
          }
          delete: {
            args: Prisma.TeachingAttachmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingAttachmentPayload>
          }
          update: {
            args: Prisma.TeachingAttachmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingAttachmentPayload>
          }
          deleteMany: {
            args: Prisma.TeachingAttachmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeachingAttachmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeachingAttachmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingAttachmentPayload>[]
          }
          upsert: {
            args: Prisma.TeachingAttachmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingAttachmentPayload>
          }
          aggregate: {
            args: Prisma.TeachingAttachmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeachingAttachment>
          }
          groupBy: {
            args: Prisma.TeachingAttachmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeachingAttachmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeachingAttachmentCountArgs<ExtArgs>
            result: $Utils.Optional<TeachingAttachmentCountAggregateOutputType> | number
          }
        }
      }
      Blog: {
        payload: Prisma.$BlogPayload<ExtArgs>
        fields: Prisma.BlogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          findFirst: {
            args: Prisma.BlogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          findMany: {
            args: Prisma.BlogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>[]
          }
          create: {
            args: Prisma.BlogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          createMany: {
            args: Prisma.BlogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BlogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>[]
          }
          delete: {
            args: Prisma.BlogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          update: {
            args: Prisma.BlogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          deleteMany: {
            args: Prisma.BlogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BlogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>[]
          }
          upsert: {
            args: Prisma.BlogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          aggregate: {
            args: Prisma.BlogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlog>
          }
          groupBy: {
            args: Prisma.BlogGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlogGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlogCountArgs<ExtArgs>
            result: $Utils.Optional<BlogCountAggregateOutputType> | number
          }
        }
      }
      BlogAttachment: {
        payload: Prisma.$BlogAttachmentPayload<ExtArgs>
        fields: Prisma.BlogAttachmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlogAttachmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogAttachmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlogAttachmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogAttachmentPayload>
          }
          findFirst: {
            args: Prisma.BlogAttachmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogAttachmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlogAttachmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogAttachmentPayload>
          }
          findMany: {
            args: Prisma.BlogAttachmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogAttachmentPayload>[]
          }
          create: {
            args: Prisma.BlogAttachmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogAttachmentPayload>
          }
          createMany: {
            args: Prisma.BlogAttachmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BlogAttachmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogAttachmentPayload>[]
          }
          delete: {
            args: Prisma.BlogAttachmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogAttachmentPayload>
          }
          update: {
            args: Prisma.BlogAttachmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogAttachmentPayload>
          }
          deleteMany: {
            args: Prisma.BlogAttachmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlogAttachmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BlogAttachmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogAttachmentPayload>[]
          }
          upsert: {
            args: Prisma.BlogAttachmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogAttachmentPayload>
          }
          aggregate: {
            args: Prisma.BlogAttachmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlogAttachment>
          }
          groupBy: {
            args: Prisma.BlogAttachmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlogAttachmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlogAttachmentCountArgs<ExtArgs>
            result: $Utils.Optional<BlogAttachmentCountAggregateOutputType> | number
          }
        }
      }
      Event: {
        payload: Prisma.$EventPayload<ExtArgs>
        fields: Prisma.EventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findFirst: {
            args: Prisma.EventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findMany: {
            args: Prisma.EventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          create: {
            args: Prisma.EventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          createMany: {
            args: Prisma.EventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          delete: {
            args: Prisma.EventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          update: {
            args: Prisma.EventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          deleteMany: {
            args: Prisma.EventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          upsert: {
            args: Prisma.EventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent>
          }
          groupBy: {
            args: Prisma.EventGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventCountArgs<ExtArgs>
            result: $Utils.Optional<EventCountAggregateOutputType> | number
          }
        }
      }
      Manifesto: {
        payload: Prisma.$ManifestoPayload<ExtArgs>
        fields: Prisma.ManifestoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ManifestoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManifestoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ManifestoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManifestoPayload>
          }
          findFirst: {
            args: Prisma.ManifestoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManifestoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ManifestoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManifestoPayload>
          }
          findMany: {
            args: Prisma.ManifestoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManifestoPayload>[]
          }
          create: {
            args: Prisma.ManifestoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManifestoPayload>
          }
          createMany: {
            args: Prisma.ManifestoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ManifestoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManifestoPayload>[]
          }
          delete: {
            args: Prisma.ManifestoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManifestoPayload>
          }
          update: {
            args: Prisma.ManifestoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManifestoPayload>
          }
          deleteMany: {
            args: Prisma.ManifestoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ManifestoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ManifestoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManifestoPayload>[]
          }
          upsert: {
            args: Prisma.ManifestoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManifestoPayload>
          }
          aggregate: {
            args: Prisma.ManifestoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateManifesto>
          }
          groupBy: {
            args: Prisma.ManifestoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ManifestoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ManifestoCountArgs<ExtArgs>
            result: $Utils.Optional<ManifestoCountAggregateOutputType> | number
          }
        }
      }
      MembershipRequest: {
        payload: Prisma.$MembershipRequestPayload<ExtArgs>
        fields: Prisma.MembershipRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MembershipRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MembershipRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipRequestPayload>
          }
          findFirst: {
            args: Prisma.MembershipRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MembershipRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipRequestPayload>
          }
          findMany: {
            args: Prisma.MembershipRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipRequestPayload>[]
          }
          create: {
            args: Prisma.MembershipRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipRequestPayload>
          }
          createMany: {
            args: Prisma.MembershipRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MembershipRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipRequestPayload>[]
          }
          delete: {
            args: Prisma.MembershipRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipRequestPayload>
          }
          update: {
            args: Prisma.MembershipRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipRequestPayload>
          }
          deleteMany: {
            args: Prisma.MembershipRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MembershipRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MembershipRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipRequestPayload>[]
          }
          upsert: {
            args: Prisma.MembershipRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipRequestPayload>
          }
          aggregate: {
            args: Prisma.MembershipRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMembershipRequest>
          }
          groupBy: {
            args: Prisma.MembershipRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<MembershipRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.MembershipRequestCountArgs<ExtArgs>
            result: $Utils.Optional<MembershipRequestCountAggregateOutputType> | number
          }
        }
      }
      MembershipNotification: {
        payload: Prisma.$MembershipNotificationPayload<ExtArgs>
        fields: Prisma.MembershipNotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MembershipNotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipNotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MembershipNotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipNotificationPayload>
          }
          findFirst: {
            args: Prisma.MembershipNotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipNotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MembershipNotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipNotificationPayload>
          }
          findMany: {
            args: Prisma.MembershipNotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipNotificationPayload>[]
          }
          create: {
            args: Prisma.MembershipNotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipNotificationPayload>
          }
          createMany: {
            args: Prisma.MembershipNotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MembershipNotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipNotificationPayload>[]
          }
          delete: {
            args: Prisma.MembershipNotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipNotificationPayload>
          }
          update: {
            args: Prisma.MembershipNotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipNotificationPayload>
          }
          deleteMany: {
            args: Prisma.MembershipNotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MembershipNotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MembershipNotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipNotificationPayload>[]
          }
          upsert: {
            args: Prisma.MembershipNotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipNotificationPayload>
          }
          aggregate: {
            args: Prisma.MembershipNotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMembershipNotification>
          }
          groupBy: {
            args: Prisma.MembershipNotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<MembershipNotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.MembershipNotificationCountArgs<ExtArgs>
            result: $Utils.Optional<MembershipNotificationCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Verification: {
        payload: Prisma.$VerificationPayload<ExtArgs>
        fields: Prisma.VerificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findFirst: {
            args: Prisma.VerificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findMany: {
            args: Prisma.VerificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          create: {
            args: Prisma.VerificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          createMany: {
            args: Prisma.VerificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          delete: {
            args: Prisma.VerificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          update: {
            args: Prisma.VerificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          deleteMany: {
            args: Prisma.VerificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          upsert: {
            args: Prisma.VerificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          aggregate: {
            args: Prisma.VerificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerification>
          }
          groupBy: {
            args: Prisma.VerificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    teaching?: TeachingOmit
    teachingAttachment?: TeachingAttachmentOmit
    blog?: BlogOmit
    blogAttachment?: BlogAttachmentOmit
    event?: EventOmit
    manifesto?: ManifestoOmit
    membershipRequest?: MembershipRequestOmit
    membershipNotification?: MembershipNotificationOmit
    user?: UserOmit
    session?: SessionOmit
    account?: AccountOmit
    verification?: VerificationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type TeachingCountOutputType
   */

  export type TeachingCountOutputType = {
    attachments: number
  }

  export type TeachingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attachments?: boolean | TeachingCountOutputTypeCountAttachmentsArgs
  }

  // Custom InputTypes
  /**
   * TeachingCountOutputType without action
   */
  export type TeachingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingCountOutputType
     */
    select?: TeachingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TeachingCountOutputType without action
   */
  export type TeachingCountOutputTypeCountAttachmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeachingAttachmentWhereInput
  }


  /**
   * Count Type BlogCountOutputType
   */

  export type BlogCountOutputType = {
    attachments: number
  }

  export type BlogCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attachments?: boolean | BlogCountOutputTypeCountAttachmentsArgs
  }

  // Custom InputTypes
  /**
   * BlogCountOutputType without action
   */
  export type BlogCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogCountOutputType
     */
    select?: BlogCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BlogCountOutputType without action
   */
  export type BlogCountOutputTypeCountAttachmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogAttachmentWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    membershipRequests: number
    membershipNotifications: number
    sessions: number
    accounts: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    membershipRequests?: boolean | UserCountOutputTypeCountMembershipRequestsArgs
    membershipNotifications?: boolean | UserCountOutputTypeCountMembershipNotificationsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMembershipRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MembershipRequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMembershipNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MembershipNotificationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Teaching
   */

  export type AggregateTeaching = {
    _count: TeachingCountAggregateOutputType | null
    _avg: TeachingAvgAggregateOutputType | null
    _sum: TeachingSumAggregateOutputType | null
    _min: TeachingMinAggregateOutputType | null
    _max: TeachingMaxAggregateOutputType | null
  }

  export type TeachingAvgAggregateOutputType = {
    durationSeconds: number | null
    position: number | null
  }

  export type TeachingSumAggregateOutputType = {
    durationSeconds: number | null
    position: number | null
  }

  export type TeachingMinAggregateOutputType = {
    id: string | null
    slug: string | null
    youtubeUrl: string | null
    youtubeId: string | null
    thumbnailUrl: string | null
    title: string | null
    titleAm: string | null
    titleOm: string | null
    description: string | null
    descriptionAm: string | null
    descriptionOm: string | null
    durationSeconds: number | null
    semesterLabel: string | null
    scheduleLine: string | null
    venueLine: string | null
    position: number | null
    published: boolean | null
    membersOnly: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TeachingMaxAggregateOutputType = {
    id: string | null
    slug: string | null
    youtubeUrl: string | null
    youtubeId: string | null
    thumbnailUrl: string | null
    title: string | null
    titleAm: string | null
    titleOm: string | null
    description: string | null
    descriptionAm: string | null
    descriptionOm: string | null
    durationSeconds: number | null
    semesterLabel: string | null
    scheduleLine: string | null
    venueLine: string | null
    position: number | null
    published: boolean | null
    membersOnly: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TeachingCountAggregateOutputType = {
    id: number
    slug: number
    youtubeUrl: number
    youtubeId: number
    thumbnailUrl: number
    title: number
    titleAm: number
    titleOm: number
    description: number
    descriptionAm: number
    descriptionOm: number
    durationSeconds: number
    semesterLabel: number
    scheduleLine: number
    venueLine: number
    position: number
    published: number
    membersOnly: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TeachingAvgAggregateInputType = {
    durationSeconds?: true
    position?: true
  }

  export type TeachingSumAggregateInputType = {
    durationSeconds?: true
    position?: true
  }

  export type TeachingMinAggregateInputType = {
    id?: true
    slug?: true
    youtubeUrl?: true
    youtubeId?: true
    thumbnailUrl?: true
    title?: true
    titleAm?: true
    titleOm?: true
    description?: true
    descriptionAm?: true
    descriptionOm?: true
    durationSeconds?: true
    semesterLabel?: true
    scheduleLine?: true
    venueLine?: true
    position?: true
    published?: true
    membersOnly?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TeachingMaxAggregateInputType = {
    id?: true
    slug?: true
    youtubeUrl?: true
    youtubeId?: true
    thumbnailUrl?: true
    title?: true
    titleAm?: true
    titleOm?: true
    description?: true
    descriptionAm?: true
    descriptionOm?: true
    durationSeconds?: true
    semesterLabel?: true
    scheduleLine?: true
    venueLine?: true
    position?: true
    published?: true
    membersOnly?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TeachingCountAggregateInputType = {
    id?: true
    slug?: true
    youtubeUrl?: true
    youtubeId?: true
    thumbnailUrl?: true
    title?: true
    titleAm?: true
    titleOm?: true
    description?: true
    descriptionAm?: true
    descriptionOm?: true
    durationSeconds?: true
    semesterLabel?: true
    scheduleLine?: true
    venueLine?: true
    position?: true
    published?: true
    membersOnly?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TeachingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teaching to aggregate.
     */
    where?: TeachingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachings to fetch.
     */
    orderBy?: TeachingOrderByWithRelationInput | TeachingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeachingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Teachings
    **/
    _count?: true | TeachingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeachingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeachingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeachingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeachingMaxAggregateInputType
  }

  export type GetTeachingAggregateType<T extends TeachingAggregateArgs> = {
        [P in keyof T & keyof AggregateTeaching]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeaching[P]>
      : GetScalarType<T[P], AggregateTeaching[P]>
  }




  export type TeachingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeachingWhereInput
    orderBy?: TeachingOrderByWithAggregationInput | TeachingOrderByWithAggregationInput[]
    by: TeachingScalarFieldEnum[] | TeachingScalarFieldEnum
    having?: TeachingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeachingCountAggregateInputType | true
    _avg?: TeachingAvgAggregateInputType
    _sum?: TeachingSumAggregateInputType
    _min?: TeachingMinAggregateInputType
    _max?: TeachingMaxAggregateInputType
  }

  export type TeachingGroupByOutputType = {
    id: string
    slug: string | null
    youtubeUrl: string
    youtubeId: string
    thumbnailUrl: string | null
    title: string
    titleAm: string | null
    titleOm: string | null
    description: string | null
    descriptionAm: string | null
    descriptionOm: string | null
    durationSeconds: number | null
    semesterLabel: string | null
    scheduleLine: string | null
    venueLine: string | null
    position: number
    published: boolean
    membersOnly: boolean
    createdAt: Date
    updatedAt: Date
    _count: TeachingCountAggregateOutputType | null
    _avg: TeachingAvgAggregateOutputType | null
    _sum: TeachingSumAggregateOutputType | null
    _min: TeachingMinAggregateOutputType | null
    _max: TeachingMaxAggregateOutputType | null
  }

  type GetTeachingGroupByPayload<T extends TeachingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeachingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeachingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeachingGroupByOutputType[P]>
            : GetScalarType<T[P], TeachingGroupByOutputType[P]>
        }
      >
    >


  export type TeachingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    youtubeUrl?: boolean
    youtubeId?: boolean
    thumbnailUrl?: boolean
    title?: boolean
    titleAm?: boolean
    titleOm?: boolean
    description?: boolean
    descriptionAm?: boolean
    descriptionOm?: boolean
    durationSeconds?: boolean
    semesterLabel?: boolean
    scheduleLine?: boolean
    venueLine?: boolean
    position?: boolean
    published?: boolean
    membersOnly?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    attachments?: boolean | Teaching$attachmentsArgs<ExtArgs>
    _count?: boolean | TeachingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teaching"]>

  export type TeachingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    youtubeUrl?: boolean
    youtubeId?: boolean
    thumbnailUrl?: boolean
    title?: boolean
    titleAm?: boolean
    titleOm?: boolean
    description?: boolean
    descriptionAm?: boolean
    descriptionOm?: boolean
    durationSeconds?: boolean
    semesterLabel?: boolean
    scheduleLine?: boolean
    venueLine?: boolean
    position?: boolean
    published?: boolean
    membersOnly?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["teaching"]>

  export type TeachingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    youtubeUrl?: boolean
    youtubeId?: boolean
    thumbnailUrl?: boolean
    title?: boolean
    titleAm?: boolean
    titleOm?: boolean
    description?: boolean
    descriptionAm?: boolean
    descriptionOm?: boolean
    durationSeconds?: boolean
    semesterLabel?: boolean
    scheduleLine?: boolean
    venueLine?: boolean
    position?: boolean
    published?: boolean
    membersOnly?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["teaching"]>

  export type TeachingSelectScalar = {
    id?: boolean
    slug?: boolean
    youtubeUrl?: boolean
    youtubeId?: boolean
    thumbnailUrl?: boolean
    title?: boolean
    titleAm?: boolean
    titleOm?: boolean
    description?: boolean
    descriptionAm?: boolean
    descriptionOm?: boolean
    durationSeconds?: boolean
    semesterLabel?: boolean
    scheduleLine?: boolean
    venueLine?: boolean
    position?: boolean
    published?: boolean
    membersOnly?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TeachingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "youtubeUrl" | "youtubeId" | "thumbnailUrl" | "title" | "titleAm" | "titleOm" | "description" | "descriptionAm" | "descriptionOm" | "durationSeconds" | "semesterLabel" | "scheduleLine" | "venueLine" | "position" | "published" | "membersOnly" | "createdAt" | "updatedAt", ExtArgs["result"]["teaching"]>
  export type TeachingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attachments?: boolean | Teaching$attachmentsArgs<ExtArgs>
    _count?: boolean | TeachingCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TeachingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TeachingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TeachingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Teaching"
    objects: {
      attachments: Prisma.$TeachingAttachmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      slug: string | null
      youtubeUrl: string
      youtubeId: string
      thumbnailUrl: string | null
      title: string
      titleAm: string | null
      titleOm: string | null
      description: string | null
      descriptionAm: string | null
      descriptionOm: string | null
      durationSeconds: number | null
      semesterLabel: string | null
      scheduleLine: string | null
      venueLine: string | null
      position: number
      published: boolean
      membersOnly: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["teaching"]>
    composites: {}
  }

  type TeachingGetPayload<S extends boolean | null | undefined | TeachingDefaultArgs> = $Result.GetResult<Prisma.$TeachingPayload, S>

  type TeachingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeachingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeachingCountAggregateInputType | true
    }

  export interface TeachingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Teaching'], meta: { name: 'Teaching' } }
    /**
     * Find zero or one Teaching that matches the filter.
     * @param {TeachingFindUniqueArgs} args - Arguments to find a Teaching
     * @example
     * // Get one Teaching
     * const teaching = await prisma.teaching.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeachingFindUniqueArgs>(args: SelectSubset<T, TeachingFindUniqueArgs<ExtArgs>>): Prisma__TeachingClient<$Result.GetResult<Prisma.$TeachingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Teaching that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeachingFindUniqueOrThrowArgs} args - Arguments to find a Teaching
     * @example
     * // Get one Teaching
     * const teaching = await prisma.teaching.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeachingFindUniqueOrThrowArgs>(args: SelectSubset<T, TeachingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeachingClient<$Result.GetResult<Prisma.$TeachingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Teaching that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeachingFindFirstArgs} args - Arguments to find a Teaching
     * @example
     * // Get one Teaching
     * const teaching = await prisma.teaching.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeachingFindFirstArgs>(args?: SelectSubset<T, TeachingFindFirstArgs<ExtArgs>>): Prisma__TeachingClient<$Result.GetResult<Prisma.$TeachingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Teaching that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeachingFindFirstOrThrowArgs} args - Arguments to find a Teaching
     * @example
     * // Get one Teaching
     * const teaching = await prisma.teaching.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeachingFindFirstOrThrowArgs>(args?: SelectSubset<T, TeachingFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeachingClient<$Result.GetResult<Prisma.$TeachingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Teachings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeachingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teachings
     * const teachings = await prisma.teaching.findMany()
     * 
     * // Get first 10 Teachings
     * const teachings = await prisma.teaching.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teachingWithIdOnly = await prisma.teaching.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeachingFindManyArgs>(args?: SelectSubset<T, TeachingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeachingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Teaching.
     * @param {TeachingCreateArgs} args - Arguments to create a Teaching.
     * @example
     * // Create one Teaching
     * const Teaching = await prisma.teaching.create({
     *   data: {
     *     // ... data to create a Teaching
     *   }
     * })
     * 
     */
    create<T extends TeachingCreateArgs>(args: SelectSubset<T, TeachingCreateArgs<ExtArgs>>): Prisma__TeachingClient<$Result.GetResult<Prisma.$TeachingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Teachings.
     * @param {TeachingCreateManyArgs} args - Arguments to create many Teachings.
     * @example
     * // Create many Teachings
     * const teaching = await prisma.teaching.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeachingCreateManyArgs>(args?: SelectSubset<T, TeachingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Teachings and returns the data saved in the database.
     * @param {TeachingCreateManyAndReturnArgs} args - Arguments to create many Teachings.
     * @example
     * // Create many Teachings
     * const teaching = await prisma.teaching.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Teachings and only return the `id`
     * const teachingWithIdOnly = await prisma.teaching.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeachingCreateManyAndReturnArgs>(args?: SelectSubset<T, TeachingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeachingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Teaching.
     * @param {TeachingDeleteArgs} args - Arguments to delete one Teaching.
     * @example
     * // Delete one Teaching
     * const Teaching = await prisma.teaching.delete({
     *   where: {
     *     // ... filter to delete one Teaching
     *   }
     * })
     * 
     */
    delete<T extends TeachingDeleteArgs>(args: SelectSubset<T, TeachingDeleteArgs<ExtArgs>>): Prisma__TeachingClient<$Result.GetResult<Prisma.$TeachingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Teaching.
     * @param {TeachingUpdateArgs} args - Arguments to update one Teaching.
     * @example
     * // Update one Teaching
     * const teaching = await prisma.teaching.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeachingUpdateArgs>(args: SelectSubset<T, TeachingUpdateArgs<ExtArgs>>): Prisma__TeachingClient<$Result.GetResult<Prisma.$TeachingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Teachings.
     * @param {TeachingDeleteManyArgs} args - Arguments to filter Teachings to delete.
     * @example
     * // Delete a few Teachings
     * const { count } = await prisma.teaching.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeachingDeleteManyArgs>(args?: SelectSubset<T, TeachingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teachings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeachingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teachings
     * const teaching = await prisma.teaching.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeachingUpdateManyArgs>(args: SelectSubset<T, TeachingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teachings and returns the data updated in the database.
     * @param {TeachingUpdateManyAndReturnArgs} args - Arguments to update many Teachings.
     * @example
     * // Update many Teachings
     * const teaching = await prisma.teaching.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Teachings and only return the `id`
     * const teachingWithIdOnly = await prisma.teaching.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TeachingUpdateManyAndReturnArgs>(args: SelectSubset<T, TeachingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeachingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Teaching.
     * @param {TeachingUpsertArgs} args - Arguments to update or create a Teaching.
     * @example
     * // Update or create a Teaching
     * const teaching = await prisma.teaching.upsert({
     *   create: {
     *     // ... data to create a Teaching
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Teaching we want to update
     *   }
     * })
     */
    upsert<T extends TeachingUpsertArgs>(args: SelectSubset<T, TeachingUpsertArgs<ExtArgs>>): Prisma__TeachingClient<$Result.GetResult<Prisma.$TeachingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Teachings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeachingCountArgs} args - Arguments to filter Teachings to count.
     * @example
     * // Count the number of Teachings
     * const count = await prisma.teaching.count({
     *   where: {
     *     // ... the filter for the Teachings we want to count
     *   }
     * })
    **/
    count<T extends TeachingCountArgs>(
      args?: Subset<T, TeachingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeachingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Teaching.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeachingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeachingAggregateArgs>(args: Subset<T, TeachingAggregateArgs>): Prisma.PrismaPromise<GetTeachingAggregateType<T>>

    /**
     * Group by Teaching.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeachingGroupByArgs} args - Group by arguments.
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
      T extends TeachingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeachingGroupByArgs['orderBy'] }
        : { orderBy?: TeachingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TeachingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeachingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Teaching model
   */
  readonly fields: TeachingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Teaching.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeachingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    attachments<T extends Teaching$attachmentsArgs<ExtArgs> = {}>(args?: Subset<T, Teaching$attachmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeachingAttachmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Teaching model
   */
  interface TeachingFieldRefs {
    readonly id: FieldRef<"Teaching", 'String'>
    readonly slug: FieldRef<"Teaching", 'String'>
    readonly youtubeUrl: FieldRef<"Teaching", 'String'>
    readonly youtubeId: FieldRef<"Teaching", 'String'>
    readonly thumbnailUrl: FieldRef<"Teaching", 'String'>
    readonly title: FieldRef<"Teaching", 'String'>
    readonly titleAm: FieldRef<"Teaching", 'String'>
    readonly titleOm: FieldRef<"Teaching", 'String'>
    readonly description: FieldRef<"Teaching", 'String'>
    readonly descriptionAm: FieldRef<"Teaching", 'String'>
    readonly descriptionOm: FieldRef<"Teaching", 'String'>
    readonly durationSeconds: FieldRef<"Teaching", 'Int'>
    readonly semesterLabel: FieldRef<"Teaching", 'String'>
    readonly scheduleLine: FieldRef<"Teaching", 'String'>
    readonly venueLine: FieldRef<"Teaching", 'String'>
    readonly position: FieldRef<"Teaching", 'Int'>
    readonly published: FieldRef<"Teaching", 'Boolean'>
    readonly membersOnly: FieldRef<"Teaching", 'Boolean'>
    readonly createdAt: FieldRef<"Teaching", 'DateTime'>
    readonly updatedAt: FieldRef<"Teaching", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Teaching findUnique
   */
  export type TeachingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teaching
     */
    select?: TeachingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teaching
     */
    omit?: TeachingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingInclude<ExtArgs> | null
    /**
     * Filter, which Teaching to fetch.
     */
    where: TeachingWhereUniqueInput
  }

  /**
   * Teaching findUniqueOrThrow
   */
  export type TeachingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teaching
     */
    select?: TeachingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teaching
     */
    omit?: TeachingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingInclude<ExtArgs> | null
    /**
     * Filter, which Teaching to fetch.
     */
    where: TeachingWhereUniqueInput
  }

  /**
   * Teaching findFirst
   */
  export type TeachingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teaching
     */
    select?: TeachingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teaching
     */
    omit?: TeachingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingInclude<ExtArgs> | null
    /**
     * Filter, which Teaching to fetch.
     */
    where?: TeachingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachings to fetch.
     */
    orderBy?: TeachingOrderByWithRelationInput | TeachingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teachings.
     */
    cursor?: TeachingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teachings.
     */
    distinct?: TeachingScalarFieldEnum | TeachingScalarFieldEnum[]
  }

  /**
   * Teaching findFirstOrThrow
   */
  export type TeachingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teaching
     */
    select?: TeachingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teaching
     */
    omit?: TeachingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingInclude<ExtArgs> | null
    /**
     * Filter, which Teaching to fetch.
     */
    where?: TeachingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachings to fetch.
     */
    orderBy?: TeachingOrderByWithRelationInput | TeachingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teachings.
     */
    cursor?: TeachingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teachings.
     */
    distinct?: TeachingScalarFieldEnum | TeachingScalarFieldEnum[]
  }

  /**
   * Teaching findMany
   */
  export type TeachingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teaching
     */
    select?: TeachingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teaching
     */
    omit?: TeachingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingInclude<ExtArgs> | null
    /**
     * Filter, which Teachings to fetch.
     */
    where?: TeachingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachings to fetch.
     */
    orderBy?: TeachingOrderByWithRelationInput | TeachingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Teachings.
     */
    cursor?: TeachingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teachings.
     */
    distinct?: TeachingScalarFieldEnum | TeachingScalarFieldEnum[]
  }

  /**
   * Teaching create
   */
  export type TeachingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teaching
     */
    select?: TeachingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teaching
     */
    omit?: TeachingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingInclude<ExtArgs> | null
    /**
     * The data needed to create a Teaching.
     */
    data: XOR<TeachingCreateInput, TeachingUncheckedCreateInput>
  }

  /**
   * Teaching createMany
   */
  export type TeachingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Teachings.
     */
    data: TeachingCreateManyInput | TeachingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Teaching createManyAndReturn
   */
  export type TeachingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teaching
     */
    select?: TeachingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Teaching
     */
    omit?: TeachingOmit<ExtArgs> | null
    /**
     * The data used to create many Teachings.
     */
    data: TeachingCreateManyInput | TeachingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Teaching update
   */
  export type TeachingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teaching
     */
    select?: TeachingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teaching
     */
    omit?: TeachingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingInclude<ExtArgs> | null
    /**
     * The data needed to update a Teaching.
     */
    data: XOR<TeachingUpdateInput, TeachingUncheckedUpdateInput>
    /**
     * Choose, which Teaching to update.
     */
    where: TeachingWhereUniqueInput
  }

  /**
   * Teaching updateMany
   */
  export type TeachingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Teachings.
     */
    data: XOR<TeachingUpdateManyMutationInput, TeachingUncheckedUpdateManyInput>
    /**
     * Filter which Teachings to update
     */
    where?: TeachingWhereInput
    /**
     * Limit how many Teachings to update.
     */
    limit?: number
  }

  /**
   * Teaching updateManyAndReturn
   */
  export type TeachingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teaching
     */
    select?: TeachingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Teaching
     */
    omit?: TeachingOmit<ExtArgs> | null
    /**
     * The data used to update Teachings.
     */
    data: XOR<TeachingUpdateManyMutationInput, TeachingUncheckedUpdateManyInput>
    /**
     * Filter which Teachings to update
     */
    where?: TeachingWhereInput
    /**
     * Limit how many Teachings to update.
     */
    limit?: number
  }

  /**
   * Teaching upsert
   */
  export type TeachingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teaching
     */
    select?: TeachingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teaching
     */
    omit?: TeachingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingInclude<ExtArgs> | null
    /**
     * The filter to search for the Teaching to update in case it exists.
     */
    where: TeachingWhereUniqueInput
    /**
     * In case the Teaching found by the `where` argument doesn't exist, create a new Teaching with this data.
     */
    create: XOR<TeachingCreateInput, TeachingUncheckedCreateInput>
    /**
     * In case the Teaching was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeachingUpdateInput, TeachingUncheckedUpdateInput>
  }

  /**
   * Teaching delete
   */
  export type TeachingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teaching
     */
    select?: TeachingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teaching
     */
    omit?: TeachingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingInclude<ExtArgs> | null
    /**
     * Filter which Teaching to delete.
     */
    where: TeachingWhereUniqueInput
  }

  /**
   * Teaching deleteMany
   */
  export type TeachingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teachings to delete
     */
    where?: TeachingWhereInput
    /**
     * Limit how many Teachings to delete.
     */
    limit?: number
  }

  /**
   * Teaching.attachments
   */
  export type Teaching$attachmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingAttachment
     */
    select?: TeachingAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingAttachment
     */
    omit?: TeachingAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingAttachmentInclude<ExtArgs> | null
    where?: TeachingAttachmentWhereInput
    orderBy?: TeachingAttachmentOrderByWithRelationInput | TeachingAttachmentOrderByWithRelationInput[]
    cursor?: TeachingAttachmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeachingAttachmentScalarFieldEnum | TeachingAttachmentScalarFieldEnum[]
  }

  /**
   * Teaching without action
   */
  export type TeachingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teaching
     */
    select?: TeachingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teaching
     */
    omit?: TeachingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingInclude<ExtArgs> | null
  }


  /**
   * Model TeachingAttachment
   */

  export type AggregateTeachingAttachment = {
    _count: TeachingAttachmentCountAggregateOutputType | null
    _min: TeachingAttachmentMinAggregateOutputType | null
    _max: TeachingAttachmentMaxAggregateOutputType | null
  }

  export type TeachingAttachmentMinAggregateOutputType = {
    id: string | null
    teachingId: string | null
    title: string | null
    storagePath: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TeachingAttachmentMaxAggregateOutputType = {
    id: string | null
    teachingId: string | null
    title: string | null
    storagePath: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TeachingAttachmentCountAggregateOutputType = {
    id: number
    teachingId: number
    title: number
    storagePath: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TeachingAttachmentMinAggregateInputType = {
    id?: true
    teachingId?: true
    title?: true
    storagePath?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TeachingAttachmentMaxAggregateInputType = {
    id?: true
    teachingId?: true
    title?: true
    storagePath?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TeachingAttachmentCountAggregateInputType = {
    id?: true
    teachingId?: true
    title?: true
    storagePath?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TeachingAttachmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeachingAttachment to aggregate.
     */
    where?: TeachingAttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeachingAttachments to fetch.
     */
    orderBy?: TeachingAttachmentOrderByWithRelationInput | TeachingAttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeachingAttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeachingAttachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeachingAttachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TeachingAttachments
    **/
    _count?: true | TeachingAttachmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeachingAttachmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeachingAttachmentMaxAggregateInputType
  }

  export type GetTeachingAttachmentAggregateType<T extends TeachingAttachmentAggregateArgs> = {
        [P in keyof T & keyof AggregateTeachingAttachment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeachingAttachment[P]>
      : GetScalarType<T[P], AggregateTeachingAttachment[P]>
  }




  export type TeachingAttachmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeachingAttachmentWhereInput
    orderBy?: TeachingAttachmentOrderByWithAggregationInput | TeachingAttachmentOrderByWithAggregationInput[]
    by: TeachingAttachmentScalarFieldEnum[] | TeachingAttachmentScalarFieldEnum
    having?: TeachingAttachmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeachingAttachmentCountAggregateInputType | true
    _min?: TeachingAttachmentMinAggregateInputType
    _max?: TeachingAttachmentMaxAggregateInputType
  }

  export type TeachingAttachmentGroupByOutputType = {
    id: string
    teachingId: string
    title: string | null
    storagePath: string
    createdAt: Date
    updatedAt: Date
    _count: TeachingAttachmentCountAggregateOutputType | null
    _min: TeachingAttachmentMinAggregateOutputType | null
    _max: TeachingAttachmentMaxAggregateOutputType | null
  }

  type GetTeachingAttachmentGroupByPayload<T extends TeachingAttachmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeachingAttachmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeachingAttachmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeachingAttachmentGroupByOutputType[P]>
            : GetScalarType<T[P], TeachingAttachmentGroupByOutputType[P]>
        }
      >
    >


  export type TeachingAttachmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teachingId?: boolean
    title?: boolean
    storagePath?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    teaching?: boolean | TeachingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teachingAttachment"]>

  export type TeachingAttachmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teachingId?: boolean
    title?: boolean
    storagePath?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    teaching?: boolean | TeachingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teachingAttachment"]>

  export type TeachingAttachmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teachingId?: boolean
    title?: boolean
    storagePath?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    teaching?: boolean | TeachingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teachingAttachment"]>

  export type TeachingAttachmentSelectScalar = {
    id?: boolean
    teachingId?: boolean
    title?: boolean
    storagePath?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TeachingAttachmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "teachingId" | "title" | "storagePath" | "createdAt" | "updatedAt", ExtArgs["result"]["teachingAttachment"]>
  export type TeachingAttachmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teaching?: boolean | TeachingDefaultArgs<ExtArgs>
  }
  export type TeachingAttachmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teaching?: boolean | TeachingDefaultArgs<ExtArgs>
  }
  export type TeachingAttachmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teaching?: boolean | TeachingDefaultArgs<ExtArgs>
  }

  export type $TeachingAttachmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TeachingAttachment"
    objects: {
      teaching: Prisma.$TeachingPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      teachingId: string
      title: string | null
      storagePath: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["teachingAttachment"]>
    composites: {}
  }

  type TeachingAttachmentGetPayload<S extends boolean | null | undefined | TeachingAttachmentDefaultArgs> = $Result.GetResult<Prisma.$TeachingAttachmentPayload, S>

  type TeachingAttachmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeachingAttachmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeachingAttachmentCountAggregateInputType | true
    }

  export interface TeachingAttachmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TeachingAttachment'], meta: { name: 'TeachingAttachment' } }
    /**
     * Find zero or one TeachingAttachment that matches the filter.
     * @param {TeachingAttachmentFindUniqueArgs} args - Arguments to find a TeachingAttachment
     * @example
     * // Get one TeachingAttachment
     * const teachingAttachment = await prisma.teachingAttachment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeachingAttachmentFindUniqueArgs>(args: SelectSubset<T, TeachingAttachmentFindUniqueArgs<ExtArgs>>): Prisma__TeachingAttachmentClient<$Result.GetResult<Prisma.$TeachingAttachmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TeachingAttachment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeachingAttachmentFindUniqueOrThrowArgs} args - Arguments to find a TeachingAttachment
     * @example
     * // Get one TeachingAttachment
     * const teachingAttachment = await prisma.teachingAttachment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeachingAttachmentFindUniqueOrThrowArgs>(args: SelectSubset<T, TeachingAttachmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeachingAttachmentClient<$Result.GetResult<Prisma.$TeachingAttachmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeachingAttachment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeachingAttachmentFindFirstArgs} args - Arguments to find a TeachingAttachment
     * @example
     * // Get one TeachingAttachment
     * const teachingAttachment = await prisma.teachingAttachment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeachingAttachmentFindFirstArgs>(args?: SelectSubset<T, TeachingAttachmentFindFirstArgs<ExtArgs>>): Prisma__TeachingAttachmentClient<$Result.GetResult<Prisma.$TeachingAttachmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeachingAttachment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeachingAttachmentFindFirstOrThrowArgs} args - Arguments to find a TeachingAttachment
     * @example
     * // Get one TeachingAttachment
     * const teachingAttachment = await prisma.teachingAttachment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeachingAttachmentFindFirstOrThrowArgs>(args?: SelectSubset<T, TeachingAttachmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeachingAttachmentClient<$Result.GetResult<Prisma.$TeachingAttachmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TeachingAttachments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeachingAttachmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TeachingAttachments
     * const teachingAttachments = await prisma.teachingAttachment.findMany()
     * 
     * // Get first 10 TeachingAttachments
     * const teachingAttachments = await prisma.teachingAttachment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teachingAttachmentWithIdOnly = await prisma.teachingAttachment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeachingAttachmentFindManyArgs>(args?: SelectSubset<T, TeachingAttachmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeachingAttachmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TeachingAttachment.
     * @param {TeachingAttachmentCreateArgs} args - Arguments to create a TeachingAttachment.
     * @example
     * // Create one TeachingAttachment
     * const TeachingAttachment = await prisma.teachingAttachment.create({
     *   data: {
     *     // ... data to create a TeachingAttachment
     *   }
     * })
     * 
     */
    create<T extends TeachingAttachmentCreateArgs>(args: SelectSubset<T, TeachingAttachmentCreateArgs<ExtArgs>>): Prisma__TeachingAttachmentClient<$Result.GetResult<Prisma.$TeachingAttachmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TeachingAttachments.
     * @param {TeachingAttachmentCreateManyArgs} args - Arguments to create many TeachingAttachments.
     * @example
     * // Create many TeachingAttachments
     * const teachingAttachment = await prisma.teachingAttachment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeachingAttachmentCreateManyArgs>(args?: SelectSubset<T, TeachingAttachmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TeachingAttachments and returns the data saved in the database.
     * @param {TeachingAttachmentCreateManyAndReturnArgs} args - Arguments to create many TeachingAttachments.
     * @example
     * // Create many TeachingAttachments
     * const teachingAttachment = await prisma.teachingAttachment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TeachingAttachments and only return the `id`
     * const teachingAttachmentWithIdOnly = await prisma.teachingAttachment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeachingAttachmentCreateManyAndReturnArgs>(args?: SelectSubset<T, TeachingAttachmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeachingAttachmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TeachingAttachment.
     * @param {TeachingAttachmentDeleteArgs} args - Arguments to delete one TeachingAttachment.
     * @example
     * // Delete one TeachingAttachment
     * const TeachingAttachment = await prisma.teachingAttachment.delete({
     *   where: {
     *     // ... filter to delete one TeachingAttachment
     *   }
     * })
     * 
     */
    delete<T extends TeachingAttachmentDeleteArgs>(args: SelectSubset<T, TeachingAttachmentDeleteArgs<ExtArgs>>): Prisma__TeachingAttachmentClient<$Result.GetResult<Prisma.$TeachingAttachmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TeachingAttachment.
     * @param {TeachingAttachmentUpdateArgs} args - Arguments to update one TeachingAttachment.
     * @example
     * // Update one TeachingAttachment
     * const teachingAttachment = await prisma.teachingAttachment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeachingAttachmentUpdateArgs>(args: SelectSubset<T, TeachingAttachmentUpdateArgs<ExtArgs>>): Prisma__TeachingAttachmentClient<$Result.GetResult<Prisma.$TeachingAttachmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TeachingAttachments.
     * @param {TeachingAttachmentDeleteManyArgs} args - Arguments to filter TeachingAttachments to delete.
     * @example
     * // Delete a few TeachingAttachments
     * const { count } = await prisma.teachingAttachment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeachingAttachmentDeleteManyArgs>(args?: SelectSubset<T, TeachingAttachmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeachingAttachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeachingAttachmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TeachingAttachments
     * const teachingAttachment = await prisma.teachingAttachment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeachingAttachmentUpdateManyArgs>(args: SelectSubset<T, TeachingAttachmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeachingAttachments and returns the data updated in the database.
     * @param {TeachingAttachmentUpdateManyAndReturnArgs} args - Arguments to update many TeachingAttachments.
     * @example
     * // Update many TeachingAttachments
     * const teachingAttachment = await prisma.teachingAttachment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TeachingAttachments and only return the `id`
     * const teachingAttachmentWithIdOnly = await prisma.teachingAttachment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TeachingAttachmentUpdateManyAndReturnArgs>(args: SelectSubset<T, TeachingAttachmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeachingAttachmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TeachingAttachment.
     * @param {TeachingAttachmentUpsertArgs} args - Arguments to update or create a TeachingAttachment.
     * @example
     * // Update or create a TeachingAttachment
     * const teachingAttachment = await prisma.teachingAttachment.upsert({
     *   create: {
     *     // ... data to create a TeachingAttachment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TeachingAttachment we want to update
     *   }
     * })
     */
    upsert<T extends TeachingAttachmentUpsertArgs>(args: SelectSubset<T, TeachingAttachmentUpsertArgs<ExtArgs>>): Prisma__TeachingAttachmentClient<$Result.GetResult<Prisma.$TeachingAttachmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TeachingAttachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeachingAttachmentCountArgs} args - Arguments to filter TeachingAttachments to count.
     * @example
     * // Count the number of TeachingAttachments
     * const count = await prisma.teachingAttachment.count({
     *   where: {
     *     // ... the filter for the TeachingAttachments we want to count
     *   }
     * })
    **/
    count<T extends TeachingAttachmentCountArgs>(
      args?: Subset<T, TeachingAttachmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeachingAttachmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TeachingAttachment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeachingAttachmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeachingAttachmentAggregateArgs>(args: Subset<T, TeachingAttachmentAggregateArgs>): Prisma.PrismaPromise<GetTeachingAttachmentAggregateType<T>>

    /**
     * Group by TeachingAttachment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeachingAttachmentGroupByArgs} args - Group by arguments.
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
      T extends TeachingAttachmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeachingAttachmentGroupByArgs['orderBy'] }
        : { orderBy?: TeachingAttachmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TeachingAttachmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeachingAttachmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TeachingAttachment model
   */
  readonly fields: TeachingAttachmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TeachingAttachment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeachingAttachmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    teaching<T extends TeachingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeachingDefaultArgs<ExtArgs>>): Prisma__TeachingClient<$Result.GetResult<Prisma.$TeachingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TeachingAttachment model
   */
  interface TeachingAttachmentFieldRefs {
    readonly id: FieldRef<"TeachingAttachment", 'String'>
    readonly teachingId: FieldRef<"TeachingAttachment", 'String'>
    readonly title: FieldRef<"TeachingAttachment", 'String'>
    readonly storagePath: FieldRef<"TeachingAttachment", 'String'>
    readonly createdAt: FieldRef<"TeachingAttachment", 'DateTime'>
    readonly updatedAt: FieldRef<"TeachingAttachment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TeachingAttachment findUnique
   */
  export type TeachingAttachmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingAttachment
     */
    select?: TeachingAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingAttachment
     */
    omit?: TeachingAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingAttachmentInclude<ExtArgs> | null
    /**
     * Filter, which TeachingAttachment to fetch.
     */
    where: TeachingAttachmentWhereUniqueInput
  }

  /**
   * TeachingAttachment findUniqueOrThrow
   */
  export type TeachingAttachmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingAttachment
     */
    select?: TeachingAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingAttachment
     */
    omit?: TeachingAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingAttachmentInclude<ExtArgs> | null
    /**
     * Filter, which TeachingAttachment to fetch.
     */
    where: TeachingAttachmentWhereUniqueInput
  }

  /**
   * TeachingAttachment findFirst
   */
  export type TeachingAttachmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingAttachment
     */
    select?: TeachingAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingAttachment
     */
    omit?: TeachingAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingAttachmentInclude<ExtArgs> | null
    /**
     * Filter, which TeachingAttachment to fetch.
     */
    where?: TeachingAttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeachingAttachments to fetch.
     */
    orderBy?: TeachingAttachmentOrderByWithRelationInput | TeachingAttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeachingAttachments.
     */
    cursor?: TeachingAttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeachingAttachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeachingAttachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeachingAttachments.
     */
    distinct?: TeachingAttachmentScalarFieldEnum | TeachingAttachmentScalarFieldEnum[]
  }

  /**
   * TeachingAttachment findFirstOrThrow
   */
  export type TeachingAttachmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingAttachment
     */
    select?: TeachingAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingAttachment
     */
    omit?: TeachingAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingAttachmentInclude<ExtArgs> | null
    /**
     * Filter, which TeachingAttachment to fetch.
     */
    where?: TeachingAttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeachingAttachments to fetch.
     */
    orderBy?: TeachingAttachmentOrderByWithRelationInput | TeachingAttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeachingAttachments.
     */
    cursor?: TeachingAttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeachingAttachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeachingAttachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeachingAttachments.
     */
    distinct?: TeachingAttachmentScalarFieldEnum | TeachingAttachmentScalarFieldEnum[]
  }

  /**
   * TeachingAttachment findMany
   */
  export type TeachingAttachmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingAttachment
     */
    select?: TeachingAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingAttachment
     */
    omit?: TeachingAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingAttachmentInclude<ExtArgs> | null
    /**
     * Filter, which TeachingAttachments to fetch.
     */
    where?: TeachingAttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeachingAttachments to fetch.
     */
    orderBy?: TeachingAttachmentOrderByWithRelationInput | TeachingAttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TeachingAttachments.
     */
    cursor?: TeachingAttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeachingAttachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeachingAttachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeachingAttachments.
     */
    distinct?: TeachingAttachmentScalarFieldEnum | TeachingAttachmentScalarFieldEnum[]
  }

  /**
   * TeachingAttachment create
   */
  export type TeachingAttachmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingAttachment
     */
    select?: TeachingAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingAttachment
     */
    omit?: TeachingAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingAttachmentInclude<ExtArgs> | null
    /**
     * The data needed to create a TeachingAttachment.
     */
    data: XOR<TeachingAttachmentCreateInput, TeachingAttachmentUncheckedCreateInput>
  }

  /**
   * TeachingAttachment createMany
   */
  export type TeachingAttachmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TeachingAttachments.
     */
    data: TeachingAttachmentCreateManyInput | TeachingAttachmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TeachingAttachment createManyAndReturn
   */
  export type TeachingAttachmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingAttachment
     */
    select?: TeachingAttachmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingAttachment
     */
    omit?: TeachingAttachmentOmit<ExtArgs> | null
    /**
     * The data used to create many TeachingAttachments.
     */
    data: TeachingAttachmentCreateManyInput | TeachingAttachmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingAttachmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeachingAttachment update
   */
  export type TeachingAttachmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingAttachment
     */
    select?: TeachingAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingAttachment
     */
    omit?: TeachingAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingAttachmentInclude<ExtArgs> | null
    /**
     * The data needed to update a TeachingAttachment.
     */
    data: XOR<TeachingAttachmentUpdateInput, TeachingAttachmentUncheckedUpdateInput>
    /**
     * Choose, which TeachingAttachment to update.
     */
    where: TeachingAttachmentWhereUniqueInput
  }

  /**
   * TeachingAttachment updateMany
   */
  export type TeachingAttachmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TeachingAttachments.
     */
    data: XOR<TeachingAttachmentUpdateManyMutationInput, TeachingAttachmentUncheckedUpdateManyInput>
    /**
     * Filter which TeachingAttachments to update
     */
    where?: TeachingAttachmentWhereInput
    /**
     * Limit how many TeachingAttachments to update.
     */
    limit?: number
  }

  /**
   * TeachingAttachment updateManyAndReturn
   */
  export type TeachingAttachmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingAttachment
     */
    select?: TeachingAttachmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingAttachment
     */
    omit?: TeachingAttachmentOmit<ExtArgs> | null
    /**
     * The data used to update TeachingAttachments.
     */
    data: XOR<TeachingAttachmentUpdateManyMutationInput, TeachingAttachmentUncheckedUpdateManyInput>
    /**
     * Filter which TeachingAttachments to update
     */
    where?: TeachingAttachmentWhereInput
    /**
     * Limit how many TeachingAttachments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingAttachmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeachingAttachment upsert
   */
  export type TeachingAttachmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingAttachment
     */
    select?: TeachingAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingAttachment
     */
    omit?: TeachingAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingAttachmentInclude<ExtArgs> | null
    /**
     * The filter to search for the TeachingAttachment to update in case it exists.
     */
    where: TeachingAttachmentWhereUniqueInput
    /**
     * In case the TeachingAttachment found by the `where` argument doesn't exist, create a new TeachingAttachment with this data.
     */
    create: XOR<TeachingAttachmentCreateInput, TeachingAttachmentUncheckedCreateInput>
    /**
     * In case the TeachingAttachment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeachingAttachmentUpdateInput, TeachingAttachmentUncheckedUpdateInput>
  }

  /**
   * TeachingAttachment delete
   */
  export type TeachingAttachmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingAttachment
     */
    select?: TeachingAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingAttachment
     */
    omit?: TeachingAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingAttachmentInclude<ExtArgs> | null
    /**
     * Filter which TeachingAttachment to delete.
     */
    where: TeachingAttachmentWhereUniqueInput
  }

  /**
   * TeachingAttachment deleteMany
   */
  export type TeachingAttachmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeachingAttachments to delete
     */
    where?: TeachingAttachmentWhereInput
    /**
     * Limit how many TeachingAttachments to delete.
     */
    limit?: number
  }

  /**
   * TeachingAttachment without action
   */
  export type TeachingAttachmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingAttachment
     */
    select?: TeachingAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingAttachment
     */
    omit?: TeachingAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingAttachmentInclude<ExtArgs> | null
  }


  /**
   * Model Blog
   */

  export type AggregateBlog = {
    _count: BlogCountAggregateOutputType | null
    _avg: BlogAvgAggregateOutputType | null
    _sum: BlogSumAggregateOutputType | null
    _min: BlogMinAggregateOutputType | null
    _max: BlogMaxAggregateOutputType | null
  }

  export type BlogAvgAggregateOutputType = {
    viewCount: number | null
  }

  export type BlogSumAggregateOutputType = {
    viewCount: number | null
  }

  export type BlogMinAggregateOutputType = {
    id: string | null
    slug: string | null
    title: string | null
    titleAm: string | null
    titleOm: string | null
    excerpt: string | null
    excerptAm: string | null
    excerptOm: string | null
    coverImage: string | null
    status: $Enums.BlogStatus | null
    publishedAt: Date | null
    viewCount: number | null
    membersOnly: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BlogMaxAggregateOutputType = {
    id: string | null
    slug: string | null
    title: string | null
    titleAm: string | null
    titleOm: string | null
    excerpt: string | null
    excerptAm: string | null
    excerptOm: string | null
    coverImage: string | null
    status: $Enums.BlogStatus | null
    publishedAt: Date | null
    viewCount: number | null
    membersOnly: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BlogCountAggregateOutputType = {
    id: number
    slug: number
    title: number
    titleAm: number
    titleOm: number
    excerpt: number
    excerptAm: number
    excerptOm: number
    content: number
    contentAm: number
    contentOm: number
    coverImage: number
    status: number
    publishedAt: number
    viewCount: number
    membersOnly: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BlogAvgAggregateInputType = {
    viewCount?: true
  }

  export type BlogSumAggregateInputType = {
    viewCount?: true
  }

  export type BlogMinAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    titleAm?: true
    titleOm?: true
    excerpt?: true
    excerptAm?: true
    excerptOm?: true
    coverImage?: true
    status?: true
    publishedAt?: true
    viewCount?: true
    membersOnly?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BlogMaxAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    titleAm?: true
    titleOm?: true
    excerpt?: true
    excerptAm?: true
    excerptOm?: true
    coverImage?: true
    status?: true
    publishedAt?: true
    viewCount?: true
    membersOnly?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BlogCountAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    titleAm?: true
    titleOm?: true
    excerpt?: true
    excerptAm?: true
    excerptOm?: true
    content?: true
    contentAm?: true
    contentOm?: true
    coverImage?: true
    status?: true
    publishedAt?: true
    viewCount?: true
    membersOnly?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BlogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Blog to aggregate.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Blogs
    **/
    _count?: true | BlogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BlogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BlogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlogMaxAggregateInputType
  }

  export type GetBlogAggregateType<T extends BlogAggregateArgs> = {
        [P in keyof T & keyof AggregateBlog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlog[P]>
      : GetScalarType<T[P], AggregateBlog[P]>
  }




  export type BlogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogWhereInput
    orderBy?: BlogOrderByWithAggregationInput | BlogOrderByWithAggregationInput[]
    by: BlogScalarFieldEnum[] | BlogScalarFieldEnum
    having?: BlogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlogCountAggregateInputType | true
    _avg?: BlogAvgAggregateInputType
    _sum?: BlogSumAggregateInputType
    _min?: BlogMinAggregateInputType
    _max?: BlogMaxAggregateInputType
  }

  export type BlogGroupByOutputType = {
    id: string
    slug: string
    title: string
    titleAm: string | null
    titleOm: string | null
    excerpt: string | null
    excerptAm: string | null
    excerptOm: string | null
    content: JsonValue
    contentAm: JsonValue | null
    contentOm: JsonValue | null
    coverImage: string | null
    status: $Enums.BlogStatus
    publishedAt: Date | null
    viewCount: number
    membersOnly: boolean
    createdAt: Date
    updatedAt: Date
    _count: BlogCountAggregateOutputType | null
    _avg: BlogAvgAggregateOutputType | null
    _sum: BlogSumAggregateOutputType | null
    _min: BlogMinAggregateOutputType | null
    _max: BlogMaxAggregateOutputType | null
  }

  type GetBlogGroupByPayload<T extends BlogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlogGroupByOutputType[P]>
            : GetScalarType<T[P], BlogGroupByOutputType[P]>
        }
      >
    >


  export type BlogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    titleAm?: boolean
    titleOm?: boolean
    excerpt?: boolean
    excerptAm?: boolean
    excerptOm?: boolean
    content?: boolean
    contentAm?: boolean
    contentOm?: boolean
    coverImage?: boolean
    status?: boolean
    publishedAt?: boolean
    viewCount?: boolean
    membersOnly?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    attachments?: boolean | Blog$attachmentsArgs<ExtArgs>
    _count?: boolean | BlogCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blog"]>

  export type BlogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    titleAm?: boolean
    titleOm?: boolean
    excerpt?: boolean
    excerptAm?: boolean
    excerptOm?: boolean
    content?: boolean
    contentAm?: boolean
    contentOm?: boolean
    coverImage?: boolean
    status?: boolean
    publishedAt?: boolean
    viewCount?: boolean
    membersOnly?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["blog"]>

  export type BlogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    titleAm?: boolean
    titleOm?: boolean
    excerpt?: boolean
    excerptAm?: boolean
    excerptOm?: boolean
    content?: boolean
    contentAm?: boolean
    contentOm?: boolean
    coverImage?: boolean
    status?: boolean
    publishedAt?: boolean
    viewCount?: boolean
    membersOnly?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["blog"]>

  export type BlogSelectScalar = {
    id?: boolean
    slug?: boolean
    title?: boolean
    titleAm?: boolean
    titleOm?: boolean
    excerpt?: boolean
    excerptAm?: boolean
    excerptOm?: boolean
    content?: boolean
    contentAm?: boolean
    contentOm?: boolean
    coverImage?: boolean
    status?: boolean
    publishedAt?: boolean
    viewCount?: boolean
    membersOnly?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BlogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "title" | "titleAm" | "titleOm" | "excerpt" | "excerptAm" | "excerptOm" | "content" | "contentAm" | "contentOm" | "coverImage" | "status" | "publishedAt" | "viewCount" | "membersOnly" | "createdAt" | "updatedAt", ExtArgs["result"]["blog"]>
  export type BlogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attachments?: boolean | Blog$attachmentsArgs<ExtArgs>
    _count?: boolean | BlogCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BlogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BlogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BlogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Blog"
    objects: {
      attachments: Prisma.$BlogAttachmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      slug: string
      title: string
      titleAm: string | null
      titleOm: string | null
      excerpt: string | null
      excerptAm: string | null
      excerptOm: string | null
      content: Prisma.JsonValue
      contentAm: Prisma.JsonValue | null
      contentOm: Prisma.JsonValue | null
      coverImage: string | null
      status: $Enums.BlogStatus
      publishedAt: Date | null
      viewCount: number
      membersOnly: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["blog"]>
    composites: {}
  }

  type BlogGetPayload<S extends boolean | null | undefined | BlogDefaultArgs> = $Result.GetResult<Prisma.$BlogPayload, S>

  type BlogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BlogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlogCountAggregateInputType | true
    }

  export interface BlogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Blog'], meta: { name: 'Blog' } }
    /**
     * Find zero or one Blog that matches the filter.
     * @param {BlogFindUniqueArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlogFindUniqueArgs>(args: SelectSubset<T, BlogFindUniqueArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Blog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlogFindUniqueOrThrowArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlogFindUniqueOrThrowArgs>(args: SelectSubset<T, BlogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Blog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogFindFirstArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlogFindFirstArgs>(args?: SelectSubset<T, BlogFindFirstArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Blog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogFindFirstOrThrowArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlogFindFirstOrThrowArgs>(args?: SelectSubset<T, BlogFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Blogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Blogs
     * const blogs = await prisma.blog.findMany()
     * 
     * // Get first 10 Blogs
     * const blogs = await prisma.blog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blogWithIdOnly = await prisma.blog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BlogFindManyArgs>(args?: SelectSubset<T, BlogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Blog.
     * @param {BlogCreateArgs} args - Arguments to create a Blog.
     * @example
     * // Create one Blog
     * const Blog = await prisma.blog.create({
     *   data: {
     *     // ... data to create a Blog
     *   }
     * })
     * 
     */
    create<T extends BlogCreateArgs>(args: SelectSubset<T, BlogCreateArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Blogs.
     * @param {BlogCreateManyArgs} args - Arguments to create many Blogs.
     * @example
     * // Create many Blogs
     * const blog = await prisma.blog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlogCreateManyArgs>(args?: SelectSubset<T, BlogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Blogs and returns the data saved in the database.
     * @param {BlogCreateManyAndReturnArgs} args - Arguments to create many Blogs.
     * @example
     * // Create many Blogs
     * const blog = await prisma.blog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Blogs and only return the `id`
     * const blogWithIdOnly = await prisma.blog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BlogCreateManyAndReturnArgs>(args?: SelectSubset<T, BlogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Blog.
     * @param {BlogDeleteArgs} args - Arguments to delete one Blog.
     * @example
     * // Delete one Blog
     * const Blog = await prisma.blog.delete({
     *   where: {
     *     // ... filter to delete one Blog
     *   }
     * })
     * 
     */
    delete<T extends BlogDeleteArgs>(args: SelectSubset<T, BlogDeleteArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Blog.
     * @param {BlogUpdateArgs} args - Arguments to update one Blog.
     * @example
     * // Update one Blog
     * const blog = await prisma.blog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlogUpdateArgs>(args: SelectSubset<T, BlogUpdateArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Blogs.
     * @param {BlogDeleteManyArgs} args - Arguments to filter Blogs to delete.
     * @example
     * // Delete a few Blogs
     * const { count } = await prisma.blog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlogDeleteManyArgs>(args?: SelectSubset<T, BlogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Blogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Blogs
     * const blog = await prisma.blog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlogUpdateManyArgs>(args: SelectSubset<T, BlogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Blogs and returns the data updated in the database.
     * @param {BlogUpdateManyAndReturnArgs} args - Arguments to update many Blogs.
     * @example
     * // Update many Blogs
     * const blog = await prisma.blog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Blogs and only return the `id`
     * const blogWithIdOnly = await prisma.blog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BlogUpdateManyAndReturnArgs>(args: SelectSubset<T, BlogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Blog.
     * @param {BlogUpsertArgs} args - Arguments to update or create a Blog.
     * @example
     * // Update or create a Blog
     * const blog = await prisma.blog.upsert({
     *   create: {
     *     // ... data to create a Blog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Blog we want to update
     *   }
     * })
     */
    upsert<T extends BlogUpsertArgs>(args: SelectSubset<T, BlogUpsertArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Blogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogCountArgs} args - Arguments to filter Blogs to count.
     * @example
     * // Count the number of Blogs
     * const count = await prisma.blog.count({
     *   where: {
     *     // ... the filter for the Blogs we want to count
     *   }
     * })
    **/
    count<T extends BlogCountArgs>(
      args?: Subset<T, BlogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Blog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BlogAggregateArgs>(args: Subset<T, BlogAggregateArgs>): Prisma.PrismaPromise<GetBlogAggregateType<T>>

    /**
     * Group by Blog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogGroupByArgs} args - Group by arguments.
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
      T extends BlogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlogGroupByArgs['orderBy'] }
        : { orderBy?: BlogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BlogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Blog model
   */
  readonly fields: BlogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Blog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    attachments<T extends Blog$attachmentsArgs<ExtArgs> = {}>(args?: Subset<T, Blog$attachmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogAttachmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Blog model
   */
  interface BlogFieldRefs {
    readonly id: FieldRef<"Blog", 'String'>
    readonly slug: FieldRef<"Blog", 'String'>
    readonly title: FieldRef<"Blog", 'String'>
    readonly titleAm: FieldRef<"Blog", 'String'>
    readonly titleOm: FieldRef<"Blog", 'String'>
    readonly excerpt: FieldRef<"Blog", 'String'>
    readonly excerptAm: FieldRef<"Blog", 'String'>
    readonly excerptOm: FieldRef<"Blog", 'String'>
    readonly content: FieldRef<"Blog", 'Json'>
    readonly contentAm: FieldRef<"Blog", 'Json'>
    readonly contentOm: FieldRef<"Blog", 'Json'>
    readonly coverImage: FieldRef<"Blog", 'String'>
    readonly status: FieldRef<"Blog", 'BlogStatus'>
    readonly publishedAt: FieldRef<"Blog", 'DateTime'>
    readonly viewCount: FieldRef<"Blog", 'Int'>
    readonly membersOnly: FieldRef<"Blog", 'Boolean'>
    readonly createdAt: FieldRef<"Blog", 'DateTime'>
    readonly updatedAt: FieldRef<"Blog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Blog findUnique
   */
  export type BlogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where: BlogWhereUniqueInput
  }

  /**
   * Blog findUniqueOrThrow
   */
  export type BlogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where: BlogWhereUniqueInput
  }

  /**
   * Blog findFirst
   */
  export type BlogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blogs.
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blogs.
     */
    distinct?: BlogScalarFieldEnum | BlogScalarFieldEnum[]
  }

  /**
   * Blog findFirstOrThrow
   */
  export type BlogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blogs.
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blogs.
     */
    distinct?: BlogScalarFieldEnum | BlogScalarFieldEnum[]
  }

  /**
   * Blog findMany
   */
  export type BlogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter, which Blogs to fetch.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Blogs.
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blogs.
     */
    distinct?: BlogScalarFieldEnum | BlogScalarFieldEnum[]
  }

  /**
   * Blog create
   */
  export type BlogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * The data needed to create a Blog.
     */
    data: XOR<BlogCreateInput, BlogUncheckedCreateInput>
  }

  /**
   * Blog createMany
   */
  export type BlogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Blogs.
     */
    data: BlogCreateManyInput | BlogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Blog createManyAndReturn
   */
  export type BlogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * The data used to create many Blogs.
     */
    data: BlogCreateManyInput | BlogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Blog update
   */
  export type BlogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * The data needed to update a Blog.
     */
    data: XOR<BlogUpdateInput, BlogUncheckedUpdateInput>
    /**
     * Choose, which Blog to update.
     */
    where: BlogWhereUniqueInput
  }

  /**
   * Blog updateMany
   */
  export type BlogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Blogs.
     */
    data: XOR<BlogUpdateManyMutationInput, BlogUncheckedUpdateManyInput>
    /**
     * Filter which Blogs to update
     */
    where?: BlogWhereInput
    /**
     * Limit how many Blogs to update.
     */
    limit?: number
  }

  /**
   * Blog updateManyAndReturn
   */
  export type BlogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * The data used to update Blogs.
     */
    data: XOR<BlogUpdateManyMutationInput, BlogUncheckedUpdateManyInput>
    /**
     * Filter which Blogs to update
     */
    where?: BlogWhereInput
    /**
     * Limit how many Blogs to update.
     */
    limit?: number
  }

  /**
   * Blog upsert
   */
  export type BlogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * The filter to search for the Blog to update in case it exists.
     */
    where: BlogWhereUniqueInput
    /**
     * In case the Blog found by the `where` argument doesn't exist, create a new Blog with this data.
     */
    create: XOR<BlogCreateInput, BlogUncheckedCreateInput>
    /**
     * In case the Blog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlogUpdateInput, BlogUncheckedUpdateInput>
  }

  /**
   * Blog delete
   */
  export type BlogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter which Blog to delete.
     */
    where: BlogWhereUniqueInput
  }

  /**
   * Blog deleteMany
   */
  export type BlogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Blogs to delete
     */
    where?: BlogWhereInput
    /**
     * Limit how many Blogs to delete.
     */
    limit?: number
  }

  /**
   * Blog.attachments
   */
  export type Blog$attachmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogAttachment
     */
    select?: BlogAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogAttachment
     */
    omit?: BlogAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogAttachmentInclude<ExtArgs> | null
    where?: BlogAttachmentWhereInput
    orderBy?: BlogAttachmentOrderByWithRelationInput | BlogAttachmentOrderByWithRelationInput[]
    cursor?: BlogAttachmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlogAttachmentScalarFieldEnum | BlogAttachmentScalarFieldEnum[]
  }

  /**
   * Blog without action
   */
  export type BlogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
  }


  /**
   * Model BlogAttachment
   */

  export type AggregateBlogAttachment = {
    _count: BlogAttachmentCountAggregateOutputType | null
    _min: BlogAttachmentMinAggregateOutputType | null
    _max: BlogAttachmentMaxAggregateOutputType | null
  }

  export type BlogAttachmentMinAggregateOutputType = {
    id: string | null
    blogId: string | null
    title: string | null
    storagePath: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BlogAttachmentMaxAggregateOutputType = {
    id: string | null
    blogId: string | null
    title: string | null
    storagePath: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BlogAttachmentCountAggregateOutputType = {
    id: number
    blogId: number
    title: number
    storagePath: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BlogAttachmentMinAggregateInputType = {
    id?: true
    blogId?: true
    title?: true
    storagePath?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BlogAttachmentMaxAggregateInputType = {
    id?: true
    blogId?: true
    title?: true
    storagePath?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BlogAttachmentCountAggregateInputType = {
    id?: true
    blogId?: true
    title?: true
    storagePath?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BlogAttachmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogAttachment to aggregate.
     */
    where?: BlogAttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogAttachments to fetch.
     */
    orderBy?: BlogAttachmentOrderByWithRelationInput | BlogAttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlogAttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogAttachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogAttachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BlogAttachments
    **/
    _count?: true | BlogAttachmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlogAttachmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlogAttachmentMaxAggregateInputType
  }

  export type GetBlogAttachmentAggregateType<T extends BlogAttachmentAggregateArgs> = {
        [P in keyof T & keyof AggregateBlogAttachment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlogAttachment[P]>
      : GetScalarType<T[P], AggregateBlogAttachment[P]>
  }




  export type BlogAttachmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogAttachmentWhereInput
    orderBy?: BlogAttachmentOrderByWithAggregationInput | BlogAttachmentOrderByWithAggregationInput[]
    by: BlogAttachmentScalarFieldEnum[] | BlogAttachmentScalarFieldEnum
    having?: BlogAttachmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlogAttachmentCountAggregateInputType | true
    _min?: BlogAttachmentMinAggregateInputType
    _max?: BlogAttachmentMaxAggregateInputType
  }

  export type BlogAttachmentGroupByOutputType = {
    id: string
    blogId: string
    title: string | null
    storagePath: string
    createdAt: Date
    updatedAt: Date
    _count: BlogAttachmentCountAggregateOutputType | null
    _min: BlogAttachmentMinAggregateOutputType | null
    _max: BlogAttachmentMaxAggregateOutputType | null
  }

  type GetBlogAttachmentGroupByPayload<T extends BlogAttachmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlogAttachmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlogAttachmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlogAttachmentGroupByOutputType[P]>
            : GetScalarType<T[P], BlogAttachmentGroupByOutputType[P]>
        }
      >
    >


  export type BlogAttachmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    blogId?: boolean
    title?: boolean
    storagePath?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    blog?: boolean | BlogDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogAttachment"]>

  export type BlogAttachmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    blogId?: boolean
    title?: boolean
    storagePath?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    blog?: boolean | BlogDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogAttachment"]>

  export type BlogAttachmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    blogId?: boolean
    title?: boolean
    storagePath?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    blog?: boolean | BlogDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogAttachment"]>

  export type BlogAttachmentSelectScalar = {
    id?: boolean
    blogId?: boolean
    title?: boolean
    storagePath?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BlogAttachmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "blogId" | "title" | "storagePath" | "createdAt" | "updatedAt", ExtArgs["result"]["blogAttachment"]>
  export type BlogAttachmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blog?: boolean | BlogDefaultArgs<ExtArgs>
  }
  export type BlogAttachmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blog?: boolean | BlogDefaultArgs<ExtArgs>
  }
  export type BlogAttachmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blog?: boolean | BlogDefaultArgs<ExtArgs>
  }

  export type $BlogAttachmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BlogAttachment"
    objects: {
      blog: Prisma.$BlogPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      blogId: string
      title: string | null
      storagePath: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["blogAttachment"]>
    composites: {}
  }

  type BlogAttachmentGetPayload<S extends boolean | null | undefined | BlogAttachmentDefaultArgs> = $Result.GetResult<Prisma.$BlogAttachmentPayload, S>

  type BlogAttachmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BlogAttachmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlogAttachmentCountAggregateInputType | true
    }

  export interface BlogAttachmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BlogAttachment'], meta: { name: 'BlogAttachment' } }
    /**
     * Find zero or one BlogAttachment that matches the filter.
     * @param {BlogAttachmentFindUniqueArgs} args - Arguments to find a BlogAttachment
     * @example
     * // Get one BlogAttachment
     * const blogAttachment = await prisma.blogAttachment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlogAttachmentFindUniqueArgs>(args: SelectSubset<T, BlogAttachmentFindUniqueArgs<ExtArgs>>): Prisma__BlogAttachmentClient<$Result.GetResult<Prisma.$BlogAttachmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BlogAttachment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlogAttachmentFindUniqueOrThrowArgs} args - Arguments to find a BlogAttachment
     * @example
     * // Get one BlogAttachment
     * const blogAttachment = await prisma.blogAttachment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlogAttachmentFindUniqueOrThrowArgs>(args: SelectSubset<T, BlogAttachmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlogAttachmentClient<$Result.GetResult<Prisma.$BlogAttachmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlogAttachment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogAttachmentFindFirstArgs} args - Arguments to find a BlogAttachment
     * @example
     * // Get one BlogAttachment
     * const blogAttachment = await prisma.blogAttachment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlogAttachmentFindFirstArgs>(args?: SelectSubset<T, BlogAttachmentFindFirstArgs<ExtArgs>>): Prisma__BlogAttachmentClient<$Result.GetResult<Prisma.$BlogAttachmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlogAttachment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogAttachmentFindFirstOrThrowArgs} args - Arguments to find a BlogAttachment
     * @example
     * // Get one BlogAttachment
     * const blogAttachment = await prisma.blogAttachment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlogAttachmentFindFirstOrThrowArgs>(args?: SelectSubset<T, BlogAttachmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlogAttachmentClient<$Result.GetResult<Prisma.$BlogAttachmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BlogAttachments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogAttachmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BlogAttachments
     * const blogAttachments = await prisma.blogAttachment.findMany()
     * 
     * // Get first 10 BlogAttachments
     * const blogAttachments = await prisma.blogAttachment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blogAttachmentWithIdOnly = await prisma.blogAttachment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BlogAttachmentFindManyArgs>(args?: SelectSubset<T, BlogAttachmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogAttachmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BlogAttachment.
     * @param {BlogAttachmentCreateArgs} args - Arguments to create a BlogAttachment.
     * @example
     * // Create one BlogAttachment
     * const BlogAttachment = await prisma.blogAttachment.create({
     *   data: {
     *     // ... data to create a BlogAttachment
     *   }
     * })
     * 
     */
    create<T extends BlogAttachmentCreateArgs>(args: SelectSubset<T, BlogAttachmentCreateArgs<ExtArgs>>): Prisma__BlogAttachmentClient<$Result.GetResult<Prisma.$BlogAttachmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BlogAttachments.
     * @param {BlogAttachmentCreateManyArgs} args - Arguments to create many BlogAttachments.
     * @example
     * // Create many BlogAttachments
     * const blogAttachment = await prisma.blogAttachment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlogAttachmentCreateManyArgs>(args?: SelectSubset<T, BlogAttachmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BlogAttachments and returns the data saved in the database.
     * @param {BlogAttachmentCreateManyAndReturnArgs} args - Arguments to create many BlogAttachments.
     * @example
     * // Create many BlogAttachments
     * const blogAttachment = await prisma.blogAttachment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BlogAttachments and only return the `id`
     * const blogAttachmentWithIdOnly = await prisma.blogAttachment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BlogAttachmentCreateManyAndReturnArgs>(args?: SelectSubset<T, BlogAttachmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogAttachmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BlogAttachment.
     * @param {BlogAttachmentDeleteArgs} args - Arguments to delete one BlogAttachment.
     * @example
     * // Delete one BlogAttachment
     * const BlogAttachment = await prisma.blogAttachment.delete({
     *   where: {
     *     // ... filter to delete one BlogAttachment
     *   }
     * })
     * 
     */
    delete<T extends BlogAttachmentDeleteArgs>(args: SelectSubset<T, BlogAttachmentDeleteArgs<ExtArgs>>): Prisma__BlogAttachmentClient<$Result.GetResult<Prisma.$BlogAttachmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BlogAttachment.
     * @param {BlogAttachmentUpdateArgs} args - Arguments to update one BlogAttachment.
     * @example
     * // Update one BlogAttachment
     * const blogAttachment = await prisma.blogAttachment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlogAttachmentUpdateArgs>(args: SelectSubset<T, BlogAttachmentUpdateArgs<ExtArgs>>): Prisma__BlogAttachmentClient<$Result.GetResult<Prisma.$BlogAttachmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BlogAttachments.
     * @param {BlogAttachmentDeleteManyArgs} args - Arguments to filter BlogAttachments to delete.
     * @example
     * // Delete a few BlogAttachments
     * const { count } = await prisma.blogAttachment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlogAttachmentDeleteManyArgs>(args?: SelectSubset<T, BlogAttachmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlogAttachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogAttachmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BlogAttachments
     * const blogAttachment = await prisma.blogAttachment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlogAttachmentUpdateManyArgs>(args: SelectSubset<T, BlogAttachmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlogAttachments and returns the data updated in the database.
     * @param {BlogAttachmentUpdateManyAndReturnArgs} args - Arguments to update many BlogAttachments.
     * @example
     * // Update many BlogAttachments
     * const blogAttachment = await prisma.blogAttachment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BlogAttachments and only return the `id`
     * const blogAttachmentWithIdOnly = await prisma.blogAttachment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BlogAttachmentUpdateManyAndReturnArgs>(args: SelectSubset<T, BlogAttachmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogAttachmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BlogAttachment.
     * @param {BlogAttachmentUpsertArgs} args - Arguments to update or create a BlogAttachment.
     * @example
     * // Update or create a BlogAttachment
     * const blogAttachment = await prisma.blogAttachment.upsert({
     *   create: {
     *     // ... data to create a BlogAttachment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BlogAttachment we want to update
     *   }
     * })
     */
    upsert<T extends BlogAttachmentUpsertArgs>(args: SelectSubset<T, BlogAttachmentUpsertArgs<ExtArgs>>): Prisma__BlogAttachmentClient<$Result.GetResult<Prisma.$BlogAttachmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BlogAttachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogAttachmentCountArgs} args - Arguments to filter BlogAttachments to count.
     * @example
     * // Count the number of BlogAttachments
     * const count = await prisma.blogAttachment.count({
     *   where: {
     *     // ... the filter for the BlogAttachments we want to count
     *   }
     * })
    **/
    count<T extends BlogAttachmentCountArgs>(
      args?: Subset<T, BlogAttachmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlogAttachmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BlogAttachment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogAttachmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BlogAttachmentAggregateArgs>(args: Subset<T, BlogAttachmentAggregateArgs>): Prisma.PrismaPromise<GetBlogAttachmentAggregateType<T>>

    /**
     * Group by BlogAttachment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogAttachmentGroupByArgs} args - Group by arguments.
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
      T extends BlogAttachmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlogAttachmentGroupByArgs['orderBy'] }
        : { orderBy?: BlogAttachmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BlogAttachmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlogAttachmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BlogAttachment model
   */
  readonly fields: BlogAttachmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BlogAttachment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlogAttachmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    blog<T extends BlogDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BlogDefaultArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the BlogAttachment model
   */
  interface BlogAttachmentFieldRefs {
    readonly id: FieldRef<"BlogAttachment", 'String'>
    readonly blogId: FieldRef<"BlogAttachment", 'String'>
    readonly title: FieldRef<"BlogAttachment", 'String'>
    readonly storagePath: FieldRef<"BlogAttachment", 'String'>
    readonly createdAt: FieldRef<"BlogAttachment", 'DateTime'>
    readonly updatedAt: FieldRef<"BlogAttachment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BlogAttachment findUnique
   */
  export type BlogAttachmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogAttachment
     */
    select?: BlogAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogAttachment
     */
    omit?: BlogAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogAttachmentInclude<ExtArgs> | null
    /**
     * Filter, which BlogAttachment to fetch.
     */
    where: BlogAttachmentWhereUniqueInput
  }

  /**
   * BlogAttachment findUniqueOrThrow
   */
  export type BlogAttachmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogAttachment
     */
    select?: BlogAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogAttachment
     */
    omit?: BlogAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogAttachmentInclude<ExtArgs> | null
    /**
     * Filter, which BlogAttachment to fetch.
     */
    where: BlogAttachmentWhereUniqueInput
  }

  /**
   * BlogAttachment findFirst
   */
  export type BlogAttachmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogAttachment
     */
    select?: BlogAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogAttachment
     */
    omit?: BlogAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogAttachmentInclude<ExtArgs> | null
    /**
     * Filter, which BlogAttachment to fetch.
     */
    where?: BlogAttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogAttachments to fetch.
     */
    orderBy?: BlogAttachmentOrderByWithRelationInput | BlogAttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogAttachments.
     */
    cursor?: BlogAttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogAttachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogAttachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogAttachments.
     */
    distinct?: BlogAttachmentScalarFieldEnum | BlogAttachmentScalarFieldEnum[]
  }

  /**
   * BlogAttachment findFirstOrThrow
   */
  export type BlogAttachmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogAttachment
     */
    select?: BlogAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogAttachment
     */
    omit?: BlogAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogAttachmentInclude<ExtArgs> | null
    /**
     * Filter, which BlogAttachment to fetch.
     */
    where?: BlogAttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogAttachments to fetch.
     */
    orderBy?: BlogAttachmentOrderByWithRelationInput | BlogAttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogAttachments.
     */
    cursor?: BlogAttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogAttachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogAttachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogAttachments.
     */
    distinct?: BlogAttachmentScalarFieldEnum | BlogAttachmentScalarFieldEnum[]
  }

  /**
   * BlogAttachment findMany
   */
  export type BlogAttachmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogAttachment
     */
    select?: BlogAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogAttachment
     */
    omit?: BlogAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogAttachmentInclude<ExtArgs> | null
    /**
     * Filter, which BlogAttachments to fetch.
     */
    where?: BlogAttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogAttachments to fetch.
     */
    orderBy?: BlogAttachmentOrderByWithRelationInput | BlogAttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BlogAttachments.
     */
    cursor?: BlogAttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogAttachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogAttachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogAttachments.
     */
    distinct?: BlogAttachmentScalarFieldEnum | BlogAttachmentScalarFieldEnum[]
  }

  /**
   * BlogAttachment create
   */
  export type BlogAttachmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogAttachment
     */
    select?: BlogAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogAttachment
     */
    omit?: BlogAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogAttachmentInclude<ExtArgs> | null
    /**
     * The data needed to create a BlogAttachment.
     */
    data: XOR<BlogAttachmentCreateInput, BlogAttachmentUncheckedCreateInput>
  }

  /**
   * BlogAttachment createMany
   */
  export type BlogAttachmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BlogAttachments.
     */
    data: BlogAttachmentCreateManyInput | BlogAttachmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BlogAttachment createManyAndReturn
   */
  export type BlogAttachmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogAttachment
     */
    select?: BlogAttachmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlogAttachment
     */
    omit?: BlogAttachmentOmit<ExtArgs> | null
    /**
     * The data used to create many BlogAttachments.
     */
    data: BlogAttachmentCreateManyInput | BlogAttachmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogAttachmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BlogAttachment update
   */
  export type BlogAttachmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogAttachment
     */
    select?: BlogAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogAttachment
     */
    omit?: BlogAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogAttachmentInclude<ExtArgs> | null
    /**
     * The data needed to update a BlogAttachment.
     */
    data: XOR<BlogAttachmentUpdateInput, BlogAttachmentUncheckedUpdateInput>
    /**
     * Choose, which BlogAttachment to update.
     */
    where: BlogAttachmentWhereUniqueInput
  }

  /**
   * BlogAttachment updateMany
   */
  export type BlogAttachmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BlogAttachments.
     */
    data: XOR<BlogAttachmentUpdateManyMutationInput, BlogAttachmentUncheckedUpdateManyInput>
    /**
     * Filter which BlogAttachments to update
     */
    where?: BlogAttachmentWhereInput
    /**
     * Limit how many BlogAttachments to update.
     */
    limit?: number
  }

  /**
   * BlogAttachment updateManyAndReturn
   */
  export type BlogAttachmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogAttachment
     */
    select?: BlogAttachmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlogAttachment
     */
    omit?: BlogAttachmentOmit<ExtArgs> | null
    /**
     * The data used to update BlogAttachments.
     */
    data: XOR<BlogAttachmentUpdateManyMutationInput, BlogAttachmentUncheckedUpdateManyInput>
    /**
     * Filter which BlogAttachments to update
     */
    where?: BlogAttachmentWhereInput
    /**
     * Limit how many BlogAttachments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogAttachmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BlogAttachment upsert
   */
  export type BlogAttachmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogAttachment
     */
    select?: BlogAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogAttachment
     */
    omit?: BlogAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogAttachmentInclude<ExtArgs> | null
    /**
     * The filter to search for the BlogAttachment to update in case it exists.
     */
    where: BlogAttachmentWhereUniqueInput
    /**
     * In case the BlogAttachment found by the `where` argument doesn't exist, create a new BlogAttachment with this data.
     */
    create: XOR<BlogAttachmentCreateInput, BlogAttachmentUncheckedCreateInput>
    /**
     * In case the BlogAttachment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlogAttachmentUpdateInput, BlogAttachmentUncheckedUpdateInput>
  }

  /**
   * BlogAttachment delete
   */
  export type BlogAttachmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogAttachment
     */
    select?: BlogAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogAttachment
     */
    omit?: BlogAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogAttachmentInclude<ExtArgs> | null
    /**
     * Filter which BlogAttachment to delete.
     */
    where: BlogAttachmentWhereUniqueInput
  }

  /**
   * BlogAttachment deleteMany
   */
  export type BlogAttachmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogAttachments to delete
     */
    where?: BlogAttachmentWhereInput
    /**
     * Limit how many BlogAttachments to delete.
     */
    limit?: number
  }

  /**
   * BlogAttachment without action
   */
  export type BlogAttachmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogAttachment
     */
    select?: BlogAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogAttachment
     */
    omit?: BlogAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogAttachmentInclude<ExtArgs> | null
  }


  /**
   * Model Event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventAvgAggregateOutputType = {
    position: number | null
  }

  export type EventSumAggregateOutputType = {
    position: number | null
  }

  export type EventMinAggregateOutputType = {
    id: string | null
    title: string | null
    date: Date | null
    imageUrl: string | null
    storagePath: string | null
    active: boolean | null
    position: number | null
    membersOnly: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventMaxAggregateOutputType = {
    id: string | null
    title: string | null
    date: Date | null
    imageUrl: string | null
    storagePath: string | null
    active: boolean | null
    position: number | null
    membersOnly: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventCountAggregateOutputType = {
    id: number
    title: number
    date: number
    imageUrl: number
    storagePath: number
    active: number
    position: number
    membersOnly: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EventAvgAggregateInputType = {
    position?: true
  }

  export type EventSumAggregateInputType = {
    position?: true
  }

  export type EventMinAggregateInputType = {
    id?: true
    title?: true
    date?: true
    imageUrl?: true
    storagePath?: true
    active?: true
    position?: true
    membersOnly?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventMaxAggregateInputType = {
    id?: true
    title?: true
    date?: true
    imageUrl?: true
    storagePath?: true
    active?: true
    position?: true
    membersOnly?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventCountAggregateInputType = {
    id?: true
    title?: true
    date?: true
    imageUrl?: true
    storagePath?: true
    active?: true
    position?: true
    membersOnly?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event to aggregate.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMaxAggregateInputType
  }

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>
  }




  export type EventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
    orderBy?: EventOrderByWithAggregationInput | EventOrderByWithAggregationInput[]
    by: EventScalarFieldEnum[] | EventScalarFieldEnum
    having?: EventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCountAggregateInputType | true
    _avg?: EventAvgAggregateInputType
    _sum?: EventSumAggregateInputType
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }

  export type EventGroupByOutputType = {
    id: string
    title: string | null
    date: Date | null
    imageUrl: string
    storagePath: string | null
    active: boolean
    position: number
    membersOnly: boolean
    createdAt: Date
    updatedAt: Date
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends EventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>
        }
      >
    >


  export type EventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    date?: boolean
    imageUrl?: boolean
    storagePath?: boolean
    active?: boolean
    position?: boolean
    membersOnly?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["event"]>

  export type EventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    date?: boolean
    imageUrl?: boolean
    storagePath?: boolean
    active?: boolean
    position?: boolean
    membersOnly?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["event"]>

  export type EventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    date?: boolean
    imageUrl?: boolean
    storagePath?: boolean
    active?: boolean
    position?: boolean
    membersOnly?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["event"]>

  export type EventSelectScalar = {
    id?: boolean
    title?: boolean
    date?: boolean
    imageUrl?: boolean
    storagePath?: boolean
    active?: boolean
    position?: boolean
    membersOnly?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "date" | "imageUrl" | "storagePath" | "active" | "position" | "membersOnly" | "createdAt" | "updatedAt", ExtArgs["result"]["event"]>

  export type $EventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string | null
      date: Date | null
      imageUrl: string
      /**
       * * Object path within the Supabase Storage bucket (for delete/replace).
       */
      storagePath: string | null
      active: boolean
      position: number
      membersOnly: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["event"]>
    composites: {}
  }

  type EventGetPayload<S extends boolean | null | undefined | EventDefaultArgs> = $Result.GetResult<Prisma.$EventPayload, S>

  type EventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventCountAggregateInputType | true
    }

  export interface EventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Event'], meta: { name: 'Event' } }
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFindUniqueArgs>(args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Event that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(args: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFindFirstArgs>(args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventFindManyArgs>(args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     * 
     */
    create<T extends EventCreateArgs>(args: SelectSubset<T, EventCreateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Events.
     * @param {EventCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventCreateManyArgs>(args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Events and returns the data saved in the database.
     * @param {EventCreateManyAndReturnArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventCreateManyAndReturnArgs>(args?: SelectSubset<T, EventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     * 
     */
    delete<T extends EventDeleteArgs>(args: SelectSubset<T, EventDeleteArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventUpdateArgs>(args: SelectSubset<T, EventUpdateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventDeleteManyArgs>(args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventUpdateManyArgs>(args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events and returns the data updated in the database.
     * @param {EventUpdateManyAndReturnArgs} args - Arguments to update many Events.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EventUpdateManyAndReturnArgs>(args: SelectSubset<T, EventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
     */
    upsert<T extends EventUpsertArgs>(args: SelectSubset<T, EventUpsertArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventAggregateArgs>(args: Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
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
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs['orderBy'] }
        : { orderBy?: EventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Event model
   */
  readonly fields: EventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Event model
   */
  interface EventFieldRefs {
    readonly id: FieldRef<"Event", 'String'>
    readonly title: FieldRef<"Event", 'String'>
    readonly date: FieldRef<"Event", 'DateTime'>
    readonly imageUrl: FieldRef<"Event", 'String'>
    readonly storagePath: FieldRef<"Event", 'String'>
    readonly active: FieldRef<"Event", 'Boolean'>
    readonly position: FieldRef<"Event", 'Int'>
    readonly membersOnly: FieldRef<"Event", 'Boolean'>
    readonly createdAt: FieldRef<"Event", 'DateTime'>
    readonly updatedAt: FieldRef<"Event", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findFirst
   */
  export type EventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findMany
   */
  export type EventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event create
   */
  export type EventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data needed to create a Event.
     */
    data: XOR<EventCreateInput, EventUncheckedCreateInput>
  }

  /**
   * Event createMany
   */
  export type EventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Event createManyAndReturn
   */
  export type EventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Event update
   */
  export type EventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data needed to update a Event.
     */
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>
    /**
     * Choose, which Event to update.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Event updateManyAndReturn
   */
  export type EventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Event upsert
   */
  export type EventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: EventWhereUniqueInput
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: XOR<EventCreateInput, EventUncheckedCreateInput>
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>
  }

  /**
   * Event delete
   */
  export type EventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Filter which Event to delete.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to delete.
     */
    limit?: number
  }

  /**
   * Event without action
   */
  export type EventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
  }


  /**
   * Model Manifesto
   */

  export type AggregateManifesto = {
    _count: ManifestoCountAggregateOutputType | null
    _min: ManifestoMinAggregateOutputType | null
    _max: ManifestoMaxAggregateOutputType | null
  }

  export type ManifestoMinAggregateOutputType = {
    id: string | null
    updatedAt: Date | null
  }

  export type ManifestoMaxAggregateOutputType = {
    id: string | null
    updatedAt: Date | null
  }

  export type ManifestoCountAggregateOutputType = {
    id: number
    content: number
    updatedAt: number
    _all: number
  }


  export type ManifestoMinAggregateInputType = {
    id?: true
    updatedAt?: true
  }

  export type ManifestoMaxAggregateInputType = {
    id?: true
    updatedAt?: true
  }

  export type ManifestoCountAggregateInputType = {
    id?: true
    content?: true
    updatedAt?: true
    _all?: true
  }

  export type ManifestoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Manifesto to aggregate.
     */
    where?: ManifestoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Manifestos to fetch.
     */
    orderBy?: ManifestoOrderByWithRelationInput | ManifestoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ManifestoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Manifestos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Manifestos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Manifestos
    **/
    _count?: true | ManifestoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ManifestoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ManifestoMaxAggregateInputType
  }

  export type GetManifestoAggregateType<T extends ManifestoAggregateArgs> = {
        [P in keyof T & keyof AggregateManifesto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateManifesto[P]>
      : GetScalarType<T[P], AggregateManifesto[P]>
  }




  export type ManifestoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ManifestoWhereInput
    orderBy?: ManifestoOrderByWithAggregationInput | ManifestoOrderByWithAggregationInput[]
    by: ManifestoScalarFieldEnum[] | ManifestoScalarFieldEnum
    having?: ManifestoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ManifestoCountAggregateInputType | true
    _min?: ManifestoMinAggregateInputType
    _max?: ManifestoMaxAggregateInputType
  }

  export type ManifestoGroupByOutputType = {
    id: string
    content: JsonValue
    updatedAt: Date
    _count: ManifestoCountAggregateOutputType | null
    _min: ManifestoMinAggregateOutputType | null
    _max: ManifestoMaxAggregateOutputType | null
  }

  type GetManifestoGroupByPayload<T extends ManifestoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ManifestoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ManifestoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ManifestoGroupByOutputType[P]>
            : GetScalarType<T[P], ManifestoGroupByOutputType[P]>
        }
      >
    >


  export type ManifestoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["manifesto"]>

  export type ManifestoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["manifesto"]>

  export type ManifestoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["manifesto"]>

  export type ManifestoSelectScalar = {
    id?: boolean
    content?: boolean
    updatedAt?: boolean
  }

  export type ManifestoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "updatedAt", ExtArgs["result"]["manifesto"]>

  export type $ManifestoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Manifesto"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: Prisma.JsonValue
      updatedAt: Date
    }, ExtArgs["result"]["manifesto"]>
    composites: {}
  }

  type ManifestoGetPayload<S extends boolean | null | undefined | ManifestoDefaultArgs> = $Result.GetResult<Prisma.$ManifestoPayload, S>

  type ManifestoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ManifestoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ManifestoCountAggregateInputType | true
    }

  export interface ManifestoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Manifesto'], meta: { name: 'Manifesto' } }
    /**
     * Find zero or one Manifesto that matches the filter.
     * @param {ManifestoFindUniqueArgs} args - Arguments to find a Manifesto
     * @example
     * // Get one Manifesto
     * const manifesto = await prisma.manifesto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ManifestoFindUniqueArgs>(args: SelectSubset<T, ManifestoFindUniqueArgs<ExtArgs>>): Prisma__ManifestoClient<$Result.GetResult<Prisma.$ManifestoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Manifesto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ManifestoFindUniqueOrThrowArgs} args - Arguments to find a Manifesto
     * @example
     * // Get one Manifesto
     * const manifesto = await prisma.manifesto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ManifestoFindUniqueOrThrowArgs>(args: SelectSubset<T, ManifestoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ManifestoClient<$Result.GetResult<Prisma.$ManifestoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Manifesto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManifestoFindFirstArgs} args - Arguments to find a Manifesto
     * @example
     * // Get one Manifesto
     * const manifesto = await prisma.manifesto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ManifestoFindFirstArgs>(args?: SelectSubset<T, ManifestoFindFirstArgs<ExtArgs>>): Prisma__ManifestoClient<$Result.GetResult<Prisma.$ManifestoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Manifesto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManifestoFindFirstOrThrowArgs} args - Arguments to find a Manifesto
     * @example
     * // Get one Manifesto
     * const manifesto = await prisma.manifesto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ManifestoFindFirstOrThrowArgs>(args?: SelectSubset<T, ManifestoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ManifestoClient<$Result.GetResult<Prisma.$ManifestoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Manifestos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManifestoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Manifestos
     * const manifestos = await prisma.manifesto.findMany()
     * 
     * // Get first 10 Manifestos
     * const manifestos = await prisma.manifesto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const manifestoWithIdOnly = await prisma.manifesto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ManifestoFindManyArgs>(args?: SelectSubset<T, ManifestoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ManifestoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Manifesto.
     * @param {ManifestoCreateArgs} args - Arguments to create a Manifesto.
     * @example
     * // Create one Manifesto
     * const Manifesto = await prisma.manifesto.create({
     *   data: {
     *     // ... data to create a Manifesto
     *   }
     * })
     * 
     */
    create<T extends ManifestoCreateArgs>(args: SelectSubset<T, ManifestoCreateArgs<ExtArgs>>): Prisma__ManifestoClient<$Result.GetResult<Prisma.$ManifestoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Manifestos.
     * @param {ManifestoCreateManyArgs} args - Arguments to create many Manifestos.
     * @example
     * // Create many Manifestos
     * const manifesto = await prisma.manifesto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ManifestoCreateManyArgs>(args?: SelectSubset<T, ManifestoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Manifestos and returns the data saved in the database.
     * @param {ManifestoCreateManyAndReturnArgs} args - Arguments to create many Manifestos.
     * @example
     * // Create many Manifestos
     * const manifesto = await prisma.manifesto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Manifestos and only return the `id`
     * const manifestoWithIdOnly = await prisma.manifesto.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ManifestoCreateManyAndReturnArgs>(args?: SelectSubset<T, ManifestoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ManifestoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Manifesto.
     * @param {ManifestoDeleteArgs} args - Arguments to delete one Manifesto.
     * @example
     * // Delete one Manifesto
     * const Manifesto = await prisma.manifesto.delete({
     *   where: {
     *     // ... filter to delete one Manifesto
     *   }
     * })
     * 
     */
    delete<T extends ManifestoDeleteArgs>(args: SelectSubset<T, ManifestoDeleteArgs<ExtArgs>>): Prisma__ManifestoClient<$Result.GetResult<Prisma.$ManifestoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Manifesto.
     * @param {ManifestoUpdateArgs} args - Arguments to update one Manifesto.
     * @example
     * // Update one Manifesto
     * const manifesto = await prisma.manifesto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ManifestoUpdateArgs>(args: SelectSubset<T, ManifestoUpdateArgs<ExtArgs>>): Prisma__ManifestoClient<$Result.GetResult<Prisma.$ManifestoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Manifestos.
     * @param {ManifestoDeleteManyArgs} args - Arguments to filter Manifestos to delete.
     * @example
     * // Delete a few Manifestos
     * const { count } = await prisma.manifesto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ManifestoDeleteManyArgs>(args?: SelectSubset<T, ManifestoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Manifestos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManifestoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Manifestos
     * const manifesto = await prisma.manifesto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ManifestoUpdateManyArgs>(args: SelectSubset<T, ManifestoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Manifestos and returns the data updated in the database.
     * @param {ManifestoUpdateManyAndReturnArgs} args - Arguments to update many Manifestos.
     * @example
     * // Update many Manifestos
     * const manifesto = await prisma.manifesto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Manifestos and only return the `id`
     * const manifestoWithIdOnly = await prisma.manifesto.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ManifestoUpdateManyAndReturnArgs>(args: SelectSubset<T, ManifestoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ManifestoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Manifesto.
     * @param {ManifestoUpsertArgs} args - Arguments to update or create a Manifesto.
     * @example
     * // Update or create a Manifesto
     * const manifesto = await prisma.manifesto.upsert({
     *   create: {
     *     // ... data to create a Manifesto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Manifesto we want to update
     *   }
     * })
     */
    upsert<T extends ManifestoUpsertArgs>(args: SelectSubset<T, ManifestoUpsertArgs<ExtArgs>>): Prisma__ManifestoClient<$Result.GetResult<Prisma.$ManifestoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Manifestos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManifestoCountArgs} args - Arguments to filter Manifestos to count.
     * @example
     * // Count the number of Manifestos
     * const count = await prisma.manifesto.count({
     *   where: {
     *     // ... the filter for the Manifestos we want to count
     *   }
     * })
    **/
    count<T extends ManifestoCountArgs>(
      args?: Subset<T, ManifestoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ManifestoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Manifesto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManifestoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ManifestoAggregateArgs>(args: Subset<T, ManifestoAggregateArgs>): Prisma.PrismaPromise<GetManifestoAggregateType<T>>

    /**
     * Group by Manifesto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManifestoGroupByArgs} args - Group by arguments.
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
      T extends ManifestoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ManifestoGroupByArgs['orderBy'] }
        : { orderBy?: ManifestoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ManifestoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetManifestoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Manifesto model
   */
  readonly fields: ManifestoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Manifesto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ManifestoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Manifesto model
   */
  interface ManifestoFieldRefs {
    readonly id: FieldRef<"Manifesto", 'String'>
    readonly content: FieldRef<"Manifesto", 'Json'>
    readonly updatedAt: FieldRef<"Manifesto", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Manifesto findUnique
   */
  export type ManifestoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manifesto
     */
    select?: ManifestoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manifesto
     */
    omit?: ManifestoOmit<ExtArgs> | null
    /**
     * Filter, which Manifesto to fetch.
     */
    where: ManifestoWhereUniqueInput
  }

  /**
   * Manifesto findUniqueOrThrow
   */
  export type ManifestoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manifesto
     */
    select?: ManifestoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manifesto
     */
    omit?: ManifestoOmit<ExtArgs> | null
    /**
     * Filter, which Manifesto to fetch.
     */
    where: ManifestoWhereUniqueInput
  }

  /**
   * Manifesto findFirst
   */
  export type ManifestoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manifesto
     */
    select?: ManifestoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manifesto
     */
    omit?: ManifestoOmit<ExtArgs> | null
    /**
     * Filter, which Manifesto to fetch.
     */
    where?: ManifestoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Manifestos to fetch.
     */
    orderBy?: ManifestoOrderByWithRelationInput | ManifestoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Manifestos.
     */
    cursor?: ManifestoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Manifestos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Manifestos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Manifestos.
     */
    distinct?: ManifestoScalarFieldEnum | ManifestoScalarFieldEnum[]
  }

  /**
   * Manifesto findFirstOrThrow
   */
  export type ManifestoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manifesto
     */
    select?: ManifestoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manifesto
     */
    omit?: ManifestoOmit<ExtArgs> | null
    /**
     * Filter, which Manifesto to fetch.
     */
    where?: ManifestoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Manifestos to fetch.
     */
    orderBy?: ManifestoOrderByWithRelationInput | ManifestoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Manifestos.
     */
    cursor?: ManifestoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Manifestos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Manifestos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Manifestos.
     */
    distinct?: ManifestoScalarFieldEnum | ManifestoScalarFieldEnum[]
  }

  /**
   * Manifesto findMany
   */
  export type ManifestoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manifesto
     */
    select?: ManifestoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manifesto
     */
    omit?: ManifestoOmit<ExtArgs> | null
    /**
     * Filter, which Manifestos to fetch.
     */
    where?: ManifestoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Manifestos to fetch.
     */
    orderBy?: ManifestoOrderByWithRelationInput | ManifestoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Manifestos.
     */
    cursor?: ManifestoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Manifestos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Manifestos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Manifestos.
     */
    distinct?: ManifestoScalarFieldEnum | ManifestoScalarFieldEnum[]
  }

  /**
   * Manifesto create
   */
  export type ManifestoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manifesto
     */
    select?: ManifestoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manifesto
     */
    omit?: ManifestoOmit<ExtArgs> | null
    /**
     * The data needed to create a Manifesto.
     */
    data: XOR<ManifestoCreateInput, ManifestoUncheckedCreateInput>
  }

  /**
   * Manifesto createMany
   */
  export type ManifestoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Manifestos.
     */
    data: ManifestoCreateManyInput | ManifestoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Manifesto createManyAndReturn
   */
  export type ManifestoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manifesto
     */
    select?: ManifestoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Manifesto
     */
    omit?: ManifestoOmit<ExtArgs> | null
    /**
     * The data used to create many Manifestos.
     */
    data: ManifestoCreateManyInput | ManifestoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Manifesto update
   */
  export type ManifestoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manifesto
     */
    select?: ManifestoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manifesto
     */
    omit?: ManifestoOmit<ExtArgs> | null
    /**
     * The data needed to update a Manifesto.
     */
    data: XOR<ManifestoUpdateInput, ManifestoUncheckedUpdateInput>
    /**
     * Choose, which Manifesto to update.
     */
    where: ManifestoWhereUniqueInput
  }

  /**
   * Manifesto updateMany
   */
  export type ManifestoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Manifestos.
     */
    data: XOR<ManifestoUpdateManyMutationInput, ManifestoUncheckedUpdateManyInput>
    /**
     * Filter which Manifestos to update
     */
    where?: ManifestoWhereInput
    /**
     * Limit how many Manifestos to update.
     */
    limit?: number
  }

  /**
   * Manifesto updateManyAndReturn
   */
  export type ManifestoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manifesto
     */
    select?: ManifestoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Manifesto
     */
    omit?: ManifestoOmit<ExtArgs> | null
    /**
     * The data used to update Manifestos.
     */
    data: XOR<ManifestoUpdateManyMutationInput, ManifestoUncheckedUpdateManyInput>
    /**
     * Filter which Manifestos to update
     */
    where?: ManifestoWhereInput
    /**
     * Limit how many Manifestos to update.
     */
    limit?: number
  }

  /**
   * Manifesto upsert
   */
  export type ManifestoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manifesto
     */
    select?: ManifestoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manifesto
     */
    omit?: ManifestoOmit<ExtArgs> | null
    /**
     * The filter to search for the Manifesto to update in case it exists.
     */
    where: ManifestoWhereUniqueInput
    /**
     * In case the Manifesto found by the `where` argument doesn't exist, create a new Manifesto with this data.
     */
    create: XOR<ManifestoCreateInput, ManifestoUncheckedCreateInput>
    /**
     * In case the Manifesto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ManifestoUpdateInput, ManifestoUncheckedUpdateInput>
  }

  /**
   * Manifesto delete
   */
  export type ManifestoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manifesto
     */
    select?: ManifestoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manifesto
     */
    omit?: ManifestoOmit<ExtArgs> | null
    /**
     * Filter which Manifesto to delete.
     */
    where: ManifestoWhereUniqueInput
  }

  /**
   * Manifesto deleteMany
   */
  export type ManifestoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Manifestos to delete
     */
    where?: ManifestoWhereInput
    /**
     * Limit how many Manifestos to delete.
     */
    limit?: number
  }

  /**
   * Manifesto without action
   */
  export type ManifestoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manifesto
     */
    select?: ManifestoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manifesto
     */
    omit?: ManifestoOmit<ExtArgs> | null
  }


  /**
   * Model MembershipRequest
   */

  export type AggregateMembershipRequest = {
    _count: MembershipRequestCountAggregateOutputType | null
    _min: MembershipRequestMinAggregateOutputType | null
    _max: MembershipRequestMaxAggregateOutputType | null
  }

  export type MembershipRequestMinAggregateOutputType = {
    id: string | null
    userId: string | null
    fullName: string | null
    email: string | null
    phone: string | null
    telegram: string | null
    message: string | null
    status: $Enums.MembershipStatus | null
    paymentMethod: string | null
    paymentProofStoragePath: string | null
    paymentSubmittedAt: Date | null
    approvedAt: Date | null
    approvedBy: string | null
    rejectionReason: string | null
    membershipStartsAt: Date | null
    membershipExpiresAt: Date | null
    renewedFromId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MembershipRequestMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    fullName: string | null
    email: string | null
    phone: string | null
    telegram: string | null
    message: string | null
    status: $Enums.MembershipStatus | null
    paymentMethod: string | null
    paymentProofStoragePath: string | null
    paymentSubmittedAt: Date | null
    approvedAt: Date | null
    approvedBy: string | null
    rejectionReason: string | null
    membershipStartsAt: Date | null
    membershipExpiresAt: Date | null
    renewedFromId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MembershipRequestCountAggregateOutputType = {
    id: number
    userId: number
    fullName: number
    email: number
    phone: number
    telegram: number
    message: number
    status: number
    paymentMethod: number
    paymentProofStoragePath: number
    paymentSubmittedAt: number
    approvedAt: number
    approvedBy: number
    rejectionReason: number
    membershipStartsAt: number
    membershipExpiresAt: number
    renewedFromId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MembershipRequestMinAggregateInputType = {
    id?: true
    userId?: true
    fullName?: true
    email?: true
    phone?: true
    telegram?: true
    message?: true
    status?: true
    paymentMethod?: true
    paymentProofStoragePath?: true
    paymentSubmittedAt?: true
    approvedAt?: true
    approvedBy?: true
    rejectionReason?: true
    membershipStartsAt?: true
    membershipExpiresAt?: true
    renewedFromId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MembershipRequestMaxAggregateInputType = {
    id?: true
    userId?: true
    fullName?: true
    email?: true
    phone?: true
    telegram?: true
    message?: true
    status?: true
    paymentMethod?: true
    paymentProofStoragePath?: true
    paymentSubmittedAt?: true
    approvedAt?: true
    approvedBy?: true
    rejectionReason?: true
    membershipStartsAt?: true
    membershipExpiresAt?: true
    renewedFromId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MembershipRequestCountAggregateInputType = {
    id?: true
    userId?: true
    fullName?: true
    email?: true
    phone?: true
    telegram?: true
    message?: true
    status?: true
    paymentMethod?: true
    paymentProofStoragePath?: true
    paymentSubmittedAt?: true
    approvedAt?: true
    approvedBy?: true
    rejectionReason?: true
    membershipStartsAt?: true
    membershipExpiresAt?: true
    renewedFromId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MembershipRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MembershipRequest to aggregate.
     */
    where?: MembershipRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MembershipRequests to fetch.
     */
    orderBy?: MembershipRequestOrderByWithRelationInput | MembershipRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MembershipRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MembershipRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MembershipRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MembershipRequests
    **/
    _count?: true | MembershipRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MembershipRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MembershipRequestMaxAggregateInputType
  }

  export type GetMembershipRequestAggregateType<T extends MembershipRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateMembershipRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMembershipRequest[P]>
      : GetScalarType<T[P], AggregateMembershipRequest[P]>
  }




  export type MembershipRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MembershipRequestWhereInput
    orderBy?: MembershipRequestOrderByWithAggregationInput | MembershipRequestOrderByWithAggregationInput[]
    by: MembershipRequestScalarFieldEnum[] | MembershipRequestScalarFieldEnum
    having?: MembershipRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MembershipRequestCountAggregateInputType | true
    _min?: MembershipRequestMinAggregateInputType
    _max?: MembershipRequestMaxAggregateInputType
  }

  export type MembershipRequestGroupByOutputType = {
    id: string
    userId: string | null
    fullName: string
    email: string
    phone: string
    telegram: string | null
    message: string | null
    status: $Enums.MembershipStatus
    paymentMethod: string | null
    paymentProofStoragePath: string | null
    paymentSubmittedAt: Date | null
    approvedAt: Date | null
    approvedBy: string | null
    rejectionReason: string | null
    membershipStartsAt: Date | null
    membershipExpiresAt: Date | null
    renewedFromId: string | null
    createdAt: Date
    updatedAt: Date
    _count: MembershipRequestCountAggregateOutputType | null
    _min: MembershipRequestMinAggregateOutputType | null
    _max: MembershipRequestMaxAggregateOutputType | null
  }

  type GetMembershipRequestGroupByPayload<T extends MembershipRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MembershipRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MembershipRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MembershipRequestGroupByOutputType[P]>
            : GetScalarType<T[P], MembershipRequestGroupByOutputType[P]>
        }
      >
    >


  export type MembershipRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    fullName?: boolean
    email?: boolean
    phone?: boolean
    telegram?: boolean
    message?: boolean
    status?: boolean
    paymentMethod?: boolean
    paymentProofStoragePath?: boolean
    paymentSubmittedAt?: boolean
    approvedAt?: boolean
    approvedBy?: boolean
    rejectionReason?: boolean
    membershipStartsAt?: boolean
    membershipExpiresAt?: boolean
    renewedFromId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | MembershipRequest$userArgs<ExtArgs>
  }, ExtArgs["result"]["membershipRequest"]>

  export type MembershipRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    fullName?: boolean
    email?: boolean
    phone?: boolean
    telegram?: boolean
    message?: boolean
    status?: boolean
    paymentMethod?: boolean
    paymentProofStoragePath?: boolean
    paymentSubmittedAt?: boolean
    approvedAt?: boolean
    approvedBy?: boolean
    rejectionReason?: boolean
    membershipStartsAt?: boolean
    membershipExpiresAt?: boolean
    renewedFromId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | MembershipRequest$userArgs<ExtArgs>
  }, ExtArgs["result"]["membershipRequest"]>

  export type MembershipRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    fullName?: boolean
    email?: boolean
    phone?: boolean
    telegram?: boolean
    message?: boolean
    status?: boolean
    paymentMethod?: boolean
    paymentProofStoragePath?: boolean
    paymentSubmittedAt?: boolean
    approvedAt?: boolean
    approvedBy?: boolean
    rejectionReason?: boolean
    membershipStartsAt?: boolean
    membershipExpiresAt?: boolean
    renewedFromId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | MembershipRequest$userArgs<ExtArgs>
  }, ExtArgs["result"]["membershipRequest"]>

  export type MembershipRequestSelectScalar = {
    id?: boolean
    userId?: boolean
    fullName?: boolean
    email?: boolean
    phone?: boolean
    telegram?: boolean
    message?: boolean
    status?: boolean
    paymentMethod?: boolean
    paymentProofStoragePath?: boolean
    paymentSubmittedAt?: boolean
    approvedAt?: boolean
    approvedBy?: boolean
    rejectionReason?: boolean
    membershipStartsAt?: boolean
    membershipExpiresAt?: boolean
    renewedFromId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MembershipRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "fullName" | "email" | "phone" | "telegram" | "message" | "status" | "paymentMethod" | "paymentProofStoragePath" | "paymentSubmittedAt" | "approvedAt" | "approvedBy" | "rejectionReason" | "membershipStartsAt" | "membershipExpiresAt" | "renewedFromId" | "createdAt" | "updatedAt", ExtArgs["result"]["membershipRequest"]>
  export type MembershipRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | MembershipRequest$userArgs<ExtArgs>
  }
  export type MembershipRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | MembershipRequest$userArgs<ExtArgs>
  }
  export type MembershipRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | MembershipRequest$userArgs<ExtArgs>
  }

  export type $MembershipRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MembershipRequest"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string | null
      fullName: string
      email: string
      phone: string
      /**
       * Telegram username without @
       */
      telegram: string | null
      message: string | null
      status: $Enums.MembershipStatus
      paymentMethod: string | null
      paymentProofStoragePath: string | null
      paymentSubmittedAt: Date | null
      approvedAt: Date | null
      approvedBy: string | null
      rejectionReason: string | null
      membershipStartsAt: Date | null
      membershipExpiresAt: Date | null
      renewedFromId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["membershipRequest"]>
    composites: {}
  }

  type MembershipRequestGetPayload<S extends boolean | null | undefined | MembershipRequestDefaultArgs> = $Result.GetResult<Prisma.$MembershipRequestPayload, S>

  type MembershipRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MembershipRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MembershipRequestCountAggregateInputType | true
    }

  export interface MembershipRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MembershipRequest'], meta: { name: 'MembershipRequest' } }
    /**
     * Find zero or one MembershipRequest that matches the filter.
     * @param {MembershipRequestFindUniqueArgs} args - Arguments to find a MembershipRequest
     * @example
     * // Get one MembershipRequest
     * const membershipRequest = await prisma.membershipRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MembershipRequestFindUniqueArgs>(args: SelectSubset<T, MembershipRequestFindUniqueArgs<ExtArgs>>): Prisma__MembershipRequestClient<$Result.GetResult<Prisma.$MembershipRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MembershipRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MembershipRequestFindUniqueOrThrowArgs} args - Arguments to find a MembershipRequest
     * @example
     * // Get one MembershipRequest
     * const membershipRequest = await prisma.membershipRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MembershipRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, MembershipRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MembershipRequestClient<$Result.GetResult<Prisma.$MembershipRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MembershipRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipRequestFindFirstArgs} args - Arguments to find a MembershipRequest
     * @example
     * // Get one MembershipRequest
     * const membershipRequest = await prisma.membershipRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MembershipRequestFindFirstArgs>(args?: SelectSubset<T, MembershipRequestFindFirstArgs<ExtArgs>>): Prisma__MembershipRequestClient<$Result.GetResult<Prisma.$MembershipRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MembershipRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipRequestFindFirstOrThrowArgs} args - Arguments to find a MembershipRequest
     * @example
     * // Get one MembershipRequest
     * const membershipRequest = await prisma.membershipRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MembershipRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, MembershipRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__MembershipRequestClient<$Result.GetResult<Prisma.$MembershipRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MembershipRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MembershipRequests
     * const membershipRequests = await prisma.membershipRequest.findMany()
     * 
     * // Get first 10 MembershipRequests
     * const membershipRequests = await prisma.membershipRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const membershipRequestWithIdOnly = await prisma.membershipRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MembershipRequestFindManyArgs>(args?: SelectSubset<T, MembershipRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembershipRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MembershipRequest.
     * @param {MembershipRequestCreateArgs} args - Arguments to create a MembershipRequest.
     * @example
     * // Create one MembershipRequest
     * const MembershipRequest = await prisma.membershipRequest.create({
     *   data: {
     *     // ... data to create a MembershipRequest
     *   }
     * })
     * 
     */
    create<T extends MembershipRequestCreateArgs>(args: SelectSubset<T, MembershipRequestCreateArgs<ExtArgs>>): Prisma__MembershipRequestClient<$Result.GetResult<Prisma.$MembershipRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MembershipRequests.
     * @param {MembershipRequestCreateManyArgs} args - Arguments to create many MembershipRequests.
     * @example
     * // Create many MembershipRequests
     * const membershipRequest = await prisma.membershipRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MembershipRequestCreateManyArgs>(args?: SelectSubset<T, MembershipRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MembershipRequests and returns the data saved in the database.
     * @param {MembershipRequestCreateManyAndReturnArgs} args - Arguments to create many MembershipRequests.
     * @example
     * // Create many MembershipRequests
     * const membershipRequest = await prisma.membershipRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MembershipRequests and only return the `id`
     * const membershipRequestWithIdOnly = await prisma.membershipRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MembershipRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, MembershipRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembershipRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MembershipRequest.
     * @param {MembershipRequestDeleteArgs} args - Arguments to delete one MembershipRequest.
     * @example
     * // Delete one MembershipRequest
     * const MembershipRequest = await prisma.membershipRequest.delete({
     *   where: {
     *     // ... filter to delete one MembershipRequest
     *   }
     * })
     * 
     */
    delete<T extends MembershipRequestDeleteArgs>(args: SelectSubset<T, MembershipRequestDeleteArgs<ExtArgs>>): Prisma__MembershipRequestClient<$Result.GetResult<Prisma.$MembershipRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MembershipRequest.
     * @param {MembershipRequestUpdateArgs} args - Arguments to update one MembershipRequest.
     * @example
     * // Update one MembershipRequest
     * const membershipRequest = await prisma.membershipRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MembershipRequestUpdateArgs>(args: SelectSubset<T, MembershipRequestUpdateArgs<ExtArgs>>): Prisma__MembershipRequestClient<$Result.GetResult<Prisma.$MembershipRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MembershipRequests.
     * @param {MembershipRequestDeleteManyArgs} args - Arguments to filter MembershipRequests to delete.
     * @example
     * // Delete a few MembershipRequests
     * const { count } = await prisma.membershipRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MembershipRequestDeleteManyArgs>(args?: SelectSubset<T, MembershipRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MembershipRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MembershipRequests
     * const membershipRequest = await prisma.membershipRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MembershipRequestUpdateManyArgs>(args: SelectSubset<T, MembershipRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MembershipRequests and returns the data updated in the database.
     * @param {MembershipRequestUpdateManyAndReturnArgs} args - Arguments to update many MembershipRequests.
     * @example
     * // Update many MembershipRequests
     * const membershipRequest = await prisma.membershipRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MembershipRequests and only return the `id`
     * const membershipRequestWithIdOnly = await prisma.membershipRequest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MembershipRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, MembershipRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembershipRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MembershipRequest.
     * @param {MembershipRequestUpsertArgs} args - Arguments to update or create a MembershipRequest.
     * @example
     * // Update or create a MembershipRequest
     * const membershipRequest = await prisma.membershipRequest.upsert({
     *   create: {
     *     // ... data to create a MembershipRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MembershipRequest we want to update
     *   }
     * })
     */
    upsert<T extends MembershipRequestUpsertArgs>(args: SelectSubset<T, MembershipRequestUpsertArgs<ExtArgs>>): Prisma__MembershipRequestClient<$Result.GetResult<Prisma.$MembershipRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MembershipRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipRequestCountArgs} args - Arguments to filter MembershipRequests to count.
     * @example
     * // Count the number of MembershipRequests
     * const count = await prisma.membershipRequest.count({
     *   where: {
     *     // ... the filter for the MembershipRequests we want to count
     *   }
     * })
    **/
    count<T extends MembershipRequestCountArgs>(
      args?: Subset<T, MembershipRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MembershipRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MembershipRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MembershipRequestAggregateArgs>(args: Subset<T, MembershipRequestAggregateArgs>): Prisma.PrismaPromise<GetMembershipRequestAggregateType<T>>

    /**
     * Group by MembershipRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipRequestGroupByArgs} args - Group by arguments.
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
      T extends MembershipRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MembershipRequestGroupByArgs['orderBy'] }
        : { orderBy?: MembershipRequestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MembershipRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMembershipRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MembershipRequest model
   */
  readonly fields: MembershipRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MembershipRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MembershipRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends MembershipRequest$userArgs<ExtArgs> = {}>(args?: Subset<T, MembershipRequest$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MembershipRequest model
   */
  interface MembershipRequestFieldRefs {
    readonly id: FieldRef<"MembershipRequest", 'String'>
    readonly userId: FieldRef<"MembershipRequest", 'String'>
    readonly fullName: FieldRef<"MembershipRequest", 'String'>
    readonly email: FieldRef<"MembershipRequest", 'String'>
    readonly phone: FieldRef<"MembershipRequest", 'String'>
    readonly telegram: FieldRef<"MembershipRequest", 'String'>
    readonly message: FieldRef<"MembershipRequest", 'String'>
    readonly status: FieldRef<"MembershipRequest", 'MembershipStatus'>
    readonly paymentMethod: FieldRef<"MembershipRequest", 'String'>
    readonly paymentProofStoragePath: FieldRef<"MembershipRequest", 'String'>
    readonly paymentSubmittedAt: FieldRef<"MembershipRequest", 'DateTime'>
    readonly approvedAt: FieldRef<"MembershipRequest", 'DateTime'>
    readonly approvedBy: FieldRef<"MembershipRequest", 'String'>
    readonly rejectionReason: FieldRef<"MembershipRequest", 'String'>
    readonly membershipStartsAt: FieldRef<"MembershipRequest", 'DateTime'>
    readonly membershipExpiresAt: FieldRef<"MembershipRequest", 'DateTime'>
    readonly renewedFromId: FieldRef<"MembershipRequest", 'String'>
    readonly createdAt: FieldRef<"MembershipRequest", 'DateTime'>
    readonly updatedAt: FieldRef<"MembershipRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MembershipRequest findUnique
   */
  export type MembershipRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembershipRequest
     */
    select?: MembershipRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembershipRequest
     */
    omit?: MembershipRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipRequestInclude<ExtArgs> | null
    /**
     * Filter, which MembershipRequest to fetch.
     */
    where: MembershipRequestWhereUniqueInput
  }

  /**
   * MembershipRequest findUniqueOrThrow
   */
  export type MembershipRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembershipRequest
     */
    select?: MembershipRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembershipRequest
     */
    omit?: MembershipRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipRequestInclude<ExtArgs> | null
    /**
     * Filter, which MembershipRequest to fetch.
     */
    where: MembershipRequestWhereUniqueInput
  }

  /**
   * MembershipRequest findFirst
   */
  export type MembershipRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembershipRequest
     */
    select?: MembershipRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembershipRequest
     */
    omit?: MembershipRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipRequestInclude<ExtArgs> | null
    /**
     * Filter, which MembershipRequest to fetch.
     */
    where?: MembershipRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MembershipRequests to fetch.
     */
    orderBy?: MembershipRequestOrderByWithRelationInput | MembershipRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MembershipRequests.
     */
    cursor?: MembershipRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MembershipRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MembershipRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MembershipRequests.
     */
    distinct?: MembershipRequestScalarFieldEnum | MembershipRequestScalarFieldEnum[]
  }

  /**
   * MembershipRequest findFirstOrThrow
   */
  export type MembershipRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembershipRequest
     */
    select?: MembershipRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembershipRequest
     */
    omit?: MembershipRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipRequestInclude<ExtArgs> | null
    /**
     * Filter, which MembershipRequest to fetch.
     */
    where?: MembershipRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MembershipRequests to fetch.
     */
    orderBy?: MembershipRequestOrderByWithRelationInput | MembershipRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MembershipRequests.
     */
    cursor?: MembershipRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MembershipRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MembershipRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MembershipRequests.
     */
    distinct?: MembershipRequestScalarFieldEnum | MembershipRequestScalarFieldEnum[]
  }

  /**
   * MembershipRequest findMany
   */
  export type MembershipRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembershipRequest
     */
    select?: MembershipRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembershipRequest
     */
    omit?: MembershipRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipRequestInclude<ExtArgs> | null
    /**
     * Filter, which MembershipRequests to fetch.
     */
    where?: MembershipRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MembershipRequests to fetch.
     */
    orderBy?: MembershipRequestOrderByWithRelationInput | MembershipRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MembershipRequests.
     */
    cursor?: MembershipRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MembershipRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MembershipRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MembershipRequests.
     */
    distinct?: MembershipRequestScalarFieldEnum | MembershipRequestScalarFieldEnum[]
  }

  /**
   * MembershipRequest create
   */
  export type MembershipRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembershipRequest
     */
    select?: MembershipRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembershipRequest
     */
    omit?: MembershipRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a MembershipRequest.
     */
    data: XOR<MembershipRequestCreateInput, MembershipRequestUncheckedCreateInput>
  }

  /**
   * MembershipRequest createMany
   */
  export type MembershipRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MembershipRequests.
     */
    data: MembershipRequestCreateManyInput | MembershipRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MembershipRequest createManyAndReturn
   */
  export type MembershipRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembershipRequest
     */
    select?: MembershipRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MembershipRequest
     */
    omit?: MembershipRequestOmit<ExtArgs> | null
    /**
     * The data used to create many MembershipRequests.
     */
    data: MembershipRequestCreateManyInput | MembershipRequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MembershipRequest update
   */
  export type MembershipRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembershipRequest
     */
    select?: MembershipRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembershipRequest
     */
    omit?: MembershipRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a MembershipRequest.
     */
    data: XOR<MembershipRequestUpdateInput, MembershipRequestUncheckedUpdateInput>
    /**
     * Choose, which MembershipRequest to update.
     */
    where: MembershipRequestWhereUniqueInput
  }

  /**
   * MembershipRequest updateMany
   */
  export type MembershipRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MembershipRequests.
     */
    data: XOR<MembershipRequestUpdateManyMutationInput, MembershipRequestUncheckedUpdateManyInput>
    /**
     * Filter which MembershipRequests to update
     */
    where?: MembershipRequestWhereInput
    /**
     * Limit how many MembershipRequests to update.
     */
    limit?: number
  }

  /**
   * MembershipRequest updateManyAndReturn
   */
  export type MembershipRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembershipRequest
     */
    select?: MembershipRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MembershipRequest
     */
    omit?: MembershipRequestOmit<ExtArgs> | null
    /**
     * The data used to update MembershipRequests.
     */
    data: XOR<MembershipRequestUpdateManyMutationInput, MembershipRequestUncheckedUpdateManyInput>
    /**
     * Filter which MembershipRequests to update
     */
    where?: MembershipRequestWhereInput
    /**
     * Limit how many MembershipRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MembershipRequest upsert
   */
  export type MembershipRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembershipRequest
     */
    select?: MembershipRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembershipRequest
     */
    omit?: MembershipRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the MembershipRequest to update in case it exists.
     */
    where: MembershipRequestWhereUniqueInput
    /**
     * In case the MembershipRequest found by the `where` argument doesn't exist, create a new MembershipRequest with this data.
     */
    create: XOR<MembershipRequestCreateInput, MembershipRequestUncheckedCreateInput>
    /**
     * In case the MembershipRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MembershipRequestUpdateInput, MembershipRequestUncheckedUpdateInput>
  }

  /**
   * MembershipRequest delete
   */
  export type MembershipRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembershipRequest
     */
    select?: MembershipRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembershipRequest
     */
    omit?: MembershipRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipRequestInclude<ExtArgs> | null
    /**
     * Filter which MembershipRequest to delete.
     */
    where: MembershipRequestWhereUniqueInput
  }

  /**
   * MembershipRequest deleteMany
   */
  export type MembershipRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MembershipRequests to delete
     */
    where?: MembershipRequestWhereInput
    /**
     * Limit how many MembershipRequests to delete.
     */
    limit?: number
  }

  /**
   * MembershipRequest.user
   */
  export type MembershipRequest$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * MembershipRequest without action
   */
  export type MembershipRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembershipRequest
     */
    select?: MembershipRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembershipRequest
     */
    omit?: MembershipRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipRequestInclude<ExtArgs> | null
  }


  /**
   * Model MembershipNotification
   */

  export type AggregateMembershipNotification = {
    _count: MembershipNotificationCountAggregateOutputType | null
    _min: MembershipNotificationMinAggregateOutputType | null
    _max: MembershipNotificationMaxAggregateOutputType | null
  }

  export type MembershipNotificationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    body: string | null
    type: string | null
    readAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MembershipNotificationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    body: string | null
    type: string | null
    readAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MembershipNotificationCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    body: number
    type: number
    readAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MembershipNotificationMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    body?: true
    type?: true
    readAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MembershipNotificationMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    body?: true
    type?: true
    readAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MembershipNotificationCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    body?: true
    type?: true
    readAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MembershipNotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MembershipNotification to aggregate.
     */
    where?: MembershipNotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MembershipNotifications to fetch.
     */
    orderBy?: MembershipNotificationOrderByWithRelationInput | MembershipNotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MembershipNotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MembershipNotifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MembershipNotifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MembershipNotifications
    **/
    _count?: true | MembershipNotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MembershipNotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MembershipNotificationMaxAggregateInputType
  }

  export type GetMembershipNotificationAggregateType<T extends MembershipNotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateMembershipNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMembershipNotification[P]>
      : GetScalarType<T[P], AggregateMembershipNotification[P]>
  }




  export type MembershipNotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MembershipNotificationWhereInput
    orderBy?: MembershipNotificationOrderByWithAggregationInput | MembershipNotificationOrderByWithAggregationInput[]
    by: MembershipNotificationScalarFieldEnum[] | MembershipNotificationScalarFieldEnum
    having?: MembershipNotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MembershipNotificationCountAggregateInputType | true
    _min?: MembershipNotificationMinAggregateInputType
    _max?: MembershipNotificationMaxAggregateInputType
  }

  export type MembershipNotificationGroupByOutputType = {
    id: string
    userId: string
    title: string
    body: string | null
    type: string | null
    readAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: MembershipNotificationCountAggregateOutputType | null
    _min: MembershipNotificationMinAggregateOutputType | null
    _max: MembershipNotificationMaxAggregateOutputType | null
  }

  type GetMembershipNotificationGroupByPayload<T extends MembershipNotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MembershipNotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MembershipNotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MembershipNotificationGroupByOutputType[P]>
            : GetScalarType<T[P], MembershipNotificationGroupByOutputType[P]>
        }
      >
    >


  export type MembershipNotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    body?: boolean
    type?: boolean
    readAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["membershipNotification"]>

  export type MembershipNotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    body?: boolean
    type?: boolean
    readAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["membershipNotification"]>

  export type MembershipNotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    body?: boolean
    type?: boolean
    readAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["membershipNotification"]>

  export type MembershipNotificationSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    body?: boolean
    type?: boolean
    readAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MembershipNotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "title" | "body" | "type" | "readAt" | "createdAt" | "updatedAt", ExtArgs["result"]["membershipNotification"]>
  export type MembershipNotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MembershipNotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MembershipNotificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MembershipNotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MembershipNotification"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      title: string
      body: string | null
      type: string | null
      readAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["membershipNotification"]>
    composites: {}
  }

  type MembershipNotificationGetPayload<S extends boolean | null | undefined | MembershipNotificationDefaultArgs> = $Result.GetResult<Prisma.$MembershipNotificationPayload, S>

  type MembershipNotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MembershipNotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MembershipNotificationCountAggregateInputType | true
    }

  export interface MembershipNotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MembershipNotification'], meta: { name: 'MembershipNotification' } }
    /**
     * Find zero or one MembershipNotification that matches the filter.
     * @param {MembershipNotificationFindUniqueArgs} args - Arguments to find a MembershipNotification
     * @example
     * // Get one MembershipNotification
     * const membershipNotification = await prisma.membershipNotification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MembershipNotificationFindUniqueArgs>(args: SelectSubset<T, MembershipNotificationFindUniqueArgs<ExtArgs>>): Prisma__MembershipNotificationClient<$Result.GetResult<Prisma.$MembershipNotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MembershipNotification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MembershipNotificationFindUniqueOrThrowArgs} args - Arguments to find a MembershipNotification
     * @example
     * // Get one MembershipNotification
     * const membershipNotification = await prisma.membershipNotification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MembershipNotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, MembershipNotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MembershipNotificationClient<$Result.GetResult<Prisma.$MembershipNotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MembershipNotification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipNotificationFindFirstArgs} args - Arguments to find a MembershipNotification
     * @example
     * // Get one MembershipNotification
     * const membershipNotification = await prisma.membershipNotification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MembershipNotificationFindFirstArgs>(args?: SelectSubset<T, MembershipNotificationFindFirstArgs<ExtArgs>>): Prisma__MembershipNotificationClient<$Result.GetResult<Prisma.$MembershipNotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MembershipNotification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipNotificationFindFirstOrThrowArgs} args - Arguments to find a MembershipNotification
     * @example
     * // Get one MembershipNotification
     * const membershipNotification = await prisma.membershipNotification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MembershipNotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, MembershipNotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__MembershipNotificationClient<$Result.GetResult<Prisma.$MembershipNotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MembershipNotifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipNotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MembershipNotifications
     * const membershipNotifications = await prisma.membershipNotification.findMany()
     * 
     * // Get first 10 MembershipNotifications
     * const membershipNotifications = await prisma.membershipNotification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const membershipNotificationWithIdOnly = await prisma.membershipNotification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MembershipNotificationFindManyArgs>(args?: SelectSubset<T, MembershipNotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembershipNotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MembershipNotification.
     * @param {MembershipNotificationCreateArgs} args - Arguments to create a MembershipNotification.
     * @example
     * // Create one MembershipNotification
     * const MembershipNotification = await prisma.membershipNotification.create({
     *   data: {
     *     // ... data to create a MembershipNotification
     *   }
     * })
     * 
     */
    create<T extends MembershipNotificationCreateArgs>(args: SelectSubset<T, MembershipNotificationCreateArgs<ExtArgs>>): Prisma__MembershipNotificationClient<$Result.GetResult<Prisma.$MembershipNotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MembershipNotifications.
     * @param {MembershipNotificationCreateManyArgs} args - Arguments to create many MembershipNotifications.
     * @example
     * // Create many MembershipNotifications
     * const membershipNotification = await prisma.membershipNotification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MembershipNotificationCreateManyArgs>(args?: SelectSubset<T, MembershipNotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MembershipNotifications and returns the data saved in the database.
     * @param {MembershipNotificationCreateManyAndReturnArgs} args - Arguments to create many MembershipNotifications.
     * @example
     * // Create many MembershipNotifications
     * const membershipNotification = await prisma.membershipNotification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MembershipNotifications and only return the `id`
     * const membershipNotificationWithIdOnly = await prisma.membershipNotification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MembershipNotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, MembershipNotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembershipNotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MembershipNotification.
     * @param {MembershipNotificationDeleteArgs} args - Arguments to delete one MembershipNotification.
     * @example
     * // Delete one MembershipNotification
     * const MembershipNotification = await prisma.membershipNotification.delete({
     *   where: {
     *     // ... filter to delete one MembershipNotification
     *   }
     * })
     * 
     */
    delete<T extends MembershipNotificationDeleteArgs>(args: SelectSubset<T, MembershipNotificationDeleteArgs<ExtArgs>>): Prisma__MembershipNotificationClient<$Result.GetResult<Prisma.$MembershipNotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MembershipNotification.
     * @param {MembershipNotificationUpdateArgs} args - Arguments to update one MembershipNotification.
     * @example
     * // Update one MembershipNotification
     * const membershipNotification = await prisma.membershipNotification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MembershipNotificationUpdateArgs>(args: SelectSubset<T, MembershipNotificationUpdateArgs<ExtArgs>>): Prisma__MembershipNotificationClient<$Result.GetResult<Prisma.$MembershipNotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MembershipNotifications.
     * @param {MembershipNotificationDeleteManyArgs} args - Arguments to filter MembershipNotifications to delete.
     * @example
     * // Delete a few MembershipNotifications
     * const { count } = await prisma.membershipNotification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MembershipNotificationDeleteManyArgs>(args?: SelectSubset<T, MembershipNotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MembershipNotifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipNotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MembershipNotifications
     * const membershipNotification = await prisma.membershipNotification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MembershipNotificationUpdateManyArgs>(args: SelectSubset<T, MembershipNotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MembershipNotifications and returns the data updated in the database.
     * @param {MembershipNotificationUpdateManyAndReturnArgs} args - Arguments to update many MembershipNotifications.
     * @example
     * // Update many MembershipNotifications
     * const membershipNotification = await prisma.membershipNotification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MembershipNotifications and only return the `id`
     * const membershipNotificationWithIdOnly = await prisma.membershipNotification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MembershipNotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, MembershipNotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembershipNotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MembershipNotification.
     * @param {MembershipNotificationUpsertArgs} args - Arguments to update or create a MembershipNotification.
     * @example
     * // Update or create a MembershipNotification
     * const membershipNotification = await prisma.membershipNotification.upsert({
     *   create: {
     *     // ... data to create a MembershipNotification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MembershipNotification we want to update
     *   }
     * })
     */
    upsert<T extends MembershipNotificationUpsertArgs>(args: SelectSubset<T, MembershipNotificationUpsertArgs<ExtArgs>>): Prisma__MembershipNotificationClient<$Result.GetResult<Prisma.$MembershipNotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MembershipNotifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipNotificationCountArgs} args - Arguments to filter MembershipNotifications to count.
     * @example
     * // Count the number of MembershipNotifications
     * const count = await prisma.membershipNotification.count({
     *   where: {
     *     // ... the filter for the MembershipNotifications we want to count
     *   }
     * })
    **/
    count<T extends MembershipNotificationCountArgs>(
      args?: Subset<T, MembershipNotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MembershipNotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MembershipNotification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipNotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MembershipNotificationAggregateArgs>(args: Subset<T, MembershipNotificationAggregateArgs>): Prisma.PrismaPromise<GetMembershipNotificationAggregateType<T>>

    /**
     * Group by MembershipNotification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipNotificationGroupByArgs} args - Group by arguments.
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
      T extends MembershipNotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MembershipNotificationGroupByArgs['orderBy'] }
        : { orderBy?: MembershipNotificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MembershipNotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMembershipNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MembershipNotification model
   */
  readonly fields: MembershipNotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MembershipNotification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MembershipNotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MembershipNotification model
   */
  interface MembershipNotificationFieldRefs {
    readonly id: FieldRef<"MembershipNotification", 'String'>
    readonly userId: FieldRef<"MembershipNotification", 'String'>
    readonly title: FieldRef<"MembershipNotification", 'String'>
    readonly body: FieldRef<"MembershipNotification", 'String'>
    readonly type: FieldRef<"MembershipNotification", 'String'>
    readonly readAt: FieldRef<"MembershipNotification", 'DateTime'>
    readonly createdAt: FieldRef<"MembershipNotification", 'DateTime'>
    readonly updatedAt: FieldRef<"MembershipNotification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MembershipNotification findUnique
   */
  export type MembershipNotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembershipNotification
     */
    select?: MembershipNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembershipNotification
     */
    omit?: MembershipNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipNotificationInclude<ExtArgs> | null
    /**
     * Filter, which MembershipNotification to fetch.
     */
    where: MembershipNotificationWhereUniqueInput
  }

  /**
   * MembershipNotification findUniqueOrThrow
   */
  export type MembershipNotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembershipNotification
     */
    select?: MembershipNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembershipNotification
     */
    omit?: MembershipNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipNotificationInclude<ExtArgs> | null
    /**
     * Filter, which MembershipNotification to fetch.
     */
    where: MembershipNotificationWhereUniqueInput
  }

  /**
   * MembershipNotification findFirst
   */
  export type MembershipNotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembershipNotification
     */
    select?: MembershipNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembershipNotification
     */
    omit?: MembershipNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipNotificationInclude<ExtArgs> | null
    /**
     * Filter, which MembershipNotification to fetch.
     */
    where?: MembershipNotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MembershipNotifications to fetch.
     */
    orderBy?: MembershipNotificationOrderByWithRelationInput | MembershipNotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MembershipNotifications.
     */
    cursor?: MembershipNotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MembershipNotifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MembershipNotifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MembershipNotifications.
     */
    distinct?: MembershipNotificationScalarFieldEnum | MembershipNotificationScalarFieldEnum[]
  }

  /**
   * MembershipNotification findFirstOrThrow
   */
  export type MembershipNotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembershipNotification
     */
    select?: MembershipNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembershipNotification
     */
    omit?: MembershipNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipNotificationInclude<ExtArgs> | null
    /**
     * Filter, which MembershipNotification to fetch.
     */
    where?: MembershipNotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MembershipNotifications to fetch.
     */
    orderBy?: MembershipNotificationOrderByWithRelationInput | MembershipNotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MembershipNotifications.
     */
    cursor?: MembershipNotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MembershipNotifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MembershipNotifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MembershipNotifications.
     */
    distinct?: MembershipNotificationScalarFieldEnum | MembershipNotificationScalarFieldEnum[]
  }

  /**
   * MembershipNotification findMany
   */
  export type MembershipNotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembershipNotification
     */
    select?: MembershipNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembershipNotification
     */
    omit?: MembershipNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipNotificationInclude<ExtArgs> | null
    /**
     * Filter, which MembershipNotifications to fetch.
     */
    where?: MembershipNotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MembershipNotifications to fetch.
     */
    orderBy?: MembershipNotificationOrderByWithRelationInput | MembershipNotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MembershipNotifications.
     */
    cursor?: MembershipNotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MembershipNotifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MembershipNotifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MembershipNotifications.
     */
    distinct?: MembershipNotificationScalarFieldEnum | MembershipNotificationScalarFieldEnum[]
  }

  /**
   * MembershipNotification create
   */
  export type MembershipNotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembershipNotification
     */
    select?: MembershipNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembershipNotification
     */
    omit?: MembershipNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipNotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a MembershipNotification.
     */
    data: XOR<MembershipNotificationCreateInput, MembershipNotificationUncheckedCreateInput>
  }

  /**
   * MembershipNotification createMany
   */
  export type MembershipNotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MembershipNotifications.
     */
    data: MembershipNotificationCreateManyInput | MembershipNotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MembershipNotification createManyAndReturn
   */
  export type MembershipNotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembershipNotification
     */
    select?: MembershipNotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MembershipNotification
     */
    omit?: MembershipNotificationOmit<ExtArgs> | null
    /**
     * The data used to create many MembershipNotifications.
     */
    data: MembershipNotificationCreateManyInput | MembershipNotificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipNotificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MembershipNotification update
   */
  export type MembershipNotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembershipNotification
     */
    select?: MembershipNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembershipNotification
     */
    omit?: MembershipNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipNotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a MembershipNotification.
     */
    data: XOR<MembershipNotificationUpdateInput, MembershipNotificationUncheckedUpdateInput>
    /**
     * Choose, which MembershipNotification to update.
     */
    where: MembershipNotificationWhereUniqueInput
  }

  /**
   * MembershipNotification updateMany
   */
  export type MembershipNotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MembershipNotifications.
     */
    data: XOR<MembershipNotificationUpdateManyMutationInput, MembershipNotificationUncheckedUpdateManyInput>
    /**
     * Filter which MembershipNotifications to update
     */
    where?: MembershipNotificationWhereInput
    /**
     * Limit how many MembershipNotifications to update.
     */
    limit?: number
  }

  /**
   * MembershipNotification updateManyAndReturn
   */
  export type MembershipNotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembershipNotification
     */
    select?: MembershipNotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MembershipNotification
     */
    omit?: MembershipNotificationOmit<ExtArgs> | null
    /**
     * The data used to update MembershipNotifications.
     */
    data: XOR<MembershipNotificationUpdateManyMutationInput, MembershipNotificationUncheckedUpdateManyInput>
    /**
     * Filter which MembershipNotifications to update
     */
    where?: MembershipNotificationWhereInput
    /**
     * Limit how many MembershipNotifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipNotificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MembershipNotification upsert
   */
  export type MembershipNotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembershipNotification
     */
    select?: MembershipNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembershipNotification
     */
    omit?: MembershipNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipNotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the MembershipNotification to update in case it exists.
     */
    where: MembershipNotificationWhereUniqueInput
    /**
     * In case the MembershipNotification found by the `where` argument doesn't exist, create a new MembershipNotification with this data.
     */
    create: XOR<MembershipNotificationCreateInput, MembershipNotificationUncheckedCreateInput>
    /**
     * In case the MembershipNotification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MembershipNotificationUpdateInput, MembershipNotificationUncheckedUpdateInput>
  }

  /**
   * MembershipNotification delete
   */
  export type MembershipNotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembershipNotification
     */
    select?: MembershipNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembershipNotification
     */
    omit?: MembershipNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipNotificationInclude<ExtArgs> | null
    /**
     * Filter which MembershipNotification to delete.
     */
    where: MembershipNotificationWhereUniqueInput
  }

  /**
   * MembershipNotification deleteMany
   */
  export type MembershipNotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MembershipNotifications to delete
     */
    where?: MembershipNotificationWhereInput
    /**
     * Limit how many MembershipNotifications to delete.
     */
    limit?: number
  }

  /**
   * MembershipNotification without action
   */
  export type MembershipNotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembershipNotification
     */
    select?: MembershipNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembershipNotification
     */
    omit?: MembershipNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipNotificationInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: boolean | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
    role: string | null
    banned: boolean | null
    banReason: string | null
    banExpires: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: boolean | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
    role: string | null
    banned: boolean | null
    banReason: string | null
    banExpires: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    createdAt: number
    updatedAt: number
    role: number
    banned: number
    banReason: number
    banExpires: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    role?: true
    banned?: true
    banReason?: true
    banExpires?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    role?: true
    banned?: true
    banReason?: true
    banExpires?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    role?: true
    banned?: true
    banReason?: true
    banExpires?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image: string | null
    createdAt: Date
    updatedAt: Date
    role: string | null
    banned: boolean | null
    banReason: string | null
    banExpires: Date | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    banned?: boolean
    banReason?: boolean
    banExpires?: boolean
    membershipRequests?: boolean | User$membershipRequestsArgs<ExtArgs>
    membershipNotifications?: boolean | User$membershipNotificationsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    banned?: boolean
    banReason?: boolean
    banExpires?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    banned?: boolean
    banReason?: boolean
    banExpires?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    banned?: boolean
    banReason?: boolean
    banExpires?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "image" | "createdAt" | "updatedAt" | "role" | "banned" | "banReason" | "banExpires", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    membershipRequests?: boolean | User$membershipRequestsArgs<ExtArgs>
    membershipNotifications?: boolean | User$membershipNotificationsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      membershipRequests: Prisma.$MembershipRequestPayload<ExtArgs>[]
      membershipNotifications: Prisma.$MembershipNotificationPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      accounts: Prisma.$AccountPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      emailVerified: boolean
      image: string | null
      createdAt: Date
      updatedAt: Date
      role: string | null
      banned: boolean | null
      banReason: string | null
      banExpires: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    membershipRequests<T extends User$membershipRequestsArgs<ExtArgs> = {}>(args?: Subset<T, User$membershipRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembershipRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    membershipNotifications<T extends User$membershipNotificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$membershipNotificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembershipNotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'Boolean'>
    readonly image: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly role: FieldRef<"User", 'String'>
    readonly banned: FieldRef<"User", 'Boolean'>
    readonly banReason: FieldRef<"User", 'String'>
    readonly banExpires: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.membershipRequests
   */
  export type User$membershipRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembershipRequest
     */
    select?: MembershipRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembershipRequest
     */
    omit?: MembershipRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipRequestInclude<ExtArgs> | null
    where?: MembershipRequestWhereInput
    orderBy?: MembershipRequestOrderByWithRelationInput | MembershipRequestOrderByWithRelationInput[]
    cursor?: MembershipRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MembershipRequestScalarFieldEnum | MembershipRequestScalarFieldEnum[]
  }

  /**
   * User.membershipNotifications
   */
  export type User$membershipNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembershipNotification
     */
    select?: MembershipNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembershipNotification
     */
    omit?: MembershipNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipNotificationInclude<ExtArgs> | null
    where?: MembershipNotificationWhereInput
    orderBy?: MembershipNotificationOrderByWithRelationInput | MembershipNotificationOrderByWithRelationInput[]
    cursor?: MembershipNotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MembershipNotificationScalarFieldEnum | MembershipNotificationScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    expiresAt: Date | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    userId: string | null
    impersonatedBy: string | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    expiresAt: Date | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    userId: string | null
    impersonatedBy: string | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    expiresAt: number
    token: number
    createdAt: number
    updatedAt: number
    ipAddress: number
    userAgent: number
    userId: number
    impersonatedBy: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
    impersonatedBy?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
    impersonatedBy?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
    impersonatedBy?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    expiresAt: Date
    token: string
    createdAt: Date
    updatedAt: Date
    ipAddress: string | null
    userAgent: string | null
    userId: string
    impersonatedBy: string | null
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    impersonatedBy?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    impersonatedBy?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    impersonatedBy?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    impersonatedBy?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "expiresAt" | "token" | "createdAt" | "updatedAt" | "ipAddress" | "userAgent" | "userId" | "impersonatedBy", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      expiresAt: Date
      token: string
      createdAt: Date
      updatedAt: Date
      ipAddress: string | null
      userAgent: string | null
      userId: string
      impersonatedBy: string | null
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
    readonly token: FieldRef<"Session", 'String'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly updatedAt: FieldRef<"Session", 'DateTime'>
    readonly ipAddress: FieldRef<"Session", 'String'>
    readonly userAgent: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly impersonatedBy: FieldRef<"Session", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    accountId: string | null
    providerId: string | null
    userId: string | null
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    accountId: string | null
    providerId: string | null
    userId: string | null
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    accountId: number
    providerId: number
    userId: number
    accessToken: number
    refreshToken: number
    idToken: number
    accessTokenExpiresAt: number
    refreshTokenExpiresAt: number
    scope: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountMinAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date
    updatedAt: Date
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "accountId" | "providerId" | "userId" | "accessToken" | "refreshToken" | "idToken" | "accessTokenExpiresAt" | "refreshTokenExpiresAt" | "scope" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      accountId: string
      providerId: string
      userId: string
      accessToken: string | null
      refreshToken: string | null
      idToken: string | null
      accessTokenExpiresAt: Date | null
      refreshTokenExpiresAt: Date | null
      scope: string | null
      password: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly accountId: FieldRef<"Account", 'String'>
    readonly providerId: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly accessToken: FieldRef<"Account", 'String'>
    readonly refreshToken: FieldRef<"Account", 'String'>
    readonly idToken: FieldRef<"Account", 'String'>
    readonly accessTokenExpiresAt: FieldRef<"Account", 'DateTime'>
    readonly refreshTokenExpiresAt: FieldRef<"Account", 'DateTime'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly password: FieldRef<"Account", 'String'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
    readonly updatedAt: FieldRef<"Account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Verification
   */

  export type AggregateVerification = {
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  export type VerificationMinAggregateOutputType = {
    id: string | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationMaxAggregateOutputType = {
    id: string | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationCountAggregateOutputType = {
    id: number
    identifier: number
    value: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VerificationMinAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationMaxAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationCountAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VerificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verification to aggregate.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Verifications
    **/
    _count?: true | VerificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationMaxAggregateInputType
  }

  export type GetVerificationAggregateType<T extends VerificationAggregateArgs> = {
        [P in keyof T & keyof AggregateVerification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerification[P]>
      : GetScalarType<T[P], AggregateVerification[P]>
  }




  export type VerificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationWhereInput
    orderBy?: VerificationOrderByWithAggregationInput | VerificationOrderByWithAggregationInput[]
    by: VerificationScalarFieldEnum[] | VerificationScalarFieldEnum
    having?: VerificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationCountAggregateInputType | true
    _min?: VerificationMinAggregateInputType
    _max?: VerificationMaxAggregateInputType
  }

  export type VerificationGroupByOutputType = {
    id: string
    identifier: string
    value: string
    expiresAt: Date
    createdAt: Date
    updatedAt: Date
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  type GetVerificationGroupByPayload<T extends VerificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationGroupByOutputType[P]>
        }
      >
    >


  export type VerificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectScalar = {
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VerificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "identifier" | "value" | "expiresAt" | "createdAt" | "updatedAt", ExtArgs["result"]["verification"]>

  export type $VerificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Verification"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      identifier: string
      value: string
      expiresAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["verification"]>
    composites: {}
  }

  type VerificationGetPayload<S extends boolean | null | undefined | VerificationDefaultArgs> = $Result.GetResult<Prisma.$VerificationPayload, S>

  type VerificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationCountAggregateInputType | true
    }

  export interface VerificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Verification'], meta: { name: 'Verification' } }
    /**
     * Find zero or one Verification that matches the filter.
     * @param {VerificationFindUniqueArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationFindUniqueArgs>(args: SelectSubset<T, VerificationFindUniqueArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Verification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationFindUniqueOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationFindFirstArgs>(args?: SelectSubset<T, VerificationFindFirstArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Verifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Verifications
     * const verifications = await prisma.verification.findMany()
     * 
     * // Get first 10 Verifications
     * const verifications = await prisma.verification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verificationWithIdOnly = await prisma.verification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VerificationFindManyArgs>(args?: SelectSubset<T, VerificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Verification.
     * @param {VerificationCreateArgs} args - Arguments to create a Verification.
     * @example
     * // Create one Verification
     * const Verification = await prisma.verification.create({
     *   data: {
     *     // ... data to create a Verification
     *   }
     * })
     * 
     */
    create<T extends VerificationCreateArgs>(args: SelectSubset<T, VerificationCreateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Verifications.
     * @param {VerificationCreateManyArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verification = await prisma.verification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationCreateManyArgs>(args?: SelectSubset<T, VerificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Verifications and returns the data saved in the database.
     * @param {VerificationCreateManyAndReturnArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verification = await prisma.verification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Verifications and only return the `id`
     * const verificationWithIdOnly = await prisma.verification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Verification.
     * @param {VerificationDeleteArgs} args - Arguments to delete one Verification.
     * @example
     * // Delete one Verification
     * const Verification = await prisma.verification.delete({
     *   where: {
     *     // ... filter to delete one Verification
     *   }
     * })
     * 
     */
    delete<T extends VerificationDeleteArgs>(args: SelectSubset<T, VerificationDeleteArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Verification.
     * @param {VerificationUpdateArgs} args - Arguments to update one Verification.
     * @example
     * // Update one Verification
     * const verification = await prisma.verification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationUpdateArgs>(args: SelectSubset<T, VerificationUpdateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Verifications.
     * @param {VerificationDeleteManyArgs} args - Arguments to filter Verifications to delete.
     * @example
     * // Delete a few Verifications
     * const { count } = await prisma.verification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationDeleteManyArgs>(args?: SelectSubset<T, VerificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Verifications
     * const verification = await prisma.verification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationUpdateManyArgs>(args: SelectSubset<T, VerificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifications and returns the data updated in the database.
     * @param {VerificationUpdateManyAndReturnArgs} args - Arguments to update many Verifications.
     * @example
     * // Update many Verifications
     * const verification = await prisma.verification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Verifications and only return the `id`
     * const verificationWithIdOnly = await prisma.verification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VerificationUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Verification.
     * @param {VerificationUpsertArgs} args - Arguments to update or create a Verification.
     * @example
     * // Update or create a Verification
     * const verification = await prisma.verification.upsert({
     *   create: {
     *     // ... data to create a Verification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Verification we want to update
     *   }
     * })
     */
    upsert<T extends VerificationUpsertArgs>(args: SelectSubset<T, VerificationUpsertArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCountArgs} args - Arguments to filter Verifications to count.
     * @example
     * // Count the number of Verifications
     * const count = await prisma.verification.count({
     *   where: {
     *     // ... the filter for the Verifications we want to count
     *   }
     * })
    **/
    count<T extends VerificationCountArgs>(
      args?: Subset<T, VerificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationAggregateArgs>(args: Subset<T, VerificationAggregateArgs>): Prisma.PrismaPromise<GetVerificationAggregateType<T>>

    /**
     * Group by Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationGroupByArgs} args - Group by arguments.
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
      T extends VerificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationGroupByArgs['orderBy'] }
        : { orderBy?: VerificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VerificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Verification model
   */
  readonly fields: VerificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Verification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Verification model
   */
  interface VerificationFieldRefs {
    readonly id: FieldRef<"Verification", 'String'>
    readonly identifier: FieldRef<"Verification", 'String'>
    readonly value: FieldRef<"Verification", 'String'>
    readonly expiresAt: FieldRef<"Verification", 'DateTime'>
    readonly createdAt: FieldRef<"Verification", 'DateTime'>
    readonly updatedAt: FieldRef<"Verification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Verification findUnique
   */
  export type VerificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findUniqueOrThrow
   */
  export type VerificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findFirst
   */
  export type VerificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findFirstOrThrow
   */
  export type VerificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findMany
   */
  export type VerificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verifications to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification create
   */
  export type VerificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data needed to create a Verification.
     */
    data: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
  }

  /**
   * Verification createMany
   */
  export type VerificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Verifications.
     */
    data: VerificationCreateManyInput | VerificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Verification createManyAndReturn
   */
  export type VerificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data used to create many Verifications.
     */
    data: VerificationCreateManyInput | VerificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Verification update
   */
  export type VerificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data needed to update a Verification.
     */
    data: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
    /**
     * Choose, which Verification to update.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification updateMany
   */
  export type VerificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Verifications.
     */
    data: XOR<VerificationUpdateManyMutationInput, VerificationUncheckedUpdateManyInput>
    /**
     * Filter which Verifications to update
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to update.
     */
    limit?: number
  }

  /**
   * Verification updateManyAndReturn
   */
  export type VerificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data used to update Verifications.
     */
    data: XOR<VerificationUpdateManyMutationInput, VerificationUncheckedUpdateManyInput>
    /**
     * Filter which Verifications to update
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to update.
     */
    limit?: number
  }

  /**
   * Verification upsert
   */
  export type VerificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The filter to search for the Verification to update in case it exists.
     */
    where: VerificationWhereUniqueInput
    /**
     * In case the Verification found by the `where` argument doesn't exist, create a new Verification with this data.
     */
    create: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
    /**
     * In case the Verification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
  }

  /**
   * Verification delete
   */
  export type VerificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter which Verification to delete.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification deleteMany
   */
  export type VerificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verifications to delete
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to delete.
     */
    limit?: number
  }

  /**
   * Verification without action
   */
  export type VerificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
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


  export const TeachingScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    youtubeUrl: 'youtubeUrl',
    youtubeId: 'youtubeId',
    thumbnailUrl: 'thumbnailUrl',
    title: 'title',
    titleAm: 'titleAm',
    titleOm: 'titleOm',
    description: 'description',
    descriptionAm: 'descriptionAm',
    descriptionOm: 'descriptionOm',
    durationSeconds: 'durationSeconds',
    semesterLabel: 'semesterLabel',
    scheduleLine: 'scheduleLine',
    venueLine: 'venueLine',
    position: 'position',
    published: 'published',
    membersOnly: 'membersOnly',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TeachingScalarFieldEnum = (typeof TeachingScalarFieldEnum)[keyof typeof TeachingScalarFieldEnum]


  export const TeachingAttachmentScalarFieldEnum: {
    id: 'id',
    teachingId: 'teachingId',
    title: 'title',
    storagePath: 'storagePath',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TeachingAttachmentScalarFieldEnum = (typeof TeachingAttachmentScalarFieldEnum)[keyof typeof TeachingAttachmentScalarFieldEnum]


  export const BlogScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    title: 'title',
    titleAm: 'titleAm',
    titleOm: 'titleOm',
    excerpt: 'excerpt',
    excerptAm: 'excerptAm',
    excerptOm: 'excerptOm',
    content: 'content',
    contentAm: 'contentAm',
    contentOm: 'contentOm',
    coverImage: 'coverImage',
    status: 'status',
    publishedAt: 'publishedAt',
    viewCount: 'viewCount',
    membersOnly: 'membersOnly',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BlogScalarFieldEnum = (typeof BlogScalarFieldEnum)[keyof typeof BlogScalarFieldEnum]


  export const BlogAttachmentScalarFieldEnum: {
    id: 'id',
    blogId: 'blogId',
    title: 'title',
    storagePath: 'storagePath',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BlogAttachmentScalarFieldEnum = (typeof BlogAttachmentScalarFieldEnum)[keyof typeof BlogAttachmentScalarFieldEnum]


  export const EventScalarFieldEnum: {
    id: 'id',
    title: 'title',
    date: 'date',
    imageUrl: 'imageUrl',
    storagePath: 'storagePath',
    active: 'active',
    position: 'position',
    membersOnly: 'membersOnly',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const ManifestoScalarFieldEnum: {
    id: 'id',
    content: 'content',
    updatedAt: 'updatedAt'
  };

  export type ManifestoScalarFieldEnum = (typeof ManifestoScalarFieldEnum)[keyof typeof ManifestoScalarFieldEnum]


  export const MembershipRequestScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    fullName: 'fullName',
    email: 'email',
    phone: 'phone',
    telegram: 'telegram',
    message: 'message',
    status: 'status',
    paymentMethod: 'paymentMethod',
    paymentProofStoragePath: 'paymentProofStoragePath',
    paymentSubmittedAt: 'paymentSubmittedAt',
    approvedAt: 'approvedAt',
    approvedBy: 'approvedBy',
    rejectionReason: 'rejectionReason',
    membershipStartsAt: 'membershipStartsAt',
    membershipExpiresAt: 'membershipExpiresAt',
    renewedFromId: 'renewedFromId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MembershipRequestScalarFieldEnum = (typeof MembershipRequestScalarFieldEnum)[keyof typeof MembershipRequestScalarFieldEnum]


  export const MembershipNotificationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    body: 'body',
    type: 'type',
    readAt: 'readAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MembershipNotificationScalarFieldEnum = (typeof MembershipNotificationScalarFieldEnum)[keyof typeof MembershipNotificationScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    role: 'role',
    banned: 'banned',
    banReason: 'banReason',
    banExpires: 'banExpires'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    expiresAt: 'expiresAt',
    token: 'token',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    userId: 'userId',
    impersonatedBy: 'impersonatedBy'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    accountId: 'accountId',
    providerId: 'providerId',
    userId: 'userId',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    idToken: 'idToken',
    accessTokenExpiresAt: 'accessTokenExpiresAt',
    refreshTokenExpiresAt: 'refreshTokenExpiresAt',
    scope: 'scope',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const VerificationScalarFieldEnum: {
    id: 'id',
    identifier: 'identifier',
    value: 'value',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VerificationScalarFieldEnum = (typeof VerificationScalarFieldEnum)[keyof typeof VerificationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'BlogStatus'
   */
  export type EnumBlogStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BlogStatus'>
    


  /**
   * Reference to a field of type 'BlogStatus[]'
   */
  export type ListEnumBlogStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BlogStatus[]'>
    


  /**
   * Reference to a field of type 'MembershipStatus'
   */
  export type EnumMembershipStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MembershipStatus'>
    


  /**
   * Reference to a field of type 'MembershipStatus[]'
   */
  export type ListEnumMembershipStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MembershipStatus[]'>
    


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


  export type TeachingWhereInput = {
    AND?: TeachingWhereInput | TeachingWhereInput[]
    OR?: TeachingWhereInput[]
    NOT?: TeachingWhereInput | TeachingWhereInput[]
    id?: StringFilter<"Teaching"> | string
    slug?: StringNullableFilter<"Teaching"> | string | null
    youtubeUrl?: StringFilter<"Teaching"> | string
    youtubeId?: StringFilter<"Teaching"> | string
    thumbnailUrl?: StringNullableFilter<"Teaching"> | string | null
    title?: StringFilter<"Teaching"> | string
    titleAm?: StringNullableFilter<"Teaching"> | string | null
    titleOm?: StringNullableFilter<"Teaching"> | string | null
    description?: StringNullableFilter<"Teaching"> | string | null
    descriptionAm?: StringNullableFilter<"Teaching"> | string | null
    descriptionOm?: StringNullableFilter<"Teaching"> | string | null
    durationSeconds?: IntNullableFilter<"Teaching"> | number | null
    semesterLabel?: StringNullableFilter<"Teaching"> | string | null
    scheduleLine?: StringNullableFilter<"Teaching"> | string | null
    venueLine?: StringNullableFilter<"Teaching"> | string | null
    position?: IntFilter<"Teaching"> | number
    published?: BoolFilter<"Teaching"> | boolean
    membersOnly?: BoolFilter<"Teaching"> | boolean
    createdAt?: DateTimeFilter<"Teaching"> | Date | string
    updatedAt?: DateTimeFilter<"Teaching"> | Date | string
    attachments?: TeachingAttachmentListRelationFilter
  }

  export type TeachingOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrderInput | SortOrder
    youtubeUrl?: SortOrder
    youtubeId?: SortOrder
    thumbnailUrl?: SortOrderInput | SortOrder
    title?: SortOrder
    titleAm?: SortOrderInput | SortOrder
    titleOm?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    descriptionAm?: SortOrderInput | SortOrder
    descriptionOm?: SortOrderInput | SortOrder
    durationSeconds?: SortOrderInput | SortOrder
    semesterLabel?: SortOrderInput | SortOrder
    scheduleLine?: SortOrderInput | SortOrder
    venueLine?: SortOrderInput | SortOrder
    position?: SortOrder
    published?: SortOrder
    membersOnly?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    attachments?: TeachingAttachmentOrderByRelationAggregateInput
  }

  export type TeachingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    youtubeId?: string
    AND?: TeachingWhereInput | TeachingWhereInput[]
    OR?: TeachingWhereInput[]
    NOT?: TeachingWhereInput | TeachingWhereInput[]
    youtubeUrl?: StringFilter<"Teaching"> | string
    thumbnailUrl?: StringNullableFilter<"Teaching"> | string | null
    title?: StringFilter<"Teaching"> | string
    titleAm?: StringNullableFilter<"Teaching"> | string | null
    titleOm?: StringNullableFilter<"Teaching"> | string | null
    description?: StringNullableFilter<"Teaching"> | string | null
    descriptionAm?: StringNullableFilter<"Teaching"> | string | null
    descriptionOm?: StringNullableFilter<"Teaching"> | string | null
    durationSeconds?: IntNullableFilter<"Teaching"> | number | null
    semesterLabel?: StringNullableFilter<"Teaching"> | string | null
    scheduleLine?: StringNullableFilter<"Teaching"> | string | null
    venueLine?: StringNullableFilter<"Teaching"> | string | null
    position?: IntFilter<"Teaching"> | number
    published?: BoolFilter<"Teaching"> | boolean
    membersOnly?: BoolFilter<"Teaching"> | boolean
    createdAt?: DateTimeFilter<"Teaching"> | Date | string
    updatedAt?: DateTimeFilter<"Teaching"> | Date | string
    attachments?: TeachingAttachmentListRelationFilter
  }, "id" | "slug" | "youtubeId">

  export type TeachingOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrderInput | SortOrder
    youtubeUrl?: SortOrder
    youtubeId?: SortOrder
    thumbnailUrl?: SortOrderInput | SortOrder
    title?: SortOrder
    titleAm?: SortOrderInput | SortOrder
    titleOm?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    descriptionAm?: SortOrderInput | SortOrder
    descriptionOm?: SortOrderInput | SortOrder
    durationSeconds?: SortOrderInput | SortOrder
    semesterLabel?: SortOrderInput | SortOrder
    scheduleLine?: SortOrderInput | SortOrder
    venueLine?: SortOrderInput | SortOrder
    position?: SortOrder
    published?: SortOrder
    membersOnly?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TeachingCountOrderByAggregateInput
    _avg?: TeachingAvgOrderByAggregateInput
    _max?: TeachingMaxOrderByAggregateInput
    _min?: TeachingMinOrderByAggregateInput
    _sum?: TeachingSumOrderByAggregateInput
  }

  export type TeachingScalarWhereWithAggregatesInput = {
    AND?: TeachingScalarWhereWithAggregatesInput | TeachingScalarWhereWithAggregatesInput[]
    OR?: TeachingScalarWhereWithAggregatesInput[]
    NOT?: TeachingScalarWhereWithAggregatesInput | TeachingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Teaching"> | string
    slug?: StringNullableWithAggregatesFilter<"Teaching"> | string | null
    youtubeUrl?: StringWithAggregatesFilter<"Teaching"> | string
    youtubeId?: StringWithAggregatesFilter<"Teaching"> | string
    thumbnailUrl?: StringNullableWithAggregatesFilter<"Teaching"> | string | null
    title?: StringWithAggregatesFilter<"Teaching"> | string
    titleAm?: StringNullableWithAggregatesFilter<"Teaching"> | string | null
    titleOm?: StringNullableWithAggregatesFilter<"Teaching"> | string | null
    description?: StringNullableWithAggregatesFilter<"Teaching"> | string | null
    descriptionAm?: StringNullableWithAggregatesFilter<"Teaching"> | string | null
    descriptionOm?: StringNullableWithAggregatesFilter<"Teaching"> | string | null
    durationSeconds?: IntNullableWithAggregatesFilter<"Teaching"> | number | null
    semesterLabel?: StringNullableWithAggregatesFilter<"Teaching"> | string | null
    scheduleLine?: StringNullableWithAggregatesFilter<"Teaching"> | string | null
    venueLine?: StringNullableWithAggregatesFilter<"Teaching"> | string | null
    position?: IntWithAggregatesFilter<"Teaching"> | number
    published?: BoolWithAggregatesFilter<"Teaching"> | boolean
    membersOnly?: BoolWithAggregatesFilter<"Teaching"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Teaching"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Teaching"> | Date | string
  }

  export type TeachingAttachmentWhereInput = {
    AND?: TeachingAttachmentWhereInput | TeachingAttachmentWhereInput[]
    OR?: TeachingAttachmentWhereInput[]
    NOT?: TeachingAttachmentWhereInput | TeachingAttachmentWhereInput[]
    id?: StringFilter<"TeachingAttachment"> | string
    teachingId?: StringFilter<"TeachingAttachment"> | string
    title?: StringNullableFilter<"TeachingAttachment"> | string | null
    storagePath?: StringFilter<"TeachingAttachment"> | string
    createdAt?: DateTimeFilter<"TeachingAttachment"> | Date | string
    updatedAt?: DateTimeFilter<"TeachingAttachment"> | Date | string
    teaching?: XOR<TeachingScalarRelationFilter, TeachingWhereInput>
  }

  export type TeachingAttachmentOrderByWithRelationInput = {
    id?: SortOrder
    teachingId?: SortOrder
    title?: SortOrderInput | SortOrder
    storagePath?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    teaching?: TeachingOrderByWithRelationInput
  }

  export type TeachingAttachmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TeachingAttachmentWhereInput | TeachingAttachmentWhereInput[]
    OR?: TeachingAttachmentWhereInput[]
    NOT?: TeachingAttachmentWhereInput | TeachingAttachmentWhereInput[]
    teachingId?: StringFilter<"TeachingAttachment"> | string
    title?: StringNullableFilter<"TeachingAttachment"> | string | null
    storagePath?: StringFilter<"TeachingAttachment"> | string
    createdAt?: DateTimeFilter<"TeachingAttachment"> | Date | string
    updatedAt?: DateTimeFilter<"TeachingAttachment"> | Date | string
    teaching?: XOR<TeachingScalarRelationFilter, TeachingWhereInput>
  }, "id">

  export type TeachingAttachmentOrderByWithAggregationInput = {
    id?: SortOrder
    teachingId?: SortOrder
    title?: SortOrderInput | SortOrder
    storagePath?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TeachingAttachmentCountOrderByAggregateInput
    _max?: TeachingAttachmentMaxOrderByAggregateInput
    _min?: TeachingAttachmentMinOrderByAggregateInput
  }

  export type TeachingAttachmentScalarWhereWithAggregatesInput = {
    AND?: TeachingAttachmentScalarWhereWithAggregatesInput | TeachingAttachmentScalarWhereWithAggregatesInput[]
    OR?: TeachingAttachmentScalarWhereWithAggregatesInput[]
    NOT?: TeachingAttachmentScalarWhereWithAggregatesInput | TeachingAttachmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TeachingAttachment"> | string
    teachingId?: StringWithAggregatesFilter<"TeachingAttachment"> | string
    title?: StringNullableWithAggregatesFilter<"TeachingAttachment"> | string | null
    storagePath?: StringWithAggregatesFilter<"TeachingAttachment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TeachingAttachment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TeachingAttachment"> | Date | string
  }

  export type BlogWhereInput = {
    AND?: BlogWhereInput | BlogWhereInput[]
    OR?: BlogWhereInput[]
    NOT?: BlogWhereInput | BlogWhereInput[]
    id?: StringFilter<"Blog"> | string
    slug?: StringFilter<"Blog"> | string
    title?: StringFilter<"Blog"> | string
    titleAm?: StringNullableFilter<"Blog"> | string | null
    titleOm?: StringNullableFilter<"Blog"> | string | null
    excerpt?: StringNullableFilter<"Blog"> | string | null
    excerptAm?: StringNullableFilter<"Blog"> | string | null
    excerptOm?: StringNullableFilter<"Blog"> | string | null
    content?: JsonFilter<"Blog">
    contentAm?: JsonNullableFilter<"Blog">
    contentOm?: JsonNullableFilter<"Blog">
    coverImage?: StringNullableFilter<"Blog"> | string | null
    status?: EnumBlogStatusFilter<"Blog"> | $Enums.BlogStatus
    publishedAt?: DateTimeNullableFilter<"Blog"> | Date | string | null
    viewCount?: IntFilter<"Blog"> | number
    membersOnly?: BoolFilter<"Blog"> | boolean
    createdAt?: DateTimeFilter<"Blog"> | Date | string
    updatedAt?: DateTimeFilter<"Blog"> | Date | string
    attachments?: BlogAttachmentListRelationFilter
  }

  export type BlogOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    titleAm?: SortOrderInput | SortOrder
    titleOm?: SortOrderInput | SortOrder
    excerpt?: SortOrderInput | SortOrder
    excerptAm?: SortOrderInput | SortOrder
    excerptOm?: SortOrderInput | SortOrder
    content?: SortOrder
    contentAm?: SortOrderInput | SortOrder
    contentOm?: SortOrderInput | SortOrder
    coverImage?: SortOrderInput | SortOrder
    status?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    viewCount?: SortOrder
    membersOnly?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    attachments?: BlogAttachmentOrderByRelationAggregateInput
  }

  export type BlogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: BlogWhereInput | BlogWhereInput[]
    OR?: BlogWhereInput[]
    NOT?: BlogWhereInput | BlogWhereInput[]
    title?: StringFilter<"Blog"> | string
    titleAm?: StringNullableFilter<"Blog"> | string | null
    titleOm?: StringNullableFilter<"Blog"> | string | null
    excerpt?: StringNullableFilter<"Blog"> | string | null
    excerptAm?: StringNullableFilter<"Blog"> | string | null
    excerptOm?: StringNullableFilter<"Blog"> | string | null
    content?: JsonFilter<"Blog">
    contentAm?: JsonNullableFilter<"Blog">
    contentOm?: JsonNullableFilter<"Blog">
    coverImage?: StringNullableFilter<"Blog"> | string | null
    status?: EnumBlogStatusFilter<"Blog"> | $Enums.BlogStatus
    publishedAt?: DateTimeNullableFilter<"Blog"> | Date | string | null
    viewCount?: IntFilter<"Blog"> | number
    membersOnly?: BoolFilter<"Blog"> | boolean
    createdAt?: DateTimeFilter<"Blog"> | Date | string
    updatedAt?: DateTimeFilter<"Blog"> | Date | string
    attachments?: BlogAttachmentListRelationFilter
  }, "id" | "slug">

  export type BlogOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    titleAm?: SortOrderInput | SortOrder
    titleOm?: SortOrderInput | SortOrder
    excerpt?: SortOrderInput | SortOrder
    excerptAm?: SortOrderInput | SortOrder
    excerptOm?: SortOrderInput | SortOrder
    content?: SortOrder
    contentAm?: SortOrderInput | SortOrder
    contentOm?: SortOrderInput | SortOrder
    coverImage?: SortOrderInput | SortOrder
    status?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    viewCount?: SortOrder
    membersOnly?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BlogCountOrderByAggregateInput
    _avg?: BlogAvgOrderByAggregateInput
    _max?: BlogMaxOrderByAggregateInput
    _min?: BlogMinOrderByAggregateInput
    _sum?: BlogSumOrderByAggregateInput
  }

  export type BlogScalarWhereWithAggregatesInput = {
    AND?: BlogScalarWhereWithAggregatesInput | BlogScalarWhereWithAggregatesInput[]
    OR?: BlogScalarWhereWithAggregatesInput[]
    NOT?: BlogScalarWhereWithAggregatesInput | BlogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Blog"> | string
    slug?: StringWithAggregatesFilter<"Blog"> | string
    title?: StringWithAggregatesFilter<"Blog"> | string
    titleAm?: StringNullableWithAggregatesFilter<"Blog"> | string | null
    titleOm?: StringNullableWithAggregatesFilter<"Blog"> | string | null
    excerpt?: StringNullableWithAggregatesFilter<"Blog"> | string | null
    excerptAm?: StringNullableWithAggregatesFilter<"Blog"> | string | null
    excerptOm?: StringNullableWithAggregatesFilter<"Blog"> | string | null
    content?: JsonWithAggregatesFilter<"Blog">
    contentAm?: JsonNullableWithAggregatesFilter<"Blog">
    contentOm?: JsonNullableWithAggregatesFilter<"Blog">
    coverImage?: StringNullableWithAggregatesFilter<"Blog"> | string | null
    status?: EnumBlogStatusWithAggregatesFilter<"Blog"> | $Enums.BlogStatus
    publishedAt?: DateTimeNullableWithAggregatesFilter<"Blog"> | Date | string | null
    viewCount?: IntWithAggregatesFilter<"Blog"> | number
    membersOnly?: BoolWithAggregatesFilter<"Blog"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Blog"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Blog"> | Date | string
  }

  export type BlogAttachmentWhereInput = {
    AND?: BlogAttachmentWhereInput | BlogAttachmentWhereInput[]
    OR?: BlogAttachmentWhereInput[]
    NOT?: BlogAttachmentWhereInput | BlogAttachmentWhereInput[]
    id?: StringFilter<"BlogAttachment"> | string
    blogId?: StringFilter<"BlogAttachment"> | string
    title?: StringNullableFilter<"BlogAttachment"> | string | null
    storagePath?: StringFilter<"BlogAttachment"> | string
    createdAt?: DateTimeFilter<"BlogAttachment"> | Date | string
    updatedAt?: DateTimeFilter<"BlogAttachment"> | Date | string
    blog?: XOR<BlogScalarRelationFilter, BlogWhereInput>
  }

  export type BlogAttachmentOrderByWithRelationInput = {
    id?: SortOrder
    blogId?: SortOrder
    title?: SortOrderInput | SortOrder
    storagePath?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    blog?: BlogOrderByWithRelationInput
  }

  export type BlogAttachmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BlogAttachmentWhereInput | BlogAttachmentWhereInput[]
    OR?: BlogAttachmentWhereInput[]
    NOT?: BlogAttachmentWhereInput | BlogAttachmentWhereInput[]
    blogId?: StringFilter<"BlogAttachment"> | string
    title?: StringNullableFilter<"BlogAttachment"> | string | null
    storagePath?: StringFilter<"BlogAttachment"> | string
    createdAt?: DateTimeFilter<"BlogAttachment"> | Date | string
    updatedAt?: DateTimeFilter<"BlogAttachment"> | Date | string
    blog?: XOR<BlogScalarRelationFilter, BlogWhereInput>
  }, "id">

  export type BlogAttachmentOrderByWithAggregationInput = {
    id?: SortOrder
    blogId?: SortOrder
    title?: SortOrderInput | SortOrder
    storagePath?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BlogAttachmentCountOrderByAggregateInput
    _max?: BlogAttachmentMaxOrderByAggregateInput
    _min?: BlogAttachmentMinOrderByAggregateInput
  }

  export type BlogAttachmentScalarWhereWithAggregatesInput = {
    AND?: BlogAttachmentScalarWhereWithAggregatesInput | BlogAttachmentScalarWhereWithAggregatesInput[]
    OR?: BlogAttachmentScalarWhereWithAggregatesInput[]
    NOT?: BlogAttachmentScalarWhereWithAggregatesInput | BlogAttachmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BlogAttachment"> | string
    blogId?: StringWithAggregatesFilter<"BlogAttachment"> | string
    title?: StringNullableWithAggregatesFilter<"BlogAttachment"> | string | null
    storagePath?: StringWithAggregatesFilter<"BlogAttachment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"BlogAttachment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BlogAttachment"> | Date | string
  }

  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    id?: StringFilter<"Event"> | string
    title?: StringNullableFilter<"Event"> | string | null
    date?: DateTimeNullableFilter<"Event"> | Date | string | null
    imageUrl?: StringFilter<"Event"> | string
    storagePath?: StringNullableFilter<"Event"> | string | null
    active?: BoolFilter<"Event"> | boolean
    position?: IntFilter<"Event"> | number
    membersOnly?: BoolFilter<"Event"> | boolean
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
  }

  export type EventOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    date?: SortOrderInput | SortOrder
    imageUrl?: SortOrder
    storagePath?: SortOrderInput | SortOrder
    active?: SortOrder
    position?: SortOrder
    membersOnly?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    title?: StringNullableFilter<"Event"> | string | null
    date?: DateTimeNullableFilter<"Event"> | Date | string | null
    imageUrl?: StringFilter<"Event"> | string
    storagePath?: StringNullableFilter<"Event"> | string | null
    active?: BoolFilter<"Event"> | boolean
    position?: IntFilter<"Event"> | number
    membersOnly?: BoolFilter<"Event"> | boolean
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
  }, "id">

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    date?: SortOrderInput | SortOrder
    imageUrl?: SortOrder
    storagePath?: SortOrderInput | SortOrder
    active?: SortOrder
    position?: SortOrder
    membersOnly?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EventCountOrderByAggregateInput
    _avg?: EventAvgOrderByAggregateInput
    _max?: EventMaxOrderByAggregateInput
    _min?: EventMinOrderByAggregateInput
    _sum?: EventSumOrderByAggregateInput
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    OR?: EventScalarWhereWithAggregatesInput[]
    NOT?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Event"> | string
    title?: StringNullableWithAggregatesFilter<"Event"> | string | null
    date?: DateTimeNullableWithAggregatesFilter<"Event"> | Date | string | null
    imageUrl?: StringWithAggregatesFilter<"Event"> | string
    storagePath?: StringNullableWithAggregatesFilter<"Event"> | string | null
    active?: BoolWithAggregatesFilter<"Event"> | boolean
    position?: IntWithAggregatesFilter<"Event"> | number
    membersOnly?: BoolWithAggregatesFilter<"Event"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
  }

  export type ManifestoWhereInput = {
    AND?: ManifestoWhereInput | ManifestoWhereInput[]
    OR?: ManifestoWhereInput[]
    NOT?: ManifestoWhereInput | ManifestoWhereInput[]
    id?: StringFilter<"Manifesto"> | string
    content?: JsonFilter<"Manifesto">
    updatedAt?: DateTimeFilter<"Manifesto"> | Date | string
  }

  export type ManifestoOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    updatedAt?: SortOrder
  }

  export type ManifestoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ManifestoWhereInput | ManifestoWhereInput[]
    OR?: ManifestoWhereInput[]
    NOT?: ManifestoWhereInput | ManifestoWhereInput[]
    content?: JsonFilter<"Manifesto">
    updatedAt?: DateTimeFilter<"Manifesto"> | Date | string
  }, "id">

  export type ManifestoOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    updatedAt?: SortOrder
    _count?: ManifestoCountOrderByAggregateInput
    _max?: ManifestoMaxOrderByAggregateInput
    _min?: ManifestoMinOrderByAggregateInput
  }

  export type ManifestoScalarWhereWithAggregatesInput = {
    AND?: ManifestoScalarWhereWithAggregatesInput | ManifestoScalarWhereWithAggregatesInput[]
    OR?: ManifestoScalarWhereWithAggregatesInput[]
    NOT?: ManifestoScalarWhereWithAggregatesInput | ManifestoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Manifesto"> | string
    content?: JsonWithAggregatesFilter<"Manifesto">
    updatedAt?: DateTimeWithAggregatesFilter<"Manifesto"> | Date | string
  }

  export type MembershipRequestWhereInput = {
    AND?: MembershipRequestWhereInput | MembershipRequestWhereInput[]
    OR?: MembershipRequestWhereInput[]
    NOT?: MembershipRequestWhereInput | MembershipRequestWhereInput[]
    id?: StringFilter<"MembershipRequest"> | string
    userId?: StringNullableFilter<"MembershipRequest"> | string | null
    fullName?: StringFilter<"MembershipRequest"> | string
    email?: StringFilter<"MembershipRequest"> | string
    phone?: StringFilter<"MembershipRequest"> | string
    telegram?: StringNullableFilter<"MembershipRequest"> | string | null
    message?: StringNullableFilter<"MembershipRequest"> | string | null
    status?: EnumMembershipStatusFilter<"MembershipRequest"> | $Enums.MembershipStatus
    paymentMethod?: StringNullableFilter<"MembershipRequest"> | string | null
    paymentProofStoragePath?: StringNullableFilter<"MembershipRequest"> | string | null
    paymentSubmittedAt?: DateTimeNullableFilter<"MembershipRequest"> | Date | string | null
    approvedAt?: DateTimeNullableFilter<"MembershipRequest"> | Date | string | null
    approvedBy?: StringNullableFilter<"MembershipRequest"> | string | null
    rejectionReason?: StringNullableFilter<"MembershipRequest"> | string | null
    membershipStartsAt?: DateTimeNullableFilter<"MembershipRequest"> | Date | string | null
    membershipExpiresAt?: DateTimeNullableFilter<"MembershipRequest"> | Date | string | null
    renewedFromId?: StringNullableFilter<"MembershipRequest"> | string | null
    createdAt?: DateTimeFilter<"MembershipRequest"> | Date | string
    updatedAt?: DateTimeFilter<"MembershipRequest"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type MembershipRequestOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    telegram?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    status?: SortOrder
    paymentMethod?: SortOrderInput | SortOrder
    paymentProofStoragePath?: SortOrderInput | SortOrder
    paymentSubmittedAt?: SortOrderInput | SortOrder
    approvedAt?: SortOrderInput | SortOrder
    approvedBy?: SortOrderInput | SortOrder
    rejectionReason?: SortOrderInput | SortOrder
    membershipStartsAt?: SortOrderInput | SortOrder
    membershipExpiresAt?: SortOrderInput | SortOrder
    renewedFromId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type MembershipRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email_status?: MembershipRequestEmailStatusCompoundUniqueInput
    AND?: MembershipRequestWhereInput | MembershipRequestWhereInput[]
    OR?: MembershipRequestWhereInput[]
    NOT?: MembershipRequestWhereInput | MembershipRequestWhereInput[]
    userId?: StringNullableFilter<"MembershipRequest"> | string | null
    fullName?: StringFilter<"MembershipRequest"> | string
    email?: StringFilter<"MembershipRequest"> | string
    phone?: StringFilter<"MembershipRequest"> | string
    telegram?: StringNullableFilter<"MembershipRequest"> | string | null
    message?: StringNullableFilter<"MembershipRequest"> | string | null
    status?: EnumMembershipStatusFilter<"MembershipRequest"> | $Enums.MembershipStatus
    paymentMethod?: StringNullableFilter<"MembershipRequest"> | string | null
    paymentProofStoragePath?: StringNullableFilter<"MembershipRequest"> | string | null
    paymentSubmittedAt?: DateTimeNullableFilter<"MembershipRequest"> | Date | string | null
    approvedAt?: DateTimeNullableFilter<"MembershipRequest"> | Date | string | null
    approvedBy?: StringNullableFilter<"MembershipRequest"> | string | null
    rejectionReason?: StringNullableFilter<"MembershipRequest"> | string | null
    membershipStartsAt?: DateTimeNullableFilter<"MembershipRequest"> | Date | string | null
    membershipExpiresAt?: DateTimeNullableFilter<"MembershipRequest"> | Date | string | null
    renewedFromId?: StringNullableFilter<"MembershipRequest"> | string | null
    createdAt?: DateTimeFilter<"MembershipRequest"> | Date | string
    updatedAt?: DateTimeFilter<"MembershipRequest"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id" | "email_status">

  export type MembershipRequestOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    telegram?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    status?: SortOrder
    paymentMethod?: SortOrderInput | SortOrder
    paymentProofStoragePath?: SortOrderInput | SortOrder
    paymentSubmittedAt?: SortOrderInput | SortOrder
    approvedAt?: SortOrderInput | SortOrder
    approvedBy?: SortOrderInput | SortOrder
    rejectionReason?: SortOrderInput | SortOrder
    membershipStartsAt?: SortOrderInput | SortOrder
    membershipExpiresAt?: SortOrderInput | SortOrder
    renewedFromId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MembershipRequestCountOrderByAggregateInput
    _max?: MembershipRequestMaxOrderByAggregateInput
    _min?: MembershipRequestMinOrderByAggregateInput
  }

  export type MembershipRequestScalarWhereWithAggregatesInput = {
    AND?: MembershipRequestScalarWhereWithAggregatesInput | MembershipRequestScalarWhereWithAggregatesInput[]
    OR?: MembershipRequestScalarWhereWithAggregatesInput[]
    NOT?: MembershipRequestScalarWhereWithAggregatesInput | MembershipRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MembershipRequest"> | string
    userId?: StringNullableWithAggregatesFilter<"MembershipRequest"> | string | null
    fullName?: StringWithAggregatesFilter<"MembershipRequest"> | string
    email?: StringWithAggregatesFilter<"MembershipRequest"> | string
    phone?: StringWithAggregatesFilter<"MembershipRequest"> | string
    telegram?: StringNullableWithAggregatesFilter<"MembershipRequest"> | string | null
    message?: StringNullableWithAggregatesFilter<"MembershipRequest"> | string | null
    status?: EnumMembershipStatusWithAggregatesFilter<"MembershipRequest"> | $Enums.MembershipStatus
    paymentMethod?: StringNullableWithAggregatesFilter<"MembershipRequest"> | string | null
    paymentProofStoragePath?: StringNullableWithAggregatesFilter<"MembershipRequest"> | string | null
    paymentSubmittedAt?: DateTimeNullableWithAggregatesFilter<"MembershipRequest"> | Date | string | null
    approvedAt?: DateTimeNullableWithAggregatesFilter<"MembershipRequest"> | Date | string | null
    approvedBy?: StringNullableWithAggregatesFilter<"MembershipRequest"> | string | null
    rejectionReason?: StringNullableWithAggregatesFilter<"MembershipRequest"> | string | null
    membershipStartsAt?: DateTimeNullableWithAggregatesFilter<"MembershipRequest"> | Date | string | null
    membershipExpiresAt?: DateTimeNullableWithAggregatesFilter<"MembershipRequest"> | Date | string | null
    renewedFromId?: StringNullableWithAggregatesFilter<"MembershipRequest"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"MembershipRequest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MembershipRequest"> | Date | string
  }

  export type MembershipNotificationWhereInput = {
    AND?: MembershipNotificationWhereInput | MembershipNotificationWhereInput[]
    OR?: MembershipNotificationWhereInput[]
    NOT?: MembershipNotificationWhereInput | MembershipNotificationWhereInput[]
    id?: StringFilter<"MembershipNotification"> | string
    userId?: StringFilter<"MembershipNotification"> | string
    title?: StringFilter<"MembershipNotification"> | string
    body?: StringNullableFilter<"MembershipNotification"> | string | null
    type?: StringNullableFilter<"MembershipNotification"> | string | null
    readAt?: DateTimeNullableFilter<"MembershipNotification"> | Date | string | null
    createdAt?: DateTimeFilter<"MembershipNotification"> | Date | string
    updatedAt?: DateTimeFilter<"MembershipNotification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MembershipNotificationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    body?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    readAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type MembershipNotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MembershipNotificationWhereInput | MembershipNotificationWhereInput[]
    OR?: MembershipNotificationWhereInput[]
    NOT?: MembershipNotificationWhereInput | MembershipNotificationWhereInput[]
    userId?: StringFilter<"MembershipNotification"> | string
    title?: StringFilter<"MembershipNotification"> | string
    body?: StringNullableFilter<"MembershipNotification"> | string | null
    type?: StringNullableFilter<"MembershipNotification"> | string | null
    readAt?: DateTimeNullableFilter<"MembershipNotification"> | Date | string | null
    createdAt?: DateTimeFilter<"MembershipNotification"> | Date | string
    updatedAt?: DateTimeFilter<"MembershipNotification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type MembershipNotificationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    body?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    readAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MembershipNotificationCountOrderByAggregateInput
    _max?: MembershipNotificationMaxOrderByAggregateInput
    _min?: MembershipNotificationMinOrderByAggregateInput
  }

  export type MembershipNotificationScalarWhereWithAggregatesInput = {
    AND?: MembershipNotificationScalarWhereWithAggregatesInput | MembershipNotificationScalarWhereWithAggregatesInput[]
    OR?: MembershipNotificationScalarWhereWithAggregatesInput[]
    NOT?: MembershipNotificationScalarWhereWithAggregatesInput | MembershipNotificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MembershipNotification"> | string
    userId?: StringWithAggregatesFilter<"MembershipNotification"> | string
    title?: StringWithAggregatesFilter<"MembershipNotification"> | string
    body?: StringNullableWithAggregatesFilter<"MembershipNotification"> | string | null
    type?: StringNullableWithAggregatesFilter<"MembershipNotification"> | string | null
    readAt?: DateTimeNullableWithAggregatesFilter<"MembershipNotification"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"MembershipNotification"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MembershipNotification"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    role?: StringNullableFilter<"User"> | string | null
    banned?: BoolNullableFilter<"User"> | boolean | null
    banReason?: StringNullableFilter<"User"> | string | null
    banExpires?: DateTimeNullableFilter<"User"> | Date | string | null
    membershipRequests?: MembershipRequestListRelationFilter
    membershipNotifications?: MembershipNotificationListRelationFilter
    sessions?: SessionListRelationFilter
    accounts?: AccountListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrderInput | SortOrder
    banned?: SortOrderInput | SortOrder
    banReason?: SortOrderInput | SortOrder
    banExpires?: SortOrderInput | SortOrder
    membershipRequests?: MembershipRequestOrderByRelationAggregateInput
    membershipNotifications?: MembershipNotificationOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    accounts?: AccountOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    role?: StringNullableFilter<"User"> | string | null
    banned?: BoolNullableFilter<"User"> | boolean | null
    banReason?: StringNullableFilter<"User"> | string | null
    banExpires?: DateTimeNullableFilter<"User"> | Date | string | null
    membershipRequests?: MembershipRequestListRelationFilter
    membershipNotifications?: MembershipNotificationListRelationFilter
    sessions?: SessionListRelationFilter
    accounts?: AccountListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrderInput | SortOrder
    banned?: SortOrderInput | SortOrder
    banReason?: SortOrderInput | SortOrder
    banExpires?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    emailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    role?: StringNullableWithAggregatesFilter<"User"> | string | null
    banned?: BoolNullableWithAggregatesFilter<"User"> | boolean | null
    banReason?: StringNullableWithAggregatesFilter<"User"> | string | null
    banExpires?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    token?: StringFilter<"Session"> | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
    impersonatedBy?: StringNullableFilter<"Session"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    userId?: SortOrder
    impersonatedBy?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
    impersonatedBy?: StringNullableFilter<"Session"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    userId?: SortOrder
    impersonatedBy?: SortOrderInput | SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    token?: StringWithAggregatesFilter<"Session"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    ipAddress?: StringNullableWithAggregatesFilter<"Session"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"Session"> | string | null
    userId?: StringWithAggregatesFilter<"Session"> | string
    impersonatedBy?: StringNullableWithAggregatesFilter<"Session"> | string | null
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    idToken?: SortOrderInput | SortOrder
    accessTokenExpiresAt?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    idToken?: SortOrderInput | SortOrder
    accessTokenExpiresAt?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    accountId?: StringWithAggregatesFilter<"Account"> | string
    providerId?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    accessToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    refreshToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    idToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    password?: StringNullableWithAggregatesFilter<"Account"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
  }

  export type VerificationWhereInput = {
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    id?: StringFilter<"Verification"> | string
    identifier?: StringFilter<"Verification"> | string
    value?: StringFilter<"Verification"> | string
    expiresAt?: DateTimeFilter<"Verification"> | Date | string
    createdAt?: DateTimeFilter<"Verification"> | Date | string
    updatedAt?: DateTimeFilter<"Verification"> | Date | string
  }

  export type VerificationOrderByWithRelationInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    identifier?: StringFilter<"Verification"> | string
    value?: StringFilter<"Verification"> | string
    expiresAt?: DateTimeFilter<"Verification"> | Date | string
    createdAt?: DateTimeFilter<"Verification"> | Date | string
    updatedAt?: DateTimeFilter<"Verification"> | Date | string
  }, "id">

  export type VerificationOrderByWithAggregationInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VerificationCountOrderByAggregateInput
    _max?: VerificationMaxOrderByAggregateInput
    _min?: VerificationMinOrderByAggregateInput
  }

  export type VerificationScalarWhereWithAggregatesInput = {
    AND?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    OR?: VerificationScalarWhereWithAggregatesInput[]
    NOT?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Verification"> | string
    identifier?: StringWithAggregatesFilter<"Verification"> | string
    value?: StringWithAggregatesFilter<"Verification"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
  }

  export type TeachingCreateInput = {
    id?: string
    slug?: string | null
    youtubeUrl: string
    youtubeId: string
    thumbnailUrl?: string | null
    title: string
    titleAm?: string | null
    titleOm?: string | null
    description?: string | null
    descriptionAm?: string | null
    descriptionOm?: string | null
    durationSeconds?: number | null
    semesterLabel?: string | null
    scheduleLine?: string | null
    venueLine?: string | null
    position?: number
    published?: boolean
    membersOnly?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    attachments?: TeachingAttachmentCreateNestedManyWithoutTeachingInput
  }

  export type TeachingUncheckedCreateInput = {
    id?: string
    slug?: string | null
    youtubeUrl: string
    youtubeId: string
    thumbnailUrl?: string | null
    title: string
    titleAm?: string | null
    titleOm?: string | null
    description?: string | null
    descriptionAm?: string | null
    descriptionOm?: string | null
    durationSeconds?: number | null
    semesterLabel?: string | null
    scheduleLine?: string | null
    venueLine?: string | null
    position?: number
    published?: boolean
    membersOnly?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    attachments?: TeachingAttachmentUncheckedCreateNestedManyWithoutTeachingInput
  }

  export type TeachingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    youtubeUrl?: StringFieldUpdateOperationsInput | string
    youtubeId?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    titleAm?: NullableStringFieldUpdateOperationsInput | string | null
    titleOm?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    descriptionAm?: NullableStringFieldUpdateOperationsInput | string | null
    descriptionOm?: NullableStringFieldUpdateOperationsInput | string | null
    durationSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    semesterLabel?: NullableStringFieldUpdateOperationsInput | string | null
    scheduleLine?: NullableStringFieldUpdateOperationsInput | string | null
    venueLine?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
    published?: BoolFieldUpdateOperationsInput | boolean
    membersOnly?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attachments?: TeachingAttachmentUpdateManyWithoutTeachingNestedInput
  }

  export type TeachingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    youtubeUrl?: StringFieldUpdateOperationsInput | string
    youtubeId?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    titleAm?: NullableStringFieldUpdateOperationsInput | string | null
    titleOm?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    descriptionAm?: NullableStringFieldUpdateOperationsInput | string | null
    descriptionOm?: NullableStringFieldUpdateOperationsInput | string | null
    durationSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    semesterLabel?: NullableStringFieldUpdateOperationsInput | string | null
    scheduleLine?: NullableStringFieldUpdateOperationsInput | string | null
    venueLine?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
    published?: BoolFieldUpdateOperationsInput | boolean
    membersOnly?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attachments?: TeachingAttachmentUncheckedUpdateManyWithoutTeachingNestedInput
  }

  export type TeachingCreateManyInput = {
    id?: string
    slug?: string | null
    youtubeUrl: string
    youtubeId: string
    thumbnailUrl?: string | null
    title: string
    titleAm?: string | null
    titleOm?: string | null
    description?: string | null
    descriptionAm?: string | null
    descriptionOm?: string | null
    durationSeconds?: number | null
    semesterLabel?: string | null
    scheduleLine?: string | null
    venueLine?: string | null
    position?: number
    published?: boolean
    membersOnly?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeachingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    youtubeUrl?: StringFieldUpdateOperationsInput | string
    youtubeId?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    titleAm?: NullableStringFieldUpdateOperationsInput | string | null
    titleOm?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    descriptionAm?: NullableStringFieldUpdateOperationsInput | string | null
    descriptionOm?: NullableStringFieldUpdateOperationsInput | string | null
    durationSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    semesterLabel?: NullableStringFieldUpdateOperationsInput | string | null
    scheduleLine?: NullableStringFieldUpdateOperationsInput | string | null
    venueLine?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
    published?: BoolFieldUpdateOperationsInput | boolean
    membersOnly?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeachingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    youtubeUrl?: StringFieldUpdateOperationsInput | string
    youtubeId?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    titleAm?: NullableStringFieldUpdateOperationsInput | string | null
    titleOm?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    descriptionAm?: NullableStringFieldUpdateOperationsInput | string | null
    descriptionOm?: NullableStringFieldUpdateOperationsInput | string | null
    durationSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    semesterLabel?: NullableStringFieldUpdateOperationsInput | string | null
    scheduleLine?: NullableStringFieldUpdateOperationsInput | string | null
    venueLine?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
    published?: BoolFieldUpdateOperationsInput | boolean
    membersOnly?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeachingAttachmentCreateInput = {
    id?: string
    title?: string | null
    storagePath: string
    createdAt?: Date | string
    updatedAt?: Date | string
    teaching: TeachingCreateNestedOneWithoutAttachmentsInput
  }

  export type TeachingAttachmentUncheckedCreateInput = {
    id?: string
    teachingId: string
    title?: string | null
    storagePath: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeachingAttachmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    storagePath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teaching?: TeachingUpdateOneRequiredWithoutAttachmentsNestedInput
  }

  export type TeachingAttachmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    teachingId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    storagePath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeachingAttachmentCreateManyInput = {
    id?: string
    teachingId: string
    title?: string | null
    storagePath: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeachingAttachmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    storagePath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeachingAttachmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    teachingId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    storagePath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogCreateInput = {
    id?: string
    slug: string
    title: string
    titleAm?: string | null
    titleOm?: string | null
    excerpt?: string | null
    excerptAm?: string | null
    excerptOm?: string | null
    content: JsonNullValueInput | InputJsonValue
    contentAm?: NullableJsonNullValueInput | InputJsonValue
    contentOm?: NullableJsonNullValueInput | InputJsonValue
    coverImage?: string | null
    status?: $Enums.BlogStatus
    publishedAt?: Date | string | null
    viewCount?: number
    membersOnly?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    attachments?: BlogAttachmentCreateNestedManyWithoutBlogInput
  }

  export type BlogUncheckedCreateInput = {
    id?: string
    slug: string
    title: string
    titleAm?: string | null
    titleOm?: string | null
    excerpt?: string | null
    excerptAm?: string | null
    excerptOm?: string | null
    content: JsonNullValueInput | InputJsonValue
    contentAm?: NullableJsonNullValueInput | InputJsonValue
    contentOm?: NullableJsonNullValueInput | InputJsonValue
    coverImage?: string | null
    status?: $Enums.BlogStatus
    publishedAt?: Date | string | null
    viewCount?: number
    membersOnly?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    attachments?: BlogAttachmentUncheckedCreateNestedManyWithoutBlogInput
  }

  export type BlogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    titleAm?: NullableStringFieldUpdateOperationsInput | string | null
    titleOm?: NullableStringFieldUpdateOperationsInput | string | null
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    excerptAm?: NullableStringFieldUpdateOperationsInput | string | null
    excerptOm?: NullableStringFieldUpdateOperationsInput | string | null
    content?: JsonNullValueInput | InputJsonValue
    contentAm?: NullableJsonNullValueInput | InputJsonValue
    contentOm?: NullableJsonNullValueInput | InputJsonValue
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBlogStatusFieldUpdateOperationsInput | $Enums.BlogStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    viewCount?: IntFieldUpdateOperationsInput | number
    membersOnly?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attachments?: BlogAttachmentUpdateManyWithoutBlogNestedInput
  }

  export type BlogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    titleAm?: NullableStringFieldUpdateOperationsInput | string | null
    titleOm?: NullableStringFieldUpdateOperationsInput | string | null
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    excerptAm?: NullableStringFieldUpdateOperationsInput | string | null
    excerptOm?: NullableStringFieldUpdateOperationsInput | string | null
    content?: JsonNullValueInput | InputJsonValue
    contentAm?: NullableJsonNullValueInput | InputJsonValue
    contentOm?: NullableJsonNullValueInput | InputJsonValue
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBlogStatusFieldUpdateOperationsInput | $Enums.BlogStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    viewCount?: IntFieldUpdateOperationsInput | number
    membersOnly?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attachments?: BlogAttachmentUncheckedUpdateManyWithoutBlogNestedInput
  }

  export type BlogCreateManyInput = {
    id?: string
    slug: string
    title: string
    titleAm?: string | null
    titleOm?: string | null
    excerpt?: string | null
    excerptAm?: string | null
    excerptOm?: string | null
    content: JsonNullValueInput | InputJsonValue
    contentAm?: NullableJsonNullValueInput | InputJsonValue
    contentOm?: NullableJsonNullValueInput | InputJsonValue
    coverImage?: string | null
    status?: $Enums.BlogStatus
    publishedAt?: Date | string | null
    viewCount?: number
    membersOnly?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    titleAm?: NullableStringFieldUpdateOperationsInput | string | null
    titleOm?: NullableStringFieldUpdateOperationsInput | string | null
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    excerptAm?: NullableStringFieldUpdateOperationsInput | string | null
    excerptOm?: NullableStringFieldUpdateOperationsInput | string | null
    content?: JsonNullValueInput | InputJsonValue
    contentAm?: NullableJsonNullValueInput | InputJsonValue
    contentOm?: NullableJsonNullValueInput | InputJsonValue
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBlogStatusFieldUpdateOperationsInput | $Enums.BlogStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    viewCount?: IntFieldUpdateOperationsInput | number
    membersOnly?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    titleAm?: NullableStringFieldUpdateOperationsInput | string | null
    titleOm?: NullableStringFieldUpdateOperationsInput | string | null
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    excerptAm?: NullableStringFieldUpdateOperationsInput | string | null
    excerptOm?: NullableStringFieldUpdateOperationsInput | string | null
    content?: JsonNullValueInput | InputJsonValue
    contentAm?: NullableJsonNullValueInput | InputJsonValue
    contentOm?: NullableJsonNullValueInput | InputJsonValue
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBlogStatusFieldUpdateOperationsInput | $Enums.BlogStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    viewCount?: IntFieldUpdateOperationsInput | number
    membersOnly?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogAttachmentCreateInput = {
    id?: string
    title?: string | null
    storagePath: string
    createdAt?: Date | string
    updatedAt?: Date | string
    blog: BlogCreateNestedOneWithoutAttachmentsInput
  }

  export type BlogAttachmentUncheckedCreateInput = {
    id?: string
    blogId: string
    title?: string | null
    storagePath: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogAttachmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    storagePath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blog?: BlogUpdateOneRequiredWithoutAttachmentsNestedInput
  }

  export type BlogAttachmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    blogId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    storagePath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogAttachmentCreateManyInput = {
    id?: string
    blogId: string
    title?: string | null
    storagePath: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogAttachmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    storagePath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogAttachmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    blogId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    storagePath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCreateInput = {
    id?: string
    title?: string | null
    date?: Date | string | null
    imageUrl: string
    storagePath?: string | null
    active?: boolean
    position?: number
    membersOnly?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventUncheckedCreateInput = {
    id?: string
    title?: string | null
    date?: Date | string | null
    imageUrl: string
    storagePath?: string | null
    active?: boolean
    position?: number
    membersOnly?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    storagePath?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    position?: IntFieldUpdateOperationsInput | number
    membersOnly?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    storagePath?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    position?: IntFieldUpdateOperationsInput | number
    membersOnly?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCreateManyInput = {
    id?: string
    title?: string | null
    date?: Date | string | null
    imageUrl: string
    storagePath?: string | null
    active?: boolean
    position?: number
    membersOnly?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    storagePath?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    position?: IntFieldUpdateOperationsInput | number
    membersOnly?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    storagePath?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    position?: IntFieldUpdateOperationsInput | number
    membersOnly?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ManifestoCreateInput = {
    id?: string
    content: JsonNullValueInput | InputJsonValue
    updatedAt?: Date | string
  }

  export type ManifestoUncheckedCreateInput = {
    id?: string
    content: JsonNullValueInput | InputJsonValue
    updatedAt?: Date | string
  }

  export type ManifestoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ManifestoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ManifestoCreateManyInput = {
    id?: string
    content: JsonNullValueInput | InputJsonValue
    updatedAt?: Date | string
  }

  export type ManifestoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ManifestoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembershipRequestCreateInput = {
    id?: string
    fullName: string
    email: string
    phone: string
    telegram?: string | null
    message?: string | null
    status?: $Enums.MembershipStatus
    paymentMethod?: string | null
    paymentProofStoragePath?: string | null
    paymentSubmittedAt?: Date | string | null
    approvedAt?: Date | string | null
    approvedBy?: string | null
    rejectionReason?: string | null
    membershipStartsAt?: Date | string | null
    membershipExpiresAt?: Date | string | null
    renewedFromId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutMembershipRequestsInput
  }

  export type MembershipRequestUncheckedCreateInput = {
    id?: string
    userId?: string | null
    fullName: string
    email: string
    phone: string
    telegram?: string | null
    message?: string | null
    status?: $Enums.MembershipStatus
    paymentMethod?: string | null
    paymentProofStoragePath?: string | null
    paymentSubmittedAt?: Date | string | null
    approvedAt?: Date | string | null
    approvedBy?: string | null
    rejectionReason?: string | null
    membershipStartsAt?: Date | string | null
    membershipExpiresAt?: Date | string | null
    renewedFromId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MembershipRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    telegram?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMembershipStatusFieldUpdateOperationsInput | $Enums.MembershipStatus
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    paymentProofStoragePath?: NullableStringFieldUpdateOperationsInput | string | null
    paymentSubmittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    membershipStartsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    membershipExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    renewedFromId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutMembershipRequestsNestedInput
  }

  export type MembershipRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    telegram?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMembershipStatusFieldUpdateOperationsInput | $Enums.MembershipStatus
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    paymentProofStoragePath?: NullableStringFieldUpdateOperationsInput | string | null
    paymentSubmittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    membershipStartsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    membershipExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    renewedFromId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembershipRequestCreateManyInput = {
    id?: string
    userId?: string | null
    fullName: string
    email: string
    phone: string
    telegram?: string | null
    message?: string | null
    status?: $Enums.MembershipStatus
    paymentMethod?: string | null
    paymentProofStoragePath?: string | null
    paymentSubmittedAt?: Date | string | null
    approvedAt?: Date | string | null
    approvedBy?: string | null
    rejectionReason?: string | null
    membershipStartsAt?: Date | string | null
    membershipExpiresAt?: Date | string | null
    renewedFromId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MembershipRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    telegram?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMembershipStatusFieldUpdateOperationsInput | $Enums.MembershipStatus
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    paymentProofStoragePath?: NullableStringFieldUpdateOperationsInput | string | null
    paymentSubmittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    membershipStartsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    membershipExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    renewedFromId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembershipRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    telegram?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMembershipStatusFieldUpdateOperationsInput | $Enums.MembershipStatus
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    paymentProofStoragePath?: NullableStringFieldUpdateOperationsInput | string | null
    paymentSubmittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    membershipStartsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    membershipExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    renewedFromId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembershipNotificationCreateInput = {
    id?: string
    title: string
    body?: string | null
    type?: string | null
    readAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutMembershipNotificationsInput
  }

  export type MembershipNotificationUncheckedCreateInput = {
    id?: string
    userId: string
    title: string
    body?: string | null
    type?: string | null
    readAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MembershipNotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMembershipNotificationsNestedInput
  }

  export type MembershipNotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembershipNotificationCreateManyInput = {
    id?: string
    userId: string
    title: string
    body?: string | null
    type?: string | null
    readAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MembershipNotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembershipNotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: string | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: Date | string | null
    membershipRequests?: MembershipRequestCreateNestedManyWithoutUserInput
    membershipNotifications?: MembershipNotificationCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: string | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: Date | string | null
    membershipRequests?: MembershipRequestUncheckedCreateNestedManyWithoutUserInput
    membershipNotifications?: MembershipNotificationUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    membershipRequests?: MembershipRequestUpdateManyWithoutUserNestedInput
    membershipNotifications?: MembershipNotificationUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    membershipRequests?: MembershipRequestUncheckedUpdateManyWithoutUserNestedInput
    membershipNotifications?: MembershipNotificationUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: string | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SessionCreateInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    impersonatedBy?: string | null
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    userId: string
    impersonatedBy?: string | null
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    impersonatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    impersonatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateManyInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    userId: string
    impersonatedBy?: string | null
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    impersonatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    impersonatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateManyInput = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCreateInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationUncheckedCreateInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCreateManyInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type TeachingAttachmentListRelationFilter = {
    every?: TeachingAttachmentWhereInput
    some?: TeachingAttachmentWhereInput
    none?: TeachingAttachmentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TeachingAttachmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeachingCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    youtubeUrl?: SortOrder
    youtubeId?: SortOrder
    thumbnailUrl?: SortOrder
    title?: SortOrder
    titleAm?: SortOrder
    titleOm?: SortOrder
    description?: SortOrder
    descriptionAm?: SortOrder
    descriptionOm?: SortOrder
    durationSeconds?: SortOrder
    semesterLabel?: SortOrder
    scheduleLine?: SortOrder
    venueLine?: SortOrder
    position?: SortOrder
    published?: SortOrder
    membersOnly?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeachingAvgOrderByAggregateInput = {
    durationSeconds?: SortOrder
    position?: SortOrder
  }

  export type TeachingMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    youtubeUrl?: SortOrder
    youtubeId?: SortOrder
    thumbnailUrl?: SortOrder
    title?: SortOrder
    titleAm?: SortOrder
    titleOm?: SortOrder
    description?: SortOrder
    descriptionAm?: SortOrder
    descriptionOm?: SortOrder
    durationSeconds?: SortOrder
    semesterLabel?: SortOrder
    scheduleLine?: SortOrder
    venueLine?: SortOrder
    position?: SortOrder
    published?: SortOrder
    membersOnly?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeachingMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    youtubeUrl?: SortOrder
    youtubeId?: SortOrder
    thumbnailUrl?: SortOrder
    title?: SortOrder
    titleAm?: SortOrder
    titleOm?: SortOrder
    description?: SortOrder
    descriptionAm?: SortOrder
    descriptionOm?: SortOrder
    durationSeconds?: SortOrder
    semesterLabel?: SortOrder
    scheduleLine?: SortOrder
    venueLine?: SortOrder
    position?: SortOrder
    published?: SortOrder
    membersOnly?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeachingSumOrderByAggregateInput = {
    durationSeconds?: SortOrder
    position?: SortOrder
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type TeachingScalarRelationFilter = {
    is?: TeachingWhereInput
    isNot?: TeachingWhereInput
  }

  export type TeachingAttachmentCountOrderByAggregateInput = {
    id?: SortOrder
    teachingId?: SortOrder
    title?: SortOrder
    storagePath?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeachingAttachmentMaxOrderByAggregateInput = {
    id?: SortOrder
    teachingId?: SortOrder
    title?: SortOrder
    storagePath?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeachingAttachmentMinOrderByAggregateInput = {
    id?: SortOrder
    teachingId?: SortOrder
    title?: SortOrder
    storagePath?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type EnumBlogStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BlogStatus | EnumBlogStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BlogStatus[] | ListEnumBlogStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BlogStatus[] | ListEnumBlogStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBlogStatusFilter<$PrismaModel> | $Enums.BlogStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BlogAttachmentListRelationFilter = {
    every?: BlogAttachmentWhereInput
    some?: BlogAttachmentWhereInput
    none?: BlogAttachmentWhereInput
  }

  export type BlogAttachmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BlogCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    titleAm?: SortOrder
    titleOm?: SortOrder
    excerpt?: SortOrder
    excerptAm?: SortOrder
    excerptOm?: SortOrder
    content?: SortOrder
    contentAm?: SortOrder
    contentOm?: SortOrder
    coverImage?: SortOrder
    status?: SortOrder
    publishedAt?: SortOrder
    viewCount?: SortOrder
    membersOnly?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogAvgOrderByAggregateInput = {
    viewCount?: SortOrder
  }

  export type BlogMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    titleAm?: SortOrder
    titleOm?: SortOrder
    excerpt?: SortOrder
    excerptAm?: SortOrder
    excerptOm?: SortOrder
    coverImage?: SortOrder
    status?: SortOrder
    publishedAt?: SortOrder
    viewCount?: SortOrder
    membersOnly?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    titleAm?: SortOrder
    titleOm?: SortOrder
    excerpt?: SortOrder
    excerptAm?: SortOrder
    excerptOm?: SortOrder
    coverImage?: SortOrder
    status?: SortOrder
    publishedAt?: SortOrder
    viewCount?: SortOrder
    membersOnly?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogSumOrderByAggregateInput = {
    viewCount?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type EnumBlogStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BlogStatus | EnumBlogStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BlogStatus[] | ListEnumBlogStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BlogStatus[] | ListEnumBlogStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBlogStatusWithAggregatesFilter<$PrismaModel> | $Enums.BlogStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBlogStatusFilter<$PrismaModel>
    _max?: NestedEnumBlogStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BlogScalarRelationFilter = {
    is?: BlogWhereInput
    isNot?: BlogWhereInput
  }

  export type BlogAttachmentCountOrderByAggregateInput = {
    id?: SortOrder
    blogId?: SortOrder
    title?: SortOrder
    storagePath?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogAttachmentMaxOrderByAggregateInput = {
    id?: SortOrder
    blogId?: SortOrder
    title?: SortOrder
    storagePath?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogAttachmentMinOrderByAggregateInput = {
    id?: SortOrder
    blogId?: SortOrder
    title?: SortOrder
    storagePath?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    date?: SortOrder
    imageUrl?: SortOrder
    storagePath?: SortOrder
    active?: SortOrder
    position?: SortOrder
    membersOnly?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventAvgOrderByAggregateInput = {
    position?: SortOrder
  }

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    date?: SortOrder
    imageUrl?: SortOrder
    storagePath?: SortOrder
    active?: SortOrder
    position?: SortOrder
    membersOnly?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    date?: SortOrder
    imageUrl?: SortOrder
    storagePath?: SortOrder
    active?: SortOrder
    position?: SortOrder
    membersOnly?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventSumOrderByAggregateInput = {
    position?: SortOrder
  }

  export type ManifestoCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    updatedAt?: SortOrder
  }

  export type ManifestoMaxOrderByAggregateInput = {
    id?: SortOrder
    updatedAt?: SortOrder
  }

  export type ManifestoMinOrderByAggregateInput = {
    id?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumMembershipStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MembershipStatus | EnumMembershipStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MembershipStatus[] | ListEnumMembershipStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MembershipStatus[] | ListEnumMembershipStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMembershipStatusFilter<$PrismaModel> | $Enums.MembershipStatus
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type MembershipRequestEmailStatusCompoundUniqueInput = {
    email: string
    status: $Enums.MembershipStatus
  }

  export type MembershipRequestCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    telegram?: SortOrder
    message?: SortOrder
    status?: SortOrder
    paymentMethod?: SortOrder
    paymentProofStoragePath?: SortOrder
    paymentSubmittedAt?: SortOrder
    approvedAt?: SortOrder
    approvedBy?: SortOrder
    rejectionReason?: SortOrder
    membershipStartsAt?: SortOrder
    membershipExpiresAt?: SortOrder
    renewedFromId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MembershipRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    telegram?: SortOrder
    message?: SortOrder
    status?: SortOrder
    paymentMethod?: SortOrder
    paymentProofStoragePath?: SortOrder
    paymentSubmittedAt?: SortOrder
    approvedAt?: SortOrder
    approvedBy?: SortOrder
    rejectionReason?: SortOrder
    membershipStartsAt?: SortOrder
    membershipExpiresAt?: SortOrder
    renewedFromId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MembershipRequestMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    telegram?: SortOrder
    message?: SortOrder
    status?: SortOrder
    paymentMethod?: SortOrder
    paymentProofStoragePath?: SortOrder
    paymentSubmittedAt?: SortOrder
    approvedAt?: SortOrder
    approvedBy?: SortOrder
    rejectionReason?: SortOrder
    membershipStartsAt?: SortOrder
    membershipExpiresAt?: SortOrder
    renewedFromId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumMembershipStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MembershipStatus | EnumMembershipStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MembershipStatus[] | ListEnumMembershipStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MembershipStatus[] | ListEnumMembershipStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMembershipStatusWithAggregatesFilter<$PrismaModel> | $Enums.MembershipStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMembershipStatusFilter<$PrismaModel>
    _max?: NestedEnumMembershipStatusFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type MembershipNotificationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    body?: SortOrder
    type?: SortOrder
    readAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MembershipNotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    body?: SortOrder
    type?: SortOrder
    readAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MembershipNotificationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    body?: SortOrder
    type?: SortOrder
    readAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type MembershipRequestListRelationFilter = {
    every?: MembershipRequestWhereInput
    some?: MembershipRequestWhereInput
    none?: MembershipRequestWhereInput
  }

  export type MembershipNotificationListRelationFilter = {
    every?: MembershipNotificationWhereInput
    some?: MembershipNotificationWhereInput
    none?: MembershipNotificationWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type MembershipRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MembershipNotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    banned?: SortOrder
    banReason?: SortOrder
    banExpires?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    banned?: SortOrder
    banReason?: SortOrder
    banExpires?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    banned?: SortOrder
    banReason?: SortOrder
    banExpires?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
    impersonatedBy?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
    impersonatedBy?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
    impersonatedBy?: SortOrder
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationCountOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationMaxOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationMinOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeachingAttachmentCreateNestedManyWithoutTeachingInput = {
    create?: XOR<TeachingAttachmentCreateWithoutTeachingInput, TeachingAttachmentUncheckedCreateWithoutTeachingInput> | TeachingAttachmentCreateWithoutTeachingInput[] | TeachingAttachmentUncheckedCreateWithoutTeachingInput[]
    connectOrCreate?: TeachingAttachmentCreateOrConnectWithoutTeachingInput | TeachingAttachmentCreateOrConnectWithoutTeachingInput[]
    createMany?: TeachingAttachmentCreateManyTeachingInputEnvelope
    connect?: TeachingAttachmentWhereUniqueInput | TeachingAttachmentWhereUniqueInput[]
  }

  export type TeachingAttachmentUncheckedCreateNestedManyWithoutTeachingInput = {
    create?: XOR<TeachingAttachmentCreateWithoutTeachingInput, TeachingAttachmentUncheckedCreateWithoutTeachingInput> | TeachingAttachmentCreateWithoutTeachingInput[] | TeachingAttachmentUncheckedCreateWithoutTeachingInput[]
    connectOrCreate?: TeachingAttachmentCreateOrConnectWithoutTeachingInput | TeachingAttachmentCreateOrConnectWithoutTeachingInput[]
    createMany?: TeachingAttachmentCreateManyTeachingInputEnvelope
    connect?: TeachingAttachmentWhereUniqueInput | TeachingAttachmentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TeachingAttachmentUpdateManyWithoutTeachingNestedInput = {
    create?: XOR<TeachingAttachmentCreateWithoutTeachingInput, TeachingAttachmentUncheckedCreateWithoutTeachingInput> | TeachingAttachmentCreateWithoutTeachingInput[] | TeachingAttachmentUncheckedCreateWithoutTeachingInput[]
    connectOrCreate?: TeachingAttachmentCreateOrConnectWithoutTeachingInput | TeachingAttachmentCreateOrConnectWithoutTeachingInput[]
    upsert?: TeachingAttachmentUpsertWithWhereUniqueWithoutTeachingInput | TeachingAttachmentUpsertWithWhereUniqueWithoutTeachingInput[]
    createMany?: TeachingAttachmentCreateManyTeachingInputEnvelope
    set?: TeachingAttachmentWhereUniqueInput | TeachingAttachmentWhereUniqueInput[]
    disconnect?: TeachingAttachmentWhereUniqueInput | TeachingAttachmentWhereUniqueInput[]
    delete?: TeachingAttachmentWhereUniqueInput | TeachingAttachmentWhereUniqueInput[]
    connect?: TeachingAttachmentWhereUniqueInput | TeachingAttachmentWhereUniqueInput[]
    update?: TeachingAttachmentUpdateWithWhereUniqueWithoutTeachingInput | TeachingAttachmentUpdateWithWhereUniqueWithoutTeachingInput[]
    updateMany?: TeachingAttachmentUpdateManyWithWhereWithoutTeachingInput | TeachingAttachmentUpdateManyWithWhereWithoutTeachingInput[]
    deleteMany?: TeachingAttachmentScalarWhereInput | TeachingAttachmentScalarWhereInput[]
  }

  export type TeachingAttachmentUncheckedUpdateManyWithoutTeachingNestedInput = {
    create?: XOR<TeachingAttachmentCreateWithoutTeachingInput, TeachingAttachmentUncheckedCreateWithoutTeachingInput> | TeachingAttachmentCreateWithoutTeachingInput[] | TeachingAttachmentUncheckedCreateWithoutTeachingInput[]
    connectOrCreate?: TeachingAttachmentCreateOrConnectWithoutTeachingInput | TeachingAttachmentCreateOrConnectWithoutTeachingInput[]
    upsert?: TeachingAttachmentUpsertWithWhereUniqueWithoutTeachingInput | TeachingAttachmentUpsertWithWhereUniqueWithoutTeachingInput[]
    createMany?: TeachingAttachmentCreateManyTeachingInputEnvelope
    set?: TeachingAttachmentWhereUniqueInput | TeachingAttachmentWhereUniqueInput[]
    disconnect?: TeachingAttachmentWhereUniqueInput | TeachingAttachmentWhereUniqueInput[]
    delete?: TeachingAttachmentWhereUniqueInput | TeachingAttachmentWhereUniqueInput[]
    connect?: TeachingAttachmentWhereUniqueInput | TeachingAttachmentWhereUniqueInput[]
    update?: TeachingAttachmentUpdateWithWhereUniqueWithoutTeachingInput | TeachingAttachmentUpdateWithWhereUniqueWithoutTeachingInput[]
    updateMany?: TeachingAttachmentUpdateManyWithWhereWithoutTeachingInput | TeachingAttachmentUpdateManyWithWhereWithoutTeachingInput[]
    deleteMany?: TeachingAttachmentScalarWhereInput | TeachingAttachmentScalarWhereInput[]
  }

  export type TeachingCreateNestedOneWithoutAttachmentsInput = {
    create?: XOR<TeachingCreateWithoutAttachmentsInput, TeachingUncheckedCreateWithoutAttachmentsInput>
    connectOrCreate?: TeachingCreateOrConnectWithoutAttachmentsInput
    connect?: TeachingWhereUniqueInput
  }

  export type TeachingUpdateOneRequiredWithoutAttachmentsNestedInput = {
    create?: XOR<TeachingCreateWithoutAttachmentsInput, TeachingUncheckedCreateWithoutAttachmentsInput>
    connectOrCreate?: TeachingCreateOrConnectWithoutAttachmentsInput
    upsert?: TeachingUpsertWithoutAttachmentsInput
    connect?: TeachingWhereUniqueInput
    update?: XOR<XOR<TeachingUpdateToOneWithWhereWithoutAttachmentsInput, TeachingUpdateWithoutAttachmentsInput>, TeachingUncheckedUpdateWithoutAttachmentsInput>
  }

  export type BlogAttachmentCreateNestedManyWithoutBlogInput = {
    create?: XOR<BlogAttachmentCreateWithoutBlogInput, BlogAttachmentUncheckedCreateWithoutBlogInput> | BlogAttachmentCreateWithoutBlogInput[] | BlogAttachmentUncheckedCreateWithoutBlogInput[]
    connectOrCreate?: BlogAttachmentCreateOrConnectWithoutBlogInput | BlogAttachmentCreateOrConnectWithoutBlogInput[]
    createMany?: BlogAttachmentCreateManyBlogInputEnvelope
    connect?: BlogAttachmentWhereUniqueInput | BlogAttachmentWhereUniqueInput[]
  }

  export type BlogAttachmentUncheckedCreateNestedManyWithoutBlogInput = {
    create?: XOR<BlogAttachmentCreateWithoutBlogInput, BlogAttachmentUncheckedCreateWithoutBlogInput> | BlogAttachmentCreateWithoutBlogInput[] | BlogAttachmentUncheckedCreateWithoutBlogInput[]
    connectOrCreate?: BlogAttachmentCreateOrConnectWithoutBlogInput | BlogAttachmentCreateOrConnectWithoutBlogInput[]
    createMany?: BlogAttachmentCreateManyBlogInputEnvelope
    connect?: BlogAttachmentWhereUniqueInput | BlogAttachmentWhereUniqueInput[]
  }

  export type EnumBlogStatusFieldUpdateOperationsInput = {
    set?: $Enums.BlogStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BlogAttachmentUpdateManyWithoutBlogNestedInput = {
    create?: XOR<BlogAttachmentCreateWithoutBlogInput, BlogAttachmentUncheckedCreateWithoutBlogInput> | BlogAttachmentCreateWithoutBlogInput[] | BlogAttachmentUncheckedCreateWithoutBlogInput[]
    connectOrCreate?: BlogAttachmentCreateOrConnectWithoutBlogInput | BlogAttachmentCreateOrConnectWithoutBlogInput[]
    upsert?: BlogAttachmentUpsertWithWhereUniqueWithoutBlogInput | BlogAttachmentUpsertWithWhereUniqueWithoutBlogInput[]
    createMany?: BlogAttachmentCreateManyBlogInputEnvelope
    set?: BlogAttachmentWhereUniqueInput | BlogAttachmentWhereUniqueInput[]
    disconnect?: BlogAttachmentWhereUniqueInput | BlogAttachmentWhereUniqueInput[]
    delete?: BlogAttachmentWhereUniqueInput | BlogAttachmentWhereUniqueInput[]
    connect?: BlogAttachmentWhereUniqueInput | BlogAttachmentWhereUniqueInput[]
    update?: BlogAttachmentUpdateWithWhereUniqueWithoutBlogInput | BlogAttachmentUpdateWithWhereUniqueWithoutBlogInput[]
    updateMany?: BlogAttachmentUpdateManyWithWhereWithoutBlogInput | BlogAttachmentUpdateManyWithWhereWithoutBlogInput[]
    deleteMany?: BlogAttachmentScalarWhereInput | BlogAttachmentScalarWhereInput[]
  }

  export type BlogAttachmentUncheckedUpdateManyWithoutBlogNestedInput = {
    create?: XOR<BlogAttachmentCreateWithoutBlogInput, BlogAttachmentUncheckedCreateWithoutBlogInput> | BlogAttachmentCreateWithoutBlogInput[] | BlogAttachmentUncheckedCreateWithoutBlogInput[]
    connectOrCreate?: BlogAttachmentCreateOrConnectWithoutBlogInput | BlogAttachmentCreateOrConnectWithoutBlogInput[]
    upsert?: BlogAttachmentUpsertWithWhereUniqueWithoutBlogInput | BlogAttachmentUpsertWithWhereUniqueWithoutBlogInput[]
    createMany?: BlogAttachmentCreateManyBlogInputEnvelope
    set?: BlogAttachmentWhereUniqueInput | BlogAttachmentWhereUniqueInput[]
    disconnect?: BlogAttachmentWhereUniqueInput | BlogAttachmentWhereUniqueInput[]
    delete?: BlogAttachmentWhereUniqueInput | BlogAttachmentWhereUniqueInput[]
    connect?: BlogAttachmentWhereUniqueInput | BlogAttachmentWhereUniqueInput[]
    update?: BlogAttachmentUpdateWithWhereUniqueWithoutBlogInput | BlogAttachmentUpdateWithWhereUniqueWithoutBlogInput[]
    updateMany?: BlogAttachmentUpdateManyWithWhereWithoutBlogInput | BlogAttachmentUpdateManyWithWhereWithoutBlogInput[]
    deleteMany?: BlogAttachmentScalarWhereInput | BlogAttachmentScalarWhereInput[]
  }

  export type BlogCreateNestedOneWithoutAttachmentsInput = {
    create?: XOR<BlogCreateWithoutAttachmentsInput, BlogUncheckedCreateWithoutAttachmentsInput>
    connectOrCreate?: BlogCreateOrConnectWithoutAttachmentsInput
    connect?: BlogWhereUniqueInput
  }

  export type BlogUpdateOneRequiredWithoutAttachmentsNestedInput = {
    create?: XOR<BlogCreateWithoutAttachmentsInput, BlogUncheckedCreateWithoutAttachmentsInput>
    connectOrCreate?: BlogCreateOrConnectWithoutAttachmentsInput
    upsert?: BlogUpsertWithoutAttachmentsInput
    connect?: BlogWhereUniqueInput
    update?: XOR<XOR<BlogUpdateToOneWithWhereWithoutAttachmentsInput, BlogUpdateWithoutAttachmentsInput>, BlogUncheckedUpdateWithoutAttachmentsInput>
  }

  export type UserCreateNestedOneWithoutMembershipRequestsInput = {
    create?: XOR<UserCreateWithoutMembershipRequestsInput, UserUncheckedCreateWithoutMembershipRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMembershipRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumMembershipStatusFieldUpdateOperationsInput = {
    set?: $Enums.MembershipStatus
  }

  export type UserUpdateOneWithoutMembershipRequestsNestedInput = {
    create?: XOR<UserCreateWithoutMembershipRequestsInput, UserUncheckedCreateWithoutMembershipRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMembershipRequestsInput
    upsert?: UserUpsertWithoutMembershipRequestsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMembershipRequestsInput, UserUpdateWithoutMembershipRequestsInput>, UserUncheckedUpdateWithoutMembershipRequestsInput>
  }

  export type UserCreateNestedOneWithoutMembershipNotificationsInput = {
    create?: XOR<UserCreateWithoutMembershipNotificationsInput, UserUncheckedCreateWithoutMembershipNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMembershipNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutMembershipNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutMembershipNotificationsInput, UserUncheckedCreateWithoutMembershipNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMembershipNotificationsInput
    upsert?: UserUpsertWithoutMembershipNotificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMembershipNotificationsInput, UserUpdateWithoutMembershipNotificationsInput>, UserUncheckedUpdateWithoutMembershipNotificationsInput>
  }

  export type MembershipRequestCreateNestedManyWithoutUserInput = {
    create?: XOR<MembershipRequestCreateWithoutUserInput, MembershipRequestUncheckedCreateWithoutUserInput> | MembershipRequestCreateWithoutUserInput[] | MembershipRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MembershipRequestCreateOrConnectWithoutUserInput | MembershipRequestCreateOrConnectWithoutUserInput[]
    createMany?: MembershipRequestCreateManyUserInputEnvelope
    connect?: MembershipRequestWhereUniqueInput | MembershipRequestWhereUniqueInput[]
  }

  export type MembershipNotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<MembershipNotificationCreateWithoutUserInput, MembershipNotificationUncheckedCreateWithoutUserInput> | MembershipNotificationCreateWithoutUserInput[] | MembershipNotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MembershipNotificationCreateOrConnectWithoutUserInput | MembershipNotificationCreateOrConnectWithoutUserInput[]
    createMany?: MembershipNotificationCreateManyUserInputEnvelope
    connect?: MembershipNotificationWhereUniqueInput | MembershipNotificationWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type MembershipRequestUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MembershipRequestCreateWithoutUserInput, MembershipRequestUncheckedCreateWithoutUserInput> | MembershipRequestCreateWithoutUserInput[] | MembershipRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MembershipRequestCreateOrConnectWithoutUserInput | MembershipRequestCreateOrConnectWithoutUserInput[]
    createMany?: MembershipRequestCreateManyUserInputEnvelope
    connect?: MembershipRequestWhereUniqueInput | MembershipRequestWhereUniqueInput[]
  }

  export type MembershipNotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MembershipNotificationCreateWithoutUserInput, MembershipNotificationUncheckedCreateWithoutUserInput> | MembershipNotificationCreateWithoutUserInput[] | MembershipNotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MembershipNotificationCreateOrConnectWithoutUserInput | MembershipNotificationCreateOrConnectWithoutUserInput[]
    createMany?: MembershipNotificationCreateManyUserInputEnvelope
    connect?: MembershipNotificationWhereUniqueInput | MembershipNotificationWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type MembershipRequestUpdateManyWithoutUserNestedInput = {
    create?: XOR<MembershipRequestCreateWithoutUserInput, MembershipRequestUncheckedCreateWithoutUserInput> | MembershipRequestCreateWithoutUserInput[] | MembershipRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MembershipRequestCreateOrConnectWithoutUserInput | MembershipRequestCreateOrConnectWithoutUserInput[]
    upsert?: MembershipRequestUpsertWithWhereUniqueWithoutUserInput | MembershipRequestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MembershipRequestCreateManyUserInputEnvelope
    set?: MembershipRequestWhereUniqueInput | MembershipRequestWhereUniqueInput[]
    disconnect?: MembershipRequestWhereUniqueInput | MembershipRequestWhereUniqueInput[]
    delete?: MembershipRequestWhereUniqueInput | MembershipRequestWhereUniqueInput[]
    connect?: MembershipRequestWhereUniqueInput | MembershipRequestWhereUniqueInput[]
    update?: MembershipRequestUpdateWithWhereUniqueWithoutUserInput | MembershipRequestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MembershipRequestUpdateManyWithWhereWithoutUserInput | MembershipRequestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MembershipRequestScalarWhereInput | MembershipRequestScalarWhereInput[]
  }

  export type MembershipNotificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<MembershipNotificationCreateWithoutUserInput, MembershipNotificationUncheckedCreateWithoutUserInput> | MembershipNotificationCreateWithoutUserInput[] | MembershipNotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MembershipNotificationCreateOrConnectWithoutUserInput | MembershipNotificationCreateOrConnectWithoutUserInput[]
    upsert?: MembershipNotificationUpsertWithWhereUniqueWithoutUserInput | MembershipNotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MembershipNotificationCreateManyUserInputEnvelope
    set?: MembershipNotificationWhereUniqueInput | MembershipNotificationWhereUniqueInput[]
    disconnect?: MembershipNotificationWhereUniqueInput | MembershipNotificationWhereUniqueInput[]
    delete?: MembershipNotificationWhereUniqueInput | MembershipNotificationWhereUniqueInput[]
    connect?: MembershipNotificationWhereUniqueInput | MembershipNotificationWhereUniqueInput[]
    update?: MembershipNotificationUpdateWithWhereUniqueWithoutUserInput | MembershipNotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MembershipNotificationUpdateManyWithWhereWithoutUserInput | MembershipNotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MembershipNotificationScalarWhereInput | MembershipNotificationScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type MembershipRequestUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MembershipRequestCreateWithoutUserInput, MembershipRequestUncheckedCreateWithoutUserInput> | MembershipRequestCreateWithoutUserInput[] | MembershipRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MembershipRequestCreateOrConnectWithoutUserInput | MembershipRequestCreateOrConnectWithoutUserInput[]
    upsert?: MembershipRequestUpsertWithWhereUniqueWithoutUserInput | MembershipRequestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MembershipRequestCreateManyUserInputEnvelope
    set?: MembershipRequestWhereUniqueInput | MembershipRequestWhereUniqueInput[]
    disconnect?: MembershipRequestWhereUniqueInput | MembershipRequestWhereUniqueInput[]
    delete?: MembershipRequestWhereUniqueInput | MembershipRequestWhereUniqueInput[]
    connect?: MembershipRequestWhereUniqueInput | MembershipRequestWhereUniqueInput[]
    update?: MembershipRequestUpdateWithWhereUniqueWithoutUserInput | MembershipRequestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MembershipRequestUpdateManyWithWhereWithoutUserInput | MembershipRequestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MembershipRequestScalarWhereInput | MembershipRequestScalarWhereInput[]
  }

  export type MembershipNotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MembershipNotificationCreateWithoutUserInput, MembershipNotificationUncheckedCreateWithoutUserInput> | MembershipNotificationCreateWithoutUserInput[] | MembershipNotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MembershipNotificationCreateOrConnectWithoutUserInput | MembershipNotificationCreateOrConnectWithoutUserInput[]
    upsert?: MembershipNotificationUpsertWithWhereUniqueWithoutUserInput | MembershipNotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MembershipNotificationCreateManyUserInputEnvelope
    set?: MembershipNotificationWhereUniqueInput | MembershipNotificationWhereUniqueInput[]
    disconnect?: MembershipNotificationWhereUniqueInput | MembershipNotificationWhereUniqueInput[]
    delete?: MembershipNotificationWhereUniqueInput | MembershipNotificationWhereUniqueInput[]
    connect?: MembershipNotificationWhereUniqueInput | MembershipNotificationWhereUniqueInput[]
    update?: MembershipNotificationUpdateWithWhereUniqueWithoutUserInput | MembershipNotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MembershipNotificationUpdateManyWithWhereWithoutUserInput | MembershipNotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MembershipNotificationScalarWhereInput | MembershipNotificationScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumBlogStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BlogStatus | EnumBlogStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BlogStatus[] | ListEnumBlogStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BlogStatus[] | ListEnumBlogStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBlogStatusFilter<$PrismaModel> | $Enums.BlogStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumBlogStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BlogStatus | EnumBlogStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BlogStatus[] | ListEnumBlogStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BlogStatus[] | ListEnumBlogStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBlogStatusWithAggregatesFilter<$PrismaModel> | $Enums.BlogStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBlogStatusFilter<$PrismaModel>
    _max?: NestedEnumBlogStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumMembershipStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MembershipStatus | EnumMembershipStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MembershipStatus[] | ListEnumMembershipStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MembershipStatus[] | ListEnumMembershipStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMembershipStatusFilter<$PrismaModel> | $Enums.MembershipStatus
  }

  export type NestedEnumMembershipStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MembershipStatus | EnumMembershipStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MembershipStatus[] | ListEnumMembershipStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MembershipStatus[] | ListEnumMembershipStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMembershipStatusWithAggregatesFilter<$PrismaModel> | $Enums.MembershipStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMembershipStatusFilter<$PrismaModel>
    _max?: NestedEnumMembershipStatusFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type TeachingAttachmentCreateWithoutTeachingInput = {
    id?: string
    title?: string | null
    storagePath: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeachingAttachmentUncheckedCreateWithoutTeachingInput = {
    id?: string
    title?: string | null
    storagePath: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeachingAttachmentCreateOrConnectWithoutTeachingInput = {
    where: TeachingAttachmentWhereUniqueInput
    create: XOR<TeachingAttachmentCreateWithoutTeachingInput, TeachingAttachmentUncheckedCreateWithoutTeachingInput>
  }

  export type TeachingAttachmentCreateManyTeachingInputEnvelope = {
    data: TeachingAttachmentCreateManyTeachingInput | TeachingAttachmentCreateManyTeachingInput[]
    skipDuplicates?: boolean
  }

  export type TeachingAttachmentUpsertWithWhereUniqueWithoutTeachingInput = {
    where: TeachingAttachmentWhereUniqueInput
    update: XOR<TeachingAttachmentUpdateWithoutTeachingInput, TeachingAttachmentUncheckedUpdateWithoutTeachingInput>
    create: XOR<TeachingAttachmentCreateWithoutTeachingInput, TeachingAttachmentUncheckedCreateWithoutTeachingInput>
  }

  export type TeachingAttachmentUpdateWithWhereUniqueWithoutTeachingInput = {
    where: TeachingAttachmentWhereUniqueInput
    data: XOR<TeachingAttachmentUpdateWithoutTeachingInput, TeachingAttachmentUncheckedUpdateWithoutTeachingInput>
  }

  export type TeachingAttachmentUpdateManyWithWhereWithoutTeachingInput = {
    where: TeachingAttachmentScalarWhereInput
    data: XOR<TeachingAttachmentUpdateManyMutationInput, TeachingAttachmentUncheckedUpdateManyWithoutTeachingInput>
  }

  export type TeachingAttachmentScalarWhereInput = {
    AND?: TeachingAttachmentScalarWhereInput | TeachingAttachmentScalarWhereInput[]
    OR?: TeachingAttachmentScalarWhereInput[]
    NOT?: TeachingAttachmentScalarWhereInput | TeachingAttachmentScalarWhereInput[]
    id?: StringFilter<"TeachingAttachment"> | string
    teachingId?: StringFilter<"TeachingAttachment"> | string
    title?: StringNullableFilter<"TeachingAttachment"> | string | null
    storagePath?: StringFilter<"TeachingAttachment"> | string
    createdAt?: DateTimeFilter<"TeachingAttachment"> | Date | string
    updatedAt?: DateTimeFilter<"TeachingAttachment"> | Date | string
  }

  export type TeachingCreateWithoutAttachmentsInput = {
    id?: string
    slug?: string | null
    youtubeUrl: string
    youtubeId: string
    thumbnailUrl?: string | null
    title: string
    titleAm?: string | null
    titleOm?: string | null
    description?: string | null
    descriptionAm?: string | null
    descriptionOm?: string | null
    durationSeconds?: number | null
    semesterLabel?: string | null
    scheduleLine?: string | null
    venueLine?: string | null
    position?: number
    published?: boolean
    membersOnly?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeachingUncheckedCreateWithoutAttachmentsInput = {
    id?: string
    slug?: string | null
    youtubeUrl: string
    youtubeId: string
    thumbnailUrl?: string | null
    title: string
    titleAm?: string | null
    titleOm?: string | null
    description?: string | null
    descriptionAm?: string | null
    descriptionOm?: string | null
    durationSeconds?: number | null
    semesterLabel?: string | null
    scheduleLine?: string | null
    venueLine?: string | null
    position?: number
    published?: boolean
    membersOnly?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeachingCreateOrConnectWithoutAttachmentsInput = {
    where: TeachingWhereUniqueInput
    create: XOR<TeachingCreateWithoutAttachmentsInput, TeachingUncheckedCreateWithoutAttachmentsInput>
  }

  export type TeachingUpsertWithoutAttachmentsInput = {
    update: XOR<TeachingUpdateWithoutAttachmentsInput, TeachingUncheckedUpdateWithoutAttachmentsInput>
    create: XOR<TeachingCreateWithoutAttachmentsInput, TeachingUncheckedCreateWithoutAttachmentsInput>
    where?: TeachingWhereInput
  }

  export type TeachingUpdateToOneWithWhereWithoutAttachmentsInput = {
    where?: TeachingWhereInput
    data: XOR<TeachingUpdateWithoutAttachmentsInput, TeachingUncheckedUpdateWithoutAttachmentsInput>
  }

  export type TeachingUpdateWithoutAttachmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    youtubeUrl?: StringFieldUpdateOperationsInput | string
    youtubeId?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    titleAm?: NullableStringFieldUpdateOperationsInput | string | null
    titleOm?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    descriptionAm?: NullableStringFieldUpdateOperationsInput | string | null
    descriptionOm?: NullableStringFieldUpdateOperationsInput | string | null
    durationSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    semesterLabel?: NullableStringFieldUpdateOperationsInput | string | null
    scheduleLine?: NullableStringFieldUpdateOperationsInput | string | null
    venueLine?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
    published?: BoolFieldUpdateOperationsInput | boolean
    membersOnly?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeachingUncheckedUpdateWithoutAttachmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    youtubeUrl?: StringFieldUpdateOperationsInput | string
    youtubeId?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    titleAm?: NullableStringFieldUpdateOperationsInput | string | null
    titleOm?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    descriptionAm?: NullableStringFieldUpdateOperationsInput | string | null
    descriptionOm?: NullableStringFieldUpdateOperationsInput | string | null
    durationSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    semesterLabel?: NullableStringFieldUpdateOperationsInput | string | null
    scheduleLine?: NullableStringFieldUpdateOperationsInput | string | null
    venueLine?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
    published?: BoolFieldUpdateOperationsInput | boolean
    membersOnly?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogAttachmentCreateWithoutBlogInput = {
    id?: string
    title?: string | null
    storagePath: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogAttachmentUncheckedCreateWithoutBlogInput = {
    id?: string
    title?: string | null
    storagePath: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogAttachmentCreateOrConnectWithoutBlogInput = {
    where: BlogAttachmentWhereUniqueInput
    create: XOR<BlogAttachmentCreateWithoutBlogInput, BlogAttachmentUncheckedCreateWithoutBlogInput>
  }

  export type BlogAttachmentCreateManyBlogInputEnvelope = {
    data: BlogAttachmentCreateManyBlogInput | BlogAttachmentCreateManyBlogInput[]
    skipDuplicates?: boolean
  }

  export type BlogAttachmentUpsertWithWhereUniqueWithoutBlogInput = {
    where: BlogAttachmentWhereUniqueInput
    update: XOR<BlogAttachmentUpdateWithoutBlogInput, BlogAttachmentUncheckedUpdateWithoutBlogInput>
    create: XOR<BlogAttachmentCreateWithoutBlogInput, BlogAttachmentUncheckedCreateWithoutBlogInput>
  }

  export type BlogAttachmentUpdateWithWhereUniqueWithoutBlogInput = {
    where: BlogAttachmentWhereUniqueInput
    data: XOR<BlogAttachmentUpdateWithoutBlogInput, BlogAttachmentUncheckedUpdateWithoutBlogInput>
  }

  export type BlogAttachmentUpdateManyWithWhereWithoutBlogInput = {
    where: BlogAttachmentScalarWhereInput
    data: XOR<BlogAttachmentUpdateManyMutationInput, BlogAttachmentUncheckedUpdateManyWithoutBlogInput>
  }

  export type BlogAttachmentScalarWhereInput = {
    AND?: BlogAttachmentScalarWhereInput | BlogAttachmentScalarWhereInput[]
    OR?: BlogAttachmentScalarWhereInput[]
    NOT?: BlogAttachmentScalarWhereInput | BlogAttachmentScalarWhereInput[]
    id?: StringFilter<"BlogAttachment"> | string
    blogId?: StringFilter<"BlogAttachment"> | string
    title?: StringNullableFilter<"BlogAttachment"> | string | null
    storagePath?: StringFilter<"BlogAttachment"> | string
    createdAt?: DateTimeFilter<"BlogAttachment"> | Date | string
    updatedAt?: DateTimeFilter<"BlogAttachment"> | Date | string
  }

  export type BlogCreateWithoutAttachmentsInput = {
    id?: string
    slug: string
    title: string
    titleAm?: string | null
    titleOm?: string | null
    excerpt?: string | null
    excerptAm?: string | null
    excerptOm?: string | null
    content: JsonNullValueInput | InputJsonValue
    contentAm?: NullableJsonNullValueInput | InputJsonValue
    contentOm?: NullableJsonNullValueInput | InputJsonValue
    coverImage?: string | null
    status?: $Enums.BlogStatus
    publishedAt?: Date | string | null
    viewCount?: number
    membersOnly?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogUncheckedCreateWithoutAttachmentsInput = {
    id?: string
    slug: string
    title: string
    titleAm?: string | null
    titleOm?: string | null
    excerpt?: string | null
    excerptAm?: string | null
    excerptOm?: string | null
    content: JsonNullValueInput | InputJsonValue
    contentAm?: NullableJsonNullValueInput | InputJsonValue
    contentOm?: NullableJsonNullValueInput | InputJsonValue
    coverImage?: string | null
    status?: $Enums.BlogStatus
    publishedAt?: Date | string | null
    viewCount?: number
    membersOnly?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogCreateOrConnectWithoutAttachmentsInput = {
    where: BlogWhereUniqueInput
    create: XOR<BlogCreateWithoutAttachmentsInput, BlogUncheckedCreateWithoutAttachmentsInput>
  }

  export type BlogUpsertWithoutAttachmentsInput = {
    update: XOR<BlogUpdateWithoutAttachmentsInput, BlogUncheckedUpdateWithoutAttachmentsInput>
    create: XOR<BlogCreateWithoutAttachmentsInput, BlogUncheckedCreateWithoutAttachmentsInput>
    where?: BlogWhereInput
  }

  export type BlogUpdateToOneWithWhereWithoutAttachmentsInput = {
    where?: BlogWhereInput
    data: XOR<BlogUpdateWithoutAttachmentsInput, BlogUncheckedUpdateWithoutAttachmentsInput>
  }

  export type BlogUpdateWithoutAttachmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    titleAm?: NullableStringFieldUpdateOperationsInput | string | null
    titleOm?: NullableStringFieldUpdateOperationsInput | string | null
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    excerptAm?: NullableStringFieldUpdateOperationsInput | string | null
    excerptOm?: NullableStringFieldUpdateOperationsInput | string | null
    content?: JsonNullValueInput | InputJsonValue
    contentAm?: NullableJsonNullValueInput | InputJsonValue
    contentOm?: NullableJsonNullValueInput | InputJsonValue
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBlogStatusFieldUpdateOperationsInput | $Enums.BlogStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    viewCount?: IntFieldUpdateOperationsInput | number
    membersOnly?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogUncheckedUpdateWithoutAttachmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    titleAm?: NullableStringFieldUpdateOperationsInput | string | null
    titleOm?: NullableStringFieldUpdateOperationsInput | string | null
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    excerptAm?: NullableStringFieldUpdateOperationsInput | string | null
    excerptOm?: NullableStringFieldUpdateOperationsInput | string | null
    content?: JsonNullValueInput | InputJsonValue
    contentAm?: NullableJsonNullValueInput | InputJsonValue
    contentOm?: NullableJsonNullValueInput | InputJsonValue
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBlogStatusFieldUpdateOperationsInput | $Enums.BlogStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    viewCount?: IntFieldUpdateOperationsInput | number
    membersOnly?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutMembershipRequestsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: string | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: Date | string | null
    membershipNotifications?: MembershipNotificationCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMembershipRequestsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: string | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: Date | string | null
    membershipNotifications?: MembershipNotificationUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMembershipRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMembershipRequestsInput, UserUncheckedCreateWithoutMembershipRequestsInput>
  }

  export type UserUpsertWithoutMembershipRequestsInput = {
    update: XOR<UserUpdateWithoutMembershipRequestsInput, UserUncheckedUpdateWithoutMembershipRequestsInput>
    create: XOR<UserCreateWithoutMembershipRequestsInput, UserUncheckedCreateWithoutMembershipRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMembershipRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMembershipRequestsInput, UserUncheckedUpdateWithoutMembershipRequestsInput>
  }

  export type UserUpdateWithoutMembershipRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    membershipNotifications?: MembershipNotificationUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMembershipRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    membershipNotifications?: MembershipNotificationUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutMembershipNotificationsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: string | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: Date | string | null
    membershipRequests?: MembershipRequestCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMembershipNotificationsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: string | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: Date | string | null
    membershipRequests?: MembershipRequestUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMembershipNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMembershipNotificationsInput, UserUncheckedCreateWithoutMembershipNotificationsInput>
  }

  export type UserUpsertWithoutMembershipNotificationsInput = {
    update: XOR<UserUpdateWithoutMembershipNotificationsInput, UserUncheckedUpdateWithoutMembershipNotificationsInput>
    create: XOR<UserCreateWithoutMembershipNotificationsInput, UserUncheckedCreateWithoutMembershipNotificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMembershipNotificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMembershipNotificationsInput, UserUncheckedUpdateWithoutMembershipNotificationsInput>
  }

  export type UserUpdateWithoutMembershipNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    membershipRequests?: MembershipRequestUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMembershipNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    membershipRequests?: MembershipRequestUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MembershipRequestCreateWithoutUserInput = {
    id?: string
    fullName: string
    email: string
    phone: string
    telegram?: string | null
    message?: string | null
    status?: $Enums.MembershipStatus
    paymentMethod?: string | null
    paymentProofStoragePath?: string | null
    paymentSubmittedAt?: Date | string | null
    approvedAt?: Date | string | null
    approvedBy?: string | null
    rejectionReason?: string | null
    membershipStartsAt?: Date | string | null
    membershipExpiresAt?: Date | string | null
    renewedFromId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MembershipRequestUncheckedCreateWithoutUserInput = {
    id?: string
    fullName: string
    email: string
    phone: string
    telegram?: string | null
    message?: string | null
    status?: $Enums.MembershipStatus
    paymentMethod?: string | null
    paymentProofStoragePath?: string | null
    paymentSubmittedAt?: Date | string | null
    approvedAt?: Date | string | null
    approvedBy?: string | null
    rejectionReason?: string | null
    membershipStartsAt?: Date | string | null
    membershipExpiresAt?: Date | string | null
    renewedFromId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MembershipRequestCreateOrConnectWithoutUserInput = {
    where: MembershipRequestWhereUniqueInput
    create: XOR<MembershipRequestCreateWithoutUserInput, MembershipRequestUncheckedCreateWithoutUserInput>
  }

  export type MembershipRequestCreateManyUserInputEnvelope = {
    data: MembershipRequestCreateManyUserInput | MembershipRequestCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MembershipNotificationCreateWithoutUserInput = {
    id?: string
    title: string
    body?: string | null
    type?: string | null
    readAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MembershipNotificationUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    body?: string | null
    type?: string | null
    readAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MembershipNotificationCreateOrConnectWithoutUserInput = {
    where: MembershipNotificationWhereUniqueInput
    create: XOR<MembershipNotificationCreateWithoutUserInput, MembershipNotificationUncheckedCreateWithoutUserInput>
  }

  export type MembershipNotificationCreateManyUserInputEnvelope = {
    data: MembershipNotificationCreateManyUserInput | MembershipNotificationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    impersonatedBy?: string | null
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    impersonatedBy?: string | null
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountCreateWithoutUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MembershipRequestUpsertWithWhereUniqueWithoutUserInput = {
    where: MembershipRequestWhereUniqueInput
    update: XOR<MembershipRequestUpdateWithoutUserInput, MembershipRequestUncheckedUpdateWithoutUserInput>
    create: XOR<MembershipRequestCreateWithoutUserInput, MembershipRequestUncheckedCreateWithoutUserInput>
  }

  export type MembershipRequestUpdateWithWhereUniqueWithoutUserInput = {
    where: MembershipRequestWhereUniqueInput
    data: XOR<MembershipRequestUpdateWithoutUserInput, MembershipRequestUncheckedUpdateWithoutUserInput>
  }

  export type MembershipRequestUpdateManyWithWhereWithoutUserInput = {
    where: MembershipRequestScalarWhereInput
    data: XOR<MembershipRequestUpdateManyMutationInput, MembershipRequestUncheckedUpdateManyWithoutUserInput>
  }

  export type MembershipRequestScalarWhereInput = {
    AND?: MembershipRequestScalarWhereInput | MembershipRequestScalarWhereInput[]
    OR?: MembershipRequestScalarWhereInput[]
    NOT?: MembershipRequestScalarWhereInput | MembershipRequestScalarWhereInput[]
    id?: StringFilter<"MembershipRequest"> | string
    userId?: StringNullableFilter<"MembershipRequest"> | string | null
    fullName?: StringFilter<"MembershipRequest"> | string
    email?: StringFilter<"MembershipRequest"> | string
    phone?: StringFilter<"MembershipRequest"> | string
    telegram?: StringNullableFilter<"MembershipRequest"> | string | null
    message?: StringNullableFilter<"MembershipRequest"> | string | null
    status?: EnumMembershipStatusFilter<"MembershipRequest"> | $Enums.MembershipStatus
    paymentMethod?: StringNullableFilter<"MembershipRequest"> | string | null
    paymentProofStoragePath?: StringNullableFilter<"MembershipRequest"> | string | null
    paymentSubmittedAt?: DateTimeNullableFilter<"MembershipRequest"> | Date | string | null
    approvedAt?: DateTimeNullableFilter<"MembershipRequest"> | Date | string | null
    approvedBy?: StringNullableFilter<"MembershipRequest"> | string | null
    rejectionReason?: StringNullableFilter<"MembershipRequest"> | string | null
    membershipStartsAt?: DateTimeNullableFilter<"MembershipRequest"> | Date | string | null
    membershipExpiresAt?: DateTimeNullableFilter<"MembershipRequest"> | Date | string | null
    renewedFromId?: StringNullableFilter<"MembershipRequest"> | string | null
    createdAt?: DateTimeFilter<"MembershipRequest"> | Date | string
    updatedAt?: DateTimeFilter<"MembershipRequest"> | Date | string
  }

  export type MembershipNotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: MembershipNotificationWhereUniqueInput
    update: XOR<MembershipNotificationUpdateWithoutUserInput, MembershipNotificationUncheckedUpdateWithoutUserInput>
    create: XOR<MembershipNotificationCreateWithoutUserInput, MembershipNotificationUncheckedCreateWithoutUserInput>
  }

  export type MembershipNotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: MembershipNotificationWhereUniqueInput
    data: XOR<MembershipNotificationUpdateWithoutUserInput, MembershipNotificationUncheckedUpdateWithoutUserInput>
  }

  export type MembershipNotificationUpdateManyWithWhereWithoutUserInput = {
    where: MembershipNotificationScalarWhereInput
    data: XOR<MembershipNotificationUpdateManyMutationInput, MembershipNotificationUncheckedUpdateManyWithoutUserInput>
  }

  export type MembershipNotificationScalarWhereInput = {
    AND?: MembershipNotificationScalarWhereInput | MembershipNotificationScalarWhereInput[]
    OR?: MembershipNotificationScalarWhereInput[]
    NOT?: MembershipNotificationScalarWhereInput | MembershipNotificationScalarWhereInput[]
    id?: StringFilter<"MembershipNotification"> | string
    userId?: StringFilter<"MembershipNotification"> | string
    title?: StringFilter<"MembershipNotification"> | string
    body?: StringNullableFilter<"MembershipNotification"> | string | null
    type?: StringNullableFilter<"MembershipNotification"> | string | null
    readAt?: DateTimeNullableFilter<"MembershipNotification"> | Date | string | null
    createdAt?: DateTimeFilter<"MembershipNotification"> | Date | string
    updatedAt?: DateTimeFilter<"MembershipNotification"> | Date | string
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    token?: StringFilter<"Session"> | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
    impersonatedBy?: StringNullableFilter<"Session"> | string | null
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
  }

  export type UserCreateWithoutSessionsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: string | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: Date | string | null
    membershipRequests?: MembershipRequestCreateNestedManyWithoutUserInput
    membershipNotifications?: MembershipNotificationCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: string | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: Date | string | null
    membershipRequests?: MembershipRequestUncheckedCreateNestedManyWithoutUserInput
    membershipNotifications?: MembershipNotificationUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    membershipRequests?: MembershipRequestUpdateManyWithoutUserNestedInput
    membershipNotifications?: MembershipNotificationUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    membershipRequests?: MembershipRequestUncheckedUpdateManyWithoutUserNestedInput
    membershipNotifications?: MembershipNotificationUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAccountsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: string | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: Date | string | null
    membershipRequests?: MembershipRequestCreateNestedManyWithoutUserInput
    membershipNotifications?: MembershipNotificationCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: string | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: Date | string | null
    membershipRequests?: MembershipRequestUncheckedCreateNestedManyWithoutUserInput
    membershipNotifications?: MembershipNotificationUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    membershipRequests?: MembershipRequestUpdateManyWithoutUserNestedInput
    membershipNotifications?: MembershipNotificationUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    membershipRequests?: MembershipRequestUncheckedUpdateManyWithoutUserNestedInput
    membershipNotifications?: MembershipNotificationUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TeachingAttachmentCreateManyTeachingInput = {
    id?: string
    title?: string | null
    storagePath: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeachingAttachmentUpdateWithoutTeachingInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    storagePath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeachingAttachmentUncheckedUpdateWithoutTeachingInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    storagePath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeachingAttachmentUncheckedUpdateManyWithoutTeachingInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    storagePath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogAttachmentCreateManyBlogInput = {
    id?: string
    title?: string | null
    storagePath: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogAttachmentUpdateWithoutBlogInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    storagePath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogAttachmentUncheckedUpdateWithoutBlogInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    storagePath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogAttachmentUncheckedUpdateManyWithoutBlogInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    storagePath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembershipRequestCreateManyUserInput = {
    id?: string
    fullName: string
    email: string
    phone: string
    telegram?: string | null
    message?: string | null
    status?: $Enums.MembershipStatus
    paymentMethod?: string | null
    paymentProofStoragePath?: string | null
    paymentSubmittedAt?: Date | string | null
    approvedAt?: Date | string | null
    approvedBy?: string | null
    rejectionReason?: string | null
    membershipStartsAt?: Date | string | null
    membershipExpiresAt?: Date | string | null
    renewedFromId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MembershipNotificationCreateManyUserInput = {
    id?: string
    title: string
    body?: string | null
    type?: string | null
    readAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionCreateManyUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    impersonatedBy?: string | null
  }

  export type AccountCreateManyUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MembershipRequestUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    telegram?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMembershipStatusFieldUpdateOperationsInput | $Enums.MembershipStatus
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    paymentProofStoragePath?: NullableStringFieldUpdateOperationsInput | string | null
    paymentSubmittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    membershipStartsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    membershipExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    renewedFromId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembershipRequestUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    telegram?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMembershipStatusFieldUpdateOperationsInput | $Enums.MembershipStatus
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    paymentProofStoragePath?: NullableStringFieldUpdateOperationsInput | string | null
    paymentSubmittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    membershipStartsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    membershipExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    renewedFromId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembershipRequestUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    telegram?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMembershipStatusFieldUpdateOperationsInput | $Enums.MembershipStatus
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    paymentProofStoragePath?: NullableStringFieldUpdateOperationsInput | string | null
    paymentSubmittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    membershipStartsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    membershipExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    renewedFromId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembershipNotificationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembershipNotificationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembershipNotificationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    impersonatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    impersonatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    impersonatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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