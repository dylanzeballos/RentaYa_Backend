
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
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Inmueble
 * 
 */
export type Inmueble = $Result.DefaultSelection<Prisma.$InmueblePayload>
/**
 * Model Interes
 * 
 */
export type Interes = $Result.DefaultSelection<Prisma.$InteresPayload>
/**
 * Model Mensaje
 * 
 */
export type Mensaje = $Result.DefaultSelection<Prisma.$MensajePayload>
/**
 * Model FotoInmueble
 * 
 */
export type FotoInmueble = $Result.DefaultSelection<Prisma.$FotoInmueblePayload>
/**
 * Model Resena
 * 
 */
export type Resena = $Result.DefaultSelection<Prisma.$ResenaPayload>
/**
 * Model Notificacion
 * 
 */
export type Notificacion = $Result.DefaultSelection<Prisma.$NotificacionPayload>
/**
 * Model Reporte
 * 
 */
export type Reporte = $Result.DefaultSelection<Prisma.$ReportePayload>
/**
 * Model Favorito
 * 
 */
export type Favorito = $Result.DefaultSelection<Prisma.$FavoritoPayload>
/**
 * Model BusquedaGuardada
 * 
 */
export type BusquedaGuardada = $Result.DefaultSelection<Prisma.$BusquedaGuardadaPayload>
/**
 * Model UserPreference
 * 
 */
export type UserPreference = $Result.DefaultSelection<Prisma.$UserPreferencePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * const prisma = new PrismaClient()
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inmueble`: Exposes CRUD operations for the **Inmueble** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Inmuebles
    * const inmuebles = await prisma.inmueble.findMany()
    * ```
    */
  get inmueble(): Prisma.InmuebleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.interes`: Exposes CRUD operations for the **Interes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Interes
    * const interes = await prisma.interes.findMany()
    * ```
    */
  get interes(): Prisma.InteresDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mensaje`: Exposes CRUD operations for the **Mensaje** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mensajes
    * const mensajes = await prisma.mensaje.findMany()
    * ```
    */
  get mensaje(): Prisma.MensajeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fotoInmueble`: Exposes CRUD operations for the **FotoInmueble** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FotoInmuebles
    * const fotoInmuebles = await prisma.fotoInmueble.findMany()
    * ```
    */
  get fotoInmueble(): Prisma.FotoInmuebleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.resena`: Exposes CRUD operations for the **Resena** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Resenas
    * const resenas = await prisma.resena.findMany()
    * ```
    */
  get resena(): Prisma.ResenaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notificacion`: Exposes CRUD operations for the **Notificacion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notificacions
    * const notificacions = await prisma.notificacion.findMany()
    * ```
    */
  get notificacion(): Prisma.NotificacionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reporte`: Exposes CRUD operations for the **Reporte** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reportes
    * const reportes = await prisma.reporte.findMany()
    * ```
    */
  get reporte(): Prisma.ReporteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.favorito`: Exposes CRUD operations for the **Favorito** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Favoritos
    * const favoritos = await prisma.favorito.findMany()
    * ```
    */
  get favorito(): Prisma.FavoritoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.busquedaGuardada`: Exposes CRUD operations for the **BusquedaGuardada** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BusquedaGuardadas
    * const busquedaGuardadas = await prisma.busquedaGuardada.findMany()
    * ```
    */
  get busquedaGuardada(): Prisma.BusquedaGuardadaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userPreference`: Exposes CRUD operations for the **UserPreference** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserPreferences
    * const userPreferences = await prisma.userPreference.findMany()
    * ```
    */
  get userPreference(): Prisma.UserPreferenceDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.18.0
   * Query Engine version: 34b5a692b7bd79939a9a2c3ef97d816e749cda2f
   */
  export type PrismaVersion = {
    client: string
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
    Usuario: 'Usuario',
    Inmueble: 'Inmueble',
    Interes: 'Interes',
    Mensaje: 'Mensaje',
    FotoInmueble: 'FotoInmueble',
    Resena: 'Resena',
    Notificacion: 'Notificacion',
    Reporte: 'Reporte',
    Favorito: 'Favorito',
    BusquedaGuardada: 'BusquedaGuardada',
    UserPreference: 'UserPreference'
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
      modelProps: "usuario" | "inmueble" | "interes" | "mensaje" | "fotoInmueble" | "resena" | "notificacion" | "reporte" | "favorito" | "busquedaGuardada" | "userPreference"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Inmueble: {
        payload: Prisma.$InmueblePayload<ExtArgs>
        fields: Prisma.InmuebleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InmuebleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InmueblePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InmuebleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InmueblePayload>
          }
          findFirst: {
            args: Prisma.InmuebleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InmueblePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InmuebleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InmueblePayload>
          }
          findMany: {
            args: Prisma.InmuebleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InmueblePayload>[]
          }
          create: {
            args: Prisma.InmuebleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InmueblePayload>
          }
          createMany: {
            args: Prisma.InmuebleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InmuebleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InmueblePayload>[]
          }
          delete: {
            args: Prisma.InmuebleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InmueblePayload>
          }
          update: {
            args: Prisma.InmuebleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InmueblePayload>
          }
          deleteMany: {
            args: Prisma.InmuebleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InmuebleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InmuebleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InmueblePayload>[]
          }
          upsert: {
            args: Prisma.InmuebleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InmueblePayload>
          }
          aggregate: {
            args: Prisma.InmuebleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInmueble>
          }
          groupBy: {
            args: Prisma.InmuebleGroupByArgs<ExtArgs>
            result: $Utils.Optional<InmuebleGroupByOutputType>[]
          }
          count: {
            args: Prisma.InmuebleCountArgs<ExtArgs>
            result: $Utils.Optional<InmuebleCountAggregateOutputType> | number
          }
        }
      }
      Interes: {
        payload: Prisma.$InteresPayload<ExtArgs>
        fields: Prisma.InteresFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InteresFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteresPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InteresFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteresPayload>
          }
          findFirst: {
            args: Prisma.InteresFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteresPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InteresFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteresPayload>
          }
          findMany: {
            args: Prisma.InteresFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteresPayload>[]
          }
          create: {
            args: Prisma.InteresCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteresPayload>
          }
          createMany: {
            args: Prisma.InteresCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InteresCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteresPayload>[]
          }
          delete: {
            args: Prisma.InteresDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteresPayload>
          }
          update: {
            args: Prisma.InteresUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteresPayload>
          }
          deleteMany: {
            args: Prisma.InteresDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InteresUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InteresUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteresPayload>[]
          }
          upsert: {
            args: Prisma.InteresUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteresPayload>
          }
          aggregate: {
            args: Prisma.InteresAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInteres>
          }
          groupBy: {
            args: Prisma.InteresGroupByArgs<ExtArgs>
            result: $Utils.Optional<InteresGroupByOutputType>[]
          }
          count: {
            args: Prisma.InteresCountArgs<ExtArgs>
            result: $Utils.Optional<InteresCountAggregateOutputType> | number
          }
        }
      }
      Mensaje: {
        payload: Prisma.$MensajePayload<ExtArgs>
        fields: Prisma.MensajeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MensajeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensajePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MensajeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensajePayload>
          }
          findFirst: {
            args: Prisma.MensajeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensajePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MensajeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensajePayload>
          }
          findMany: {
            args: Prisma.MensajeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensajePayload>[]
          }
          create: {
            args: Prisma.MensajeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensajePayload>
          }
          createMany: {
            args: Prisma.MensajeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MensajeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensajePayload>[]
          }
          delete: {
            args: Prisma.MensajeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensajePayload>
          }
          update: {
            args: Prisma.MensajeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensajePayload>
          }
          deleteMany: {
            args: Prisma.MensajeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MensajeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MensajeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensajePayload>[]
          }
          upsert: {
            args: Prisma.MensajeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensajePayload>
          }
          aggregate: {
            args: Prisma.MensajeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMensaje>
          }
          groupBy: {
            args: Prisma.MensajeGroupByArgs<ExtArgs>
            result: $Utils.Optional<MensajeGroupByOutputType>[]
          }
          count: {
            args: Prisma.MensajeCountArgs<ExtArgs>
            result: $Utils.Optional<MensajeCountAggregateOutputType> | number
          }
        }
      }
      FotoInmueble: {
        payload: Prisma.$FotoInmueblePayload<ExtArgs>
        fields: Prisma.FotoInmuebleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FotoInmuebleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoInmueblePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FotoInmuebleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoInmueblePayload>
          }
          findFirst: {
            args: Prisma.FotoInmuebleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoInmueblePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FotoInmuebleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoInmueblePayload>
          }
          findMany: {
            args: Prisma.FotoInmuebleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoInmueblePayload>[]
          }
          create: {
            args: Prisma.FotoInmuebleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoInmueblePayload>
          }
          createMany: {
            args: Prisma.FotoInmuebleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FotoInmuebleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoInmueblePayload>[]
          }
          delete: {
            args: Prisma.FotoInmuebleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoInmueblePayload>
          }
          update: {
            args: Prisma.FotoInmuebleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoInmueblePayload>
          }
          deleteMany: {
            args: Prisma.FotoInmuebleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FotoInmuebleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FotoInmuebleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoInmueblePayload>[]
          }
          upsert: {
            args: Prisma.FotoInmuebleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoInmueblePayload>
          }
          aggregate: {
            args: Prisma.FotoInmuebleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFotoInmueble>
          }
          groupBy: {
            args: Prisma.FotoInmuebleGroupByArgs<ExtArgs>
            result: $Utils.Optional<FotoInmuebleGroupByOutputType>[]
          }
          count: {
            args: Prisma.FotoInmuebleCountArgs<ExtArgs>
            result: $Utils.Optional<FotoInmuebleCountAggregateOutputType> | number
          }
        }
      }
      Resena: {
        payload: Prisma.$ResenaPayload<ExtArgs>
        fields: Prisma.ResenaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResenaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResenaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResenaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResenaPayload>
          }
          findFirst: {
            args: Prisma.ResenaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResenaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResenaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResenaPayload>
          }
          findMany: {
            args: Prisma.ResenaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResenaPayload>[]
          }
          create: {
            args: Prisma.ResenaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResenaPayload>
          }
          createMany: {
            args: Prisma.ResenaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ResenaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResenaPayload>[]
          }
          delete: {
            args: Prisma.ResenaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResenaPayload>
          }
          update: {
            args: Prisma.ResenaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResenaPayload>
          }
          deleteMany: {
            args: Prisma.ResenaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResenaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ResenaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResenaPayload>[]
          }
          upsert: {
            args: Prisma.ResenaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResenaPayload>
          }
          aggregate: {
            args: Prisma.ResenaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResena>
          }
          groupBy: {
            args: Prisma.ResenaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResenaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResenaCountArgs<ExtArgs>
            result: $Utils.Optional<ResenaCountAggregateOutputType> | number
          }
        }
      }
      Notificacion: {
        payload: Prisma.$NotificacionPayload<ExtArgs>
        fields: Prisma.NotificacionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificacionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificacionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacionPayload>
          }
          findFirst: {
            args: Prisma.NotificacionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificacionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacionPayload>
          }
          findMany: {
            args: Prisma.NotificacionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacionPayload>[]
          }
          create: {
            args: Prisma.NotificacionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacionPayload>
          }
          createMany: {
            args: Prisma.NotificacionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificacionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacionPayload>[]
          }
          delete: {
            args: Prisma.NotificacionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacionPayload>
          }
          update: {
            args: Prisma.NotificacionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacionPayload>
          }
          deleteMany: {
            args: Prisma.NotificacionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificacionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificacionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacionPayload>[]
          }
          upsert: {
            args: Prisma.NotificacionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacionPayload>
          }
          aggregate: {
            args: Prisma.NotificacionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotificacion>
          }
          groupBy: {
            args: Prisma.NotificacionGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificacionGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificacionCountArgs<ExtArgs>
            result: $Utils.Optional<NotificacionCountAggregateOutputType> | number
          }
        }
      }
      Reporte: {
        payload: Prisma.$ReportePayload<ExtArgs>
        fields: Prisma.ReporteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReporteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReporteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportePayload>
          }
          findFirst: {
            args: Prisma.ReporteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReporteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportePayload>
          }
          findMany: {
            args: Prisma.ReporteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportePayload>[]
          }
          create: {
            args: Prisma.ReporteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportePayload>
          }
          createMany: {
            args: Prisma.ReporteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReporteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportePayload>[]
          }
          delete: {
            args: Prisma.ReporteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportePayload>
          }
          update: {
            args: Prisma.ReporteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportePayload>
          }
          deleteMany: {
            args: Prisma.ReporteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReporteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReporteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportePayload>[]
          }
          upsert: {
            args: Prisma.ReporteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportePayload>
          }
          aggregate: {
            args: Prisma.ReporteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReporte>
          }
          groupBy: {
            args: Prisma.ReporteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReporteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReporteCountArgs<ExtArgs>
            result: $Utils.Optional<ReporteCountAggregateOutputType> | number
          }
        }
      }
      Favorito: {
        payload: Prisma.$FavoritoPayload<ExtArgs>
        fields: Prisma.FavoritoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FavoritoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FavoritoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritoPayload>
          }
          findFirst: {
            args: Prisma.FavoritoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FavoritoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritoPayload>
          }
          findMany: {
            args: Prisma.FavoritoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritoPayload>[]
          }
          create: {
            args: Prisma.FavoritoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritoPayload>
          }
          createMany: {
            args: Prisma.FavoritoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FavoritoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritoPayload>[]
          }
          delete: {
            args: Prisma.FavoritoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritoPayload>
          }
          update: {
            args: Prisma.FavoritoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritoPayload>
          }
          deleteMany: {
            args: Prisma.FavoritoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FavoritoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FavoritoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritoPayload>[]
          }
          upsert: {
            args: Prisma.FavoritoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritoPayload>
          }
          aggregate: {
            args: Prisma.FavoritoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFavorito>
          }
          groupBy: {
            args: Prisma.FavoritoGroupByArgs<ExtArgs>
            result: $Utils.Optional<FavoritoGroupByOutputType>[]
          }
          count: {
            args: Prisma.FavoritoCountArgs<ExtArgs>
            result: $Utils.Optional<FavoritoCountAggregateOutputType> | number
          }
        }
      }
      BusquedaGuardada: {
        payload: Prisma.$BusquedaGuardadaPayload<ExtArgs>
        fields: Prisma.BusquedaGuardadaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BusquedaGuardadaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusquedaGuardadaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BusquedaGuardadaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusquedaGuardadaPayload>
          }
          findFirst: {
            args: Prisma.BusquedaGuardadaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusquedaGuardadaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BusquedaGuardadaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusquedaGuardadaPayload>
          }
          findMany: {
            args: Prisma.BusquedaGuardadaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusquedaGuardadaPayload>[]
          }
          create: {
            args: Prisma.BusquedaGuardadaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusquedaGuardadaPayload>
          }
          createMany: {
            args: Prisma.BusquedaGuardadaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BusquedaGuardadaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusquedaGuardadaPayload>[]
          }
          delete: {
            args: Prisma.BusquedaGuardadaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusquedaGuardadaPayload>
          }
          update: {
            args: Prisma.BusquedaGuardadaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusquedaGuardadaPayload>
          }
          deleteMany: {
            args: Prisma.BusquedaGuardadaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BusquedaGuardadaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BusquedaGuardadaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusquedaGuardadaPayload>[]
          }
          upsert: {
            args: Prisma.BusquedaGuardadaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusquedaGuardadaPayload>
          }
          aggregate: {
            args: Prisma.BusquedaGuardadaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBusquedaGuardada>
          }
          groupBy: {
            args: Prisma.BusquedaGuardadaGroupByArgs<ExtArgs>
            result: $Utils.Optional<BusquedaGuardadaGroupByOutputType>[]
          }
          count: {
            args: Prisma.BusquedaGuardadaCountArgs<ExtArgs>
            result: $Utils.Optional<BusquedaGuardadaCountAggregateOutputType> | number
          }
        }
      }
      UserPreference: {
        payload: Prisma.$UserPreferencePayload<ExtArgs>
        fields: Prisma.UserPreferenceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserPreferenceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserPreferenceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>
          }
          findFirst: {
            args: Prisma.UserPreferenceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserPreferenceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>
          }
          findMany: {
            args: Prisma.UserPreferenceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>[]
          }
          create: {
            args: Prisma.UserPreferenceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>
          }
          createMany: {
            args: Prisma.UserPreferenceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserPreferenceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>[]
          }
          delete: {
            args: Prisma.UserPreferenceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>
          }
          update: {
            args: Prisma.UserPreferenceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>
          }
          deleteMany: {
            args: Prisma.UserPreferenceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserPreferenceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserPreferenceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>[]
          }
          upsert: {
            args: Prisma.UserPreferenceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>
          }
          aggregate: {
            args: Prisma.UserPreferenceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserPreference>
          }
          groupBy: {
            args: Prisma.UserPreferenceGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserPreferenceGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserPreferenceCountArgs<ExtArgs>
            result: $Utils.Optional<UserPreferenceCountAggregateOutputType> | number
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
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    usuario?: UsuarioOmit
    inmueble?: InmuebleOmit
    interes?: InteresOmit
    mensaje?: MensajeOmit
    fotoInmueble?: FotoInmuebleOmit
    resena?: ResenaOmit
    notificacion?: NotificacionOmit
    reporte?: ReporteOmit
    favorito?: FavoritoOmit
    busquedaGuardada?: BusquedaGuardadaOmit
    userPreference?: UserPreferenceOmit
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
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
<<<<<<< Updated upstream
    busquedasGuardadas: number
    favoritos: number
    inmueblesPropietario: number
    Intereses: number
    mensajesEmitidos: number
    mensajesRecibidos: number
    notificaciones: number
    reportes: number
    resenas: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    busquedasGuardadas?: boolean | UsuarioCountOutputTypeCountBusquedasGuardadasArgs
    favoritos?: boolean | UsuarioCountOutputTypeCountFavoritosArgs
    inmueblesPropietario?: boolean | UsuarioCountOutputTypeCountInmueblesPropietarioArgs
    Intereses?: boolean | UsuarioCountOutputTypeCountInteresesArgs
    mensajesEmitidos?: boolean | UsuarioCountOutputTypeCountMensajesEmitidosArgs
    mensajesRecibidos?: boolean | UsuarioCountOutputTypeCountMensajesRecibidosArgs
    notificaciones?: boolean | UsuarioCountOutputTypeCountNotificacionesArgs
    reportes?: boolean | UsuarioCountOutputTypeCountReportesArgs
    resenas?: boolean | UsuarioCountOutputTypeCountResenasArgs
=======
    ownedProperties: number
    interests: number
    sentMessages: number
    receivedMessages: number
    reviews: number
    notifications: number
    reports: number
    favorites: number
    savedSearches: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ownedProperties?: boolean | UsuarioCountOutputTypeCountOwnedPropertiesArgs
    interests?: boolean | UsuarioCountOutputTypeCountInterestsArgs
    sentMessages?: boolean | UsuarioCountOutputTypeCountSentMessagesArgs
    receivedMessages?: boolean | UsuarioCountOutputTypeCountReceivedMessagesArgs
    reviews?: boolean | UsuarioCountOutputTypeCountReviewsArgs
    notifications?: boolean | UsuarioCountOutputTypeCountNotificationsArgs
    reports?: boolean | UsuarioCountOutputTypeCountReportsArgs
    favorites?: boolean | UsuarioCountOutputTypeCountFavoritesArgs
    savedSearches?: boolean | UsuarioCountOutputTypeCountSavedSearchesArgs
>>>>>>> Stashed changes
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
<<<<<<< Updated upstream
  export type UsuarioCountOutputTypeCountBusquedasGuardadasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BusquedaGuardadaWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountFavoritosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoritoWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountInmueblesPropietarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
=======
  export type UsuarioCountOutputTypeCountOwnedPropertiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
>>>>>>> Stashed changes
    where?: InmuebleWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountInterestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InteresWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountSentMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MensajeWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountReceivedMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MensajeWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
<<<<<<< Updated upstream
  export type UsuarioCountOutputTypeCountNotificacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
=======
  export type UsuarioCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResenaWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
>>>>>>> Stashed changes
    where?: NotificacionWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReporteWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
<<<<<<< Updated upstream
  export type UsuarioCountOutputTypeCountResenasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResenaWhereInput
=======
  export type UsuarioCountOutputTypeCountFavoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoritoWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountSavedSearchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BusquedaGuardadaWhereInput
>>>>>>> Stashed changes
  }


  /**
   * Count Type InmuebleCountOutputType
   */

  export type InmuebleCountOutputType = {
<<<<<<< Updated upstream
    favoritos: number
    fotosInmueble: number
    intereses: number
    resenas: number
  }

  export type InmuebleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    favoritos?: boolean | InmuebleCountOutputTypeCountFavoritosArgs
    fotosInmueble?: boolean | InmuebleCountOutputTypeCountFotosInmuebleArgs
    intereses?: boolean | InmuebleCountOutputTypeCountInteresesArgs
    resenas?: boolean | InmuebleCountOutputTypeCountResenasArgs
=======
    interests: number
    propertyPhotos: number
    reviews: number
    favorites: number
  }

  export type InmuebleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    interests?: boolean | InmuebleCountOutputTypeCountInterestsArgs
    propertyPhotos?: boolean | InmuebleCountOutputTypeCountPropertyPhotosArgs
    reviews?: boolean | InmuebleCountOutputTypeCountReviewsArgs
    favorites?: boolean | InmuebleCountOutputTypeCountFavoritesArgs
>>>>>>> Stashed changes
  }

  // Custom InputTypes
  /**
   * InmuebleCountOutputType without action
   */
  export type InmuebleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InmuebleCountOutputType
     */
    select?: InmuebleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InmuebleCountOutputType without action
   */
<<<<<<< Updated upstream
  export type InmuebleCountOutputTypeCountFavoritosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoritoWhereInput
=======
  export type InmuebleCountOutputTypeCountInterestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InteresWhereInput
>>>>>>> Stashed changes
  }

  /**
   * InmuebleCountOutputType without action
   */
  export type InmuebleCountOutputTypeCountPropertyPhotosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FotoInmuebleWhereInput
  }

  /**
   * InmuebleCountOutputType without action
   */
<<<<<<< Updated upstream
  export type InmuebleCountOutputTypeCountInteresesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InteresWhereInput
=======
  export type InmuebleCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResenaWhereInput
>>>>>>> Stashed changes
  }

  /**
   * InmuebleCountOutputType without action
   */
<<<<<<< Updated upstream
  export type InmuebleCountOutputTypeCountResenasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResenaWhereInput
=======
  export type InmuebleCountOutputTypeCountFavoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoritoWhereInput
>>>>>>> Stashed changes
  }


  /**
   * Count Type InteresCountOutputType
   */

  export type InteresCountOutputType = {
    messages: number
  }

  export type InteresCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | InteresCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * InteresCountOutputType without action
   */
  export type InteresCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InteresCountOutputType
     */
    select?: InteresCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InteresCountOutputType without action
   */
  export type InteresCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MensajeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: string | null
    googleId: string | null
    profilePhoto: string | null
    email: string | null
    passwordHash: string | null
    fullName: string | null
    phone: string | null
    role: string | null
    verificationStatus: string | null
    refreshToken: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: string | null
    googleId: string | null
    profilePhoto: string | null
    email: string | null
    passwordHash: string | null
    fullName: string | null
    phone: string | null
    role: string | null
    verificationStatus: string | null
    refreshToken: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    googleId: number
    profilePhoto: number
    email: number
    passwordHash: number
    fullName: number
    phone: number
    role: number
    verificationStatus: number
    refreshToken: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UsuarioMinAggregateInputType = {
    id?: true
    googleId?: true
    profilePhoto?: true
    email?: true
    passwordHash?: true
    fullName?: true
    phone?: true
    role?: true
    verificationStatus?: true
    refreshToken?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    googleId?: true
    profilePhoto?: true
    email?: true
    passwordHash?: true
    fullName?: true
    phone?: true
    role?: true
    verificationStatus?: true
    refreshToken?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    googleId?: true
    profilePhoto?: true
    email?: true
    passwordHash?: true
    fullName?: true
    phone?: true
    role?: true
    verificationStatus?: true
    refreshToken?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: string
    googleId: string | null
    profilePhoto: string | null
    email: string
    passwordHash: string | null
    fullName: string | null
    phone: string | null
    role: string
    verificationStatus: string
    refreshToken: string | null
    createdAt: Date
    updatedAt: Date
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    googleId?: boolean
    profilePhoto?: boolean
    email?: boolean
    passwordHash?: boolean
    fullName?: boolean
    phone?: boolean
    role?: boolean
    verificationStatus?: boolean
    refreshToken?: boolean
<<<<<<< Updated upstream
    fechaCreacion?: boolean
    fechaActualizacion?: boolean
    busquedasGuardadas?: boolean | Usuario$busquedasGuardadasArgs<ExtArgs>
    favoritos?: boolean | Usuario$favoritosArgs<ExtArgs>
    inmueblesPropietario?: boolean | Usuario$inmueblesPropietarioArgs<ExtArgs>
    Intereses?: boolean | Usuario$InteresesArgs<ExtArgs>
    mensajesEmitidos?: boolean | Usuario$mensajesEmitidosArgs<ExtArgs>
    mensajesRecibidos?: boolean | Usuario$mensajesRecibidosArgs<ExtArgs>
    notificaciones?: boolean | Usuario$notificacionesArgs<ExtArgs>
    reportes?: boolean | Usuario$reportesArgs<ExtArgs>
    resenas?: boolean | Usuario$resenasArgs<ExtArgs>
    preferences?: boolean | Usuario$preferencesArgs<ExtArgs>
=======
    createdAt?: boolean
    updatedAt?: boolean
    ownedProperties?: boolean | Usuario$ownedPropertiesArgs<ExtArgs>
    interests?: boolean | Usuario$interestsArgs<ExtArgs>
    sentMessages?: boolean | Usuario$sentMessagesArgs<ExtArgs>
    receivedMessages?: boolean | Usuario$receivedMessagesArgs<ExtArgs>
    reviews?: boolean | Usuario$reviewsArgs<ExtArgs>
    notifications?: boolean | Usuario$notificationsArgs<ExtArgs>
    reports?: boolean | Usuario$reportsArgs<ExtArgs>
    favorites?: boolean | Usuario$favoritesArgs<ExtArgs>
    savedSearches?: boolean | Usuario$savedSearchesArgs<ExtArgs>
>>>>>>> Stashed changes
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    googleId?: boolean
    profilePhoto?: boolean
    email?: boolean
    passwordHash?: boolean
    fullName?: boolean
    phone?: boolean
    role?: boolean
    verificationStatus?: boolean
    refreshToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    googleId?: boolean
    profilePhoto?: boolean
    email?: boolean
    passwordHash?: boolean
    fullName?: boolean
    phone?: boolean
    role?: boolean
    verificationStatus?: boolean
    refreshToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    googleId?: boolean
    profilePhoto?: boolean
    email?: boolean
    passwordHash?: boolean
    fullName?: boolean
    phone?: boolean
    role?: boolean
    verificationStatus?: boolean
    refreshToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "googleId" | "profilePhoto" | "email" | "passwordHash" | "fullName" | "phone" | "role" | "verificationStatus" | "refreshToken" | "createdAt" | "updatedAt", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
<<<<<<< Updated upstream
    busquedasGuardadas?: boolean | Usuario$busquedasGuardadasArgs<ExtArgs>
    favoritos?: boolean | Usuario$favoritosArgs<ExtArgs>
    inmueblesPropietario?: boolean | Usuario$inmueblesPropietarioArgs<ExtArgs>
    Intereses?: boolean | Usuario$InteresesArgs<ExtArgs>
    mensajesEmitidos?: boolean | Usuario$mensajesEmitidosArgs<ExtArgs>
    mensajesRecibidos?: boolean | Usuario$mensajesRecibidosArgs<ExtArgs>
    notificaciones?: boolean | Usuario$notificacionesArgs<ExtArgs>
    reportes?: boolean | Usuario$reportesArgs<ExtArgs>
    resenas?: boolean | Usuario$resenasArgs<ExtArgs>
    preferences?: boolean | Usuario$preferencesArgs<ExtArgs>
=======
    ownedProperties?: boolean | Usuario$ownedPropertiesArgs<ExtArgs>
    interests?: boolean | Usuario$interestsArgs<ExtArgs>
    sentMessages?: boolean | Usuario$sentMessagesArgs<ExtArgs>
    receivedMessages?: boolean | Usuario$receivedMessagesArgs<ExtArgs>
    reviews?: boolean | Usuario$reviewsArgs<ExtArgs>
    notifications?: boolean | Usuario$notificationsArgs<ExtArgs>
    reports?: boolean | Usuario$reportsArgs<ExtArgs>
    favorites?: boolean | Usuario$favoritesArgs<ExtArgs>
    savedSearches?: boolean | Usuario$savedSearchesArgs<ExtArgs>
>>>>>>> Stashed changes
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
<<<<<<< Updated upstream
      busquedasGuardadas: Prisma.$BusquedaGuardadaPayload<ExtArgs>[]
      favoritos: Prisma.$FavoritoPayload<ExtArgs>[]
      inmueblesPropietario: Prisma.$InmueblePayload<ExtArgs>[]
      Intereses: Prisma.$InteresPayload<ExtArgs>[]
      mensajesEmitidos: Prisma.$MensajePayload<ExtArgs>[]
      mensajesRecibidos: Prisma.$MensajePayload<ExtArgs>[]
      notificaciones: Prisma.$NotificacionPayload<ExtArgs>[]
      reportes: Prisma.$ReportePayload<ExtArgs>[]
      resenas: Prisma.$ResenaPayload<ExtArgs>[]
      preferences: Prisma.$UserPreferencePayload<ExtArgs> | null
=======
      ownedProperties: Prisma.$InmueblePayload<ExtArgs>[]
      interests: Prisma.$InteresPayload<ExtArgs>[]
      sentMessages: Prisma.$MensajePayload<ExtArgs>[]
      receivedMessages: Prisma.$MensajePayload<ExtArgs>[]
      reviews: Prisma.$ResenaPayload<ExtArgs>[]
      notifications: Prisma.$NotificacionPayload<ExtArgs>[]
      reports: Prisma.$ReportePayload<ExtArgs>[]
      favorites: Prisma.$FavoritoPayload<ExtArgs>[]
      savedSearches: Prisma.$BusquedaGuardadaPayload<ExtArgs>[]
>>>>>>> Stashed changes
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      googleId: string | null
      profilePhoto: string | null
      email: string
      passwordHash: string | null
      fullName: string | null
      phone: string | null
      role: string
      verificationStatus: string
      refreshToken: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
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
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
<<<<<<< Updated upstream
    busquedasGuardadas<T extends Usuario$busquedasGuardadasArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$busquedasGuardadasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusquedaGuardadaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    favoritos<T extends Usuario$favoritosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$favoritosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    inmueblesPropietario<T extends Usuario$inmueblesPropietarioArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$inmueblesPropietarioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InmueblePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Intereses<T extends Usuario$InteresesArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$InteresesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InteresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mensajesEmitidos<T extends Usuario$mensajesEmitidosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$mensajesEmitidosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MensajePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mensajesRecibidos<T extends Usuario$mensajesRecibidosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$mensajesRecibidosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MensajePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notificaciones<T extends Usuario$notificacionesArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$notificacionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reportes<T extends Usuario$reportesArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$reportesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    resenas<T extends Usuario$resenasArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$resenasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResenaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    preferences<T extends Usuario$preferencesArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$preferencesArgs<ExtArgs>>): Prisma__UserPreferenceClient<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
=======
    ownedProperties<T extends Usuario$ownedPropertiesArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$ownedPropertiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InmueblePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    interests<T extends Usuario$interestsArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$interestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InteresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sentMessages<T extends Usuario$sentMessagesArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$sentMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MensajePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    receivedMessages<T extends Usuario$receivedMessagesArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$receivedMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MensajePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends Usuario$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResenaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends Usuario$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reports<T extends Usuario$reportsArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$reportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    favorites<T extends Usuario$favoritesArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$favoritesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    savedSearches<T extends Usuario$savedSearchesArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$savedSearchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusquedaGuardadaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
>>>>>>> Stashed changes
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
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'String'>
    readonly googleId: FieldRef<"Usuario", 'String'>
    readonly profilePhoto: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly passwordHash: FieldRef<"Usuario", 'String'>
    readonly fullName: FieldRef<"Usuario", 'String'>
    readonly phone: FieldRef<"Usuario", 'String'>
    readonly role: FieldRef<"Usuario", 'String'>
    readonly verificationStatus: FieldRef<"Usuario", 'String'>
    readonly refreshToken: FieldRef<"Usuario", 'String'>
    readonly createdAt: FieldRef<"Usuario", 'DateTime'>
    readonly updatedAt: FieldRef<"Usuario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
<<<<<<< Updated upstream
   * Usuario.busquedasGuardadas
   */
  export type Usuario$busquedasGuardadasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusquedaGuardada
     */
    select?: BusquedaGuardadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusquedaGuardada
     */
    omit?: BusquedaGuardadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusquedaGuardadaInclude<ExtArgs> | null
    where?: BusquedaGuardadaWhereInput
    orderBy?: BusquedaGuardadaOrderByWithRelationInput | BusquedaGuardadaOrderByWithRelationInput[]
    cursor?: BusquedaGuardadaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BusquedaGuardadaScalarFieldEnum | BusquedaGuardadaScalarFieldEnum[]
  }

  /**
   * Usuario.favoritos
   */
  export type Usuario$favoritosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    where?: FavoritoWhereInput
    orderBy?: FavoritoOrderByWithRelationInput | FavoritoOrderByWithRelationInput[]
    cursor?: FavoritoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoritoScalarFieldEnum | FavoritoScalarFieldEnum[]
  }

  /**
   * Usuario.inmueblesPropietario
=======
   * Usuario.ownedProperties
>>>>>>> Stashed changes
   */
  export type Usuario$ownedPropertiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inmueble
     */
    select?: InmuebleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inmueble
     */
    omit?: InmuebleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InmuebleInclude<ExtArgs> | null
    where?: InmuebleWhereInput
    orderBy?: InmuebleOrderByWithRelationInput | InmuebleOrderByWithRelationInput[]
    cursor?: InmuebleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InmuebleScalarFieldEnum | InmuebleScalarFieldEnum[]
  }

  /**
   * Usuario.interests
   */
  export type Usuario$interestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interes
     */
    select?: InteresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interes
     */
    omit?: InteresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteresInclude<ExtArgs> | null
    where?: InteresWhereInput
    orderBy?: InteresOrderByWithRelationInput | InteresOrderByWithRelationInput[]
    cursor?: InteresWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InteresScalarFieldEnum | InteresScalarFieldEnum[]
  }

  /**
   * Usuario.sentMessages
   */
  export type Usuario$sentMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensaje
     */
    omit?: MensajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensajeInclude<ExtArgs> | null
    where?: MensajeWhereInput
    orderBy?: MensajeOrderByWithRelationInput | MensajeOrderByWithRelationInput[]
    cursor?: MensajeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MensajeScalarFieldEnum | MensajeScalarFieldEnum[]
  }

  /**
   * Usuario.receivedMessages
   */
  export type Usuario$receivedMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensaje
     */
    omit?: MensajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensajeInclude<ExtArgs> | null
    where?: MensajeWhereInput
    orderBy?: MensajeOrderByWithRelationInput | MensajeOrderByWithRelationInput[]
    cursor?: MensajeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MensajeScalarFieldEnum | MensajeScalarFieldEnum[]
  }

  /**
<<<<<<< Updated upstream
   * Usuario.notificaciones
=======
   * Usuario.reviews
   */
  export type Usuario$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resena
     */
    select?: ResenaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resena
     */
    omit?: ResenaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResenaInclude<ExtArgs> | null
    where?: ResenaWhereInput
    orderBy?: ResenaOrderByWithRelationInput | ResenaOrderByWithRelationInput[]
    cursor?: ResenaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResenaScalarFieldEnum | ResenaScalarFieldEnum[]
  }

  /**
   * Usuario.notifications
>>>>>>> Stashed changes
   */
  export type Usuario$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacion
     */
    select?: NotificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacion
     */
    omit?: NotificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacionInclude<ExtArgs> | null
    where?: NotificacionWhereInput
    orderBy?: NotificacionOrderByWithRelationInput | NotificacionOrderByWithRelationInput[]
    cursor?: NotificacionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificacionScalarFieldEnum | NotificacionScalarFieldEnum[]
  }

  /**
   * Usuario.reports
   */
  export type Usuario$reportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reporte
     */
    select?: ReporteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reporte
     */
    omit?: ReporteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReporteInclude<ExtArgs> | null
    where?: ReporteWhereInput
    orderBy?: ReporteOrderByWithRelationInput | ReporteOrderByWithRelationInput[]
    cursor?: ReporteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReporteScalarFieldEnum | ReporteScalarFieldEnum[]
  }

  /**
<<<<<<< Updated upstream
   * Usuario.resenas
   */
  export type Usuario$resenasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
=======
   * Usuario.favorites
   */
  export type Usuario$favoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
>>>>>>> Stashed changes
    /**
     * Select specific fields to fetch from the Resena
     */
    select?: ResenaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resena
     */
    omit?: ResenaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResenaInclude<ExtArgs> | null
    where?: ResenaWhereInput
    orderBy?: ResenaOrderByWithRelationInput | ResenaOrderByWithRelationInput[]
    cursor?: ResenaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResenaScalarFieldEnum | ResenaScalarFieldEnum[]
  }

  /**
<<<<<<< Updated upstream
   * Usuario.preferences
   */
  export type Usuario$preferencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
=======
   * Usuario.savedSearches
   */
  export type Usuario$savedSearchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
>>>>>>> Stashed changes
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null
    where?: UserPreferenceWhereInput
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Inmueble
   */

  export type AggregateInmueble = {
    _count: InmuebleCountAggregateOutputType | null
    _avg: InmuebleAvgAggregateOutputType | null
    _sum: InmuebleSumAggregateOutputType | null
    _min: InmuebleMinAggregateOutputType | null
    _max: InmuebleMaxAggregateOutputType | null
  }

  export type InmuebleAvgAggregateOutputType = {
    bedrooms: number | null
    bathrooms: number | null
    areaM2: Decimal | null
    price: Decimal | null
  }

  export type InmuebleSumAggregateOutputType = {
    bedrooms: number | null
    bathrooms: number | null
    areaM2: Decimal | null
    price: Decimal | null
  }

  export type InmuebleMinAggregateOutputType = {
    id: string | null
    ownerId: string | null
    title: string | null
    description: string | null
    address: string | null
    city: string | null
    bedrooms: number | null
    bathrooms: number | null
    areaM2: Decimal | null
    price: Decimal | null
    operationType: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InmuebleMaxAggregateOutputType = {
    id: string | null
    ownerId: string | null
    title: string | null
    description: string | null
    address: string | null
    city: string | null
    bedrooms: number | null
    bathrooms: number | null
    areaM2: Decimal | null
    price: Decimal | null
    operationType: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InmuebleCountAggregateOutputType = {
    id: number
    ownerId: number
    title: number
    description: number
    address: number
    city: number
    bedrooms: number
    bathrooms: number
    areaM2: number
    price: number
    operationType: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InmuebleAvgAggregateInputType = {
    bedrooms?: true
    bathrooms?: true
    areaM2?: true
    price?: true
  }

  export type InmuebleSumAggregateInputType = {
    bedrooms?: true
    bathrooms?: true
    areaM2?: true
    price?: true
  }

  export type InmuebleMinAggregateInputType = {
    id?: true
    ownerId?: true
    title?: true
    description?: true
    address?: true
    city?: true
    bedrooms?: true
    bathrooms?: true
    areaM2?: true
    price?: true
    operationType?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InmuebleMaxAggregateInputType = {
    id?: true
    ownerId?: true
    title?: true
    description?: true
    address?: true
    city?: true
    bedrooms?: true
    bathrooms?: true
    areaM2?: true
    price?: true
    operationType?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InmuebleCountAggregateInputType = {
    id?: true
    ownerId?: true
    title?: true
    description?: true
    address?: true
    city?: true
    bedrooms?: true
    bathrooms?: true
    areaM2?: true
    price?: true
    operationType?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InmuebleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inmueble to aggregate.
     */
    where?: InmuebleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inmuebles to fetch.
     */
    orderBy?: InmuebleOrderByWithRelationInput | InmuebleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InmuebleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inmuebles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inmuebles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Inmuebles
    **/
    _count?: true | InmuebleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InmuebleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InmuebleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InmuebleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InmuebleMaxAggregateInputType
  }

  export type GetInmuebleAggregateType<T extends InmuebleAggregateArgs> = {
        [P in keyof T & keyof AggregateInmueble]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInmueble[P]>
      : GetScalarType<T[P], AggregateInmueble[P]>
  }




  export type InmuebleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InmuebleWhereInput
    orderBy?: InmuebleOrderByWithAggregationInput | InmuebleOrderByWithAggregationInput[]
    by: InmuebleScalarFieldEnum[] | InmuebleScalarFieldEnum
    having?: InmuebleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InmuebleCountAggregateInputType | true
    _avg?: InmuebleAvgAggregateInputType
    _sum?: InmuebleSumAggregateInputType
    _min?: InmuebleMinAggregateInputType
    _max?: InmuebleMaxAggregateInputType
  }

  export type InmuebleGroupByOutputType = {
    id: string
    ownerId: string
    title: string
    description: string | null
    address: string | null
    city: string
    bedrooms: number | null
    bathrooms: number | null
    areaM2: Decimal | null
    price: Decimal
    operationType: string
    status: string
    createdAt: Date
    updatedAt: Date
    _count: InmuebleCountAggregateOutputType | null
    _avg: InmuebleAvgAggregateOutputType | null
    _sum: InmuebleSumAggregateOutputType | null
    _min: InmuebleMinAggregateOutputType | null
    _max: InmuebleMaxAggregateOutputType | null
  }

  type GetInmuebleGroupByPayload<T extends InmuebleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InmuebleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InmuebleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InmuebleGroupByOutputType[P]>
            : GetScalarType<T[P], InmuebleGroupByOutputType[P]>
        }
      >
    >


  export type InmuebleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    title?: boolean
    description?: boolean
    address?: boolean
    city?: boolean
    bedrooms?: boolean
    bathrooms?: boolean
    areaM2?: boolean
<<<<<<< Updated upstream
    precio?: boolean
    tipoOperacion?: boolean
    estado?: boolean
    fechaCreacion?: boolean
    fechaActualizacion?: boolean
    favoritos?: boolean | Inmueble$favoritosArgs<ExtArgs>
    fotosInmueble?: boolean | Inmueble$fotosInmuebleArgs<ExtArgs>
    propietario?: boolean | UsuarioDefaultArgs<ExtArgs>
    intereses?: boolean | Inmueble$interesesArgs<ExtArgs>
    resenas?: boolean | Inmueble$resenasArgs<ExtArgs>
=======
    price?: boolean
    operationType?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UsuarioDefaultArgs<ExtArgs>
    interests?: boolean | Inmueble$interestsArgs<ExtArgs>
    propertyPhotos?: boolean | Inmueble$propertyPhotosArgs<ExtArgs>
    reviews?: boolean | Inmueble$reviewsArgs<ExtArgs>
    favorites?: boolean | Inmueble$favoritesArgs<ExtArgs>
>>>>>>> Stashed changes
    _count?: boolean | InmuebleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inmueble"]>

  export type InmuebleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    title?: boolean
    description?: boolean
    address?: boolean
    city?: boolean
    bedrooms?: boolean
    bathrooms?: boolean
    areaM2?: boolean
    price?: boolean
    operationType?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inmueble"]>

  export type InmuebleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    title?: boolean
    description?: boolean
    address?: boolean
    city?: boolean
    bedrooms?: boolean
    bathrooms?: boolean
    areaM2?: boolean
    price?: boolean
    operationType?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inmueble"]>

  export type InmuebleSelectScalar = {
    id?: boolean
    ownerId?: boolean
    title?: boolean
    description?: boolean
    address?: boolean
    city?: boolean
    bedrooms?: boolean
    bathrooms?: boolean
    areaM2?: boolean
    price?: boolean
    operationType?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type InmuebleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ownerId" | "title" | "description" | "address" | "city" | "bedrooms" | "bathrooms" | "areaM2" | "price" | "operationType" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["inmueble"]>
  export type InmuebleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
<<<<<<< Updated upstream
    favoritos?: boolean | Inmueble$favoritosArgs<ExtArgs>
    fotosInmueble?: boolean | Inmueble$fotosInmuebleArgs<ExtArgs>
    propietario?: boolean | UsuarioDefaultArgs<ExtArgs>
    intereses?: boolean | Inmueble$interesesArgs<ExtArgs>
    resenas?: boolean | Inmueble$resenasArgs<ExtArgs>
=======
    owner?: boolean | UsuarioDefaultArgs<ExtArgs>
    interests?: boolean | Inmueble$interestsArgs<ExtArgs>
    propertyPhotos?: boolean | Inmueble$propertyPhotosArgs<ExtArgs>
    reviews?: boolean | Inmueble$reviewsArgs<ExtArgs>
    favorites?: boolean | Inmueble$favoritesArgs<ExtArgs>
>>>>>>> Stashed changes
    _count?: boolean | InmuebleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InmuebleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type InmuebleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $InmueblePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Inmueble"
    objects: {
<<<<<<< Updated upstream
      favoritos: Prisma.$FavoritoPayload<ExtArgs>[]
      fotosInmueble: Prisma.$FotoInmueblePayload<ExtArgs>[]
      propietario: Prisma.$UsuarioPayload<ExtArgs>
      intereses: Prisma.$InteresPayload<ExtArgs>[]
      resenas: Prisma.$ResenaPayload<ExtArgs>[]
=======
      owner: Prisma.$UsuarioPayload<ExtArgs>
      interests: Prisma.$InteresPayload<ExtArgs>[]
      propertyPhotos: Prisma.$FotoInmueblePayload<ExtArgs>[]
      reviews: Prisma.$ResenaPayload<ExtArgs>[]
      favorites: Prisma.$FavoritoPayload<ExtArgs>[]
>>>>>>> Stashed changes
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ownerId: string
      title: string
      description: string | null
      address: string | null
      city: string
      bedrooms: number | null
      bathrooms: number | null
      areaM2: Prisma.Decimal | null
      price: Prisma.Decimal
      operationType: string
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["inmueble"]>
    composites: {}
  }

  type InmuebleGetPayload<S extends boolean | null | undefined | InmuebleDefaultArgs> = $Result.GetResult<Prisma.$InmueblePayload, S>

  type InmuebleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InmuebleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InmuebleCountAggregateInputType | true
    }

  export interface InmuebleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Inmueble'], meta: { name: 'Inmueble' } }
    /**
     * Find zero or one Inmueble that matches the filter.
     * @param {InmuebleFindUniqueArgs} args - Arguments to find a Inmueble
     * @example
     * // Get one Inmueble
     * const inmueble = await prisma.inmueble.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InmuebleFindUniqueArgs>(args: SelectSubset<T, InmuebleFindUniqueArgs<ExtArgs>>): Prisma__InmuebleClient<$Result.GetResult<Prisma.$InmueblePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Inmueble that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InmuebleFindUniqueOrThrowArgs} args - Arguments to find a Inmueble
     * @example
     * // Get one Inmueble
     * const inmueble = await prisma.inmueble.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InmuebleFindUniqueOrThrowArgs>(args: SelectSubset<T, InmuebleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InmuebleClient<$Result.GetResult<Prisma.$InmueblePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inmueble that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InmuebleFindFirstArgs} args - Arguments to find a Inmueble
     * @example
     * // Get one Inmueble
     * const inmueble = await prisma.inmueble.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InmuebleFindFirstArgs>(args?: SelectSubset<T, InmuebleFindFirstArgs<ExtArgs>>): Prisma__InmuebleClient<$Result.GetResult<Prisma.$InmueblePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inmueble that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InmuebleFindFirstOrThrowArgs} args - Arguments to find a Inmueble
     * @example
     * // Get one Inmueble
     * const inmueble = await prisma.inmueble.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InmuebleFindFirstOrThrowArgs>(args?: SelectSubset<T, InmuebleFindFirstOrThrowArgs<ExtArgs>>): Prisma__InmuebleClient<$Result.GetResult<Prisma.$InmueblePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Inmuebles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InmuebleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inmuebles
     * const inmuebles = await prisma.inmueble.findMany()
     * 
     * // Get first 10 Inmuebles
     * const inmuebles = await prisma.inmueble.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inmuebleWithIdOnly = await prisma.inmueble.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InmuebleFindManyArgs>(args?: SelectSubset<T, InmuebleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InmueblePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Inmueble.
     * @param {InmuebleCreateArgs} args - Arguments to create a Inmueble.
     * @example
     * // Create one Inmueble
     * const Inmueble = await prisma.inmueble.create({
     *   data: {
     *     // ... data to create a Inmueble
     *   }
     * })
     * 
     */
    create<T extends InmuebleCreateArgs>(args: SelectSubset<T, InmuebleCreateArgs<ExtArgs>>): Prisma__InmuebleClient<$Result.GetResult<Prisma.$InmueblePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Inmuebles.
     * @param {InmuebleCreateManyArgs} args - Arguments to create many Inmuebles.
     * @example
     * // Create many Inmuebles
     * const inmueble = await prisma.inmueble.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InmuebleCreateManyArgs>(args?: SelectSubset<T, InmuebleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Inmuebles and returns the data saved in the database.
     * @param {InmuebleCreateManyAndReturnArgs} args - Arguments to create many Inmuebles.
     * @example
     * // Create many Inmuebles
     * const inmueble = await prisma.inmueble.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Inmuebles and only return the `id`
     * const inmuebleWithIdOnly = await prisma.inmueble.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InmuebleCreateManyAndReturnArgs>(args?: SelectSubset<T, InmuebleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InmueblePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Inmueble.
     * @param {InmuebleDeleteArgs} args - Arguments to delete one Inmueble.
     * @example
     * // Delete one Inmueble
     * const Inmueble = await prisma.inmueble.delete({
     *   where: {
     *     // ... filter to delete one Inmueble
     *   }
     * })
     * 
     */
    delete<T extends InmuebleDeleteArgs>(args: SelectSubset<T, InmuebleDeleteArgs<ExtArgs>>): Prisma__InmuebleClient<$Result.GetResult<Prisma.$InmueblePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Inmueble.
     * @param {InmuebleUpdateArgs} args - Arguments to update one Inmueble.
     * @example
     * // Update one Inmueble
     * const inmueble = await prisma.inmueble.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InmuebleUpdateArgs>(args: SelectSubset<T, InmuebleUpdateArgs<ExtArgs>>): Prisma__InmuebleClient<$Result.GetResult<Prisma.$InmueblePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Inmuebles.
     * @param {InmuebleDeleteManyArgs} args - Arguments to filter Inmuebles to delete.
     * @example
     * // Delete a few Inmuebles
     * const { count } = await prisma.inmueble.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InmuebleDeleteManyArgs>(args?: SelectSubset<T, InmuebleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inmuebles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InmuebleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inmuebles
     * const inmueble = await prisma.inmueble.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InmuebleUpdateManyArgs>(args: SelectSubset<T, InmuebleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inmuebles and returns the data updated in the database.
     * @param {InmuebleUpdateManyAndReturnArgs} args - Arguments to update many Inmuebles.
     * @example
     * // Update many Inmuebles
     * const inmueble = await prisma.inmueble.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Inmuebles and only return the `id`
     * const inmuebleWithIdOnly = await prisma.inmueble.updateManyAndReturn({
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
    updateManyAndReturn<T extends InmuebleUpdateManyAndReturnArgs>(args: SelectSubset<T, InmuebleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InmueblePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Inmueble.
     * @param {InmuebleUpsertArgs} args - Arguments to update or create a Inmueble.
     * @example
     * // Update or create a Inmueble
     * const inmueble = await prisma.inmueble.upsert({
     *   create: {
     *     // ... data to create a Inmueble
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inmueble we want to update
     *   }
     * })
     */
    upsert<T extends InmuebleUpsertArgs>(args: SelectSubset<T, InmuebleUpsertArgs<ExtArgs>>): Prisma__InmuebleClient<$Result.GetResult<Prisma.$InmueblePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Inmuebles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InmuebleCountArgs} args - Arguments to filter Inmuebles to count.
     * @example
     * // Count the number of Inmuebles
     * const count = await prisma.inmueble.count({
     *   where: {
     *     // ... the filter for the Inmuebles we want to count
     *   }
     * })
    **/
    count<T extends InmuebleCountArgs>(
      args?: Subset<T, InmuebleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InmuebleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Inmueble.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InmuebleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InmuebleAggregateArgs>(args: Subset<T, InmuebleAggregateArgs>): Prisma.PrismaPromise<GetInmuebleAggregateType<T>>

    /**
     * Group by Inmueble.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InmuebleGroupByArgs} args - Group by arguments.
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
      T extends InmuebleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InmuebleGroupByArgs['orderBy'] }
        : { orderBy?: InmuebleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InmuebleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInmuebleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Inmueble model
   */
  readonly fields: InmuebleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Inmueble.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InmuebleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
<<<<<<< Updated upstream
    favoritos<T extends Inmueble$favoritosArgs<ExtArgs> = {}>(args?: Subset<T, Inmueble$favoritosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    fotosInmueble<T extends Inmueble$fotosInmuebleArgs<ExtArgs> = {}>(args?: Subset<T, Inmueble$fotosInmuebleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FotoInmueblePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    propietario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    intereses<T extends Inmueble$interesesArgs<ExtArgs> = {}>(args?: Subset<T, Inmueble$interesesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InteresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    resenas<T extends Inmueble$resenasArgs<ExtArgs> = {}>(args?: Subset<T, Inmueble$resenasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResenaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
=======
    owner<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    interests<T extends Inmueble$interestsArgs<ExtArgs> = {}>(args?: Subset<T, Inmueble$interestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InteresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    propertyPhotos<T extends Inmueble$propertyPhotosArgs<ExtArgs> = {}>(args?: Subset<T, Inmueble$propertyPhotosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FotoInmueblePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends Inmueble$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Inmueble$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResenaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    favorites<T extends Inmueble$favoritesArgs<ExtArgs> = {}>(args?: Subset<T, Inmueble$favoritesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
>>>>>>> Stashed changes
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
   * Fields of the Inmueble model
   */
  interface InmuebleFieldRefs {
    readonly id: FieldRef<"Inmueble", 'String'>
    readonly ownerId: FieldRef<"Inmueble", 'String'>
    readonly title: FieldRef<"Inmueble", 'String'>
    readonly description: FieldRef<"Inmueble", 'String'>
    readonly address: FieldRef<"Inmueble", 'String'>
    readonly city: FieldRef<"Inmueble", 'String'>
    readonly bedrooms: FieldRef<"Inmueble", 'Int'>
    readonly bathrooms: FieldRef<"Inmueble", 'Int'>
    readonly areaM2: FieldRef<"Inmueble", 'Decimal'>
    readonly price: FieldRef<"Inmueble", 'Decimal'>
    readonly operationType: FieldRef<"Inmueble", 'String'>
    readonly status: FieldRef<"Inmueble", 'String'>
    readonly createdAt: FieldRef<"Inmueble", 'DateTime'>
    readonly updatedAt: FieldRef<"Inmueble", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Inmueble findUnique
   */
  export type InmuebleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inmueble
     */
    select?: InmuebleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inmueble
     */
    omit?: InmuebleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InmuebleInclude<ExtArgs> | null
    /**
     * Filter, which Inmueble to fetch.
     */
    where: InmuebleWhereUniqueInput
  }

  /**
   * Inmueble findUniqueOrThrow
   */
  export type InmuebleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inmueble
     */
    select?: InmuebleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inmueble
     */
    omit?: InmuebleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InmuebleInclude<ExtArgs> | null
    /**
     * Filter, which Inmueble to fetch.
     */
    where: InmuebleWhereUniqueInput
  }

  /**
   * Inmueble findFirst
   */
  export type InmuebleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inmueble
     */
    select?: InmuebleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inmueble
     */
    omit?: InmuebleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InmuebleInclude<ExtArgs> | null
    /**
     * Filter, which Inmueble to fetch.
     */
    where?: InmuebleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inmuebles to fetch.
     */
    orderBy?: InmuebleOrderByWithRelationInput | InmuebleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inmuebles.
     */
    cursor?: InmuebleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inmuebles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inmuebles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inmuebles.
     */
    distinct?: InmuebleScalarFieldEnum | InmuebleScalarFieldEnum[]
  }

  /**
   * Inmueble findFirstOrThrow
   */
  export type InmuebleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inmueble
     */
    select?: InmuebleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inmueble
     */
    omit?: InmuebleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InmuebleInclude<ExtArgs> | null
    /**
     * Filter, which Inmueble to fetch.
     */
    where?: InmuebleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inmuebles to fetch.
     */
    orderBy?: InmuebleOrderByWithRelationInput | InmuebleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inmuebles.
     */
    cursor?: InmuebleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inmuebles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inmuebles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inmuebles.
     */
    distinct?: InmuebleScalarFieldEnum | InmuebleScalarFieldEnum[]
  }

  /**
   * Inmueble findMany
   */
  export type InmuebleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inmueble
     */
    select?: InmuebleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inmueble
     */
    omit?: InmuebleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InmuebleInclude<ExtArgs> | null
    /**
     * Filter, which Inmuebles to fetch.
     */
    where?: InmuebleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inmuebles to fetch.
     */
    orderBy?: InmuebleOrderByWithRelationInput | InmuebleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Inmuebles.
     */
    cursor?: InmuebleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inmuebles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inmuebles.
     */
    skip?: number
    distinct?: InmuebleScalarFieldEnum | InmuebleScalarFieldEnum[]
  }

  /**
   * Inmueble create
   */
  export type InmuebleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inmueble
     */
    select?: InmuebleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inmueble
     */
    omit?: InmuebleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InmuebleInclude<ExtArgs> | null
    /**
     * The data needed to create a Inmueble.
     */
    data: XOR<InmuebleCreateInput, InmuebleUncheckedCreateInput>
  }

  /**
   * Inmueble createMany
   */
  export type InmuebleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Inmuebles.
     */
    data: InmuebleCreateManyInput | InmuebleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Inmueble createManyAndReturn
   */
  export type InmuebleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inmueble
     */
    select?: InmuebleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Inmueble
     */
    omit?: InmuebleOmit<ExtArgs> | null
    /**
     * The data used to create many Inmuebles.
     */
    data: InmuebleCreateManyInput | InmuebleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InmuebleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Inmueble update
   */
  export type InmuebleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inmueble
     */
    select?: InmuebleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inmueble
     */
    omit?: InmuebleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InmuebleInclude<ExtArgs> | null
    /**
     * The data needed to update a Inmueble.
     */
    data: XOR<InmuebleUpdateInput, InmuebleUncheckedUpdateInput>
    /**
     * Choose, which Inmueble to update.
     */
    where: InmuebleWhereUniqueInput
  }

  /**
   * Inmueble updateMany
   */
  export type InmuebleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Inmuebles.
     */
    data: XOR<InmuebleUpdateManyMutationInput, InmuebleUncheckedUpdateManyInput>
    /**
     * Filter which Inmuebles to update
     */
    where?: InmuebleWhereInput
    /**
     * Limit how many Inmuebles to update.
     */
    limit?: number
  }

  /**
   * Inmueble updateManyAndReturn
   */
  export type InmuebleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inmueble
     */
    select?: InmuebleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Inmueble
     */
    omit?: InmuebleOmit<ExtArgs> | null
    /**
     * The data used to update Inmuebles.
     */
    data: XOR<InmuebleUpdateManyMutationInput, InmuebleUncheckedUpdateManyInput>
    /**
     * Filter which Inmuebles to update
     */
    where?: InmuebleWhereInput
    /**
     * Limit how many Inmuebles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InmuebleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Inmueble upsert
   */
  export type InmuebleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inmueble
     */
    select?: InmuebleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inmueble
     */
    omit?: InmuebleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InmuebleInclude<ExtArgs> | null
    /**
     * The filter to search for the Inmueble to update in case it exists.
     */
    where: InmuebleWhereUniqueInput
    /**
     * In case the Inmueble found by the `where` argument doesn't exist, create a new Inmueble with this data.
     */
    create: XOR<InmuebleCreateInput, InmuebleUncheckedCreateInput>
    /**
     * In case the Inmueble was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InmuebleUpdateInput, InmuebleUncheckedUpdateInput>
  }

  /**
   * Inmueble delete
   */
  export type InmuebleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inmueble
     */
    select?: InmuebleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inmueble
     */
    omit?: InmuebleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InmuebleInclude<ExtArgs> | null
    /**
     * Filter which Inmueble to delete.
     */
    where: InmuebleWhereUniqueInput
  }

  /**
   * Inmueble deleteMany
   */
  export type InmuebleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inmuebles to delete
     */
    where?: InmuebleWhereInput
    /**
     * Limit how many Inmuebles to delete.
     */
    limit?: number
  }

  /**
<<<<<<< Updated upstream
   * Inmueble.favoritos
   */
  export type Inmueble$favoritosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
=======
   * Inmueble.interests
   */
  export type Inmueble$interestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
>>>>>>> Stashed changes
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    where?: FavoritoWhereInput
    orderBy?: FavoritoOrderByWithRelationInput | FavoritoOrderByWithRelationInput[]
    cursor?: FavoritoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoritoScalarFieldEnum | FavoritoScalarFieldEnum[]
  }

  /**
   * Inmueble.propertyPhotos
   */
  export type Inmueble$propertyPhotosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FotoInmueble
     */
    select?: FotoInmuebleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FotoInmueble
     */
    omit?: FotoInmuebleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoInmuebleInclude<ExtArgs> | null
    where?: FotoInmuebleWhereInput
    orderBy?: FotoInmuebleOrderByWithRelationInput | FotoInmuebleOrderByWithRelationInput[]
    cursor?: FotoInmuebleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FotoInmuebleScalarFieldEnum | FotoInmuebleScalarFieldEnum[]
  }

  /**
<<<<<<< Updated upstream
   * Inmueble.intereses
   */
  export type Inmueble$interesesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interes
     */
    select?: InteresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interes
     */
    omit?: InteresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteresInclude<ExtArgs> | null
    where?: InteresWhereInput
    orderBy?: InteresOrderByWithRelationInput | InteresOrderByWithRelationInput[]
    cursor?: InteresWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InteresScalarFieldEnum | InteresScalarFieldEnum[]
  }

  /**
   * Inmueble.resenas
=======
   * Inmueble.reviews
>>>>>>> Stashed changes
   */
  export type Inmueble$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resena
     */
    select?: ResenaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resena
     */
    omit?: ResenaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResenaInclude<ExtArgs> | null
    where?: ResenaWhereInput
    orderBy?: ResenaOrderByWithRelationInput | ResenaOrderByWithRelationInput[]
    cursor?: ResenaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResenaScalarFieldEnum | ResenaScalarFieldEnum[]
  }

  /**
<<<<<<< Updated upstream
=======
   * Inmueble.favorites
   */
  export type Inmueble$favoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    where?: FavoritoWhereInput
    orderBy?: FavoritoOrderByWithRelationInput | FavoritoOrderByWithRelationInput[]
    cursor?: FavoritoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoritoScalarFieldEnum | FavoritoScalarFieldEnum[]
  }

  /**
>>>>>>> Stashed changes
   * Inmueble without action
   */
  export type InmuebleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inmueble
     */
    select?: InmuebleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inmueble
     */
    omit?: InmuebleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InmuebleInclude<ExtArgs> | null
  }


  /**
   * Model Interes
   */

  export type AggregateInteres = {
    _count: InteresCountAggregateOutputType | null
    _min: InteresMinAggregateOutputType | null
    _max: InteresMaxAggregateOutputType | null
  }

  export type InteresMinAggregateOutputType = {
    id: string | null
    userId: string | null
    propertyId: string | null
    message: string | null
    status: string | null
    createdAt: Date | null
  }

  export type InteresMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    propertyId: string | null
    message: string | null
    status: string | null
    createdAt: Date | null
  }

  export type InteresCountAggregateOutputType = {
    id: number
    userId: number
    propertyId: number
    message: number
    status: number
    createdAt: number
    _all: number
  }


  export type InteresMinAggregateInputType = {
    id?: true
    userId?: true
    propertyId?: true
    message?: true
    status?: true
    createdAt?: true
  }

  export type InteresMaxAggregateInputType = {
    id?: true
    userId?: true
    propertyId?: true
    message?: true
    status?: true
    createdAt?: true
  }

  export type InteresCountAggregateInputType = {
    id?: true
    userId?: true
    propertyId?: true
    message?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type InteresAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Interes to aggregate.
     */
    where?: InteresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Interes to fetch.
     */
    orderBy?: InteresOrderByWithRelationInput | InteresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InteresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Interes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Interes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Interes
    **/
    _count?: true | InteresCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InteresMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InteresMaxAggregateInputType
  }

  export type GetInteresAggregateType<T extends InteresAggregateArgs> = {
        [P in keyof T & keyof AggregateInteres]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInteres[P]>
      : GetScalarType<T[P], AggregateInteres[P]>
  }




  export type InteresGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InteresWhereInput
    orderBy?: InteresOrderByWithAggregationInput | InteresOrderByWithAggregationInput[]
    by: InteresScalarFieldEnum[] | InteresScalarFieldEnum
    having?: InteresScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InteresCountAggregateInputType | true
    _min?: InteresMinAggregateInputType
    _max?: InteresMaxAggregateInputType
  }

  export type InteresGroupByOutputType = {
    id: string
    userId: string
    propertyId: string
    message: string | null
    status: string
    createdAt: Date
    _count: InteresCountAggregateOutputType | null
    _min: InteresMinAggregateOutputType | null
    _max: InteresMaxAggregateOutputType | null
  }

  type GetInteresGroupByPayload<T extends InteresGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InteresGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InteresGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InteresGroupByOutputType[P]>
            : GetScalarType<T[P], InteresGroupByOutputType[P]>
        }
      >
    >


  export type InteresSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
<<<<<<< Updated upstream
    usuarioId?: boolean
    inmuebleId?: boolean
    mensaje?: boolean
    estado?: boolean
    fechaCreacion?: boolean
    inmueble?: boolean | InmuebleDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    mensajes?: boolean | Interes$mensajesArgs<ExtArgs>
=======
    userId?: boolean
    propertyId?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | UsuarioDefaultArgs<ExtArgs>
    property?: boolean | InmuebleDefaultArgs<ExtArgs>
    messages?: boolean | Interes$messagesArgs<ExtArgs>
>>>>>>> Stashed changes
    _count?: boolean | InteresCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["interes"]>

  export type InteresSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
<<<<<<< Updated upstream
    usuarioId?: boolean
    inmuebleId?: boolean
    mensaje?: boolean
    estado?: boolean
    fechaCreacion?: boolean
    inmueble?: boolean | InmuebleDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
=======
    userId?: boolean
    propertyId?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | UsuarioDefaultArgs<ExtArgs>
    property?: boolean | InmuebleDefaultArgs<ExtArgs>
>>>>>>> Stashed changes
  }, ExtArgs["result"]["interes"]>

  export type InteresSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
<<<<<<< Updated upstream
    usuarioId?: boolean
    inmuebleId?: boolean
    mensaje?: boolean
    estado?: boolean
    fechaCreacion?: boolean
    inmueble?: boolean | InmuebleDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
=======
    userId?: boolean
    propertyId?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | UsuarioDefaultArgs<ExtArgs>
    property?: boolean | InmuebleDefaultArgs<ExtArgs>
>>>>>>> Stashed changes
  }, ExtArgs["result"]["interes"]>

  export type InteresSelectScalar = {
    id?: boolean
    userId?: boolean
    propertyId?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type InteresOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "propertyId" | "message" | "status" | "createdAt", ExtArgs["result"]["interes"]>
  export type InteresInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
<<<<<<< Updated upstream
    inmueble?: boolean | InmuebleDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    mensajes?: boolean | Interes$mensajesArgs<ExtArgs>
    _count?: boolean | InteresCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InteresIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inmueble?: boolean | InmuebleDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type InteresIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inmueble?: boolean | InmuebleDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
=======
    user?: boolean | UsuarioDefaultArgs<ExtArgs>
    property?: boolean | InmuebleDefaultArgs<ExtArgs>
    messages?: boolean | Interes$messagesArgs<ExtArgs>
    _count?: boolean | InteresCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InteresIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsuarioDefaultArgs<ExtArgs>
    property?: boolean | InmuebleDefaultArgs<ExtArgs>
  }
  export type InteresIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsuarioDefaultArgs<ExtArgs>
    property?: boolean | InmuebleDefaultArgs<ExtArgs>
>>>>>>> Stashed changes
  }

  export type $InteresPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Interes"
    objects: {
<<<<<<< Updated upstream
      inmueble: Prisma.$InmueblePayload<ExtArgs>
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      mensajes: Prisma.$MensajePayload<ExtArgs>[]
=======
      user: Prisma.$UsuarioPayload<ExtArgs>
      property: Prisma.$InmueblePayload<ExtArgs>
      messages: Prisma.$MensajePayload<ExtArgs>[]
>>>>>>> Stashed changes
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      propertyId: string
      message: string | null
      status: string
      createdAt: Date
    }, ExtArgs["result"]["interes"]>
    composites: {}
  }

  type InteresGetPayload<S extends boolean | null | undefined | InteresDefaultArgs> = $Result.GetResult<Prisma.$InteresPayload, S>

  type InteresCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InteresFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InteresCountAggregateInputType | true
    }

  export interface InteresDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Interes'], meta: { name: 'Interes' } }
    /**
     * Find zero or one Interes that matches the filter.
     * @param {InteresFindUniqueArgs} args - Arguments to find a Interes
     * @example
     * // Get one Interes
     * const interes = await prisma.interes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InteresFindUniqueArgs>(args: SelectSubset<T, InteresFindUniqueArgs<ExtArgs>>): Prisma__InteresClient<$Result.GetResult<Prisma.$InteresPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Interes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InteresFindUniqueOrThrowArgs} args - Arguments to find a Interes
     * @example
     * // Get one Interes
     * const interes = await prisma.interes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InteresFindUniqueOrThrowArgs>(args: SelectSubset<T, InteresFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InteresClient<$Result.GetResult<Prisma.$InteresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Interes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InteresFindFirstArgs} args - Arguments to find a Interes
     * @example
     * // Get one Interes
     * const interes = await prisma.interes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InteresFindFirstArgs>(args?: SelectSubset<T, InteresFindFirstArgs<ExtArgs>>): Prisma__InteresClient<$Result.GetResult<Prisma.$InteresPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Interes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InteresFindFirstOrThrowArgs} args - Arguments to find a Interes
     * @example
     * // Get one Interes
     * const interes = await prisma.interes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InteresFindFirstOrThrowArgs>(args?: SelectSubset<T, InteresFindFirstOrThrowArgs<ExtArgs>>): Prisma__InteresClient<$Result.GetResult<Prisma.$InteresPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Interes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InteresFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Interes
     * const interes = await prisma.interes.findMany()
     * 
     * // Get first 10 Interes
     * const interes = await prisma.interes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const interesWithIdOnly = await prisma.interes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InteresFindManyArgs>(args?: SelectSubset<T, InteresFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InteresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Interes.
     * @param {InteresCreateArgs} args - Arguments to create a Interes.
     * @example
     * // Create one Interes
     * const Interes = await prisma.interes.create({
     *   data: {
     *     // ... data to create a Interes
     *   }
     * })
     * 
     */
    create<T extends InteresCreateArgs>(args: SelectSubset<T, InteresCreateArgs<ExtArgs>>): Prisma__InteresClient<$Result.GetResult<Prisma.$InteresPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Interes.
     * @param {InteresCreateManyArgs} args - Arguments to create many Interes.
     * @example
     * // Create many Interes
     * const interes = await prisma.interes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InteresCreateManyArgs>(args?: SelectSubset<T, InteresCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Interes and returns the data saved in the database.
     * @param {InteresCreateManyAndReturnArgs} args - Arguments to create many Interes.
     * @example
     * // Create many Interes
     * const interes = await prisma.interes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Interes and only return the `id`
     * const interesWithIdOnly = await prisma.interes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InteresCreateManyAndReturnArgs>(args?: SelectSubset<T, InteresCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InteresPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Interes.
     * @param {InteresDeleteArgs} args - Arguments to delete one Interes.
     * @example
     * // Delete one Interes
     * const Interes = await prisma.interes.delete({
     *   where: {
     *     // ... filter to delete one Interes
     *   }
     * })
     * 
     */
    delete<T extends InteresDeleteArgs>(args: SelectSubset<T, InteresDeleteArgs<ExtArgs>>): Prisma__InteresClient<$Result.GetResult<Prisma.$InteresPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Interes.
     * @param {InteresUpdateArgs} args - Arguments to update one Interes.
     * @example
     * // Update one Interes
     * const interes = await prisma.interes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InteresUpdateArgs>(args: SelectSubset<T, InteresUpdateArgs<ExtArgs>>): Prisma__InteresClient<$Result.GetResult<Prisma.$InteresPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Interes.
     * @param {InteresDeleteManyArgs} args - Arguments to filter Interes to delete.
     * @example
     * // Delete a few Interes
     * const { count } = await prisma.interes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InteresDeleteManyArgs>(args?: SelectSubset<T, InteresDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Interes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InteresUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Interes
     * const interes = await prisma.interes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InteresUpdateManyArgs>(args: SelectSubset<T, InteresUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Interes and returns the data updated in the database.
     * @param {InteresUpdateManyAndReturnArgs} args - Arguments to update many Interes.
     * @example
     * // Update many Interes
     * const interes = await prisma.interes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Interes and only return the `id`
     * const interesWithIdOnly = await prisma.interes.updateManyAndReturn({
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
    updateManyAndReturn<T extends InteresUpdateManyAndReturnArgs>(args: SelectSubset<T, InteresUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InteresPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Interes.
     * @param {InteresUpsertArgs} args - Arguments to update or create a Interes.
     * @example
     * // Update or create a Interes
     * const interes = await prisma.interes.upsert({
     *   create: {
     *     // ... data to create a Interes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Interes we want to update
     *   }
     * })
     */
    upsert<T extends InteresUpsertArgs>(args: SelectSubset<T, InteresUpsertArgs<ExtArgs>>): Prisma__InteresClient<$Result.GetResult<Prisma.$InteresPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Interes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InteresCountArgs} args - Arguments to filter Interes to count.
     * @example
     * // Count the number of Interes
     * const count = await prisma.interes.count({
     *   where: {
     *     // ... the filter for the Interes we want to count
     *   }
     * })
    **/
    count<T extends InteresCountArgs>(
      args?: Subset<T, InteresCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InteresCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Interes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InteresAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InteresAggregateArgs>(args: Subset<T, InteresAggregateArgs>): Prisma.PrismaPromise<GetInteresAggregateType<T>>

    /**
     * Group by Interes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InteresGroupByArgs} args - Group by arguments.
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
      T extends InteresGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InteresGroupByArgs['orderBy'] }
        : { orderBy?: InteresGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InteresGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInteresGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Interes model
   */
  readonly fields: InteresFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Interes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InteresClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
<<<<<<< Updated upstream
    inmueble<T extends InmuebleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InmuebleDefaultArgs<ExtArgs>>): Prisma__InmuebleClient<$Result.GetResult<Prisma.$InmueblePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    mensajes<T extends Interes$mensajesArgs<ExtArgs> = {}>(args?: Subset<T, Interes$mensajesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MensajePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
=======
    user<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    property<T extends InmuebleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InmuebleDefaultArgs<ExtArgs>>): Prisma__InmuebleClient<$Result.GetResult<Prisma.$InmueblePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    messages<T extends Interes$messagesArgs<ExtArgs> = {}>(args?: Subset<T, Interes$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MensajePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
>>>>>>> Stashed changes
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
   * Fields of the Interes model
   */
  interface InteresFieldRefs {
    readonly id: FieldRef<"Interes", 'String'>
    readonly userId: FieldRef<"Interes", 'String'>
    readonly propertyId: FieldRef<"Interes", 'String'>
    readonly message: FieldRef<"Interes", 'String'>
    readonly status: FieldRef<"Interes", 'String'>
    readonly createdAt: FieldRef<"Interes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Interes findUnique
   */
  export type InteresFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interes
     */
    select?: InteresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interes
     */
    omit?: InteresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteresInclude<ExtArgs> | null
    /**
     * Filter, which Interes to fetch.
     */
    where: InteresWhereUniqueInput
  }

  /**
   * Interes findUniqueOrThrow
   */
  export type InteresFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interes
     */
    select?: InteresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interes
     */
    omit?: InteresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteresInclude<ExtArgs> | null
    /**
     * Filter, which Interes to fetch.
     */
    where: InteresWhereUniqueInput
  }

  /**
   * Interes findFirst
   */
  export type InteresFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interes
     */
    select?: InteresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interes
     */
    omit?: InteresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteresInclude<ExtArgs> | null
    /**
     * Filter, which Interes to fetch.
     */
    where?: InteresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Interes to fetch.
     */
    orderBy?: InteresOrderByWithRelationInput | InteresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Interes.
     */
    cursor?: InteresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Interes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Interes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Interes.
     */
    distinct?: InteresScalarFieldEnum | InteresScalarFieldEnum[]
  }

  /**
   * Interes findFirstOrThrow
   */
  export type InteresFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interes
     */
    select?: InteresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interes
     */
    omit?: InteresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteresInclude<ExtArgs> | null
    /**
     * Filter, which Interes to fetch.
     */
    where?: InteresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Interes to fetch.
     */
    orderBy?: InteresOrderByWithRelationInput | InteresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Interes.
     */
    cursor?: InteresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Interes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Interes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Interes.
     */
    distinct?: InteresScalarFieldEnum | InteresScalarFieldEnum[]
  }

  /**
   * Interes findMany
   */
  export type InteresFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interes
     */
    select?: InteresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interes
     */
    omit?: InteresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteresInclude<ExtArgs> | null
    /**
     * Filter, which Interes to fetch.
     */
    where?: InteresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Interes to fetch.
     */
    orderBy?: InteresOrderByWithRelationInput | InteresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Interes.
     */
    cursor?: InteresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Interes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Interes.
     */
    skip?: number
    distinct?: InteresScalarFieldEnum | InteresScalarFieldEnum[]
  }

  /**
   * Interes create
   */
  export type InteresCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interes
     */
    select?: InteresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interes
     */
    omit?: InteresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteresInclude<ExtArgs> | null
    /**
     * The data needed to create a Interes.
     */
    data: XOR<InteresCreateInput, InteresUncheckedCreateInput>
  }

  /**
   * Interes createMany
   */
  export type InteresCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Interes.
     */
    data: InteresCreateManyInput | InteresCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Interes createManyAndReturn
   */
  export type InteresCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interes
     */
    select?: InteresSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Interes
     */
    omit?: InteresOmit<ExtArgs> | null
    /**
     * The data used to create many Interes.
     */
    data: InteresCreateManyInput | InteresCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteresIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Interes update
   */
  export type InteresUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interes
     */
    select?: InteresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interes
     */
    omit?: InteresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteresInclude<ExtArgs> | null
    /**
     * The data needed to update a Interes.
     */
    data: XOR<InteresUpdateInput, InteresUncheckedUpdateInput>
    /**
     * Choose, which Interes to update.
     */
    where: InteresWhereUniqueInput
  }

  /**
   * Interes updateMany
   */
  export type InteresUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Interes.
     */
    data: XOR<InteresUpdateManyMutationInput, InteresUncheckedUpdateManyInput>
    /**
     * Filter which Interes to update
     */
    where?: InteresWhereInput
    /**
     * Limit how many Interes to update.
     */
    limit?: number
  }

  /**
   * Interes updateManyAndReturn
   */
  export type InteresUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interes
     */
    select?: InteresSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Interes
     */
    omit?: InteresOmit<ExtArgs> | null
    /**
     * The data used to update Interes.
     */
    data: XOR<InteresUpdateManyMutationInput, InteresUncheckedUpdateManyInput>
    /**
     * Filter which Interes to update
     */
    where?: InteresWhereInput
    /**
     * Limit how many Interes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteresIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Interes upsert
   */
  export type InteresUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interes
     */
    select?: InteresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interes
     */
    omit?: InteresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteresInclude<ExtArgs> | null
    /**
     * The filter to search for the Interes to update in case it exists.
     */
    where: InteresWhereUniqueInput
    /**
     * In case the Interes found by the `where` argument doesn't exist, create a new Interes with this data.
     */
    create: XOR<InteresCreateInput, InteresUncheckedCreateInput>
    /**
     * In case the Interes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InteresUpdateInput, InteresUncheckedUpdateInput>
  }

  /**
   * Interes delete
   */
  export type InteresDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interes
     */
    select?: InteresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interes
     */
    omit?: InteresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteresInclude<ExtArgs> | null
    /**
     * Filter which Interes to delete.
     */
    where: InteresWhereUniqueInput
  }

  /**
   * Interes deleteMany
   */
  export type InteresDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Interes to delete
     */
    where?: InteresWhereInput
    /**
     * Limit how many Interes to delete.
     */
    limit?: number
  }

  /**
   * Interes.messages
   */
  export type Interes$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensaje
     */
    omit?: MensajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensajeInclude<ExtArgs> | null
    where?: MensajeWhereInput
    orderBy?: MensajeOrderByWithRelationInput | MensajeOrderByWithRelationInput[]
    cursor?: MensajeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MensajeScalarFieldEnum | MensajeScalarFieldEnum[]
  }

  /**
   * Interes without action
   */
  export type InteresDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interes
     */
    select?: InteresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interes
     */
    omit?: InteresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteresInclude<ExtArgs> | null
  }


  /**
   * Model Mensaje
   */

  export type AggregateMensaje = {
    _count: MensajeCountAggregateOutputType | null
    _avg: MensajeAvgAggregateOutputType | null
    _sum: MensajeSumAggregateOutputType | null
    _min: MensajeMinAggregateOutputType | null
    _max: MensajeMaxAggregateOutputType | null
  }

  export type MensajeAvgAggregateOutputType = {
    id: number | null
  }

  export type MensajeSumAggregateOutputType = {
    id: bigint | null
  }

  export type MensajeMinAggregateOutputType = {
    id: bigint | null
    senderId: string | null
    receiverId: string | null
    interestId: string | null
    content: string | null
    read: boolean | null
    createdAt: Date | null
  }

  export type MensajeMaxAggregateOutputType = {
    id: bigint | null
    senderId: string | null
    receiverId: string | null
    interestId: string | null
    content: string | null
    read: boolean | null
    createdAt: Date | null
  }

  export type MensajeCountAggregateOutputType = {
    id: number
    senderId: number
    receiverId: number
    interestId: number
    content: number
    read: number
    createdAt: number
    _all: number
  }


  export type MensajeAvgAggregateInputType = {
    id?: true
  }

  export type MensajeSumAggregateInputType = {
    id?: true
  }

  export type MensajeMinAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
    interestId?: true
    content?: true
    read?: true
    createdAt?: true
  }

  export type MensajeMaxAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
    interestId?: true
    content?: true
    read?: true
    createdAt?: true
  }

  export type MensajeCountAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
    interestId?: true
    content?: true
    read?: true
    createdAt?: true
    _all?: true
  }

  export type MensajeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mensaje to aggregate.
     */
    where?: MensajeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mensajes to fetch.
     */
    orderBy?: MensajeOrderByWithRelationInput | MensajeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MensajeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mensajes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mensajes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Mensajes
    **/
    _count?: true | MensajeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MensajeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MensajeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MensajeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MensajeMaxAggregateInputType
  }

  export type GetMensajeAggregateType<T extends MensajeAggregateArgs> = {
        [P in keyof T & keyof AggregateMensaje]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMensaje[P]>
      : GetScalarType<T[P], AggregateMensaje[P]>
  }




  export type MensajeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MensajeWhereInput
    orderBy?: MensajeOrderByWithAggregationInput | MensajeOrderByWithAggregationInput[]
    by: MensajeScalarFieldEnum[] | MensajeScalarFieldEnum
    having?: MensajeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MensajeCountAggregateInputType | true
    _avg?: MensajeAvgAggregateInputType
    _sum?: MensajeSumAggregateInputType
    _min?: MensajeMinAggregateInputType
    _max?: MensajeMaxAggregateInputType
  }

  export type MensajeGroupByOutputType = {
    id: bigint
    senderId: string
    receiverId: string
    interestId: string | null
    content: string
    read: boolean
    createdAt: Date
    _count: MensajeCountAggregateOutputType | null
    _avg: MensajeAvgAggregateOutputType | null
    _sum: MensajeSumAggregateOutputType | null
    _min: MensajeMinAggregateOutputType | null
    _max: MensajeMaxAggregateOutputType | null
  }

  type GetMensajeGroupByPayload<T extends MensajeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MensajeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MensajeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MensajeGroupByOutputType[P]>
            : GetScalarType<T[P], MensajeGroupByOutputType[P]>
        }
      >
    >


  export type MensajeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
<<<<<<< Updated upstream
    emisorId?: boolean
    receptorId?: boolean
    interesId?: boolean
    contenido?: boolean
    leido?: boolean
    fechaCreacion?: boolean
    emisor?: boolean | UsuarioDefaultArgs<ExtArgs>
    interes?: boolean | Mensaje$interesArgs<ExtArgs>
    receptor?: boolean | UsuarioDefaultArgs<ExtArgs>
=======
    senderId?: boolean
    receiverId?: boolean
    interestId?: boolean
    content?: boolean
    read?: boolean
    createdAt?: boolean
    sender?: boolean | UsuarioDefaultArgs<ExtArgs>
    receiver?: boolean | UsuarioDefaultArgs<ExtArgs>
    interest?: boolean | Mensaje$interestArgs<ExtArgs>
>>>>>>> Stashed changes
  }, ExtArgs["result"]["mensaje"]>

  export type MensajeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
<<<<<<< Updated upstream
    emisorId?: boolean
    receptorId?: boolean
    interesId?: boolean
    contenido?: boolean
    leido?: boolean
    fechaCreacion?: boolean
    emisor?: boolean | UsuarioDefaultArgs<ExtArgs>
    interes?: boolean | Mensaje$interesArgs<ExtArgs>
    receptor?: boolean | UsuarioDefaultArgs<ExtArgs>
=======
    senderId?: boolean
    receiverId?: boolean
    interestId?: boolean
    content?: boolean
    read?: boolean
    createdAt?: boolean
    sender?: boolean | UsuarioDefaultArgs<ExtArgs>
    receiver?: boolean | UsuarioDefaultArgs<ExtArgs>
    interest?: boolean | Mensaje$interestArgs<ExtArgs>
>>>>>>> Stashed changes
  }, ExtArgs["result"]["mensaje"]>

  export type MensajeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
<<<<<<< Updated upstream
    emisorId?: boolean
    receptorId?: boolean
    interesId?: boolean
    contenido?: boolean
    leido?: boolean
    fechaCreacion?: boolean
    emisor?: boolean | UsuarioDefaultArgs<ExtArgs>
    interes?: boolean | Mensaje$interesArgs<ExtArgs>
    receptor?: boolean | UsuarioDefaultArgs<ExtArgs>
=======
    senderId?: boolean
    receiverId?: boolean
    interestId?: boolean
    content?: boolean
    read?: boolean
    createdAt?: boolean
    sender?: boolean | UsuarioDefaultArgs<ExtArgs>
    receiver?: boolean | UsuarioDefaultArgs<ExtArgs>
    interest?: boolean | Mensaje$interestArgs<ExtArgs>
>>>>>>> Stashed changes
  }, ExtArgs["result"]["mensaje"]>

  export type MensajeSelectScalar = {
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    interestId?: boolean
    content?: boolean
    read?: boolean
    createdAt?: boolean
  }

  export type MensajeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "senderId" | "receiverId" | "interestId" | "content" | "read" | "createdAt", ExtArgs["result"]["mensaje"]>
  export type MensajeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
<<<<<<< Updated upstream
    emisor?: boolean | UsuarioDefaultArgs<ExtArgs>
    interes?: boolean | Mensaje$interesArgs<ExtArgs>
    receptor?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type MensajeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    emisor?: boolean | UsuarioDefaultArgs<ExtArgs>
    interes?: boolean | Mensaje$interesArgs<ExtArgs>
    receptor?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type MensajeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    emisor?: boolean | UsuarioDefaultArgs<ExtArgs>
    interes?: boolean | Mensaje$interesArgs<ExtArgs>
    receptor?: boolean | UsuarioDefaultArgs<ExtArgs>
=======
    sender?: boolean | UsuarioDefaultArgs<ExtArgs>
    receiver?: boolean | UsuarioDefaultArgs<ExtArgs>
    interest?: boolean | Mensaje$interestArgs<ExtArgs>
  }
  export type MensajeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UsuarioDefaultArgs<ExtArgs>
    receiver?: boolean | UsuarioDefaultArgs<ExtArgs>
    interest?: boolean | Mensaje$interestArgs<ExtArgs>
  }
  export type MensajeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UsuarioDefaultArgs<ExtArgs>
    receiver?: boolean | UsuarioDefaultArgs<ExtArgs>
    interest?: boolean | Mensaje$interestArgs<ExtArgs>
>>>>>>> Stashed changes
  }

  export type $MensajePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Mensaje"
    objects: {
<<<<<<< Updated upstream
      emisor: Prisma.$UsuarioPayload<ExtArgs>
      interes: Prisma.$InteresPayload<ExtArgs> | null
      receptor: Prisma.$UsuarioPayload<ExtArgs>
=======
      sender: Prisma.$UsuarioPayload<ExtArgs>
      receiver: Prisma.$UsuarioPayload<ExtArgs>
      interest: Prisma.$InteresPayload<ExtArgs> | null
>>>>>>> Stashed changes
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      senderId: string
      receiverId: string
      interestId: string | null
      content: string
      read: boolean
      createdAt: Date
    }, ExtArgs["result"]["mensaje"]>
    composites: {}
  }

  type MensajeGetPayload<S extends boolean | null | undefined | MensajeDefaultArgs> = $Result.GetResult<Prisma.$MensajePayload, S>

  type MensajeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MensajeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MensajeCountAggregateInputType | true
    }

  export interface MensajeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Mensaje'], meta: { name: 'Mensaje' } }
    /**
     * Find zero or one Mensaje that matches the filter.
     * @param {MensajeFindUniqueArgs} args - Arguments to find a Mensaje
     * @example
     * // Get one Mensaje
     * const mensaje = await prisma.mensaje.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MensajeFindUniqueArgs>(args: SelectSubset<T, MensajeFindUniqueArgs<ExtArgs>>): Prisma__MensajeClient<$Result.GetResult<Prisma.$MensajePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mensaje that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MensajeFindUniqueOrThrowArgs} args - Arguments to find a Mensaje
     * @example
     * // Get one Mensaje
     * const mensaje = await prisma.mensaje.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MensajeFindUniqueOrThrowArgs>(args: SelectSubset<T, MensajeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MensajeClient<$Result.GetResult<Prisma.$MensajePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mensaje that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensajeFindFirstArgs} args - Arguments to find a Mensaje
     * @example
     * // Get one Mensaje
     * const mensaje = await prisma.mensaje.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MensajeFindFirstArgs>(args?: SelectSubset<T, MensajeFindFirstArgs<ExtArgs>>): Prisma__MensajeClient<$Result.GetResult<Prisma.$MensajePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mensaje that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensajeFindFirstOrThrowArgs} args - Arguments to find a Mensaje
     * @example
     * // Get one Mensaje
     * const mensaje = await prisma.mensaje.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MensajeFindFirstOrThrowArgs>(args?: SelectSubset<T, MensajeFindFirstOrThrowArgs<ExtArgs>>): Prisma__MensajeClient<$Result.GetResult<Prisma.$MensajePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Mensajes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensajeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mensajes
     * const mensajes = await prisma.mensaje.findMany()
     * 
     * // Get first 10 Mensajes
     * const mensajes = await prisma.mensaje.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mensajeWithIdOnly = await prisma.mensaje.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MensajeFindManyArgs>(args?: SelectSubset<T, MensajeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MensajePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mensaje.
     * @param {MensajeCreateArgs} args - Arguments to create a Mensaje.
     * @example
     * // Create one Mensaje
     * const Mensaje = await prisma.mensaje.create({
     *   data: {
     *     // ... data to create a Mensaje
     *   }
     * })
     * 
     */
    create<T extends MensajeCreateArgs>(args: SelectSubset<T, MensajeCreateArgs<ExtArgs>>): Prisma__MensajeClient<$Result.GetResult<Prisma.$MensajePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Mensajes.
     * @param {MensajeCreateManyArgs} args - Arguments to create many Mensajes.
     * @example
     * // Create many Mensajes
     * const mensaje = await prisma.mensaje.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MensajeCreateManyArgs>(args?: SelectSubset<T, MensajeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Mensajes and returns the data saved in the database.
     * @param {MensajeCreateManyAndReturnArgs} args - Arguments to create many Mensajes.
     * @example
     * // Create many Mensajes
     * const mensaje = await prisma.mensaje.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Mensajes and only return the `id`
     * const mensajeWithIdOnly = await prisma.mensaje.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MensajeCreateManyAndReturnArgs>(args?: SelectSubset<T, MensajeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MensajePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Mensaje.
     * @param {MensajeDeleteArgs} args - Arguments to delete one Mensaje.
     * @example
     * // Delete one Mensaje
     * const Mensaje = await prisma.mensaje.delete({
     *   where: {
     *     // ... filter to delete one Mensaje
     *   }
     * })
     * 
     */
    delete<T extends MensajeDeleteArgs>(args: SelectSubset<T, MensajeDeleteArgs<ExtArgs>>): Prisma__MensajeClient<$Result.GetResult<Prisma.$MensajePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mensaje.
     * @param {MensajeUpdateArgs} args - Arguments to update one Mensaje.
     * @example
     * // Update one Mensaje
     * const mensaje = await prisma.mensaje.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MensajeUpdateArgs>(args: SelectSubset<T, MensajeUpdateArgs<ExtArgs>>): Prisma__MensajeClient<$Result.GetResult<Prisma.$MensajePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Mensajes.
     * @param {MensajeDeleteManyArgs} args - Arguments to filter Mensajes to delete.
     * @example
     * // Delete a few Mensajes
     * const { count } = await prisma.mensaje.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MensajeDeleteManyArgs>(args?: SelectSubset<T, MensajeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mensajes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensajeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mensajes
     * const mensaje = await prisma.mensaje.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MensajeUpdateManyArgs>(args: SelectSubset<T, MensajeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mensajes and returns the data updated in the database.
     * @param {MensajeUpdateManyAndReturnArgs} args - Arguments to update many Mensajes.
     * @example
     * // Update many Mensajes
     * const mensaje = await prisma.mensaje.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Mensajes and only return the `id`
     * const mensajeWithIdOnly = await prisma.mensaje.updateManyAndReturn({
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
    updateManyAndReturn<T extends MensajeUpdateManyAndReturnArgs>(args: SelectSubset<T, MensajeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MensajePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Mensaje.
     * @param {MensajeUpsertArgs} args - Arguments to update or create a Mensaje.
     * @example
     * // Update or create a Mensaje
     * const mensaje = await prisma.mensaje.upsert({
     *   create: {
     *     // ... data to create a Mensaje
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mensaje we want to update
     *   }
     * })
     */
    upsert<T extends MensajeUpsertArgs>(args: SelectSubset<T, MensajeUpsertArgs<ExtArgs>>): Prisma__MensajeClient<$Result.GetResult<Prisma.$MensajePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Mensajes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensajeCountArgs} args - Arguments to filter Mensajes to count.
     * @example
     * // Count the number of Mensajes
     * const count = await prisma.mensaje.count({
     *   where: {
     *     // ... the filter for the Mensajes we want to count
     *   }
     * })
    **/
    count<T extends MensajeCountArgs>(
      args?: Subset<T, MensajeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MensajeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mensaje.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensajeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MensajeAggregateArgs>(args: Subset<T, MensajeAggregateArgs>): Prisma.PrismaPromise<GetMensajeAggregateType<T>>

    /**
     * Group by Mensaje.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensajeGroupByArgs} args - Group by arguments.
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
      T extends MensajeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MensajeGroupByArgs['orderBy'] }
        : { orderBy?: MensajeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MensajeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMensajeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Mensaje model
   */
  readonly fields: MensajeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mensaje.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MensajeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
<<<<<<< Updated upstream
    emisor<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    interes<T extends Mensaje$interesArgs<ExtArgs> = {}>(args?: Subset<T, Mensaje$interesArgs<ExtArgs>>): Prisma__InteresClient<$Result.GetResult<Prisma.$InteresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    receptor<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
=======
    sender<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    receiver<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    interest<T extends Mensaje$interestArgs<ExtArgs> = {}>(args?: Subset<T, Mensaje$interestArgs<ExtArgs>>): Prisma__InteresClient<$Result.GetResult<Prisma.$InteresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
>>>>>>> Stashed changes
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
   * Fields of the Mensaje model
   */
  interface MensajeFieldRefs {
    readonly id: FieldRef<"Mensaje", 'BigInt'>
    readonly senderId: FieldRef<"Mensaje", 'String'>
    readonly receiverId: FieldRef<"Mensaje", 'String'>
    readonly interestId: FieldRef<"Mensaje", 'String'>
    readonly content: FieldRef<"Mensaje", 'String'>
    readonly read: FieldRef<"Mensaje", 'Boolean'>
    readonly createdAt: FieldRef<"Mensaje", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Mensaje findUnique
   */
  export type MensajeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensaje
     */
    omit?: MensajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensajeInclude<ExtArgs> | null
    /**
     * Filter, which Mensaje to fetch.
     */
    where: MensajeWhereUniqueInput
  }

  /**
   * Mensaje findUniqueOrThrow
   */
  export type MensajeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensaje
     */
    omit?: MensajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensajeInclude<ExtArgs> | null
    /**
     * Filter, which Mensaje to fetch.
     */
    where: MensajeWhereUniqueInput
  }

  /**
   * Mensaje findFirst
   */
  export type MensajeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensaje
     */
    omit?: MensajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensajeInclude<ExtArgs> | null
    /**
     * Filter, which Mensaje to fetch.
     */
    where?: MensajeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mensajes to fetch.
     */
    orderBy?: MensajeOrderByWithRelationInput | MensajeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mensajes.
     */
    cursor?: MensajeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mensajes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mensajes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mensajes.
     */
    distinct?: MensajeScalarFieldEnum | MensajeScalarFieldEnum[]
  }

  /**
   * Mensaje findFirstOrThrow
   */
  export type MensajeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensaje
     */
    omit?: MensajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensajeInclude<ExtArgs> | null
    /**
     * Filter, which Mensaje to fetch.
     */
    where?: MensajeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mensajes to fetch.
     */
    orderBy?: MensajeOrderByWithRelationInput | MensajeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mensajes.
     */
    cursor?: MensajeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mensajes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mensajes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mensajes.
     */
    distinct?: MensajeScalarFieldEnum | MensajeScalarFieldEnum[]
  }

  /**
   * Mensaje findMany
   */
  export type MensajeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensaje
     */
    omit?: MensajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensajeInclude<ExtArgs> | null
    /**
     * Filter, which Mensajes to fetch.
     */
    where?: MensajeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mensajes to fetch.
     */
    orderBy?: MensajeOrderByWithRelationInput | MensajeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Mensajes.
     */
    cursor?: MensajeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mensajes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mensajes.
     */
    skip?: number
    distinct?: MensajeScalarFieldEnum | MensajeScalarFieldEnum[]
  }

  /**
   * Mensaje create
   */
  export type MensajeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensaje
     */
    omit?: MensajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensajeInclude<ExtArgs> | null
    /**
     * The data needed to create a Mensaje.
     */
    data: XOR<MensajeCreateInput, MensajeUncheckedCreateInput>
  }

  /**
   * Mensaje createMany
   */
  export type MensajeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Mensajes.
     */
    data: MensajeCreateManyInput | MensajeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Mensaje createManyAndReturn
   */
  export type MensajeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mensaje
     */
    omit?: MensajeOmit<ExtArgs> | null
    /**
     * The data used to create many Mensajes.
     */
    data: MensajeCreateManyInput | MensajeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensajeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Mensaje update
   */
  export type MensajeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensaje
     */
    omit?: MensajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensajeInclude<ExtArgs> | null
    /**
     * The data needed to update a Mensaje.
     */
    data: XOR<MensajeUpdateInput, MensajeUncheckedUpdateInput>
    /**
     * Choose, which Mensaje to update.
     */
    where: MensajeWhereUniqueInput
  }

  /**
   * Mensaje updateMany
   */
  export type MensajeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Mensajes.
     */
    data: XOR<MensajeUpdateManyMutationInput, MensajeUncheckedUpdateManyInput>
    /**
     * Filter which Mensajes to update
     */
    where?: MensajeWhereInput
    /**
     * Limit how many Mensajes to update.
     */
    limit?: number
  }

  /**
   * Mensaje updateManyAndReturn
   */
  export type MensajeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mensaje
     */
    omit?: MensajeOmit<ExtArgs> | null
    /**
     * The data used to update Mensajes.
     */
    data: XOR<MensajeUpdateManyMutationInput, MensajeUncheckedUpdateManyInput>
    /**
     * Filter which Mensajes to update
     */
    where?: MensajeWhereInput
    /**
     * Limit how many Mensajes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensajeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Mensaje upsert
   */
  export type MensajeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensaje
     */
    omit?: MensajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensajeInclude<ExtArgs> | null
    /**
     * The filter to search for the Mensaje to update in case it exists.
     */
    where: MensajeWhereUniqueInput
    /**
     * In case the Mensaje found by the `where` argument doesn't exist, create a new Mensaje with this data.
     */
    create: XOR<MensajeCreateInput, MensajeUncheckedCreateInput>
    /**
     * In case the Mensaje was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MensajeUpdateInput, MensajeUncheckedUpdateInput>
  }

  /**
   * Mensaje delete
   */
  export type MensajeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensaje
     */
    omit?: MensajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensajeInclude<ExtArgs> | null
    /**
     * Filter which Mensaje to delete.
     */
    where: MensajeWhereUniqueInput
  }

  /**
   * Mensaje deleteMany
   */
  export type MensajeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mensajes to delete
     */
    where?: MensajeWhereInput
    /**
     * Limit how many Mensajes to delete.
     */
    limit?: number
  }

  /**
   * Mensaje.interest
   */
  export type Mensaje$interestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interes
     */
    select?: InteresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interes
     */
    omit?: InteresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteresInclude<ExtArgs> | null
    where?: InteresWhereInput
  }

  /**
   * Mensaje without action
   */
  export type MensajeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensaje
     */
    omit?: MensajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensajeInclude<ExtArgs> | null
  }


  /**
   * Model FotoInmueble
   */

  export type AggregateFotoInmueble = {
    _count: FotoInmuebleCountAggregateOutputType | null
    _avg: FotoInmuebleAvgAggregateOutputType | null
    _sum: FotoInmuebleSumAggregateOutputType | null
    _min: FotoInmuebleMinAggregateOutputType | null
    _max: FotoInmuebleMaxAggregateOutputType | null
  }

  export type FotoInmuebleAvgAggregateOutputType = {
    id: number | null
    order: number | null
  }

  export type FotoInmuebleSumAggregateOutputType = {
    id: bigint | null
    order: number | null
  }

  export type FotoInmuebleMinAggregateOutputType = {
    id: bigint | null
    propertyId: string | null
    url: string | null
    order: number | null
    createdAt: Date | null
  }

  export type FotoInmuebleMaxAggregateOutputType = {
    id: bigint | null
    propertyId: string | null
    url: string | null
    order: number | null
    createdAt: Date | null
  }

  export type FotoInmuebleCountAggregateOutputType = {
    id: number
    propertyId: number
    url: number
    order: number
    createdAt: number
    _all: number
  }


  export type FotoInmuebleAvgAggregateInputType = {
    id?: true
    order?: true
  }

  export type FotoInmuebleSumAggregateInputType = {
    id?: true
    order?: true
  }

  export type FotoInmuebleMinAggregateInputType = {
    id?: true
    propertyId?: true
    url?: true
    order?: true
    createdAt?: true
  }

  export type FotoInmuebleMaxAggregateInputType = {
    id?: true
    propertyId?: true
    url?: true
    order?: true
    createdAt?: true
  }

  export type FotoInmuebleCountAggregateInputType = {
    id?: true
    propertyId?: true
    url?: true
    order?: true
    createdAt?: true
    _all?: true
  }

  export type FotoInmuebleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FotoInmueble to aggregate.
     */
    where?: FotoInmuebleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FotoInmuebles to fetch.
     */
    orderBy?: FotoInmuebleOrderByWithRelationInput | FotoInmuebleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FotoInmuebleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FotoInmuebles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FotoInmuebles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FotoInmuebles
    **/
    _count?: true | FotoInmuebleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FotoInmuebleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FotoInmuebleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FotoInmuebleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FotoInmuebleMaxAggregateInputType
  }

  export type GetFotoInmuebleAggregateType<T extends FotoInmuebleAggregateArgs> = {
        [P in keyof T & keyof AggregateFotoInmueble]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFotoInmueble[P]>
      : GetScalarType<T[P], AggregateFotoInmueble[P]>
  }




  export type FotoInmuebleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FotoInmuebleWhereInput
    orderBy?: FotoInmuebleOrderByWithAggregationInput | FotoInmuebleOrderByWithAggregationInput[]
    by: FotoInmuebleScalarFieldEnum[] | FotoInmuebleScalarFieldEnum
    having?: FotoInmuebleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FotoInmuebleCountAggregateInputType | true
    _avg?: FotoInmuebleAvgAggregateInputType
    _sum?: FotoInmuebleSumAggregateInputType
    _min?: FotoInmuebleMinAggregateInputType
    _max?: FotoInmuebleMaxAggregateInputType
  }

  export type FotoInmuebleGroupByOutputType = {
    id: bigint
    propertyId: string
    url: string
    order: number | null
    createdAt: Date
    _count: FotoInmuebleCountAggregateOutputType | null
    _avg: FotoInmuebleAvgAggregateOutputType | null
    _sum: FotoInmuebleSumAggregateOutputType | null
    _min: FotoInmuebleMinAggregateOutputType | null
    _max: FotoInmuebleMaxAggregateOutputType | null
  }

  type GetFotoInmuebleGroupByPayload<T extends FotoInmuebleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FotoInmuebleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FotoInmuebleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FotoInmuebleGroupByOutputType[P]>
            : GetScalarType<T[P], FotoInmuebleGroupByOutputType[P]>
        }
      >
    >


  export type FotoInmuebleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propertyId?: boolean
    url?: boolean
    order?: boolean
    createdAt?: boolean
    property?: boolean | InmuebleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fotoInmueble"]>

  export type FotoInmuebleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propertyId?: boolean
    url?: boolean
    order?: boolean
    createdAt?: boolean
    property?: boolean | InmuebleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fotoInmueble"]>

  export type FotoInmuebleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propertyId?: boolean
    url?: boolean
    order?: boolean
    createdAt?: boolean
    property?: boolean | InmuebleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fotoInmueble"]>

  export type FotoInmuebleSelectScalar = {
    id?: boolean
    propertyId?: boolean
    url?: boolean
    order?: boolean
    createdAt?: boolean
  }

  export type FotoInmuebleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "propertyId" | "url" | "order" | "createdAt", ExtArgs["result"]["fotoInmueble"]>
  export type FotoInmuebleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | InmuebleDefaultArgs<ExtArgs>
  }
  export type FotoInmuebleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | InmuebleDefaultArgs<ExtArgs>
  }
  export type FotoInmuebleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | InmuebleDefaultArgs<ExtArgs>
  }

  export type $FotoInmueblePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FotoInmueble"
    objects: {
      property: Prisma.$InmueblePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      propertyId: string
      url: string
      order: number | null
      createdAt: Date
    }, ExtArgs["result"]["fotoInmueble"]>
    composites: {}
  }

  type FotoInmuebleGetPayload<S extends boolean | null | undefined | FotoInmuebleDefaultArgs> = $Result.GetResult<Prisma.$FotoInmueblePayload, S>

  type FotoInmuebleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FotoInmuebleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FotoInmuebleCountAggregateInputType | true
    }

  export interface FotoInmuebleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FotoInmueble'], meta: { name: 'FotoInmueble' } }
    /**
     * Find zero or one FotoInmueble that matches the filter.
     * @param {FotoInmuebleFindUniqueArgs} args - Arguments to find a FotoInmueble
     * @example
     * // Get one FotoInmueble
     * const fotoInmueble = await prisma.fotoInmueble.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FotoInmuebleFindUniqueArgs>(args: SelectSubset<T, FotoInmuebleFindUniqueArgs<ExtArgs>>): Prisma__FotoInmuebleClient<$Result.GetResult<Prisma.$FotoInmueblePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FotoInmueble that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FotoInmuebleFindUniqueOrThrowArgs} args - Arguments to find a FotoInmueble
     * @example
     * // Get one FotoInmueble
     * const fotoInmueble = await prisma.fotoInmueble.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FotoInmuebleFindUniqueOrThrowArgs>(args: SelectSubset<T, FotoInmuebleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FotoInmuebleClient<$Result.GetResult<Prisma.$FotoInmueblePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FotoInmueble that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotoInmuebleFindFirstArgs} args - Arguments to find a FotoInmueble
     * @example
     * // Get one FotoInmueble
     * const fotoInmueble = await prisma.fotoInmueble.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FotoInmuebleFindFirstArgs>(args?: SelectSubset<T, FotoInmuebleFindFirstArgs<ExtArgs>>): Prisma__FotoInmuebleClient<$Result.GetResult<Prisma.$FotoInmueblePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FotoInmueble that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotoInmuebleFindFirstOrThrowArgs} args - Arguments to find a FotoInmueble
     * @example
     * // Get one FotoInmueble
     * const fotoInmueble = await prisma.fotoInmueble.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FotoInmuebleFindFirstOrThrowArgs>(args?: SelectSubset<T, FotoInmuebleFindFirstOrThrowArgs<ExtArgs>>): Prisma__FotoInmuebleClient<$Result.GetResult<Prisma.$FotoInmueblePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FotoInmuebles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotoInmuebleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FotoInmuebles
     * const fotoInmuebles = await prisma.fotoInmueble.findMany()
     * 
     * // Get first 10 FotoInmuebles
     * const fotoInmuebles = await prisma.fotoInmueble.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fotoInmuebleWithIdOnly = await prisma.fotoInmueble.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FotoInmuebleFindManyArgs>(args?: SelectSubset<T, FotoInmuebleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FotoInmueblePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FotoInmueble.
     * @param {FotoInmuebleCreateArgs} args - Arguments to create a FotoInmueble.
     * @example
     * // Create one FotoInmueble
     * const FotoInmueble = await prisma.fotoInmueble.create({
     *   data: {
     *     // ... data to create a FotoInmueble
     *   }
     * })
     * 
     */
    create<T extends FotoInmuebleCreateArgs>(args: SelectSubset<T, FotoInmuebleCreateArgs<ExtArgs>>): Prisma__FotoInmuebleClient<$Result.GetResult<Prisma.$FotoInmueblePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FotoInmuebles.
     * @param {FotoInmuebleCreateManyArgs} args - Arguments to create many FotoInmuebles.
     * @example
     * // Create many FotoInmuebles
     * const fotoInmueble = await prisma.fotoInmueble.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FotoInmuebleCreateManyArgs>(args?: SelectSubset<T, FotoInmuebleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FotoInmuebles and returns the data saved in the database.
     * @param {FotoInmuebleCreateManyAndReturnArgs} args - Arguments to create many FotoInmuebles.
     * @example
     * // Create many FotoInmuebles
     * const fotoInmueble = await prisma.fotoInmueble.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FotoInmuebles and only return the `id`
     * const fotoInmuebleWithIdOnly = await prisma.fotoInmueble.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FotoInmuebleCreateManyAndReturnArgs>(args?: SelectSubset<T, FotoInmuebleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FotoInmueblePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FotoInmueble.
     * @param {FotoInmuebleDeleteArgs} args - Arguments to delete one FotoInmueble.
     * @example
     * // Delete one FotoInmueble
     * const FotoInmueble = await prisma.fotoInmueble.delete({
     *   where: {
     *     // ... filter to delete one FotoInmueble
     *   }
     * })
     * 
     */
    delete<T extends FotoInmuebleDeleteArgs>(args: SelectSubset<T, FotoInmuebleDeleteArgs<ExtArgs>>): Prisma__FotoInmuebleClient<$Result.GetResult<Prisma.$FotoInmueblePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FotoInmueble.
     * @param {FotoInmuebleUpdateArgs} args - Arguments to update one FotoInmueble.
     * @example
     * // Update one FotoInmueble
     * const fotoInmueble = await prisma.fotoInmueble.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FotoInmuebleUpdateArgs>(args: SelectSubset<T, FotoInmuebleUpdateArgs<ExtArgs>>): Prisma__FotoInmuebleClient<$Result.GetResult<Prisma.$FotoInmueblePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FotoInmuebles.
     * @param {FotoInmuebleDeleteManyArgs} args - Arguments to filter FotoInmuebles to delete.
     * @example
     * // Delete a few FotoInmuebles
     * const { count } = await prisma.fotoInmueble.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FotoInmuebleDeleteManyArgs>(args?: SelectSubset<T, FotoInmuebleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FotoInmuebles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotoInmuebleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FotoInmuebles
     * const fotoInmueble = await prisma.fotoInmueble.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FotoInmuebleUpdateManyArgs>(args: SelectSubset<T, FotoInmuebleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FotoInmuebles and returns the data updated in the database.
     * @param {FotoInmuebleUpdateManyAndReturnArgs} args - Arguments to update many FotoInmuebles.
     * @example
     * // Update many FotoInmuebles
     * const fotoInmueble = await prisma.fotoInmueble.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FotoInmuebles and only return the `id`
     * const fotoInmuebleWithIdOnly = await prisma.fotoInmueble.updateManyAndReturn({
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
    updateManyAndReturn<T extends FotoInmuebleUpdateManyAndReturnArgs>(args: SelectSubset<T, FotoInmuebleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FotoInmueblePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FotoInmueble.
     * @param {FotoInmuebleUpsertArgs} args - Arguments to update or create a FotoInmueble.
     * @example
     * // Update or create a FotoInmueble
     * const fotoInmueble = await prisma.fotoInmueble.upsert({
     *   create: {
     *     // ... data to create a FotoInmueble
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FotoInmueble we want to update
     *   }
     * })
     */
    upsert<T extends FotoInmuebleUpsertArgs>(args: SelectSubset<T, FotoInmuebleUpsertArgs<ExtArgs>>): Prisma__FotoInmuebleClient<$Result.GetResult<Prisma.$FotoInmueblePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FotoInmuebles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotoInmuebleCountArgs} args - Arguments to filter FotoInmuebles to count.
     * @example
     * // Count the number of FotoInmuebles
     * const count = await prisma.fotoInmueble.count({
     *   where: {
     *     // ... the filter for the FotoInmuebles we want to count
     *   }
     * })
    **/
    count<T extends FotoInmuebleCountArgs>(
      args?: Subset<T, FotoInmuebleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FotoInmuebleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FotoInmueble.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotoInmuebleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FotoInmuebleAggregateArgs>(args: Subset<T, FotoInmuebleAggregateArgs>): Prisma.PrismaPromise<GetFotoInmuebleAggregateType<T>>

    /**
     * Group by FotoInmueble.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotoInmuebleGroupByArgs} args - Group by arguments.
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
      T extends FotoInmuebleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FotoInmuebleGroupByArgs['orderBy'] }
        : { orderBy?: FotoInmuebleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FotoInmuebleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFotoInmuebleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FotoInmueble model
   */
  readonly fields: FotoInmuebleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FotoInmueble.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FotoInmuebleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    property<T extends InmuebleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InmuebleDefaultArgs<ExtArgs>>): Prisma__InmuebleClient<$Result.GetResult<Prisma.$InmueblePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the FotoInmueble model
   */
  interface FotoInmuebleFieldRefs {
    readonly id: FieldRef<"FotoInmueble", 'BigInt'>
    readonly propertyId: FieldRef<"FotoInmueble", 'String'>
    readonly url: FieldRef<"FotoInmueble", 'String'>
    readonly order: FieldRef<"FotoInmueble", 'Int'>
    readonly createdAt: FieldRef<"FotoInmueble", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FotoInmueble findUnique
   */
  export type FotoInmuebleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FotoInmueble
     */
    select?: FotoInmuebleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FotoInmueble
     */
    omit?: FotoInmuebleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoInmuebleInclude<ExtArgs> | null
    /**
     * Filter, which FotoInmueble to fetch.
     */
    where: FotoInmuebleWhereUniqueInput
  }

  /**
   * FotoInmueble findUniqueOrThrow
   */
  export type FotoInmuebleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FotoInmueble
     */
    select?: FotoInmuebleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FotoInmueble
     */
    omit?: FotoInmuebleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoInmuebleInclude<ExtArgs> | null
    /**
     * Filter, which FotoInmueble to fetch.
     */
    where: FotoInmuebleWhereUniqueInput
  }

  /**
   * FotoInmueble findFirst
   */
  export type FotoInmuebleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FotoInmueble
     */
    select?: FotoInmuebleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FotoInmueble
     */
    omit?: FotoInmuebleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoInmuebleInclude<ExtArgs> | null
    /**
     * Filter, which FotoInmueble to fetch.
     */
    where?: FotoInmuebleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FotoInmuebles to fetch.
     */
    orderBy?: FotoInmuebleOrderByWithRelationInput | FotoInmuebleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FotoInmuebles.
     */
    cursor?: FotoInmuebleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FotoInmuebles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FotoInmuebles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FotoInmuebles.
     */
    distinct?: FotoInmuebleScalarFieldEnum | FotoInmuebleScalarFieldEnum[]
  }

  /**
   * FotoInmueble findFirstOrThrow
   */
  export type FotoInmuebleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FotoInmueble
     */
    select?: FotoInmuebleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FotoInmueble
     */
    omit?: FotoInmuebleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoInmuebleInclude<ExtArgs> | null
    /**
     * Filter, which FotoInmueble to fetch.
     */
    where?: FotoInmuebleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FotoInmuebles to fetch.
     */
    orderBy?: FotoInmuebleOrderByWithRelationInput | FotoInmuebleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FotoInmuebles.
     */
    cursor?: FotoInmuebleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FotoInmuebles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FotoInmuebles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FotoInmuebles.
     */
    distinct?: FotoInmuebleScalarFieldEnum | FotoInmuebleScalarFieldEnum[]
  }

  /**
   * FotoInmueble findMany
   */
  export type FotoInmuebleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FotoInmueble
     */
    select?: FotoInmuebleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FotoInmueble
     */
    omit?: FotoInmuebleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoInmuebleInclude<ExtArgs> | null
    /**
     * Filter, which FotoInmuebles to fetch.
     */
    where?: FotoInmuebleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FotoInmuebles to fetch.
     */
    orderBy?: FotoInmuebleOrderByWithRelationInput | FotoInmuebleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FotoInmuebles.
     */
    cursor?: FotoInmuebleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FotoInmuebles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FotoInmuebles.
     */
    skip?: number
    distinct?: FotoInmuebleScalarFieldEnum | FotoInmuebleScalarFieldEnum[]
  }

  /**
   * FotoInmueble create
   */
  export type FotoInmuebleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FotoInmueble
     */
    select?: FotoInmuebleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FotoInmueble
     */
    omit?: FotoInmuebleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoInmuebleInclude<ExtArgs> | null
    /**
     * The data needed to create a FotoInmueble.
     */
    data: XOR<FotoInmuebleCreateInput, FotoInmuebleUncheckedCreateInput>
  }

  /**
   * FotoInmueble createMany
   */
  export type FotoInmuebleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FotoInmuebles.
     */
    data: FotoInmuebleCreateManyInput | FotoInmuebleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FotoInmueble createManyAndReturn
   */
  export type FotoInmuebleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FotoInmueble
     */
    select?: FotoInmuebleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FotoInmueble
     */
    omit?: FotoInmuebleOmit<ExtArgs> | null
    /**
     * The data used to create many FotoInmuebles.
     */
    data: FotoInmuebleCreateManyInput | FotoInmuebleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoInmuebleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FotoInmueble update
   */
  export type FotoInmuebleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FotoInmueble
     */
    select?: FotoInmuebleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FotoInmueble
     */
    omit?: FotoInmuebleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoInmuebleInclude<ExtArgs> | null
    /**
     * The data needed to update a FotoInmueble.
     */
    data: XOR<FotoInmuebleUpdateInput, FotoInmuebleUncheckedUpdateInput>
    /**
     * Choose, which FotoInmueble to update.
     */
    where: FotoInmuebleWhereUniqueInput
  }

  /**
   * FotoInmueble updateMany
   */
  export type FotoInmuebleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FotoInmuebles.
     */
    data: XOR<FotoInmuebleUpdateManyMutationInput, FotoInmuebleUncheckedUpdateManyInput>
    /**
     * Filter which FotoInmuebles to update
     */
    where?: FotoInmuebleWhereInput
    /**
     * Limit how many FotoInmuebles to update.
     */
    limit?: number
  }

  /**
   * FotoInmueble updateManyAndReturn
   */
  export type FotoInmuebleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FotoInmueble
     */
    select?: FotoInmuebleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FotoInmueble
     */
    omit?: FotoInmuebleOmit<ExtArgs> | null
    /**
     * The data used to update FotoInmuebles.
     */
    data: XOR<FotoInmuebleUpdateManyMutationInput, FotoInmuebleUncheckedUpdateManyInput>
    /**
     * Filter which FotoInmuebles to update
     */
    where?: FotoInmuebleWhereInput
    /**
     * Limit how many FotoInmuebles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoInmuebleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FotoInmueble upsert
   */
  export type FotoInmuebleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FotoInmueble
     */
    select?: FotoInmuebleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FotoInmueble
     */
    omit?: FotoInmuebleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoInmuebleInclude<ExtArgs> | null
    /**
     * The filter to search for the FotoInmueble to update in case it exists.
     */
    where: FotoInmuebleWhereUniqueInput
    /**
     * In case the FotoInmueble found by the `where` argument doesn't exist, create a new FotoInmueble with this data.
     */
    create: XOR<FotoInmuebleCreateInput, FotoInmuebleUncheckedCreateInput>
    /**
     * In case the FotoInmueble was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FotoInmuebleUpdateInput, FotoInmuebleUncheckedUpdateInput>
  }

  /**
   * FotoInmueble delete
   */
  export type FotoInmuebleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FotoInmueble
     */
    select?: FotoInmuebleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FotoInmueble
     */
    omit?: FotoInmuebleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoInmuebleInclude<ExtArgs> | null
    /**
     * Filter which FotoInmueble to delete.
     */
    where: FotoInmuebleWhereUniqueInput
  }

  /**
   * FotoInmueble deleteMany
   */
  export type FotoInmuebleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FotoInmuebles to delete
     */
    where?: FotoInmuebleWhereInput
    /**
     * Limit how many FotoInmuebles to delete.
     */
    limit?: number
  }

  /**
   * FotoInmueble without action
   */
  export type FotoInmuebleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FotoInmueble
     */
    select?: FotoInmuebleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FotoInmueble
     */
    omit?: FotoInmuebleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoInmuebleInclude<ExtArgs> | null
  }


  /**
   * Model Resena
   */

  export type AggregateResena = {
    _count: ResenaCountAggregateOutputType | null
    _avg: ResenaAvgAggregateOutputType | null
    _sum: ResenaSumAggregateOutputType | null
    _min: ResenaMinAggregateOutputType | null
    _max: ResenaMaxAggregateOutputType | null
  }

  export type ResenaAvgAggregateOutputType = {
    id: number | null
    rating: number | null
  }

  export type ResenaSumAggregateOutputType = {
    id: bigint | null
    rating: number | null
  }

  export type ResenaMinAggregateOutputType = {
    id: bigint | null
    userId: string | null
    propertyId: string | null
    content: string | null
    rating: number | null
    createdAt: Date | null
  }

  export type ResenaMaxAggregateOutputType = {
    id: bigint | null
    userId: string | null
    propertyId: string | null
    content: string | null
    rating: number | null
    createdAt: Date | null
  }

  export type ResenaCountAggregateOutputType = {
    id: number
    userId: number
    propertyId: number
    content: number
    rating: number
    createdAt: number
    _all: number
  }


  export type ResenaAvgAggregateInputType = {
    id?: true
    rating?: true
  }

  export type ResenaSumAggregateInputType = {
    id?: true
    rating?: true
  }

  export type ResenaMinAggregateInputType = {
    id?: true
    userId?: true
    propertyId?: true
    content?: true
    rating?: true
    createdAt?: true
  }

  export type ResenaMaxAggregateInputType = {
    id?: true
    userId?: true
    propertyId?: true
    content?: true
    rating?: true
    createdAt?: true
  }

  export type ResenaCountAggregateInputType = {
    id?: true
    userId?: true
    propertyId?: true
    content?: true
    rating?: true
    createdAt?: true
    _all?: true
  }

  export type ResenaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resena to aggregate.
     */
    where?: ResenaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resenas to fetch.
     */
    orderBy?: ResenaOrderByWithRelationInput | ResenaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResenaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resenas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resenas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Resenas
    **/
    _count?: true | ResenaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResenaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResenaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResenaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResenaMaxAggregateInputType
  }

  export type GetResenaAggregateType<T extends ResenaAggregateArgs> = {
        [P in keyof T & keyof AggregateResena]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResena[P]>
      : GetScalarType<T[P], AggregateResena[P]>
  }




  export type ResenaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResenaWhereInput
    orderBy?: ResenaOrderByWithAggregationInput | ResenaOrderByWithAggregationInput[]
    by: ResenaScalarFieldEnum[] | ResenaScalarFieldEnum
    having?: ResenaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResenaCountAggregateInputType | true
    _avg?: ResenaAvgAggregateInputType
    _sum?: ResenaSumAggregateInputType
    _min?: ResenaMinAggregateInputType
    _max?: ResenaMaxAggregateInputType
  }

  export type ResenaGroupByOutputType = {
    id: bigint
    userId: string
    propertyId: string
    content: string
    rating: number
    createdAt: Date
    _count: ResenaCountAggregateOutputType | null
    _avg: ResenaAvgAggregateOutputType | null
    _sum: ResenaSumAggregateOutputType | null
    _min: ResenaMinAggregateOutputType | null
    _max: ResenaMaxAggregateOutputType | null
  }

  type GetResenaGroupByPayload<T extends ResenaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResenaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResenaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResenaGroupByOutputType[P]>
            : GetScalarType<T[P], ResenaGroupByOutputType[P]>
        }
      >
    >


  export type ResenaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
<<<<<<< Updated upstream
    usuarioId?: boolean
    inmuebleId?: boolean
    contenido?: boolean
    calificacion?: boolean
    fechaCreacion?: boolean
    inmueble?: boolean | InmuebleDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
=======
    userId?: boolean
    propertyId?: boolean
    content?: boolean
    rating?: boolean
    createdAt?: boolean
    user?: boolean | UsuarioDefaultArgs<ExtArgs>
    property?: boolean | InmuebleDefaultArgs<ExtArgs>
>>>>>>> Stashed changes
  }, ExtArgs["result"]["resena"]>

  export type ResenaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
<<<<<<< Updated upstream
    usuarioId?: boolean
    inmuebleId?: boolean
    contenido?: boolean
    calificacion?: boolean
    fechaCreacion?: boolean
    inmueble?: boolean | InmuebleDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
=======
    userId?: boolean
    propertyId?: boolean
    content?: boolean
    rating?: boolean
    createdAt?: boolean
    user?: boolean | UsuarioDefaultArgs<ExtArgs>
    property?: boolean | InmuebleDefaultArgs<ExtArgs>
>>>>>>> Stashed changes
  }, ExtArgs["result"]["resena"]>

  export type ResenaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
<<<<<<< Updated upstream
    usuarioId?: boolean
    inmuebleId?: boolean
    contenido?: boolean
    calificacion?: boolean
    fechaCreacion?: boolean
    inmueble?: boolean | InmuebleDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
=======
    userId?: boolean
    propertyId?: boolean
    content?: boolean
    rating?: boolean
    createdAt?: boolean
    user?: boolean | UsuarioDefaultArgs<ExtArgs>
    property?: boolean | InmuebleDefaultArgs<ExtArgs>
>>>>>>> Stashed changes
  }, ExtArgs["result"]["resena"]>

  export type ResenaSelectScalar = {
    id?: boolean
    userId?: boolean
    propertyId?: boolean
    content?: boolean
    rating?: boolean
    createdAt?: boolean
  }

  export type ResenaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "propertyId" | "content" | "rating" | "createdAt", ExtArgs["result"]["resena"]>
  export type ResenaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
<<<<<<< Updated upstream
    inmueble?: boolean | InmuebleDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type ResenaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inmueble?: boolean | InmuebleDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type ResenaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inmueble?: boolean | InmuebleDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
=======
    user?: boolean | UsuarioDefaultArgs<ExtArgs>
    property?: boolean | InmuebleDefaultArgs<ExtArgs>
  }
  export type ResenaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsuarioDefaultArgs<ExtArgs>
    property?: boolean | InmuebleDefaultArgs<ExtArgs>
  }
  export type ResenaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsuarioDefaultArgs<ExtArgs>
    property?: boolean | InmuebleDefaultArgs<ExtArgs>
>>>>>>> Stashed changes
  }

  export type $ResenaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Resena"
    objects: {
<<<<<<< Updated upstream
      inmueble: Prisma.$InmueblePayload<ExtArgs>
      usuario: Prisma.$UsuarioPayload<ExtArgs>
=======
      user: Prisma.$UsuarioPayload<ExtArgs>
      property: Prisma.$InmueblePayload<ExtArgs>
>>>>>>> Stashed changes
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      userId: string
      propertyId: string
      content: string
      rating: number
      createdAt: Date
    }, ExtArgs["result"]["resena"]>
    composites: {}
  }

  type ResenaGetPayload<S extends boolean | null | undefined | ResenaDefaultArgs> = $Result.GetResult<Prisma.$ResenaPayload, S>

  type ResenaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ResenaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResenaCountAggregateInputType | true
    }

  export interface ResenaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Resena'], meta: { name: 'Resena' } }
    /**
     * Find zero or one Resena that matches the filter.
     * @param {ResenaFindUniqueArgs} args - Arguments to find a Resena
     * @example
     * // Get one Resena
     * const resena = await prisma.resena.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResenaFindUniqueArgs>(args: SelectSubset<T, ResenaFindUniqueArgs<ExtArgs>>): Prisma__ResenaClient<$Result.GetResult<Prisma.$ResenaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Resena that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ResenaFindUniqueOrThrowArgs} args - Arguments to find a Resena
     * @example
     * // Get one Resena
     * const resena = await prisma.resena.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResenaFindUniqueOrThrowArgs>(args: SelectSubset<T, ResenaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResenaClient<$Result.GetResult<Prisma.$ResenaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resena that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResenaFindFirstArgs} args - Arguments to find a Resena
     * @example
     * // Get one Resena
     * const resena = await prisma.resena.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResenaFindFirstArgs>(args?: SelectSubset<T, ResenaFindFirstArgs<ExtArgs>>): Prisma__ResenaClient<$Result.GetResult<Prisma.$ResenaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resena that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResenaFindFirstOrThrowArgs} args - Arguments to find a Resena
     * @example
     * // Get one Resena
     * const resena = await prisma.resena.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResenaFindFirstOrThrowArgs>(args?: SelectSubset<T, ResenaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResenaClient<$Result.GetResult<Prisma.$ResenaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Resenas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResenaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Resenas
     * const resenas = await prisma.resena.findMany()
     * 
     * // Get first 10 Resenas
     * const resenas = await prisma.resena.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const resenaWithIdOnly = await prisma.resena.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResenaFindManyArgs>(args?: SelectSubset<T, ResenaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResenaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Resena.
     * @param {ResenaCreateArgs} args - Arguments to create a Resena.
     * @example
     * // Create one Resena
     * const Resena = await prisma.resena.create({
     *   data: {
     *     // ... data to create a Resena
     *   }
     * })
     * 
     */
    create<T extends ResenaCreateArgs>(args: SelectSubset<T, ResenaCreateArgs<ExtArgs>>): Prisma__ResenaClient<$Result.GetResult<Prisma.$ResenaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Resenas.
     * @param {ResenaCreateManyArgs} args - Arguments to create many Resenas.
     * @example
     * // Create many Resenas
     * const resena = await prisma.resena.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResenaCreateManyArgs>(args?: SelectSubset<T, ResenaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Resenas and returns the data saved in the database.
     * @param {ResenaCreateManyAndReturnArgs} args - Arguments to create many Resenas.
     * @example
     * // Create many Resenas
     * const resena = await prisma.resena.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Resenas and only return the `id`
     * const resenaWithIdOnly = await prisma.resena.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ResenaCreateManyAndReturnArgs>(args?: SelectSubset<T, ResenaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResenaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Resena.
     * @param {ResenaDeleteArgs} args - Arguments to delete one Resena.
     * @example
     * // Delete one Resena
     * const Resena = await prisma.resena.delete({
     *   where: {
     *     // ... filter to delete one Resena
     *   }
     * })
     * 
     */
    delete<T extends ResenaDeleteArgs>(args: SelectSubset<T, ResenaDeleteArgs<ExtArgs>>): Prisma__ResenaClient<$Result.GetResult<Prisma.$ResenaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Resena.
     * @param {ResenaUpdateArgs} args - Arguments to update one Resena.
     * @example
     * // Update one Resena
     * const resena = await prisma.resena.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResenaUpdateArgs>(args: SelectSubset<T, ResenaUpdateArgs<ExtArgs>>): Prisma__ResenaClient<$Result.GetResult<Prisma.$ResenaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Resenas.
     * @param {ResenaDeleteManyArgs} args - Arguments to filter Resenas to delete.
     * @example
     * // Delete a few Resenas
     * const { count } = await prisma.resena.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResenaDeleteManyArgs>(args?: SelectSubset<T, ResenaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Resenas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResenaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Resenas
     * const resena = await prisma.resena.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResenaUpdateManyArgs>(args: SelectSubset<T, ResenaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Resenas and returns the data updated in the database.
     * @param {ResenaUpdateManyAndReturnArgs} args - Arguments to update many Resenas.
     * @example
     * // Update many Resenas
     * const resena = await prisma.resena.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Resenas and only return the `id`
     * const resenaWithIdOnly = await prisma.resena.updateManyAndReturn({
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
    updateManyAndReturn<T extends ResenaUpdateManyAndReturnArgs>(args: SelectSubset<T, ResenaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResenaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Resena.
     * @param {ResenaUpsertArgs} args - Arguments to update or create a Resena.
     * @example
     * // Update or create a Resena
     * const resena = await prisma.resena.upsert({
     *   create: {
     *     // ... data to create a Resena
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Resena we want to update
     *   }
     * })
     */
    upsert<T extends ResenaUpsertArgs>(args: SelectSubset<T, ResenaUpsertArgs<ExtArgs>>): Prisma__ResenaClient<$Result.GetResult<Prisma.$ResenaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Resenas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResenaCountArgs} args - Arguments to filter Resenas to count.
     * @example
     * // Count the number of Resenas
     * const count = await prisma.resena.count({
     *   where: {
     *     // ... the filter for the Resenas we want to count
     *   }
     * })
    **/
    count<T extends ResenaCountArgs>(
      args?: Subset<T, ResenaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResenaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Resena.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResenaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ResenaAggregateArgs>(args: Subset<T, ResenaAggregateArgs>): Prisma.PrismaPromise<GetResenaAggregateType<T>>

    /**
     * Group by Resena.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResenaGroupByArgs} args - Group by arguments.
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
      T extends ResenaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResenaGroupByArgs['orderBy'] }
        : { orderBy?: ResenaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ResenaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResenaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Resena model
   */
  readonly fields: ResenaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Resena.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResenaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
<<<<<<< Updated upstream
    inmueble<T extends InmuebleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InmuebleDefaultArgs<ExtArgs>>): Prisma__InmuebleClient<$Result.GetResult<Prisma.$InmueblePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
=======
    user<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    property<T extends InmuebleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InmuebleDefaultArgs<ExtArgs>>): Prisma__InmuebleClient<$Result.GetResult<Prisma.$InmueblePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
>>>>>>> Stashed changes
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
   * Fields of the Resena model
   */
  interface ResenaFieldRefs {
    readonly id: FieldRef<"Resena", 'BigInt'>
    readonly userId: FieldRef<"Resena", 'String'>
    readonly propertyId: FieldRef<"Resena", 'String'>
    readonly content: FieldRef<"Resena", 'String'>
    readonly rating: FieldRef<"Resena", 'Int'>
    readonly createdAt: FieldRef<"Resena", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Resena findUnique
   */
  export type ResenaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resena
     */
    select?: ResenaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resena
     */
    omit?: ResenaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResenaInclude<ExtArgs> | null
    /**
     * Filter, which Resena to fetch.
     */
    where: ResenaWhereUniqueInput
  }

  /**
   * Resena findUniqueOrThrow
   */
  export type ResenaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resena
     */
    select?: ResenaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resena
     */
    omit?: ResenaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResenaInclude<ExtArgs> | null
    /**
     * Filter, which Resena to fetch.
     */
    where: ResenaWhereUniqueInput
  }

  /**
   * Resena findFirst
   */
  export type ResenaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resena
     */
    select?: ResenaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resena
     */
    omit?: ResenaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResenaInclude<ExtArgs> | null
    /**
     * Filter, which Resena to fetch.
     */
    where?: ResenaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resenas to fetch.
     */
    orderBy?: ResenaOrderByWithRelationInput | ResenaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Resenas.
     */
    cursor?: ResenaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resenas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resenas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Resenas.
     */
    distinct?: ResenaScalarFieldEnum | ResenaScalarFieldEnum[]
  }

  /**
   * Resena findFirstOrThrow
   */
  export type ResenaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resena
     */
    select?: ResenaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resena
     */
    omit?: ResenaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResenaInclude<ExtArgs> | null
    /**
     * Filter, which Resena to fetch.
     */
    where?: ResenaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resenas to fetch.
     */
    orderBy?: ResenaOrderByWithRelationInput | ResenaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Resenas.
     */
    cursor?: ResenaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resenas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resenas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Resenas.
     */
    distinct?: ResenaScalarFieldEnum | ResenaScalarFieldEnum[]
  }

  /**
   * Resena findMany
   */
  export type ResenaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resena
     */
    select?: ResenaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resena
     */
    omit?: ResenaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResenaInclude<ExtArgs> | null
    /**
     * Filter, which Resenas to fetch.
     */
    where?: ResenaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resenas to fetch.
     */
    orderBy?: ResenaOrderByWithRelationInput | ResenaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Resenas.
     */
    cursor?: ResenaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resenas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resenas.
     */
    skip?: number
    distinct?: ResenaScalarFieldEnum | ResenaScalarFieldEnum[]
  }

  /**
   * Resena create
   */
  export type ResenaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resena
     */
    select?: ResenaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resena
     */
    omit?: ResenaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResenaInclude<ExtArgs> | null
    /**
     * The data needed to create a Resena.
     */
    data: XOR<ResenaCreateInput, ResenaUncheckedCreateInput>
  }

  /**
   * Resena createMany
   */
  export type ResenaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Resenas.
     */
    data: ResenaCreateManyInput | ResenaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Resena createManyAndReturn
   */
  export type ResenaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resena
     */
    select?: ResenaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Resena
     */
    omit?: ResenaOmit<ExtArgs> | null
    /**
     * The data used to create many Resenas.
     */
    data: ResenaCreateManyInput | ResenaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResenaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Resena update
   */
  export type ResenaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resena
     */
    select?: ResenaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resena
     */
    omit?: ResenaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResenaInclude<ExtArgs> | null
    /**
     * The data needed to update a Resena.
     */
    data: XOR<ResenaUpdateInput, ResenaUncheckedUpdateInput>
    /**
     * Choose, which Resena to update.
     */
    where: ResenaWhereUniqueInput
  }

  /**
   * Resena updateMany
   */
  export type ResenaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Resenas.
     */
    data: XOR<ResenaUpdateManyMutationInput, ResenaUncheckedUpdateManyInput>
    /**
     * Filter which Resenas to update
     */
    where?: ResenaWhereInput
    /**
     * Limit how many Resenas to update.
     */
    limit?: number
  }

  /**
   * Resena updateManyAndReturn
   */
  export type ResenaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resena
     */
    select?: ResenaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Resena
     */
    omit?: ResenaOmit<ExtArgs> | null
    /**
     * The data used to update Resenas.
     */
    data: XOR<ResenaUpdateManyMutationInput, ResenaUncheckedUpdateManyInput>
    /**
     * Filter which Resenas to update
     */
    where?: ResenaWhereInput
    /**
     * Limit how many Resenas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResenaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Resena upsert
   */
  export type ResenaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resena
     */
    select?: ResenaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resena
     */
    omit?: ResenaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResenaInclude<ExtArgs> | null
    /**
     * The filter to search for the Resena to update in case it exists.
     */
    where: ResenaWhereUniqueInput
    /**
     * In case the Resena found by the `where` argument doesn't exist, create a new Resena with this data.
     */
    create: XOR<ResenaCreateInput, ResenaUncheckedCreateInput>
    /**
     * In case the Resena was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResenaUpdateInput, ResenaUncheckedUpdateInput>
  }

  /**
   * Resena delete
   */
  export type ResenaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resena
     */
    select?: ResenaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resena
     */
    omit?: ResenaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResenaInclude<ExtArgs> | null
    /**
     * Filter which Resena to delete.
     */
    where: ResenaWhereUniqueInput
  }

  /**
   * Resena deleteMany
   */
  export type ResenaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resenas to delete
     */
    where?: ResenaWhereInput
    /**
     * Limit how many Resenas to delete.
     */
    limit?: number
  }

  /**
   * Resena without action
   */
  export type ResenaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resena
     */
    select?: ResenaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resena
     */
    omit?: ResenaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResenaInclude<ExtArgs> | null
  }


  /**
   * Model Notificacion
   */

  export type AggregateNotificacion = {
    _count: NotificacionCountAggregateOutputType | null
    _min: NotificacionMinAggregateOutputType | null
    _max: NotificacionMaxAggregateOutputType | null
  }

  export type NotificacionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    title: string | null
    content: string | null
    read: boolean | null
    createdAt: Date | null
  }

  export type NotificacionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    title: string | null
    content: string | null
    read: boolean | null
    createdAt: Date | null
  }

  export type NotificacionCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    title: number
    content: number
    read: number
    metadata: number
    createdAt: number
    _all: number
  }


  export type NotificacionMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    title?: true
    content?: true
    read?: true
    createdAt?: true
  }

  export type NotificacionMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    title?: true
    content?: true
    read?: true
    createdAt?: true
  }

  export type NotificacionCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    title?: true
    content?: true
    read?: true
    metadata?: true
    createdAt?: true
    _all?: true
  }

  export type NotificacionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notificacion to aggregate.
     */
    where?: NotificacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notificacions to fetch.
     */
    orderBy?: NotificacionOrderByWithRelationInput | NotificacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notificacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notificacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notificacions
    **/
    _count?: true | NotificacionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificacionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificacionMaxAggregateInputType
  }

  export type GetNotificacionAggregateType<T extends NotificacionAggregateArgs> = {
        [P in keyof T & keyof AggregateNotificacion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotificacion[P]>
      : GetScalarType<T[P], AggregateNotificacion[P]>
  }




  export type NotificacionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificacionWhereInput
    orderBy?: NotificacionOrderByWithAggregationInput | NotificacionOrderByWithAggregationInput[]
    by: NotificacionScalarFieldEnum[] | NotificacionScalarFieldEnum
    having?: NotificacionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificacionCountAggregateInputType | true
    _min?: NotificacionMinAggregateInputType
    _max?: NotificacionMaxAggregateInputType
  }

  export type NotificacionGroupByOutputType = {
    id: string
    userId: string
    type: string
    title: string
    content: string
    read: boolean
    metadata: JsonValue | null
    createdAt: Date
    _count: NotificacionCountAggregateOutputType | null
    _min: NotificacionMinAggregateOutputType | null
    _max: NotificacionMaxAggregateOutputType | null
  }

  type GetNotificacionGroupByPayload<T extends NotificacionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificacionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificacionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificacionGroupByOutputType[P]>
            : GetScalarType<T[P], NotificacionGroupByOutputType[P]>
        }
      >
    >


  export type NotificacionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    title?: boolean
    content?: boolean
    read?: boolean
    metadata?: boolean
    createdAt?: boolean
    user?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notificacion"]>

  export type NotificacionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    title?: boolean
    content?: boolean
    read?: boolean
    metadata?: boolean
    createdAt?: boolean
    user?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notificacion"]>

  export type NotificacionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    title?: boolean
    content?: boolean
    read?: boolean
    metadata?: boolean
    createdAt?: boolean
    user?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notificacion"]>

  export type NotificacionSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    title?: boolean
    content?: boolean
    read?: boolean
    metadata?: boolean
    createdAt?: boolean
  }

  export type NotificacionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "title" | "content" | "read" | "metadata" | "createdAt", ExtArgs["result"]["notificacion"]>
  export type NotificacionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type NotificacionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type NotificacionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $NotificacionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notificacion"
    objects: {
      user: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      title: string
      content: string
      read: boolean
      metadata: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["notificacion"]>
    composites: {}
  }

  type NotificacionGetPayload<S extends boolean | null | undefined | NotificacionDefaultArgs> = $Result.GetResult<Prisma.$NotificacionPayload, S>

  type NotificacionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificacionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificacionCountAggregateInputType | true
    }

  export interface NotificacionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notificacion'], meta: { name: 'Notificacion' } }
    /**
     * Find zero or one Notificacion that matches the filter.
     * @param {NotificacionFindUniqueArgs} args - Arguments to find a Notificacion
     * @example
     * // Get one Notificacion
     * const notificacion = await prisma.notificacion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificacionFindUniqueArgs>(args: SelectSubset<T, NotificacionFindUniqueArgs<ExtArgs>>): Prisma__NotificacionClient<$Result.GetResult<Prisma.$NotificacionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notificacion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificacionFindUniqueOrThrowArgs} args - Arguments to find a Notificacion
     * @example
     * // Get one Notificacion
     * const notificacion = await prisma.notificacion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificacionFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificacionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificacionClient<$Result.GetResult<Prisma.$NotificacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notificacion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacionFindFirstArgs} args - Arguments to find a Notificacion
     * @example
     * // Get one Notificacion
     * const notificacion = await prisma.notificacion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificacionFindFirstArgs>(args?: SelectSubset<T, NotificacionFindFirstArgs<ExtArgs>>): Prisma__NotificacionClient<$Result.GetResult<Prisma.$NotificacionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notificacion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacionFindFirstOrThrowArgs} args - Arguments to find a Notificacion
     * @example
     * // Get one Notificacion
     * const notificacion = await prisma.notificacion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificacionFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificacionFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificacionClient<$Result.GetResult<Prisma.$NotificacionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notificacions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notificacions
     * const notificacions = await prisma.notificacion.findMany()
     * 
     * // Get first 10 Notificacions
     * const notificacions = await prisma.notificacion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificacionWithIdOnly = await prisma.notificacion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificacionFindManyArgs>(args?: SelectSubset<T, NotificacionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notificacion.
     * @param {NotificacionCreateArgs} args - Arguments to create a Notificacion.
     * @example
     * // Create one Notificacion
     * const Notificacion = await prisma.notificacion.create({
     *   data: {
     *     // ... data to create a Notificacion
     *   }
     * })
     * 
     */
    create<T extends NotificacionCreateArgs>(args: SelectSubset<T, NotificacionCreateArgs<ExtArgs>>): Prisma__NotificacionClient<$Result.GetResult<Prisma.$NotificacionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notificacions.
     * @param {NotificacionCreateManyArgs} args - Arguments to create many Notificacions.
     * @example
     * // Create many Notificacions
     * const notificacion = await prisma.notificacion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificacionCreateManyArgs>(args?: SelectSubset<T, NotificacionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notificacions and returns the data saved in the database.
     * @param {NotificacionCreateManyAndReturnArgs} args - Arguments to create many Notificacions.
     * @example
     * // Create many Notificacions
     * const notificacion = await prisma.notificacion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notificacions and only return the `id`
     * const notificacionWithIdOnly = await prisma.notificacion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificacionCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificacionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificacionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notificacion.
     * @param {NotificacionDeleteArgs} args - Arguments to delete one Notificacion.
     * @example
     * // Delete one Notificacion
     * const Notificacion = await prisma.notificacion.delete({
     *   where: {
     *     // ... filter to delete one Notificacion
     *   }
     * })
     * 
     */
    delete<T extends NotificacionDeleteArgs>(args: SelectSubset<T, NotificacionDeleteArgs<ExtArgs>>): Prisma__NotificacionClient<$Result.GetResult<Prisma.$NotificacionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notificacion.
     * @param {NotificacionUpdateArgs} args - Arguments to update one Notificacion.
     * @example
     * // Update one Notificacion
     * const notificacion = await prisma.notificacion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificacionUpdateArgs>(args: SelectSubset<T, NotificacionUpdateArgs<ExtArgs>>): Prisma__NotificacionClient<$Result.GetResult<Prisma.$NotificacionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notificacions.
     * @param {NotificacionDeleteManyArgs} args - Arguments to filter Notificacions to delete.
     * @example
     * // Delete a few Notificacions
     * const { count } = await prisma.notificacion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificacionDeleteManyArgs>(args?: SelectSubset<T, NotificacionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notificacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notificacions
     * const notificacion = await prisma.notificacion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificacionUpdateManyArgs>(args: SelectSubset<T, NotificacionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notificacions and returns the data updated in the database.
     * @param {NotificacionUpdateManyAndReturnArgs} args - Arguments to update many Notificacions.
     * @example
     * // Update many Notificacions
     * const notificacion = await prisma.notificacion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notificacions and only return the `id`
     * const notificacionWithIdOnly = await prisma.notificacion.updateManyAndReturn({
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
    updateManyAndReturn<T extends NotificacionUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificacionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificacionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notificacion.
     * @param {NotificacionUpsertArgs} args - Arguments to update or create a Notificacion.
     * @example
     * // Update or create a Notificacion
     * const notificacion = await prisma.notificacion.upsert({
     *   create: {
     *     // ... data to create a Notificacion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notificacion we want to update
     *   }
     * })
     */
    upsert<T extends NotificacionUpsertArgs>(args: SelectSubset<T, NotificacionUpsertArgs<ExtArgs>>): Prisma__NotificacionClient<$Result.GetResult<Prisma.$NotificacionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notificacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacionCountArgs} args - Arguments to filter Notificacions to count.
     * @example
     * // Count the number of Notificacions
     * const count = await prisma.notificacion.count({
     *   where: {
     *     // ... the filter for the Notificacions we want to count
     *   }
     * })
    **/
    count<T extends NotificacionCountArgs>(
      args?: Subset<T, NotificacionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificacionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notificacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificacionAggregateArgs>(args: Subset<T, NotificacionAggregateArgs>): Prisma.PrismaPromise<GetNotificacionAggregateType<T>>

    /**
     * Group by Notificacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacionGroupByArgs} args - Group by arguments.
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
      T extends NotificacionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificacionGroupByArgs['orderBy'] }
        : { orderBy?: NotificacionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificacionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificacionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notificacion model
   */
  readonly fields: NotificacionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notificacion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificacionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Notificacion model
   */
  interface NotificacionFieldRefs {
    readonly id: FieldRef<"Notificacion", 'String'>
    readonly userId: FieldRef<"Notificacion", 'String'>
    readonly type: FieldRef<"Notificacion", 'String'>
    readonly title: FieldRef<"Notificacion", 'String'>
    readonly content: FieldRef<"Notificacion", 'String'>
    readonly read: FieldRef<"Notificacion", 'Boolean'>
    readonly metadata: FieldRef<"Notificacion", 'Json'>
    readonly createdAt: FieldRef<"Notificacion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notificacion findUnique
   */
  export type NotificacionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacion
     */
    select?: NotificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacion
     */
    omit?: NotificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacionInclude<ExtArgs> | null
    /**
     * Filter, which Notificacion to fetch.
     */
    where: NotificacionWhereUniqueInput
  }

  /**
   * Notificacion findUniqueOrThrow
   */
  export type NotificacionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacion
     */
    select?: NotificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacion
     */
    omit?: NotificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacionInclude<ExtArgs> | null
    /**
     * Filter, which Notificacion to fetch.
     */
    where: NotificacionWhereUniqueInput
  }

  /**
   * Notificacion findFirst
   */
  export type NotificacionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacion
     */
    select?: NotificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacion
     */
    omit?: NotificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacionInclude<ExtArgs> | null
    /**
     * Filter, which Notificacion to fetch.
     */
    where?: NotificacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notificacions to fetch.
     */
    orderBy?: NotificacionOrderByWithRelationInput | NotificacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notificacions.
     */
    cursor?: NotificacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notificacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notificacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notificacions.
     */
    distinct?: NotificacionScalarFieldEnum | NotificacionScalarFieldEnum[]
  }

  /**
   * Notificacion findFirstOrThrow
   */
  export type NotificacionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacion
     */
    select?: NotificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacion
     */
    omit?: NotificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacionInclude<ExtArgs> | null
    /**
     * Filter, which Notificacion to fetch.
     */
    where?: NotificacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notificacions to fetch.
     */
    orderBy?: NotificacionOrderByWithRelationInput | NotificacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notificacions.
     */
    cursor?: NotificacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notificacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notificacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notificacions.
     */
    distinct?: NotificacionScalarFieldEnum | NotificacionScalarFieldEnum[]
  }

  /**
   * Notificacion findMany
   */
  export type NotificacionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacion
     */
    select?: NotificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacion
     */
    omit?: NotificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacionInclude<ExtArgs> | null
    /**
     * Filter, which Notificacions to fetch.
     */
    where?: NotificacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notificacions to fetch.
     */
    orderBy?: NotificacionOrderByWithRelationInput | NotificacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notificacions.
     */
    cursor?: NotificacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notificacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notificacions.
     */
    skip?: number
    distinct?: NotificacionScalarFieldEnum | NotificacionScalarFieldEnum[]
  }

  /**
   * Notificacion create
   */
  export type NotificacionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacion
     */
    select?: NotificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacion
     */
    omit?: NotificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacionInclude<ExtArgs> | null
    /**
     * The data needed to create a Notificacion.
     */
    data: XOR<NotificacionCreateInput, NotificacionUncheckedCreateInput>
  }

  /**
   * Notificacion createMany
   */
  export type NotificacionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notificacions.
     */
    data: NotificacionCreateManyInput | NotificacionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notificacion createManyAndReturn
   */
  export type NotificacionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacion
     */
    select?: NotificacionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacion
     */
    omit?: NotificacionOmit<ExtArgs> | null
    /**
     * The data used to create many Notificacions.
     */
    data: NotificacionCreateManyInput | NotificacionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notificacion update
   */
  export type NotificacionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacion
     */
    select?: NotificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacion
     */
    omit?: NotificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacionInclude<ExtArgs> | null
    /**
     * The data needed to update a Notificacion.
     */
    data: XOR<NotificacionUpdateInput, NotificacionUncheckedUpdateInput>
    /**
     * Choose, which Notificacion to update.
     */
    where: NotificacionWhereUniqueInput
  }

  /**
   * Notificacion updateMany
   */
  export type NotificacionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notificacions.
     */
    data: XOR<NotificacionUpdateManyMutationInput, NotificacionUncheckedUpdateManyInput>
    /**
     * Filter which Notificacions to update
     */
    where?: NotificacionWhereInput
    /**
     * Limit how many Notificacions to update.
     */
    limit?: number
  }

  /**
   * Notificacion updateManyAndReturn
   */
  export type NotificacionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacion
     */
    select?: NotificacionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacion
     */
    omit?: NotificacionOmit<ExtArgs> | null
    /**
     * The data used to update Notificacions.
     */
    data: XOR<NotificacionUpdateManyMutationInput, NotificacionUncheckedUpdateManyInput>
    /**
     * Filter which Notificacions to update
     */
    where?: NotificacionWhereInput
    /**
     * Limit how many Notificacions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notificacion upsert
   */
  export type NotificacionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacion
     */
    select?: NotificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacion
     */
    omit?: NotificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacionInclude<ExtArgs> | null
    /**
     * The filter to search for the Notificacion to update in case it exists.
     */
    where: NotificacionWhereUniqueInput
    /**
     * In case the Notificacion found by the `where` argument doesn't exist, create a new Notificacion with this data.
     */
    create: XOR<NotificacionCreateInput, NotificacionUncheckedCreateInput>
    /**
     * In case the Notificacion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificacionUpdateInput, NotificacionUncheckedUpdateInput>
  }

  /**
   * Notificacion delete
   */
  export type NotificacionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacion
     */
    select?: NotificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacion
     */
    omit?: NotificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacionInclude<ExtArgs> | null
    /**
     * Filter which Notificacion to delete.
     */
    where: NotificacionWhereUniqueInput
  }

  /**
   * Notificacion deleteMany
   */
  export type NotificacionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notificacions to delete
     */
    where?: NotificacionWhereInput
    /**
     * Limit how many Notificacions to delete.
     */
    limit?: number
  }

  /**
   * Notificacion without action
   */
  export type NotificacionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacion
     */
    select?: NotificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacion
     */
    omit?: NotificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacionInclude<ExtArgs> | null
  }


  /**
   * Model Reporte
   */

  export type AggregateReporte = {
    _count: ReporteCountAggregateOutputType | null
    _min: ReporteMinAggregateOutputType | null
    _max: ReporteMaxAggregateOutputType | null
  }

  export type ReporteMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    fileUrl: string | null
    createdAt: Date | null
  }

  export type ReporteMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    fileUrl: string | null
    createdAt: Date | null
  }

  export type ReporteCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    parameters: number
    fileUrl: number
    createdAt: number
    _all: number
  }


  export type ReporteMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    fileUrl?: true
    createdAt?: true
  }

  export type ReporteMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    fileUrl?: true
    createdAt?: true
  }

  export type ReporteCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    parameters?: true
    fileUrl?: true
    createdAt?: true
    _all?: true
  }

  export type ReporteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reporte to aggregate.
     */
    where?: ReporteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reportes to fetch.
     */
    orderBy?: ReporteOrderByWithRelationInput | ReporteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReporteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reportes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reportes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reportes
    **/
    _count?: true | ReporteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReporteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReporteMaxAggregateInputType
  }

  export type GetReporteAggregateType<T extends ReporteAggregateArgs> = {
        [P in keyof T & keyof AggregateReporte]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReporte[P]>
      : GetScalarType<T[P], AggregateReporte[P]>
  }




  export type ReporteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReporteWhereInput
    orderBy?: ReporteOrderByWithAggregationInput | ReporteOrderByWithAggregationInput[]
    by: ReporteScalarFieldEnum[] | ReporteScalarFieldEnum
    having?: ReporteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReporteCountAggregateInputType | true
    _min?: ReporteMinAggregateInputType
    _max?: ReporteMaxAggregateInputType
  }

  export type ReporteGroupByOutputType = {
    id: string
    userId: string
    type: string
    parameters: JsonValue | null
    fileUrl: string | null
    createdAt: Date
    _count: ReporteCountAggregateOutputType | null
    _min: ReporteMinAggregateOutputType | null
    _max: ReporteMaxAggregateOutputType | null
  }

  type GetReporteGroupByPayload<T extends ReporteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReporteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReporteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReporteGroupByOutputType[P]>
            : GetScalarType<T[P], ReporteGroupByOutputType[P]>
        }
      >
    >


  export type ReporteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    parameters?: boolean
    fileUrl?: boolean
    createdAt?: boolean
    user?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reporte"]>

  export type ReporteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    parameters?: boolean
    fileUrl?: boolean
    createdAt?: boolean
    user?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reporte"]>

  export type ReporteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    parameters?: boolean
    fileUrl?: boolean
    createdAt?: boolean
    user?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reporte"]>

  export type ReporteSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    parameters?: boolean
    fileUrl?: boolean
    createdAt?: boolean
  }

  export type ReporteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "parameters" | "fileUrl" | "createdAt", ExtArgs["result"]["reporte"]>
  export type ReporteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type ReporteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type ReporteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $ReportePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reporte"
    objects: {
      user: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      parameters: Prisma.JsonValue | null
      fileUrl: string | null
      createdAt: Date
    }, ExtArgs["result"]["reporte"]>
    composites: {}
  }

  type ReporteGetPayload<S extends boolean | null | undefined | ReporteDefaultArgs> = $Result.GetResult<Prisma.$ReportePayload, S>

  type ReporteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReporteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReporteCountAggregateInputType | true
    }

  export interface ReporteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reporte'], meta: { name: 'Reporte' } }
    /**
     * Find zero or one Reporte that matches the filter.
     * @param {ReporteFindUniqueArgs} args - Arguments to find a Reporte
     * @example
     * // Get one Reporte
     * const reporte = await prisma.reporte.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReporteFindUniqueArgs>(args: SelectSubset<T, ReporteFindUniqueArgs<ExtArgs>>): Prisma__ReporteClient<$Result.GetResult<Prisma.$ReportePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reporte that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReporteFindUniqueOrThrowArgs} args - Arguments to find a Reporte
     * @example
     * // Get one Reporte
     * const reporte = await prisma.reporte.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReporteFindUniqueOrThrowArgs>(args: SelectSubset<T, ReporteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReporteClient<$Result.GetResult<Prisma.$ReportePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reporte that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReporteFindFirstArgs} args - Arguments to find a Reporte
     * @example
     * // Get one Reporte
     * const reporte = await prisma.reporte.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReporteFindFirstArgs>(args?: SelectSubset<T, ReporteFindFirstArgs<ExtArgs>>): Prisma__ReporteClient<$Result.GetResult<Prisma.$ReportePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reporte that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReporteFindFirstOrThrowArgs} args - Arguments to find a Reporte
     * @example
     * // Get one Reporte
     * const reporte = await prisma.reporte.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReporteFindFirstOrThrowArgs>(args?: SelectSubset<T, ReporteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReporteClient<$Result.GetResult<Prisma.$ReportePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reportes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReporteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reportes
     * const reportes = await prisma.reporte.findMany()
     * 
     * // Get first 10 Reportes
     * const reportes = await prisma.reporte.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reporteWithIdOnly = await prisma.reporte.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReporteFindManyArgs>(args?: SelectSubset<T, ReporteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reporte.
     * @param {ReporteCreateArgs} args - Arguments to create a Reporte.
     * @example
     * // Create one Reporte
     * const Reporte = await prisma.reporte.create({
     *   data: {
     *     // ... data to create a Reporte
     *   }
     * })
     * 
     */
    create<T extends ReporteCreateArgs>(args: SelectSubset<T, ReporteCreateArgs<ExtArgs>>): Prisma__ReporteClient<$Result.GetResult<Prisma.$ReportePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reportes.
     * @param {ReporteCreateManyArgs} args - Arguments to create many Reportes.
     * @example
     * // Create many Reportes
     * const reporte = await prisma.reporte.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReporteCreateManyArgs>(args?: SelectSubset<T, ReporteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reportes and returns the data saved in the database.
     * @param {ReporteCreateManyAndReturnArgs} args - Arguments to create many Reportes.
     * @example
     * // Create many Reportes
     * const reporte = await prisma.reporte.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reportes and only return the `id`
     * const reporteWithIdOnly = await prisma.reporte.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReporteCreateManyAndReturnArgs>(args?: SelectSubset<T, ReporteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reporte.
     * @param {ReporteDeleteArgs} args - Arguments to delete one Reporte.
     * @example
     * // Delete one Reporte
     * const Reporte = await prisma.reporte.delete({
     *   where: {
     *     // ... filter to delete one Reporte
     *   }
     * })
     * 
     */
    delete<T extends ReporteDeleteArgs>(args: SelectSubset<T, ReporteDeleteArgs<ExtArgs>>): Prisma__ReporteClient<$Result.GetResult<Prisma.$ReportePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reporte.
     * @param {ReporteUpdateArgs} args - Arguments to update one Reporte.
     * @example
     * // Update one Reporte
     * const reporte = await prisma.reporte.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReporteUpdateArgs>(args: SelectSubset<T, ReporteUpdateArgs<ExtArgs>>): Prisma__ReporteClient<$Result.GetResult<Prisma.$ReportePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reportes.
     * @param {ReporteDeleteManyArgs} args - Arguments to filter Reportes to delete.
     * @example
     * // Delete a few Reportes
     * const { count } = await prisma.reporte.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReporteDeleteManyArgs>(args?: SelectSubset<T, ReporteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reportes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReporteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reportes
     * const reporte = await prisma.reporte.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReporteUpdateManyArgs>(args: SelectSubset<T, ReporteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reportes and returns the data updated in the database.
     * @param {ReporteUpdateManyAndReturnArgs} args - Arguments to update many Reportes.
     * @example
     * // Update many Reportes
     * const reporte = await prisma.reporte.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reportes and only return the `id`
     * const reporteWithIdOnly = await prisma.reporte.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReporteUpdateManyAndReturnArgs>(args: SelectSubset<T, ReporteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reporte.
     * @param {ReporteUpsertArgs} args - Arguments to update or create a Reporte.
     * @example
     * // Update or create a Reporte
     * const reporte = await prisma.reporte.upsert({
     *   create: {
     *     // ... data to create a Reporte
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reporte we want to update
     *   }
     * })
     */
    upsert<T extends ReporteUpsertArgs>(args: SelectSubset<T, ReporteUpsertArgs<ExtArgs>>): Prisma__ReporteClient<$Result.GetResult<Prisma.$ReportePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reportes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReporteCountArgs} args - Arguments to filter Reportes to count.
     * @example
     * // Count the number of Reportes
     * const count = await prisma.reporte.count({
     *   where: {
     *     // ... the filter for the Reportes we want to count
     *   }
     * })
    **/
    count<T extends ReporteCountArgs>(
      args?: Subset<T, ReporteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReporteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reporte.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReporteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReporteAggregateArgs>(args: Subset<T, ReporteAggregateArgs>): Prisma.PrismaPromise<GetReporteAggregateType<T>>

    /**
     * Group by Reporte.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReporteGroupByArgs} args - Group by arguments.
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
      T extends ReporteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReporteGroupByArgs['orderBy'] }
        : { orderBy?: ReporteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReporteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReporteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reporte model
   */
  readonly fields: ReporteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reporte.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReporteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Reporte model
   */
  interface ReporteFieldRefs {
    readonly id: FieldRef<"Reporte", 'String'>
    readonly userId: FieldRef<"Reporte", 'String'>
    readonly type: FieldRef<"Reporte", 'String'>
    readonly parameters: FieldRef<"Reporte", 'Json'>
    readonly fileUrl: FieldRef<"Reporte", 'String'>
    readonly createdAt: FieldRef<"Reporte", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Reporte findUnique
   */
  export type ReporteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reporte
     */
    select?: ReporteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reporte
     */
    omit?: ReporteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReporteInclude<ExtArgs> | null
    /**
     * Filter, which Reporte to fetch.
     */
    where: ReporteWhereUniqueInput
  }

  /**
   * Reporte findUniqueOrThrow
   */
  export type ReporteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reporte
     */
    select?: ReporteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reporte
     */
    omit?: ReporteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReporteInclude<ExtArgs> | null
    /**
     * Filter, which Reporte to fetch.
     */
    where: ReporteWhereUniqueInput
  }

  /**
   * Reporte findFirst
   */
  export type ReporteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reporte
     */
    select?: ReporteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reporte
     */
    omit?: ReporteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReporteInclude<ExtArgs> | null
    /**
     * Filter, which Reporte to fetch.
     */
    where?: ReporteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reportes to fetch.
     */
    orderBy?: ReporteOrderByWithRelationInput | ReporteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reportes.
     */
    cursor?: ReporteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reportes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reportes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reportes.
     */
    distinct?: ReporteScalarFieldEnum | ReporteScalarFieldEnum[]
  }

  /**
   * Reporte findFirstOrThrow
   */
  export type ReporteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reporte
     */
    select?: ReporteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reporte
     */
    omit?: ReporteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReporteInclude<ExtArgs> | null
    /**
     * Filter, which Reporte to fetch.
     */
    where?: ReporteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reportes to fetch.
     */
    orderBy?: ReporteOrderByWithRelationInput | ReporteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reportes.
     */
    cursor?: ReporteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reportes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reportes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reportes.
     */
    distinct?: ReporteScalarFieldEnum | ReporteScalarFieldEnum[]
  }

  /**
   * Reporte findMany
   */
  export type ReporteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reporte
     */
    select?: ReporteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reporte
     */
    omit?: ReporteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReporteInclude<ExtArgs> | null
    /**
     * Filter, which Reportes to fetch.
     */
    where?: ReporteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reportes to fetch.
     */
    orderBy?: ReporteOrderByWithRelationInput | ReporteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reportes.
     */
    cursor?: ReporteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reportes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reportes.
     */
    skip?: number
    distinct?: ReporteScalarFieldEnum | ReporteScalarFieldEnum[]
  }

  /**
   * Reporte create
   */
  export type ReporteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reporte
     */
    select?: ReporteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reporte
     */
    omit?: ReporteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReporteInclude<ExtArgs> | null
    /**
     * The data needed to create a Reporte.
     */
    data: XOR<ReporteCreateInput, ReporteUncheckedCreateInput>
  }

  /**
   * Reporte createMany
   */
  export type ReporteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reportes.
     */
    data: ReporteCreateManyInput | ReporteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reporte createManyAndReturn
   */
  export type ReporteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reporte
     */
    select?: ReporteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reporte
     */
    omit?: ReporteOmit<ExtArgs> | null
    /**
     * The data used to create many Reportes.
     */
    data: ReporteCreateManyInput | ReporteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReporteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reporte update
   */
  export type ReporteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reporte
     */
    select?: ReporteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reporte
     */
    omit?: ReporteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReporteInclude<ExtArgs> | null
    /**
     * The data needed to update a Reporte.
     */
    data: XOR<ReporteUpdateInput, ReporteUncheckedUpdateInput>
    /**
     * Choose, which Reporte to update.
     */
    where: ReporteWhereUniqueInput
  }

  /**
   * Reporte updateMany
   */
  export type ReporteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reportes.
     */
    data: XOR<ReporteUpdateManyMutationInput, ReporteUncheckedUpdateManyInput>
    /**
     * Filter which Reportes to update
     */
    where?: ReporteWhereInput
    /**
     * Limit how many Reportes to update.
     */
    limit?: number
  }

  /**
   * Reporte updateManyAndReturn
   */
  export type ReporteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reporte
     */
    select?: ReporteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reporte
     */
    omit?: ReporteOmit<ExtArgs> | null
    /**
     * The data used to update Reportes.
     */
    data: XOR<ReporteUpdateManyMutationInput, ReporteUncheckedUpdateManyInput>
    /**
     * Filter which Reportes to update
     */
    where?: ReporteWhereInput
    /**
     * Limit how many Reportes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReporteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reporte upsert
   */
  export type ReporteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reporte
     */
    select?: ReporteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reporte
     */
    omit?: ReporteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReporteInclude<ExtArgs> | null
    /**
     * The filter to search for the Reporte to update in case it exists.
     */
    where: ReporteWhereUniqueInput
    /**
     * In case the Reporte found by the `where` argument doesn't exist, create a new Reporte with this data.
     */
    create: XOR<ReporteCreateInput, ReporteUncheckedCreateInput>
    /**
     * In case the Reporte was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReporteUpdateInput, ReporteUncheckedUpdateInput>
  }

  /**
   * Reporte delete
   */
  export type ReporteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reporte
     */
    select?: ReporteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reporte
     */
    omit?: ReporteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReporteInclude<ExtArgs> | null
    /**
     * Filter which Reporte to delete.
     */
    where: ReporteWhereUniqueInput
  }

  /**
   * Reporte deleteMany
   */
  export type ReporteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reportes to delete
     */
    where?: ReporteWhereInput
    /**
     * Limit how many Reportes to delete.
     */
    limit?: number
  }

  /**
   * Reporte without action
   */
  export type ReporteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reporte
     */
    select?: ReporteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reporte
     */
    omit?: ReporteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReporteInclude<ExtArgs> | null
  }


  /**
   * Model Favorito
   */

  export type AggregateFavorito = {
    _count: FavoritoCountAggregateOutputType | null
    _min: FavoritoMinAggregateOutputType | null
    _max: FavoritoMaxAggregateOutputType | null
  }

  export type FavoritoMinAggregateOutputType = {
    id: string | null
    userId: string | null
    propertyId: string | null
    createdAt: Date | null
  }

  export type FavoritoMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    propertyId: string | null
    createdAt: Date | null
  }

  export type FavoritoCountAggregateOutputType = {
    id: number
    userId: number
    propertyId: number
    createdAt: number
    _all: number
  }


  export type FavoritoMinAggregateInputType = {
    id?: true
    userId?: true
    propertyId?: true
    createdAt?: true
  }

  export type FavoritoMaxAggregateInputType = {
    id?: true
    userId?: true
    propertyId?: true
    createdAt?: true
  }

  export type FavoritoCountAggregateInputType = {
    id?: true
    userId?: true
    propertyId?: true
    createdAt?: true
    _all?: true
  }

  export type FavoritoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Favorito to aggregate.
     */
    where?: FavoritoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favoritos to fetch.
     */
    orderBy?: FavoritoOrderByWithRelationInput | FavoritoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FavoritoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favoritos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favoritos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Favoritos
    **/
    _count?: true | FavoritoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FavoritoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FavoritoMaxAggregateInputType
  }

  export type GetFavoritoAggregateType<T extends FavoritoAggregateArgs> = {
        [P in keyof T & keyof AggregateFavorito]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFavorito[P]>
      : GetScalarType<T[P], AggregateFavorito[P]>
  }




  export type FavoritoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoritoWhereInput
    orderBy?: FavoritoOrderByWithAggregationInput | FavoritoOrderByWithAggregationInput[]
    by: FavoritoScalarFieldEnum[] | FavoritoScalarFieldEnum
    having?: FavoritoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FavoritoCountAggregateInputType | true
    _min?: FavoritoMinAggregateInputType
    _max?: FavoritoMaxAggregateInputType
  }

  export type FavoritoGroupByOutputType = {
    id: string
    userId: string
    propertyId: string
    createdAt: Date
    _count: FavoritoCountAggregateOutputType | null
    _min: FavoritoMinAggregateOutputType | null
    _max: FavoritoMaxAggregateOutputType | null
  }

  type GetFavoritoGroupByPayload<T extends FavoritoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FavoritoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FavoritoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FavoritoGroupByOutputType[P]>
            : GetScalarType<T[P], FavoritoGroupByOutputType[P]>
        }
      >
    >


  export type FavoritoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
<<<<<<< Updated upstream
    usuarioId?: boolean
    inmuebleId?: boolean
    fechaCreacion?: boolean
    inmueble?: boolean | InmuebleDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
=======
    userId?: boolean
    propertyId?: boolean
    createdAt?: boolean
    user?: boolean | UsuarioDefaultArgs<ExtArgs>
    property?: boolean | InmuebleDefaultArgs<ExtArgs>
>>>>>>> Stashed changes
  }, ExtArgs["result"]["favorito"]>

  export type FavoritoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
<<<<<<< Updated upstream
    usuarioId?: boolean
    inmuebleId?: boolean
    fechaCreacion?: boolean
    inmueble?: boolean | InmuebleDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
=======
    userId?: boolean
    propertyId?: boolean
    createdAt?: boolean
    user?: boolean | UsuarioDefaultArgs<ExtArgs>
    property?: boolean | InmuebleDefaultArgs<ExtArgs>
>>>>>>> Stashed changes
  }, ExtArgs["result"]["favorito"]>

  export type FavoritoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
<<<<<<< Updated upstream
    usuarioId?: boolean
    inmuebleId?: boolean
    fechaCreacion?: boolean
    inmueble?: boolean | InmuebleDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
=======
    userId?: boolean
    propertyId?: boolean
    createdAt?: boolean
    user?: boolean | UsuarioDefaultArgs<ExtArgs>
    property?: boolean | InmuebleDefaultArgs<ExtArgs>
>>>>>>> Stashed changes
  }, ExtArgs["result"]["favorito"]>

  export type FavoritoSelectScalar = {
    id?: boolean
    userId?: boolean
    propertyId?: boolean
    createdAt?: boolean
  }

  export type FavoritoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "propertyId" | "createdAt", ExtArgs["result"]["favorito"]>
  export type FavoritoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
<<<<<<< Updated upstream
    inmueble?: boolean | InmuebleDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type FavoritoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inmueble?: boolean | InmuebleDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type FavoritoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inmueble?: boolean | InmuebleDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
=======
    user?: boolean | UsuarioDefaultArgs<ExtArgs>
    property?: boolean | InmuebleDefaultArgs<ExtArgs>
  }
  export type FavoritoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsuarioDefaultArgs<ExtArgs>
    property?: boolean | InmuebleDefaultArgs<ExtArgs>
  }
  export type FavoritoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsuarioDefaultArgs<ExtArgs>
    property?: boolean | InmuebleDefaultArgs<ExtArgs>
>>>>>>> Stashed changes
  }

  export type $FavoritoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Favorito"
    objects: {
<<<<<<< Updated upstream
      inmueble: Prisma.$InmueblePayload<ExtArgs>
      usuario: Prisma.$UsuarioPayload<ExtArgs>
=======
      user: Prisma.$UsuarioPayload<ExtArgs>
      property: Prisma.$InmueblePayload<ExtArgs>
>>>>>>> Stashed changes
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      propertyId: string
      createdAt: Date
    }, ExtArgs["result"]["favorito"]>
    composites: {}
  }

  type FavoritoGetPayload<S extends boolean | null | undefined | FavoritoDefaultArgs> = $Result.GetResult<Prisma.$FavoritoPayload, S>

  type FavoritoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FavoritoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FavoritoCountAggregateInputType | true
    }

  export interface FavoritoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Favorito'], meta: { name: 'Favorito' } }
    /**
     * Find zero or one Favorito that matches the filter.
     * @param {FavoritoFindUniqueArgs} args - Arguments to find a Favorito
     * @example
     * // Get one Favorito
     * const favorito = await prisma.favorito.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FavoritoFindUniqueArgs>(args: SelectSubset<T, FavoritoFindUniqueArgs<ExtArgs>>): Prisma__FavoritoClient<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Favorito that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FavoritoFindUniqueOrThrowArgs} args - Arguments to find a Favorito
     * @example
     * // Get one Favorito
     * const favorito = await prisma.favorito.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FavoritoFindUniqueOrThrowArgs>(args: SelectSubset<T, FavoritoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FavoritoClient<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Favorito that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritoFindFirstArgs} args - Arguments to find a Favorito
     * @example
     * // Get one Favorito
     * const favorito = await prisma.favorito.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FavoritoFindFirstArgs>(args?: SelectSubset<T, FavoritoFindFirstArgs<ExtArgs>>): Prisma__FavoritoClient<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Favorito that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritoFindFirstOrThrowArgs} args - Arguments to find a Favorito
     * @example
     * // Get one Favorito
     * const favorito = await prisma.favorito.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FavoritoFindFirstOrThrowArgs>(args?: SelectSubset<T, FavoritoFindFirstOrThrowArgs<ExtArgs>>): Prisma__FavoritoClient<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Favoritos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Favoritos
     * const favoritos = await prisma.favorito.findMany()
     * 
     * // Get first 10 Favoritos
     * const favoritos = await prisma.favorito.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const favoritoWithIdOnly = await prisma.favorito.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FavoritoFindManyArgs>(args?: SelectSubset<T, FavoritoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Favorito.
     * @param {FavoritoCreateArgs} args - Arguments to create a Favorito.
     * @example
     * // Create one Favorito
     * const Favorito = await prisma.favorito.create({
     *   data: {
     *     // ... data to create a Favorito
     *   }
     * })
     * 
     */
    create<T extends FavoritoCreateArgs>(args: SelectSubset<T, FavoritoCreateArgs<ExtArgs>>): Prisma__FavoritoClient<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Favoritos.
     * @param {FavoritoCreateManyArgs} args - Arguments to create many Favoritos.
     * @example
     * // Create many Favoritos
     * const favorito = await prisma.favorito.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FavoritoCreateManyArgs>(args?: SelectSubset<T, FavoritoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Favoritos and returns the data saved in the database.
     * @param {FavoritoCreateManyAndReturnArgs} args - Arguments to create many Favoritos.
     * @example
     * // Create many Favoritos
     * const favorito = await prisma.favorito.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Favoritos and only return the `id`
     * const favoritoWithIdOnly = await prisma.favorito.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FavoritoCreateManyAndReturnArgs>(args?: SelectSubset<T, FavoritoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Favorito.
     * @param {FavoritoDeleteArgs} args - Arguments to delete one Favorito.
     * @example
     * // Delete one Favorito
     * const Favorito = await prisma.favorito.delete({
     *   where: {
     *     // ... filter to delete one Favorito
     *   }
     * })
     * 
     */
    delete<T extends FavoritoDeleteArgs>(args: SelectSubset<T, FavoritoDeleteArgs<ExtArgs>>): Prisma__FavoritoClient<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Favorito.
     * @param {FavoritoUpdateArgs} args - Arguments to update one Favorito.
     * @example
     * // Update one Favorito
     * const favorito = await prisma.favorito.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FavoritoUpdateArgs>(args: SelectSubset<T, FavoritoUpdateArgs<ExtArgs>>): Prisma__FavoritoClient<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Favoritos.
     * @param {FavoritoDeleteManyArgs} args - Arguments to filter Favoritos to delete.
     * @example
     * // Delete a few Favoritos
     * const { count } = await prisma.favorito.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FavoritoDeleteManyArgs>(args?: SelectSubset<T, FavoritoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Favoritos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Favoritos
     * const favorito = await prisma.favorito.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FavoritoUpdateManyArgs>(args: SelectSubset<T, FavoritoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Favoritos and returns the data updated in the database.
     * @param {FavoritoUpdateManyAndReturnArgs} args - Arguments to update many Favoritos.
     * @example
     * // Update many Favoritos
     * const favorito = await prisma.favorito.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Favoritos and only return the `id`
     * const favoritoWithIdOnly = await prisma.favorito.updateManyAndReturn({
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
    updateManyAndReturn<T extends FavoritoUpdateManyAndReturnArgs>(args: SelectSubset<T, FavoritoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Favorito.
     * @param {FavoritoUpsertArgs} args - Arguments to update or create a Favorito.
     * @example
     * // Update or create a Favorito
     * const favorito = await prisma.favorito.upsert({
     *   create: {
     *     // ... data to create a Favorito
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Favorito we want to update
     *   }
     * })
     */
    upsert<T extends FavoritoUpsertArgs>(args: SelectSubset<T, FavoritoUpsertArgs<ExtArgs>>): Prisma__FavoritoClient<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Favoritos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritoCountArgs} args - Arguments to filter Favoritos to count.
     * @example
     * // Count the number of Favoritos
     * const count = await prisma.favorito.count({
     *   where: {
     *     // ... the filter for the Favoritos we want to count
     *   }
     * })
    **/
    count<T extends FavoritoCountArgs>(
      args?: Subset<T, FavoritoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FavoritoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Favorito.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FavoritoAggregateArgs>(args: Subset<T, FavoritoAggregateArgs>): Prisma.PrismaPromise<GetFavoritoAggregateType<T>>

    /**
     * Group by Favorito.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritoGroupByArgs} args - Group by arguments.
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
      T extends FavoritoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FavoritoGroupByArgs['orderBy'] }
        : { orderBy?: FavoritoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FavoritoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFavoritoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Favorito model
   */
  readonly fields: FavoritoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Favorito.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FavoritoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
<<<<<<< Updated upstream
    inmueble<T extends InmuebleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InmuebleDefaultArgs<ExtArgs>>): Prisma__InmuebleClient<$Result.GetResult<Prisma.$InmueblePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
=======
    user<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    property<T extends InmuebleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InmuebleDefaultArgs<ExtArgs>>): Prisma__InmuebleClient<$Result.GetResult<Prisma.$InmueblePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
>>>>>>> Stashed changes
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
   * Fields of the Favorito model
   */
  interface FavoritoFieldRefs {
    readonly id: FieldRef<"Favorito", 'String'>
    readonly userId: FieldRef<"Favorito", 'String'>
    readonly propertyId: FieldRef<"Favorito", 'String'>
    readonly createdAt: FieldRef<"Favorito", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Favorito findUnique
   */
  export type FavoritoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    /**
     * Filter, which Favorito to fetch.
     */
    where: FavoritoWhereUniqueInput
  }

  /**
   * Favorito findUniqueOrThrow
   */
  export type FavoritoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    /**
     * Filter, which Favorito to fetch.
     */
    where: FavoritoWhereUniqueInput
  }

  /**
   * Favorito findFirst
   */
  export type FavoritoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    /**
     * Filter, which Favorito to fetch.
     */
    where?: FavoritoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favoritos to fetch.
     */
    orderBy?: FavoritoOrderByWithRelationInput | FavoritoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Favoritos.
     */
    cursor?: FavoritoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favoritos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favoritos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Favoritos.
     */
    distinct?: FavoritoScalarFieldEnum | FavoritoScalarFieldEnum[]
  }

  /**
   * Favorito findFirstOrThrow
   */
  export type FavoritoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    /**
     * Filter, which Favorito to fetch.
     */
    where?: FavoritoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favoritos to fetch.
     */
    orderBy?: FavoritoOrderByWithRelationInput | FavoritoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Favoritos.
     */
    cursor?: FavoritoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favoritos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favoritos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Favoritos.
     */
    distinct?: FavoritoScalarFieldEnum | FavoritoScalarFieldEnum[]
  }

  /**
   * Favorito findMany
   */
  export type FavoritoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    /**
     * Filter, which Favoritos to fetch.
     */
    where?: FavoritoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favoritos to fetch.
     */
    orderBy?: FavoritoOrderByWithRelationInput | FavoritoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Favoritos.
     */
    cursor?: FavoritoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favoritos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favoritos.
     */
    skip?: number
    distinct?: FavoritoScalarFieldEnum | FavoritoScalarFieldEnum[]
  }

  /**
   * Favorito create
   */
  export type FavoritoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    /**
     * The data needed to create a Favorito.
     */
    data: XOR<FavoritoCreateInput, FavoritoUncheckedCreateInput>
  }

  /**
   * Favorito createMany
   */
  export type FavoritoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Favoritos.
     */
    data: FavoritoCreateManyInput | FavoritoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Favorito createManyAndReturn
   */
  export type FavoritoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * The data used to create many Favoritos.
     */
    data: FavoritoCreateManyInput | FavoritoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Favorito update
   */
  export type FavoritoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    /**
     * The data needed to update a Favorito.
     */
    data: XOR<FavoritoUpdateInput, FavoritoUncheckedUpdateInput>
    /**
     * Choose, which Favorito to update.
     */
    where: FavoritoWhereUniqueInput
  }

  /**
   * Favorito updateMany
   */
  export type FavoritoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Favoritos.
     */
    data: XOR<FavoritoUpdateManyMutationInput, FavoritoUncheckedUpdateManyInput>
    /**
     * Filter which Favoritos to update
     */
    where?: FavoritoWhereInput
    /**
     * Limit how many Favoritos to update.
     */
    limit?: number
  }

  /**
   * Favorito updateManyAndReturn
   */
  export type FavoritoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * The data used to update Favoritos.
     */
    data: XOR<FavoritoUpdateManyMutationInput, FavoritoUncheckedUpdateManyInput>
    /**
     * Filter which Favoritos to update
     */
    where?: FavoritoWhereInput
    /**
     * Limit how many Favoritos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Favorito upsert
   */
  export type FavoritoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    /**
     * The filter to search for the Favorito to update in case it exists.
     */
    where: FavoritoWhereUniqueInput
    /**
     * In case the Favorito found by the `where` argument doesn't exist, create a new Favorito with this data.
     */
    create: XOR<FavoritoCreateInput, FavoritoUncheckedCreateInput>
    /**
     * In case the Favorito was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FavoritoUpdateInput, FavoritoUncheckedUpdateInput>
  }

  /**
   * Favorito delete
   */
  export type FavoritoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    /**
     * Filter which Favorito to delete.
     */
    where: FavoritoWhereUniqueInput
  }

  /**
   * Favorito deleteMany
   */
  export type FavoritoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Favoritos to delete
     */
    where?: FavoritoWhereInput
    /**
     * Limit how many Favoritos to delete.
     */
    limit?: number
  }

  /**
   * Favorito without action
   */
  export type FavoritoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
  }


  /**
   * Model BusquedaGuardada
   */

  export type AggregateBusquedaGuardada = {
    _count: BusquedaGuardadaCountAggregateOutputType | null
    _min: BusquedaGuardadaMinAggregateOutputType | null
    _max: BusquedaGuardadaMaxAggregateOutputType | null
  }

  export type BusquedaGuardadaMinAggregateOutputType = {
    id: string | null
    userId: string | null
    searchName: string | null
    createdAt: Date | null
  }

  export type BusquedaGuardadaMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    searchName: string | null
    createdAt: Date | null
  }

  export type BusquedaGuardadaCountAggregateOutputType = {
    id: number
    userId: number
    searchParameters: number
    searchName: number
    createdAt: number
    _all: number
  }


  export type BusquedaGuardadaMinAggregateInputType = {
    id?: true
    userId?: true
    searchName?: true
    createdAt?: true
  }

  export type BusquedaGuardadaMaxAggregateInputType = {
    id?: true
    userId?: true
    searchName?: true
    createdAt?: true
  }

  export type BusquedaGuardadaCountAggregateInputType = {
    id?: true
    userId?: true
    searchParameters?: true
    searchName?: true
    createdAt?: true
    _all?: true
  }

  export type BusquedaGuardadaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BusquedaGuardada to aggregate.
     */
    where?: BusquedaGuardadaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusquedaGuardadas to fetch.
     */
    orderBy?: BusquedaGuardadaOrderByWithRelationInput | BusquedaGuardadaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BusquedaGuardadaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusquedaGuardadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusquedaGuardadas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BusquedaGuardadas
    **/
    _count?: true | BusquedaGuardadaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BusquedaGuardadaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BusquedaGuardadaMaxAggregateInputType
  }

  export type GetBusquedaGuardadaAggregateType<T extends BusquedaGuardadaAggregateArgs> = {
        [P in keyof T & keyof AggregateBusquedaGuardada]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBusquedaGuardada[P]>
      : GetScalarType<T[P], AggregateBusquedaGuardada[P]>
  }




  export type BusquedaGuardadaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BusquedaGuardadaWhereInput
    orderBy?: BusquedaGuardadaOrderByWithAggregationInput | BusquedaGuardadaOrderByWithAggregationInput[]
    by: BusquedaGuardadaScalarFieldEnum[] | BusquedaGuardadaScalarFieldEnum
    having?: BusquedaGuardadaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BusquedaGuardadaCountAggregateInputType | true
    _min?: BusquedaGuardadaMinAggregateInputType
    _max?: BusquedaGuardadaMaxAggregateInputType
  }

  export type BusquedaGuardadaGroupByOutputType = {
    id: string
    userId: string
    searchParameters: JsonValue
    searchName: string | null
    createdAt: Date
    _count: BusquedaGuardadaCountAggregateOutputType | null
    _min: BusquedaGuardadaMinAggregateOutputType | null
    _max: BusquedaGuardadaMaxAggregateOutputType | null
  }

  type GetBusquedaGuardadaGroupByPayload<T extends BusquedaGuardadaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BusquedaGuardadaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BusquedaGuardadaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BusquedaGuardadaGroupByOutputType[P]>
            : GetScalarType<T[P], BusquedaGuardadaGroupByOutputType[P]>
        }
      >
    >


  export type BusquedaGuardadaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    searchParameters?: boolean
    searchName?: boolean
    createdAt?: boolean
    user?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["busquedaGuardada"]>

  export type BusquedaGuardadaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    searchParameters?: boolean
    searchName?: boolean
    createdAt?: boolean
    user?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["busquedaGuardada"]>

  export type BusquedaGuardadaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    searchParameters?: boolean
    searchName?: boolean
    createdAt?: boolean
    user?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["busquedaGuardada"]>

  export type BusquedaGuardadaSelectScalar = {
    id?: boolean
    userId?: boolean
    searchParameters?: boolean
    searchName?: boolean
    createdAt?: boolean
  }

  export type BusquedaGuardadaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "searchParameters" | "searchName" | "createdAt", ExtArgs["result"]["busquedaGuardada"]>
  export type BusquedaGuardadaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type BusquedaGuardadaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type BusquedaGuardadaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $BusquedaGuardadaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BusquedaGuardada"
    objects: {
      user: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      searchParameters: Prisma.JsonValue
      searchName: string | null
      createdAt: Date
    }, ExtArgs["result"]["busquedaGuardada"]>
    composites: {}
  }

  type BusquedaGuardadaGetPayload<S extends boolean | null | undefined | BusquedaGuardadaDefaultArgs> = $Result.GetResult<Prisma.$BusquedaGuardadaPayload, S>

  type BusquedaGuardadaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BusquedaGuardadaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BusquedaGuardadaCountAggregateInputType | true
    }

  export interface BusquedaGuardadaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BusquedaGuardada'], meta: { name: 'BusquedaGuardada' } }
    /**
     * Find zero or one BusquedaGuardada that matches the filter.
     * @param {BusquedaGuardadaFindUniqueArgs} args - Arguments to find a BusquedaGuardada
     * @example
     * // Get one BusquedaGuardada
     * const busquedaGuardada = await prisma.busquedaGuardada.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BusquedaGuardadaFindUniqueArgs>(args: SelectSubset<T, BusquedaGuardadaFindUniqueArgs<ExtArgs>>): Prisma__BusquedaGuardadaClient<$Result.GetResult<Prisma.$BusquedaGuardadaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BusquedaGuardada that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BusquedaGuardadaFindUniqueOrThrowArgs} args - Arguments to find a BusquedaGuardada
     * @example
     * // Get one BusquedaGuardada
     * const busquedaGuardada = await prisma.busquedaGuardada.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BusquedaGuardadaFindUniqueOrThrowArgs>(args: SelectSubset<T, BusquedaGuardadaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BusquedaGuardadaClient<$Result.GetResult<Prisma.$BusquedaGuardadaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BusquedaGuardada that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusquedaGuardadaFindFirstArgs} args - Arguments to find a BusquedaGuardada
     * @example
     * // Get one BusquedaGuardada
     * const busquedaGuardada = await prisma.busquedaGuardada.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BusquedaGuardadaFindFirstArgs>(args?: SelectSubset<T, BusquedaGuardadaFindFirstArgs<ExtArgs>>): Prisma__BusquedaGuardadaClient<$Result.GetResult<Prisma.$BusquedaGuardadaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BusquedaGuardada that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusquedaGuardadaFindFirstOrThrowArgs} args - Arguments to find a BusquedaGuardada
     * @example
     * // Get one BusquedaGuardada
     * const busquedaGuardada = await prisma.busquedaGuardada.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BusquedaGuardadaFindFirstOrThrowArgs>(args?: SelectSubset<T, BusquedaGuardadaFindFirstOrThrowArgs<ExtArgs>>): Prisma__BusquedaGuardadaClient<$Result.GetResult<Prisma.$BusquedaGuardadaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BusquedaGuardadas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusquedaGuardadaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BusquedaGuardadas
     * const busquedaGuardadas = await prisma.busquedaGuardada.findMany()
     * 
     * // Get first 10 BusquedaGuardadas
     * const busquedaGuardadas = await prisma.busquedaGuardada.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const busquedaGuardadaWithIdOnly = await prisma.busquedaGuardada.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BusquedaGuardadaFindManyArgs>(args?: SelectSubset<T, BusquedaGuardadaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusquedaGuardadaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BusquedaGuardada.
     * @param {BusquedaGuardadaCreateArgs} args - Arguments to create a BusquedaGuardada.
     * @example
     * // Create one BusquedaGuardada
     * const BusquedaGuardada = await prisma.busquedaGuardada.create({
     *   data: {
     *     // ... data to create a BusquedaGuardada
     *   }
     * })
     * 
     */
    create<T extends BusquedaGuardadaCreateArgs>(args: SelectSubset<T, BusquedaGuardadaCreateArgs<ExtArgs>>): Prisma__BusquedaGuardadaClient<$Result.GetResult<Prisma.$BusquedaGuardadaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BusquedaGuardadas.
     * @param {BusquedaGuardadaCreateManyArgs} args - Arguments to create many BusquedaGuardadas.
     * @example
     * // Create many BusquedaGuardadas
     * const busquedaGuardada = await prisma.busquedaGuardada.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BusquedaGuardadaCreateManyArgs>(args?: SelectSubset<T, BusquedaGuardadaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BusquedaGuardadas and returns the data saved in the database.
     * @param {BusquedaGuardadaCreateManyAndReturnArgs} args - Arguments to create many BusquedaGuardadas.
     * @example
     * // Create many BusquedaGuardadas
     * const busquedaGuardada = await prisma.busquedaGuardada.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BusquedaGuardadas and only return the `id`
     * const busquedaGuardadaWithIdOnly = await prisma.busquedaGuardada.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BusquedaGuardadaCreateManyAndReturnArgs>(args?: SelectSubset<T, BusquedaGuardadaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusquedaGuardadaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BusquedaGuardada.
     * @param {BusquedaGuardadaDeleteArgs} args - Arguments to delete one BusquedaGuardada.
     * @example
     * // Delete one BusquedaGuardada
     * const BusquedaGuardada = await prisma.busquedaGuardada.delete({
     *   where: {
     *     // ... filter to delete one BusquedaGuardada
     *   }
     * })
     * 
     */
    delete<T extends BusquedaGuardadaDeleteArgs>(args: SelectSubset<T, BusquedaGuardadaDeleteArgs<ExtArgs>>): Prisma__BusquedaGuardadaClient<$Result.GetResult<Prisma.$BusquedaGuardadaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BusquedaGuardada.
     * @param {BusquedaGuardadaUpdateArgs} args - Arguments to update one BusquedaGuardada.
     * @example
     * // Update one BusquedaGuardada
     * const busquedaGuardada = await prisma.busquedaGuardada.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BusquedaGuardadaUpdateArgs>(args: SelectSubset<T, BusquedaGuardadaUpdateArgs<ExtArgs>>): Prisma__BusquedaGuardadaClient<$Result.GetResult<Prisma.$BusquedaGuardadaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BusquedaGuardadas.
     * @param {BusquedaGuardadaDeleteManyArgs} args - Arguments to filter BusquedaGuardadas to delete.
     * @example
     * // Delete a few BusquedaGuardadas
     * const { count } = await prisma.busquedaGuardada.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BusquedaGuardadaDeleteManyArgs>(args?: SelectSubset<T, BusquedaGuardadaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BusquedaGuardadas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusquedaGuardadaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BusquedaGuardadas
     * const busquedaGuardada = await prisma.busquedaGuardada.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BusquedaGuardadaUpdateManyArgs>(args: SelectSubset<T, BusquedaGuardadaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BusquedaGuardadas and returns the data updated in the database.
     * @param {BusquedaGuardadaUpdateManyAndReturnArgs} args - Arguments to update many BusquedaGuardadas.
     * @example
     * // Update many BusquedaGuardadas
     * const busquedaGuardada = await prisma.busquedaGuardada.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BusquedaGuardadas and only return the `id`
     * const busquedaGuardadaWithIdOnly = await prisma.busquedaGuardada.updateManyAndReturn({
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
    updateManyAndReturn<T extends BusquedaGuardadaUpdateManyAndReturnArgs>(args: SelectSubset<T, BusquedaGuardadaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusquedaGuardadaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BusquedaGuardada.
     * @param {BusquedaGuardadaUpsertArgs} args - Arguments to update or create a BusquedaGuardada.
     * @example
     * // Update or create a BusquedaGuardada
     * const busquedaGuardada = await prisma.busquedaGuardada.upsert({
     *   create: {
     *     // ... data to create a BusquedaGuardada
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BusquedaGuardada we want to update
     *   }
     * })
     */
    upsert<T extends BusquedaGuardadaUpsertArgs>(args: SelectSubset<T, BusquedaGuardadaUpsertArgs<ExtArgs>>): Prisma__BusquedaGuardadaClient<$Result.GetResult<Prisma.$BusquedaGuardadaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BusquedaGuardadas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusquedaGuardadaCountArgs} args - Arguments to filter BusquedaGuardadas to count.
     * @example
     * // Count the number of BusquedaGuardadas
     * const count = await prisma.busquedaGuardada.count({
     *   where: {
     *     // ... the filter for the BusquedaGuardadas we want to count
     *   }
     * })
    **/
    count<T extends BusquedaGuardadaCountArgs>(
      args?: Subset<T, BusquedaGuardadaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BusquedaGuardadaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BusquedaGuardada.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusquedaGuardadaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BusquedaGuardadaAggregateArgs>(args: Subset<T, BusquedaGuardadaAggregateArgs>): Prisma.PrismaPromise<GetBusquedaGuardadaAggregateType<T>>

    /**
     * Group by BusquedaGuardada.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusquedaGuardadaGroupByArgs} args - Group by arguments.
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
      T extends BusquedaGuardadaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BusquedaGuardadaGroupByArgs['orderBy'] }
        : { orderBy?: BusquedaGuardadaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BusquedaGuardadaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBusquedaGuardadaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BusquedaGuardada model
   */
  readonly fields: BusquedaGuardadaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BusquedaGuardada.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BusquedaGuardadaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the BusquedaGuardada model
   */
  interface BusquedaGuardadaFieldRefs {
    readonly id: FieldRef<"BusquedaGuardada", 'String'>
    readonly userId: FieldRef<"BusquedaGuardada", 'String'>
    readonly searchParameters: FieldRef<"BusquedaGuardada", 'Json'>
    readonly searchName: FieldRef<"BusquedaGuardada", 'String'>
    readonly createdAt: FieldRef<"BusquedaGuardada", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BusquedaGuardada findUnique
   */
  export type BusquedaGuardadaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusquedaGuardada
     */
    select?: BusquedaGuardadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusquedaGuardada
     */
    omit?: BusquedaGuardadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusquedaGuardadaInclude<ExtArgs> | null
    /**
     * Filter, which BusquedaGuardada to fetch.
     */
    where: BusquedaGuardadaWhereUniqueInput
  }

  /**
   * BusquedaGuardada findUniqueOrThrow
   */
  export type BusquedaGuardadaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusquedaGuardada
     */
    select?: BusquedaGuardadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusquedaGuardada
     */
    omit?: BusquedaGuardadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusquedaGuardadaInclude<ExtArgs> | null
    /**
     * Filter, which BusquedaGuardada to fetch.
     */
    where: BusquedaGuardadaWhereUniqueInput
  }

  /**
   * BusquedaGuardada findFirst
   */
  export type BusquedaGuardadaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusquedaGuardada
     */
    select?: BusquedaGuardadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusquedaGuardada
     */
    omit?: BusquedaGuardadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusquedaGuardadaInclude<ExtArgs> | null
    /**
     * Filter, which BusquedaGuardada to fetch.
     */
    where?: BusquedaGuardadaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusquedaGuardadas to fetch.
     */
    orderBy?: BusquedaGuardadaOrderByWithRelationInput | BusquedaGuardadaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BusquedaGuardadas.
     */
    cursor?: BusquedaGuardadaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusquedaGuardadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusquedaGuardadas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BusquedaGuardadas.
     */
    distinct?: BusquedaGuardadaScalarFieldEnum | BusquedaGuardadaScalarFieldEnum[]
  }

  /**
   * BusquedaGuardada findFirstOrThrow
   */
  export type BusquedaGuardadaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusquedaGuardada
     */
    select?: BusquedaGuardadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusquedaGuardada
     */
    omit?: BusquedaGuardadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusquedaGuardadaInclude<ExtArgs> | null
    /**
     * Filter, which BusquedaGuardada to fetch.
     */
    where?: BusquedaGuardadaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusquedaGuardadas to fetch.
     */
    orderBy?: BusquedaGuardadaOrderByWithRelationInput | BusquedaGuardadaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BusquedaGuardadas.
     */
    cursor?: BusquedaGuardadaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusquedaGuardadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusquedaGuardadas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BusquedaGuardadas.
     */
    distinct?: BusquedaGuardadaScalarFieldEnum | BusquedaGuardadaScalarFieldEnum[]
  }

  /**
   * BusquedaGuardada findMany
   */
  export type BusquedaGuardadaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusquedaGuardada
     */
    select?: BusquedaGuardadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusquedaGuardada
     */
    omit?: BusquedaGuardadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusquedaGuardadaInclude<ExtArgs> | null
    /**
     * Filter, which BusquedaGuardadas to fetch.
     */
    where?: BusquedaGuardadaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusquedaGuardadas to fetch.
     */
    orderBy?: BusquedaGuardadaOrderByWithRelationInput | BusquedaGuardadaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BusquedaGuardadas.
     */
    cursor?: BusquedaGuardadaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusquedaGuardadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusquedaGuardadas.
     */
    skip?: number
    distinct?: BusquedaGuardadaScalarFieldEnum | BusquedaGuardadaScalarFieldEnum[]
  }

  /**
   * BusquedaGuardada create
   */
  export type BusquedaGuardadaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusquedaGuardada
     */
    select?: BusquedaGuardadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusquedaGuardada
     */
    omit?: BusquedaGuardadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusquedaGuardadaInclude<ExtArgs> | null
    /**
     * The data needed to create a BusquedaGuardada.
     */
    data: XOR<BusquedaGuardadaCreateInput, BusquedaGuardadaUncheckedCreateInput>
  }

  /**
   * BusquedaGuardada createMany
   */
  export type BusquedaGuardadaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BusquedaGuardadas.
     */
    data: BusquedaGuardadaCreateManyInput | BusquedaGuardadaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BusquedaGuardada createManyAndReturn
   */
  export type BusquedaGuardadaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusquedaGuardada
     */
    select?: BusquedaGuardadaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BusquedaGuardada
     */
    omit?: BusquedaGuardadaOmit<ExtArgs> | null
    /**
     * The data used to create many BusquedaGuardadas.
     */
    data: BusquedaGuardadaCreateManyInput | BusquedaGuardadaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusquedaGuardadaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BusquedaGuardada update
   */
  export type BusquedaGuardadaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusquedaGuardada
     */
    select?: BusquedaGuardadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusquedaGuardada
     */
    omit?: BusquedaGuardadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusquedaGuardadaInclude<ExtArgs> | null
    /**
     * The data needed to update a BusquedaGuardada.
     */
    data: XOR<BusquedaGuardadaUpdateInput, BusquedaGuardadaUncheckedUpdateInput>
    /**
     * Choose, which BusquedaGuardada to update.
     */
    where: BusquedaGuardadaWhereUniqueInput
  }

  /**
   * BusquedaGuardada updateMany
   */
  export type BusquedaGuardadaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BusquedaGuardadas.
     */
    data: XOR<BusquedaGuardadaUpdateManyMutationInput, BusquedaGuardadaUncheckedUpdateManyInput>
    /**
     * Filter which BusquedaGuardadas to update
     */
    where?: BusquedaGuardadaWhereInput
    /**
     * Limit how many BusquedaGuardadas to update.
     */
    limit?: number
  }

  /**
   * BusquedaGuardada updateManyAndReturn
   */
  export type BusquedaGuardadaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusquedaGuardada
     */
    select?: BusquedaGuardadaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BusquedaGuardada
     */
    omit?: BusquedaGuardadaOmit<ExtArgs> | null
    /**
     * The data used to update BusquedaGuardadas.
     */
    data: XOR<BusquedaGuardadaUpdateManyMutationInput, BusquedaGuardadaUncheckedUpdateManyInput>
    /**
     * Filter which BusquedaGuardadas to update
     */
    where?: BusquedaGuardadaWhereInput
    /**
     * Limit how many BusquedaGuardadas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusquedaGuardadaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BusquedaGuardada upsert
   */
  export type BusquedaGuardadaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusquedaGuardada
     */
    select?: BusquedaGuardadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusquedaGuardada
     */
    omit?: BusquedaGuardadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusquedaGuardadaInclude<ExtArgs> | null
    /**
     * The filter to search for the BusquedaGuardada to update in case it exists.
     */
    where: BusquedaGuardadaWhereUniqueInput
    /**
     * In case the BusquedaGuardada found by the `where` argument doesn't exist, create a new BusquedaGuardada with this data.
     */
    create: XOR<BusquedaGuardadaCreateInput, BusquedaGuardadaUncheckedCreateInput>
    /**
     * In case the BusquedaGuardada was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BusquedaGuardadaUpdateInput, BusquedaGuardadaUncheckedUpdateInput>
  }

  /**
   * BusquedaGuardada delete
   */
  export type BusquedaGuardadaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusquedaGuardada
     */
    select?: BusquedaGuardadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusquedaGuardada
     */
    omit?: BusquedaGuardadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusquedaGuardadaInclude<ExtArgs> | null
    /**
     * Filter which BusquedaGuardada to delete.
     */
    where: BusquedaGuardadaWhereUniqueInput
  }

  /**
   * BusquedaGuardada deleteMany
   */
  export type BusquedaGuardadaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BusquedaGuardadas to delete
     */
    where?: BusquedaGuardadaWhereInput
    /**
     * Limit how many BusquedaGuardadas to delete.
     */
    limit?: number
  }

  /**
   * BusquedaGuardada without action
   */
  export type BusquedaGuardadaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusquedaGuardada
     */
    select?: BusquedaGuardadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusquedaGuardada
     */
    omit?: BusquedaGuardadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusquedaGuardadaInclude<ExtArgs> | null
  }


  /**
   * Model UserPreference
   */

  export type AggregateUserPreference = {
    _count: UserPreferenceCountAggregateOutputType | null
    _min: UserPreferenceMinAggregateOutputType | null
    _max: UserPreferenceMaxAggregateOutputType | null
  }

  export type UserPreferenceMinAggregateOutputType = {
    id: string | null
    userId: string | null
    modality: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserPreferenceMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    modality: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserPreferenceCountAggregateOutputType = {
    id: number
    userId: number
    propertyTypes: number
    modality: number
    locations: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserPreferenceMinAggregateInputType = {
    id?: true
    userId?: true
    modality?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserPreferenceMaxAggregateInputType = {
    id?: true
    userId?: true
    modality?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserPreferenceCountAggregateInputType = {
    id?: true
    userId?: true
    propertyTypes?: true
    modality?: true
    locations?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserPreferenceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPreference to aggregate.
     */
    where?: UserPreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPreferences to fetch.
     */
    orderBy?: UserPreferenceOrderByWithRelationInput | UserPreferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserPreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserPreferences
    **/
    _count?: true | UserPreferenceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserPreferenceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserPreferenceMaxAggregateInputType
  }

  export type GetUserPreferenceAggregateType<T extends UserPreferenceAggregateArgs> = {
        [P in keyof T & keyof AggregateUserPreference]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserPreference[P]>
      : GetScalarType<T[P], AggregateUserPreference[P]>
  }




  export type UserPreferenceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPreferenceWhereInput
    orderBy?: UserPreferenceOrderByWithAggregationInput | UserPreferenceOrderByWithAggregationInput[]
    by: UserPreferenceScalarFieldEnum[] | UserPreferenceScalarFieldEnum
    having?: UserPreferenceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserPreferenceCountAggregateInputType | true
    _min?: UserPreferenceMinAggregateInputType
    _max?: UserPreferenceMaxAggregateInputType
  }

  export type UserPreferenceGroupByOutputType = {
    id: string
    userId: string
    propertyTypes: string[]
    modality: string | null
    locations: string[]
    createdAt: Date
    updatedAt: Date
    _count: UserPreferenceCountAggregateOutputType | null
    _min: UserPreferenceMinAggregateOutputType | null
    _max: UserPreferenceMaxAggregateOutputType | null
  }

  type GetUserPreferenceGroupByPayload<T extends UserPreferenceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserPreferenceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserPreferenceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserPreferenceGroupByOutputType[P]>
            : GetScalarType<T[P], UserPreferenceGroupByOutputType[P]>
        }
      >
    >


  export type UserPreferenceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    propertyTypes?: boolean
    modality?: boolean
    locations?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPreference"]>

  export type UserPreferenceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    propertyTypes?: boolean
    modality?: boolean
    locations?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPreference"]>

  export type UserPreferenceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    propertyTypes?: boolean
    modality?: boolean
    locations?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPreference"]>

  export type UserPreferenceSelectScalar = {
    id?: boolean
    userId?: boolean
    propertyTypes?: boolean
    modality?: boolean
    locations?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserPreferenceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "propertyTypes" | "modality" | "locations" | "createdAt" | "updatedAt", ExtArgs["result"]["userPreference"]>
  export type UserPreferenceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type UserPreferenceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type UserPreferenceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $UserPreferencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserPreference"
    objects: {
      user: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      propertyTypes: string[]
      modality: string | null
      locations: string[]
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userPreference"]>
    composites: {}
  }

  type UserPreferenceGetPayload<S extends boolean | null | undefined | UserPreferenceDefaultArgs> = $Result.GetResult<Prisma.$UserPreferencePayload, S>

  type UserPreferenceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserPreferenceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserPreferenceCountAggregateInputType | true
    }

  export interface UserPreferenceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserPreference'], meta: { name: 'UserPreference' } }
    /**
     * Find zero or one UserPreference that matches the filter.
     * @param {UserPreferenceFindUniqueArgs} args - Arguments to find a UserPreference
     * @example
     * // Get one UserPreference
     * const userPreference = await prisma.userPreference.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserPreferenceFindUniqueArgs>(args: SelectSubset<T, UserPreferenceFindUniqueArgs<ExtArgs>>): Prisma__UserPreferenceClient<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserPreference that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserPreferenceFindUniqueOrThrowArgs} args - Arguments to find a UserPreference
     * @example
     * // Get one UserPreference
     * const userPreference = await prisma.userPreference.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserPreferenceFindUniqueOrThrowArgs>(args: SelectSubset<T, UserPreferenceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserPreferenceClient<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserPreference that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferenceFindFirstArgs} args - Arguments to find a UserPreference
     * @example
     * // Get one UserPreference
     * const userPreference = await prisma.userPreference.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserPreferenceFindFirstArgs>(args?: SelectSubset<T, UserPreferenceFindFirstArgs<ExtArgs>>): Prisma__UserPreferenceClient<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserPreference that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferenceFindFirstOrThrowArgs} args - Arguments to find a UserPreference
     * @example
     * // Get one UserPreference
     * const userPreference = await prisma.userPreference.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserPreferenceFindFirstOrThrowArgs>(args?: SelectSubset<T, UserPreferenceFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserPreferenceClient<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserPreferences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferenceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserPreferences
     * const userPreferences = await prisma.userPreference.findMany()
     * 
     * // Get first 10 UserPreferences
     * const userPreferences = await prisma.userPreference.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userPreferenceWithIdOnly = await prisma.userPreference.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserPreferenceFindManyArgs>(args?: SelectSubset<T, UserPreferenceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserPreference.
     * @param {UserPreferenceCreateArgs} args - Arguments to create a UserPreference.
     * @example
     * // Create one UserPreference
     * const UserPreference = await prisma.userPreference.create({
     *   data: {
     *     // ... data to create a UserPreference
     *   }
     * })
     * 
     */
    create<T extends UserPreferenceCreateArgs>(args: SelectSubset<T, UserPreferenceCreateArgs<ExtArgs>>): Prisma__UserPreferenceClient<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserPreferences.
     * @param {UserPreferenceCreateManyArgs} args - Arguments to create many UserPreferences.
     * @example
     * // Create many UserPreferences
     * const userPreference = await prisma.userPreference.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserPreferenceCreateManyArgs>(args?: SelectSubset<T, UserPreferenceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserPreferences and returns the data saved in the database.
     * @param {UserPreferenceCreateManyAndReturnArgs} args - Arguments to create many UserPreferences.
     * @example
     * // Create many UserPreferences
     * const userPreference = await prisma.userPreference.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserPreferences and only return the `id`
     * const userPreferenceWithIdOnly = await prisma.userPreference.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserPreferenceCreateManyAndReturnArgs>(args?: SelectSubset<T, UserPreferenceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserPreference.
     * @param {UserPreferenceDeleteArgs} args - Arguments to delete one UserPreference.
     * @example
     * // Delete one UserPreference
     * const UserPreference = await prisma.userPreference.delete({
     *   where: {
     *     // ... filter to delete one UserPreference
     *   }
     * })
     * 
     */
    delete<T extends UserPreferenceDeleteArgs>(args: SelectSubset<T, UserPreferenceDeleteArgs<ExtArgs>>): Prisma__UserPreferenceClient<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserPreference.
     * @param {UserPreferenceUpdateArgs} args - Arguments to update one UserPreference.
     * @example
     * // Update one UserPreference
     * const userPreference = await prisma.userPreference.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserPreferenceUpdateArgs>(args: SelectSubset<T, UserPreferenceUpdateArgs<ExtArgs>>): Prisma__UserPreferenceClient<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserPreferences.
     * @param {UserPreferenceDeleteManyArgs} args - Arguments to filter UserPreferences to delete.
     * @example
     * // Delete a few UserPreferences
     * const { count } = await prisma.userPreference.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserPreferenceDeleteManyArgs>(args?: SelectSubset<T, UserPreferenceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferenceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserPreferences
     * const userPreference = await prisma.userPreference.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserPreferenceUpdateManyArgs>(args: SelectSubset<T, UserPreferenceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserPreferences and returns the data updated in the database.
     * @param {UserPreferenceUpdateManyAndReturnArgs} args - Arguments to update many UserPreferences.
     * @example
     * // Update many UserPreferences
     * const userPreference = await prisma.userPreference.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserPreferences and only return the `id`
     * const userPreferenceWithIdOnly = await prisma.userPreference.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserPreferenceUpdateManyAndReturnArgs>(args: SelectSubset<T, UserPreferenceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserPreference.
     * @param {UserPreferenceUpsertArgs} args - Arguments to update or create a UserPreference.
     * @example
     * // Update or create a UserPreference
     * const userPreference = await prisma.userPreference.upsert({
     *   create: {
     *     // ... data to create a UserPreference
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserPreference we want to update
     *   }
     * })
     */
    upsert<T extends UserPreferenceUpsertArgs>(args: SelectSubset<T, UserPreferenceUpsertArgs<ExtArgs>>): Prisma__UserPreferenceClient<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferenceCountArgs} args - Arguments to filter UserPreferences to count.
     * @example
     * // Count the number of UserPreferences
     * const count = await prisma.userPreference.count({
     *   where: {
     *     // ... the filter for the UserPreferences we want to count
     *   }
     * })
    **/
    count<T extends UserPreferenceCountArgs>(
      args?: Subset<T, UserPreferenceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserPreferenceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserPreference.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferenceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserPreferenceAggregateArgs>(args: Subset<T, UserPreferenceAggregateArgs>): Prisma.PrismaPromise<GetUserPreferenceAggregateType<T>>

    /**
     * Group by UserPreference.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferenceGroupByArgs} args - Group by arguments.
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
      T extends UserPreferenceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserPreferenceGroupByArgs['orderBy'] }
        : { orderBy?: UserPreferenceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserPreferenceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserPreferenceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserPreference model
   */
  readonly fields: UserPreferenceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserPreference.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserPreferenceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserPreference model
   */
  interface UserPreferenceFieldRefs {
    readonly id: FieldRef<"UserPreference", 'String'>
    readonly userId: FieldRef<"UserPreference", 'String'>
    readonly propertyTypes: FieldRef<"UserPreference", 'String[]'>
    readonly modality: FieldRef<"UserPreference", 'String'>
    readonly locations: FieldRef<"UserPreference", 'String[]'>
    readonly createdAt: FieldRef<"UserPreference", 'DateTime'>
    readonly updatedAt: FieldRef<"UserPreference", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserPreference findUnique
   */
  export type UserPreferenceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null
    /**
     * Filter, which UserPreference to fetch.
     */
    where: UserPreferenceWhereUniqueInput
  }

  /**
   * UserPreference findUniqueOrThrow
   */
  export type UserPreferenceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null
    /**
     * Filter, which UserPreference to fetch.
     */
    where: UserPreferenceWhereUniqueInput
  }

  /**
   * UserPreference findFirst
   */
  export type UserPreferenceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null
    /**
     * Filter, which UserPreference to fetch.
     */
    where?: UserPreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPreferences to fetch.
     */
    orderBy?: UserPreferenceOrderByWithRelationInput | UserPreferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPreferences.
     */
    cursor?: UserPreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPreferences.
     */
    distinct?: UserPreferenceScalarFieldEnum | UserPreferenceScalarFieldEnum[]
  }

  /**
   * UserPreference findFirstOrThrow
   */
  export type UserPreferenceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null
    /**
     * Filter, which UserPreference to fetch.
     */
    where?: UserPreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPreferences to fetch.
     */
    orderBy?: UserPreferenceOrderByWithRelationInput | UserPreferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPreferences.
     */
    cursor?: UserPreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPreferences.
     */
    distinct?: UserPreferenceScalarFieldEnum | UserPreferenceScalarFieldEnum[]
  }

  /**
   * UserPreference findMany
   */
  export type UserPreferenceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null
    /**
     * Filter, which UserPreferences to fetch.
     */
    where?: UserPreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPreferences to fetch.
     */
    orderBy?: UserPreferenceOrderByWithRelationInput | UserPreferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserPreferences.
     */
    cursor?: UserPreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPreferences.
     */
    skip?: number
    distinct?: UserPreferenceScalarFieldEnum | UserPreferenceScalarFieldEnum[]
  }

  /**
   * UserPreference create
   */
  export type UserPreferenceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null
    /**
     * The data needed to create a UserPreference.
     */
    data: XOR<UserPreferenceCreateInput, UserPreferenceUncheckedCreateInput>
  }

  /**
   * UserPreference createMany
   */
  export type UserPreferenceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserPreferences.
     */
    data: UserPreferenceCreateManyInput | UserPreferenceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserPreference createManyAndReturn
   */
  export type UserPreferenceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * The data used to create many UserPreferences.
     */
    data: UserPreferenceCreateManyInput | UserPreferenceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserPreference update
   */
  export type UserPreferenceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null
    /**
     * The data needed to update a UserPreference.
     */
    data: XOR<UserPreferenceUpdateInput, UserPreferenceUncheckedUpdateInput>
    /**
     * Choose, which UserPreference to update.
     */
    where: UserPreferenceWhereUniqueInput
  }

  /**
   * UserPreference updateMany
   */
  export type UserPreferenceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserPreferences.
     */
    data: XOR<UserPreferenceUpdateManyMutationInput, UserPreferenceUncheckedUpdateManyInput>
    /**
     * Filter which UserPreferences to update
     */
    where?: UserPreferenceWhereInput
    /**
     * Limit how many UserPreferences to update.
     */
    limit?: number
  }

  /**
   * UserPreference updateManyAndReturn
   */
  export type UserPreferenceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * The data used to update UserPreferences.
     */
    data: XOR<UserPreferenceUpdateManyMutationInput, UserPreferenceUncheckedUpdateManyInput>
    /**
     * Filter which UserPreferences to update
     */
    where?: UserPreferenceWhereInput
    /**
     * Limit how many UserPreferences to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserPreference upsert
   */
  export type UserPreferenceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null
    /**
     * The filter to search for the UserPreference to update in case it exists.
     */
    where: UserPreferenceWhereUniqueInput
    /**
     * In case the UserPreference found by the `where` argument doesn't exist, create a new UserPreference with this data.
     */
    create: XOR<UserPreferenceCreateInput, UserPreferenceUncheckedCreateInput>
    /**
     * In case the UserPreference was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserPreferenceUpdateInput, UserPreferenceUncheckedUpdateInput>
  }

  /**
   * UserPreference delete
   */
  export type UserPreferenceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null
    /**
     * Filter which UserPreference to delete.
     */
    where: UserPreferenceWhereUniqueInput
  }

  /**
   * UserPreference deleteMany
   */
  export type UserPreferenceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPreferences to delete
     */
    where?: UserPreferenceWhereInput
    /**
     * Limit how many UserPreferences to delete.
     */
    limit?: number
  }

  /**
   * UserPreference without action
   */
  export type UserPreferenceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null
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


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    googleId: 'googleId',
    profilePhoto: 'profilePhoto',
    email: 'email',
    passwordHash: 'passwordHash',
    fullName: 'fullName',
    phone: 'phone',
    role: 'role',
    verificationStatus: 'verificationStatus',
    refreshToken: 'refreshToken',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const InmuebleScalarFieldEnum: {
    id: 'id',
    ownerId: 'ownerId',
    title: 'title',
    description: 'description',
    address: 'address',
    city: 'city',
    bedrooms: 'bedrooms',
    bathrooms: 'bathrooms',
    areaM2: 'areaM2',
    price: 'price',
    operationType: 'operationType',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InmuebleScalarFieldEnum = (typeof InmuebleScalarFieldEnum)[keyof typeof InmuebleScalarFieldEnum]


  export const InteresScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    propertyId: 'propertyId',
    message: 'message',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type InteresScalarFieldEnum = (typeof InteresScalarFieldEnum)[keyof typeof InteresScalarFieldEnum]


  export const MensajeScalarFieldEnum: {
    id: 'id',
    senderId: 'senderId',
    receiverId: 'receiverId',
    interestId: 'interestId',
    content: 'content',
    read: 'read',
    createdAt: 'createdAt'
  };

  export type MensajeScalarFieldEnum = (typeof MensajeScalarFieldEnum)[keyof typeof MensajeScalarFieldEnum]


  export const FotoInmuebleScalarFieldEnum: {
    id: 'id',
    propertyId: 'propertyId',
    url: 'url',
    order: 'order',
    createdAt: 'createdAt'
  };

  export type FotoInmuebleScalarFieldEnum = (typeof FotoInmuebleScalarFieldEnum)[keyof typeof FotoInmuebleScalarFieldEnum]


  export const ResenaScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    propertyId: 'propertyId',
    content: 'content',
    rating: 'rating',
    createdAt: 'createdAt'
  };

  export type ResenaScalarFieldEnum = (typeof ResenaScalarFieldEnum)[keyof typeof ResenaScalarFieldEnum]


  export const NotificacionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    title: 'title',
    content: 'content',
    read: 'read',
    metadata: 'metadata',
    createdAt: 'createdAt'
  };

  export type NotificacionScalarFieldEnum = (typeof NotificacionScalarFieldEnum)[keyof typeof NotificacionScalarFieldEnum]


  export const ReporteScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    parameters: 'parameters',
    fileUrl: 'fileUrl',
    createdAt: 'createdAt'
  };

  export type ReporteScalarFieldEnum = (typeof ReporteScalarFieldEnum)[keyof typeof ReporteScalarFieldEnum]


  export const FavoritoScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    propertyId: 'propertyId',
    createdAt: 'createdAt'
  };

  export type FavoritoScalarFieldEnum = (typeof FavoritoScalarFieldEnum)[keyof typeof FavoritoScalarFieldEnum]


  export const BusquedaGuardadaScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    searchParameters: 'searchParameters',
    searchName: 'searchName',
    createdAt: 'createdAt'
  };

  export type BusquedaGuardadaScalarFieldEnum = (typeof BusquedaGuardadaScalarFieldEnum)[keyof typeof BusquedaGuardadaScalarFieldEnum]


  export const UserPreferenceScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    propertyTypes: 'propertyTypes',
    modality: 'modality',
    locations: 'locations',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserPreferenceScalarFieldEnum = (typeof UserPreferenceScalarFieldEnum)[keyof typeof UserPreferenceScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


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
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


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


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: UuidFilter<"Usuario"> | string
    googleId?: StringNullableFilter<"Usuario"> | string | null
    profilePhoto?: StringNullableFilter<"Usuario"> | string | null
    email?: StringFilter<"Usuario"> | string
    passwordHash?: StringNullableFilter<"Usuario"> | string | null
    fullName?: StringNullableFilter<"Usuario"> | string | null
    phone?: StringNullableFilter<"Usuario"> | string | null
    role?: StringFilter<"Usuario"> | string
    verificationStatus?: StringFilter<"Usuario"> | string
    refreshToken?: StringNullableFilter<"Usuario"> | string | null
<<<<<<< Updated upstream
    fechaCreacion?: DateTimeFilter<"Usuario"> | Date | string
    fechaActualizacion?: DateTimeFilter<"Usuario"> | Date | string
    busquedasGuardadas?: BusquedaGuardadaListRelationFilter
    favoritos?: FavoritoListRelationFilter
    inmueblesPropietario?: InmuebleListRelationFilter
    Intereses?: InteresListRelationFilter
    mensajesEmitidos?: MensajeListRelationFilter
    mensajesRecibidos?: MensajeListRelationFilter
    notificaciones?: NotificacionListRelationFilter
    reportes?: ReporteListRelationFilter
    resenas?: ResenaListRelationFilter
    preferences?: XOR<UserPreferenceNullableScalarRelationFilter, UserPreferenceWhereInput> | null
=======
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeFilter<"Usuario"> | Date | string
    ownedProperties?: InmuebleListRelationFilter
    interests?: InteresListRelationFilter
    sentMessages?: MensajeListRelationFilter
    receivedMessages?: MensajeListRelationFilter
    reviews?: ResenaListRelationFilter
    notifications?: NotificacionListRelationFilter
    reports?: ReporteListRelationFilter
    favorites?: FavoritoListRelationFilter
    savedSearches?: BusquedaGuardadaListRelationFilter
>>>>>>> Stashed changes
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    googleId?: SortOrderInput | SortOrder
    profilePhoto?: SortOrderInput | SortOrder
    email?: SortOrder
    passwordHash?: SortOrderInput | SortOrder
    fullName?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    role?: SortOrder
    verificationStatus?: SortOrder
    refreshToken?: SortOrderInput | SortOrder
<<<<<<< Updated upstream
    fechaCreacion?: SortOrder
    fechaActualizacion?: SortOrder
    busquedasGuardadas?: BusquedaGuardadaOrderByRelationAggregateInput
    favoritos?: FavoritoOrderByRelationAggregateInput
    inmueblesPropietario?: InmuebleOrderByRelationAggregateInput
    Intereses?: InteresOrderByRelationAggregateInput
    mensajesEmitidos?: MensajeOrderByRelationAggregateInput
    mensajesRecibidos?: MensajeOrderByRelationAggregateInput
    notificaciones?: NotificacionOrderByRelationAggregateInput
    reportes?: ReporteOrderByRelationAggregateInput
    resenas?: ResenaOrderByRelationAggregateInput
    preferences?: UserPreferenceOrderByWithRelationInput
=======
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownedProperties?: InmuebleOrderByRelationAggregateInput
    interests?: InteresOrderByRelationAggregateInput
    sentMessages?: MensajeOrderByRelationAggregateInput
    receivedMessages?: MensajeOrderByRelationAggregateInput
    reviews?: ResenaOrderByRelationAggregateInput
    notifications?: NotificacionOrderByRelationAggregateInput
    reports?: ReporteOrderByRelationAggregateInput
    favorites?: FavoritoOrderByRelationAggregateInput
    savedSearches?: BusquedaGuardadaOrderByRelationAggregateInput
>>>>>>> Stashed changes
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    googleId?: string
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    profilePhoto?: StringNullableFilter<"Usuario"> | string | null
    passwordHash?: StringNullableFilter<"Usuario"> | string | null
    fullName?: StringNullableFilter<"Usuario"> | string | null
    phone?: StringNullableFilter<"Usuario"> | string | null
    role?: StringFilter<"Usuario"> | string
    verificationStatus?: StringFilter<"Usuario"> | string
    refreshToken?: StringNullableFilter<"Usuario"> | string | null
<<<<<<< Updated upstream
    fechaCreacion?: DateTimeFilter<"Usuario"> | Date | string
    fechaActualizacion?: DateTimeFilter<"Usuario"> | Date | string
    busquedasGuardadas?: BusquedaGuardadaListRelationFilter
    favoritos?: FavoritoListRelationFilter
    inmueblesPropietario?: InmuebleListRelationFilter
    Intereses?: InteresListRelationFilter
    mensajesEmitidos?: MensajeListRelationFilter
    mensajesRecibidos?: MensajeListRelationFilter
    notificaciones?: NotificacionListRelationFilter
    reportes?: ReporteListRelationFilter
    resenas?: ResenaListRelationFilter
    preferences?: XOR<UserPreferenceNullableScalarRelationFilter, UserPreferenceWhereInput> | null
  }, "id" | "googleId" | "correoElectronico">
=======
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeFilter<"Usuario"> | Date | string
    ownedProperties?: InmuebleListRelationFilter
    interests?: InteresListRelationFilter
    sentMessages?: MensajeListRelationFilter
    receivedMessages?: MensajeListRelationFilter
    reviews?: ResenaListRelationFilter
    notifications?: NotificacionListRelationFilter
    reports?: ReporteListRelationFilter
    favorites?: FavoritoListRelationFilter
    savedSearches?: BusquedaGuardadaListRelationFilter
  }, "id" | "googleId" | "email">
>>>>>>> Stashed changes

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    googleId?: SortOrderInput | SortOrder
    profilePhoto?: SortOrderInput | SortOrder
    email?: SortOrder
    passwordHash?: SortOrderInput | SortOrder
    fullName?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    role?: SortOrder
    verificationStatus?: SortOrder
    refreshToken?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Usuario"> | string
    googleId?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    profilePhoto?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    email?: StringWithAggregatesFilter<"Usuario"> | string
    passwordHash?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    fullName?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    role?: StringWithAggregatesFilter<"Usuario"> | string
    verificationStatus?: StringWithAggregatesFilter<"Usuario"> | string
    refreshToken?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
  }

  export type InmuebleWhereInput = {
    AND?: InmuebleWhereInput | InmuebleWhereInput[]
    OR?: InmuebleWhereInput[]
    NOT?: InmuebleWhereInput | InmuebleWhereInput[]
    id?: UuidFilter<"Inmueble"> | string
    ownerId?: UuidFilter<"Inmueble"> | string
    title?: StringFilter<"Inmueble"> | string
    description?: StringNullableFilter<"Inmueble"> | string | null
    address?: StringNullableFilter<"Inmueble"> | string | null
    city?: StringFilter<"Inmueble"> | string
    bedrooms?: IntNullableFilter<"Inmueble"> | number | null
    bathrooms?: IntNullableFilter<"Inmueble"> | number | null
    areaM2?: DecimalNullableFilter<"Inmueble"> | Decimal | DecimalJsLike | number | string | null
<<<<<<< Updated upstream
    precio?: DecimalFilter<"Inmueble"> | Decimal | DecimalJsLike | number | string
    tipoOperacion?: StringFilter<"Inmueble"> | string
    estado?: StringFilter<"Inmueble"> | string
    fechaCreacion?: DateTimeFilter<"Inmueble"> | Date | string
    fechaActualizacion?: DateTimeFilter<"Inmueble"> | Date | string
    favoritos?: FavoritoListRelationFilter
    fotosInmueble?: FotoInmuebleListRelationFilter
    propietario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    intereses?: InteresListRelationFilter
    resenas?: ResenaListRelationFilter
=======
    price?: DecimalFilter<"Inmueble"> | Decimal | DecimalJsLike | number | string
    operationType?: StringFilter<"Inmueble"> | string
    status?: StringFilter<"Inmueble"> | string
    createdAt?: DateTimeFilter<"Inmueble"> | Date | string
    updatedAt?: DateTimeFilter<"Inmueble"> | Date | string
    owner?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    interests?: InteresListRelationFilter
    propertyPhotos?: FotoInmuebleListRelationFilter
    reviews?: ResenaListRelationFilter
    favorites?: FavoritoListRelationFilter
>>>>>>> Stashed changes
  }

  export type InmuebleOrderByWithRelationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrder
    bedrooms?: SortOrderInput | SortOrder
    bathrooms?: SortOrderInput | SortOrder
    areaM2?: SortOrderInput | SortOrder
<<<<<<< Updated upstream
    precio?: SortOrder
    tipoOperacion?: SortOrder
    estado?: SortOrder
    fechaCreacion?: SortOrder
    fechaActualizacion?: SortOrder
    favoritos?: FavoritoOrderByRelationAggregateInput
    fotosInmueble?: FotoInmuebleOrderByRelationAggregateInput
    propietario?: UsuarioOrderByWithRelationInput
    intereses?: InteresOrderByRelationAggregateInput
    resenas?: ResenaOrderByRelationAggregateInput
=======
    price?: SortOrder
    operationType?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    owner?: UsuarioOrderByWithRelationInput
    interests?: InteresOrderByRelationAggregateInput
    propertyPhotos?: FotoInmuebleOrderByRelationAggregateInput
    reviews?: ResenaOrderByRelationAggregateInput
    favorites?: FavoritoOrderByRelationAggregateInput
>>>>>>> Stashed changes
  }

  export type InmuebleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InmuebleWhereInput | InmuebleWhereInput[]
    OR?: InmuebleWhereInput[]
    NOT?: InmuebleWhereInput | InmuebleWhereInput[]
    ownerId?: UuidFilter<"Inmueble"> | string
    title?: StringFilter<"Inmueble"> | string
    description?: StringNullableFilter<"Inmueble"> | string | null
    address?: StringNullableFilter<"Inmueble"> | string | null
    city?: StringFilter<"Inmueble"> | string
    bedrooms?: IntNullableFilter<"Inmueble"> | number | null
    bathrooms?: IntNullableFilter<"Inmueble"> | number | null
    areaM2?: DecimalNullableFilter<"Inmueble"> | Decimal | DecimalJsLike | number | string | null
<<<<<<< Updated upstream
    precio?: DecimalFilter<"Inmueble"> | Decimal | DecimalJsLike | number | string
    tipoOperacion?: StringFilter<"Inmueble"> | string
    estado?: StringFilter<"Inmueble"> | string
    fechaCreacion?: DateTimeFilter<"Inmueble"> | Date | string
    fechaActualizacion?: DateTimeFilter<"Inmueble"> | Date | string
    favoritos?: FavoritoListRelationFilter
    fotosInmueble?: FotoInmuebleListRelationFilter
    propietario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    intereses?: InteresListRelationFilter
    resenas?: ResenaListRelationFilter
=======
    price?: DecimalFilter<"Inmueble"> | Decimal | DecimalJsLike | number | string
    operationType?: StringFilter<"Inmueble"> | string
    status?: StringFilter<"Inmueble"> | string
    createdAt?: DateTimeFilter<"Inmueble"> | Date | string
    updatedAt?: DateTimeFilter<"Inmueble"> | Date | string
    owner?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    interests?: InteresListRelationFilter
    propertyPhotos?: FotoInmuebleListRelationFilter
    reviews?: ResenaListRelationFilter
    favorites?: FavoritoListRelationFilter
>>>>>>> Stashed changes
  }, "id">

  export type InmuebleOrderByWithAggregationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrder
    bedrooms?: SortOrderInput | SortOrder
    bathrooms?: SortOrderInput | SortOrder
    areaM2?: SortOrderInput | SortOrder
    price?: SortOrder
    operationType?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InmuebleCountOrderByAggregateInput
    _avg?: InmuebleAvgOrderByAggregateInput
    _max?: InmuebleMaxOrderByAggregateInput
    _min?: InmuebleMinOrderByAggregateInput
    _sum?: InmuebleSumOrderByAggregateInput
  }

  export type InmuebleScalarWhereWithAggregatesInput = {
    AND?: InmuebleScalarWhereWithAggregatesInput | InmuebleScalarWhereWithAggregatesInput[]
    OR?: InmuebleScalarWhereWithAggregatesInput[]
    NOT?: InmuebleScalarWhereWithAggregatesInput | InmuebleScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Inmueble"> | string
    ownerId?: UuidWithAggregatesFilter<"Inmueble"> | string
    title?: StringWithAggregatesFilter<"Inmueble"> | string
    description?: StringNullableWithAggregatesFilter<"Inmueble"> | string | null
    address?: StringNullableWithAggregatesFilter<"Inmueble"> | string | null
    city?: StringWithAggregatesFilter<"Inmueble"> | string
    bedrooms?: IntNullableWithAggregatesFilter<"Inmueble"> | number | null
    bathrooms?: IntNullableWithAggregatesFilter<"Inmueble"> | number | null
    areaM2?: DecimalNullableWithAggregatesFilter<"Inmueble"> | Decimal | DecimalJsLike | number | string | null
    price?: DecimalWithAggregatesFilter<"Inmueble"> | Decimal | DecimalJsLike | number | string
    operationType?: StringWithAggregatesFilter<"Inmueble"> | string
    status?: StringWithAggregatesFilter<"Inmueble"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Inmueble"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Inmueble"> | Date | string
  }

  export type InteresWhereInput = {
    AND?: InteresWhereInput | InteresWhereInput[]
    OR?: InteresWhereInput[]
    NOT?: InteresWhereInput | InteresWhereInput[]
    id?: UuidFilter<"Interes"> | string
<<<<<<< Updated upstream
    usuarioId?: UuidFilter<"Interes"> | string
    inmuebleId?: UuidFilter<"Interes"> | string
    mensaje?: StringNullableFilter<"Interes"> | string | null
    estado?: StringFilter<"Interes"> | string
    fechaCreacion?: DateTimeFilter<"Interes"> | Date | string
    inmueble?: XOR<InmuebleScalarRelationFilter, InmuebleWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    mensajes?: MensajeListRelationFilter
=======
    userId?: UuidFilter<"Interes"> | string
    propertyId?: UuidFilter<"Interes"> | string
    message?: StringNullableFilter<"Interes"> | string | null
    status?: StringFilter<"Interes"> | string
    createdAt?: DateTimeFilter<"Interes"> | Date | string
    user?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    property?: XOR<InmuebleScalarRelationFilter, InmuebleWhereInput>
    messages?: MensajeListRelationFilter
>>>>>>> Stashed changes
  }

  export type InteresOrderByWithRelationInput = {
    id?: SortOrder
<<<<<<< Updated upstream
    usuarioId?: SortOrder
    inmuebleId?: SortOrder
    mensaje?: SortOrderInput | SortOrder
    estado?: SortOrder
    fechaCreacion?: SortOrder
    inmueble?: InmuebleOrderByWithRelationInput
    usuario?: UsuarioOrderByWithRelationInput
    mensajes?: MensajeOrderByRelationAggregateInput
=======
    userId?: SortOrder
    propertyId?: SortOrder
    message?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    user?: UsuarioOrderByWithRelationInput
    property?: InmuebleOrderByWithRelationInput
    messages?: MensajeOrderByRelationAggregateInput
>>>>>>> Stashed changes
  }

  export type InteresWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InteresWhereInput | InteresWhereInput[]
    OR?: InteresWhereInput[]
    NOT?: InteresWhereInput | InteresWhereInput[]
<<<<<<< Updated upstream
    usuarioId?: UuidFilter<"Interes"> | string
    inmuebleId?: UuidFilter<"Interes"> | string
    mensaje?: StringNullableFilter<"Interes"> | string | null
    estado?: StringFilter<"Interes"> | string
    fechaCreacion?: DateTimeFilter<"Interes"> | Date | string
    inmueble?: XOR<InmuebleScalarRelationFilter, InmuebleWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    mensajes?: MensajeListRelationFilter
=======
    userId?: UuidFilter<"Interes"> | string
    propertyId?: UuidFilter<"Interes"> | string
    message?: StringNullableFilter<"Interes"> | string | null
    status?: StringFilter<"Interes"> | string
    createdAt?: DateTimeFilter<"Interes"> | Date | string
    user?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    property?: XOR<InmuebleScalarRelationFilter, InmuebleWhereInput>
    messages?: MensajeListRelationFilter
>>>>>>> Stashed changes
  }, "id">

  export type InteresOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    propertyId?: SortOrder
    message?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: InteresCountOrderByAggregateInput
    _max?: InteresMaxOrderByAggregateInput
    _min?: InteresMinOrderByAggregateInput
  }

  export type InteresScalarWhereWithAggregatesInput = {
    AND?: InteresScalarWhereWithAggregatesInput | InteresScalarWhereWithAggregatesInput[]
    OR?: InteresScalarWhereWithAggregatesInput[]
    NOT?: InteresScalarWhereWithAggregatesInput | InteresScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Interes"> | string
    userId?: UuidWithAggregatesFilter<"Interes"> | string
    propertyId?: UuidWithAggregatesFilter<"Interes"> | string
    message?: StringNullableWithAggregatesFilter<"Interes"> | string | null
    status?: StringWithAggregatesFilter<"Interes"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Interes"> | Date | string
  }

  export type MensajeWhereInput = {
    AND?: MensajeWhereInput | MensajeWhereInput[]
    OR?: MensajeWhereInput[]
    NOT?: MensajeWhereInput | MensajeWhereInput[]
    id?: BigIntFilter<"Mensaje"> | bigint | number
<<<<<<< Updated upstream
    emisorId?: UuidFilter<"Mensaje"> | string
    receptorId?: UuidFilter<"Mensaje"> | string
    interesId?: UuidNullableFilter<"Mensaje"> | string | null
    contenido?: StringFilter<"Mensaje"> | string
    leido?: BoolFilter<"Mensaje"> | boolean
    fechaCreacion?: DateTimeFilter<"Mensaje"> | Date | string
    emisor?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    interes?: XOR<InteresNullableScalarRelationFilter, InteresWhereInput> | null
    receptor?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
=======
    senderId?: UuidFilter<"Mensaje"> | string
    receiverId?: UuidFilter<"Mensaje"> | string
    interestId?: UuidNullableFilter<"Mensaje"> | string | null
    content?: StringFilter<"Mensaje"> | string
    read?: BoolFilter<"Mensaje"> | boolean
    createdAt?: DateTimeFilter<"Mensaje"> | Date | string
    sender?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    receiver?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    interest?: XOR<InteresNullableScalarRelationFilter, InteresWhereInput> | null
>>>>>>> Stashed changes
  }

  export type MensajeOrderByWithRelationInput = {
    id?: SortOrder
<<<<<<< Updated upstream
    emisorId?: SortOrder
    receptorId?: SortOrder
    interesId?: SortOrderInput | SortOrder
    contenido?: SortOrder
    leido?: SortOrder
    fechaCreacion?: SortOrder
    emisor?: UsuarioOrderByWithRelationInput
    interes?: InteresOrderByWithRelationInput
    receptor?: UsuarioOrderByWithRelationInput
=======
    senderId?: SortOrder
    receiverId?: SortOrder
    interestId?: SortOrderInput | SortOrder
    content?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
    sender?: UsuarioOrderByWithRelationInput
    receiver?: UsuarioOrderByWithRelationInput
    interest?: InteresOrderByWithRelationInput
>>>>>>> Stashed changes
  }

  export type MensajeWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: MensajeWhereInput | MensajeWhereInput[]
    OR?: MensajeWhereInput[]
    NOT?: MensajeWhereInput | MensajeWhereInput[]
<<<<<<< Updated upstream
    emisorId?: UuidFilter<"Mensaje"> | string
    receptorId?: UuidFilter<"Mensaje"> | string
    interesId?: UuidNullableFilter<"Mensaje"> | string | null
    contenido?: StringFilter<"Mensaje"> | string
    leido?: BoolFilter<"Mensaje"> | boolean
    fechaCreacion?: DateTimeFilter<"Mensaje"> | Date | string
    emisor?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    interes?: XOR<InteresNullableScalarRelationFilter, InteresWhereInput> | null
    receptor?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
=======
    senderId?: UuidFilter<"Mensaje"> | string
    receiverId?: UuidFilter<"Mensaje"> | string
    interestId?: UuidNullableFilter<"Mensaje"> | string | null
    content?: StringFilter<"Mensaje"> | string
    read?: BoolFilter<"Mensaje"> | boolean
    createdAt?: DateTimeFilter<"Mensaje"> | Date | string
    sender?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    receiver?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    interest?: XOR<InteresNullableScalarRelationFilter, InteresWhereInput> | null
>>>>>>> Stashed changes
  }, "id">

  export type MensajeOrderByWithAggregationInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    interestId?: SortOrderInput | SortOrder
    content?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
    _count?: MensajeCountOrderByAggregateInput
    _avg?: MensajeAvgOrderByAggregateInput
    _max?: MensajeMaxOrderByAggregateInput
    _min?: MensajeMinOrderByAggregateInput
    _sum?: MensajeSumOrderByAggregateInput
  }

  export type MensajeScalarWhereWithAggregatesInput = {
    AND?: MensajeScalarWhereWithAggregatesInput | MensajeScalarWhereWithAggregatesInput[]
    OR?: MensajeScalarWhereWithAggregatesInput[]
    NOT?: MensajeScalarWhereWithAggregatesInput | MensajeScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Mensaje"> | bigint | number
    senderId?: UuidWithAggregatesFilter<"Mensaje"> | string
    receiverId?: UuidWithAggregatesFilter<"Mensaje"> | string
    interestId?: UuidNullableWithAggregatesFilter<"Mensaje"> | string | null
    content?: StringWithAggregatesFilter<"Mensaje"> | string
    read?: BoolWithAggregatesFilter<"Mensaje"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Mensaje"> | Date | string
  }

  export type FotoInmuebleWhereInput = {
    AND?: FotoInmuebleWhereInput | FotoInmuebleWhereInput[]
    OR?: FotoInmuebleWhereInput[]
    NOT?: FotoInmuebleWhereInput | FotoInmuebleWhereInput[]
    id?: BigIntFilter<"FotoInmueble"> | bigint | number
    propertyId?: UuidFilter<"FotoInmueble"> | string
    url?: StringFilter<"FotoInmueble"> | string
    order?: IntNullableFilter<"FotoInmueble"> | number | null
    createdAt?: DateTimeFilter<"FotoInmueble"> | Date | string
    property?: XOR<InmuebleScalarRelationFilter, InmuebleWhereInput>
  }

  export type FotoInmuebleOrderByWithRelationInput = {
    id?: SortOrder
    propertyId?: SortOrder
    url?: SortOrder
    order?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    property?: InmuebleOrderByWithRelationInput
  }

  export type FotoInmuebleWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: FotoInmuebleWhereInput | FotoInmuebleWhereInput[]
    OR?: FotoInmuebleWhereInput[]
    NOT?: FotoInmuebleWhereInput | FotoInmuebleWhereInput[]
    propertyId?: UuidFilter<"FotoInmueble"> | string
    url?: StringFilter<"FotoInmueble"> | string
    order?: IntNullableFilter<"FotoInmueble"> | number | null
    createdAt?: DateTimeFilter<"FotoInmueble"> | Date | string
    property?: XOR<InmuebleScalarRelationFilter, InmuebleWhereInput>
  }, "id">

  export type FotoInmuebleOrderByWithAggregationInput = {
    id?: SortOrder
    propertyId?: SortOrder
    url?: SortOrder
    order?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: FotoInmuebleCountOrderByAggregateInput
    _avg?: FotoInmuebleAvgOrderByAggregateInput
    _max?: FotoInmuebleMaxOrderByAggregateInput
    _min?: FotoInmuebleMinOrderByAggregateInput
    _sum?: FotoInmuebleSumOrderByAggregateInput
  }

  export type FotoInmuebleScalarWhereWithAggregatesInput = {
    AND?: FotoInmuebleScalarWhereWithAggregatesInput | FotoInmuebleScalarWhereWithAggregatesInput[]
    OR?: FotoInmuebleScalarWhereWithAggregatesInput[]
    NOT?: FotoInmuebleScalarWhereWithAggregatesInput | FotoInmuebleScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"FotoInmueble"> | bigint | number
    propertyId?: UuidWithAggregatesFilter<"FotoInmueble"> | string
    url?: StringWithAggregatesFilter<"FotoInmueble"> | string
    order?: IntNullableWithAggregatesFilter<"FotoInmueble"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"FotoInmueble"> | Date | string
  }

  export type ResenaWhereInput = {
    AND?: ResenaWhereInput | ResenaWhereInput[]
    OR?: ResenaWhereInput[]
    NOT?: ResenaWhereInput | ResenaWhereInput[]
    id?: BigIntFilter<"Resena"> | bigint | number
<<<<<<< Updated upstream
    usuarioId?: UuidFilter<"Resena"> | string
    inmuebleId?: UuidFilter<"Resena"> | string
    contenido?: StringFilter<"Resena"> | string
    calificacion?: IntFilter<"Resena"> | number
    fechaCreacion?: DateTimeFilter<"Resena"> | Date | string
    inmueble?: XOR<InmuebleScalarRelationFilter, InmuebleWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
=======
    userId?: UuidFilter<"Resena"> | string
    propertyId?: UuidFilter<"Resena"> | string
    content?: StringFilter<"Resena"> | string
    rating?: IntFilter<"Resena"> | number
    createdAt?: DateTimeFilter<"Resena"> | Date | string
    user?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    property?: XOR<InmuebleScalarRelationFilter, InmuebleWhereInput>
>>>>>>> Stashed changes
  }

  export type ResenaOrderByWithRelationInput = {
    id?: SortOrder
<<<<<<< Updated upstream
    usuarioId?: SortOrder
    inmuebleId?: SortOrder
    contenido?: SortOrder
    calificacion?: SortOrder
    fechaCreacion?: SortOrder
    inmueble?: InmuebleOrderByWithRelationInput
    usuario?: UsuarioOrderByWithRelationInput
=======
    userId?: SortOrder
    propertyId?: SortOrder
    content?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    user?: UsuarioOrderByWithRelationInput
    property?: InmuebleOrderByWithRelationInput
>>>>>>> Stashed changes
  }

  export type ResenaWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: ResenaWhereInput | ResenaWhereInput[]
    OR?: ResenaWhereInput[]
    NOT?: ResenaWhereInput | ResenaWhereInput[]
<<<<<<< Updated upstream
    usuarioId?: UuidFilter<"Resena"> | string
    inmuebleId?: UuidFilter<"Resena"> | string
    contenido?: StringFilter<"Resena"> | string
    calificacion?: IntFilter<"Resena"> | number
    fechaCreacion?: DateTimeFilter<"Resena"> | Date | string
    inmueble?: XOR<InmuebleScalarRelationFilter, InmuebleWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
=======
    userId?: UuidFilter<"Resena"> | string
    propertyId?: UuidFilter<"Resena"> | string
    content?: StringFilter<"Resena"> | string
    rating?: IntFilter<"Resena"> | number
    createdAt?: DateTimeFilter<"Resena"> | Date | string
    user?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    property?: XOR<InmuebleScalarRelationFilter, InmuebleWhereInput>
>>>>>>> Stashed changes
  }, "id">

  export type ResenaOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    propertyId?: SortOrder
    content?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    _count?: ResenaCountOrderByAggregateInput
    _avg?: ResenaAvgOrderByAggregateInput
    _max?: ResenaMaxOrderByAggregateInput
    _min?: ResenaMinOrderByAggregateInput
    _sum?: ResenaSumOrderByAggregateInput
  }

  export type ResenaScalarWhereWithAggregatesInput = {
    AND?: ResenaScalarWhereWithAggregatesInput | ResenaScalarWhereWithAggregatesInput[]
    OR?: ResenaScalarWhereWithAggregatesInput[]
    NOT?: ResenaScalarWhereWithAggregatesInput | ResenaScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Resena"> | bigint | number
    userId?: UuidWithAggregatesFilter<"Resena"> | string
    propertyId?: UuidWithAggregatesFilter<"Resena"> | string
    content?: StringWithAggregatesFilter<"Resena"> | string
    rating?: IntWithAggregatesFilter<"Resena"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Resena"> | Date | string
  }

  export type NotificacionWhereInput = {
    AND?: NotificacionWhereInput | NotificacionWhereInput[]
    OR?: NotificacionWhereInput[]
    NOT?: NotificacionWhereInput | NotificacionWhereInput[]
    id?: UuidFilter<"Notificacion"> | string
    userId?: UuidFilter<"Notificacion"> | string
    type?: StringFilter<"Notificacion"> | string
    title?: StringFilter<"Notificacion"> | string
    content?: StringFilter<"Notificacion"> | string
    read?: BoolFilter<"Notificacion"> | boolean
    metadata?: JsonNullableFilter<"Notificacion">
    createdAt?: DateTimeFilter<"Notificacion"> | Date | string
    user?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type NotificacionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    content?: SortOrder
    read?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UsuarioOrderByWithRelationInput
  }

  export type NotificacionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificacionWhereInput | NotificacionWhereInput[]
    OR?: NotificacionWhereInput[]
    NOT?: NotificacionWhereInput | NotificacionWhereInput[]
    userId?: UuidFilter<"Notificacion"> | string
    type?: StringFilter<"Notificacion"> | string
    title?: StringFilter<"Notificacion"> | string
    content?: StringFilter<"Notificacion"> | string
    read?: BoolFilter<"Notificacion"> | boolean
    metadata?: JsonNullableFilter<"Notificacion">
    createdAt?: DateTimeFilter<"Notificacion"> | Date | string
    user?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id">

  export type NotificacionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    content?: SortOrder
    read?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: NotificacionCountOrderByAggregateInput
    _max?: NotificacionMaxOrderByAggregateInput
    _min?: NotificacionMinOrderByAggregateInput
  }

  export type NotificacionScalarWhereWithAggregatesInput = {
    AND?: NotificacionScalarWhereWithAggregatesInput | NotificacionScalarWhereWithAggregatesInput[]
    OR?: NotificacionScalarWhereWithAggregatesInput[]
    NOT?: NotificacionScalarWhereWithAggregatesInput | NotificacionScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Notificacion"> | string
    userId?: UuidWithAggregatesFilter<"Notificacion"> | string
    type?: StringWithAggregatesFilter<"Notificacion"> | string
    title?: StringWithAggregatesFilter<"Notificacion"> | string
    content?: StringWithAggregatesFilter<"Notificacion"> | string
    read?: BoolWithAggregatesFilter<"Notificacion"> | boolean
    metadata?: JsonNullableWithAggregatesFilter<"Notificacion">
    createdAt?: DateTimeWithAggregatesFilter<"Notificacion"> | Date | string
  }

  export type ReporteWhereInput = {
    AND?: ReporteWhereInput | ReporteWhereInput[]
    OR?: ReporteWhereInput[]
    NOT?: ReporteWhereInput | ReporteWhereInput[]
    id?: UuidFilter<"Reporte"> | string
    userId?: UuidFilter<"Reporte"> | string
    type?: StringFilter<"Reporte"> | string
    parameters?: JsonNullableFilter<"Reporte">
    fileUrl?: StringNullableFilter<"Reporte"> | string | null
    createdAt?: DateTimeFilter<"Reporte"> | Date | string
    user?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type ReporteOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    parameters?: SortOrderInput | SortOrder
    fileUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UsuarioOrderByWithRelationInput
  }

  export type ReporteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReporteWhereInput | ReporteWhereInput[]
    OR?: ReporteWhereInput[]
    NOT?: ReporteWhereInput | ReporteWhereInput[]
    userId?: UuidFilter<"Reporte"> | string
    type?: StringFilter<"Reporte"> | string
    parameters?: JsonNullableFilter<"Reporte">
    fileUrl?: StringNullableFilter<"Reporte"> | string | null
    createdAt?: DateTimeFilter<"Reporte"> | Date | string
    user?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id">

  export type ReporteOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    parameters?: SortOrderInput | SortOrder
    fileUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ReporteCountOrderByAggregateInput
    _max?: ReporteMaxOrderByAggregateInput
    _min?: ReporteMinOrderByAggregateInput
  }

  export type ReporteScalarWhereWithAggregatesInput = {
    AND?: ReporteScalarWhereWithAggregatesInput | ReporteScalarWhereWithAggregatesInput[]
    OR?: ReporteScalarWhereWithAggregatesInput[]
    NOT?: ReporteScalarWhereWithAggregatesInput | ReporteScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Reporte"> | string
    userId?: UuidWithAggregatesFilter<"Reporte"> | string
    type?: StringWithAggregatesFilter<"Reporte"> | string
    parameters?: JsonNullableWithAggregatesFilter<"Reporte">
    fileUrl?: StringNullableWithAggregatesFilter<"Reporte"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Reporte"> | Date | string
  }

  export type FavoritoWhereInput = {
    AND?: FavoritoWhereInput | FavoritoWhereInput[]
    OR?: FavoritoWhereInput[]
    NOT?: FavoritoWhereInput | FavoritoWhereInput[]
    id?: UuidFilter<"Favorito"> | string
<<<<<<< Updated upstream
    usuarioId?: UuidFilter<"Favorito"> | string
    inmuebleId?: UuidFilter<"Favorito"> | string
    fechaCreacion?: DateTimeFilter<"Favorito"> | Date | string
    inmueble?: XOR<InmuebleScalarRelationFilter, InmuebleWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
=======
    userId?: UuidFilter<"Favorito"> | string
    propertyId?: UuidFilter<"Favorito"> | string
    createdAt?: DateTimeFilter<"Favorito"> | Date | string
    user?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    property?: XOR<InmuebleScalarRelationFilter, InmuebleWhereInput>
>>>>>>> Stashed changes
  }

  export type FavoritoOrderByWithRelationInput = {
    id?: SortOrder
<<<<<<< Updated upstream
    usuarioId?: SortOrder
    inmuebleId?: SortOrder
    fechaCreacion?: SortOrder
    inmueble?: InmuebleOrderByWithRelationInput
    usuario?: UsuarioOrderByWithRelationInput
=======
    userId?: SortOrder
    propertyId?: SortOrder
    createdAt?: SortOrder
    user?: UsuarioOrderByWithRelationInput
    property?: InmuebleOrderByWithRelationInput
>>>>>>> Stashed changes
  }

  export type FavoritoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_propertyId?: FavoritoUserIdPropertyIdCompoundUniqueInput
    AND?: FavoritoWhereInput | FavoritoWhereInput[]
    OR?: FavoritoWhereInput[]
    NOT?: FavoritoWhereInput | FavoritoWhereInput[]
<<<<<<< Updated upstream
    usuarioId?: UuidFilter<"Favorito"> | string
    inmuebleId?: UuidFilter<"Favorito"> | string
    fechaCreacion?: DateTimeFilter<"Favorito"> | Date | string
    inmueble?: XOR<InmuebleScalarRelationFilter, InmuebleWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id" | "usuarioId_inmuebleId">
=======
    userId?: UuidFilter<"Favorito"> | string
    propertyId?: UuidFilter<"Favorito"> | string
    createdAt?: DateTimeFilter<"Favorito"> | Date | string
    user?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    property?: XOR<InmuebleScalarRelationFilter, InmuebleWhereInput>
  }, "id" | "userId_propertyId">
>>>>>>> Stashed changes

  export type FavoritoOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    propertyId?: SortOrder
    createdAt?: SortOrder
    _count?: FavoritoCountOrderByAggregateInput
    _max?: FavoritoMaxOrderByAggregateInput
    _min?: FavoritoMinOrderByAggregateInput
  }

  export type FavoritoScalarWhereWithAggregatesInput = {
    AND?: FavoritoScalarWhereWithAggregatesInput | FavoritoScalarWhereWithAggregatesInput[]
    OR?: FavoritoScalarWhereWithAggregatesInput[]
    NOT?: FavoritoScalarWhereWithAggregatesInput | FavoritoScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Favorito"> | string
    userId?: UuidWithAggregatesFilter<"Favorito"> | string
    propertyId?: UuidWithAggregatesFilter<"Favorito"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Favorito"> | Date | string
  }

  export type BusquedaGuardadaWhereInput = {
    AND?: BusquedaGuardadaWhereInput | BusquedaGuardadaWhereInput[]
    OR?: BusquedaGuardadaWhereInput[]
    NOT?: BusquedaGuardadaWhereInput | BusquedaGuardadaWhereInput[]
    id?: UuidFilter<"BusquedaGuardada"> | string
    userId?: UuidFilter<"BusquedaGuardada"> | string
    searchParameters?: JsonFilter<"BusquedaGuardada">
    searchName?: StringNullableFilter<"BusquedaGuardada"> | string | null
    createdAt?: DateTimeFilter<"BusquedaGuardada"> | Date | string
    user?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type BusquedaGuardadaOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    searchParameters?: SortOrder
    searchName?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UsuarioOrderByWithRelationInput
  }

  export type BusquedaGuardadaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BusquedaGuardadaWhereInput | BusquedaGuardadaWhereInput[]
    OR?: BusquedaGuardadaWhereInput[]
    NOT?: BusquedaGuardadaWhereInput | BusquedaGuardadaWhereInput[]
    userId?: UuidFilter<"BusquedaGuardada"> | string
    searchParameters?: JsonFilter<"BusquedaGuardada">
    searchName?: StringNullableFilter<"BusquedaGuardada"> | string | null
    createdAt?: DateTimeFilter<"BusquedaGuardada"> | Date | string
    user?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id">

  export type BusquedaGuardadaOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    searchParameters?: SortOrder
    searchName?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: BusquedaGuardadaCountOrderByAggregateInput
    _max?: BusquedaGuardadaMaxOrderByAggregateInput
    _min?: BusquedaGuardadaMinOrderByAggregateInput
  }

  export type BusquedaGuardadaScalarWhereWithAggregatesInput = {
    AND?: BusquedaGuardadaScalarWhereWithAggregatesInput | BusquedaGuardadaScalarWhereWithAggregatesInput[]
    OR?: BusquedaGuardadaScalarWhereWithAggregatesInput[]
    NOT?: BusquedaGuardadaScalarWhereWithAggregatesInput | BusquedaGuardadaScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"BusquedaGuardada"> | string
    userId?: UuidWithAggregatesFilter<"BusquedaGuardada"> | string
    searchParameters?: JsonWithAggregatesFilter<"BusquedaGuardada">
    searchName?: StringNullableWithAggregatesFilter<"BusquedaGuardada"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"BusquedaGuardada"> | Date | string
  }

  export type UserPreferenceWhereInput = {
    AND?: UserPreferenceWhereInput | UserPreferenceWhereInput[]
    OR?: UserPreferenceWhereInput[]
    NOT?: UserPreferenceWhereInput | UserPreferenceWhereInput[]
    id?: UuidFilter<"UserPreference"> | string
    userId?: UuidFilter<"UserPreference"> | string
    propertyTypes?: StringNullableListFilter<"UserPreference">
    modality?: StringNullableFilter<"UserPreference"> | string | null
    locations?: StringNullableListFilter<"UserPreference">
    createdAt?: DateTimeFilter<"UserPreference"> | Date | string
    updatedAt?: DateTimeFilter<"UserPreference"> | Date | string
    user?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type UserPreferenceOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    propertyTypes?: SortOrder
    modality?: SortOrderInput | SortOrder
    locations?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UsuarioOrderByWithRelationInput
  }

  export type UserPreferenceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: UserPreferenceWhereInput | UserPreferenceWhereInput[]
    OR?: UserPreferenceWhereInput[]
    NOT?: UserPreferenceWhereInput | UserPreferenceWhereInput[]
    propertyTypes?: StringNullableListFilter<"UserPreference">
    modality?: StringNullableFilter<"UserPreference"> | string | null
    locations?: StringNullableListFilter<"UserPreference">
    createdAt?: DateTimeFilter<"UserPreference"> | Date | string
    updatedAt?: DateTimeFilter<"UserPreference"> | Date | string
    user?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id" | "userId">

  export type UserPreferenceOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    propertyTypes?: SortOrder
    modality?: SortOrderInput | SortOrder
    locations?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserPreferenceCountOrderByAggregateInput
    _max?: UserPreferenceMaxOrderByAggregateInput
    _min?: UserPreferenceMinOrderByAggregateInput
  }

  export type UserPreferenceScalarWhereWithAggregatesInput = {
    AND?: UserPreferenceScalarWhereWithAggregatesInput | UserPreferenceScalarWhereWithAggregatesInput[]
    OR?: UserPreferenceScalarWhereWithAggregatesInput[]
    NOT?: UserPreferenceScalarWhereWithAggregatesInput | UserPreferenceScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"UserPreference"> | string
    userId?: UuidWithAggregatesFilter<"UserPreference"> | string
    propertyTypes?: StringNullableListFilter<"UserPreference">
    modality?: StringNullableWithAggregatesFilter<"UserPreference"> | string | null
    locations?: StringNullableListFilter<"UserPreference">
    createdAt?: DateTimeWithAggregatesFilter<"UserPreference"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserPreference"> | Date | string
  }

  export type UsuarioCreateInput = {
    id?: string
    googleId?: string | null
    profilePhoto?: string | null
    email: string
    passwordHash?: string | null
    fullName?: string | null
    phone?: string | null
    role?: string
    verificationStatus?: string
    refreshToken?: string | null
<<<<<<< Updated upstream
    fechaCreacion?: Date | string
    fechaActualizacion?: Date | string
    busquedasGuardadas?: BusquedaGuardadaCreateNestedManyWithoutUsuarioInput
    favoritos?: FavoritoCreateNestedManyWithoutUsuarioInput
    inmueblesPropietario?: InmuebleCreateNestedManyWithoutPropietarioInput
    Intereses?: InteresCreateNestedManyWithoutUsuarioInput
    mensajesEmitidos?: MensajeCreateNestedManyWithoutEmisorInput
    mensajesRecibidos?: MensajeCreateNestedManyWithoutReceptorInput
    notificaciones?: NotificacionCreateNestedManyWithoutUsuarioInput
    reportes?: ReporteCreateNestedManyWithoutUsuarioInput
    resenas?: ResenaCreateNestedManyWithoutUsuarioInput
    preferences?: UserPreferenceCreateNestedOneWithoutUserInput
=======
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedProperties?: InmuebleCreateNestedManyWithoutOwnerInput
    interests?: InteresCreateNestedManyWithoutUserInput
    sentMessages?: MensajeCreateNestedManyWithoutSenderInput
    receivedMessages?: MensajeCreateNestedManyWithoutReceiverInput
    reviews?: ResenaCreateNestedManyWithoutUserInput
    notifications?: NotificacionCreateNestedManyWithoutUserInput
    reports?: ReporteCreateNestedManyWithoutUserInput
    favorites?: FavoritoCreateNestedManyWithoutUserInput
    savedSearches?: BusquedaGuardadaCreateNestedManyWithoutUserInput
>>>>>>> Stashed changes
  }

  export type UsuarioUncheckedCreateInput = {
    id?: string
    googleId?: string | null
    profilePhoto?: string | null
    email: string
    passwordHash?: string | null
    fullName?: string | null
    phone?: string | null
    role?: string
    verificationStatus?: string
    refreshToken?: string | null
<<<<<<< Updated upstream
    fechaCreacion?: Date | string
    fechaActualizacion?: Date | string
    busquedasGuardadas?: BusquedaGuardadaUncheckedCreateNestedManyWithoutUsuarioInput
    favoritos?: FavoritoUncheckedCreateNestedManyWithoutUsuarioInput
    inmueblesPropietario?: InmuebleUncheckedCreateNestedManyWithoutPropietarioInput
    Intereses?: InteresUncheckedCreateNestedManyWithoutUsuarioInput
    mensajesEmitidos?: MensajeUncheckedCreateNestedManyWithoutEmisorInput
    mensajesRecibidos?: MensajeUncheckedCreateNestedManyWithoutReceptorInput
    notificaciones?: NotificacionUncheckedCreateNestedManyWithoutUsuarioInput
    reportes?: ReporteUncheckedCreateNestedManyWithoutUsuarioInput
    resenas?: ResenaUncheckedCreateNestedManyWithoutUsuarioInput
    preferences?: UserPreferenceUncheckedCreateNestedOneWithoutUserInput
=======
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedProperties?: InmuebleUncheckedCreateNestedManyWithoutOwnerInput
    interests?: InteresUncheckedCreateNestedManyWithoutUserInput
    sentMessages?: MensajeUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MensajeUncheckedCreateNestedManyWithoutReceiverInput
    reviews?: ResenaUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificacionUncheckedCreateNestedManyWithoutUserInput
    reports?: ReporteUncheckedCreateNestedManyWithoutUserInput
    favorites?: FavoritoUncheckedCreateNestedManyWithoutUserInput
    savedSearches?: BusquedaGuardadaUncheckedCreateNestedManyWithoutUserInput
>>>>>>> Stashed changes
  }

  export type UsuarioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    verificationStatus?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
<<<<<<< Updated upstream
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    busquedasGuardadas?: BusquedaGuardadaUpdateManyWithoutUsuarioNestedInput
    favoritos?: FavoritoUpdateManyWithoutUsuarioNestedInput
    inmueblesPropietario?: InmuebleUpdateManyWithoutPropietarioNestedInput
    Intereses?: InteresUpdateManyWithoutUsuarioNestedInput
    mensajesEmitidos?: MensajeUpdateManyWithoutEmisorNestedInput
    mensajesRecibidos?: MensajeUpdateManyWithoutReceptorNestedInput
    notificaciones?: NotificacionUpdateManyWithoutUsuarioNestedInput
    reportes?: ReporteUpdateManyWithoutUsuarioNestedInput
    resenas?: ResenaUpdateManyWithoutUsuarioNestedInput
    preferences?: UserPreferenceUpdateOneWithoutUserNestedInput
=======
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedProperties?: InmuebleUpdateManyWithoutOwnerNestedInput
    interests?: InteresUpdateManyWithoutUserNestedInput
    sentMessages?: MensajeUpdateManyWithoutSenderNestedInput
    receivedMessages?: MensajeUpdateManyWithoutReceiverNestedInput
    reviews?: ResenaUpdateManyWithoutUserNestedInput
    notifications?: NotificacionUpdateManyWithoutUserNestedInput
    reports?: ReporteUpdateManyWithoutUserNestedInput
    favorites?: FavoritoUpdateManyWithoutUserNestedInput
    savedSearches?: BusquedaGuardadaUpdateManyWithoutUserNestedInput
>>>>>>> Stashed changes
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    verificationStatus?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
<<<<<<< Updated upstream
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    busquedasGuardadas?: BusquedaGuardadaUncheckedUpdateManyWithoutUsuarioNestedInput
    favoritos?: FavoritoUncheckedUpdateManyWithoutUsuarioNestedInput
    inmueblesPropietario?: InmuebleUncheckedUpdateManyWithoutPropietarioNestedInput
    Intereses?: InteresUncheckedUpdateManyWithoutUsuarioNestedInput
    mensajesEmitidos?: MensajeUncheckedUpdateManyWithoutEmisorNestedInput
    mensajesRecibidos?: MensajeUncheckedUpdateManyWithoutReceptorNestedInput
    notificaciones?: NotificacionUncheckedUpdateManyWithoutUsuarioNestedInput
    reportes?: ReporteUncheckedUpdateManyWithoutUsuarioNestedInput
    resenas?: ResenaUncheckedUpdateManyWithoutUsuarioNestedInput
    preferences?: UserPreferenceUncheckedUpdateOneWithoutUserNestedInput
=======
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedProperties?: InmuebleUncheckedUpdateManyWithoutOwnerNestedInput
    interests?: InteresUncheckedUpdateManyWithoutUserNestedInput
    sentMessages?: MensajeUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MensajeUncheckedUpdateManyWithoutReceiverNestedInput
    reviews?: ResenaUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificacionUncheckedUpdateManyWithoutUserNestedInput
    reports?: ReporteUncheckedUpdateManyWithoutUserNestedInput
    favorites?: FavoritoUncheckedUpdateManyWithoutUserNestedInput
    savedSearches?: BusquedaGuardadaUncheckedUpdateManyWithoutUserNestedInput
>>>>>>> Stashed changes
  }

  export type UsuarioCreateManyInput = {
    id?: string
    googleId?: string | null
    profilePhoto?: string | null
    email: string
    passwordHash?: string | null
    fullName?: string | null
    phone?: string | null
    role?: string
    verificationStatus?: string
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsuarioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    verificationStatus?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    verificationStatus?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InmuebleCreateInput = {
    id?: string
    title: string
    description?: string | null
    address?: string | null
    city?: string
    bedrooms?: number | null
    bathrooms?: number | null
    areaM2?: Decimal | DecimalJsLike | number | string | null
<<<<<<< Updated upstream
    precio: Decimal | DecimalJsLike | number | string
    tipoOperacion: string
    estado?: string
    fechaCreacion?: Date | string
    fechaActualizacion?: Date | string
    favoritos?: FavoritoCreateNestedManyWithoutInmuebleInput
    fotosInmueble?: FotoInmuebleCreateNestedManyWithoutInmuebleInput
    propietario: UsuarioCreateNestedOneWithoutInmueblesPropietarioInput
    intereses?: InteresCreateNestedManyWithoutInmuebleInput
    resenas?: ResenaCreateNestedManyWithoutInmuebleInput
=======
    price: Decimal | DecimalJsLike | number | string
    operationType: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UsuarioCreateNestedOneWithoutOwnedPropertiesInput
    interests?: InteresCreateNestedManyWithoutPropertyInput
    propertyPhotos?: FotoInmuebleCreateNestedManyWithoutPropertyInput
    reviews?: ResenaCreateNestedManyWithoutPropertyInput
    favorites?: FavoritoCreateNestedManyWithoutPropertyInput
>>>>>>> Stashed changes
  }

  export type InmuebleUncheckedCreateInput = {
    id?: string
    ownerId: string
    title: string
    description?: string | null
    address?: string | null
    city?: string
    bedrooms?: number | null
    bathrooms?: number | null
    areaM2?: Decimal | DecimalJsLike | number | string | null
<<<<<<< Updated upstream
    precio: Decimal | DecimalJsLike | number | string
    tipoOperacion: string
    estado?: string
    fechaCreacion?: Date | string
    fechaActualizacion?: Date | string
    favoritos?: FavoritoUncheckedCreateNestedManyWithoutInmuebleInput
    fotosInmueble?: FotoInmuebleUncheckedCreateNestedManyWithoutInmuebleInput
    intereses?: InteresUncheckedCreateNestedManyWithoutInmuebleInput
    resenas?: ResenaUncheckedCreateNestedManyWithoutInmuebleInput
=======
    price: Decimal | DecimalJsLike | number | string
    operationType: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    interests?: InteresUncheckedCreateNestedManyWithoutPropertyInput
    propertyPhotos?: FotoInmuebleUncheckedCreateNestedManyWithoutPropertyInput
    reviews?: ResenaUncheckedCreateNestedManyWithoutPropertyInput
    favorites?: FavoritoUncheckedCreateNestedManyWithoutPropertyInput
>>>>>>> Stashed changes
  }

  export type InmuebleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableIntFieldUpdateOperationsInput | number | null
    areaM2?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
<<<<<<< Updated upstream
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tipoOperacion?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    favoritos?: FavoritoUpdateManyWithoutInmuebleNestedInput
    fotosInmueble?: FotoInmuebleUpdateManyWithoutInmuebleNestedInput
    propietario?: UsuarioUpdateOneRequiredWithoutInmueblesPropietarioNestedInput
    intereses?: InteresUpdateManyWithoutInmuebleNestedInput
    resenas?: ResenaUpdateManyWithoutInmuebleNestedInput
=======
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    operationType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UsuarioUpdateOneRequiredWithoutOwnedPropertiesNestedInput
    interests?: InteresUpdateManyWithoutPropertyNestedInput
    propertyPhotos?: FotoInmuebleUpdateManyWithoutPropertyNestedInput
    reviews?: ResenaUpdateManyWithoutPropertyNestedInput
    favorites?: FavoritoUpdateManyWithoutPropertyNestedInput
>>>>>>> Stashed changes
  }

  export type InmuebleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableIntFieldUpdateOperationsInput | number | null
    areaM2?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
<<<<<<< Updated upstream
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tipoOperacion?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    favoritos?: FavoritoUncheckedUpdateManyWithoutInmuebleNestedInput
    fotosInmueble?: FotoInmuebleUncheckedUpdateManyWithoutInmuebleNestedInput
    intereses?: InteresUncheckedUpdateManyWithoutInmuebleNestedInput
    resenas?: ResenaUncheckedUpdateManyWithoutInmuebleNestedInput
=======
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    operationType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    interests?: InteresUncheckedUpdateManyWithoutPropertyNestedInput
    propertyPhotos?: FotoInmuebleUncheckedUpdateManyWithoutPropertyNestedInput
    reviews?: ResenaUncheckedUpdateManyWithoutPropertyNestedInput
    favorites?: FavoritoUncheckedUpdateManyWithoutPropertyNestedInput
>>>>>>> Stashed changes
  }

  export type InmuebleCreateManyInput = {
    id?: string
    ownerId: string
    title: string
    description?: string | null
    address?: string | null
    city?: string
    bedrooms?: number | null
    bathrooms?: number | null
    areaM2?: Decimal | DecimalJsLike | number | string | null
    price: Decimal | DecimalJsLike | number | string
    operationType: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InmuebleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableIntFieldUpdateOperationsInput | number | null
    areaM2?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    operationType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InmuebleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableIntFieldUpdateOperationsInput | number | null
    areaM2?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    operationType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InteresCreateInput = {
    id?: string
<<<<<<< Updated upstream
    mensaje?: string | null
    estado?: string
    fechaCreacion?: Date | string
    inmueble: InmuebleCreateNestedOneWithoutInteresesInput
    usuario: UsuarioCreateNestedOneWithoutInteresesInput
    mensajes?: MensajeCreateNestedManyWithoutInteresInput
=======
    message?: string | null
    status?: string
    createdAt?: Date | string
    user: UsuarioCreateNestedOneWithoutInterestsInput
    property: InmuebleCreateNestedOneWithoutInterestsInput
    messages?: MensajeCreateNestedManyWithoutInterestInput
>>>>>>> Stashed changes
  }

  export type InteresUncheckedCreateInput = {
    id?: string
    userId: string
    propertyId: string
    message?: string | null
    status?: string
    createdAt?: Date | string
    messages?: MensajeUncheckedCreateNestedManyWithoutInterestInput
  }

  export type InteresUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
<<<<<<< Updated upstream
    mensaje?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    inmueble?: InmuebleUpdateOneRequiredWithoutInteresesNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutInteresesNestedInput
    mensajes?: MensajeUpdateManyWithoutInteresNestedInput
=======
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsuarioUpdateOneRequiredWithoutInterestsNestedInput
    property?: InmuebleUpdateOneRequiredWithoutInterestsNestedInput
    messages?: MensajeUpdateManyWithoutInterestNestedInput
>>>>>>> Stashed changes
  }

  export type InteresUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MensajeUncheckedUpdateManyWithoutInterestNestedInput
  }

  export type InteresCreateManyInput = {
    id?: string
    userId: string
    propertyId: string
    message?: string | null
    status?: string
    createdAt?: Date | string
  }

  export type InteresUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InteresUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MensajeCreateInput = {
    id?: bigint | number
<<<<<<< Updated upstream
    contenido: string
    leido?: boolean
    fechaCreacion?: Date | string
    emisor: UsuarioCreateNestedOneWithoutMensajesEmitidosInput
    interes?: InteresCreateNestedOneWithoutMensajesInput
    receptor: UsuarioCreateNestedOneWithoutMensajesRecibidosInput
=======
    content: string
    read?: boolean
    createdAt?: Date | string
    sender: UsuarioCreateNestedOneWithoutSentMessagesInput
    receiver: UsuarioCreateNestedOneWithoutReceivedMessagesInput
    interest?: InteresCreateNestedOneWithoutMessagesInput
>>>>>>> Stashed changes
  }

  export type MensajeUncheckedCreateInput = {
    id?: bigint | number
    senderId: string
    receiverId: string
    interestId?: string | null
    content: string
    read?: boolean
    createdAt?: Date | string
  }

  export type MensajeUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
<<<<<<< Updated upstream
    contenido?: StringFieldUpdateOperationsInput | string
    leido?: BoolFieldUpdateOperationsInput | boolean
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    emisor?: UsuarioUpdateOneRequiredWithoutMensajesEmitidosNestedInput
    interes?: InteresUpdateOneWithoutMensajesNestedInput
    receptor?: UsuarioUpdateOneRequiredWithoutMensajesRecibidosNestedInput
=======
    content?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UsuarioUpdateOneRequiredWithoutSentMessagesNestedInput
    receiver?: UsuarioUpdateOneRequiredWithoutReceivedMessagesNestedInput
    interest?: InteresUpdateOneWithoutMessagesNestedInput
>>>>>>> Stashed changes
  }

  export type MensajeUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    interestId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MensajeCreateManyInput = {
    id?: bigint | number
    senderId: string
    receiverId: string
    interestId?: string | null
    content: string
    read?: boolean
    createdAt?: Date | string
  }

  export type MensajeUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MensajeUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    interestId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FotoInmuebleCreateInput = {
    id?: bigint | number
    url: string
    order?: number | null
    createdAt?: Date | string
    property: InmuebleCreateNestedOneWithoutPropertyPhotosInput
  }

  export type FotoInmuebleUncheckedCreateInput = {
    id?: bigint | number
    propertyId: string
    url: string
    order?: number | null
    createdAt?: Date | string
  }

  export type FotoInmuebleUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    url?: StringFieldUpdateOperationsInput | string
    order?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: InmuebleUpdateOneRequiredWithoutPropertyPhotosNestedInput
  }

  export type FotoInmuebleUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    propertyId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    order?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FotoInmuebleCreateManyInput = {
    id?: bigint | number
    propertyId: string
    url: string
    order?: number | null
    createdAt?: Date | string
  }

  export type FotoInmuebleUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    url?: StringFieldUpdateOperationsInput | string
    order?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FotoInmuebleUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    propertyId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    order?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResenaCreateInput = {
    id?: bigint | number
<<<<<<< Updated upstream
    contenido: string
    calificacion: number
    fechaCreacion?: Date | string
    inmueble: InmuebleCreateNestedOneWithoutResenasInput
    usuario: UsuarioCreateNestedOneWithoutResenasInput
=======
    content: string
    rating: number
    createdAt?: Date | string
    user: UsuarioCreateNestedOneWithoutReviewsInput
    property: InmuebleCreateNestedOneWithoutReviewsInput
>>>>>>> Stashed changes
  }

  export type ResenaUncheckedCreateInput = {
    id?: bigint | number
    userId: string
    propertyId: string
    content: string
    rating: number
    createdAt?: Date | string
  }

  export type ResenaUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
<<<<<<< Updated upstream
    contenido?: StringFieldUpdateOperationsInput | string
    calificacion?: IntFieldUpdateOperationsInput | number
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    inmueble?: InmuebleUpdateOneRequiredWithoutResenasNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutResenasNestedInput
=======
    content?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsuarioUpdateOneRequiredWithoutReviewsNestedInput
    property?: InmuebleUpdateOneRequiredWithoutReviewsNestedInput
>>>>>>> Stashed changes
  }

  export type ResenaUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResenaCreateManyInput = {
    id?: bigint | number
    userId: string
    propertyId: string
    content: string
    rating: number
    createdAt?: Date | string
  }

  export type ResenaUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResenaUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificacionCreateInput = {
    id?: string
    type: string
    title: string
    content: string
    read?: boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    user: UsuarioCreateNestedOneWithoutNotificationsInput
  }

  export type NotificacionUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    title: string
    content: string
    read?: boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type NotificacionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsuarioUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificacionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificacionCreateManyInput = {
    id?: string
    userId: string
    type: string
    title: string
    content: string
    read?: boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type NotificacionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificacionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReporteCreateInput = {
    id?: string
    type: string
    parameters?: NullableJsonNullValueInput | InputJsonValue
    fileUrl?: string | null
    createdAt?: Date | string
    user: UsuarioCreateNestedOneWithoutReportsInput
  }

  export type ReporteUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    parameters?: NullableJsonNullValueInput | InputJsonValue
    fileUrl?: string | null
    createdAt?: Date | string
  }

  export type ReporteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    parameters?: NullableJsonNullValueInput | InputJsonValue
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsuarioUpdateOneRequiredWithoutReportsNestedInput
  }

  export type ReporteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    parameters?: NullableJsonNullValueInput | InputJsonValue
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReporteCreateManyInput = {
    id?: string
    userId: string
    type: string
    parameters?: NullableJsonNullValueInput | InputJsonValue
    fileUrl?: string | null
    createdAt?: Date | string
  }

  export type ReporteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    parameters?: NullableJsonNullValueInput | InputJsonValue
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReporteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    parameters?: NullableJsonNullValueInput | InputJsonValue
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoritoCreateInput = {
    id?: string
<<<<<<< Updated upstream
    fechaCreacion?: Date | string
    inmueble: InmuebleCreateNestedOneWithoutFavoritosInput
    usuario: UsuarioCreateNestedOneWithoutFavoritosInput
=======
    createdAt?: Date | string
    user: UsuarioCreateNestedOneWithoutFavoritesInput
    property: InmuebleCreateNestedOneWithoutFavoritesInput
>>>>>>> Stashed changes
  }

  export type FavoritoUncheckedCreateInput = {
    id?: string
    userId: string
    propertyId: string
    createdAt?: Date | string
  }

  export type FavoritoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
<<<<<<< Updated upstream
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    inmueble?: InmuebleUpdateOneRequiredWithoutFavoritosNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutFavoritosNestedInput
=======
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsuarioUpdateOneRequiredWithoutFavoritesNestedInput
    property?: InmuebleUpdateOneRequiredWithoutFavoritesNestedInput
>>>>>>> Stashed changes
  }

  export type FavoritoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoritoCreateManyInput = {
    id?: string
    userId: string
    propertyId: string
    createdAt?: Date | string
  }

  export type FavoritoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoritoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusquedaGuardadaCreateInput = {
    id?: string
    searchParameters: JsonNullValueInput | InputJsonValue
    searchName?: string | null
    createdAt?: Date | string
    user: UsuarioCreateNestedOneWithoutSavedSearchesInput
  }

  export type BusquedaGuardadaUncheckedCreateInput = {
    id?: string
    userId: string
    searchParameters: JsonNullValueInput | InputJsonValue
    searchName?: string | null
    createdAt?: Date | string
  }

  export type BusquedaGuardadaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    searchParameters?: JsonNullValueInput | InputJsonValue
    searchName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsuarioUpdateOneRequiredWithoutSavedSearchesNestedInput
  }

  export type BusquedaGuardadaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    searchParameters?: JsonNullValueInput | InputJsonValue
    searchName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusquedaGuardadaCreateManyInput = {
    id?: string
    userId: string
    searchParameters: JsonNullValueInput | InputJsonValue
    searchName?: string | null
    createdAt?: Date | string
  }

  export type BusquedaGuardadaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    searchParameters?: JsonNullValueInput | InputJsonValue
    searchName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusquedaGuardadaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    searchParameters?: JsonNullValueInput | InputJsonValue
    searchName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPreferenceCreateInput = {
    id?: string
    propertyTypes?: UserPreferenceCreatepropertyTypesInput | string[]
    modality?: string | null
    locations?: UserPreferenceCreatelocationsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UsuarioCreateNestedOneWithoutPreferencesInput
  }

  export type UserPreferenceUncheckedCreateInput = {
    id?: string
    userId: string
    propertyTypes?: UserPreferenceCreatepropertyTypesInput | string[]
    modality?: string | null
    locations?: UserPreferenceCreatelocationsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserPreferenceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyTypes?: UserPreferenceUpdatepropertyTypesInput | string[]
    modality?: NullableStringFieldUpdateOperationsInput | string | null
    locations?: UserPreferenceUpdatelocationsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsuarioUpdateOneRequiredWithoutPreferencesNestedInput
  }

  export type UserPreferenceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    propertyTypes?: UserPreferenceUpdatepropertyTypesInput | string[]
    modality?: NullableStringFieldUpdateOperationsInput | string | null
    locations?: UserPreferenceUpdatelocationsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPreferenceCreateManyInput = {
    id?: string
    userId: string
    propertyTypes?: UserPreferenceCreatepropertyTypesInput | string[]
    modality?: string | null
    locations?: UserPreferenceCreatelocationsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserPreferenceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyTypes?: UserPreferenceUpdatepropertyTypesInput | string[]
    modality?: NullableStringFieldUpdateOperationsInput | string | null
    locations?: UserPreferenceUpdatelocationsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPreferenceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    propertyTypes?: UserPreferenceUpdatepropertyTypesInput | string[]
    modality?: NullableStringFieldUpdateOperationsInput | string | null
    locations?: UserPreferenceUpdatelocationsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type BusquedaGuardadaListRelationFilter = {
    every?: BusquedaGuardadaWhereInput
    some?: BusquedaGuardadaWhereInput
    none?: BusquedaGuardadaWhereInput
  }

  export type FavoritoListRelationFilter = {
    every?: FavoritoWhereInput
    some?: FavoritoWhereInput
    none?: FavoritoWhereInput
  }

  export type InmuebleListRelationFilter = {
    every?: InmuebleWhereInput
    some?: InmuebleWhereInput
    none?: InmuebleWhereInput
  }

  export type InteresListRelationFilter = {
    every?: InteresWhereInput
    some?: InteresWhereInput
    none?: InteresWhereInput
  }

  export type MensajeListRelationFilter = {
    every?: MensajeWhereInput
    some?: MensajeWhereInput
    none?: MensajeWhereInput
  }

  export type NotificacionListRelationFilter = {
    every?: NotificacionWhereInput
    some?: NotificacionWhereInput
    none?: NotificacionWhereInput
  }

  export type ReporteListRelationFilter = {
    every?: ReporteWhereInput
    some?: ReporteWhereInput
    none?: ReporteWhereInput
  }

  export type ResenaListRelationFilter = {
    every?: ResenaWhereInput
    some?: ResenaWhereInput
    none?: ResenaWhereInput
  }

  export type UserPreferenceNullableScalarRelationFilter = {
    is?: UserPreferenceWhereInput | null
    isNot?: UserPreferenceWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BusquedaGuardadaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FavoritoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InmuebleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InteresOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MensajeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificacionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReporteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ResenaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    googleId?: SortOrder
    profilePhoto?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    fullName?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    verificationStatus?: SortOrder
    refreshToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    googleId?: SortOrder
    profilePhoto?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    fullName?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    verificationStatus?: SortOrder
    refreshToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    googleId?: SortOrder
    profilePhoto?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    fullName?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    verificationStatus?: SortOrder
    refreshToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
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

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type FotoInmuebleListRelationFilter = {
    every?: FotoInmuebleWhereInput
    some?: FotoInmuebleWhereInput
    none?: FotoInmuebleWhereInput
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type FotoInmuebleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InmuebleCountOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    address?: SortOrder
    city?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    areaM2?: SortOrder
    price?: SortOrder
    operationType?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InmuebleAvgOrderByAggregateInput = {
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    areaM2?: SortOrder
    price?: SortOrder
  }

  export type InmuebleMaxOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    address?: SortOrder
    city?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    areaM2?: SortOrder
    price?: SortOrder
    operationType?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InmuebleMinOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    address?: SortOrder
    city?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    areaM2?: SortOrder
    price?: SortOrder
    operationType?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InmuebleSumOrderByAggregateInput = {
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    areaM2?: SortOrder
    price?: SortOrder
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

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type InmuebleScalarRelationFilter = {
    is?: InmuebleWhereInput
    isNot?: InmuebleWhereInput
  }

  export type InteresCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    propertyId?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type InteresMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    propertyId?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type InteresMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    propertyId?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type InteresNullableScalarRelationFilter = {
    is?: InteresWhereInput | null
    isNot?: InteresWhereInput | null
  }

  export type MensajeCountOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    interestId?: SortOrder
    content?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
  }

  export type MensajeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MensajeMaxOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    interestId?: SortOrder
    content?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
  }

  export type MensajeMinOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    interestId?: SortOrder
    content?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
  }

  export type MensajeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FotoInmuebleCountOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    url?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
  }

  export type FotoInmuebleAvgOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
  }

  export type FotoInmuebleMaxOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    url?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
  }

  export type FotoInmuebleMinOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    url?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
  }

  export type FotoInmuebleSumOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
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

  export type ResenaCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    propertyId?: SortOrder
    content?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
  }

  export type ResenaAvgOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
  }

  export type ResenaMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    propertyId?: SortOrder
    content?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
  }

  export type ResenaMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    propertyId?: SortOrder
    content?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
  }

  export type ResenaSumOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
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

  export type NotificacionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    content?: SortOrder
    read?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificacionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    content?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificacionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    content?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
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

  export type ReporteCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    parameters?: SortOrder
    fileUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type ReporteMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    fileUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type ReporteMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    fileUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type FavoritoUserIdPropertyIdCompoundUniqueInput = {
    userId: string
    propertyId: string
  }

  export type FavoritoCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    propertyId?: SortOrder
    createdAt?: SortOrder
  }

  export type FavoritoMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    propertyId?: SortOrder
    createdAt?: SortOrder
  }

  export type FavoritoMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    propertyId?: SortOrder
    createdAt?: SortOrder
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

  export type BusquedaGuardadaCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    searchParameters?: SortOrder
    searchName?: SortOrder
    createdAt?: SortOrder
  }

  export type BusquedaGuardadaMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    searchName?: SortOrder
    createdAt?: SortOrder
  }

  export type BusquedaGuardadaMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    searchName?: SortOrder
    createdAt?: SortOrder
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

<<<<<<< Updated upstream
  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type UserPreferenceCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    propertyTypes?: SortOrder
    modality?: SortOrder
    locations?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserPreferenceMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    modality?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserPreferenceMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    modality?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BusquedaGuardadaCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<BusquedaGuardadaCreateWithoutUsuarioInput, BusquedaGuardadaUncheckedCreateWithoutUsuarioInput> | BusquedaGuardadaCreateWithoutUsuarioInput[] | BusquedaGuardadaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: BusquedaGuardadaCreateOrConnectWithoutUsuarioInput | BusquedaGuardadaCreateOrConnectWithoutUsuarioInput[]
    createMany?: BusquedaGuardadaCreateManyUsuarioInputEnvelope
    connect?: BusquedaGuardadaWhereUniqueInput | BusquedaGuardadaWhereUniqueInput[]
  }

  export type FavoritoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<FavoritoCreateWithoutUsuarioInput, FavoritoUncheckedCreateWithoutUsuarioInput> | FavoritoCreateWithoutUsuarioInput[] | FavoritoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: FavoritoCreateOrConnectWithoutUsuarioInput | FavoritoCreateOrConnectWithoutUsuarioInput[]
    createMany?: FavoritoCreateManyUsuarioInputEnvelope
    connect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
  }

  export type InmuebleCreateNestedManyWithoutPropietarioInput = {
    create?: XOR<InmuebleCreateWithoutPropietarioInput, InmuebleUncheckedCreateWithoutPropietarioInput> | InmuebleCreateWithoutPropietarioInput[] | InmuebleUncheckedCreateWithoutPropietarioInput[]
    connectOrCreate?: InmuebleCreateOrConnectWithoutPropietarioInput | InmuebleCreateOrConnectWithoutPropietarioInput[]
    createMany?: InmuebleCreateManyPropietarioInputEnvelope
=======
  export type InmuebleCreateNestedManyWithoutOwnerInput = {
    create?: XOR<InmuebleCreateWithoutOwnerInput, InmuebleUncheckedCreateWithoutOwnerInput> | InmuebleCreateWithoutOwnerInput[] | InmuebleUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: InmuebleCreateOrConnectWithoutOwnerInput | InmuebleCreateOrConnectWithoutOwnerInput[]
    createMany?: InmuebleCreateManyOwnerInputEnvelope
>>>>>>> Stashed changes
    connect?: InmuebleWhereUniqueInput | InmuebleWhereUniqueInput[]
  }

  export type InteresCreateNestedManyWithoutUserInput = {
    create?: XOR<InteresCreateWithoutUserInput, InteresUncheckedCreateWithoutUserInput> | InteresCreateWithoutUserInput[] | InteresUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InteresCreateOrConnectWithoutUserInput | InteresCreateOrConnectWithoutUserInput[]
    createMany?: InteresCreateManyUserInputEnvelope
    connect?: InteresWhereUniqueInput | InteresWhereUniqueInput[]
  }

  export type MensajeCreateNestedManyWithoutSenderInput = {
    create?: XOR<MensajeCreateWithoutSenderInput, MensajeUncheckedCreateWithoutSenderInput> | MensajeCreateWithoutSenderInput[] | MensajeUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MensajeCreateOrConnectWithoutSenderInput | MensajeCreateOrConnectWithoutSenderInput[]
    createMany?: MensajeCreateManySenderInputEnvelope
    connect?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
  }

  export type MensajeCreateNestedManyWithoutReceiverInput = {
    create?: XOR<MensajeCreateWithoutReceiverInput, MensajeUncheckedCreateWithoutReceiverInput> | MensajeCreateWithoutReceiverInput[] | MensajeUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MensajeCreateOrConnectWithoutReceiverInput | MensajeCreateOrConnectWithoutReceiverInput[]
    createMany?: MensajeCreateManyReceiverInputEnvelope
    connect?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
  }

<<<<<<< Updated upstream
  export type NotificacionCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<NotificacionCreateWithoutUsuarioInput, NotificacionUncheckedCreateWithoutUsuarioInput> | NotificacionCreateWithoutUsuarioInput[] | NotificacionUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: NotificacionCreateOrConnectWithoutUsuarioInput | NotificacionCreateOrConnectWithoutUsuarioInput[]
    createMany?: NotificacionCreateManyUsuarioInputEnvelope
=======
  export type ResenaCreateNestedManyWithoutUserInput = {
    create?: XOR<ResenaCreateWithoutUserInput, ResenaUncheckedCreateWithoutUserInput> | ResenaCreateWithoutUserInput[] | ResenaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResenaCreateOrConnectWithoutUserInput | ResenaCreateOrConnectWithoutUserInput[]
    createMany?: ResenaCreateManyUserInputEnvelope
    connect?: ResenaWhereUniqueInput | ResenaWhereUniqueInput[]
  }

  export type NotificacionCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificacionCreateWithoutUserInput, NotificacionUncheckedCreateWithoutUserInput> | NotificacionCreateWithoutUserInput[] | NotificacionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificacionCreateOrConnectWithoutUserInput | NotificacionCreateOrConnectWithoutUserInput[]
    createMany?: NotificacionCreateManyUserInputEnvelope
>>>>>>> Stashed changes
    connect?: NotificacionWhereUniqueInput | NotificacionWhereUniqueInput[]
  }

  export type ReporteCreateNestedManyWithoutUserInput = {
    create?: XOR<ReporteCreateWithoutUserInput, ReporteUncheckedCreateWithoutUserInput> | ReporteCreateWithoutUserInput[] | ReporteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReporteCreateOrConnectWithoutUserInput | ReporteCreateOrConnectWithoutUserInput[]
    createMany?: ReporteCreateManyUserInputEnvelope
    connect?: ReporteWhereUniqueInput | ReporteWhereUniqueInput[]
  }

<<<<<<< Updated upstream
  export type ResenaCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ResenaCreateWithoutUsuarioInput, ResenaUncheckedCreateWithoutUsuarioInput> | ResenaCreateWithoutUsuarioInput[] | ResenaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ResenaCreateOrConnectWithoutUsuarioInput | ResenaCreateOrConnectWithoutUsuarioInput[]
    createMany?: ResenaCreateManyUsuarioInputEnvelope
    connect?: ResenaWhereUniqueInput | ResenaWhereUniqueInput[]
  }

  export type UserPreferenceCreateNestedOneWithoutUserInput = {
    create?: XOR<UserPreferenceCreateWithoutUserInput, UserPreferenceUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserPreferenceCreateOrConnectWithoutUserInput
    connect?: UserPreferenceWhereUniqueInput
  }

  export type BusquedaGuardadaUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<BusquedaGuardadaCreateWithoutUsuarioInput, BusquedaGuardadaUncheckedCreateWithoutUsuarioInput> | BusquedaGuardadaCreateWithoutUsuarioInput[] | BusquedaGuardadaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: BusquedaGuardadaCreateOrConnectWithoutUsuarioInput | BusquedaGuardadaCreateOrConnectWithoutUsuarioInput[]
    createMany?: BusquedaGuardadaCreateManyUsuarioInputEnvelope
    connect?: BusquedaGuardadaWhereUniqueInput | BusquedaGuardadaWhereUniqueInput[]
  }

  export type FavoritoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<FavoritoCreateWithoutUsuarioInput, FavoritoUncheckedCreateWithoutUsuarioInput> | FavoritoCreateWithoutUsuarioInput[] | FavoritoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: FavoritoCreateOrConnectWithoutUsuarioInput | FavoritoCreateOrConnectWithoutUsuarioInput[]
    createMany?: FavoritoCreateManyUsuarioInputEnvelope
    connect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
  }

  export type InmuebleUncheckedCreateNestedManyWithoutPropietarioInput = {
    create?: XOR<InmuebleCreateWithoutPropietarioInput, InmuebleUncheckedCreateWithoutPropietarioInput> | InmuebleCreateWithoutPropietarioInput[] | InmuebleUncheckedCreateWithoutPropietarioInput[]
    connectOrCreate?: InmuebleCreateOrConnectWithoutPropietarioInput | InmuebleCreateOrConnectWithoutPropietarioInput[]
    createMany?: InmuebleCreateManyPropietarioInputEnvelope
=======
  export type FavoritoCreateNestedManyWithoutUserInput = {
    create?: XOR<FavoritoCreateWithoutUserInput, FavoritoUncheckedCreateWithoutUserInput> | FavoritoCreateWithoutUserInput[] | FavoritoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoritoCreateOrConnectWithoutUserInput | FavoritoCreateOrConnectWithoutUserInput[]
    createMany?: FavoritoCreateManyUserInputEnvelope
    connect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
  }

  export type BusquedaGuardadaCreateNestedManyWithoutUserInput = {
    create?: XOR<BusquedaGuardadaCreateWithoutUserInput, BusquedaGuardadaUncheckedCreateWithoutUserInput> | BusquedaGuardadaCreateWithoutUserInput[] | BusquedaGuardadaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BusquedaGuardadaCreateOrConnectWithoutUserInput | BusquedaGuardadaCreateOrConnectWithoutUserInput[]
    createMany?: BusquedaGuardadaCreateManyUserInputEnvelope
    connect?: BusquedaGuardadaWhereUniqueInput | BusquedaGuardadaWhereUniqueInput[]
  }

  export type InmuebleUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<InmuebleCreateWithoutOwnerInput, InmuebleUncheckedCreateWithoutOwnerInput> | InmuebleCreateWithoutOwnerInput[] | InmuebleUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: InmuebleCreateOrConnectWithoutOwnerInput | InmuebleCreateOrConnectWithoutOwnerInput[]
    createMany?: InmuebleCreateManyOwnerInputEnvelope
>>>>>>> Stashed changes
    connect?: InmuebleWhereUniqueInput | InmuebleWhereUniqueInput[]
  }

  export type InteresUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<InteresCreateWithoutUserInput, InteresUncheckedCreateWithoutUserInput> | InteresCreateWithoutUserInput[] | InteresUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InteresCreateOrConnectWithoutUserInput | InteresCreateOrConnectWithoutUserInput[]
    createMany?: InteresCreateManyUserInputEnvelope
    connect?: InteresWhereUniqueInput | InteresWhereUniqueInput[]
  }

  export type MensajeUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<MensajeCreateWithoutSenderInput, MensajeUncheckedCreateWithoutSenderInput> | MensajeCreateWithoutSenderInput[] | MensajeUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MensajeCreateOrConnectWithoutSenderInput | MensajeCreateOrConnectWithoutSenderInput[]
    createMany?: MensajeCreateManySenderInputEnvelope
    connect?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
  }

  export type MensajeUncheckedCreateNestedManyWithoutReceiverInput = {
    create?: XOR<MensajeCreateWithoutReceiverInput, MensajeUncheckedCreateWithoutReceiverInput> | MensajeCreateWithoutReceiverInput[] | MensajeUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MensajeCreateOrConnectWithoutReceiverInput | MensajeCreateOrConnectWithoutReceiverInput[]
    createMany?: MensajeCreateManyReceiverInputEnvelope
    connect?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
  }

<<<<<<< Updated upstream
  export type NotificacionUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<NotificacionCreateWithoutUsuarioInput, NotificacionUncheckedCreateWithoutUsuarioInput> | NotificacionCreateWithoutUsuarioInput[] | NotificacionUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: NotificacionCreateOrConnectWithoutUsuarioInput | NotificacionCreateOrConnectWithoutUsuarioInput[]
    createMany?: NotificacionCreateManyUsuarioInputEnvelope
=======
  export type ResenaUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ResenaCreateWithoutUserInput, ResenaUncheckedCreateWithoutUserInput> | ResenaCreateWithoutUserInput[] | ResenaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResenaCreateOrConnectWithoutUserInput | ResenaCreateOrConnectWithoutUserInput[]
    createMany?: ResenaCreateManyUserInputEnvelope
    connect?: ResenaWhereUniqueInput | ResenaWhereUniqueInput[]
  }

  export type NotificacionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificacionCreateWithoutUserInput, NotificacionUncheckedCreateWithoutUserInput> | NotificacionCreateWithoutUserInput[] | NotificacionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificacionCreateOrConnectWithoutUserInput | NotificacionCreateOrConnectWithoutUserInput[]
    createMany?: NotificacionCreateManyUserInputEnvelope
>>>>>>> Stashed changes
    connect?: NotificacionWhereUniqueInput | NotificacionWhereUniqueInput[]
  }

  export type ReporteUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReporteCreateWithoutUserInput, ReporteUncheckedCreateWithoutUserInput> | ReporteCreateWithoutUserInput[] | ReporteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReporteCreateOrConnectWithoutUserInput | ReporteCreateOrConnectWithoutUserInput[]
    createMany?: ReporteCreateManyUserInputEnvelope
    connect?: ReporteWhereUniqueInput | ReporteWhereUniqueInput[]
  }

<<<<<<< Updated upstream
  export type ResenaUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ResenaCreateWithoutUsuarioInput, ResenaUncheckedCreateWithoutUsuarioInput> | ResenaCreateWithoutUsuarioInput[] | ResenaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ResenaCreateOrConnectWithoutUsuarioInput | ResenaCreateOrConnectWithoutUsuarioInput[]
    createMany?: ResenaCreateManyUsuarioInputEnvelope
    connect?: ResenaWhereUniqueInput | ResenaWhereUniqueInput[]
  }

  export type UserPreferenceUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserPreferenceCreateWithoutUserInput, UserPreferenceUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserPreferenceCreateOrConnectWithoutUserInput
    connect?: UserPreferenceWhereUniqueInput
=======
  export type FavoritoUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FavoritoCreateWithoutUserInput, FavoritoUncheckedCreateWithoutUserInput> | FavoritoCreateWithoutUserInput[] | FavoritoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoritoCreateOrConnectWithoutUserInput | FavoritoCreateOrConnectWithoutUserInput[]
    createMany?: FavoritoCreateManyUserInputEnvelope
    connect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
  }

  export type BusquedaGuardadaUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BusquedaGuardadaCreateWithoutUserInput, BusquedaGuardadaUncheckedCreateWithoutUserInput> | BusquedaGuardadaCreateWithoutUserInput[] | BusquedaGuardadaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BusquedaGuardadaCreateOrConnectWithoutUserInput | BusquedaGuardadaCreateOrConnectWithoutUserInput[]
    createMany?: BusquedaGuardadaCreateManyUserInputEnvelope
    connect?: BusquedaGuardadaWhereUniqueInput | BusquedaGuardadaWhereUniqueInput[]
>>>>>>> Stashed changes
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

<<<<<<< Updated upstream
  export type BusquedaGuardadaUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<BusquedaGuardadaCreateWithoutUsuarioInput, BusquedaGuardadaUncheckedCreateWithoutUsuarioInput> | BusquedaGuardadaCreateWithoutUsuarioInput[] | BusquedaGuardadaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: BusquedaGuardadaCreateOrConnectWithoutUsuarioInput | BusquedaGuardadaCreateOrConnectWithoutUsuarioInput[]
    upsert?: BusquedaGuardadaUpsertWithWhereUniqueWithoutUsuarioInput | BusquedaGuardadaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: BusquedaGuardadaCreateManyUsuarioInputEnvelope
    set?: BusquedaGuardadaWhereUniqueInput | BusquedaGuardadaWhereUniqueInput[]
    disconnect?: BusquedaGuardadaWhereUniqueInput | BusquedaGuardadaWhereUniqueInput[]
    delete?: BusquedaGuardadaWhereUniqueInput | BusquedaGuardadaWhereUniqueInput[]
    connect?: BusquedaGuardadaWhereUniqueInput | BusquedaGuardadaWhereUniqueInput[]
    update?: BusquedaGuardadaUpdateWithWhereUniqueWithoutUsuarioInput | BusquedaGuardadaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: BusquedaGuardadaUpdateManyWithWhereWithoutUsuarioInput | BusquedaGuardadaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: BusquedaGuardadaScalarWhereInput | BusquedaGuardadaScalarWhereInput[]
  }

  export type FavoritoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<FavoritoCreateWithoutUsuarioInput, FavoritoUncheckedCreateWithoutUsuarioInput> | FavoritoCreateWithoutUsuarioInput[] | FavoritoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: FavoritoCreateOrConnectWithoutUsuarioInput | FavoritoCreateOrConnectWithoutUsuarioInput[]
    upsert?: FavoritoUpsertWithWhereUniqueWithoutUsuarioInput | FavoritoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: FavoritoCreateManyUsuarioInputEnvelope
    set?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    disconnect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    delete?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    connect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    update?: FavoritoUpdateWithWhereUniqueWithoutUsuarioInput | FavoritoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: FavoritoUpdateManyWithWhereWithoutUsuarioInput | FavoritoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: FavoritoScalarWhereInput | FavoritoScalarWhereInput[]
  }

  export type InmuebleUpdateManyWithoutPropietarioNestedInput = {
    create?: XOR<InmuebleCreateWithoutPropietarioInput, InmuebleUncheckedCreateWithoutPropietarioInput> | InmuebleCreateWithoutPropietarioInput[] | InmuebleUncheckedCreateWithoutPropietarioInput[]
    connectOrCreate?: InmuebleCreateOrConnectWithoutPropietarioInput | InmuebleCreateOrConnectWithoutPropietarioInput[]
    upsert?: InmuebleUpsertWithWhereUniqueWithoutPropietarioInput | InmuebleUpsertWithWhereUniqueWithoutPropietarioInput[]
    createMany?: InmuebleCreateManyPropietarioInputEnvelope
=======
  export type InmuebleUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<InmuebleCreateWithoutOwnerInput, InmuebleUncheckedCreateWithoutOwnerInput> | InmuebleCreateWithoutOwnerInput[] | InmuebleUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: InmuebleCreateOrConnectWithoutOwnerInput | InmuebleCreateOrConnectWithoutOwnerInput[]
    upsert?: InmuebleUpsertWithWhereUniqueWithoutOwnerInput | InmuebleUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: InmuebleCreateManyOwnerInputEnvelope
>>>>>>> Stashed changes
    set?: InmuebleWhereUniqueInput | InmuebleWhereUniqueInput[]
    disconnect?: InmuebleWhereUniqueInput | InmuebleWhereUniqueInput[]
    delete?: InmuebleWhereUniqueInput | InmuebleWhereUniqueInput[]
    connect?: InmuebleWhereUniqueInput | InmuebleWhereUniqueInput[]
    update?: InmuebleUpdateWithWhereUniqueWithoutOwnerInput | InmuebleUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: InmuebleUpdateManyWithWhereWithoutOwnerInput | InmuebleUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: InmuebleScalarWhereInput | InmuebleScalarWhereInput[]
  }

  export type InteresUpdateManyWithoutUserNestedInput = {
    create?: XOR<InteresCreateWithoutUserInput, InteresUncheckedCreateWithoutUserInput> | InteresCreateWithoutUserInput[] | InteresUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InteresCreateOrConnectWithoutUserInput | InteresCreateOrConnectWithoutUserInput[]
    upsert?: InteresUpsertWithWhereUniqueWithoutUserInput | InteresUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: InteresCreateManyUserInputEnvelope
    set?: InteresWhereUniqueInput | InteresWhereUniqueInput[]
    disconnect?: InteresWhereUniqueInput | InteresWhereUniqueInput[]
    delete?: InteresWhereUniqueInput | InteresWhereUniqueInput[]
    connect?: InteresWhereUniqueInput | InteresWhereUniqueInput[]
    update?: InteresUpdateWithWhereUniqueWithoutUserInput | InteresUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: InteresUpdateManyWithWhereWithoutUserInput | InteresUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: InteresScalarWhereInput | InteresScalarWhereInput[]
  }

  export type MensajeUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MensajeCreateWithoutSenderInput, MensajeUncheckedCreateWithoutSenderInput> | MensajeCreateWithoutSenderInput[] | MensajeUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MensajeCreateOrConnectWithoutSenderInput | MensajeCreateOrConnectWithoutSenderInput[]
    upsert?: MensajeUpsertWithWhereUniqueWithoutSenderInput | MensajeUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MensajeCreateManySenderInputEnvelope
    set?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
    disconnect?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
    delete?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
    connect?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
    update?: MensajeUpdateWithWhereUniqueWithoutSenderInput | MensajeUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MensajeUpdateManyWithWhereWithoutSenderInput | MensajeUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MensajeScalarWhereInput | MensajeScalarWhereInput[]
  }

  export type MensajeUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<MensajeCreateWithoutReceiverInput, MensajeUncheckedCreateWithoutReceiverInput> | MensajeCreateWithoutReceiverInput[] | MensajeUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MensajeCreateOrConnectWithoutReceiverInput | MensajeCreateOrConnectWithoutReceiverInput[]
    upsert?: MensajeUpsertWithWhereUniqueWithoutReceiverInput | MensajeUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: MensajeCreateManyReceiverInputEnvelope
    set?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
    disconnect?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
    delete?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
    connect?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
    update?: MensajeUpdateWithWhereUniqueWithoutReceiverInput | MensajeUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: MensajeUpdateManyWithWhereWithoutReceiverInput | MensajeUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: MensajeScalarWhereInput | MensajeScalarWhereInput[]
  }

<<<<<<< Updated upstream
  export type NotificacionUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<NotificacionCreateWithoutUsuarioInput, NotificacionUncheckedCreateWithoutUsuarioInput> | NotificacionCreateWithoutUsuarioInput[] | NotificacionUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: NotificacionCreateOrConnectWithoutUsuarioInput | NotificacionCreateOrConnectWithoutUsuarioInput[]
    upsert?: NotificacionUpsertWithWhereUniqueWithoutUsuarioInput | NotificacionUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: NotificacionCreateManyUsuarioInputEnvelope
=======
  export type ResenaUpdateManyWithoutUserNestedInput = {
    create?: XOR<ResenaCreateWithoutUserInput, ResenaUncheckedCreateWithoutUserInput> | ResenaCreateWithoutUserInput[] | ResenaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResenaCreateOrConnectWithoutUserInput | ResenaCreateOrConnectWithoutUserInput[]
    upsert?: ResenaUpsertWithWhereUniqueWithoutUserInput | ResenaUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ResenaCreateManyUserInputEnvelope
    set?: ResenaWhereUniqueInput | ResenaWhereUniqueInput[]
    disconnect?: ResenaWhereUniqueInput | ResenaWhereUniqueInput[]
    delete?: ResenaWhereUniqueInput | ResenaWhereUniqueInput[]
    connect?: ResenaWhereUniqueInput | ResenaWhereUniqueInput[]
    update?: ResenaUpdateWithWhereUniqueWithoutUserInput | ResenaUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ResenaUpdateManyWithWhereWithoutUserInput | ResenaUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ResenaScalarWhereInput | ResenaScalarWhereInput[]
  }

  export type NotificacionUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificacionCreateWithoutUserInput, NotificacionUncheckedCreateWithoutUserInput> | NotificacionCreateWithoutUserInput[] | NotificacionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificacionCreateOrConnectWithoutUserInput | NotificacionCreateOrConnectWithoutUserInput[]
    upsert?: NotificacionUpsertWithWhereUniqueWithoutUserInput | NotificacionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificacionCreateManyUserInputEnvelope
>>>>>>> Stashed changes
    set?: NotificacionWhereUniqueInput | NotificacionWhereUniqueInput[]
    disconnect?: NotificacionWhereUniqueInput | NotificacionWhereUniqueInput[]
    delete?: NotificacionWhereUniqueInput | NotificacionWhereUniqueInput[]
    connect?: NotificacionWhereUniqueInput | NotificacionWhereUniqueInput[]
    update?: NotificacionUpdateWithWhereUniqueWithoutUserInput | NotificacionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificacionUpdateManyWithWhereWithoutUserInput | NotificacionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificacionScalarWhereInput | NotificacionScalarWhereInput[]
  }

  export type ReporteUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReporteCreateWithoutUserInput, ReporteUncheckedCreateWithoutUserInput> | ReporteCreateWithoutUserInput[] | ReporteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReporteCreateOrConnectWithoutUserInput | ReporteCreateOrConnectWithoutUserInput[]
    upsert?: ReporteUpsertWithWhereUniqueWithoutUserInput | ReporteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReporteCreateManyUserInputEnvelope
    set?: ReporteWhereUniqueInput | ReporteWhereUniqueInput[]
    disconnect?: ReporteWhereUniqueInput | ReporteWhereUniqueInput[]
    delete?: ReporteWhereUniqueInput | ReporteWhereUniqueInput[]
    connect?: ReporteWhereUniqueInput | ReporteWhereUniqueInput[]
    update?: ReporteUpdateWithWhereUniqueWithoutUserInput | ReporteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReporteUpdateManyWithWhereWithoutUserInput | ReporteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReporteScalarWhereInput | ReporteScalarWhereInput[]
  }

<<<<<<< Updated upstream
  export type ResenaUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ResenaCreateWithoutUsuarioInput, ResenaUncheckedCreateWithoutUsuarioInput> | ResenaCreateWithoutUsuarioInput[] | ResenaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ResenaCreateOrConnectWithoutUsuarioInput | ResenaCreateOrConnectWithoutUsuarioInput[]
    upsert?: ResenaUpsertWithWhereUniqueWithoutUsuarioInput | ResenaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ResenaCreateManyUsuarioInputEnvelope
    set?: ResenaWhereUniqueInput | ResenaWhereUniqueInput[]
    disconnect?: ResenaWhereUniqueInput | ResenaWhereUniqueInput[]
    delete?: ResenaWhereUniqueInput | ResenaWhereUniqueInput[]
    connect?: ResenaWhereUniqueInput | ResenaWhereUniqueInput[]
    update?: ResenaUpdateWithWhereUniqueWithoutUsuarioInput | ResenaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ResenaUpdateManyWithWhereWithoutUsuarioInput | ResenaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ResenaScalarWhereInput | ResenaScalarWhereInput[]
  }

  export type UserPreferenceUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserPreferenceCreateWithoutUserInput, UserPreferenceUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserPreferenceCreateOrConnectWithoutUserInput
    upsert?: UserPreferenceUpsertWithoutUserInput
    disconnect?: UserPreferenceWhereInput | boolean
    delete?: UserPreferenceWhereInput | boolean
    connect?: UserPreferenceWhereUniqueInput
    update?: XOR<XOR<UserPreferenceUpdateToOneWithWhereWithoutUserInput, UserPreferenceUpdateWithoutUserInput>, UserPreferenceUncheckedUpdateWithoutUserInput>
  }

  export type BusquedaGuardadaUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<BusquedaGuardadaCreateWithoutUsuarioInput, BusquedaGuardadaUncheckedCreateWithoutUsuarioInput> | BusquedaGuardadaCreateWithoutUsuarioInput[] | BusquedaGuardadaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: BusquedaGuardadaCreateOrConnectWithoutUsuarioInput | BusquedaGuardadaCreateOrConnectWithoutUsuarioInput[]
    upsert?: BusquedaGuardadaUpsertWithWhereUniqueWithoutUsuarioInput | BusquedaGuardadaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: BusquedaGuardadaCreateManyUsuarioInputEnvelope
=======
  export type FavoritoUpdateManyWithoutUserNestedInput = {
    create?: XOR<FavoritoCreateWithoutUserInput, FavoritoUncheckedCreateWithoutUserInput> | FavoritoCreateWithoutUserInput[] | FavoritoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoritoCreateOrConnectWithoutUserInput | FavoritoCreateOrConnectWithoutUserInput[]
    upsert?: FavoritoUpsertWithWhereUniqueWithoutUserInput | FavoritoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FavoritoCreateManyUserInputEnvelope
    set?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    disconnect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    delete?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    connect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    update?: FavoritoUpdateWithWhereUniqueWithoutUserInput | FavoritoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FavoritoUpdateManyWithWhereWithoutUserInput | FavoritoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FavoritoScalarWhereInput | FavoritoScalarWhereInput[]
  }

  export type BusquedaGuardadaUpdateManyWithoutUserNestedInput = {
    create?: XOR<BusquedaGuardadaCreateWithoutUserInput, BusquedaGuardadaUncheckedCreateWithoutUserInput> | BusquedaGuardadaCreateWithoutUserInput[] | BusquedaGuardadaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BusquedaGuardadaCreateOrConnectWithoutUserInput | BusquedaGuardadaCreateOrConnectWithoutUserInput[]
    upsert?: BusquedaGuardadaUpsertWithWhereUniqueWithoutUserInput | BusquedaGuardadaUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BusquedaGuardadaCreateManyUserInputEnvelope
>>>>>>> Stashed changes
    set?: BusquedaGuardadaWhereUniqueInput | BusquedaGuardadaWhereUniqueInput[]
    disconnect?: BusquedaGuardadaWhereUniqueInput | BusquedaGuardadaWhereUniqueInput[]
    delete?: BusquedaGuardadaWhereUniqueInput | BusquedaGuardadaWhereUniqueInput[]
    connect?: BusquedaGuardadaWhereUniqueInput | BusquedaGuardadaWhereUniqueInput[]
    update?: BusquedaGuardadaUpdateWithWhereUniqueWithoutUserInput | BusquedaGuardadaUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BusquedaGuardadaUpdateManyWithWhereWithoutUserInput | BusquedaGuardadaUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BusquedaGuardadaScalarWhereInput | BusquedaGuardadaScalarWhereInput[]
  }

<<<<<<< Updated upstream
  export type FavoritoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<FavoritoCreateWithoutUsuarioInput, FavoritoUncheckedCreateWithoutUsuarioInput> | FavoritoCreateWithoutUsuarioInput[] | FavoritoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: FavoritoCreateOrConnectWithoutUsuarioInput | FavoritoCreateOrConnectWithoutUsuarioInput[]
    upsert?: FavoritoUpsertWithWhereUniqueWithoutUsuarioInput | FavoritoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: FavoritoCreateManyUsuarioInputEnvelope
    set?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    disconnect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    delete?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    connect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    update?: FavoritoUpdateWithWhereUniqueWithoutUsuarioInput | FavoritoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: FavoritoUpdateManyWithWhereWithoutUsuarioInput | FavoritoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: FavoritoScalarWhereInput | FavoritoScalarWhereInput[]
  }

  export type InmuebleUncheckedUpdateManyWithoutPropietarioNestedInput = {
    create?: XOR<InmuebleCreateWithoutPropietarioInput, InmuebleUncheckedCreateWithoutPropietarioInput> | InmuebleCreateWithoutPropietarioInput[] | InmuebleUncheckedCreateWithoutPropietarioInput[]
    connectOrCreate?: InmuebleCreateOrConnectWithoutPropietarioInput | InmuebleCreateOrConnectWithoutPropietarioInput[]
    upsert?: InmuebleUpsertWithWhereUniqueWithoutPropietarioInput | InmuebleUpsertWithWhereUniqueWithoutPropietarioInput[]
    createMany?: InmuebleCreateManyPropietarioInputEnvelope
=======
  export type InmuebleUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<InmuebleCreateWithoutOwnerInput, InmuebleUncheckedCreateWithoutOwnerInput> | InmuebleCreateWithoutOwnerInput[] | InmuebleUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: InmuebleCreateOrConnectWithoutOwnerInput | InmuebleCreateOrConnectWithoutOwnerInput[]
    upsert?: InmuebleUpsertWithWhereUniqueWithoutOwnerInput | InmuebleUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: InmuebleCreateManyOwnerInputEnvelope
>>>>>>> Stashed changes
    set?: InmuebleWhereUniqueInput | InmuebleWhereUniqueInput[]
    disconnect?: InmuebleWhereUniqueInput | InmuebleWhereUniqueInput[]
    delete?: InmuebleWhereUniqueInput | InmuebleWhereUniqueInput[]
    connect?: InmuebleWhereUniqueInput | InmuebleWhereUniqueInput[]
    update?: InmuebleUpdateWithWhereUniqueWithoutOwnerInput | InmuebleUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: InmuebleUpdateManyWithWhereWithoutOwnerInput | InmuebleUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: InmuebleScalarWhereInput | InmuebleScalarWhereInput[]
  }

  export type InteresUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<InteresCreateWithoutUserInput, InteresUncheckedCreateWithoutUserInput> | InteresCreateWithoutUserInput[] | InteresUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InteresCreateOrConnectWithoutUserInput | InteresCreateOrConnectWithoutUserInput[]
    upsert?: InteresUpsertWithWhereUniqueWithoutUserInput | InteresUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: InteresCreateManyUserInputEnvelope
    set?: InteresWhereUniqueInput | InteresWhereUniqueInput[]
    disconnect?: InteresWhereUniqueInput | InteresWhereUniqueInput[]
    delete?: InteresWhereUniqueInput | InteresWhereUniqueInput[]
    connect?: InteresWhereUniqueInput | InteresWhereUniqueInput[]
    update?: InteresUpdateWithWhereUniqueWithoutUserInput | InteresUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: InteresUpdateManyWithWhereWithoutUserInput | InteresUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: InteresScalarWhereInput | InteresScalarWhereInput[]
  }

  export type MensajeUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MensajeCreateWithoutSenderInput, MensajeUncheckedCreateWithoutSenderInput> | MensajeCreateWithoutSenderInput[] | MensajeUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MensajeCreateOrConnectWithoutSenderInput | MensajeCreateOrConnectWithoutSenderInput[]
    upsert?: MensajeUpsertWithWhereUniqueWithoutSenderInput | MensajeUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MensajeCreateManySenderInputEnvelope
    set?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
    disconnect?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
    delete?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
    connect?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
    update?: MensajeUpdateWithWhereUniqueWithoutSenderInput | MensajeUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MensajeUpdateManyWithWhereWithoutSenderInput | MensajeUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MensajeScalarWhereInput | MensajeScalarWhereInput[]
  }

  export type MensajeUncheckedUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<MensajeCreateWithoutReceiverInput, MensajeUncheckedCreateWithoutReceiverInput> | MensajeCreateWithoutReceiverInput[] | MensajeUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MensajeCreateOrConnectWithoutReceiverInput | MensajeCreateOrConnectWithoutReceiverInput[]
    upsert?: MensajeUpsertWithWhereUniqueWithoutReceiverInput | MensajeUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: MensajeCreateManyReceiverInputEnvelope
    set?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
    disconnect?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
    delete?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
    connect?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
    update?: MensajeUpdateWithWhereUniqueWithoutReceiverInput | MensajeUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: MensajeUpdateManyWithWhereWithoutReceiverInput | MensajeUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: MensajeScalarWhereInput | MensajeScalarWhereInput[]
  }

<<<<<<< Updated upstream
  export type NotificacionUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<NotificacionCreateWithoutUsuarioInput, NotificacionUncheckedCreateWithoutUsuarioInput> | NotificacionCreateWithoutUsuarioInput[] | NotificacionUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: NotificacionCreateOrConnectWithoutUsuarioInput | NotificacionCreateOrConnectWithoutUsuarioInput[]
    upsert?: NotificacionUpsertWithWhereUniqueWithoutUsuarioInput | NotificacionUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: NotificacionCreateManyUsuarioInputEnvelope
=======
  export type ResenaUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ResenaCreateWithoutUserInput, ResenaUncheckedCreateWithoutUserInput> | ResenaCreateWithoutUserInput[] | ResenaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResenaCreateOrConnectWithoutUserInput | ResenaCreateOrConnectWithoutUserInput[]
    upsert?: ResenaUpsertWithWhereUniqueWithoutUserInput | ResenaUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ResenaCreateManyUserInputEnvelope
    set?: ResenaWhereUniqueInput | ResenaWhereUniqueInput[]
    disconnect?: ResenaWhereUniqueInput | ResenaWhereUniqueInput[]
    delete?: ResenaWhereUniqueInput | ResenaWhereUniqueInput[]
    connect?: ResenaWhereUniqueInput | ResenaWhereUniqueInput[]
    update?: ResenaUpdateWithWhereUniqueWithoutUserInput | ResenaUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ResenaUpdateManyWithWhereWithoutUserInput | ResenaUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ResenaScalarWhereInput | ResenaScalarWhereInput[]
  }

  export type NotificacionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificacionCreateWithoutUserInput, NotificacionUncheckedCreateWithoutUserInput> | NotificacionCreateWithoutUserInput[] | NotificacionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificacionCreateOrConnectWithoutUserInput | NotificacionCreateOrConnectWithoutUserInput[]
    upsert?: NotificacionUpsertWithWhereUniqueWithoutUserInput | NotificacionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificacionCreateManyUserInputEnvelope
>>>>>>> Stashed changes
    set?: NotificacionWhereUniqueInput | NotificacionWhereUniqueInput[]
    disconnect?: NotificacionWhereUniqueInput | NotificacionWhereUniqueInput[]
    delete?: NotificacionWhereUniqueInput | NotificacionWhereUniqueInput[]
    connect?: NotificacionWhereUniqueInput | NotificacionWhereUniqueInput[]
    update?: NotificacionUpdateWithWhereUniqueWithoutUserInput | NotificacionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificacionUpdateManyWithWhereWithoutUserInput | NotificacionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificacionScalarWhereInput | NotificacionScalarWhereInput[]
  }

  export type ReporteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReporteCreateWithoutUserInput, ReporteUncheckedCreateWithoutUserInput> | ReporteCreateWithoutUserInput[] | ReporteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReporteCreateOrConnectWithoutUserInput | ReporteCreateOrConnectWithoutUserInput[]
    upsert?: ReporteUpsertWithWhereUniqueWithoutUserInput | ReporteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReporteCreateManyUserInputEnvelope
    set?: ReporteWhereUniqueInput | ReporteWhereUniqueInput[]
    disconnect?: ReporteWhereUniqueInput | ReporteWhereUniqueInput[]
    delete?: ReporteWhereUniqueInput | ReporteWhereUniqueInput[]
    connect?: ReporteWhereUniqueInput | ReporteWhereUniqueInput[]
    update?: ReporteUpdateWithWhereUniqueWithoutUserInput | ReporteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReporteUpdateManyWithWhereWithoutUserInput | ReporteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReporteScalarWhereInput | ReporteScalarWhereInput[]
  }

<<<<<<< Updated upstream
  export type ResenaUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ResenaCreateWithoutUsuarioInput, ResenaUncheckedCreateWithoutUsuarioInput> | ResenaCreateWithoutUsuarioInput[] | ResenaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ResenaCreateOrConnectWithoutUsuarioInput | ResenaCreateOrConnectWithoutUsuarioInput[]
    upsert?: ResenaUpsertWithWhereUniqueWithoutUsuarioInput | ResenaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ResenaCreateManyUsuarioInputEnvelope
    set?: ResenaWhereUniqueInput | ResenaWhereUniqueInput[]
    disconnect?: ResenaWhereUniqueInput | ResenaWhereUniqueInput[]
    delete?: ResenaWhereUniqueInput | ResenaWhereUniqueInput[]
    connect?: ResenaWhereUniqueInput | ResenaWhereUniqueInput[]
    update?: ResenaUpdateWithWhereUniqueWithoutUsuarioInput | ResenaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ResenaUpdateManyWithWhereWithoutUsuarioInput | ResenaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ResenaScalarWhereInput | ResenaScalarWhereInput[]
  }

  export type UserPreferenceUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserPreferenceCreateWithoutUserInput, UserPreferenceUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserPreferenceCreateOrConnectWithoutUserInput
    upsert?: UserPreferenceUpsertWithoutUserInput
    disconnect?: UserPreferenceWhereInput | boolean
    delete?: UserPreferenceWhereInput | boolean
    connect?: UserPreferenceWhereUniqueInput
    update?: XOR<XOR<UserPreferenceUpdateToOneWithWhereWithoutUserInput, UserPreferenceUpdateWithoutUserInput>, UserPreferenceUncheckedUpdateWithoutUserInput>
  }

  export type FavoritoCreateNestedManyWithoutInmuebleInput = {
    create?: XOR<FavoritoCreateWithoutInmuebleInput, FavoritoUncheckedCreateWithoutInmuebleInput> | FavoritoCreateWithoutInmuebleInput[] | FavoritoUncheckedCreateWithoutInmuebleInput[]
    connectOrCreate?: FavoritoCreateOrConnectWithoutInmuebleInput | FavoritoCreateOrConnectWithoutInmuebleInput[]
    createMany?: FavoritoCreateManyInmuebleInputEnvelope
    connect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
  }

  export type FotoInmuebleCreateNestedManyWithoutInmuebleInput = {
    create?: XOR<FotoInmuebleCreateWithoutInmuebleInput, FotoInmuebleUncheckedCreateWithoutInmuebleInput> | FotoInmuebleCreateWithoutInmuebleInput[] | FotoInmuebleUncheckedCreateWithoutInmuebleInput[]
    connectOrCreate?: FotoInmuebleCreateOrConnectWithoutInmuebleInput | FotoInmuebleCreateOrConnectWithoutInmuebleInput[]
    createMany?: FotoInmuebleCreateManyInmuebleInputEnvelope
    connect?: FotoInmuebleWhereUniqueInput | FotoInmuebleWhereUniqueInput[]
=======
  export type FavoritoUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FavoritoCreateWithoutUserInput, FavoritoUncheckedCreateWithoutUserInput> | FavoritoCreateWithoutUserInput[] | FavoritoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoritoCreateOrConnectWithoutUserInput | FavoritoCreateOrConnectWithoutUserInput[]
    upsert?: FavoritoUpsertWithWhereUniqueWithoutUserInput | FavoritoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FavoritoCreateManyUserInputEnvelope
    set?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    disconnect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    delete?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    connect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    update?: FavoritoUpdateWithWhereUniqueWithoutUserInput | FavoritoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FavoritoUpdateManyWithWhereWithoutUserInput | FavoritoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FavoritoScalarWhereInput | FavoritoScalarWhereInput[]
  }

  export type BusquedaGuardadaUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BusquedaGuardadaCreateWithoutUserInput, BusquedaGuardadaUncheckedCreateWithoutUserInput> | BusquedaGuardadaCreateWithoutUserInput[] | BusquedaGuardadaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BusquedaGuardadaCreateOrConnectWithoutUserInput | BusquedaGuardadaCreateOrConnectWithoutUserInput[]
    upsert?: BusquedaGuardadaUpsertWithWhereUniqueWithoutUserInput | BusquedaGuardadaUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BusquedaGuardadaCreateManyUserInputEnvelope
    set?: BusquedaGuardadaWhereUniqueInput | BusquedaGuardadaWhereUniqueInput[]
    disconnect?: BusquedaGuardadaWhereUniqueInput | BusquedaGuardadaWhereUniqueInput[]
    delete?: BusquedaGuardadaWhereUniqueInput | BusquedaGuardadaWhereUniqueInput[]
    connect?: BusquedaGuardadaWhereUniqueInput | BusquedaGuardadaWhereUniqueInput[]
    update?: BusquedaGuardadaUpdateWithWhereUniqueWithoutUserInput | BusquedaGuardadaUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BusquedaGuardadaUpdateManyWithWhereWithoutUserInput | BusquedaGuardadaUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BusquedaGuardadaScalarWhereInput | BusquedaGuardadaScalarWhereInput[]
>>>>>>> Stashed changes
  }

  export type UsuarioCreateNestedOneWithoutOwnedPropertiesInput = {
    create?: XOR<UsuarioCreateWithoutOwnedPropertiesInput, UsuarioUncheckedCreateWithoutOwnedPropertiesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutOwnedPropertiesInput
    connect?: UsuarioWhereUniqueInput
  }

  export type InteresCreateNestedManyWithoutPropertyInput = {
    create?: XOR<InteresCreateWithoutPropertyInput, InteresUncheckedCreateWithoutPropertyInput> | InteresCreateWithoutPropertyInput[] | InteresUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: InteresCreateOrConnectWithoutPropertyInput | InteresCreateOrConnectWithoutPropertyInput[]
    createMany?: InteresCreateManyPropertyInputEnvelope
    connect?: InteresWhereUniqueInput | InteresWhereUniqueInput[]
  }

<<<<<<< Updated upstream
  export type ResenaCreateNestedManyWithoutInmuebleInput = {
    create?: XOR<ResenaCreateWithoutInmuebleInput, ResenaUncheckedCreateWithoutInmuebleInput> | ResenaCreateWithoutInmuebleInput[] | ResenaUncheckedCreateWithoutInmuebleInput[]
    connectOrCreate?: ResenaCreateOrConnectWithoutInmuebleInput | ResenaCreateOrConnectWithoutInmuebleInput[]
    createMany?: ResenaCreateManyInmuebleInputEnvelope
    connect?: ResenaWhereUniqueInput | ResenaWhereUniqueInput[]
  }

  export type FavoritoUncheckedCreateNestedManyWithoutInmuebleInput = {
    create?: XOR<FavoritoCreateWithoutInmuebleInput, FavoritoUncheckedCreateWithoutInmuebleInput> | FavoritoCreateWithoutInmuebleInput[] | FavoritoUncheckedCreateWithoutInmuebleInput[]
    connectOrCreate?: FavoritoCreateOrConnectWithoutInmuebleInput | FavoritoCreateOrConnectWithoutInmuebleInput[]
    createMany?: FavoritoCreateManyInmuebleInputEnvelope
=======
  export type FotoInmuebleCreateNestedManyWithoutPropertyInput = {
    create?: XOR<FotoInmuebleCreateWithoutPropertyInput, FotoInmuebleUncheckedCreateWithoutPropertyInput> | FotoInmuebleCreateWithoutPropertyInput[] | FotoInmuebleUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: FotoInmuebleCreateOrConnectWithoutPropertyInput | FotoInmuebleCreateOrConnectWithoutPropertyInput[]
    createMany?: FotoInmuebleCreateManyPropertyInputEnvelope
    connect?: FotoInmuebleWhereUniqueInput | FotoInmuebleWhereUniqueInput[]
  }

  export type ResenaCreateNestedManyWithoutPropertyInput = {
    create?: XOR<ResenaCreateWithoutPropertyInput, ResenaUncheckedCreateWithoutPropertyInput> | ResenaCreateWithoutPropertyInput[] | ResenaUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: ResenaCreateOrConnectWithoutPropertyInput | ResenaCreateOrConnectWithoutPropertyInput[]
    createMany?: ResenaCreateManyPropertyInputEnvelope
    connect?: ResenaWhereUniqueInput | ResenaWhereUniqueInput[]
  }

  export type FavoritoCreateNestedManyWithoutPropertyInput = {
    create?: XOR<FavoritoCreateWithoutPropertyInput, FavoritoUncheckedCreateWithoutPropertyInput> | FavoritoCreateWithoutPropertyInput[] | FavoritoUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: FavoritoCreateOrConnectWithoutPropertyInput | FavoritoCreateOrConnectWithoutPropertyInput[]
    createMany?: FavoritoCreateManyPropertyInputEnvelope
    connect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
  }

  export type InteresUncheckedCreateNestedManyWithoutPropertyInput = {
    create?: XOR<InteresCreateWithoutPropertyInput, InteresUncheckedCreateWithoutPropertyInput> | InteresCreateWithoutPropertyInput[] | InteresUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: InteresCreateOrConnectWithoutPropertyInput | InteresCreateOrConnectWithoutPropertyInput[]
    createMany?: InteresCreateManyPropertyInputEnvelope
    connect?: InteresWhereUniqueInput | InteresWhereUniqueInput[]
  }

  export type FotoInmuebleUncheckedCreateNestedManyWithoutPropertyInput = {
    create?: XOR<FotoInmuebleCreateWithoutPropertyInput, FotoInmuebleUncheckedCreateWithoutPropertyInput> | FotoInmuebleCreateWithoutPropertyInput[] | FotoInmuebleUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: FotoInmuebleCreateOrConnectWithoutPropertyInput | FotoInmuebleCreateOrConnectWithoutPropertyInput[]
    createMany?: FotoInmuebleCreateManyPropertyInputEnvelope
    connect?: FotoInmuebleWhereUniqueInput | FotoInmuebleWhereUniqueInput[]
  }

  export type ResenaUncheckedCreateNestedManyWithoutPropertyInput = {
    create?: XOR<ResenaCreateWithoutPropertyInput, ResenaUncheckedCreateWithoutPropertyInput> | ResenaCreateWithoutPropertyInput[] | ResenaUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: ResenaCreateOrConnectWithoutPropertyInput | ResenaCreateOrConnectWithoutPropertyInput[]
    createMany?: ResenaCreateManyPropertyInputEnvelope
    connect?: ResenaWhereUniqueInput | ResenaWhereUniqueInput[]
  }

  export type FavoritoUncheckedCreateNestedManyWithoutPropertyInput = {
    create?: XOR<FavoritoCreateWithoutPropertyInput, FavoritoUncheckedCreateWithoutPropertyInput> | FavoritoCreateWithoutPropertyInput[] | FavoritoUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: FavoritoCreateOrConnectWithoutPropertyInput | FavoritoCreateOrConnectWithoutPropertyInput[]
    createMany?: FavoritoCreateManyPropertyInputEnvelope
>>>>>>> Stashed changes
    connect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
  }

  export type FotoInmuebleUncheckedCreateNestedManyWithoutInmuebleInput = {
    create?: XOR<FotoInmuebleCreateWithoutInmuebleInput, FotoInmuebleUncheckedCreateWithoutInmuebleInput> | FotoInmuebleCreateWithoutInmuebleInput[] | FotoInmuebleUncheckedCreateWithoutInmuebleInput[]
    connectOrCreate?: FotoInmuebleCreateOrConnectWithoutInmuebleInput | FotoInmuebleCreateOrConnectWithoutInmuebleInput[]
    createMany?: FotoInmuebleCreateManyInmuebleInputEnvelope
    connect?: FotoInmuebleWhereUniqueInput | FotoInmuebleWhereUniqueInput[]
  }

  export type InteresUncheckedCreateNestedManyWithoutInmuebleInput = {
    create?: XOR<InteresCreateWithoutInmuebleInput, InteresUncheckedCreateWithoutInmuebleInput> | InteresCreateWithoutInmuebleInput[] | InteresUncheckedCreateWithoutInmuebleInput[]
    connectOrCreate?: InteresCreateOrConnectWithoutInmuebleInput | InteresCreateOrConnectWithoutInmuebleInput[]
    createMany?: InteresCreateManyInmuebleInputEnvelope
    connect?: InteresWhereUniqueInput | InteresWhereUniqueInput[]
  }

  export type ResenaUncheckedCreateNestedManyWithoutInmuebleInput = {
    create?: XOR<ResenaCreateWithoutInmuebleInput, ResenaUncheckedCreateWithoutInmuebleInput> | ResenaCreateWithoutInmuebleInput[] | ResenaUncheckedCreateWithoutInmuebleInput[]
    connectOrCreate?: ResenaCreateOrConnectWithoutInmuebleInput | ResenaCreateOrConnectWithoutInmuebleInput[]
    createMany?: ResenaCreateManyInmuebleInputEnvelope
    connect?: ResenaWhereUniqueInput | ResenaWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

<<<<<<< Updated upstream
  export type FavoritoUpdateManyWithoutInmuebleNestedInput = {
    create?: XOR<FavoritoCreateWithoutInmuebleInput, FavoritoUncheckedCreateWithoutInmuebleInput> | FavoritoCreateWithoutInmuebleInput[] | FavoritoUncheckedCreateWithoutInmuebleInput[]
    connectOrCreate?: FavoritoCreateOrConnectWithoutInmuebleInput | FavoritoCreateOrConnectWithoutInmuebleInput[]
    upsert?: FavoritoUpsertWithWhereUniqueWithoutInmuebleInput | FavoritoUpsertWithWhereUniqueWithoutInmuebleInput[]
    createMany?: FavoritoCreateManyInmuebleInputEnvelope
    set?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    disconnect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    delete?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    connect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    update?: FavoritoUpdateWithWhereUniqueWithoutInmuebleInput | FavoritoUpdateWithWhereUniqueWithoutInmuebleInput[]
    updateMany?: FavoritoUpdateManyWithWhereWithoutInmuebleInput | FavoritoUpdateManyWithWhereWithoutInmuebleInput[]
    deleteMany?: FavoritoScalarWhereInput | FavoritoScalarWhereInput[]
  }

  export type FotoInmuebleUpdateManyWithoutInmuebleNestedInput = {
    create?: XOR<FotoInmuebleCreateWithoutInmuebleInput, FotoInmuebleUncheckedCreateWithoutInmuebleInput> | FotoInmuebleCreateWithoutInmuebleInput[] | FotoInmuebleUncheckedCreateWithoutInmuebleInput[]
    connectOrCreate?: FotoInmuebleCreateOrConnectWithoutInmuebleInput | FotoInmuebleCreateOrConnectWithoutInmuebleInput[]
    upsert?: FotoInmuebleUpsertWithWhereUniqueWithoutInmuebleInput | FotoInmuebleUpsertWithWhereUniqueWithoutInmuebleInput[]
    createMany?: FotoInmuebleCreateManyInmuebleInputEnvelope
    set?: FotoInmuebleWhereUniqueInput | FotoInmuebleWhereUniqueInput[]
    disconnect?: FotoInmuebleWhereUniqueInput | FotoInmuebleWhereUniqueInput[]
    delete?: FotoInmuebleWhereUniqueInput | FotoInmuebleWhereUniqueInput[]
    connect?: FotoInmuebleWhereUniqueInput | FotoInmuebleWhereUniqueInput[]
    update?: FotoInmuebleUpdateWithWhereUniqueWithoutInmuebleInput | FotoInmuebleUpdateWithWhereUniqueWithoutInmuebleInput[]
    updateMany?: FotoInmuebleUpdateManyWithWhereWithoutInmuebleInput | FotoInmuebleUpdateManyWithWhereWithoutInmuebleInput[]
    deleteMany?: FotoInmuebleScalarWhereInput | FotoInmuebleScalarWhereInput[]
  }

  export type UsuarioUpdateOneRequiredWithoutInmueblesPropietarioNestedInput = {
    create?: XOR<UsuarioCreateWithoutInmueblesPropietarioInput, UsuarioUncheckedCreateWithoutInmueblesPropietarioInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutInmueblesPropietarioInput
    upsert?: UsuarioUpsertWithoutInmueblesPropietarioInput
=======
  export type UsuarioUpdateOneRequiredWithoutOwnedPropertiesNestedInput = {
    create?: XOR<UsuarioCreateWithoutOwnedPropertiesInput, UsuarioUncheckedCreateWithoutOwnedPropertiesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutOwnedPropertiesInput
    upsert?: UsuarioUpsertWithoutOwnedPropertiesInput
>>>>>>> Stashed changes
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutOwnedPropertiesInput, UsuarioUpdateWithoutOwnedPropertiesInput>, UsuarioUncheckedUpdateWithoutOwnedPropertiesInput>
  }

  export type InteresUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<InteresCreateWithoutPropertyInput, InteresUncheckedCreateWithoutPropertyInput> | InteresCreateWithoutPropertyInput[] | InteresUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: InteresCreateOrConnectWithoutPropertyInput | InteresCreateOrConnectWithoutPropertyInput[]
    upsert?: InteresUpsertWithWhereUniqueWithoutPropertyInput | InteresUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: InteresCreateManyPropertyInputEnvelope
    set?: InteresWhereUniqueInput | InteresWhereUniqueInput[]
    disconnect?: InteresWhereUniqueInput | InteresWhereUniqueInput[]
    delete?: InteresWhereUniqueInput | InteresWhereUniqueInput[]
    connect?: InteresWhereUniqueInput | InteresWhereUniqueInput[]
    update?: InteresUpdateWithWhereUniqueWithoutPropertyInput | InteresUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: InteresUpdateManyWithWhereWithoutPropertyInput | InteresUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: InteresScalarWhereInput | InteresScalarWhereInput[]
  }

<<<<<<< Updated upstream
  export type ResenaUpdateManyWithoutInmuebleNestedInput = {
    create?: XOR<ResenaCreateWithoutInmuebleInput, ResenaUncheckedCreateWithoutInmuebleInput> | ResenaCreateWithoutInmuebleInput[] | ResenaUncheckedCreateWithoutInmuebleInput[]
    connectOrCreate?: ResenaCreateOrConnectWithoutInmuebleInput | ResenaCreateOrConnectWithoutInmuebleInput[]
    upsert?: ResenaUpsertWithWhereUniqueWithoutInmuebleInput | ResenaUpsertWithWhereUniqueWithoutInmuebleInput[]
    createMany?: ResenaCreateManyInmuebleInputEnvelope
=======
  export type FotoInmuebleUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<FotoInmuebleCreateWithoutPropertyInput, FotoInmuebleUncheckedCreateWithoutPropertyInput> | FotoInmuebleCreateWithoutPropertyInput[] | FotoInmuebleUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: FotoInmuebleCreateOrConnectWithoutPropertyInput | FotoInmuebleCreateOrConnectWithoutPropertyInput[]
    upsert?: FotoInmuebleUpsertWithWhereUniqueWithoutPropertyInput | FotoInmuebleUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: FotoInmuebleCreateManyPropertyInputEnvelope
    set?: FotoInmuebleWhereUniqueInput | FotoInmuebleWhereUniqueInput[]
    disconnect?: FotoInmuebleWhereUniqueInput | FotoInmuebleWhereUniqueInput[]
    delete?: FotoInmuebleWhereUniqueInput | FotoInmuebleWhereUniqueInput[]
    connect?: FotoInmuebleWhereUniqueInput | FotoInmuebleWhereUniqueInput[]
    update?: FotoInmuebleUpdateWithWhereUniqueWithoutPropertyInput | FotoInmuebleUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: FotoInmuebleUpdateManyWithWhereWithoutPropertyInput | FotoInmuebleUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: FotoInmuebleScalarWhereInput | FotoInmuebleScalarWhereInput[]
  }

  export type ResenaUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<ResenaCreateWithoutPropertyInput, ResenaUncheckedCreateWithoutPropertyInput> | ResenaCreateWithoutPropertyInput[] | ResenaUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: ResenaCreateOrConnectWithoutPropertyInput | ResenaCreateOrConnectWithoutPropertyInput[]
    upsert?: ResenaUpsertWithWhereUniqueWithoutPropertyInput | ResenaUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: ResenaCreateManyPropertyInputEnvelope
>>>>>>> Stashed changes
    set?: ResenaWhereUniqueInput | ResenaWhereUniqueInput[]
    disconnect?: ResenaWhereUniqueInput | ResenaWhereUniqueInput[]
    delete?: ResenaWhereUniqueInput | ResenaWhereUniqueInput[]
    connect?: ResenaWhereUniqueInput | ResenaWhereUniqueInput[]
    update?: ResenaUpdateWithWhereUniqueWithoutPropertyInput | ResenaUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: ResenaUpdateManyWithWhereWithoutPropertyInput | ResenaUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: ResenaScalarWhereInput | ResenaScalarWhereInput[]
  }

<<<<<<< Updated upstream
  export type FavoritoUncheckedUpdateManyWithoutInmuebleNestedInput = {
    create?: XOR<FavoritoCreateWithoutInmuebleInput, FavoritoUncheckedCreateWithoutInmuebleInput> | FavoritoCreateWithoutInmuebleInput[] | FavoritoUncheckedCreateWithoutInmuebleInput[]
    connectOrCreate?: FavoritoCreateOrConnectWithoutInmuebleInput | FavoritoCreateOrConnectWithoutInmuebleInput[]
    upsert?: FavoritoUpsertWithWhereUniqueWithoutInmuebleInput | FavoritoUpsertWithWhereUniqueWithoutInmuebleInput[]
    createMany?: FavoritoCreateManyInmuebleInputEnvelope
=======
  export type FavoritoUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<FavoritoCreateWithoutPropertyInput, FavoritoUncheckedCreateWithoutPropertyInput> | FavoritoCreateWithoutPropertyInput[] | FavoritoUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: FavoritoCreateOrConnectWithoutPropertyInput | FavoritoCreateOrConnectWithoutPropertyInput[]
    upsert?: FavoritoUpsertWithWhereUniqueWithoutPropertyInput | FavoritoUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: FavoritoCreateManyPropertyInputEnvelope
    set?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    disconnect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    delete?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    connect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    update?: FavoritoUpdateWithWhereUniqueWithoutPropertyInput | FavoritoUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: FavoritoUpdateManyWithWhereWithoutPropertyInput | FavoritoUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: FavoritoScalarWhereInput | FavoritoScalarWhereInput[]
  }

  export type InteresUncheckedUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<InteresCreateWithoutPropertyInput, InteresUncheckedCreateWithoutPropertyInput> | InteresCreateWithoutPropertyInput[] | InteresUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: InteresCreateOrConnectWithoutPropertyInput | InteresCreateOrConnectWithoutPropertyInput[]
    upsert?: InteresUpsertWithWhereUniqueWithoutPropertyInput | InteresUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: InteresCreateManyPropertyInputEnvelope
    set?: InteresWhereUniqueInput | InteresWhereUniqueInput[]
    disconnect?: InteresWhereUniqueInput | InteresWhereUniqueInput[]
    delete?: InteresWhereUniqueInput | InteresWhereUniqueInput[]
    connect?: InteresWhereUniqueInput | InteresWhereUniqueInput[]
    update?: InteresUpdateWithWhereUniqueWithoutPropertyInput | InteresUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: InteresUpdateManyWithWhereWithoutPropertyInput | InteresUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: InteresScalarWhereInput | InteresScalarWhereInput[]
  }

  export type FotoInmuebleUncheckedUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<FotoInmuebleCreateWithoutPropertyInput, FotoInmuebleUncheckedCreateWithoutPropertyInput> | FotoInmuebleCreateWithoutPropertyInput[] | FotoInmuebleUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: FotoInmuebleCreateOrConnectWithoutPropertyInput | FotoInmuebleCreateOrConnectWithoutPropertyInput[]
    upsert?: FotoInmuebleUpsertWithWhereUniqueWithoutPropertyInput | FotoInmuebleUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: FotoInmuebleCreateManyPropertyInputEnvelope
    set?: FotoInmuebleWhereUniqueInput | FotoInmuebleWhereUniqueInput[]
    disconnect?: FotoInmuebleWhereUniqueInput | FotoInmuebleWhereUniqueInput[]
    delete?: FotoInmuebleWhereUniqueInput | FotoInmuebleWhereUniqueInput[]
    connect?: FotoInmuebleWhereUniqueInput | FotoInmuebleWhereUniqueInput[]
    update?: FotoInmuebleUpdateWithWhereUniqueWithoutPropertyInput | FotoInmuebleUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: FotoInmuebleUpdateManyWithWhereWithoutPropertyInput | FotoInmuebleUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: FotoInmuebleScalarWhereInput | FotoInmuebleScalarWhereInput[]
  }

  export type ResenaUncheckedUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<ResenaCreateWithoutPropertyInput, ResenaUncheckedCreateWithoutPropertyInput> | ResenaCreateWithoutPropertyInput[] | ResenaUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: ResenaCreateOrConnectWithoutPropertyInput | ResenaCreateOrConnectWithoutPropertyInput[]
    upsert?: ResenaUpsertWithWhereUniqueWithoutPropertyInput | ResenaUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: ResenaCreateManyPropertyInputEnvelope
    set?: ResenaWhereUniqueInput | ResenaWhereUniqueInput[]
    disconnect?: ResenaWhereUniqueInput | ResenaWhereUniqueInput[]
    delete?: ResenaWhereUniqueInput | ResenaWhereUniqueInput[]
    connect?: ResenaWhereUniqueInput | ResenaWhereUniqueInput[]
    update?: ResenaUpdateWithWhereUniqueWithoutPropertyInput | ResenaUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: ResenaUpdateManyWithWhereWithoutPropertyInput | ResenaUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: ResenaScalarWhereInput | ResenaScalarWhereInput[]
  }

  export type FavoritoUncheckedUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<FavoritoCreateWithoutPropertyInput, FavoritoUncheckedCreateWithoutPropertyInput> | FavoritoCreateWithoutPropertyInput[] | FavoritoUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: FavoritoCreateOrConnectWithoutPropertyInput | FavoritoCreateOrConnectWithoutPropertyInput[]
    upsert?: FavoritoUpsertWithWhereUniqueWithoutPropertyInput | FavoritoUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: FavoritoCreateManyPropertyInputEnvelope
>>>>>>> Stashed changes
    set?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    disconnect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    delete?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    connect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    update?: FavoritoUpdateWithWhereUniqueWithoutPropertyInput | FavoritoUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: FavoritoUpdateManyWithWhereWithoutPropertyInput | FavoritoUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: FavoritoScalarWhereInput | FavoritoScalarWhereInput[]
  }

<<<<<<< Updated upstream
  export type FotoInmuebleUncheckedUpdateManyWithoutInmuebleNestedInput = {
    create?: XOR<FotoInmuebleCreateWithoutInmuebleInput, FotoInmuebleUncheckedCreateWithoutInmuebleInput> | FotoInmuebleCreateWithoutInmuebleInput[] | FotoInmuebleUncheckedCreateWithoutInmuebleInput[]
    connectOrCreate?: FotoInmuebleCreateOrConnectWithoutInmuebleInput | FotoInmuebleCreateOrConnectWithoutInmuebleInput[]
    upsert?: FotoInmuebleUpsertWithWhereUniqueWithoutInmuebleInput | FotoInmuebleUpsertWithWhereUniqueWithoutInmuebleInput[]
    createMany?: FotoInmuebleCreateManyInmuebleInputEnvelope
    set?: FotoInmuebleWhereUniqueInput | FotoInmuebleWhereUniqueInput[]
    disconnect?: FotoInmuebleWhereUniqueInput | FotoInmuebleWhereUniqueInput[]
    delete?: FotoInmuebleWhereUniqueInput | FotoInmuebleWhereUniqueInput[]
    connect?: FotoInmuebleWhereUniqueInput | FotoInmuebleWhereUniqueInput[]
    update?: FotoInmuebleUpdateWithWhereUniqueWithoutInmuebleInput | FotoInmuebleUpdateWithWhereUniqueWithoutInmuebleInput[]
    updateMany?: FotoInmuebleUpdateManyWithWhereWithoutInmuebleInput | FotoInmuebleUpdateManyWithWhereWithoutInmuebleInput[]
    deleteMany?: FotoInmuebleScalarWhereInput | FotoInmuebleScalarWhereInput[]
  }

  export type InteresUncheckedUpdateManyWithoutInmuebleNestedInput = {
    create?: XOR<InteresCreateWithoutInmuebleInput, InteresUncheckedCreateWithoutInmuebleInput> | InteresCreateWithoutInmuebleInput[] | InteresUncheckedCreateWithoutInmuebleInput[]
    connectOrCreate?: InteresCreateOrConnectWithoutInmuebleInput | InteresCreateOrConnectWithoutInmuebleInput[]
    upsert?: InteresUpsertWithWhereUniqueWithoutInmuebleInput | InteresUpsertWithWhereUniqueWithoutInmuebleInput[]
    createMany?: InteresCreateManyInmuebleInputEnvelope
    set?: InteresWhereUniqueInput | InteresWhereUniqueInput[]
    disconnect?: InteresWhereUniqueInput | InteresWhereUniqueInput[]
    delete?: InteresWhereUniqueInput | InteresWhereUniqueInput[]
    connect?: InteresWhereUniqueInput | InteresWhereUniqueInput[]
    update?: InteresUpdateWithWhereUniqueWithoutInmuebleInput | InteresUpdateWithWhereUniqueWithoutInmuebleInput[]
    updateMany?: InteresUpdateManyWithWhereWithoutInmuebleInput | InteresUpdateManyWithWhereWithoutInmuebleInput[]
    deleteMany?: InteresScalarWhereInput | InteresScalarWhereInput[]
  }

  export type ResenaUncheckedUpdateManyWithoutInmuebleNestedInput = {
    create?: XOR<ResenaCreateWithoutInmuebleInput, ResenaUncheckedCreateWithoutInmuebleInput> | ResenaCreateWithoutInmuebleInput[] | ResenaUncheckedCreateWithoutInmuebleInput[]
    connectOrCreate?: ResenaCreateOrConnectWithoutInmuebleInput | ResenaCreateOrConnectWithoutInmuebleInput[]
    upsert?: ResenaUpsertWithWhereUniqueWithoutInmuebleInput | ResenaUpsertWithWhereUniqueWithoutInmuebleInput[]
    createMany?: ResenaCreateManyInmuebleInputEnvelope
    set?: ResenaWhereUniqueInput | ResenaWhereUniqueInput[]
    disconnect?: ResenaWhereUniqueInput | ResenaWhereUniqueInput[]
    delete?: ResenaWhereUniqueInput | ResenaWhereUniqueInput[]
    connect?: ResenaWhereUniqueInput | ResenaWhereUniqueInput[]
    update?: ResenaUpdateWithWhereUniqueWithoutInmuebleInput | ResenaUpdateWithWhereUniqueWithoutInmuebleInput[]
    updateMany?: ResenaUpdateManyWithWhereWithoutInmuebleInput | ResenaUpdateManyWithWhereWithoutInmuebleInput[]
    deleteMany?: ResenaScalarWhereInput | ResenaScalarWhereInput[]
=======
  export type UsuarioCreateNestedOneWithoutInterestsInput = {
    create?: XOR<UsuarioCreateWithoutInterestsInput, UsuarioUncheckedCreateWithoutInterestsInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutInterestsInput
    connect?: UsuarioWhereUniqueInput
>>>>>>> Stashed changes
  }

  export type InmuebleCreateNestedOneWithoutInterestsInput = {
    create?: XOR<InmuebleCreateWithoutInterestsInput, InmuebleUncheckedCreateWithoutInterestsInput>
    connectOrCreate?: InmuebleCreateOrConnectWithoutInterestsInput
    connect?: InmuebleWhereUniqueInput
  }

<<<<<<< Updated upstream
  export type UsuarioCreateNestedOneWithoutInteresesInput = {
    create?: XOR<UsuarioCreateWithoutInteresesInput, UsuarioUncheckedCreateWithoutInteresesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutInteresesInput
    connect?: UsuarioWhereUniqueInput
  }

  export type MensajeCreateNestedManyWithoutInteresInput = {
    create?: XOR<MensajeCreateWithoutInteresInput, MensajeUncheckedCreateWithoutInteresInput> | MensajeCreateWithoutInteresInput[] | MensajeUncheckedCreateWithoutInteresInput[]
    connectOrCreate?: MensajeCreateOrConnectWithoutInteresInput | MensajeCreateOrConnectWithoutInteresInput[]
    createMany?: MensajeCreateManyInteresInputEnvelope
=======
  export type MensajeCreateNestedManyWithoutInterestInput = {
    create?: XOR<MensajeCreateWithoutInterestInput, MensajeUncheckedCreateWithoutInterestInput> | MensajeCreateWithoutInterestInput[] | MensajeUncheckedCreateWithoutInterestInput[]
    connectOrCreate?: MensajeCreateOrConnectWithoutInterestInput | MensajeCreateOrConnectWithoutInterestInput[]
    createMany?: MensajeCreateManyInterestInputEnvelope
>>>>>>> Stashed changes
    connect?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
  }

  export type MensajeUncheckedCreateNestedManyWithoutInterestInput = {
    create?: XOR<MensajeCreateWithoutInterestInput, MensajeUncheckedCreateWithoutInterestInput> | MensajeCreateWithoutInterestInput[] | MensajeUncheckedCreateWithoutInterestInput[]
    connectOrCreate?: MensajeCreateOrConnectWithoutInterestInput | MensajeCreateOrConnectWithoutInterestInput[]
    createMany?: MensajeCreateManyInterestInputEnvelope
    connect?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
  }

<<<<<<< Updated upstream
  export type InmuebleUpdateOneRequiredWithoutInteresesNestedInput = {
    create?: XOR<InmuebleCreateWithoutInteresesInput, InmuebleUncheckedCreateWithoutInteresesInput>
    connectOrCreate?: InmuebleCreateOrConnectWithoutInteresesInput
    upsert?: InmuebleUpsertWithoutInteresesInput
=======
  export type UsuarioUpdateOneRequiredWithoutInterestsNestedInput = {
    create?: XOR<UsuarioCreateWithoutInterestsInput, UsuarioUncheckedCreateWithoutInterestsInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutInterestsInput
    upsert?: UsuarioUpsertWithoutInterestsInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutInterestsInput, UsuarioUpdateWithoutInterestsInput>, UsuarioUncheckedUpdateWithoutInterestsInput>
  }

  export type InmuebleUpdateOneRequiredWithoutInterestsNestedInput = {
    create?: XOR<InmuebleCreateWithoutInterestsInput, InmuebleUncheckedCreateWithoutInterestsInput>
    connectOrCreate?: InmuebleCreateOrConnectWithoutInterestsInput
    upsert?: InmuebleUpsertWithoutInterestsInput
>>>>>>> Stashed changes
    connect?: InmuebleWhereUniqueInput
    update?: XOR<XOR<InmuebleUpdateToOneWithWhereWithoutInterestsInput, InmuebleUpdateWithoutInterestsInput>, InmuebleUncheckedUpdateWithoutInterestsInput>
  }

<<<<<<< Updated upstream
  export type UsuarioUpdateOneRequiredWithoutInteresesNestedInput = {
    create?: XOR<UsuarioCreateWithoutInteresesInput, UsuarioUncheckedCreateWithoutInteresesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutInteresesInput
    upsert?: UsuarioUpsertWithoutInteresesInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutInteresesInput, UsuarioUpdateWithoutInteresesInput>, UsuarioUncheckedUpdateWithoutInteresesInput>
  }

  export type MensajeUpdateManyWithoutInteresNestedInput = {
    create?: XOR<MensajeCreateWithoutInteresInput, MensajeUncheckedCreateWithoutInteresInput> | MensajeCreateWithoutInteresInput[] | MensajeUncheckedCreateWithoutInteresInput[]
    connectOrCreate?: MensajeCreateOrConnectWithoutInteresInput | MensajeCreateOrConnectWithoutInteresInput[]
    upsert?: MensajeUpsertWithWhereUniqueWithoutInteresInput | MensajeUpsertWithWhereUniqueWithoutInteresInput[]
    createMany?: MensajeCreateManyInteresInputEnvelope
=======
  export type MensajeUpdateManyWithoutInterestNestedInput = {
    create?: XOR<MensajeCreateWithoutInterestInput, MensajeUncheckedCreateWithoutInterestInput> | MensajeCreateWithoutInterestInput[] | MensajeUncheckedCreateWithoutInterestInput[]
    connectOrCreate?: MensajeCreateOrConnectWithoutInterestInput | MensajeCreateOrConnectWithoutInterestInput[]
    upsert?: MensajeUpsertWithWhereUniqueWithoutInterestInput | MensajeUpsertWithWhereUniqueWithoutInterestInput[]
    createMany?: MensajeCreateManyInterestInputEnvelope
>>>>>>> Stashed changes
    set?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
    disconnect?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
    delete?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
    connect?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
    update?: MensajeUpdateWithWhereUniqueWithoutInterestInput | MensajeUpdateWithWhereUniqueWithoutInterestInput[]
    updateMany?: MensajeUpdateManyWithWhereWithoutInterestInput | MensajeUpdateManyWithWhereWithoutInterestInput[]
    deleteMany?: MensajeScalarWhereInput | MensajeScalarWhereInput[]
  }

  export type MensajeUncheckedUpdateManyWithoutInterestNestedInput = {
    create?: XOR<MensajeCreateWithoutInterestInput, MensajeUncheckedCreateWithoutInterestInput> | MensajeCreateWithoutInterestInput[] | MensajeUncheckedCreateWithoutInterestInput[]
    connectOrCreate?: MensajeCreateOrConnectWithoutInterestInput | MensajeCreateOrConnectWithoutInterestInput[]
    upsert?: MensajeUpsertWithWhereUniqueWithoutInterestInput | MensajeUpsertWithWhereUniqueWithoutInterestInput[]
    createMany?: MensajeCreateManyInterestInputEnvelope
    set?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
    disconnect?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
    delete?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
    connect?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
    update?: MensajeUpdateWithWhereUniqueWithoutInterestInput | MensajeUpdateWithWhereUniqueWithoutInterestInput[]
    updateMany?: MensajeUpdateManyWithWhereWithoutInterestInput | MensajeUpdateManyWithWhereWithoutInterestInput[]
    deleteMany?: MensajeScalarWhereInput | MensajeScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutSentMessagesInput = {
    create?: XOR<UsuarioCreateWithoutSentMessagesInput, UsuarioUncheckedCreateWithoutSentMessagesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutSentMessagesInput
    connect?: UsuarioWhereUniqueInput
  }

<<<<<<< Updated upstream
  export type InteresCreateNestedOneWithoutMensajesInput = {
    create?: XOR<InteresCreateWithoutMensajesInput, InteresUncheckedCreateWithoutMensajesInput>
    connectOrCreate?: InteresCreateOrConnectWithoutMensajesInput
=======
  export type UsuarioCreateNestedOneWithoutReceivedMessagesInput = {
    create?: XOR<UsuarioCreateWithoutReceivedMessagesInput, UsuarioUncheckedCreateWithoutReceivedMessagesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutReceivedMessagesInput
    connect?: UsuarioWhereUniqueInput
  }

  export type InteresCreateNestedOneWithoutMessagesInput = {
    create?: XOR<InteresCreateWithoutMessagesInput, InteresUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: InteresCreateOrConnectWithoutMessagesInput
>>>>>>> Stashed changes
    connect?: InteresWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutMensajesRecibidosInput = {
    create?: XOR<UsuarioCreateWithoutMensajesRecibidosInput, UsuarioUncheckedCreateWithoutMensajesRecibidosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutMensajesRecibidosInput
    connect?: UsuarioWhereUniqueInput
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UsuarioUpdateOneRequiredWithoutSentMessagesNestedInput = {
    create?: XOR<UsuarioCreateWithoutSentMessagesInput, UsuarioUncheckedCreateWithoutSentMessagesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutSentMessagesInput
    upsert?: UsuarioUpsertWithoutSentMessagesInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutSentMessagesInput, UsuarioUpdateWithoutSentMessagesInput>, UsuarioUncheckedUpdateWithoutSentMessagesInput>
  }

<<<<<<< Updated upstream
  export type InteresUpdateOneWithoutMensajesNestedInput = {
    create?: XOR<InteresCreateWithoutMensajesInput, InteresUncheckedCreateWithoutMensajesInput>
    connectOrCreate?: InteresCreateOrConnectWithoutMensajesInput
    upsert?: InteresUpsertWithoutMensajesInput
=======
  export type UsuarioUpdateOneRequiredWithoutReceivedMessagesNestedInput = {
    create?: XOR<UsuarioCreateWithoutReceivedMessagesInput, UsuarioUncheckedCreateWithoutReceivedMessagesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutReceivedMessagesInput
    upsert?: UsuarioUpsertWithoutReceivedMessagesInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutReceivedMessagesInput, UsuarioUpdateWithoutReceivedMessagesInput>, UsuarioUncheckedUpdateWithoutReceivedMessagesInput>
  }

  export type InteresUpdateOneWithoutMessagesNestedInput = {
    create?: XOR<InteresCreateWithoutMessagesInput, InteresUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: InteresCreateOrConnectWithoutMessagesInput
    upsert?: InteresUpsertWithoutMessagesInput
>>>>>>> Stashed changes
    disconnect?: InteresWhereInput | boolean
    delete?: InteresWhereInput | boolean
    connect?: InteresWhereUniqueInput
    update?: XOR<XOR<InteresUpdateToOneWithWhereWithoutMessagesInput, InteresUpdateWithoutMessagesInput>, InteresUncheckedUpdateWithoutMessagesInput>
  }

<<<<<<< Updated upstream
  export type UsuarioUpdateOneRequiredWithoutMensajesRecibidosNestedInput = {
    create?: XOR<UsuarioCreateWithoutMensajesRecibidosInput, UsuarioUncheckedCreateWithoutMensajesRecibidosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutMensajesRecibidosInput
    upsert?: UsuarioUpsertWithoutMensajesRecibidosInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutMensajesRecibidosInput, UsuarioUpdateWithoutMensajesRecibidosInput>, UsuarioUncheckedUpdateWithoutMensajesRecibidosInput>
  }

  export type InmuebleCreateNestedOneWithoutFotosInmuebleInput = {
    create?: XOR<InmuebleCreateWithoutFotosInmuebleInput, InmuebleUncheckedCreateWithoutFotosInmuebleInput>
    connectOrCreate?: InmuebleCreateOrConnectWithoutFotosInmuebleInput
=======
  export type InmuebleCreateNestedOneWithoutPropertyPhotosInput = {
    create?: XOR<InmuebleCreateWithoutPropertyPhotosInput, InmuebleUncheckedCreateWithoutPropertyPhotosInput>
    connectOrCreate?: InmuebleCreateOrConnectWithoutPropertyPhotosInput
>>>>>>> Stashed changes
    connect?: InmuebleWhereUniqueInput
  }

  export type InmuebleUpdateOneRequiredWithoutPropertyPhotosNestedInput = {
    create?: XOR<InmuebleCreateWithoutPropertyPhotosInput, InmuebleUncheckedCreateWithoutPropertyPhotosInput>
    connectOrCreate?: InmuebleCreateOrConnectWithoutPropertyPhotosInput
    upsert?: InmuebleUpsertWithoutPropertyPhotosInput
    connect?: InmuebleWhereUniqueInput
    update?: XOR<XOR<InmuebleUpdateToOneWithWhereWithoutPropertyPhotosInput, InmuebleUpdateWithoutPropertyPhotosInput>, InmuebleUncheckedUpdateWithoutPropertyPhotosInput>
  }

<<<<<<< Updated upstream
  export type InmuebleCreateNestedOneWithoutResenasInput = {
    create?: XOR<InmuebleCreateWithoutResenasInput, InmuebleUncheckedCreateWithoutResenasInput>
    connectOrCreate?: InmuebleCreateOrConnectWithoutResenasInput
=======
  export type UsuarioCreateNestedOneWithoutReviewsInput = {
    create?: XOR<UsuarioCreateWithoutReviewsInput, UsuarioUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutReviewsInput
    connect?: UsuarioWhereUniqueInput
  }

  export type InmuebleCreateNestedOneWithoutReviewsInput = {
    create?: XOR<InmuebleCreateWithoutReviewsInput, InmuebleUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: InmuebleCreateOrConnectWithoutReviewsInput
>>>>>>> Stashed changes
    connect?: InmuebleWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutResenasInput = {
    create?: XOR<UsuarioCreateWithoutResenasInput, UsuarioUncheckedCreateWithoutResenasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutResenasInput
    connect?: UsuarioWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

<<<<<<< Updated upstream
  export type InmuebleUpdateOneRequiredWithoutResenasNestedInput = {
    create?: XOR<InmuebleCreateWithoutResenasInput, InmuebleUncheckedCreateWithoutResenasInput>
    connectOrCreate?: InmuebleCreateOrConnectWithoutResenasInput
    upsert?: InmuebleUpsertWithoutResenasInput
=======
  export type UsuarioUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<UsuarioCreateWithoutReviewsInput, UsuarioUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutReviewsInput
    upsert?: UsuarioUpsertWithoutReviewsInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutReviewsInput, UsuarioUpdateWithoutReviewsInput>, UsuarioUncheckedUpdateWithoutReviewsInput>
  }

  export type InmuebleUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<InmuebleCreateWithoutReviewsInput, InmuebleUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: InmuebleCreateOrConnectWithoutReviewsInput
    upsert?: InmuebleUpsertWithoutReviewsInput
>>>>>>> Stashed changes
    connect?: InmuebleWhereUniqueInput
    update?: XOR<XOR<InmuebleUpdateToOneWithWhereWithoutReviewsInput, InmuebleUpdateWithoutReviewsInput>, InmuebleUncheckedUpdateWithoutReviewsInput>
  }

<<<<<<< Updated upstream
  export type UsuarioUpdateOneRequiredWithoutResenasNestedInput = {
    create?: XOR<UsuarioCreateWithoutResenasInput, UsuarioUncheckedCreateWithoutResenasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutResenasInput
    upsert?: UsuarioUpsertWithoutResenasInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutResenasInput, UsuarioUpdateWithoutResenasInput>, UsuarioUncheckedUpdateWithoutResenasInput>
  }

  export type UsuarioCreateNestedOneWithoutNotificacionesInput = {
    create?: XOR<UsuarioCreateWithoutNotificacionesInput, UsuarioUncheckedCreateWithoutNotificacionesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutNotificacionesInput
=======
  export type UsuarioCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UsuarioCreateWithoutNotificationsInput, UsuarioUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutNotificationsInput
>>>>>>> Stashed changes
    connect?: UsuarioWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<UsuarioCreateWithoutNotificationsInput, UsuarioUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutNotificationsInput
    upsert?: UsuarioUpsertWithoutNotificationsInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutNotificationsInput, UsuarioUpdateWithoutNotificationsInput>, UsuarioUncheckedUpdateWithoutNotificationsInput>
  }

  export type UsuarioCreateNestedOneWithoutReportsInput = {
    create?: XOR<UsuarioCreateWithoutReportsInput, UsuarioUncheckedCreateWithoutReportsInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutReportsInput
    connect?: UsuarioWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutReportsNestedInput = {
    create?: XOR<UsuarioCreateWithoutReportsInput, UsuarioUncheckedCreateWithoutReportsInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutReportsInput
    upsert?: UsuarioUpsertWithoutReportsInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutReportsInput, UsuarioUpdateWithoutReportsInput>, UsuarioUncheckedUpdateWithoutReportsInput>
  }

<<<<<<< Updated upstream
  export type InmuebleCreateNestedOneWithoutFavoritosInput = {
    create?: XOR<InmuebleCreateWithoutFavoritosInput, InmuebleUncheckedCreateWithoutFavoritosInput>
    connectOrCreate?: InmuebleCreateOrConnectWithoutFavoritosInput
    connect?: InmuebleWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutFavoritosInput = {
    create?: XOR<UsuarioCreateWithoutFavoritosInput, UsuarioUncheckedCreateWithoutFavoritosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutFavoritosInput
    connect?: UsuarioWhereUniqueInput
=======
  export type UsuarioCreateNestedOneWithoutFavoritesInput = {
    create?: XOR<UsuarioCreateWithoutFavoritesInput, UsuarioUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutFavoritesInput
    connect?: UsuarioWhereUniqueInput
  }

  export type InmuebleCreateNestedOneWithoutFavoritesInput = {
    create?: XOR<InmuebleCreateWithoutFavoritesInput, InmuebleUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: InmuebleCreateOrConnectWithoutFavoritesInput
    connect?: InmuebleWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutFavoritesNestedInput = {
    create?: XOR<UsuarioCreateWithoutFavoritesInput, UsuarioUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutFavoritesInput
    upsert?: UsuarioUpsertWithoutFavoritesInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutFavoritesInput, UsuarioUpdateWithoutFavoritesInput>, UsuarioUncheckedUpdateWithoutFavoritesInput>
>>>>>>> Stashed changes
  }

  export type InmuebleUpdateOneRequiredWithoutFavoritesNestedInput = {
    create?: XOR<InmuebleCreateWithoutFavoritesInput, InmuebleUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: InmuebleCreateOrConnectWithoutFavoritesInput
    upsert?: InmuebleUpsertWithoutFavoritesInput
    connect?: InmuebleWhereUniqueInput
    update?: XOR<XOR<InmuebleUpdateToOneWithWhereWithoutFavoritesInput, InmuebleUpdateWithoutFavoritesInput>, InmuebleUncheckedUpdateWithoutFavoritesInput>
  }

<<<<<<< Updated upstream
  export type UsuarioUpdateOneRequiredWithoutFavoritosNestedInput = {
    create?: XOR<UsuarioCreateWithoutFavoritosInput, UsuarioUncheckedCreateWithoutFavoritosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutFavoritosInput
    upsert?: UsuarioUpsertWithoutFavoritosInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutFavoritosInput, UsuarioUpdateWithoutFavoritosInput>, UsuarioUncheckedUpdateWithoutFavoritosInput>
  }

  export type UsuarioCreateNestedOneWithoutBusquedasGuardadasInput = {
    create?: XOR<UsuarioCreateWithoutBusquedasGuardadasInput, UsuarioUncheckedCreateWithoutBusquedasGuardadasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutBusquedasGuardadasInput
=======
  export type UsuarioCreateNestedOneWithoutSavedSearchesInput = {
    create?: XOR<UsuarioCreateWithoutSavedSearchesInput, UsuarioUncheckedCreateWithoutSavedSearchesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutSavedSearchesInput
>>>>>>> Stashed changes
    connect?: UsuarioWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutSavedSearchesNestedInput = {
    create?: XOR<UsuarioCreateWithoutSavedSearchesInput, UsuarioUncheckedCreateWithoutSavedSearchesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutSavedSearchesInput
    upsert?: UsuarioUpsertWithoutSavedSearchesInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutSavedSearchesInput, UsuarioUpdateWithoutSavedSearchesInput>, UsuarioUncheckedUpdateWithoutSavedSearchesInput>
  }

  export type UserPreferenceCreatepropertyTypesInput = {
    set: string[]
  }

  export type UserPreferenceCreatelocationsInput = {
    set: string[]
  }

  export type UsuarioCreateNestedOneWithoutPreferencesInput = {
    create?: XOR<UsuarioCreateWithoutPreferencesInput, UsuarioUncheckedCreateWithoutPreferencesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutPreferencesInput
    connect?: UsuarioWhereUniqueInput
  }

  export type UserPreferenceUpdatepropertyTypesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserPreferenceUpdatelocationsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UsuarioUpdateOneRequiredWithoutPreferencesNestedInput = {
    create?: XOR<UsuarioCreateWithoutPreferencesInput, UsuarioUncheckedCreateWithoutPreferencesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutPreferencesInput
    upsert?: UsuarioUpsertWithoutPreferencesInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutPreferencesInput, UsuarioUpdateWithoutPreferencesInput>, UsuarioUncheckedUpdateWithoutPreferencesInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
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

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
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

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
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

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

<<<<<<< Updated upstream
  export type BusquedaGuardadaCreateWithoutUsuarioInput = {
    id?: string
    parametrosBusqueda: JsonNullValueInput | InputJsonValue
    nombreBusqueda?: string | null
    fechaCreacion?: Date | string
  }

  export type BusquedaGuardadaUncheckedCreateWithoutUsuarioInput = {
    id?: string
    parametrosBusqueda: JsonNullValueInput | InputJsonValue
    nombreBusqueda?: string | null
    fechaCreacion?: Date | string
  }

  export type BusquedaGuardadaCreateOrConnectWithoutUsuarioInput = {
    where: BusquedaGuardadaWhereUniqueInput
    create: XOR<BusquedaGuardadaCreateWithoutUsuarioInput, BusquedaGuardadaUncheckedCreateWithoutUsuarioInput>
  }

  export type BusquedaGuardadaCreateManyUsuarioInputEnvelope = {
    data: BusquedaGuardadaCreateManyUsuarioInput | BusquedaGuardadaCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type FavoritoCreateWithoutUsuarioInput = {
    id?: string
    fechaCreacion?: Date | string
    inmueble: InmuebleCreateNestedOneWithoutFavoritosInput
  }

  export type FavoritoUncheckedCreateWithoutUsuarioInput = {
    id?: string
    inmuebleId: string
    fechaCreacion?: Date | string
  }

  export type FavoritoCreateOrConnectWithoutUsuarioInput = {
    where: FavoritoWhereUniqueInput
    create: XOR<FavoritoCreateWithoutUsuarioInput, FavoritoUncheckedCreateWithoutUsuarioInput>
  }

  export type FavoritoCreateManyUsuarioInputEnvelope = {
    data: FavoritoCreateManyUsuarioInput | FavoritoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type InmuebleCreateWithoutPropietarioInput = {
=======
  export type InmuebleCreateWithoutOwnerInput = {
>>>>>>> Stashed changes
    id?: string
    title: string
    description?: string | null
    address?: string | null
    city?: string
    bedrooms?: number | null
    bathrooms?: number | null
    areaM2?: Decimal | DecimalJsLike | number | string | null
<<<<<<< Updated upstream
    precio: Decimal | DecimalJsLike | number | string
    tipoOperacion: string
    estado?: string
    fechaCreacion?: Date | string
    fechaActualizacion?: Date | string
    favoritos?: FavoritoCreateNestedManyWithoutInmuebleInput
    fotosInmueble?: FotoInmuebleCreateNestedManyWithoutInmuebleInput
    intereses?: InteresCreateNestedManyWithoutInmuebleInput
    resenas?: ResenaCreateNestedManyWithoutInmuebleInput
=======
    price: Decimal | DecimalJsLike | number | string
    operationType: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    interests?: InteresCreateNestedManyWithoutPropertyInput
    propertyPhotos?: FotoInmuebleCreateNestedManyWithoutPropertyInput
    reviews?: ResenaCreateNestedManyWithoutPropertyInput
    favorites?: FavoritoCreateNestedManyWithoutPropertyInput
>>>>>>> Stashed changes
  }

  export type InmuebleUncheckedCreateWithoutOwnerInput = {
    id?: string
    title: string
    description?: string | null
    address?: string | null
    city?: string
    bedrooms?: number | null
    bathrooms?: number | null
    areaM2?: Decimal | DecimalJsLike | number | string | null
<<<<<<< Updated upstream
    precio: Decimal | DecimalJsLike | number | string
    tipoOperacion: string
    estado?: string
    fechaCreacion?: Date | string
    fechaActualizacion?: Date | string
    favoritos?: FavoritoUncheckedCreateNestedManyWithoutInmuebleInput
    fotosInmueble?: FotoInmuebleUncheckedCreateNestedManyWithoutInmuebleInput
    intereses?: InteresUncheckedCreateNestedManyWithoutInmuebleInput
    resenas?: ResenaUncheckedCreateNestedManyWithoutInmuebleInput
=======
    price: Decimal | DecimalJsLike | number | string
    operationType: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    interests?: InteresUncheckedCreateNestedManyWithoutPropertyInput
    propertyPhotos?: FotoInmuebleUncheckedCreateNestedManyWithoutPropertyInput
    reviews?: ResenaUncheckedCreateNestedManyWithoutPropertyInput
    favorites?: FavoritoUncheckedCreateNestedManyWithoutPropertyInput
>>>>>>> Stashed changes
  }

  export type InmuebleCreateOrConnectWithoutOwnerInput = {
    where: InmuebleWhereUniqueInput
    create: XOR<InmuebleCreateWithoutOwnerInput, InmuebleUncheckedCreateWithoutOwnerInput>
  }

  export type InmuebleCreateManyOwnerInputEnvelope = {
    data: InmuebleCreateManyOwnerInput | InmuebleCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type InteresCreateWithoutUserInput = {
    id?: string
    message?: string | null
    status?: string
    createdAt?: Date | string
    property: InmuebleCreateNestedOneWithoutInterestsInput
    messages?: MensajeCreateNestedManyWithoutInterestInput
  }

  export type InteresUncheckedCreateWithoutUserInput = {
    id?: string
    propertyId: string
    message?: string | null
    status?: string
    createdAt?: Date | string
    messages?: MensajeUncheckedCreateNestedManyWithoutInterestInput
  }

  export type InteresCreateOrConnectWithoutUserInput = {
    where: InteresWhereUniqueInput
    create: XOR<InteresCreateWithoutUserInput, InteresUncheckedCreateWithoutUserInput>
  }

  export type InteresCreateManyUserInputEnvelope = {
    data: InteresCreateManyUserInput | InteresCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MensajeCreateWithoutSenderInput = {
    id?: bigint | number
<<<<<<< Updated upstream
    contenido: string
    leido?: boolean
    fechaCreacion?: Date | string
    interes?: InteresCreateNestedOneWithoutMensajesInput
    receptor: UsuarioCreateNestedOneWithoutMensajesRecibidosInput
=======
    content: string
    read?: boolean
    createdAt?: Date | string
    receiver: UsuarioCreateNestedOneWithoutReceivedMessagesInput
    interest?: InteresCreateNestedOneWithoutMessagesInput
>>>>>>> Stashed changes
  }

  export type MensajeUncheckedCreateWithoutSenderInput = {
    id?: bigint | number
    receiverId: string
    interestId?: string | null
    content: string
    read?: boolean
    createdAt?: Date | string
  }

  export type MensajeCreateOrConnectWithoutSenderInput = {
    where: MensajeWhereUniqueInput
    create: XOR<MensajeCreateWithoutSenderInput, MensajeUncheckedCreateWithoutSenderInput>
  }

  export type MensajeCreateManySenderInputEnvelope = {
    data: MensajeCreateManySenderInput | MensajeCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type MensajeCreateWithoutReceiverInput = {
    id?: bigint | number
    content: string
    read?: boolean
    createdAt?: Date | string
    sender: UsuarioCreateNestedOneWithoutSentMessagesInput
    interest?: InteresCreateNestedOneWithoutMessagesInput
  }

  export type MensajeUncheckedCreateWithoutReceiverInput = {
    id?: bigint | number
    senderId: string
    interestId?: string | null
    content: string
    read?: boolean
    createdAt?: Date | string
  }

  export type MensajeCreateOrConnectWithoutReceiverInput = {
    where: MensajeWhereUniqueInput
    create: XOR<MensajeCreateWithoutReceiverInput, MensajeUncheckedCreateWithoutReceiverInput>
  }

  export type MensajeCreateManyReceiverInputEnvelope = {
    data: MensajeCreateManyReceiverInput | MensajeCreateManyReceiverInput[]
    skipDuplicates?: boolean
  }

<<<<<<< Updated upstream
  export type NotificacionCreateWithoutUsuarioInput = {
=======
  export type ResenaCreateWithoutUserInput = {
    id?: bigint | number
    content: string
    rating: number
    createdAt?: Date | string
    property: InmuebleCreateNestedOneWithoutReviewsInput
  }

  export type ResenaUncheckedCreateWithoutUserInput = {
    id?: bigint | number
    propertyId: string
    content: string
    rating: number
    createdAt?: Date | string
  }

  export type ResenaCreateOrConnectWithoutUserInput = {
    where: ResenaWhereUniqueInput
    create: XOR<ResenaCreateWithoutUserInput, ResenaUncheckedCreateWithoutUserInput>
  }

  export type ResenaCreateManyUserInputEnvelope = {
    data: ResenaCreateManyUserInput | ResenaCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NotificacionCreateWithoutUserInput = {
>>>>>>> Stashed changes
    id?: string
    type: string
    title: string
    content: string
    read?: boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type NotificacionUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    title: string
    content: string
    read?: boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type NotificacionCreateOrConnectWithoutUserInput = {
    where: NotificacionWhereUniqueInput
    create: XOR<NotificacionCreateWithoutUserInput, NotificacionUncheckedCreateWithoutUserInput>
  }

  export type NotificacionCreateManyUserInputEnvelope = {
    data: NotificacionCreateManyUserInput | NotificacionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReporteCreateWithoutUserInput = {
    id?: string
    type: string
    parameters?: NullableJsonNullValueInput | InputJsonValue
    fileUrl?: string | null
    createdAt?: Date | string
  }

  export type ReporteUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    parameters?: NullableJsonNullValueInput | InputJsonValue
    fileUrl?: string | null
    createdAt?: Date | string
  }

  export type ReporteCreateOrConnectWithoutUserInput = {
    where: ReporteWhereUniqueInput
    create: XOR<ReporteCreateWithoutUserInput, ReporteUncheckedCreateWithoutUserInput>
  }

  export type ReporteCreateManyUserInputEnvelope = {
    data: ReporteCreateManyUserInput | ReporteCreateManyUserInput[]
    skipDuplicates?: boolean
  }

<<<<<<< Updated upstream
  export type ResenaCreateWithoutUsuarioInput = {
    id?: bigint | number
    contenido: string
    calificacion: number
    fechaCreacion?: Date | string
    inmueble: InmuebleCreateNestedOneWithoutResenasInput
  }

  export type ResenaUncheckedCreateWithoutUsuarioInput = {
    id?: bigint | number
    inmuebleId: string
    contenido: string
    calificacion: number
    fechaCreacion?: Date | string
  }

  export type ResenaCreateOrConnectWithoutUsuarioInput = {
    where: ResenaWhereUniqueInput
    create: XOR<ResenaCreateWithoutUsuarioInput, ResenaUncheckedCreateWithoutUsuarioInput>
  }

  export type ResenaCreateManyUsuarioInputEnvelope = {
    data: ResenaCreateManyUsuarioInput | ResenaCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type UserPreferenceCreateWithoutUserInput = {
    id?: string
    propertyTypes?: UserPreferenceCreatepropertyTypesInput | string[]
    modality?: string | null
    locations?: UserPreferenceCreatelocationsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserPreferenceUncheckedCreateWithoutUserInput = {
    id?: string
    propertyTypes?: UserPreferenceCreatepropertyTypesInput | string[]
    modality?: string | null
    locations?: UserPreferenceCreatelocationsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserPreferenceCreateOrConnectWithoutUserInput = {
    where: UserPreferenceWhereUniqueInput
    create: XOR<UserPreferenceCreateWithoutUserInput, UserPreferenceUncheckedCreateWithoutUserInput>
  }

  export type BusquedaGuardadaUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: BusquedaGuardadaWhereUniqueInput
    update: XOR<BusquedaGuardadaUpdateWithoutUsuarioInput, BusquedaGuardadaUncheckedUpdateWithoutUsuarioInput>
    create: XOR<BusquedaGuardadaCreateWithoutUsuarioInput, BusquedaGuardadaUncheckedCreateWithoutUsuarioInput>
  }

  export type BusquedaGuardadaUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: BusquedaGuardadaWhereUniqueInput
    data: XOR<BusquedaGuardadaUpdateWithoutUsuarioInput, BusquedaGuardadaUncheckedUpdateWithoutUsuarioInput>
  }

  export type BusquedaGuardadaUpdateManyWithWhereWithoutUsuarioInput = {
    where: BusquedaGuardadaScalarWhereInput
    data: XOR<BusquedaGuardadaUpdateManyMutationInput, BusquedaGuardadaUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type BusquedaGuardadaScalarWhereInput = {
    AND?: BusquedaGuardadaScalarWhereInput | BusquedaGuardadaScalarWhereInput[]
    OR?: BusquedaGuardadaScalarWhereInput[]
    NOT?: BusquedaGuardadaScalarWhereInput | BusquedaGuardadaScalarWhereInput[]
    id?: UuidFilter<"BusquedaGuardada"> | string
    usuarioId?: UuidFilter<"BusquedaGuardada"> | string
    parametrosBusqueda?: JsonFilter<"BusquedaGuardada">
    nombreBusqueda?: StringNullableFilter<"BusquedaGuardada"> | string | null
    fechaCreacion?: DateTimeFilter<"BusquedaGuardada"> | Date | string
  }

  export type FavoritoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: FavoritoWhereUniqueInput
    update: XOR<FavoritoUpdateWithoutUsuarioInput, FavoritoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<FavoritoCreateWithoutUsuarioInput, FavoritoUncheckedCreateWithoutUsuarioInput>
  }

  export type FavoritoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: FavoritoWhereUniqueInput
    data: XOR<FavoritoUpdateWithoutUsuarioInput, FavoritoUncheckedUpdateWithoutUsuarioInput>
  }

  export type FavoritoUpdateManyWithWhereWithoutUsuarioInput = {
    where: FavoritoScalarWhereInput
    data: XOR<FavoritoUpdateManyMutationInput, FavoritoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type FavoritoScalarWhereInput = {
    AND?: FavoritoScalarWhereInput | FavoritoScalarWhereInput[]
    OR?: FavoritoScalarWhereInput[]
    NOT?: FavoritoScalarWhereInput | FavoritoScalarWhereInput[]
    id?: UuidFilter<"Favorito"> | string
    usuarioId?: UuidFilter<"Favorito"> | string
    inmuebleId?: UuidFilter<"Favorito"> | string
    fechaCreacion?: DateTimeFilter<"Favorito"> | Date | string
=======
  export type FavoritoCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    property: InmuebleCreateNestedOneWithoutFavoritesInput
  }

  export type FavoritoUncheckedCreateWithoutUserInput = {
    id?: string
    propertyId: string
    createdAt?: Date | string
  }

  export type FavoritoCreateOrConnectWithoutUserInput = {
    where: FavoritoWhereUniqueInput
    create: XOR<FavoritoCreateWithoutUserInput, FavoritoUncheckedCreateWithoutUserInput>
  }

  export type FavoritoCreateManyUserInputEnvelope = {
    data: FavoritoCreateManyUserInput | FavoritoCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BusquedaGuardadaCreateWithoutUserInput = {
    id?: string
    searchParameters: JsonNullValueInput | InputJsonValue
    searchName?: string | null
    createdAt?: Date | string
  }

  export type BusquedaGuardadaUncheckedCreateWithoutUserInput = {
    id?: string
    searchParameters: JsonNullValueInput | InputJsonValue
    searchName?: string | null
    createdAt?: Date | string
  }

  export type BusquedaGuardadaCreateOrConnectWithoutUserInput = {
    where: BusquedaGuardadaWhereUniqueInput
    create: XOR<BusquedaGuardadaCreateWithoutUserInput, BusquedaGuardadaUncheckedCreateWithoutUserInput>
  }

  export type BusquedaGuardadaCreateManyUserInputEnvelope = {
    data: BusquedaGuardadaCreateManyUserInput | BusquedaGuardadaCreateManyUserInput[]
    skipDuplicates?: boolean
>>>>>>> Stashed changes
  }

  export type InmuebleUpsertWithWhereUniqueWithoutOwnerInput = {
    where: InmuebleWhereUniqueInput
    update: XOR<InmuebleUpdateWithoutOwnerInput, InmuebleUncheckedUpdateWithoutOwnerInput>
    create: XOR<InmuebleCreateWithoutOwnerInput, InmuebleUncheckedCreateWithoutOwnerInput>
  }

  export type InmuebleUpdateWithWhereUniqueWithoutOwnerInput = {
    where: InmuebleWhereUniqueInput
    data: XOR<InmuebleUpdateWithoutOwnerInput, InmuebleUncheckedUpdateWithoutOwnerInput>
  }

  export type InmuebleUpdateManyWithWhereWithoutOwnerInput = {
    where: InmuebleScalarWhereInput
    data: XOR<InmuebleUpdateManyMutationInput, InmuebleUncheckedUpdateManyWithoutOwnerInput>
  }

  export type InmuebleScalarWhereInput = {
    AND?: InmuebleScalarWhereInput | InmuebleScalarWhereInput[]
    OR?: InmuebleScalarWhereInput[]
    NOT?: InmuebleScalarWhereInput | InmuebleScalarWhereInput[]
    id?: UuidFilter<"Inmueble"> | string
    ownerId?: UuidFilter<"Inmueble"> | string
    title?: StringFilter<"Inmueble"> | string
    description?: StringNullableFilter<"Inmueble"> | string | null
    address?: StringNullableFilter<"Inmueble"> | string | null
    city?: StringFilter<"Inmueble"> | string
    bedrooms?: IntNullableFilter<"Inmueble"> | number | null
    bathrooms?: IntNullableFilter<"Inmueble"> | number | null
    areaM2?: DecimalNullableFilter<"Inmueble"> | Decimal | DecimalJsLike | number | string | null
    price?: DecimalFilter<"Inmueble"> | Decimal | DecimalJsLike | number | string
    operationType?: StringFilter<"Inmueble"> | string
    status?: StringFilter<"Inmueble"> | string
    createdAt?: DateTimeFilter<"Inmueble"> | Date | string
    updatedAt?: DateTimeFilter<"Inmueble"> | Date | string
  }

  export type InteresUpsertWithWhereUniqueWithoutUserInput = {
    where: InteresWhereUniqueInput
    update: XOR<InteresUpdateWithoutUserInput, InteresUncheckedUpdateWithoutUserInput>
    create: XOR<InteresCreateWithoutUserInput, InteresUncheckedCreateWithoutUserInput>
  }

  export type InteresUpdateWithWhereUniqueWithoutUserInput = {
    where: InteresWhereUniqueInput
    data: XOR<InteresUpdateWithoutUserInput, InteresUncheckedUpdateWithoutUserInput>
  }

  export type InteresUpdateManyWithWhereWithoutUserInput = {
    where: InteresScalarWhereInput
    data: XOR<InteresUpdateManyMutationInput, InteresUncheckedUpdateManyWithoutUserInput>
  }

  export type InteresScalarWhereInput = {
    AND?: InteresScalarWhereInput | InteresScalarWhereInput[]
    OR?: InteresScalarWhereInput[]
    NOT?: InteresScalarWhereInput | InteresScalarWhereInput[]
    id?: UuidFilter<"Interes"> | string
    userId?: UuidFilter<"Interes"> | string
    propertyId?: UuidFilter<"Interes"> | string
    message?: StringNullableFilter<"Interes"> | string | null
    status?: StringFilter<"Interes"> | string
    createdAt?: DateTimeFilter<"Interes"> | Date | string
  }

  export type MensajeUpsertWithWhereUniqueWithoutSenderInput = {
    where: MensajeWhereUniqueInput
    update: XOR<MensajeUpdateWithoutSenderInput, MensajeUncheckedUpdateWithoutSenderInput>
    create: XOR<MensajeCreateWithoutSenderInput, MensajeUncheckedCreateWithoutSenderInput>
  }

  export type MensajeUpdateWithWhereUniqueWithoutSenderInput = {
    where: MensajeWhereUniqueInput
    data: XOR<MensajeUpdateWithoutSenderInput, MensajeUncheckedUpdateWithoutSenderInput>
  }

  export type MensajeUpdateManyWithWhereWithoutSenderInput = {
    where: MensajeScalarWhereInput
    data: XOR<MensajeUpdateManyMutationInput, MensajeUncheckedUpdateManyWithoutSenderInput>
  }

  export type MensajeScalarWhereInput = {
    AND?: MensajeScalarWhereInput | MensajeScalarWhereInput[]
    OR?: MensajeScalarWhereInput[]
    NOT?: MensajeScalarWhereInput | MensajeScalarWhereInput[]
    id?: BigIntFilter<"Mensaje"> | bigint | number
    senderId?: UuidFilter<"Mensaje"> | string
    receiverId?: UuidFilter<"Mensaje"> | string
    interestId?: UuidNullableFilter<"Mensaje"> | string | null
    content?: StringFilter<"Mensaje"> | string
    read?: BoolFilter<"Mensaje"> | boolean
    createdAt?: DateTimeFilter<"Mensaje"> | Date | string
  }

  export type MensajeUpsertWithWhereUniqueWithoutReceiverInput = {
    where: MensajeWhereUniqueInput
    update: XOR<MensajeUpdateWithoutReceiverInput, MensajeUncheckedUpdateWithoutReceiverInput>
    create: XOR<MensajeCreateWithoutReceiverInput, MensajeUncheckedCreateWithoutReceiverInput>
  }

  export type MensajeUpdateWithWhereUniqueWithoutReceiverInput = {
    where: MensajeWhereUniqueInput
    data: XOR<MensajeUpdateWithoutReceiverInput, MensajeUncheckedUpdateWithoutReceiverInput>
  }

  export type MensajeUpdateManyWithWhereWithoutReceiverInput = {
    where: MensajeScalarWhereInput
    data: XOR<MensajeUpdateManyMutationInput, MensajeUncheckedUpdateManyWithoutReceiverInput>
  }

<<<<<<< Updated upstream
  export type NotificacionUpsertWithWhereUniqueWithoutUsuarioInput = {
=======
  export type ResenaUpsertWithWhereUniqueWithoutUserInput = {
    where: ResenaWhereUniqueInput
    update: XOR<ResenaUpdateWithoutUserInput, ResenaUncheckedUpdateWithoutUserInput>
    create: XOR<ResenaCreateWithoutUserInput, ResenaUncheckedCreateWithoutUserInput>
  }

  export type ResenaUpdateWithWhereUniqueWithoutUserInput = {
    where: ResenaWhereUniqueInput
    data: XOR<ResenaUpdateWithoutUserInput, ResenaUncheckedUpdateWithoutUserInput>
  }

  export type ResenaUpdateManyWithWhereWithoutUserInput = {
    where: ResenaScalarWhereInput
    data: XOR<ResenaUpdateManyMutationInput, ResenaUncheckedUpdateManyWithoutUserInput>
  }

  export type ResenaScalarWhereInput = {
    AND?: ResenaScalarWhereInput | ResenaScalarWhereInput[]
    OR?: ResenaScalarWhereInput[]
    NOT?: ResenaScalarWhereInput | ResenaScalarWhereInput[]
    id?: BigIntFilter<"Resena"> | bigint | number
    userId?: UuidFilter<"Resena"> | string
    propertyId?: UuidFilter<"Resena"> | string
    content?: StringFilter<"Resena"> | string
    rating?: IntFilter<"Resena"> | number
    createdAt?: DateTimeFilter<"Resena"> | Date | string
  }

  export type NotificacionUpsertWithWhereUniqueWithoutUserInput = {
>>>>>>> Stashed changes
    where: NotificacionWhereUniqueInput
    update: XOR<NotificacionUpdateWithoutUserInput, NotificacionUncheckedUpdateWithoutUserInput>
    create: XOR<NotificacionCreateWithoutUserInput, NotificacionUncheckedCreateWithoutUserInput>
  }

  export type NotificacionUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificacionWhereUniqueInput
    data: XOR<NotificacionUpdateWithoutUserInput, NotificacionUncheckedUpdateWithoutUserInput>
  }

  export type NotificacionUpdateManyWithWhereWithoutUserInput = {
    where: NotificacionScalarWhereInput
    data: XOR<NotificacionUpdateManyMutationInput, NotificacionUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificacionScalarWhereInput = {
    AND?: NotificacionScalarWhereInput | NotificacionScalarWhereInput[]
    OR?: NotificacionScalarWhereInput[]
    NOT?: NotificacionScalarWhereInput | NotificacionScalarWhereInput[]
    id?: UuidFilter<"Notificacion"> | string
    userId?: UuidFilter<"Notificacion"> | string
    type?: StringFilter<"Notificacion"> | string
    title?: StringFilter<"Notificacion"> | string
    content?: StringFilter<"Notificacion"> | string
    read?: BoolFilter<"Notificacion"> | boolean
    metadata?: JsonNullableFilter<"Notificacion">
    createdAt?: DateTimeFilter<"Notificacion"> | Date | string
  }

  export type ReporteUpsertWithWhereUniqueWithoutUserInput = {
    where: ReporteWhereUniqueInput
    update: XOR<ReporteUpdateWithoutUserInput, ReporteUncheckedUpdateWithoutUserInput>
    create: XOR<ReporteCreateWithoutUserInput, ReporteUncheckedCreateWithoutUserInput>
  }

  export type ReporteUpdateWithWhereUniqueWithoutUserInput = {
    where: ReporteWhereUniqueInput
    data: XOR<ReporteUpdateWithoutUserInput, ReporteUncheckedUpdateWithoutUserInput>
  }

  export type ReporteUpdateManyWithWhereWithoutUserInput = {
    where: ReporteScalarWhereInput
    data: XOR<ReporteUpdateManyMutationInput, ReporteUncheckedUpdateManyWithoutUserInput>
  }

  export type ReporteScalarWhereInput = {
    AND?: ReporteScalarWhereInput | ReporteScalarWhereInput[]
    OR?: ReporteScalarWhereInput[]
    NOT?: ReporteScalarWhereInput | ReporteScalarWhereInput[]
    id?: UuidFilter<"Reporte"> | string
    userId?: UuidFilter<"Reporte"> | string
    type?: StringFilter<"Reporte"> | string
    parameters?: JsonNullableFilter<"Reporte">
    fileUrl?: StringNullableFilter<"Reporte"> | string | null
    createdAt?: DateTimeFilter<"Reporte"> | Date | string
  }

<<<<<<< Updated upstream
  export type ResenaUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: ResenaWhereUniqueInput
    update: XOR<ResenaUpdateWithoutUsuarioInput, ResenaUncheckedUpdateWithoutUsuarioInput>
    create: XOR<ResenaCreateWithoutUsuarioInput, ResenaUncheckedCreateWithoutUsuarioInput>
  }

  export type ResenaUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: ResenaWhereUniqueInput
    data: XOR<ResenaUpdateWithoutUsuarioInput, ResenaUncheckedUpdateWithoutUsuarioInput>
  }

  export type ResenaUpdateManyWithWhereWithoutUsuarioInput = {
    where: ResenaScalarWhereInput
    data: XOR<ResenaUpdateManyMutationInput, ResenaUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type ResenaScalarWhereInput = {
    AND?: ResenaScalarWhereInput | ResenaScalarWhereInput[]
    OR?: ResenaScalarWhereInput[]
    NOT?: ResenaScalarWhereInput | ResenaScalarWhereInput[]
    id?: BigIntFilter<"Resena"> | bigint | number
    usuarioId?: UuidFilter<"Resena"> | string
    inmuebleId?: UuidFilter<"Resena"> | string
    contenido?: StringFilter<"Resena"> | string
    calificacion?: IntFilter<"Resena"> | number
    fechaCreacion?: DateTimeFilter<"Resena"> | Date | string
  }

  export type UserPreferenceUpsertWithoutUserInput = {
    update: XOR<UserPreferenceUpdateWithoutUserInput, UserPreferenceUncheckedUpdateWithoutUserInput>
    create: XOR<UserPreferenceCreateWithoutUserInput, UserPreferenceUncheckedCreateWithoutUserInput>
    where?: UserPreferenceWhereInput
  }

  export type UserPreferenceUpdateToOneWithWhereWithoutUserInput = {
    where?: UserPreferenceWhereInput
    data: XOR<UserPreferenceUpdateWithoutUserInput, UserPreferenceUncheckedUpdateWithoutUserInput>
  }

  export type UserPreferenceUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyTypes?: UserPreferenceUpdatepropertyTypesInput | string[]
    modality?: NullableStringFieldUpdateOperationsInput | string | null
    locations?: UserPreferenceUpdatelocationsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPreferenceUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyTypes?: UserPreferenceUpdatepropertyTypesInput | string[]
    modality?: NullableStringFieldUpdateOperationsInput | string | null
    locations?: UserPreferenceUpdatelocationsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoritoCreateWithoutInmuebleInput = {
    id?: string
    fechaCreacion?: Date | string
    usuario: UsuarioCreateNestedOneWithoutFavoritosInput
  }

  export type FavoritoUncheckedCreateWithoutInmuebleInput = {
    id?: string
    usuarioId: string
    fechaCreacion?: Date | string
  }

  export type FavoritoCreateOrConnectWithoutInmuebleInput = {
    where: FavoritoWhereUniqueInput
    create: XOR<FavoritoCreateWithoutInmuebleInput, FavoritoUncheckedCreateWithoutInmuebleInput>
  }

  export type FavoritoCreateManyInmuebleInputEnvelope = {
    data: FavoritoCreateManyInmuebleInput | FavoritoCreateManyInmuebleInput[]
    skipDuplicates?: boolean
  }

  export type FotoInmuebleCreateWithoutInmuebleInput = {
    id?: bigint | number
    url: string
    orden?: number | null
    fechaCreacion?: Date | string
  }

  export type FotoInmuebleUncheckedCreateWithoutInmuebleInput = {
    id?: bigint | number
    url: string
    orden?: number | null
    fechaCreacion?: Date | string
  }

  export type FotoInmuebleCreateOrConnectWithoutInmuebleInput = {
    where: FotoInmuebleWhereUniqueInput
    create: XOR<FotoInmuebleCreateWithoutInmuebleInput, FotoInmuebleUncheckedCreateWithoutInmuebleInput>
  }

  export type FotoInmuebleCreateManyInmuebleInputEnvelope = {
    data: FotoInmuebleCreateManyInmuebleInput | FotoInmuebleCreateManyInmuebleInput[]
    skipDuplicates?: boolean
=======
  export type FavoritoUpsertWithWhereUniqueWithoutUserInput = {
    where: FavoritoWhereUniqueInput
    update: XOR<FavoritoUpdateWithoutUserInput, FavoritoUncheckedUpdateWithoutUserInput>
    create: XOR<FavoritoCreateWithoutUserInput, FavoritoUncheckedCreateWithoutUserInput>
  }

  export type FavoritoUpdateWithWhereUniqueWithoutUserInput = {
    where: FavoritoWhereUniqueInput
    data: XOR<FavoritoUpdateWithoutUserInput, FavoritoUncheckedUpdateWithoutUserInput>
  }

  export type FavoritoUpdateManyWithWhereWithoutUserInput = {
    where: FavoritoScalarWhereInput
    data: XOR<FavoritoUpdateManyMutationInput, FavoritoUncheckedUpdateManyWithoutUserInput>
  }

  export type FavoritoScalarWhereInput = {
    AND?: FavoritoScalarWhereInput | FavoritoScalarWhereInput[]
    OR?: FavoritoScalarWhereInput[]
    NOT?: FavoritoScalarWhereInput | FavoritoScalarWhereInput[]
    id?: UuidFilter<"Favorito"> | string
    userId?: UuidFilter<"Favorito"> | string
    propertyId?: UuidFilter<"Favorito"> | string
    createdAt?: DateTimeFilter<"Favorito"> | Date | string
  }

  export type BusquedaGuardadaUpsertWithWhereUniqueWithoutUserInput = {
    where: BusquedaGuardadaWhereUniqueInput
    update: XOR<BusquedaGuardadaUpdateWithoutUserInput, BusquedaGuardadaUncheckedUpdateWithoutUserInput>
    create: XOR<BusquedaGuardadaCreateWithoutUserInput, BusquedaGuardadaUncheckedCreateWithoutUserInput>
  }

  export type BusquedaGuardadaUpdateWithWhereUniqueWithoutUserInput = {
    where: BusquedaGuardadaWhereUniqueInput
    data: XOR<BusquedaGuardadaUpdateWithoutUserInput, BusquedaGuardadaUncheckedUpdateWithoutUserInput>
  }

  export type BusquedaGuardadaUpdateManyWithWhereWithoutUserInput = {
    where: BusquedaGuardadaScalarWhereInput
    data: XOR<BusquedaGuardadaUpdateManyMutationInput, BusquedaGuardadaUncheckedUpdateManyWithoutUserInput>
  }

  export type BusquedaGuardadaScalarWhereInput = {
    AND?: BusquedaGuardadaScalarWhereInput | BusquedaGuardadaScalarWhereInput[]
    OR?: BusquedaGuardadaScalarWhereInput[]
    NOT?: BusquedaGuardadaScalarWhereInput | BusquedaGuardadaScalarWhereInput[]
    id?: UuidFilter<"BusquedaGuardada"> | string
    userId?: UuidFilter<"BusquedaGuardada"> | string
    searchParameters?: JsonFilter<"BusquedaGuardada">
    searchName?: StringNullableFilter<"BusquedaGuardada"> | string | null
    createdAt?: DateTimeFilter<"BusquedaGuardada"> | Date | string
>>>>>>> Stashed changes
  }

  export type UsuarioCreateWithoutOwnedPropertiesInput = {
    id?: string
    googleId?: string | null
    profilePhoto?: string | null
    email: string
    passwordHash?: string | null
    fullName?: string | null
    phone?: string | null
    role?: string
    verificationStatus?: string
    refreshToken?: string | null
<<<<<<< Updated upstream
    fechaCreacion?: Date | string
    fechaActualizacion?: Date | string
    busquedasGuardadas?: BusquedaGuardadaCreateNestedManyWithoutUsuarioInput
    favoritos?: FavoritoCreateNestedManyWithoutUsuarioInput
    Intereses?: InteresCreateNestedManyWithoutUsuarioInput
    mensajesEmitidos?: MensajeCreateNestedManyWithoutEmisorInput
    mensajesRecibidos?: MensajeCreateNestedManyWithoutReceptorInput
    notificaciones?: NotificacionCreateNestedManyWithoutUsuarioInput
    reportes?: ReporteCreateNestedManyWithoutUsuarioInput
    resenas?: ResenaCreateNestedManyWithoutUsuarioInput
    preferences?: UserPreferenceCreateNestedOneWithoutUserInput
=======
    createdAt?: Date | string
    updatedAt?: Date | string
    interests?: InteresCreateNestedManyWithoutUserInput
    sentMessages?: MensajeCreateNestedManyWithoutSenderInput
    receivedMessages?: MensajeCreateNestedManyWithoutReceiverInput
    reviews?: ResenaCreateNestedManyWithoutUserInput
    notifications?: NotificacionCreateNestedManyWithoutUserInput
    reports?: ReporteCreateNestedManyWithoutUserInput
    favorites?: FavoritoCreateNestedManyWithoutUserInput
    savedSearches?: BusquedaGuardadaCreateNestedManyWithoutUserInput
>>>>>>> Stashed changes
  }

  export type UsuarioUncheckedCreateWithoutOwnedPropertiesInput = {
    id?: string
    googleId?: string | null
    profilePhoto?: string | null
    email: string
    passwordHash?: string | null
    fullName?: string | null
    phone?: string | null
    role?: string
    verificationStatus?: string
    refreshToken?: string | null
<<<<<<< Updated upstream
    fechaCreacion?: Date | string
    fechaActualizacion?: Date | string
    busquedasGuardadas?: BusquedaGuardadaUncheckedCreateNestedManyWithoutUsuarioInput
    favoritos?: FavoritoUncheckedCreateNestedManyWithoutUsuarioInput
    Intereses?: InteresUncheckedCreateNestedManyWithoutUsuarioInput
    mensajesEmitidos?: MensajeUncheckedCreateNestedManyWithoutEmisorInput
    mensajesRecibidos?: MensajeUncheckedCreateNestedManyWithoutReceptorInput
    notificaciones?: NotificacionUncheckedCreateNestedManyWithoutUsuarioInput
    reportes?: ReporteUncheckedCreateNestedManyWithoutUsuarioInput
    resenas?: ResenaUncheckedCreateNestedManyWithoutUsuarioInput
    preferences?: UserPreferenceUncheckedCreateNestedOneWithoutUserInput
=======
    createdAt?: Date | string
    updatedAt?: Date | string
    interests?: InteresUncheckedCreateNestedManyWithoutUserInput
    sentMessages?: MensajeUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MensajeUncheckedCreateNestedManyWithoutReceiverInput
    reviews?: ResenaUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificacionUncheckedCreateNestedManyWithoutUserInput
    reports?: ReporteUncheckedCreateNestedManyWithoutUserInput
    favorites?: FavoritoUncheckedCreateNestedManyWithoutUserInput
    savedSearches?: BusquedaGuardadaUncheckedCreateNestedManyWithoutUserInput
>>>>>>> Stashed changes
  }

  export type UsuarioCreateOrConnectWithoutOwnedPropertiesInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutOwnedPropertiesInput, UsuarioUncheckedCreateWithoutOwnedPropertiesInput>
  }

  export type InteresCreateWithoutPropertyInput = {
    id?: string
    message?: string | null
    status?: string
    createdAt?: Date | string
    user: UsuarioCreateNestedOneWithoutInterestsInput
    messages?: MensajeCreateNestedManyWithoutInterestInput
  }

  export type InteresUncheckedCreateWithoutPropertyInput = {
    id?: string
    userId: string
    message?: string | null
    status?: string
    createdAt?: Date | string
    messages?: MensajeUncheckedCreateNestedManyWithoutInterestInput
  }

  export type InteresCreateOrConnectWithoutPropertyInput = {
    where: InteresWhereUniqueInput
    create: XOR<InteresCreateWithoutPropertyInput, InteresUncheckedCreateWithoutPropertyInput>
  }

  export type InteresCreateManyPropertyInputEnvelope = {
    data: InteresCreateManyPropertyInput | InteresCreateManyPropertyInput[]
    skipDuplicates?: boolean
  }

<<<<<<< Updated upstream
  export type ResenaCreateWithoutInmuebleInput = {
=======
  export type FotoInmuebleCreateWithoutPropertyInput = {
    id?: bigint | number
    url: string
    order?: number | null
    createdAt?: Date | string
  }

  export type FotoInmuebleUncheckedCreateWithoutPropertyInput = {
    id?: bigint | number
    url: string
    order?: number | null
    createdAt?: Date | string
  }

  export type FotoInmuebleCreateOrConnectWithoutPropertyInput = {
    where: FotoInmuebleWhereUniqueInput
    create: XOR<FotoInmuebleCreateWithoutPropertyInput, FotoInmuebleUncheckedCreateWithoutPropertyInput>
  }

  export type FotoInmuebleCreateManyPropertyInputEnvelope = {
    data: FotoInmuebleCreateManyPropertyInput | FotoInmuebleCreateManyPropertyInput[]
    skipDuplicates?: boolean
  }

  export type ResenaCreateWithoutPropertyInput = {
>>>>>>> Stashed changes
    id?: bigint | number
    content: string
    rating: number
    createdAt?: Date | string
    user: UsuarioCreateNestedOneWithoutReviewsInput
  }

  export type ResenaUncheckedCreateWithoutPropertyInput = {
    id?: bigint | number
    userId: string
    content: string
    rating: number
    createdAt?: Date | string
  }

  export type ResenaCreateOrConnectWithoutPropertyInput = {
    where: ResenaWhereUniqueInput
    create: XOR<ResenaCreateWithoutPropertyInput, ResenaUncheckedCreateWithoutPropertyInput>
  }

  export type ResenaCreateManyPropertyInputEnvelope = {
    data: ResenaCreateManyPropertyInput | ResenaCreateManyPropertyInput[]
    skipDuplicates?: boolean
  }

<<<<<<< Updated upstream
  export type FavoritoUpsertWithWhereUniqueWithoutInmuebleInput = {
    where: FavoritoWhereUniqueInput
    update: XOR<FavoritoUpdateWithoutInmuebleInput, FavoritoUncheckedUpdateWithoutInmuebleInput>
    create: XOR<FavoritoCreateWithoutInmuebleInput, FavoritoUncheckedCreateWithoutInmuebleInput>
  }

  export type FavoritoUpdateWithWhereUniqueWithoutInmuebleInput = {
    where: FavoritoWhereUniqueInput
    data: XOR<FavoritoUpdateWithoutInmuebleInput, FavoritoUncheckedUpdateWithoutInmuebleInput>
  }

  export type FavoritoUpdateManyWithWhereWithoutInmuebleInput = {
    where: FavoritoScalarWhereInput
    data: XOR<FavoritoUpdateManyMutationInput, FavoritoUncheckedUpdateManyWithoutInmuebleInput>
=======
  export type FavoritoCreateWithoutPropertyInput = {
    id?: string
    createdAt?: Date | string
    user: UsuarioCreateNestedOneWithoutFavoritesInput
  }

  export type FavoritoUncheckedCreateWithoutPropertyInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type FavoritoCreateOrConnectWithoutPropertyInput = {
    where: FavoritoWhereUniqueInput
    create: XOR<FavoritoCreateWithoutPropertyInput, FavoritoUncheckedCreateWithoutPropertyInput>
  }

  export type FavoritoCreateManyPropertyInputEnvelope = {
    data: FavoritoCreateManyPropertyInput | FavoritoCreateManyPropertyInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithoutOwnedPropertiesInput = {
    update: XOR<UsuarioUpdateWithoutOwnedPropertiesInput, UsuarioUncheckedUpdateWithoutOwnedPropertiesInput>
    create: XOR<UsuarioCreateWithoutOwnedPropertiesInput, UsuarioUncheckedCreateWithoutOwnedPropertiesInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutOwnedPropertiesInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutOwnedPropertiesInput, UsuarioUncheckedUpdateWithoutOwnedPropertiesInput>
  }

  export type UsuarioUpdateWithoutOwnedPropertiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    verificationStatus?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    interests?: InteresUpdateManyWithoutUserNestedInput
    sentMessages?: MensajeUpdateManyWithoutSenderNestedInput
    receivedMessages?: MensajeUpdateManyWithoutReceiverNestedInput
    reviews?: ResenaUpdateManyWithoutUserNestedInput
    notifications?: NotificacionUpdateManyWithoutUserNestedInput
    reports?: ReporteUpdateManyWithoutUserNestedInput
    favorites?: FavoritoUpdateManyWithoutUserNestedInput
    savedSearches?: BusquedaGuardadaUpdateManyWithoutUserNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutOwnedPropertiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    verificationStatus?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    interests?: InteresUncheckedUpdateManyWithoutUserNestedInput
    sentMessages?: MensajeUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MensajeUncheckedUpdateManyWithoutReceiverNestedInput
    reviews?: ResenaUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificacionUncheckedUpdateManyWithoutUserNestedInput
    reports?: ReporteUncheckedUpdateManyWithoutUserNestedInput
    favorites?: FavoritoUncheckedUpdateManyWithoutUserNestedInput
    savedSearches?: BusquedaGuardadaUncheckedUpdateManyWithoutUserNestedInput
  }

  export type InteresUpsertWithWhereUniqueWithoutPropertyInput = {
    where: InteresWhereUniqueInput
    update: XOR<InteresUpdateWithoutPropertyInput, InteresUncheckedUpdateWithoutPropertyInput>
    create: XOR<InteresCreateWithoutPropertyInput, InteresUncheckedCreateWithoutPropertyInput>
  }

  export type InteresUpdateWithWhereUniqueWithoutPropertyInput = {
    where: InteresWhereUniqueInput
    data: XOR<InteresUpdateWithoutPropertyInput, InteresUncheckedUpdateWithoutPropertyInput>
  }

  export type InteresUpdateManyWithWhereWithoutPropertyInput = {
    where: InteresScalarWhereInput
    data: XOR<InteresUpdateManyMutationInput, InteresUncheckedUpdateManyWithoutPropertyInput>
>>>>>>> Stashed changes
  }

  export type FotoInmuebleUpsertWithWhereUniqueWithoutPropertyInput = {
    where: FotoInmuebleWhereUniqueInput
    update: XOR<FotoInmuebleUpdateWithoutPropertyInput, FotoInmuebleUncheckedUpdateWithoutPropertyInput>
    create: XOR<FotoInmuebleCreateWithoutPropertyInput, FotoInmuebleUncheckedCreateWithoutPropertyInput>
  }

  export type FotoInmuebleUpdateWithWhereUniqueWithoutPropertyInput = {
    where: FotoInmuebleWhereUniqueInput
    data: XOR<FotoInmuebleUpdateWithoutPropertyInput, FotoInmuebleUncheckedUpdateWithoutPropertyInput>
  }

  export type FotoInmuebleUpdateManyWithWhereWithoutPropertyInput = {
    where: FotoInmuebleScalarWhereInput
    data: XOR<FotoInmuebleUpdateManyMutationInput, FotoInmuebleUncheckedUpdateManyWithoutPropertyInput>
  }

  export type FotoInmuebleScalarWhereInput = {
    AND?: FotoInmuebleScalarWhereInput | FotoInmuebleScalarWhereInput[]
    OR?: FotoInmuebleScalarWhereInput[]
    NOT?: FotoInmuebleScalarWhereInput | FotoInmuebleScalarWhereInput[]
    id?: BigIntFilter<"FotoInmueble"> | bigint | number
    propertyId?: UuidFilter<"FotoInmueble"> | string
    url?: StringFilter<"FotoInmueble"> | string
    order?: IntNullableFilter<"FotoInmueble"> | number | null
    createdAt?: DateTimeFilter<"FotoInmueble"> | Date | string
  }

<<<<<<< Updated upstream
  export type UsuarioUpsertWithoutInmueblesPropietarioInput = {
    update: XOR<UsuarioUpdateWithoutInmueblesPropietarioInput, UsuarioUncheckedUpdateWithoutInmueblesPropietarioInput>
    create: XOR<UsuarioCreateWithoutInmueblesPropietarioInput, UsuarioUncheckedCreateWithoutInmueblesPropietarioInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutInmueblesPropietarioInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutInmueblesPropietarioInput, UsuarioUncheckedUpdateWithoutInmueblesPropietarioInput>
  }

  export type UsuarioUpdateWithoutInmueblesPropietarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    fotoPerfil?: NullableStringFieldUpdateOperationsInput | string | null
    correoElectronico?: StringFieldUpdateOperationsInput | string
    contrasenaHash?: NullableStringFieldUpdateOperationsInput | string | null
    nombreCompleto?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: StringFieldUpdateOperationsInput | string
    estadoVerificacion?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    busquedasGuardadas?: BusquedaGuardadaUpdateManyWithoutUsuarioNestedInput
    favoritos?: FavoritoUpdateManyWithoutUsuarioNestedInput
    Intereses?: InteresUpdateManyWithoutUsuarioNestedInput
    mensajesEmitidos?: MensajeUpdateManyWithoutEmisorNestedInput
    mensajesRecibidos?: MensajeUpdateManyWithoutReceptorNestedInput
    notificaciones?: NotificacionUpdateManyWithoutUsuarioNestedInput
    reportes?: ReporteUpdateManyWithoutUsuarioNestedInput
    resenas?: ResenaUpdateManyWithoutUsuarioNestedInput
    preferences?: UserPreferenceUpdateOneWithoutUserNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutInmueblesPropietarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    fotoPerfil?: NullableStringFieldUpdateOperationsInput | string | null
    correoElectronico?: StringFieldUpdateOperationsInput | string
    contrasenaHash?: NullableStringFieldUpdateOperationsInput | string | null
    nombreCompleto?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: StringFieldUpdateOperationsInput | string
    estadoVerificacion?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    busquedasGuardadas?: BusquedaGuardadaUncheckedUpdateManyWithoutUsuarioNestedInput
    favoritos?: FavoritoUncheckedUpdateManyWithoutUsuarioNestedInput
    Intereses?: InteresUncheckedUpdateManyWithoutUsuarioNestedInput
    mensajesEmitidos?: MensajeUncheckedUpdateManyWithoutEmisorNestedInput
    mensajesRecibidos?: MensajeUncheckedUpdateManyWithoutReceptorNestedInput
    notificaciones?: NotificacionUncheckedUpdateManyWithoutUsuarioNestedInput
    reportes?: ReporteUncheckedUpdateManyWithoutUsuarioNestedInput
    resenas?: ResenaUncheckedUpdateManyWithoutUsuarioNestedInput
    preferences?: UserPreferenceUncheckedUpdateOneWithoutUserNestedInput
  }

  export type InteresUpsertWithWhereUniqueWithoutInmuebleInput = {
    where: InteresWhereUniqueInput
    update: XOR<InteresUpdateWithoutInmuebleInput, InteresUncheckedUpdateWithoutInmuebleInput>
    create: XOR<InteresCreateWithoutInmuebleInput, InteresUncheckedCreateWithoutInmuebleInput>
  }

  export type InteresUpdateWithWhereUniqueWithoutInmuebleInput = {
    where: InteresWhereUniqueInput
    data: XOR<InteresUpdateWithoutInmuebleInput, InteresUncheckedUpdateWithoutInmuebleInput>
  }

  export type InteresUpdateManyWithWhereWithoutInmuebleInput = {
    where: InteresScalarWhereInput
    data: XOR<InteresUpdateManyMutationInput, InteresUncheckedUpdateManyWithoutInmuebleInput>
  }

  export type ResenaUpsertWithWhereUniqueWithoutInmuebleInput = {
=======
  export type ResenaUpsertWithWhereUniqueWithoutPropertyInput = {
>>>>>>> Stashed changes
    where: ResenaWhereUniqueInput
    update: XOR<ResenaUpdateWithoutPropertyInput, ResenaUncheckedUpdateWithoutPropertyInput>
    create: XOR<ResenaCreateWithoutPropertyInput, ResenaUncheckedCreateWithoutPropertyInput>
  }

  export type ResenaUpdateWithWhereUniqueWithoutPropertyInput = {
    where: ResenaWhereUniqueInput
    data: XOR<ResenaUpdateWithoutPropertyInput, ResenaUncheckedUpdateWithoutPropertyInput>
  }

  export type ResenaUpdateManyWithWhereWithoutPropertyInput = {
    where: ResenaScalarWhereInput
    data: XOR<ResenaUpdateManyMutationInput, ResenaUncheckedUpdateManyWithoutPropertyInput>
  }

<<<<<<< Updated upstream
  export type InmuebleCreateWithoutInteresesInput = {
=======
  export type FavoritoUpsertWithWhereUniqueWithoutPropertyInput = {
    where: FavoritoWhereUniqueInput
    update: XOR<FavoritoUpdateWithoutPropertyInput, FavoritoUncheckedUpdateWithoutPropertyInput>
    create: XOR<FavoritoCreateWithoutPropertyInput, FavoritoUncheckedCreateWithoutPropertyInput>
  }

  export type FavoritoUpdateWithWhereUniqueWithoutPropertyInput = {
    where: FavoritoWhereUniqueInput
    data: XOR<FavoritoUpdateWithoutPropertyInput, FavoritoUncheckedUpdateWithoutPropertyInput>
  }

  export type FavoritoUpdateManyWithWhereWithoutPropertyInput = {
    where: FavoritoScalarWhereInput
    data: XOR<FavoritoUpdateManyMutationInput, FavoritoUncheckedUpdateManyWithoutPropertyInput>
  }

  export type UsuarioCreateWithoutInterestsInput = {
    id?: string
    googleId?: string | null
    profilePhoto?: string | null
    email: string
    passwordHash?: string | null
    fullName?: string | null
    phone?: string | null
    role?: string
    verificationStatus?: string
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedProperties?: InmuebleCreateNestedManyWithoutOwnerInput
    sentMessages?: MensajeCreateNestedManyWithoutSenderInput
    receivedMessages?: MensajeCreateNestedManyWithoutReceiverInput
    reviews?: ResenaCreateNestedManyWithoutUserInput
    notifications?: NotificacionCreateNestedManyWithoutUserInput
    reports?: ReporteCreateNestedManyWithoutUserInput
    favorites?: FavoritoCreateNestedManyWithoutUserInput
    savedSearches?: BusquedaGuardadaCreateNestedManyWithoutUserInput
  }

  export type UsuarioUncheckedCreateWithoutInterestsInput = {
    id?: string
    googleId?: string | null
    profilePhoto?: string | null
    email: string
    passwordHash?: string | null
    fullName?: string | null
    phone?: string | null
    role?: string
    verificationStatus?: string
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedProperties?: InmuebleUncheckedCreateNestedManyWithoutOwnerInput
    sentMessages?: MensajeUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MensajeUncheckedCreateNestedManyWithoutReceiverInput
    reviews?: ResenaUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificacionUncheckedCreateNestedManyWithoutUserInput
    reports?: ReporteUncheckedCreateNestedManyWithoutUserInput
    favorites?: FavoritoUncheckedCreateNestedManyWithoutUserInput
    savedSearches?: BusquedaGuardadaUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsuarioCreateOrConnectWithoutInterestsInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutInterestsInput, UsuarioUncheckedCreateWithoutInterestsInput>
  }

  export type InmuebleCreateWithoutInterestsInput = {
>>>>>>> Stashed changes
    id?: string
    title: string
    description?: string | null
    address?: string | null
    city?: string
    bedrooms?: number | null
    bathrooms?: number | null
    areaM2?: Decimal | DecimalJsLike | number | string | null
<<<<<<< Updated upstream
    precio: Decimal | DecimalJsLike | number | string
    tipoOperacion: string
    estado?: string
    fechaCreacion?: Date | string
    fechaActualizacion?: Date | string
    favoritos?: FavoritoCreateNestedManyWithoutInmuebleInput
    fotosInmueble?: FotoInmuebleCreateNestedManyWithoutInmuebleInput
    propietario: UsuarioCreateNestedOneWithoutInmueblesPropietarioInput
    resenas?: ResenaCreateNestedManyWithoutInmuebleInput
=======
    price: Decimal | DecimalJsLike | number | string
    operationType: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UsuarioCreateNestedOneWithoutOwnedPropertiesInput
    propertyPhotos?: FotoInmuebleCreateNestedManyWithoutPropertyInput
    reviews?: ResenaCreateNestedManyWithoutPropertyInput
    favorites?: FavoritoCreateNestedManyWithoutPropertyInput
>>>>>>> Stashed changes
  }

  export type InmuebleUncheckedCreateWithoutInterestsInput = {
    id?: string
    ownerId: string
    title: string
    description?: string | null
    address?: string | null
    city?: string
    bedrooms?: number | null
    bathrooms?: number | null
    areaM2?: Decimal | DecimalJsLike | number | string | null
<<<<<<< Updated upstream
    precio: Decimal | DecimalJsLike | number | string
    tipoOperacion: string
    estado?: string
    fechaCreacion?: Date | string
    fechaActualizacion?: Date | string
    favoritos?: FavoritoUncheckedCreateNestedManyWithoutInmuebleInput
    fotosInmueble?: FotoInmuebleUncheckedCreateNestedManyWithoutInmuebleInput
    resenas?: ResenaUncheckedCreateNestedManyWithoutInmuebleInput
=======
    price: Decimal | DecimalJsLike | number | string
    operationType: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    propertyPhotos?: FotoInmuebleUncheckedCreateNestedManyWithoutPropertyInput
    reviews?: ResenaUncheckedCreateNestedManyWithoutPropertyInput
    favorites?: FavoritoUncheckedCreateNestedManyWithoutPropertyInput
>>>>>>> Stashed changes
  }

  export type InmuebleCreateOrConnectWithoutInterestsInput = {
    where: InmuebleWhereUniqueInput
    create: XOR<InmuebleCreateWithoutInterestsInput, InmuebleUncheckedCreateWithoutInterestsInput>
  }

<<<<<<< Updated upstream
  export type UsuarioCreateWithoutInteresesInput = {
    id?: string
    googleId?: string | null
    fotoPerfil?: string | null
    correoElectronico: string
    contrasenaHash?: string | null
    nombreCompleto?: string | null
    telefono?: string | null
    rol?: string
    estadoVerificacion?: string
    refreshToken?: string | null
    fechaCreacion?: Date | string
    fechaActualizacion?: Date | string
    busquedasGuardadas?: BusquedaGuardadaCreateNestedManyWithoutUsuarioInput
    favoritos?: FavoritoCreateNestedManyWithoutUsuarioInput
    inmueblesPropietario?: InmuebleCreateNestedManyWithoutPropietarioInput
    mensajesEmitidos?: MensajeCreateNestedManyWithoutEmisorInput
    mensajesRecibidos?: MensajeCreateNestedManyWithoutReceptorInput
    notificaciones?: NotificacionCreateNestedManyWithoutUsuarioInput
    reportes?: ReporteCreateNestedManyWithoutUsuarioInput
    resenas?: ResenaCreateNestedManyWithoutUsuarioInput
    preferences?: UserPreferenceCreateNestedOneWithoutUserInput
  }

  export type UsuarioUncheckedCreateWithoutInteresesInput = {
    id?: string
    googleId?: string | null
    fotoPerfil?: string | null
    correoElectronico: string
    contrasenaHash?: string | null
    nombreCompleto?: string | null
    telefono?: string | null
    rol?: string
    estadoVerificacion?: string
    refreshToken?: string | null
    fechaCreacion?: Date | string
    fechaActualizacion?: Date | string
    busquedasGuardadas?: BusquedaGuardadaUncheckedCreateNestedManyWithoutUsuarioInput
    favoritos?: FavoritoUncheckedCreateNestedManyWithoutUsuarioInput
    inmueblesPropietario?: InmuebleUncheckedCreateNestedManyWithoutPropietarioInput
    mensajesEmitidos?: MensajeUncheckedCreateNestedManyWithoutEmisorInput
    mensajesRecibidos?: MensajeUncheckedCreateNestedManyWithoutReceptorInput
    notificaciones?: NotificacionUncheckedCreateNestedManyWithoutUsuarioInput
    reportes?: ReporteUncheckedCreateNestedManyWithoutUsuarioInput
    resenas?: ResenaUncheckedCreateNestedManyWithoutUsuarioInput
    preferences?: UserPreferenceUncheckedCreateNestedOneWithoutUserInput
  }

  export type UsuarioCreateOrConnectWithoutInteresesInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutInteresesInput, UsuarioUncheckedCreateWithoutInteresesInput>
  }

  export type MensajeCreateWithoutInteresInput = {
=======
  export type MensajeCreateWithoutInterestInput = {
>>>>>>> Stashed changes
    id?: bigint | number
    content: string
    read?: boolean
    createdAt?: Date | string
    sender: UsuarioCreateNestedOneWithoutSentMessagesInput
    receiver: UsuarioCreateNestedOneWithoutReceivedMessagesInput
  }

  export type MensajeUncheckedCreateWithoutInterestInput = {
    id?: bigint | number
    senderId: string
    receiverId: string
    content: string
    read?: boolean
    createdAt?: Date | string
  }

  export type MensajeCreateOrConnectWithoutInterestInput = {
    where: MensajeWhereUniqueInput
    create: XOR<MensajeCreateWithoutInterestInput, MensajeUncheckedCreateWithoutInterestInput>
  }

  export type MensajeCreateManyInterestInputEnvelope = {
    data: MensajeCreateManyInterestInput | MensajeCreateManyInterestInput[]
    skipDuplicates?: boolean
  }

<<<<<<< Updated upstream
  export type InmuebleUpsertWithoutInteresesInput = {
    update: XOR<InmuebleUpdateWithoutInteresesInput, InmuebleUncheckedUpdateWithoutInteresesInput>
    create: XOR<InmuebleCreateWithoutInteresesInput, InmuebleUncheckedCreateWithoutInteresesInput>
=======
  export type UsuarioUpsertWithoutInterestsInput = {
    update: XOR<UsuarioUpdateWithoutInterestsInput, UsuarioUncheckedUpdateWithoutInterestsInput>
    create: XOR<UsuarioCreateWithoutInterestsInput, UsuarioUncheckedCreateWithoutInterestsInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutInterestsInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutInterestsInput, UsuarioUncheckedUpdateWithoutInterestsInput>
  }

  export type UsuarioUpdateWithoutInterestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    verificationStatus?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedProperties?: InmuebleUpdateManyWithoutOwnerNestedInput
    sentMessages?: MensajeUpdateManyWithoutSenderNestedInput
    receivedMessages?: MensajeUpdateManyWithoutReceiverNestedInput
    reviews?: ResenaUpdateManyWithoutUserNestedInput
    notifications?: NotificacionUpdateManyWithoutUserNestedInput
    reports?: ReporteUpdateManyWithoutUserNestedInput
    favorites?: FavoritoUpdateManyWithoutUserNestedInput
    savedSearches?: BusquedaGuardadaUpdateManyWithoutUserNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutInterestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    verificationStatus?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedProperties?: InmuebleUncheckedUpdateManyWithoutOwnerNestedInput
    sentMessages?: MensajeUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MensajeUncheckedUpdateManyWithoutReceiverNestedInput
    reviews?: ResenaUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificacionUncheckedUpdateManyWithoutUserNestedInput
    reports?: ReporteUncheckedUpdateManyWithoutUserNestedInput
    favorites?: FavoritoUncheckedUpdateManyWithoutUserNestedInput
    savedSearches?: BusquedaGuardadaUncheckedUpdateManyWithoutUserNestedInput
  }

  export type InmuebleUpsertWithoutInterestsInput = {
    update: XOR<InmuebleUpdateWithoutInterestsInput, InmuebleUncheckedUpdateWithoutInterestsInput>
    create: XOR<InmuebleCreateWithoutInterestsInput, InmuebleUncheckedCreateWithoutInterestsInput>
>>>>>>> Stashed changes
    where?: InmuebleWhereInput
  }

  export type InmuebleUpdateToOneWithWhereWithoutInterestsInput = {
    where?: InmuebleWhereInput
    data: XOR<InmuebleUpdateWithoutInterestsInput, InmuebleUncheckedUpdateWithoutInterestsInput>
  }

  export type InmuebleUpdateWithoutInterestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableIntFieldUpdateOperationsInput | number | null
    areaM2?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
<<<<<<< Updated upstream
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tipoOperacion?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    favoritos?: FavoritoUpdateManyWithoutInmuebleNestedInput
    fotosInmueble?: FotoInmuebleUpdateManyWithoutInmuebleNestedInput
    propietario?: UsuarioUpdateOneRequiredWithoutInmueblesPropietarioNestedInput
    resenas?: ResenaUpdateManyWithoutInmuebleNestedInput
=======
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    operationType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UsuarioUpdateOneRequiredWithoutOwnedPropertiesNestedInput
    propertyPhotos?: FotoInmuebleUpdateManyWithoutPropertyNestedInput
    reviews?: ResenaUpdateManyWithoutPropertyNestedInput
    favorites?: FavoritoUpdateManyWithoutPropertyNestedInput
>>>>>>> Stashed changes
  }

  export type InmuebleUncheckedUpdateWithoutInterestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableIntFieldUpdateOperationsInput | number | null
    areaM2?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
<<<<<<< Updated upstream
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tipoOperacion?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    favoritos?: FavoritoUncheckedUpdateManyWithoutInmuebleNestedInput
    fotosInmueble?: FotoInmuebleUncheckedUpdateManyWithoutInmuebleNestedInput
    resenas?: ResenaUncheckedUpdateManyWithoutInmuebleNestedInput
  }

  export type UsuarioUpsertWithoutInteresesInput = {
    update: XOR<UsuarioUpdateWithoutInteresesInput, UsuarioUncheckedUpdateWithoutInteresesInput>
    create: XOR<UsuarioCreateWithoutInteresesInput, UsuarioUncheckedCreateWithoutInteresesInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutInteresesInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutInteresesInput, UsuarioUncheckedUpdateWithoutInteresesInput>
  }

  export type UsuarioUpdateWithoutInteresesInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    fotoPerfil?: NullableStringFieldUpdateOperationsInput | string | null
    correoElectronico?: StringFieldUpdateOperationsInput | string
    contrasenaHash?: NullableStringFieldUpdateOperationsInput | string | null
    nombreCompleto?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: StringFieldUpdateOperationsInput | string
    estadoVerificacion?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    busquedasGuardadas?: BusquedaGuardadaUpdateManyWithoutUsuarioNestedInput
    favoritos?: FavoritoUpdateManyWithoutUsuarioNestedInput
    inmueblesPropietario?: InmuebleUpdateManyWithoutPropietarioNestedInput
    mensajesEmitidos?: MensajeUpdateManyWithoutEmisorNestedInput
    mensajesRecibidos?: MensajeUpdateManyWithoutReceptorNestedInput
    notificaciones?: NotificacionUpdateManyWithoutUsuarioNestedInput
    reportes?: ReporteUpdateManyWithoutUsuarioNestedInput
    resenas?: ResenaUpdateManyWithoutUsuarioNestedInput
    preferences?: UserPreferenceUpdateOneWithoutUserNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutInteresesInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    fotoPerfil?: NullableStringFieldUpdateOperationsInput | string | null
    correoElectronico?: StringFieldUpdateOperationsInput | string
    contrasenaHash?: NullableStringFieldUpdateOperationsInput | string | null
    nombreCompleto?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: StringFieldUpdateOperationsInput | string
    estadoVerificacion?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    busquedasGuardadas?: BusquedaGuardadaUncheckedUpdateManyWithoutUsuarioNestedInput
    favoritos?: FavoritoUncheckedUpdateManyWithoutUsuarioNestedInput
    inmueblesPropietario?: InmuebleUncheckedUpdateManyWithoutPropietarioNestedInput
    mensajesEmitidos?: MensajeUncheckedUpdateManyWithoutEmisorNestedInput
    mensajesRecibidos?: MensajeUncheckedUpdateManyWithoutReceptorNestedInput
    notificaciones?: NotificacionUncheckedUpdateManyWithoutUsuarioNestedInput
    reportes?: ReporteUncheckedUpdateManyWithoutUsuarioNestedInput
    resenas?: ResenaUncheckedUpdateManyWithoutUsuarioNestedInput
    preferences?: UserPreferenceUncheckedUpdateOneWithoutUserNestedInput
=======
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    operationType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    propertyPhotos?: FotoInmuebleUncheckedUpdateManyWithoutPropertyNestedInput
    reviews?: ResenaUncheckedUpdateManyWithoutPropertyNestedInput
    favorites?: FavoritoUncheckedUpdateManyWithoutPropertyNestedInput
>>>>>>> Stashed changes
  }

  export type MensajeUpsertWithWhereUniqueWithoutInterestInput = {
    where: MensajeWhereUniqueInput
    update: XOR<MensajeUpdateWithoutInterestInput, MensajeUncheckedUpdateWithoutInterestInput>
    create: XOR<MensajeCreateWithoutInterestInput, MensajeUncheckedCreateWithoutInterestInput>
  }

  export type MensajeUpdateWithWhereUniqueWithoutInterestInput = {
    where: MensajeWhereUniqueInput
    data: XOR<MensajeUpdateWithoutInterestInput, MensajeUncheckedUpdateWithoutInterestInput>
  }

  export type MensajeUpdateManyWithWhereWithoutInterestInput = {
    where: MensajeScalarWhereInput
    data: XOR<MensajeUpdateManyMutationInput, MensajeUncheckedUpdateManyWithoutInterestInput>
  }

  export type UsuarioCreateWithoutSentMessagesInput = {
    id?: string
    googleId?: string | null
    profilePhoto?: string | null
    email: string
    passwordHash?: string | null
    fullName?: string | null
    phone?: string | null
    role?: string
    verificationStatus?: string
    refreshToken?: string | null
<<<<<<< Updated upstream
    fechaCreacion?: Date | string
    fechaActualizacion?: Date | string
    busquedasGuardadas?: BusquedaGuardadaCreateNestedManyWithoutUsuarioInput
    favoritos?: FavoritoCreateNestedManyWithoutUsuarioInput
    inmueblesPropietario?: InmuebleCreateNestedManyWithoutPropietarioInput
    Intereses?: InteresCreateNestedManyWithoutUsuarioInput
    mensajesRecibidos?: MensajeCreateNestedManyWithoutReceptorInput
    notificaciones?: NotificacionCreateNestedManyWithoutUsuarioInput
    reportes?: ReporteCreateNestedManyWithoutUsuarioInput
    resenas?: ResenaCreateNestedManyWithoutUsuarioInput
    preferences?: UserPreferenceCreateNestedOneWithoutUserInput
=======
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedProperties?: InmuebleCreateNestedManyWithoutOwnerInput
    interests?: InteresCreateNestedManyWithoutUserInput
    receivedMessages?: MensajeCreateNestedManyWithoutReceiverInput
    reviews?: ResenaCreateNestedManyWithoutUserInput
    notifications?: NotificacionCreateNestedManyWithoutUserInput
    reports?: ReporteCreateNestedManyWithoutUserInput
    favorites?: FavoritoCreateNestedManyWithoutUserInput
    savedSearches?: BusquedaGuardadaCreateNestedManyWithoutUserInput
>>>>>>> Stashed changes
  }

  export type UsuarioUncheckedCreateWithoutSentMessagesInput = {
    id?: string
    googleId?: string | null
    profilePhoto?: string | null
    email: string
    passwordHash?: string | null
    fullName?: string | null
    phone?: string | null
    role?: string
    verificationStatus?: string
    refreshToken?: string | null
<<<<<<< Updated upstream
    fechaCreacion?: Date | string
    fechaActualizacion?: Date | string
    busquedasGuardadas?: BusquedaGuardadaUncheckedCreateNestedManyWithoutUsuarioInput
    favoritos?: FavoritoUncheckedCreateNestedManyWithoutUsuarioInput
    inmueblesPropietario?: InmuebleUncheckedCreateNestedManyWithoutPropietarioInput
    Intereses?: InteresUncheckedCreateNestedManyWithoutUsuarioInput
    mensajesRecibidos?: MensajeUncheckedCreateNestedManyWithoutReceptorInput
    notificaciones?: NotificacionUncheckedCreateNestedManyWithoutUsuarioInput
    reportes?: ReporteUncheckedCreateNestedManyWithoutUsuarioInput
    resenas?: ResenaUncheckedCreateNestedManyWithoutUsuarioInput
    preferences?: UserPreferenceUncheckedCreateNestedOneWithoutUserInput
=======
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedProperties?: InmuebleUncheckedCreateNestedManyWithoutOwnerInput
    interests?: InteresUncheckedCreateNestedManyWithoutUserInput
    receivedMessages?: MensajeUncheckedCreateNestedManyWithoutReceiverInput
    reviews?: ResenaUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificacionUncheckedCreateNestedManyWithoutUserInput
    reports?: ReporteUncheckedCreateNestedManyWithoutUserInput
    favorites?: FavoritoUncheckedCreateNestedManyWithoutUserInput
    savedSearches?: BusquedaGuardadaUncheckedCreateNestedManyWithoutUserInput
>>>>>>> Stashed changes
  }

  export type UsuarioCreateOrConnectWithoutSentMessagesInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutSentMessagesInput, UsuarioUncheckedCreateWithoutSentMessagesInput>
  }

<<<<<<< Updated upstream
  export type InteresCreateWithoutMensajesInput = {
    id?: string
    mensaje?: string | null
    estado?: string
    fechaCreacion?: Date | string
    inmueble: InmuebleCreateNestedOneWithoutInteresesInput
    usuario: UsuarioCreateNestedOneWithoutInteresesInput
  }

  export type InteresUncheckedCreateWithoutMensajesInput = {
    id?: string
    usuarioId: string
    inmuebleId: string
    mensaje?: string | null
    estado?: string
    fechaCreacion?: Date | string
  }

  export type InteresCreateOrConnectWithoutMensajesInput = {
    where: InteresWhereUniqueInput
    create: XOR<InteresCreateWithoutMensajesInput, InteresUncheckedCreateWithoutMensajesInput>
  }

  export type UsuarioCreateWithoutMensajesRecibidosInput = {
=======
  export type UsuarioCreateWithoutReceivedMessagesInput = {
>>>>>>> Stashed changes
    id?: string
    googleId?: string | null
    profilePhoto?: string | null
    email: string
    passwordHash?: string | null
    fullName?: string | null
    phone?: string | null
    role?: string
    verificationStatus?: string
    refreshToken?: string | null
<<<<<<< Updated upstream
    fechaCreacion?: Date | string
    fechaActualizacion?: Date | string
    busquedasGuardadas?: BusquedaGuardadaCreateNestedManyWithoutUsuarioInput
    favoritos?: FavoritoCreateNestedManyWithoutUsuarioInput
    inmueblesPropietario?: InmuebleCreateNestedManyWithoutPropietarioInput
    Intereses?: InteresCreateNestedManyWithoutUsuarioInput
    mensajesEmitidos?: MensajeCreateNestedManyWithoutEmisorInput
    notificaciones?: NotificacionCreateNestedManyWithoutUsuarioInput
    reportes?: ReporteCreateNestedManyWithoutUsuarioInput
    resenas?: ResenaCreateNestedManyWithoutUsuarioInput
    preferences?: UserPreferenceCreateNestedOneWithoutUserInput
=======
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedProperties?: InmuebleCreateNestedManyWithoutOwnerInput
    interests?: InteresCreateNestedManyWithoutUserInput
    sentMessages?: MensajeCreateNestedManyWithoutSenderInput
    reviews?: ResenaCreateNestedManyWithoutUserInput
    notifications?: NotificacionCreateNestedManyWithoutUserInput
    reports?: ReporteCreateNestedManyWithoutUserInput
    favorites?: FavoritoCreateNestedManyWithoutUserInput
    savedSearches?: BusquedaGuardadaCreateNestedManyWithoutUserInput
>>>>>>> Stashed changes
  }

  export type UsuarioUncheckedCreateWithoutReceivedMessagesInput = {
    id?: string
    googleId?: string | null
    profilePhoto?: string | null
    email: string
    passwordHash?: string | null
    fullName?: string | null
    phone?: string | null
    role?: string
    verificationStatus?: string
    refreshToken?: string | null
<<<<<<< Updated upstream
    fechaCreacion?: Date | string
    fechaActualizacion?: Date | string
    busquedasGuardadas?: BusquedaGuardadaUncheckedCreateNestedManyWithoutUsuarioInput
    favoritos?: FavoritoUncheckedCreateNestedManyWithoutUsuarioInput
    inmueblesPropietario?: InmuebleUncheckedCreateNestedManyWithoutPropietarioInput
    Intereses?: InteresUncheckedCreateNestedManyWithoutUsuarioInput
    mensajesEmitidos?: MensajeUncheckedCreateNestedManyWithoutEmisorInput
    notificaciones?: NotificacionUncheckedCreateNestedManyWithoutUsuarioInput
    reportes?: ReporteUncheckedCreateNestedManyWithoutUsuarioInput
    resenas?: ResenaUncheckedCreateNestedManyWithoutUsuarioInput
    preferences?: UserPreferenceUncheckedCreateNestedOneWithoutUserInput
=======
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedProperties?: InmuebleUncheckedCreateNestedManyWithoutOwnerInput
    interests?: InteresUncheckedCreateNestedManyWithoutUserInput
    sentMessages?: MensajeUncheckedCreateNestedManyWithoutSenderInput
    reviews?: ResenaUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificacionUncheckedCreateNestedManyWithoutUserInput
    reports?: ReporteUncheckedCreateNestedManyWithoutUserInput
    favorites?: FavoritoUncheckedCreateNestedManyWithoutUserInput
    savedSearches?: BusquedaGuardadaUncheckedCreateNestedManyWithoutUserInput
>>>>>>> Stashed changes
  }

  export type UsuarioCreateOrConnectWithoutReceivedMessagesInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutReceivedMessagesInput, UsuarioUncheckedCreateWithoutReceivedMessagesInput>
  }

<<<<<<< Updated upstream
  export type UsuarioUpsertWithoutMensajesEmitidosInput = {
    update: XOR<UsuarioUpdateWithoutMensajesEmitidosInput, UsuarioUncheckedUpdateWithoutMensajesEmitidosInput>
    create: XOR<UsuarioCreateWithoutMensajesEmitidosInput, UsuarioUncheckedCreateWithoutMensajesEmitidosInput>
=======
  export type InteresCreateWithoutMessagesInput = {
    id?: string
    message?: string | null
    status?: string
    createdAt?: Date | string
    user: UsuarioCreateNestedOneWithoutInterestsInput
    property: InmuebleCreateNestedOneWithoutInterestsInput
  }

  export type InteresUncheckedCreateWithoutMessagesInput = {
    id?: string
    userId: string
    propertyId: string
    message?: string | null
    status?: string
    createdAt?: Date | string
  }

  export type InteresCreateOrConnectWithoutMessagesInput = {
    where: InteresWhereUniqueInput
    create: XOR<InteresCreateWithoutMessagesInput, InteresUncheckedCreateWithoutMessagesInput>
  }

  export type UsuarioUpsertWithoutSentMessagesInput = {
    update: XOR<UsuarioUpdateWithoutSentMessagesInput, UsuarioUncheckedUpdateWithoutSentMessagesInput>
    create: XOR<UsuarioCreateWithoutSentMessagesInput, UsuarioUncheckedCreateWithoutSentMessagesInput>
>>>>>>> Stashed changes
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutSentMessagesInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutSentMessagesInput, UsuarioUncheckedUpdateWithoutSentMessagesInput>
  }

  export type UsuarioUpdateWithoutSentMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    verificationStatus?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
<<<<<<< Updated upstream
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    busquedasGuardadas?: BusquedaGuardadaUpdateManyWithoutUsuarioNestedInput
    favoritos?: FavoritoUpdateManyWithoutUsuarioNestedInput
    inmueblesPropietario?: InmuebleUpdateManyWithoutPropietarioNestedInput
    Intereses?: InteresUpdateManyWithoutUsuarioNestedInput
    mensajesRecibidos?: MensajeUpdateManyWithoutReceptorNestedInput
    notificaciones?: NotificacionUpdateManyWithoutUsuarioNestedInput
    reportes?: ReporteUpdateManyWithoutUsuarioNestedInput
    resenas?: ResenaUpdateManyWithoutUsuarioNestedInput
    preferences?: UserPreferenceUpdateOneWithoutUserNestedInput
=======
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedProperties?: InmuebleUpdateManyWithoutOwnerNestedInput
    interests?: InteresUpdateManyWithoutUserNestedInput
    receivedMessages?: MensajeUpdateManyWithoutReceiverNestedInput
    reviews?: ResenaUpdateManyWithoutUserNestedInput
    notifications?: NotificacionUpdateManyWithoutUserNestedInput
    reports?: ReporteUpdateManyWithoutUserNestedInput
    favorites?: FavoritoUpdateManyWithoutUserNestedInput
    savedSearches?: BusquedaGuardadaUpdateManyWithoutUserNestedInput
>>>>>>> Stashed changes
  }

  export type UsuarioUncheckedUpdateWithoutSentMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    verificationStatus?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
<<<<<<< Updated upstream
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    busquedasGuardadas?: BusquedaGuardadaUncheckedUpdateManyWithoutUsuarioNestedInput
    favoritos?: FavoritoUncheckedUpdateManyWithoutUsuarioNestedInput
    inmueblesPropietario?: InmuebleUncheckedUpdateManyWithoutPropietarioNestedInput
    Intereses?: InteresUncheckedUpdateManyWithoutUsuarioNestedInput
    mensajesRecibidos?: MensajeUncheckedUpdateManyWithoutReceptorNestedInput
    notificaciones?: NotificacionUncheckedUpdateManyWithoutUsuarioNestedInput
    reportes?: ReporteUncheckedUpdateManyWithoutUsuarioNestedInput
    resenas?: ResenaUncheckedUpdateManyWithoutUsuarioNestedInput
    preferences?: UserPreferenceUncheckedUpdateOneWithoutUserNestedInput
  }

  export type InteresUpsertWithoutMensajesInput = {
    update: XOR<InteresUpdateWithoutMensajesInput, InteresUncheckedUpdateWithoutMensajesInput>
    create: XOR<InteresCreateWithoutMensajesInput, InteresUncheckedCreateWithoutMensajesInput>
    where?: InteresWhereInput
  }

  export type InteresUpdateToOneWithWhereWithoutMensajesInput = {
    where?: InteresWhereInput
    data: XOR<InteresUpdateWithoutMensajesInput, InteresUncheckedUpdateWithoutMensajesInput>
  }

  export type InteresUpdateWithoutMensajesInput = {
    id?: StringFieldUpdateOperationsInput | string
    mensaje?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    inmueble?: InmuebleUpdateOneRequiredWithoutInteresesNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutInteresesNestedInput
  }

  export type InteresUncheckedUpdateWithoutMensajesInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    inmuebleId?: StringFieldUpdateOperationsInput | string
    mensaje?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
=======
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedProperties?: InmuebleUncheckedUpdateManyWithoutOwnerNestedInput
    interests?: InteresUncheckedUpdateManyWithoutUserNestedInput
    receivedMessages?: MensajeUncheckedUpdateManyWithoutReceiverNestedInput
    reviews?: ResenaUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificacionUncheckedUpdateManyWithoutUserNestedInput
    reports?: ReporteUncheckedUpdateManyWithoutUserNestedInput
    favorites?: FavoritoUncheckedUpdateManyWithoutUserNestedInput
    savedSearches?: BusquedaGuardadaUncheckedUpdateManyWithoutUserNestedInput
>>>>>>> Stashed changes
  }

  export type UsuarioUpsertWithoutReceivedMessagesInput = {
    update: XOR<UsuarioUpdateWithoutReceivedMessagesInput, UsuarioUncheckedUpdateWithoutReceivedMessagesInput>
    create: XOR<UsuarioCreateWithoutReceivedMessagesInput, UsuarioUncheckedCreateWithoutReceivedMessagesInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutReceivedMessagesInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutReceivedMessagesInput, UsuarioUncheckedUpdateWithoutReceivedMessagesInput>
  }

  export type UsuarioUpdateWithoutReceivedMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    verificationStatus?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
<<<<<<< Updated upstream
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    busquedasGuardadas?: BusquedaGuardadaUpdateManyWithoutUsuarioNestedInput
    favoritos?: FavoritoUpdateManyWithoutUsuarioNestedInput
    inmueblesPropietario?: InmuebleUpdateManyWithoutPropietarioNestedInput
    Intereses?: InteresUpdateManyWithoutUsuarioNestedInput
    mensajesEmitidos?: MensajeUpdateManyWithoutEmisorNestedInput
    notificaciones?: NotificacionUpdateManyWithoutUsuarioNestedInput
    reportes?: ReporteUpdateManyWithoutUsuarioNestedInput
    resenas?: ResenaUpdateManyWithoutUsuarioNestedInput
    preferences?: UserPreferenceUpdateOneWithoutUserNestedInput
=======
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedProperties?: InmuebleUpdateManyWithoutOwnerNestedInput
    interests?: InteresUpdateManyWithoutUserNestedInput
    sentMessages?: MensajeUpdateManyWithoutSenderNestedInput
    reviews?: ResenaUpdateManyWithoutUserNestedInput
    notifications?: NotificacionUpdateManyWithoutUserNestedInput
    reports?: ReporteUpdateManyWithoutUserNestedInput
    favorites?: FavoritoUpdateManyWithoutUserNestedInput
    savedSearches?: BusquedaGuardadaUpdateManyWithoutUserNestedInput
>>>>>>> Stashed changes
  }

  export type UsuarioUncheckedUpdateWithoutReceivedMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    verificationStatus?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
<<<<<<< Updated upstream
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    busquedasGuardadas?: BusquedaGuardadaUncheckedUpdateManyWithoutUsuarioNestedInput
    favoritos?: FavoritoUncheckedUpdateManyWithoutUsuarioNestedInput
    inmueblesPropietario?: InmuebleUncheckedUpdateManyWithoutPropietarioNestedInput
    Intereses?: InteresUncheckedUpdateManyWithoutUsuarioNestedInput
    mensajesEmitidos?: MensajeUncheckedUpdateManyWithoutEmisorNestedInput
    notificaciones?: NotificacionUncheckedUpdateManyWithoutUsuarioNestedInput
    reportes?: ReporteUncheckedUpdateManyWithoutUsuarioNestedInput
    resenas?: ResenaUncheckedUpdateManyWithoutUsuarioNestedInput
    preferences?: UserPreferenceUncheckedUpdateOneWithoutUserNestedInput
=======
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedProperties?: InmuebleUncheckedUpdateManyWithoutOwnerNestedInput
    interests?: InteresUncheckedUpdateManyWithoutUserNestedInput
    sentMessages?: MensajeUncheckedUpdateManyWithoutSenderNestedInput
    reviews?: ResenaUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificacionUncheckedUpdateManyWithoutUserNestedInput
    reports?: ReporteUncheckedUpdateManyWithoutUserNestedInput
    favorites?: FavoritoUncheckedUpdateManyWithoutUserNestedInput
    savedSearches?: BusquedaGuardadaUncheckedUpdateManyWithoutUserNestedInput
  }

  export type InteresUpsertWithoutMessagesInput = {
    update: XOR<InteresUpdateWithoutMessagesInput, InteresUncheckedUpdateWithoutMessagesInput>
    create: XOR<InteresCreateWithoutMessagesInput, InteresUncheckedCreateWithoutMessagesInput>
    where?: InteresWhereInput
  }

  export type InteresUpdateToOneWithWhereWithoutMessagesInput = {
    where?: InteresWhereInput
    data: XOR<InteresUpdateWithoutMessagesInput, InteresUncheckedUpdateWithoutMessagesInput>
  }

  export type InteresUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsuarioUpdateOneRequiredWithoutInterestsNestedInput
    property?: InmuebleUpdateOneRequiredWithoutInterestsNestedInput
  }

  export type InteresUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
>>>>>>> Stashed changes
  }

  export type InmuebleCreateWithoutPropertyPhotosInput = {
    id?: string
    title: string
    description?: string | null
    address?: string | null
    city?: string
    bedrooms?: number | null
    bathrooms?: number | null
    areaM2?: Decimal | DecimalJsLike | number | string | null
<<<<<<< Updated upstream
    precio: Decimal | DecimalJsLike | number | string
    tipoOperacion: string
    estado?: string
    fechaCreacion?: Date | string
    fechaActualizacion?: Date | string
    favoritos?: FavoritoCreateNestedManyWithoutInmuebleInput
    propietario: UsuarioCreateNestedOneWithoutInmueblesPropietarioInput
    intereses?: InteresCreateNestedManyWithoutInmuebleInput
    resenas?: ResenaCreateNestedManyWithoutInmuebleInput
=======
    price: Decimal | DecimalJsLike | number | string
    operationType: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UsuarioCreateNestedOneWithoutOwnedPropertiesInput
    interests?: InteresCreateNestedManyWithoutPropertyInput
    reviews?: ResenaCreateNestedManyWithoutPropertyInput
    favorites?: FavoritoCreateNestedManyWithoutPropertyInput
>>>>>>> Stashed changes
  }

  export type InmuebleUncheckedCreateWithoutPropertyPhotosInput = {
    id?: string
    ownerId: string
    title: string
    description?: string | null
    address?: string | null
    city?: string
    bedrooms?: number | null
    bathrooms?: number | null
    areaM2?: Decimal | DecimalJsLike | number | string | null
<<<<<<< Updated upstream
    precio: Decimal | DecimalJsLike | number | string
    tipoOperacion: string
    estado?: string
    fechaCreacion?: Date | string
    fechaActualizacion?: Date | string
    favoritos?: FavoritoUncheckedCreateNestedManyWithoutInmuebleInput
    intereses?: InteresUncheckedCreateNestedManyWithoutInmuebleInput
    resenas?: ResenaUncheckedCreateNestedManyWithoutInmuebleInput
=======
    price: Decimal | DecimalJsLike | number | string
    operationType: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    interests?: InteresUncheckedCreateNestedManyWithoutPropertyInput
    reviews?: ResenaUncheckedCreateNestedManyWithoutPropertyInput
    favorites?: FavoritoUncheckedCreateNestedManyWithoutPropertyInput
>>>>>>> Stashed changes
  }

  export type InmuebleCreateOrConnectWithoutPropertyPhotosInput = {
    where: InmuebleWhereUniqueInput
    create: XOR<InmuebleCreateWithoutPropertyPhotosInput, InmuebleUncheckedCreateWithoutPropertyPhotosInput>
  }

  export type InmuebleUpsertWithoutPropertyPhotosInput = {
    update: XOR<InmuebleUpdateWithoutPropertyPhotosInput, InmuebleUncheckedUpdateWithoutPropertyPhotosInput>
    create: XOR<InmuebleCreateWithoutPropertyPhotosInput, InmuebleUncheckedCreateWithoutPropertyPhotosInput>
    where?: InmuebleWhereInput
  }

  export type InmuebleUpdateToOneWithWhereWithoutPropertyPhotosInput = {
    where?: InmuebleWhereInput
    data: XOR<InmuebleUpdateWithoutPropertyPhotosInput, InmuebleUncheckedUpdateWithoutPropertyPhotosInput>
  }

  export type InmuebleUpdateWithoutPropertyPhotosInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableIntFieldUpdateOperationsInput | number | null
    areaM2?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
<<<<<<< Updated upstream
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tipoOperacion?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    favoritos?: FavoritoUpdateManyWithoutInmuebleNestedInput
    propietario?: UsuarioUpdateOneRequiredWithoutInmueblesPropietarioNestedInput
    intereses?: InteresUpdateManyWithoutInmuebleNestedInput
    resenas?: ResenaUpdateManyWithoutInmuebleNestedInput
=======
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    operationType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UsuarioUpdateOneRequiredWithoutOwnedPropertiesNestedInput
    interests?: InteresUpdateManyWithoutPropertyNestedInput
    reviews?: ResenaUpdateManyWithoutPropertyNestedInput
    favorites?: FavoritoUpdateManyWithoutPropertyNestedInput
>>>>>>> Stashed changes
  }

  export type InmuebleUncheckedUpdateWithoutPropertyPhotosInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableIntFieldUpdateOperationsInput | number | null
    areaM2?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
<<<<<<< Updated upstream
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tipoOperacion?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    favoritos?: FavoritoUncheckedUpdateManyWithoutInmuebleNestedInput
    intereses?: InteresUncheckedUpdateManyWithoutInmuebleNestedInput
    resenas?: ResenaUncheckedUpdateManyWithoutInmuebleNestedInput
=======
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    operationType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    interests?: InteresUncheckedUpdateManyWithoutPropertyNestedInput
    reviews?: ResenaUncheckedUpdateManyWithoutPropertyNestedInput
    favorites?: FavoritoUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type UsuarioCreateWithoutReviewsInput = {
    id?: string
    googleId?: string | null
    profilePhoto?: string | null
    email: string
    passwordHash?: string | null
    fullName?: string | null
    phone?: string | null
    role?: string
    verificationStatus?: string
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedProperties?: InmuebleCreateNestedManyWithoutOwnerInput
    interests?: InteresCreateNestedManyWithoutUserInput
    sentMessages?: MensajeCreateNestedManyWithoutSenderInput
    receivedMessages?: MensajeCreateNestedManyWithoutReceiverInput
    notifications?: NotificacionCreateNestedManyWithoutUserInput
    reports?: ReporteCreateNestedManyWithoutUserInput
    favorites?: FavoritoCreateNestedManyWithoutUserInput
    savedSearches?: BusquedaGuardadaCreateNestedManyWithoutUserInput
  }

  export type UsuarioUncheckedCreateWithoutReviewsInput = {
    id?: string
    googleId?: string | null
    profilePhoto?: string | null
    email: string
    passwordHash?: string | null
    fullName?: string | null
    phone?: string | null
    role?: string
    verificationStatus?: string
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedProperties?: InmuebleUncheckedCreateNestedManyWithoutOwnerInput
    interests?: InteresUncheckedCreateNestedManyWithoutUserInput
    sentMessages?: MensajeUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MensajeUncheckedCreateNestedManyWithoutReceiverInput
    notifications?: NotificacionUncheckedCreateNestedManyWithoutUserInput
    reports?: ReporteUncheckedCreateNestedManyWithoutUserInput
    favorites?: FavoritoUncheckedCreateNestedManyWithoutUserInput
    savedSearches?: BusquedaGuardadaUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsuarioCreateOrConnectWithoutReviewsInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutReviewsInput, UsuarioUncheckedCreateWithoutReviewsInput>
>>>>>>> Stashed changes
  }

  export type InmuebleCreateWithoutReviewsInput = {
    id?: string
    title: string
    description?: string | null
    address?: string | null
    city?: string
    bedrooms?: number | null
    bathrooms?: number | null
    areaM2?: Decimal | DecimalJsLike | number | string | null
<<<<<<< Updated upstream
    precio: Decimal | DecimalJsLike | number | string
    tipoOperacion: string
    estado?: string
    fechaCreacion?: Date | string
    fechaActualizacion?: Date | string
    favoritos?: FavoritoCreateNestedManyWithoutInmuebleInput
    fotosInmueble?: FotoInmuebleCreateNestedManyWithoutInmuebleInput
    propietario: UsuarioCreateNestedOneWithoutInmueblesPropietarioInput
    intereses?: InteresCreateNestedManyWithoutInmuebleInput
=======
    price: Decimal | DecimalJsLike | number | string
    operationType: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UsuarioCreateNestedOneWithoutOwnedPropertiesInput
    interests?: InteresCreateNestedManyWithoutPropertyInput
    propertyPhotos?: FotoInmuebleCreateNestedManyWithoutPropertyInput
    favorites?: FavoritoCreateNestedManyWithoutPropertyInput
>>>>>>> Stashed changes
  }

  export type InmuebleUncheckedCreateWithoutReviewsInput = {
    id?: string
    ownerId: string
    title: string
    description?: string | null
    address?: string | null
    city?: string
    bedrooms?: number | null
    bathrooms?: number | null
    areaM2?: Decimal | DecimalJsLike | number | string | null
<<<<<<< Updated upstream
    precio: Decimal | DecimalJsLike | number | string
    tipoOperacion: string
    estado?: string
    fechaCreacion?: Date | string
    fechaActualizacion?: Date | string
    favoritos?: FavoritoUncheckedCreateNestedManyWithoutInmuebleInput
    fotosInmueble?: FotoInmuebleUncheckedCreateNestedManyWithoutInmuebleInput
    intereses?: InteresUncheckedCreateNestedManyWithoutInmuebleInput
=======
    price: Decimal | DecimalJsLike | number | string
    operationType: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    interests?: InteresUncheckedCreateNestedManyWithoutPropertyInput
    propertyPhotos?: FotoInmuebleUncheckedCreateNestedManyWithoutPropertyInput
    favorites?: FavoritoUncheckedCreateNestedManyWithoutPropertyInput
>>>>>>> Stashed changes
  }

  export type InmuebleCreateOrConnectWithoutReviewsInput = {
    where: InmuebleWhereUniqueInput
    create: XOR<InmuebleCreateWithoutReviewsInput, InmuebleUncheckedCreateWithoutReviewsInput>
  }

<<<<<<< Updated upstream
  export type UsuarioCreateWithoutResenasInput = {
    id?: string
    googleId?: string | null
    fotoPerfil?: string | null
    correoElectronico: string
    contrasenaHash?: string | null
    nombreCompleto?: string | null
    telefono?: string | null
    rol?: string
    estadoVerificacion?: string
    refreshToken?: string | null
    fechaCreacion?: Date | string
    fechaActualizacion?: Date | string
    busquedasGuardadas?: BusquedaGuardadaCreateNestedManyWithoutUsuarioInput
    favoritos?: FavoritoCreateNestedManyWithoutUsuarioInput
    inmueblesPropietario?: InmuebleCreateNestedManyWithoutPropietarioInput
    Intereses?: InteresCreateNestedManyWithoutUsuarioInput
    mensajesEmitidos?: MensajeCreateNestedManyWithoutEmisorInput
    mensajesRecibidos?: MensajeCreateNestedManyWithoutReceptorInput
    notificaciones?: NotificacionCreateNestedManyWithoutUsuarioInput
    reportes?: ReporteCreateNestedManyWithoutUsuarioInput
    preferences?: UserPreferenceCreateNestedOneWithoutUserInput
  }

  export type UsuarioUncheckedCreateWithoutResenasInput = {
    id?: string
    googleId?: string | null
    fotoPerfil?: string | null
    correoElectronico: string
    contrasenaHash?: string | null
    nombreCompleto?: string | null
    telefono?: string | null
    rol?: string
    estadoVerificacion?: string
    refreshToken?: string | null
    fechaCreacion?: Date | string
    fechaActualizacion?: Date | string
    busquedasGuardadas?: BusquedaGuardadaUncheckedCreateNestedManyWithoutUsuarioInput
    favoritos?: FavoritoUncheckedCreateNestedManyWithoutUsuarioInput
    inmueblesPropietario?: InmuebleUncheckedCreateNestedManyWithoutPropietarioInput
    Intereses?: InteresUncheckedCreateNestedManyWithoutUsuarioInput
    mensajesEmitidos?: MensajeUncheckedCreateNestedManyWithoutEmisorInput
    mensajesRecibidos?: MensajeUncheckedCreateNestedManyWithoutReceptorInput
    notificaciones?: NotificacionUncheckedCreateNestedManyWithoutUsuarioInput
    reportes?: ReporteUncheckedCreateNestedManyWithoutUsuarioInput
    preferences?: UserPreferenceUncheckedCreateNestedOneWithoutUserInput
  }

  export type UsuarioCreateOrConnectWithoutResenasInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutResenasInput, UsuarioUncheckedCreateWithoutResenasInput>
=======
  export type UsuarioUpsertWithoutReviewsInput = {
    update: XOR<UsuarioUpdateWithoutReviewsInput, UsuarioUncheckedUpdateWithoutReviewsInput>
    create: XOR<UsuarioCreateWithoutReviewsInput, UsuarioUncheckedCreateWithoutReviewsInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutReviewsInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutReviewsInput, UsuarioUncheckedUpdateWithoutReviewsInput>
  }

  export type UsuarioUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    verificationStatus?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedProperties?: InmuebleUpdateManyWithoutOwnerNestedInput
    interests?: InteresUpdateManyWithoutUserNestedInput
    sentMessages?: MensajeUpdateManyWithoutSenderNestedInput
    receivedMessages?: MensajeUpdateManyWithoutReceiverNestedInput
    notifications?: NotificacionUpdateManyWithoutUserNestedInput
    reports?: ReporteUpdateManyWithoutUserNestedInput
    favorites?: FavoritoUpdateManyWithoutUserNestedInput
    savedSearches?: BusquedaGuardadaUpdateManyWithoutUserNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    verificationStatus?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedProperties?: InmuebleUncheckedUpdateManyWithoutOwnerNestedInput
    interests?: InteresUncheckedUpdateManyWithoutUserNestedInput
    sentMessages?: MensajeUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MensajeUncheckedUpdateManyWithoutReceiverNestedInput
    notifications?: NotificacionUncheckedUpdateManyWithoutUserNestedInput
    reports?: ReporteUncheckedUpdateManyWithoutUserNestedInput
    favorites?: FavoritoUncheckedUpdateManyWithoutUserNestedInput
    savedSearches?: BusquedaGuardadaUncheckedUpdateManyWithoutUserNestedInput
>>>>>>> Stashed changes
  }

  export type InmuebleUpsertWithoutReviewsInput = {
    update: XOR<InmuebleUpdateWithoutReviewsInput, InmuebleUncheckedUpdateWithoutReviewsInput>
    create: XOR<InmuebleCreateWithoutReviewsInput, InmuebleUncheckedCreateWithoutReviewsInput>
    where?: InmuebleWhereInput
  }

  export type InmuebleUpdateToOneWithWhereWithoutReviewsInput = {
    where?: InmuebleWhereInput
    data: XOR<InmuebleUpdateWithoutReviewsInput, InmuebleUncheckedUpdateWithoutReviewsInput>
  }

  export type InmuebleUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableIntFieldUpdateOperationsInput | number | null
    areaM2?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
<<<<<<< Updated upstream
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tipoOperacion?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    favoritos?: FavoritoUpdateManyWithoutInmuebleNestedInput
    fotosInmueble?: FotoInmuebleUpdateManyWithoutInmuebleNestedInput
    propietario?: UsuarioUpdateOneRequiredWithoutInmueblesPropietarioNestedInput
    intereses?: InteresUpdateManyWithoutInmuebleNestedInput
=======
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    operationType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UsuarioUpdateOneRequiredWithoutOwnedPropertiesNestedInput
    interests?: InteresUpdateManyWithoutPropertyNestedInput
    propertyPhotos?: FotoInmuebleUpdateManyWithoutPropertyNestedInput
    favorites?: FavoritoUpdateManyWithoutPropertyNestedInput
>>>>>>> Stashed changes
  }

  export type InmuebleUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableIntFieldUpdateOperationsInput | number | null
    areaM2?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
<<<<<<< Updated upstream
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tipoOperacion?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    favoritos?: FavoritoUncheckedUpdateManyWithoutInmuebleNestedInput
    fotosInmueble?: FotoInmuebleUncheckedUpdateManyWithoutInmuebleNestedInput
    intereses?: InteresUncheckedUpdateManyWithoutInmuebleNestedInput
  }

  export type UsuarioUpsertWithoutResenasInput = {
    update: XOR<UsuarioUpdateWithoutResenasInput, UsuarioUncheckedUpdateWithoutResenasInput>
    create: XOR<UsuarioCreateWithoutResenasInput, UsuarioUncheckedCreateWithoutResenasInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutResenasInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutResenasInput, UsuarioUncheckedUpdateWithoutResenasInput>
  }

  export type UsuarioUpdateWithoutResenasInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    fotoPerfil?: NullableStringFieldUpdateOperationsInput | string | null
    correoElectronico?: StringFieldUpdateOperationsInput | string
    contrasenaHash?: NullableStringFieldUpdateOperationsInput | string | null
    nombreCompleto?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: StringFieldUpdateOperationsInput | string
    estadoVerificacion?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    busquedasGuardadas?: BusquedaGuardadaUpdateManyWithoutUsuarioNestedInput
    favoritos?: FavoritoUpdateManyWithoutUsuarioNestedInput
    inmueblesPropietario?: InmuebleUpdateManyWithoutPropietarioNestedInput
    Intereses?: InteresUpdateManyWithoutUsuarioNestedInput
    mensajesEmitidos?: MensajeUpdateManyWithoutEmisorNestedInput
    mensajesRecibidos?: MensajeUpdateManyWithoutReceptorNestedInput
    notificaciones?: NotificacionUpdateManyWithoutUsuarioNestedInput
    reportes?: ReporteUpdateManyWithoutUsuarioNestedInput
    preferences?: UserPreferenceUpdateOneWithoutUserNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutResenasInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    fotoPerfil?: NullableStringFieldUpdateOperationsInput | string | null
    correoElectronico?: StringFieldUpdateOperationsInput | string
    contrasenaHash?: NullableStringFieldUpdateOperationsInput | string | null
    nombreCompleto?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: StringFieldUpdateOperationsInput | string
    estadoVerificacion?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    busquedasGuardadas?: BusquedaGuardadaUncheckedUpdateManyWithoutUsuarioNestedInput
    favoritos?: FavoritoUncheckedUpdateManyWithoutUsuarioNestedInput
    inmueblesPropietario?: InmuebleUncheckedUpdateManyWithoutPropietarioNestedInput
    Intereses?: InteresUncheckedUpdateManyWithoutUsuarioNestedInput
    mensajesEmitidos?: MensajeUncheckedUpdateManyWithoutEmisorNestedInput
    mensajesRecibidos?: MensajeUncheckedUpdateManyWithoutReceptorNestedInput
    notificaciones?: NotificacionUncheckedUpdateManyWithoutUsuarioNestedInput
    reportes?: ReporteUncheckedUpdateManyWithoutUsuarioNestedInput
    preferences?: UserPreferenceUncheckedUpdateOneWithoutUserNestedInput
=======
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    operationType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    interests?: InteresUncheckedUpdateManyWithoutPropertyNestedInput
    propertyPhotos?: FotoInmuebleUncheckedUpdateManyWithoutPropertyNestedInput
    favorites?: FavoritoUncheckedUpdateManyWithoutPropertyNestedInput
>>>>>>> Stashed changes
  }

  export type UsuarioCreateWithoutNotificationsInput = {
    id?: string
    googleId?: string | null
    profilePhoto?: string | null
    email: string
    passwordHash?: string | null
    fullName?: string | null
    phone?: string | null
    role?: string
    verificationStatus?: string
    refreshToken?: string | null
<<<<<<< Updated upstream
    fechaCreacion?: Date | string
    fechaActualizacion?: Date | string
    busquedasGuardadas?: BusquedaGuardadaCreateNestedManyWithoutUsuarioInput
    favoritos?: FavoritoCreateNestedManyWithoutUsuarioInput
    inmueblesPropietario?: InmuebleCreateNestedManyWithoutPropietarioInput
    Intereses?: InteresCreateNestedManyWithoutUsuarioInput
    mensajesEmitidos?: MensajeCreateNestedManyWithoutEmisorInput
    mensajesRecibidos?: MensajeCreateNestedManyWithoutReceptorInput
    reportes?: ReporteCreateNestedManyWithoutUsuarioInput
    resenas?: ResenaCreateNestedManyWithoutUsuarioInput
    preferences?: UserPreferenceCreateNestedOneWithoutUserInput
=======
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedProperties?: InmuebleCreateNestedManyWithoutOwnerInput
    interests?: InteresCreateNestedManyWithoutUserInput
    sentMessages?: MensajeCreateNestedManyWithoutSenderInput
    receivedMessages?: MensajeCreateNestedManyWithoutReceiverInput
    reviews?: ResenaCreateNestedManyWithoutUserInput
    reports?: ReporteCreateNestedManyWithoutUserInput
    favorites?: FavoritoCreateNestedManyWithoutUserInput
    savedSearches?: BusquedaGuardadaCreateNestedManyWithoutUserInput
>>>>>>> Stashed changes
  }

  export type UsuarioUncheckedCreateWithoutNotificationsInput = {
    id?: string
    googleId?: string | null
    profilePhoto?: string | null
    email: string
    passwordHash?: string | null
    fullName?: string | null
    phone?: string | null
    role?: string
    verificationStatus?: string
    refreshToken?: string | null
<<<<<<< Updated upstream
    fechaCreacion?: Date | string
    fechaActualizacion?: Date | string
    busquedasGuardadas?: BusquedaGuardadaUncheckedCreateNestedManyWithoutUsuarioInput
    favoritos?: FavoritoUncheckedCreateNestedManyWithoutUsuarioInput
    inmueblesPropietario?: InmuebleUncheckedCreateNestedManyWithoutPropietarioInput
    Intereses?: InteresUncheckedCreateNestedManyWithoutUsuarioInput
    mensajesEmitidos?: MensajeUncheckedCreateNestedManyWithoutEmisorInput
    mensajesRecibidos?: MensajeUncheckedCreateNestedManyWithoutReceptorInput
    reportes?: ReporteUncheckedCreateNestedManyWithoutUsuarioInput
    resenas?: ResenaUncheckedCreateNestedManyWithoutUsuarioInput
    preferences?: UserPreferenceUncheckedCreateNestedOneWithoutUserInput
=======
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedProperties?: InmuebleUncheckedCreateNestedManyWithoutOwnerInput
    interests?: InteresUncheckedCreateNestedManyWithoutUserInput
    sentMessages?: MensajeUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MensajeUncheckedCreateNestedManyWithoutReceiverInput
    reviews?: ResenaUncheckedCreateNestedManyWithoutUserInput
    reports?: ReporteUncheckedCreateNestedManyWithoutUserInput
    favorites?: FavoritoUncheckedCreateNestedManyWithoutUserInput
    savedSearches?: BusquedaGuardadaUncheckedCreateNestedManyWithoutUserInput
>>>>>>> Stashed changes
  }

  export type UsuarioCreateOrConnectWithoutNotificationsInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutNotificationsInput, UsuarioUncheckedCreateWithoutNotificationsInput>
  }

  export type UsuarioUpsertWithoutNotificationsInput = {
    update: XOR<UsuarioUpdateWithoutNotificationsInput, UsuarioUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UsuarioCreateWithoutNotificationsInput, UsuarioUncheckedCreateWithoutNotificationsInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutNotificationsInput, UsuarioUncheckedUpdateWithoutNotificationsInput>
  }

  export type UsuarioUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    verificationStatus?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
<<<<<<< Updated upstream
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    busquedasGuardadas?: BusquedaGuardadaUpdateManyWithoutUsuarioNestedInput
    favoritos?: FavoritoUpdateManyWithoutUsuarioNestedInput
    inmueblesPropietario?: InmuebleUpdateManyWithoutPropietarioNestedInput
    Intereses?: InteresUpdateManyWithoutUsuarioNestedInput
    mensajesEmitidos?: MensajeUpdateManyWithoutEmisorNestedInput
    mensajesRecibidos?: MensajeUpdateManyWithoutReceptorNestedInput
    reportes?: ReporteUpdateManyWithoutUsuarioNestedInput
    resenas?: ResenaUpdateManyWithoutUsuarioNestedInput
    preferences?: UserPreferenceUpdateOneWithoutUserNestedInput
=======
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedProperties?: InmuebleUpdateManyWithoutOwnerNestedInput
    interests?: InteresUpdateManyWithoutUserNestedInput
    sentMessages?: MensajeUpdateManyWithoutSenderNestedInput
    receivedMessages?: MensajeUpdateManyWithoutReceiverNestedInput
    reviews?: ResenaUpdateManyWithoutUserNestedInput
    reports?: ReporteUpdateManyWithoutUserNestedInput
    favorites?: FavoritoUpdateManyWithoutUserNestedInput
    savedSearches?: BusquedaGuardadaUpdateManyWithoutUserNestedInput
>>>>>>> Stashed changes
  }

  export type UsuarioUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    verificationStatus?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
<<<<<<< Updated upstream
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    busquedasGuardadas?: BusquedaGuardadaUncheckedUpdateManyWithoutUsuarioNestedInput
    favoritos?: FavoritoUncheckedUpdateManyWithoutUsuarioNestedInput
    inmueblesPropietario?: InmuebleUncheckedUpdateManyWithoutPropietarioNestedInput
    Intereses?: InteresUncheckedUpdateManyWithoutUsuarioNestedInput
    mensajesEmitidos?: MensajeUncheckedUpdateManyWithoutEmisorNestedInput
    mensajesRecibidos?: MensajeUncheckedUpdateManyWithoutReceptorNestedInput
    reportes?: ReporteUncheckedUpdateManyWithoutUsuarioNestedInput
    resenas?: ResenaUncheckedUpdateManyWithoutUsuarioNestedInput
    preferences?: UserPreferenceUncheckedUpdateOneWithoutUserNestedInput
=======
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedProperties?: InmuebleUncheckedUpdateManyWithoutOwnerNestedInput
    interests?: InteresUncheckedUpdateManyWithoutUserNestedInput
    sentMessages?: MensajeUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MensajeUncheckedUpdateManyWithoutReceiverNestedInput
    reviews?: ResenaUncheckedUpdateManyWithoutUserNestedInput
    reports?: ReporteUncheckedUpdateManyWithoutUserNestedInput
    favorites?: FavoritoUncheckedUpdateManyWithoutUserNestedInput
    savedSearches?: BusquedaGuardadaUncheckedUpdateManyWithoutUserNestedInput
>>>>>>> Stashed changes
  }

  export type UsuarioCreateWithoutReportsInput = {
    id?: string
    googleId?: string | null
    profilePhoto?: string | null
    email: string
    passwordHash?: string | null
    fullName?: string | null
    phone?: string | null
    role?: string
    verificationStatus?: string
    refreshToken?: string | null
<<<<<<< Updated upstream
    fechaCreacion?: Date | string
    fechaActualizacion?: Date | string
    busquedasGuardadas?: BusquedaGuardadaCreateNestedManyWithoutUsuarioInput
    favoritos?: FavoritoCreateNestedManyWithoutUsuarioInput
    inmueblesPropietario?: InmuebleCreateNestedManyWithoutPropietarioInput
    Intereses?: InteresCreateNestedManyWithoutUsuarioInput
    mensajesEmitidos?: MensajeCreateNestedManyWithoutEmisorInput
    mensajesRecibidos?: MensajeCreateNestedManyWithoutReceptorInput
    notificaciones?: NotificacionCreateNestedManyWithoutUsuarioInput
    resenas?: ResenaCreateNestedManyWithoutUsuarioInput
    preferences?: UserPreferenceCreateNestedOneWithoutUserInput
=======
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedProperties?: InmuebleCreateNestedManyWithoutOwnerInput
    interests?: InteresCreateNestedManyWithoutUserInput
    sentMessages?: MensajeCreateNestedManyWithoutSenderInput
    receivedMessages?: MensajeCreateNestedManyWithoutReceiverInput
    reviews?: ResenaCreateNestedManyWithoutUserInput
    notifications?: NotificacionCreateNestedManyWithoutUserInput
    favorites?: FavoritoCreateNestedManyWithoutUserInput
    savedSearches?: BusquedaGuardadaCreateNestedManyWithoutUserInput
>>>>>>> Stashed changes
  }

  export type UsuarioUncheckedCreateWithoutReportsInput = {
    id?: string
    googleId?: string | null
    profilePhoto?: string | null
    email: string
    passwordHash?: string | null
    fullName?: string | null
    phone?: string | null
    role?: string
    verificationStatus?: string
    refreshToken?: string | null
<<<<<<< Updated upstream
    fechaCreacion?: Date | string
    fechaActualizacion?: Date | string
    busquedasGuardadas?: BusquedaGuardadaUncheckedCreateNestedManyWithoutUsuarioInput
    favoritos?: FavoritoUncheckedCreateNestedManyWithoutUsuarioInput
    inmueblesPropietario?: InmuebleUncheckedCreateNestedManyWithoutPropietarioInput
    Intereses?: InteresUncheckedCreateNestedManyWithoutUsuarioInput
    mensajesEmitidos?: MensajeUncheckedCreateNestedManyWithoutEmisorInput
    mensajesRecibidos?: MensajeUncheckedCreateNestedManyWithoutReceptorInput
    notificaciones?: NotificacionUncheckedCreateNestedManyWithoutUsuarioInput
    resenas?: ResenaUncheckedCreateNestedManyWithoutUsuarioInput
    preferences?: UserPreferenceUncheckedCreateNestedOneWithoutUserInput
=======
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedProperties?: InmuebleUncheckedCreateNestedManyWithoutOwnerInput
    interests?: InteresUncheckedCreateNestedManyWithoutUserInput
    sentMessages?: MensajeUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MensajeUncheckedCreateNestedManyWithoutReceiverInput
    reviews?: ResenaUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificacionUncheckedCreateNestedManyWithoutUserInput
    favorites?: FavoritoUncheckedCreateNestedManyWithoutUserInput
    savedSearches?: BusquedaGuardadaUncheckedCreateNestedManyWithoutUserInput
>>>>>>> Stashed changes
  }

  export type UsuarioCreateOrConnectWithoutReportsInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutReportsInput, UsuarioUncheckedCreateWithoutReportsInput>
  }

  export type UsuarioUpsertWithoutReportsInput = {
    update: XOR<UsuarioUpdateWithoutReportsInput, UsuarioUncheckedUpdateWithoutReportsInput>
    create: XOR<UsuarioCreateWithoutReportsInput, UsuarioUncheckedCreateWithoutReportsInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutReportsInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutReportsInput, UsuarioUncheckedUpdateWithoutReportsInput>
  }

  export type UsuarioUpdateWithoutReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    verificationStatus?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
<<<<<<< Updated upstream
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    busquedasGuardadas?: BusquedaGuardadaUpdateManyWithoutUsuarioNestedInput
    favoritos?: FavoritoUpdateManyWithoutUsuarioNestedInput
    inmueblesPropietario?: InmuebleUpdateManyWithoutPropietarioNestedInput
    Intereses?: InteresUpdateManyWithoutUsuarioNestedInput
    mensajesEmitidos?: MensajeUpdateManyWithoutEmisorNestedInput
    mensajesRecibidos?: MensajeUpdateManyWithoutReceptorNestedInput
    notificaciones?: NotificacionUpdateManyWithoutUsuarioNestedInput
    resenas?: ResenaUpdateManyWithoutUsuarioNestedInput
    preferences?: UserPreferenceUpdateOneWithoutUserNestedInput
=======
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedProperties?: InmuebleUpdateManyWithoutOwnerNestedInput
    interests?: InteresUpdateManyWithoutUserNestedInput
    sentMessages?: MensajeUpdateManyWithoutSenderNestedInput
    receivedMessages?: MensajeUpdateManyWithoutReceiverNestedInput
    reviews?: ResenaUpdateManyWithoutUserNestedInput
    notifications?: NotificacionUpdateManyWithoutUserNestedInput
    favorites?: FavoritoUpdateManyWithoutUserNestedInput
    savedSearches?: BusquedaGuardadaUpdateManyWithoutUserNestedInput
>>>>>>> Stashed changes
  }

  export type UsuarioUncheckedUpdateWithoutReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    verificationStatus?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
<<<<<<< Updated upstream
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    busquedasGuardadas?: BusquedaGuardadaUncheckedUpdateManyWithoutUsuarioNestedInput
    favoritos?: FavoritoUncheckedUpdateManyWithoutUsuarioNestedInput
    inmueblesPropietario?: InmuebleUncheckedUpdateManyWithoutPropietarioNestedInput
    Intereses?: InteresUncheckedUpdateManyWithoutUsuarioNestedInput
    mensajesEmitidos?: MensajeUncheckedUpdateManyWithoutEmisorNestedInput
    mensajesRecibidos?: MensajeUncheckedUpdateManyWithoutReceptorNestedInput
    notificaciones?: NotificacionUncheckedUpdateManyWithoutUsuarioNestedInput
    resenas?: ResenaUncheckedUpdateManyWithoutUsuarioNestedInput
    preferences?: UserPreferenceUncheckedUpdateOneWithoutUserNestedInput
=======
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedProperties?: InmuebleUncheckedUpdateManyWithoutOwnerNestedInput
    interests?: InteresUncheckedUpdateManyWithoutUserNestedInput
    sentMessages?: MensajeUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MensajeUncheckedUpdateManyWithoutReceiverNestedInput
    reviews?: ResenaUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificacionUncheckedUpdateManyWithoutUserNestedInput
    favorites?: FavoritoUncheckedUpdateManyWithoutUserNestedInput
    savedSearches?: BusquedaGuardadaUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsuarioCreateWithoutFavoritesInput = {
    id?: string
    googleId?: string | null
    profilePhoto?: string | null
    email: string
    passwordHash?: string | null
    fullName?: string | null
    phone?: string | null
    role?: string
    verificationStatus?: string
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedProperties?: InmuebleCreateNestedManyWithoutOwnerInput
    interests?: InteresCreateNestedManyWithoutUserInput
    sentMessages?: MensajeCreateNestedManyWithoutSenderInput
    receivedMessages?: MensajeCreateNestedManyWithoutReceiverInput
    reviews?: ResenaCreateNestedManyWithoutUserInput
    notifications?: NotificacionCreateNestedManyWithoutUserInput
    reports?: ReporteCreateNestedManyWithoutUserInput
    savedSearches?: BusquedaGuardadaCreateNestedManyWithoutUserInput
  }

  export type UsuarioUncheckedCreateWithoutFavoritesInput = {
    id?: string
    googleId?: string | null
    profilePhoto?: string | null
    email: string
    passwordHash?: string | null
    fullName?: string | null
    phone?: string | null
    role?: string
    verificationStatus?: string
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedProperties?: InmuebleUncheckedCreateNestedManyWithoutOwnerInput
    interests?: InteresUncheckedCreateNestedManyWithoutUserInput
    sentMessages?: MensajeUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MensajeUncheckedCreateNestedManyWithoutReceiverInput
    reviews?: ResenaUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificacionUncheckedCreateNestedManyWithoutUserInput
    reports?: ReporteUncheckedCreateNestedManyWithoutUserInput
    savedSearches?: BusquedaGuardadaUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsuarioCreateOrConnectWithoutFavoritesInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutFavoritesInput, UsuarioUncheckedCreateWithoutFavoritesInput>
>>>>>>> Stashed changes
  }

  export type InmuebleCreateWithoutFavoritesInput = {
    id?: string
    title: string
    description?: string | null
    address?: string | null
    city?: string
    bedrooms?: number | null
    bathrooms?: number | null
    areaM2?: Decimal | DecimalJsLike | number | string | null
<<<<<<< Updated upstream
    precio: Decimal | DecimalJsLike | number | string
    tipoOperacion: string
    estado?: string
    fechaCreacion?: Date | string
    fechaActualizacion?: Date | string
    fotosInmueble?: FotoInmuebleCreateNestedManyWithoutInmuebleInput
    propietario: UsuarioCreateNestedOneWithoutInmueblesPropietarioInput
    intereses?: InteresCreateNestedManyWithoutInmuebleInput
    resenas?: ResenaCreateNestedManyWithoutInmuebleInput
=======
    price: Decimal | DecimalJsLike | number | string
    operationType: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UsuarioCreateNestedOneWithoutOwnedPropertiesInput
    interests?: InteresCreateNestedManyWithoutPropertyInput
    propertyPhotos?: FotoInmuebleCreateNestedManyWithoutPropertyInput
    reviews?: ResenaCreateNestedManyWithoutPropertyInput
>>>>>>> Stashed changes
  }

  export type InmuebleUncheckedCreateWithoutFavoritesInput = {
    id?: string
    ownerId: string
    title: string
    description?: string | null
    address?: string | null
    city?: string
    bedrooms?: number | null
    bathrooms?: number | null
    areaM2?: Decimal | DecimalJsLike | number | string | null
<<<<<<< Updated upstream
    precio: Decimal | DecimalJsLike | number | string
    tipoOperacion: string
    estado?: string
    fechaCreacion?: Date | string
    fechaActualizacion?: Date | string
    fotosInmueble?: FotoInmuebleUncheckedCreateNestedManyWithoutInmuebleInput
    intereses?: InteresUncheckedCreateNestedManyWithoutInmuebleInput
    resenas?: ResenaUncheckedCreateNestedManyWithoutInmuebleInput
=======
    price: Decimal | DecimalJsLike | number | string
    operationType: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    interests?: InteresUncheckedCreateNestedManyWithoutPropertyInput
    propertyPhotos?: FotoInmuebleUncheckedCreateNestedManyWithoutPropertyInput
    reviews?: ResenaUncheckedCreateNestedManyWithoutPropertyInput
>>>>>>> Stashed changes
  }

  export type InmuebleCreateOrConnectWithoutFavoritesInput = {
    where: InmuebleWhereUniqueInput
    create: XOR<InmuebleCreateWithoutFavoritesInput, InmuebleUncheckedCreateWithoutFavoritesInput>
  }

<<<<<<< Updated upstream
  export type UsuarioCreateWithoutFavoritosInput = {
    id?: string
    googleId?: string | null
    fotoPerfil?: string | null
    correoElectronico: string
    contrasenaHash?: string | null
    nombreCompleto?: string | null
    telefono?: string | null
    rol?: string
    estadoVerificacion?: string
    refreshToken?: string | null
    fechaCreacion?: Date | string
    fechaActualizacion?: Date | string
    busquedasGuardadas?: BusquedaGuardadaCreateNestedManyWithoutUsuarioInput
    inmueblesPropietario?: InmuebleCreateNestedManyWithoutPropietarioInput
    Intereses?: InteresCreateNestedManyWithoutUsuarioInput
    mensajesEmitidos?: MensajeCreateNestedManyWithoutEmisorInput
    mensajesRecibidos?: MensajeCreateNestedManyWithoutReceptorInput
    notificaciones?: NotificacionCreateNestedManyWithoutUsuarioInput
    reportes?: ReporteCreateNestedManyWithoutUsuarioInput
    resenas?: ResenaCreateNestedManyWithoutUsuarioInput
    preferences?: UserPreferenceCreateNestedOneWithoutUserInput
  }

  export type UsuarioUncheckedCreateWithoutFavoritosInput = {
    id?: string
    googleId?: string | null
    fotoPerfil?: string | null
    correoElectronico: string
    contrasenaHash?: string | null
    nombreCompleto?: string | null
    telefono?: string | null
    rol?: string
    estadoVerificacion?: string
    refreshToken?: string | null
    fechaCreacion?: Date | string
    fechaActualizacion?: Date | string
    busquedasGuardadas?: BusquedaGuardadaUncheckedCreateNestedManyWithoutUsuarioInput
    inmueblesPropietario?: InmuebleUncheckedCreateNestedManyWithoutPropietarioInput
    Intereses?: InteresUncheckedCreateNestedManyWithoutUsuarioInput
    mensajesEmitidos?: MensajeUncheckedCreateNestedManyWithoutEmisorInput
    mensajesRecibidos?: MensajeUncheckedCreateNestedManyWithoutReceptorInput
    notificaciones?: NotificacionUncheckedCreateNestedManyWithoutUsuarioInput
    reportes?: ReporteUncheckedCreateNestedManyWithoutUsuarioInput
    resenas?: ResenaUncheckedCreateNestedManyWithoutUsuarioInput
    preferences?: UserPreferenceUncheckedCreateNestedOneWithoutUserInput
  }

  export type UsuarioCreateOrConnectWithoutFavoritosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutFavoritosInput, UsuarioUncheckedCreateWithoutFavoritosInput>
=======
  export type UsuarioUpsertWithoutFavoritesInput = {
    update: XOR<UsuarioUpdateWithoutFavoritesInput, UsuarioUncheckedUpdateWithoutFavoritesInput>
    create: XOR<UsuarioCreateWithoutFavoritesInput, UsuarioUncheckedCreateWithoutFavoritesInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutFavoritesInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutFavoritesInput, UsuarioUncheckedUpdateWithoutFavoritesInput>
  }

  export type UsuarioUpdateWithoutFavoritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    verificationStatus?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedProperties?: InmuebleUpdateManyWithoutOwnerNestedInput
    interests?: InteresUpdateManyWithoutUserNestedInput
    sentMessages?: MensajeUpdateManyWithoutSenderNestedInput
    receivedMessages?: MensajeUpdateManyWithoutReceiverNestedInput
    reviews?: ResenaUpdateManyWithoutUserNestedInput
    notifications?: NotificacionUpdateManyWithoutUserNestedInput
    reports?: ReporteUpdateManyWithoutUserNestedInput
    savedSearches?: BusquedaGuardadaUpdateManyWithoutUserNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutFavoritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    verificationStatus?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedProperties?: InmuebleUncheckedUpdateManyWithoutOwnerNestedInput
    interests?: InteresUncheckedUpdateManyWithoutUserNestedInput
    sentMessages?: MensajeUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MensajeUncheckedUpdateManyWithoutReceiverNestedInput
    reviews?: ResenaUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificacionUncheckedUpdateManyWithoutUserNestedInput
    reports?: ReporteUncheckedUpdateManyWithoutUserNestedInput
    savedSearches?: BusquedaGuardadaUncheckedUpdateManyWithoutUserNestedInput
>>>>>>> Stashed changes
  }

  export type InmuebleUpsertWithoutFavoritesInput = {
    update: XOR<InmuebleUpdateWithoutFavoritesInput, InmuebleUncheckedUpdateWithoutFavoritesInput>
    create: XOR<InmuebleCreateWithoutFavoritesInput, InmuebleUncheckedCreateWithoutFavoritesInput>
    where?: InmuebleWhereInput
  }

  export type InmuebleUpdateToOneWithWhereWithoutFavoritesInput = {
    where?: InmuebleWhereInput
    data: XOR<InmuebleUpdateWithoutFavoritesInput, InmuebleUncheckedUpdateWithoutFavoritesInput>
  }

  export type InmuebleUpdateWithoutFavoritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableIntFieldUpdateOperationsInput | number | null
    areaM2?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
<<<<<<< Updated upstream
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tipoOperacion?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fotosInmueble?: FotoInmuebleUpdateManyWithoutInmuebleNestedInput
    propietario?: UsuarioUpdateOneRequiredWithoutInmueblesPropietarioNestedInput
    intereses?: InteresUpdateManyWithoutInmuebleNestedInput
    resenas?: ResenaUpdateManyWithoutInmuebleNestedInput
=======
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    operationType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UsuarioUpdateOneRequiredWithoutOwnedPropertiesNestedInput
    interests?: InteresUpdateManyWithoutPropertyNestedInput
    propertyPhotos?: FotoInmuebleUpdateManyWithoutPropertyNestedInput
    reviews?: ResenaUpdateManyWithoutPropertyNestedInput
>>>>>>> Stashed changes
  }

  export type InmuebleUncheckedUpdateWithoutFavoritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableIntFieldUpdateOperationsInput | number | null
    areaM2?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
<<<<<<< Updated upstream
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tipoOperacion?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fotosInmueble?: FotoInmuebleUncheckedUpdateManyWithoutInmuebleNestedInput
    intereses?: InteresUncheckedUpdateManyWithoutInmuebleNestedInput
    resenas?: ResenaUncheckedUpdateManyWithoutInmuebleNestedInput
  }

  export type UsuarioUpsertWithoutFavoritosInput = {
    update: XOR<UsuarioUpdateWithoutFavoritosInput, UsuarioUncheckedUpdateWithoutFavoritosInput>
    create: XOR<UsuarioCreateWithoutFavoritosInput, UsuarioUncheckedCreateWithoutFavoritosInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutFavoritosInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutFavoritosInput, UsuarioUncheckedUpdateWithoutFavoritosInput>
  }

  export type UsuarioUpdateWithoutFavoritosInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    fotoPerfil?: NullableStringFieldUpdateOperationsInput | string | null
    correoElectronico?: StringFieldUpdateOperationsInput | string
    contrasenaHash?: NullableStringFieldUpdateOperationsInput | string | null
    nombreCompleto?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: StringFieldUpdateOperationsInput | string
    estadoVerificacion?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    busquedasGuardadas?: BusquedaGuardadaUpdateManyWithoutUsuarioNestedInput
    inmueblesPropietario?: InmuebleUpdateManyWithoutPropietarioNestedInput
    Intereses?: InteresUpdateManyWithoutUsuarioNestedInput
    mensajesEmitidos?: MensajeUpdateManyWithoutEmisorNestedInput
    mensajesRecibidos?: MensajeUpdateManyWithoutReceptorNestedInput
    notificaciones?: NotificacionUpdateManyWithoutUsuarioNestedInput
    reportes?: ReporteUpdateManyWithoutUsuarioNestedInput
    resenas?: ResenaUpdateManyWithoutUsuarioNestedInput
    preferences?: UserPreferenceUpdateOneWithoutUserNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutFavoritosInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    fotoPerfil?: NullableStringFieldUpdateOperationsInput | string | null
    correoElectronico?: StringFieldUpdateOperationsInput | string
    contrasenaHash?: NullableStringFieldUpdateOperationsInput | string | null
    nombreCompleto?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: StringFieldUpdateOperationsInput | string
    estadoVerificacion?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    busquedasGuardadas?: BusquedaGuardadaUncheckedUpdateManyWithoutUsuarioNestedInput
    inmueblesPropietario?: InmuebleUncheckedUpdateManyWithoutPropietarioNestedInput
    Intereses?: InteresUncheckedUpdateManyWithoutUsuarioNestedInput
    mensajesEmitidos?: MensajeUncheckedUpdateManyWithoutEmisorNestedInput
    mensajesRecibidos?: MensajeUncheckedUpdateManyWithoutReceptorNestedInput
    notificaciones?: NotificacionUncheckedUpdateManyWithoutUsuarioNestedInput
    reportes?: ReporteUncheckedUpdateManyWithoutUsuarioNestedInput
    resenas?: ResenaUncheckedUpdateManyWithoutUsuarioNestedInput
    preferences?: UserPreferenceUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UsuarioCreateWithoutBusquedasGuardadasInput = {
=======
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    operationType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    interests?: InteresUncheckedUpdateManyWithoutPropertyNestedInput
    propertyPhotos?: FotoInmuebleUncheckedUpdateManyWithoutPropertyNestedInput
    reviews?: ResenaUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type UsuarioCreateWithoutSavedSearchesInput = {
>>>>>>> Stashed changes
    id?: string
    googleId?: string | null
    profilePhoto?: string | null
    email: string
    passwordHash?: string | null
    fullName?: string | null
    phone?: string | null
    role?: string
    verificationStatus?: string
    refreshToken?: string | null
<<<<<<< Updated upstream
    fechaCreacion?: Date | string
    fechaActualizacion?: Date | string
    favoritos?: FavoritoCreateNestedManyWithoutUsuarioInput
    inmueblesPropietario?: InmuebleCreateNestedManyWithoutPropietarioInput
    Intereses?: InteresCreateNestedManyWithoutUsuarioInput
    mensajesEmitidos?: MensajeCreateNestedManyWithoutEmisorInput
    mensajesRecibidos?: MensajeCreateNestedManyWithoutReceptorInput
    notificaciones?: NotificacionCreateNestedManyWithoutUsuarioInput
    reportes?: ReporteCreateNestedManyWithoutUsuarioInput
    resenas?: ResenaCreateNestedManyWithoutUsuarioInput
    preferences?: UserPreferenceCreateNestedOneWithoutUserInput
=======
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedProperties?: InmuebleCreateNestedManyWithoutOwnerInput
    interests?: InteresCreateNestedManyWithoutUserInput
    sentMessages?: MensajeCreateNestedManyWithoutSenderInput
    receivedMessages?: MensajeCreateNestedManyWithoutReceiverInput
    reviews?: ResenaCreateNestedManyWithoutUserInput
    notifications?: NotificacionCreateNestedManyWithoutUserInput
    reports?: ReporteCreateNestedManyWithoutUserInput
    favorites?: FavoritoCreateNestedManyWithoutUserInput
>>>>>>> Stashed changes
  }

  export type UsuarioUncheckedCreateWithoutSavedSearchesInput = {
    id?: string
    googleId?: string | null
    profilePhoto?: string | null
    email: string
    passwordHash?: string | null
    fullName?: string | null
    phone?: string | null
    role?: string
    verificationStatus?: string
    refreshToken?: string | null
<<<<<<< Updated upstream
    fechaCreacion?: Date | string
    fechaActualizacion?: Date | string
    favoritos?: FavoritoUncheckedCreateNestedManyWithoutUsuarioInput
    inmueblesPropietario?: InmuebleUncheckedCreateNestedManyWithoutPropietarioInput
    Intereses?: InteresUncheckedCreateNestedManyWithoutUsuarioInput
    mensajesEmitidos?: MensajeUncheckedCreateNestedManyWithoutEmisorInput
    mensajesRecibidos?: MensajeUncheckedCreateNestedManyWithoutReceptorInput
    notificaciones?: NotificacionUncheckedCreateNestedManyWithoutUsuarioInput
    reportes?: ReporteUncheckedCreateNestedManyWithoutUsuarioInput
    resenas?: ResenaUncheckedCreateNestedManyWithoutUsuarioInput
    preferences?: UserPreferenceUncheckedCreateNestedOneWithoutUserInput
=======
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedProperties?: InmuebleUncheckedCreateNestedManyWithoutOwnerInput
    interests?: InteresUncheckedCreateNestedManyWithoutUserInput
    sentMessages?: MensajeUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MensajeUncheckedCreateNestedManyWithoutReceiverInput
    reviews?: ResenaUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificacionUncheckedCreateNestedManyWithoutUserInput
    reports?: ReporteUncheckedCreateNestedManyWithoutUserInput
    favorites?: FavoritoUncheckedCreateNestedManyWithoutUserInput
>>>>>>> Stashed changes
  }

  export type UsuarioCreateOrConnectWithoutSavedSearchesInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutSavedSearchesInput, UsuarioUncheckedCreateWithoutSavedSearchesInput>
  }

  export type UsuarioUpsertWithoutSavedSearchesInput = {
    update: XOR<UsuarioUpdateWithoutSavedSearchesInput, UsuarioUncheckedUpdateWithoutSavedSearchesInput>
    create: XOR<UsuarioCreateWithoutSavedSearchesInput, UsuarioUncheckedCreateWithoutSavedSearchesInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutSavedSearchesInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutSavedSearchesInput, UsuarioUncheckedUpdateWithoutSavedSearchesInput>
  }

  export type UsuarioUpdateWithoutSavedSearchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    verificationStatus?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
<<<<<<< Updated upstream
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    favoritos?: FavoritoUpdateManyWithoutUsuarioNestedInput
    inmueblesPropietario?: InmuebleUpdateManyWithoutPropietarioNestedInput
    Intereses?: InteresUpdateManyWithoutUsuarioNestedInput
    mensajesEmitidos?: MensajeUpdateManyWithoutEmisorNestedInput
    mensajesRecibidos?: MensajeUpdateManyWithoutReceptorNestedInput
    notificaciones?: NotificacionUpdateManyWithoutUsuarioNestedInput
    reportes?: ReporteUpdateManyWithoutUsuarioNestedInput
    resenas?: ResenaUpdateManyWithoutUsuarioNestedInput
    preferences?: UserPreferenceUpdateOneWithoutUserNestedInput
=======
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedProperties?: InmuebleUpdateManyWithoutOwnerNestedInput
    interests?: InteresUpdateManyWithoutUserNestedInput
    sentMessages?: MensajeUpdateManyWithoutSenderNestedInput
    receivedMessages?: MensajeUpdateManyWithoutReceiverNestedInput
    reviews?: ResenaUpdateManyWithoutUserNestedInput
    notifications?: NotificacionUpdateManyWithoutUserNestedInput
    reports?: ReporteUpdateManyWithoutUserNestedInput
    favorites?: FavoritoUpdateManyWithoutUserNestedInput
>>>>>>> Stashed changes
  }

  export type UsuarioUncheckedUpdateWithoutSavedSearchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    verificationStatus?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
<<<<<<< Updated upstream
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    favoritos?: FavoritoUncheckedUpdateManyWithoutUsuarioNestedInput
    inmueblesPropietario?: InmuebleUncheckedUpdateManyWithoutPropietarioNestedInput
    Intereses?: InteresUncheckedUpdateManyWithoutUsuarioNestedInput
    mensajesEmitidos?: MensajeUncheckedUpdateManyWithoutEmisorNestedInput
    mensajesRecibidos?: MensajeUncheckedUpdateManyWithoutReceptorNestedInput
    notificaciones?: NotificacionUncheckedUpdateManyWithoutUsuarioNestedInput
    reportes?: ReporteUncheckedUpdateManyWithoutUsuarioNestedInput
    resenas?: ResenaUncheckedUpdateManyWithoutUsuarioNestedInput
    preferences?: UserPreferenceUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UsuarioCreateWithoutPreferencesInput = {
    id?: string
    googleId?: string | null
    fotoPerfil?: string | null
    correoElectronico: string
    contrasenaHash?: string | null
    nombreCompleto?: string | null
    telefono?: string | null
    rol?: string
    estadoVerificacion?: string
    refreshToken?: string | null
    fechaCreacion?: Date | string
    fechaActualizacion?: Date | string
    busquedasGuardadas?: BusquedaGuardadaCreateNestedManyWithoutUsuarioInput
    favoritos?: FavoritoCreateNestedManyWithoutUsuarioInput
    inmueblesPropietario?: InmuebleCreateNestedManyWithoutPropietarioInput
    Intereses?: InteresCreateNestedManyWithoutUsuarioInput
    mensajesEmitidos?: MensajeCreateNestedManyWithoutEmisorInput
    mensajesRecibidos?: MensajeCreateNestedManyWithoutReceptorInput
    notificaciones?: NotificacionCreateNestedManyWithoutUsuarioInput
    reportes?: ReporteCreateNestedManyWithoutUsuarioInput
    resenas?: ResenaCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutPreferencesInput = {
    id?: string
    googleId?: string | null
    fotoPerfil?: string | null
    correoElectronico: string
    contrasenaHash?: string | null
    nombreCompleto?: string | null
    telefono?: string | null
    rol?: string
    estadoVerificacion?: string
    refreshToken?: string | null
    fechaCreacion?: Date | string
    fechaActualizacion?: Date | string
    busquedasGuardadas?: BusquedaGuardadaUncheckedCreateNestedManyWithoutUsuarioInput
    favoritos?: FavoritoUncheckedCreateNestedManyWithoutUsuarioInput
    inmueblesPropietario?: InmuebleUncheckedCreateNestedManyWithoutPropietarioInput
    Intereses?: InteresUncheckedCreateNestedManyWithoutUsuarioInput
    mensajesEmitidos?: MensajeUncheckedCreateNestedManyWithoutEmisorInput
    mensajesRecibidos?: MensajeUncheckedCreateNestedManyWithoutReceptorInput
    notificaciones?: NotificacionUncheckedCreateNestedManyWithoutUsuarioInput
    reportes?: ReporteUncheckedCreateNestedManyWithoutUsuarioInput
    resenas?: ResenaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutPreferencesInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutPreferencesInput, UsuarioUncheckedCreateWithoutPreferencesInput>
  }

  export type UsuarioUpsertWithoutPreferencesInput = {
    update: XOR<UsuarioUpdateWithoutPreferencesInput, UsuarioUncheckedUpdateWithoutPreferencesInput>
    create: XOR<UsuarioCreateWithoutPreferencesInput, UsuarioUncheckedCreateWithoutPreferencesInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutPreferencesInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutPreferencesInput, UsuarioUncheckedUpdateWithoutPreferencesInput>
  }

  export type UsuarioUpdateWithoutPreferencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    fotoPerfil?: NullableStringFieldUpdateOperationsInput | string | null
    correoElectronico?: StringFieldUpdateOperationsInput | string
    contrasenaHash?: NullableStringFieldUpdateOperationsInput | string | null
    nombreCompleto?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: StringFieldUpdateOperationsInput | string
    estadoVerificacion?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    busquedasGuardadas?: BusquedaGuardadaUpdateManyWithoutUsuarioNestedInput
    favoritos?: FavoritoUpdateManyWithoutUsuarioNestedInput
    inmueblesPropietario?: InmuebleUpdateManyWithoutPropietarioNestedInput
    Intereses?: InteresUpdateManyWithoutUsuarioNestedInput
    mensajesEmitidos?: MensajeUpdateManyWithoutEmisorNestedInput
    mensajesRecibidos?: MensajeUpdateManyWithoutReceptorNestedInput
    notificaciones?: NotificacionUpdateManyWithoutUsuarioNestedInput
    reportes?: ReporteUpdateManyWithoutUsuarioNestedInput
    resenas?: ResenaUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutPreferencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    fotoPerfil?: NullableStringFieldUpdateOperationsInput | string | null
    correoElectronico?: StringFieldUpdateOperationsInput | string
    contrasenaHash?: NullableStringFieldUpdateOperationsInput | string | null
    nombreCompleto?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: StringFieldUpdateOperationsInput | string
    estadoVerificacion?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    busquedasGuardadas?: BusquedaGuardadaUncheckedUpdateManyWithoutUsuarioNestedInput
    favoritos?: FavoritoUncheckedUpdateManyWithoutUsuarioNestedInput
    inmueblesPropietario?: InmuebleUncheckedUpdateManyWithoutPropietarioNestedInput
    Intereses?: InteresUncheckedUpdateManyWithoutUsuarioNestedInput
    mensajesEmitidos?: MensajeUncheckedUpdateManyWithoutEmisorNestedInput
    mensajesRecibidos?: MensajeUncheckedUpdateManyWithoutReceptorNestedInput
    notificaciones?: NotificacionUncheckedUpdateManyWithoutUsuarioNestedInput
    reportes?: ReporteUncheckedUpdateManyWithoutUsuarioNestedInput
    resenas?: ResenaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type BusquedaGuardadaCreateManyUsuarioInput = {
    id?: string
    parametrosBusqueda: JsonNullValueInput | InputJsonValue
    nombreBusqueda?: string | null
    fechaCreacion?: Date | string
  }

  export type FavoritoCreateManyUsuarioInput = {
    id?: string
    inmuebleId: string
    fechaCreacion?: Date | string
=======
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedProperties?: InmuebleUncheckedUpdateManyWithoutOwnerNestedInput
    interests?: InteresUncheckedUpdateManyWithoutUserNestedInput
    sentMessages?: MensajeUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MensajeUncheckedUpdateManyWithoutReceiverNestedInput
    reviews?: ResenaUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificacionUncheckedUpdateManyWithoutUserNestedInput
    reports?: ReporteUncheckedUpdateManyWithoutUserNestedInput
    favorites?: FavoritoUncheckedUpdateManyWithoutUserNestedInput
>>>>>>> Stashed changes
  }

  export type InmuebleCreateManyOwnerInput = {
    id?: string
    title: string
    description?: string | null
    address?: string | null
    city?: string
    bedrooms?: number | null
    bathrooms?: number | null
    areaM2?: Decimal | DecimalJsLike | number | string | null
    price: Decimal | DecimalJsLike | number | string
    operationType: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InteresCreateManyUserInput = {
    id?: string
    propertyId: string
    message?: string | null
    status?: string
    createdAt?: Date | string
  }

  export type MensajeCreateManySenderInput = {
    id?: bigint | number
    receiverId: string
    interestId?: string | null
    content: string
    read?: boolean
    createdAt?: Date | string
  }

  export type MensajeCreateManyReceiverInput = {
    id?: bigint | number
    senderId: string
    interestId?: string | null
    content: string
    read?: boolean
    createdAt?: Date | string
  }

<<<<<<< Updated upstream
  export type NotificacionCreateManyUsuarioInput = {
=======
  export type ResenaCreateManyUserInput = {
    id?: bigint | number
    propertyId: string
    content: string
    rating: number
    createdAt?: Date | string
  }

  export type NotificacionCreateManyUserInput = {
>>>>>>> Stashed changes
    id?: string
    type: string
    title: string
    content: string
    read?: boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ReporteCreateManyUserInput = {
    id?: string
    type: string
    parameters?: NullableJsonNullValueInput | InputJsonValue
    fileUrl?: string | null
    createdAt?: Date | string
  }

<<<<<<< Updated upstream
  export type ResenaCreateManyUsuarioInput = {
    id?: bigint | number
    inmuebleId: string
    contenido: string
    calificacion: number
    fechaCreacion?: Date | string
  }

  export type BusquedaGuardadaUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    parametrosBusqueda?: JsonNullValueInput | InputJsonValue
    nombreBusqueda?: NullableStringFieldUpdateOperationsInput | string | null
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusquedaGuardadaUncheckedUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    parametrosBusqueda?: JsonNullValueInput | InputJsonValue
    nombreBusqueda?: NullableStringFieldUpdateOperationsInput | string | null
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusquedaGuardadaUncheckedUpdateManyWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    parametrosBusqueda?: JsonNullValueInput | InputJsonValue
    nombreBusqueda?: NullableStringFieldUpdateOperationsInput | string | null
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoritoUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    inmueble?: InmuebleUpdateOneRequiredWithoutFavoritosNestedInput
  }

  export type FavoritoUncheckedUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    inmuebleId?: StringFieldUpdateOperationsInput | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoritoUncheckedUpdateManyWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    inmuebleId?: StringFieldUpdateOperationsInput | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
=======
  export type FavoritoCreateManyUserInput = {
    id?: string
    propertyId: string
    createdAt?: Date | string
  }

  export type BusquedaGuardadaCreateManyUserInput = {
    id?: string
    searchParameters: JsonNullValueInput | InputJsonValue
    searchName?: string | null
    createdAt?: Date | string
>>>>>>> Stashed changes
  }

  export type InmuebleUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableIntFieldUpdateOperationsInput | number | null
    areaM2?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
<<<<<<< Updated upstream
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tipoOperacion?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    favoritos?: FavoritoUpdateManyWithoutInmuebleNestedInput
    fotosInmueble?: FotoInmuebleUpdateManyWithoutInmuebleNestedInput
    intereses?: InteresUpdateManyWithoutInmuebleNestedInput
    resenas?: ResenaUpdateManyWithoutInmuebleNestedInput
=======
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    operationType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    interests?: InteresUpdateManyWithoutPropertyNestedInput
    propertyPhotos?: FotoInmuebleUpdateManyWithoutPropertyNestedInput
    reviews?: ResenaUpdateManyWithoutPropertyNestedInput
    favorites?: FavoritoUpdateManyWithoutPropertyNestedInput
>>>>>>> Stashed changes
  }

  export type InmuebleUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableIntFieldUpdateOperationsInput | number | null
    areaM2?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
<<<<<<< Updated upstream
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tipoOperacion?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    favoritos?: FavoritoUncheckedUpdateManyWithoutInmuebleNestedInput
    fotosInmueble?: FotoInmuebleUncheckedUpdateManyWithoutInmuebleNestedInput
    intereses?: InteresUncheckedUpdateManyWithoutInmuebleNestedInput
    resenas?: ResenaUncheckedUpdateManyWithoutInmuebleNestedInput
=======
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    operationType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    interests?: InteresUncheckedUpdateManyWithoutPropertyNestedInput
    propertyPhotos?: FotoInmuebleUncheckedUpdateManyWithoutPropertyNestedInput
    reviews?: ResenaUncheckedUpdateManyWithoutPropertyNestedInput
    favorites?: FavoritoUncheckedUpdateManyWithoutPropertyNestedInput
>>>>>>> Stashed changes
  }

  export type InmuebleUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableIntFieldUpdateOperationsInput | number | null
    areaM2?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    operationType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InteresUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: InmuebleUpdateOneRequiredWithoutInterestsNestedInput
    messages?: MensajeUpdateManyWithoutInterestNestedInput
  }

  export type InteresUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MensajeUncheckedUpdateManyWithoutInterestNestedInput
  }

  export type InteresUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MensajeUpdateWithoutSenderInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
<<<<<<< Updated upstream
    contenido?: StringFieldUpdateOperationsInput | string
    leido?: BoolFieldUpdateOperationsInput | boolean
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    interes?: InteresUpdateOneWithoutMensajesNestedInput
    receptor?: UsuarioUpdateOneRequiredWithoutMensajesRecibidosNestedInput
=======
    content?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receiver?: UsuarioUpdateOneRequiredWithoutReceivedMessagesNestedInput
    interest?: InteresUpdateOneWithoutMessagesNestedInput
>>>>>>> Stashed changes
  }

  export type MensajeUncheckedUpdateWithoutSenderInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    receiverId?: StringFieldUpdateOperationsInput | string
    interestId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MensajeUncheckedUpdateManyWithoutSenderInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    receiverId?: StringFieldUpdateOperationsInput | string
    interestId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MensajeUpdateWithoutReceiverInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UsuarioUpdateOneRequiredWithoutSentMessagesNestedInput
    interest?: InteresUpdateOneWithoutMessagesNestedInput
  }

  export type MensajeUncheckedUpdateWithoutReceiverInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    senderId?: StringFieldUpdateOperationsInput | string
    interestId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MensajeUncheckedUpdateManyWithoutReceiverInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    senderId?: StringFieldUpdateOperationsInput | string
    interestId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

<<<<<<< Updated upstream
  export type NotificacionUpdateWithoutUsuarioInput = {
=======
  export type ResenaUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: InmuebleUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ResenaUncheckedUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    propertyId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResenaUncheckedUpdateManyWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    propertyId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificacionUpdateWithoutUserInput = {
>>>>>>> Stashed changes
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificacionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificacionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReporteUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    parameters?: NullableJsonNullValueInput | InputJsonValue
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReporteUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    parameters?: NullableJsonNullValueInput | InputJsonValue
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReporteUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    parameters?: NullableJsonNullValueInput | InputJsonValue
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

<<<<<<< Updated upstream
  export type ResenaUpdateWithoutUsuarioInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    contenido?: StringFieldUpdateOperationsInput | string
    calificacion?: IntFieldUpdateOperationsInput | number
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    inmueble?: InmuebleUpdateOneRequiredWithoutResenasNestedInput
  }

  export type ResenaUncheckedUpdateWithoutUsuarioInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    inmuebleId?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    calificacion?: IntFieldUpdateOperationsInput | number
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResenaUncheckedUpdateManyWithoutUsuarioInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    inmuebleId?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    calificacion?: IntFieldUpdateOperationsInput | number
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoritoCreateManyInmuebleInput = {
    id?: string
    usuarioId: string
    fechaCreacion?: Date | string
=======
  export type FavoritoUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: InmuebleUpdateOneRequiredWithoutFavoritesNestedInput
  }

  export type FavoritoUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoritoUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusquedaGuardadaUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    searchParameters?: JsonNullValueInput | InputJsonValue
    searchName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusquedaGuardadaUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    searchParameters?: JsonNullValueInput | InputJsonValue
    searchName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusquedaGuardadaUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    searchParameters?: JsonNullValueInput | InputJsonValue
    searchName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InteresCreateManyPropertyInput = {
    id?: string
    userId: string
    message?: string | null
    status?: string
    createdAt?: Date | string
>>>>>>> Stashed changes
  }

  export type FotoInmuebleCreateManyPropertyInput = {
    id?: bigint | number
    url: string
    order?: number | null
    createdAt?: Date | string
  }

<<<<<<< Updated upstream
  export type InteresCreateManyInmuebleInput = {
    id?: string
    usuarioId: string
    mensaje?: string | null
    estado?: string
    fechaCreacion?: Date | string
  }

  export type ResenaCreateManyInmuebleInput = {
=======
  export type ResenaCreateManyPropertyInput = {
>>>>>>> Stashed changes
    id?: bigint | number
    userId: string
    content: string
    rating: number
    createdAt?: Date | string
  }

<<<<<<< Updated upstream
  export type FavoritoUpdateWithoutInmuebleInput = {
    id?: StringFieldUpdateOperationsInput | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutFavoritosNestedInput
  }

  export type FavoritoUncheckedUpdateWithoutInmuebleInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoritoUncheckedUpdateManyWithoutInmuebleInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FotoInmuebleUpdateWithoutInmuebleInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    url?: StringFieldUpdateOperationsInput | string
    orden?: NullableIntFieldUpdateOperationsInput | number | null
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FotoInmuebleUncheckedUpdateWithoutInmuebleInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    url?: StringFieldUpdateOperationsInput | string
    orden?: NullableIntFieldUpdateOperationsInput | number | null
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FotoInmuebleUncheckedUpdateManyWithoutInmuebleInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    url?: StringFieldUpdateOperationsInput | string
    orden?: NullableIntFieldUpdateOperationsInput | number | null
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
=======
  export type FavoritoCreateManyPropertyInput = {
    id?: string
    userId: string
    createdAt?: Date | string
>>>>>>> Stashed changes
  }

  export type InteresUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsuarioUpdateOneRequiredWithoutInterestsNestedInput
    messages?: MensajeUpdateManyWithoutInterestNestedInput
  }

  export type InteresUncheckedUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MensajeUncheckedUpdateManyWithoutInterestNestedInput
  }

  export type InteresUncheckedUpdateManyWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

<<<<<<< Updated upstream
  export type ResenaUpdateWithoutInmuebleInput = {
=======
  export type FotoInmuebleUpdateWithoutPropertyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    url?: StringFieldUpdateOperationsInput | string
    order?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FotoInmuebleUncheckedUpdateWithoutPropertyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    url?: StringFieldUpdateOperationsInput | string
    order?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FotoInmuebleUncheckedUpdateManyWithoutPropertyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    url?: StringFieldUpdateOperationsInput | string
    order?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResenaUpdateWithoutPropertyInput = {
>>>>>>> Stashed changes
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsuarioUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ResenaUncheckedUpdateWithoutPropertyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResenaUncheckedUpdateManyWithoutPropertyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

<<<<<<< Updated upstream
  export type MensajeCreateManyInteresInput = {
=======
  export type FavoritoUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsuarioUpdateOneRequiredWithoutFavoritesNestedInput
  }

  export type FavoritoUncheckedUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoritoUncheckedUpdateManyWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MensajeCreateManyInterestInput = {
>>>>>>> Stashed changes
    id?: bigint | number
    senderId: string
    receiverId: string
    content: string
    read?: boolean
    createdAt?: Date | string
  }

  export type MensajeUpdateWithoutInterestInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UsuarioUpdateOneRequiredWithoutSentMessagesNestedInput
    receiver?: UsuarioUpdateOneRequiredWithoutReceivedMessagesNestedInput
  }

  export type MensajeUncheckedUpdateWithoutInterestInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MensajeUncheckedUpdateManyWithoutInterestInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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