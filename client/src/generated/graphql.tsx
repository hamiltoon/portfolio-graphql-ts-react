export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigInt: any;
  Byte: any;
  Currency: any;
  Date: any;
  DateTime: any;
  Duration: any;
  EmailAddress: any;
  GUID: any;
  HSL: any;
  HSLA: any;
  HexColorCode: any;
  Hexadecimal: any;
  IBAN: any;
  IPv4: any;
  IPv6: any;
  ISBN: any;
  ISO8601Duration: any;
  JSON: any;
  JSONObject: any;
  JWT: any;
  Latitude: any;
  LocalDate: any;
  LocalEndTime: any;
  LocalTime: any;
  Long: any;
  Longitude: any;
  MAC: any;
  NegativeFloat: any;
  NegativeInt: any;
  NonEmptyString: any;
  NonNegativeFloat: any;
  NonNegativeInt: any;
  NonPositiveFloat: any;
  NonPositiveInt: any;
  ObjectID: any;
  PhoneNumber: any;
  Port: any;
  PositiveFloat: any;
  PositiveInt: any;
  PostalCode: any;
  RGB: any;
  RGBA: any;
  SafeInt: any;
  Time: any;
  Timestamp: any;
  URL: any;
  USCurrency: any;
  UUID: any;
  UnsignedFloat: any;
  UnsignedInt: any;
  UtcOffset: any;
  Void: any;
};



export type Capacity = {
  __typename?: 'Capacity';
  capacityId: Scalars['ID'];
  preliminaryCapacityDate?: Maybe<Scalars['Date']>;
  capacityDose?: Maybe<Scalars['Int']>;
};

export type Consumption = {
  __typename?: 'Consumption';
  consumptionId: Scalars['ID'];
  consumptionDate?: Maybe<Scalars['Date']>;
  supplier?: Maybe<Supplier>;
  quantityVial?: Maybe<Scalars['Int']>;
};




export type Delivery = {
  __typename?: 'Delivery';
  deliveryId: Scalars['ID'];
  deliveryDate?: Maybe<Scalars['Date']>;
  plannedDeliveryDate?: Maybe<Scalars['Date']>;
  supplier?: Maybe<Supplier>;
  quantityVial?: Maybe<Scalars['Int']>;
  gnlReceiver?: Maybe<Scalars['String']>;
};































export type Order = {
  __typename?: 'Order';
  orderId: Scalars['ID'];
  orderDate?: Maybe<Scalars['DateTime']>;
  desiredDeliveryDate?: Maybe<Scalars['Date']>;
  quantityDose?: Maybe<Scalars['Int']>;
  gnlReceiver?: Maybe<Scalars['String']>;
};






export type Query = {
  __typename?: 'Query';
  listOrders?: Maybe<Array<Maybe<Order>>>;
  listDeliveries?: Maybe<Array<Maybe<Delivery>>>;
  listStockBalances?: Maybe<Array<Maybe<StockBalance>>>;
  listSuppliers?: Maybe<Array<Maybe<Supplier>>>;
  listConsumptions?: Maybe<Array<Maybe<Consumption>>>;
};




export type StockBalance = {
  __typename?: 'StockBalance';
  stockBalanceId: Scalars['ID'];
  date?: Maybe<Scalars['Date']>;
  supplier?: Maybe<Supplier>;
  quantityVial?: Maybe<Scalars['Int']>;
  quantityDose?: Maybe<Scalars['Int']>;
};

export type Supplier = {
  __typename?: 'Supplier';
  supplierId: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
};









