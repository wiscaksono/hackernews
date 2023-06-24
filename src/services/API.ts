const API_URL: string = import.meta.env.VITE_API_URL;

export interface APIError {
  statusCode: number;
  status: string;
  message: string;
  data: null;
  errors: unknown[];
}

class ApiError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
}

class Api {
  async request<T>(path: string, options: RequestInit = {}): Promise<T> {
    const requestOptions: RequestInit = {
      headers: {
        redirect: "follow",
        ...options.headers,
      },
      ...options,
    };

    const response = await fetch(`${API_URL}${path}`, requestOptions);
    const res: T = await response.json();

    if (!response.ok) {
      throw new ApiError(
        (res as APIError).message || response.statusText,
        response.status
      );
    }

    return res;
  }

  get<T>(path: string): Promise<T> {
    return this.request(path);
  }

  put<T>(path: string, body: object): Promise<T> {
    return this.request(path, { method: "PUT", body: JSON.stringify(body) });
  }

  remove<T>(path: string, body: object): Promise<T> {
    return this.request(path, { method: "DELETE", body: JSON.stringify(body) });
  }

  post<T>(path: string, body: object): Promise<T> {
    return this.request(path, { method: "POST", body: JSON.stringify(body) });
  }
}

export const API = new Api();
