export interface HttpResponse<T> {
  statusCode: number;
  body: T | string;
}

export interface HttpRequest<B> {
  params?: undefined;
  headers?: undefined;
  body: B;
}
