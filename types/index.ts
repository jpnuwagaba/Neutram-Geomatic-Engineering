import { PortableTextBlock } from "sanity";

export type contentType = {
  [x: string]: any;
  name: string,
  serviceImage: {
    alt: string,
    image: string
  },
  serviceIcon: {
    alt: string,
    image: string
  },
  slug: string,
  details: string,  
}