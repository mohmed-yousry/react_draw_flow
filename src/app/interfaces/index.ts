import { ReactNode } from "react";

export interface ICity {
  id: string;
  governorate: string;
  country: string;
  name: string;
}

export interface ICategoryType {
  text: string;
  icon: ReactNode;
  id: string;
}

export interface IProduct {
  mainImg: string;
  city: string;
  video?: string;
  images: string[];
  title: string;
  id: string;
  description: string;
  bathRoom: number;
  bedRoom: number;
  price: number;
  area: number;
  type: string;
}
