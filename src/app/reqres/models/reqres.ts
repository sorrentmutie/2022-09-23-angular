export interface Person {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface Support {
  url: string;
  text: string;
}

export interface ReqResResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Person[];
  support: Support;
}

export interface ReqResPostRequest {
  name: string,
  job: string
}

export interface ReqResPostResponse extends ReqResPostRequest {
  id: string,
  createdAt: string
}
